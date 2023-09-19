<script setup>
import NavBar from './components/menu/NavBar.vue';
</script>

<template>
    <NavBar/>
    <RouterView />
</template>

<style>
/* setting: body-main-html*/
html{
    scroll-behavior: smooth;
}

/* setting: scroll*/
body::-webkit-scrollbar{
    background: rgb(255 255 255);
    width: 4px;
}

body::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: #FB923C;
}

</style>
