<script setup>
import ListBook from '../../components/home/ListBook.vue';
import FilterViews from '../../components/home/FilterViews.vue';
import {provide, ref} from "vue"

const localStorageData = JSON.parse(localStorage.getItem("books"));
const storedData = ref(localStorageData || {});

provide("listBook",storedData)
</script>

<template>
    <div class="pt-[68px]">
        <FilterViews/>
        <ListBook/>
    </div>
</template>




