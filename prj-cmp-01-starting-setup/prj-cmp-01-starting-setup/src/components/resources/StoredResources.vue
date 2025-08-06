<template>
    <container v-for="resource in resources" :key="resource.title">
        <section>
            <div>
                <h2>{{ resource.title }}</h2>
                <p>{{ resource.description }}</p>
                <a :href="resource.link">View Resources</a>
            </div>
            <div>
                <button @click="$emit('delete-resource',resource.title)">Delete</button>
            </div>
        </section>
    </container>
</template>

<script>
export default{
    props:{
        resources:{
            type: Array,
            required:true
        }
    }
}
</script>

<style scoped>
section{
    display: flex;
    justify-content: space-between;
}
section div h2{
    font-size: 25px;
}
section div button{
    font-size: 14px;
    color: purple;
    border: none;
    background-color: transparent;
}
section div button:hover{
    cursor: pointer;
}
section div a{
    text-decoration: none;
    color: rgb(190, 128, 13);
}
</style>