<script setup>
import Search from '../../components/home/Search.vue';
import ListBook from '../../components/home/ListBook.vue';
import {provide, ref} from "vue"

const localStorageData = JSON.parse(localStorage.getItem("books"));
const dataBook = ref(localStorageData || {});
const storedData = ref(dataBook);

provide("dataBook", dataBook)
provide("listBook",storedData)
</script>

<template>
    <div class="pt-[68px]">
        <Search/>
        <ListBook/>
    </div>
</template>




