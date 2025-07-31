const app = Vue.createApp({
    data(){
        return {
            goals:[],
            actuallyGoal:'',
            hideList: true,
        }
    },
    computed:{
        hideLists(){
            return this.hideList ? 'Hide' : 'ShowList'
        }
    },
    methods:{
        addGoal(){
            this.goals.push(this.actuallyGoal);
        },
        deleteGoal(index){
            this.goals.splice(index,1)
        },
        togglehideList(){
            this.hideList = !this.hideList
        }
    }
})

app.mount("#assignment")