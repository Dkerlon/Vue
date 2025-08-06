<template>
    <label for="nome">Nome</label>
    <input type="text" id="nome" v-model="nome">    
    <label for="idade">Idade</label>
    <input type="text" id="idade" v-model="idade">
    <button @click="addUsuario">Cadastrar usuário</button>    
</template>

<script>
    export default {
        data(){
            return{
                nome:'',
                idade:''
            }
        },
        emits:{
            'adicionar-usuario':{
                function(id,nome,idade){
                    if(idade && nome && id){
                        return true
                    }else{
                        console.log('Parametros faltando!')
                    }
                }
            }
        },
        methods:{
            addUsuario(){
                if(this.nome && this.idade != ''){
                    const id = this.nome + this.idade
                    this.$emit('adicionar-usuario',id,this.nome,this.idade)

                    this.nome = ''
                    this.idade = ''
                }else{
                    alert('Você deve preencher os dados')
                }
            }
        }
    }
</script>

<style>

</style>