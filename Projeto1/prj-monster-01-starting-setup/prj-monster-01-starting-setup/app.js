const app = Vue.createApp({
    data(){
        return{
            playerHealth :100,
            monsterHealth :100,
            currentRound: 0,
            surrender_: false,
            winner:null,
            logs:[],
        }
    },
    watch:{
       playerHealth(value){
        if(value < 0 && this.monsterHealth < 0){
            this.winner = 'draw'
        }else if(value < 0){
            this.winner = 'monster'
        }
       },
        monsterHealth(value){
        if(value < 0 && this.playerHealth < 0){
            this.winner = 'draw'
        }else if(value < 0){
            this.winner = 'player'
        }
       }  
    },
    methods:{
        randomNumber(num){
            return (Math.floor(Math.random() * 10) +num);
        },
        attackMonster(){
            const random = this.randomNumber(1)
            this.monsterHealth -= random;
            this.attackPlayer();
            this.currentRound++
            this.registerLog('Player','Attack',random)
        },
        attackPlayer(){
            const random = this.randomNumber(1)
            this.playerHealth -= random;
            this.registerLog('Monster','Attack',random)
        },
        attackSpecial(){
            const random = this.randomNumber(10)
            this.currentRound -=3;
            this.monsterHealth -= random;
            this.registerLog('Player','SpecialAttack',random)
        },
        heal(){
            this.currentRound -=3;
            const heal = this.randomNumber(10)
            if(this.playerHealth + heal > 100){
                this.playerHealth = 100;
                return
            }
            this.playerHealth += heal;
            this.attackPlayer()
            this.registerLog('Player','Heal',heal)
        },
        newGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logs = []
        },
        surrender(){
            this.winner = 'monster';
        },
        registerLog(who,what,value){
            this.logs.unshift({who:who,what:what,value:value})
        }
    }
})


app.mount("#game")