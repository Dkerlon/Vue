<template>
    <container>
        <h3>Title</h3>
        <input type="text" v-model="title">
        <h3>Description</h3>
        <textarea name="" id="" rows="3" v-model="description" style="resize: none;"></textarea>
        <h3>Link</h3>
        <input type="text" v-model="link">
        <button @click="addResource">Add Resource</button>
    </container>
    <dialog-alert v-if="!isValidForm">
        <template #header>
            <h2 style="font-size: 19px;">Erro nos campos de texto</h2>
        </template>
        <template #default>
            <p>Insira ao menos 1 caracter em todos os campos</p>
        </template>
        <template #actions>
            <button @click="isValidForm = true">OK</button>
        </template>
    </dialog-alert>
</template>


<script>
import DialogAlert from '../base/DialogAlert.vue'
export default {
    components:{
        'dialog-alert':DialogAlert
    },
    data(){
        return{
            title:'',
            description:'',
            link:'',
            isValidForm: true,
        }
    },
    methods:{
        addResource(){
            if(this.title === '' || this.description === '' || this.link === ''){
                this.isValidForm = false
            }else{
                this.$emit('add-resource',this.title,this.description,this.link)
                this.title = ''
                this.description = ''
                this.link = ''
            }
            
        }
    }
}
</script>
<style>
input, textarea{
    width: 100%;
    margin-top: 8px;
}
h3{
    margin-bottom: 0px;
}

button{
    background-color: purple;
    color: white;
    padding: 20px;
    margin-top: 20px;
    border: none;
}
button:hover{
    cursor: pointer;
}
#btn-dialaog{
    border-radius: 15px;
}
</style>