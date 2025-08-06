<template>
    <container>
        <button @click="toggleComponent('stored-resources')" class="button" :class="{buttonFilled:buttonFilled=='stored-resources'}">Stored Resources</button>
        <button @click="toggleComponent('add-resources')" class="button" :class="{buttonFilled:buttonFilled=='add-resources'}">Add Resources</button>
    </container>
</template>

<script>
export default{
    data(){
        return{
            buttonFilled:'stored-resources'
        }
    },
    methods:{
        toggleComponent(cmp){
            this.buttonFilled = cmp;
            this.$emit('toggle-component',cmp);
        }
    }
}
</script>

<style scoped>
.button{
    padding: 15px;
    margin-right:8px;
    border:none;
    background-color: transparent;
    color: purple;
    font-size: 14px;
}
.button:hover{
    cursor: pointer;
}

.buttonFilled{
    background-color: purple;
    color: white;
}
</style>