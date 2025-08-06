<template>
    <the-header></the-header>
    <change-tab @toggle-component="toggleComponent"></change-tab>
    <keep-alive>
        <component :is="activeComponent" v-bind="defineProps(id)" @delete-resource="deleteResource" @add-resource="addResource"></component>
    </keep-alive>
</template>

<script>
import AddResources from './components/resources/AddResources.vue';
import TheHeader from './components/base/TheHeader.vue';
import ChangeTab from './components/resources/ChangeTab.vue';
import StoredResources from './components/resources/StoredResources.vue';

export default {
    components:{
        'the-header':TheHeader,
        'change-tab':ChangeTab,
        'add-resources':AddResources,
        'stored-resources':StoredResources
    },
    data(){
        return {
            resources:[],
            activeComponent:'stored-resources'
        }
    },
    methods:{
        toggleComponent(cmp){
            this.activeComponent = cmp
        },
        defineProps(){
            if(this.activeComponent === 'stored-resources'){
                return {resources:this.resources}
            }else{
                return {}
            }
        },
        deleteResource(id){
            this.resources = this.resources.filter((resource) => resource.title != id)
        },
        addResource(title,description,link){
            this.resources.push({title:title,description:description,link:link})
        }
    }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    height: 100vh;
}
</style>