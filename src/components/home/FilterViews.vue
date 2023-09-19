<script setup>
import { inject, ref, watch } from "vue";

const listBook = inject("listBook");
const selectedButton = ref("viewBookAll");

//filtro de libros que se han visto
const viewBook = () => {
  const localStorageData = JSON.parse(localStorage.getItem("books"));
  const filterBook = localStorageData.filter((book) => book.view === true);
  listBook.value = filterBook;
  selectedButton.value = "viewBook";
  console.log("ViewBook",filterBook);
  console.log(listBook);

};

//filtro de libros que no se han visto
const unSeenBook = () => {
  const localStorageData = JSON.parse(localStorage.getItem("books"));
  const filterBook = localStorageData.filter((book) => book.view === false);
  listBook.value = filterBook;
  selectedButton.value = "unSeenBook";
  console.log("no view",filterBook);
  console.log(listBook);;
};

//Todos los libros
const viewBookAll = () => {
  const localStorageData = JSON.parse(localStorage.getItem("books"));
  const filterBook = localStorageData.map((book) => book);
  listBook.value = filterBook;
  selectedButton.value = "viewBookAll";
  console.log("Todos",filterBook);
  console.log(listBook);
};

watch(listBook, (newListBook) => {

  console.log("Lista de libros actualizada:", newListBook);
  if (selectedButton.value === "viewBook") {
    console.log("entre en libros leidos");
    viewBook();
  } else if (selectedButton.value === "unSeenBook") {
    console.log("entre en see");
    unSeenBook();
  } else if (selectedButton.value === "viewBookAll") {
    console.log("entre en all");
    viewBookAll();
  }
});


console.log("probando",listBook);

</script>


<template>
  <div
    class="flex flex-col md:flex-row justify-center align-middle pt-[20px] pb-[20px] px-[10px]"
  >
    <div class="border-b border-orange-400">
      <nav class="-mb-px flex flex-wrap gap-6" aria-label="Tabs">
        <button
          @click="viewBookAll"
          :class="{ 'selected-button': selectedButton === 'viewBookAll' }"
          class="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-book"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
            />
          </svg>
          Todos los libros
        </button>


        <button
          @click="viewBook"
          :class="{ 'selected-button': selectedButton === 'viewBook' }"
          class="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path
              d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
            />
          </svg>
          Libros vistos
        </button>

        <button
          @click="unSeenBook"
          :class="{ 'selected-button': selectedButton === 'unSeenBook' }"
          class="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye-slash-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"
            />
            <path
              d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"
            />
          </svg>
          Libros no vistos
        </button>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.selected-button {
  color: #fb923c;
}
</style>
