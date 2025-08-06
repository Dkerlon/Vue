<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="results.length == 0 && isLoading == false && !error">Nenhum dado encontrado</p>
      <p v-else-if="error != null">{{ error }}</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data(){
    return{
      results:[],
      isLoading:true,
      error:null
    }
  },
  components: {
    SurveyResult,
  },
  methods:{
    async loadExperiences(){

      try{
          this.isLoading = true
          const response = await fetch('https://vue-http-demo-3a692-default-rtdb.firebaseio.com/surveys.json',{
            method:'GET',
            });

          const data = await response.json()
          let results = []
          for(let id in data){
            results.push({
              id:id,
              name:data[id].name,
              rating:data[id].rating
            })
          }
          this.results = results
          this.isLoading = false

      }catch (error){
        console.log(error)
        this.error = `Request failed at moment, please try again later.`
        this.isLoading = false
      }finally{
        console.log('The end.')
      }
    }
  },
  mounted(){
    this.loadExperiences()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>