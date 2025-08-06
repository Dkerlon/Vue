<template>
  <friend-contact @uma-funcao-qualquer="blablabla"></friend-contact>
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
  methods:{
    blablabla(nome,email,telefpne){
      console.log('blablabla')
    }
  }
};
</script>
