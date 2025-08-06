<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        props:{
            name:String,
            phoneNumber:String,
            emailAddress:String,
            isFavorite:Boolean
        },
        emits:{
            'uma-funcao-qualquer':{
                
            }
        },
        data(){
            return{
                detailsAreVisible: false,
                friend:{
                    id:'manuel',
                    name:'Manuel Lorenz',
                    phone:'1234 4567 890',
                    email:"manuel@localhost.com"
                }
            }
        },
        methods:{
            toggleDetails(){
                this.detailsAreVisible= !this.detailsAreVisible;
            },
            umMetodoQualquer(){
                this.$emit('uma-funcao-qualquer',this.name,phone,email)
            }
        }
    };
</script>