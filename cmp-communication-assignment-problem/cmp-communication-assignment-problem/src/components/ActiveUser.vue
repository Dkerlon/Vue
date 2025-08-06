<template>
    <h2>{{ nome }}</h2>
    <h3>{{ idade }}</h3>
</template>

<script>
export default{
    props:{
        id:String,
        nome:String,
        idade:String,
    },
    data(){
        return{

        }
    }
}
</script>