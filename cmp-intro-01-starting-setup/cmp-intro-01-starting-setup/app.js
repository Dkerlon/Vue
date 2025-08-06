const app = Vue.createApp({
    data(){
        return {

        }
    }
})

app.component('list_contact',{
    template:`
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
    data(){
        return {
            detailsAreVisible: false,
            friend:{
                id:"manuel",
                name:"Manuel Lorenz",
                phone:"21 9898989898",
                email:"manuel@gmail.com"
            }
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
})

app.mount("#app")