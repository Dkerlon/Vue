<template>
    <user-data @adicionar-usuario="addUsuario"></user-data>
    <active-user
     v-for="user in users"
     :key="user.id"
     :nome="user.nome"
     :idade="user.idade"
     ></active-user>
</template>

<script>
    export default{
        data(){
            return{
                users:[]
            }
        },
        methods:{
            addUsuario(id,nome,idade){
                this.users.push({id:id,nome:nome,idade:idade})
                console.log(this.users)
            }
        }
    }
</script>

<style>

</style>