const app = Vue.createApp({
    data(){
        return {
            name: "Kerlon",
            age: 19,
            link:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm59LqIrMk0J0UmgpbSUGuYewz0k1CCgw1sptlr3RWC5QigbeLZ0d7wDu3yWYpXeJOlQ_UHJ4X-kQPhbbWiE2AZQj1-Tn4SL1HGG_m_pa9kw'
        }
    },
    methods:{
        random(){
            return Math.random()
        },
        calcute_Age(){
            return parseInt(this.age) + 5;
        }
    }
})

app.mount("#assignment")