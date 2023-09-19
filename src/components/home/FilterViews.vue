<script setup>
import { inject, ref } from 'vue';

const listBook = inject("listBook");
const localStorageData = JSON.parse(localStorage.getItem("books"));

const selectedButton = ref('viewBook'); 

const viewBook = () => {
    const filterBook = localStorageData.filter((book) => book.view === true);
    listBook.value = filterBook;
    selectedButton.value = 'viewBook';
}

const unSeenBook = () => {
    const filterBook = localStorageData.filter((book) => book.view === false);
    listBook.value = filterBook;
    selectedButton.value = 'unSeenBook';
}

const viewBookAll = () => {
    const filterBook = localStorageData;
    listBook.value = filterBook;
    selectedButton.value = 'viewBookAll';
}
</script>

<template>
    <div class="flex justify-center align-middle pt-[20px] pb-[20px]">
        <div class="border-b border-orange-400">
            <nav class="-mb-px flex gap-6" aria-label="Tabs">
                <button
                    @click="viewBook"
                    :class="{ 'selected-button': selectedButton === 'viewBook' }"
                    class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500  hover:text-gray-700 flex-wrap"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                    Libros vistos
                </button>

                <button
                    @click="unSeenBook"
                    :class="{ 'selected-button': selectedButton === 'unSeenBook' }"
                    class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500  hover:text-gray-700 flex-wrap"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                        />
                    </svg>
                    Libros no vistos
                </button>

                <button
                    @click="viewBookAll"
                    :class="{ 'selected-button': selectedButton === 'viewBookAll' }"
                    class="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500  hover:text-gray-700 flex-wrap"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                        />
                    </svg>
                    Todos los libros
                </button>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.selected-button {
    color: #FB923C; 
}
</style>
