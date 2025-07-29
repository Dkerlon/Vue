const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the Course and Learn Vue!',
            courseGoalB: 'Learn Vue!',
            courseGoaC: 'Learn Vue!',
            htmlCourse: '<h2>html course</h2>',
            vueLink:''
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalB;
            }else{
                return this.courseGoaC;
            }
        }
    }
});

app.mount('#user-goal');