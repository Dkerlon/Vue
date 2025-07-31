const app = Vue.createApp({
    data(){
        return {
            first_name:"",
            last_name:"",
            isDark: false
        }
    },
    watch:{
        isDark(){
            alert("Cor mudou");
        }
    },
    computed:{
        fullname(){
            if(this.first_name || this.last_name){
                return this.first_name + " " + this.last_name
            }
        }
    },
    methods:{
        clear(){
            this.first_name = "",
            this.last_name = ""
        },
        changeColor(){
            this.isDark = !this.isDark
        }
    }
})

app.mount("#main")