<template>
  <li>
    <h2>{{ name }} {{ Favorite === '1'? '(Favorite)' : ''}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">{{ detailsAreVisible ? 'Hide Favorite' : 'Show Favorite' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAdress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props:{
    name: {
      type:String,
      required:true
    },
    phoneNumber: {
      type:String,
      required:true
    },
    emailAdress: {
      type:String,
      required:true
    },
    isFavorite: {
      type:String,
      default:'0'
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      Favorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      if(this.Favorite === '1'){
        this.Favorite = '0'
      }else{
        this.Favorite = '1'
      }
    }
  },
};
</script>