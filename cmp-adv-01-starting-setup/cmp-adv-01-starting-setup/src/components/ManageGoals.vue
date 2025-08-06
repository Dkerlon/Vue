<template>
    <h2>Manager Goals</h2>

    <input type="text" ref="goal">
    <button @click="setGoal">Add Goal</button>
    <teleport to="body">
        <erro-alert v-if="!isInputValid">
            <template #error>
                <h2>Input is invalid!</h2>
                <p>Please enter at least a few characters...</p>
                <button @click="isInputValid = !isInputValid">Okay</button>
            </template>
        </erro-alert>
    </teleport>
</template>

<script>
import ErroAlert from './ErroAlert.vue'
export default {
    data(){
        return {
            isInputValid: true,
        }
    },
    components:{
        'erro-alert':ErroAlert
    },
    methods:{
        setGoal(){
            const enteredValue = this.$refs.goal.value
            if(enteredValue === ""){
                this.isInputValid = false
            }
        }
    }
}
</script>