<script setup>
import Search from '../../components/home/Search.vue';
import ListBook from '../../components/home/ListBook.vue';
import FilterViews from '../../components/home/FilterViews.vue';
import {provide, ref} from "vue"

const localStorageData = JSON.parse(localStorage.getItem("books"));
console.log("prueba",localStorageData);

const storedData = ref(localStorageData || {});

provide("listBook",storedData)
</script>

<template>
    <div class="pt-[68px]">
        <Search/>
        <FilterViews/>
        <ListBook/>
    </div>
</template>




