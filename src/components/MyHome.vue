<template>
    <div>
        <h1 v-if="show">New component</h1>
        <h1 v-else>Else component</h1>
        <button v-on:click="display" > togglee</button>


    </div>
</template>

<script>

export default {
    name: 'MyHome',
    props: {
        msg: String,
        data: String
    },data(){
        return {
            show:false
        }
    },methods:{
        display(){
            this.show = !this.show
        }
    }
}
</script>
