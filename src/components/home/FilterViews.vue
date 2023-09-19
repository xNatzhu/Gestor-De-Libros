<script setup>
import { inject, ref, watch } from "vue";

const listBook = inject("listBook");

//filtros por busqueda
const changeValue = ref("");

const changeSearch = () => {
  const localStorageData = JSON.parse(localStorage.getItem("books"));
  const filterBook = localStorageData.filter(book => {
    return book.title.toLowerCase().includes(changeValue.value);
  });
  listBook.value = filterBook;

  selectedButton.value = "";
}

//filtro de libros que se han visto
const selectedButton = ref("");

const viewBook = () => {
  const localStorageData = JSON.parse(localStorage.getItem("books"));
  const filterBook = localStorageData.filter((book) => book.view === true);
  listBook.value = filterBook;
  selectedButton.value = "viewBook";
};

//filtro de libros que no se han visto
const unSeenBook = () => {
  const localStorageData = JSON.parse(localStorage.getItem("books"));
  const filterBook = localStorageData.filter((book) => book.view === false);
  listBook.value = filterBook;
  selectedButton.value = "unSeenBook";
};

//Todos los libros
const viewBookAll = () => {
  const localStorageData = JSON.parse(localStorage.getItem("books"));
  const filterBook = localStorageData.map((book) => book);
  listBook.value = filterBook;
  selectedButton.value = "viewBookAll";
};

watch(listBook, (newListBook) => {
  if (selectedButton.value === "viewBook") {
    viewBook();
  } else if (selectedButton.value === "unSeenBook") {
    unSeenBook();
  } else if (selectedButton.value === "viewBookAll") {
    viewBookAll();
  }
});

</script>


<template>
<section class="heroe-search-background">
    <div
      class="backdrop-brightness-50 bg-black/30 px-4 py-20 mx-auto max-w-7xl"
    >
      <div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
        <h1
          class="mb-4 -mt-3 text-3xl font-extrabold leading-snug tracking-tight text-gray-200 md:text-4xl text-center"
        >
          Explora nuestra colección de libros
        </h1>
        <p
          class="mb-6 text-lg text-gray-400 md:text-xl md:leading-normal text-center"
        >
          ¡Bienvenido a nuestro gestor de libros! Aquí, puedes explorar nuestra
          amplia colección de libros.
        </p>
        <form
          class="w-full md:w-7/12 mx-auto grid grid-cols-1 lg:grid-cols-6pt-1 mb-8"
        >
        <label class="col-auto lg:col-span-4">
  <input
    type="text"
    placeholder="Ingrese el nombre del libro..."
    class="w-full px-3 py-2.5 text-sm rounded-md  border-2  border-gray-200 shadow-sm focus:outline-none focus:ring-0 focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400 "
    :class="{ 'selected-button': selectedButton === 'viewBookSearch' }"
    required
    v-model="changeValue"
    @input="changeSearch"
  />
</label>

        </form>
      </div>
    </div>
  </section>
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
.heroe-search-background {
  background-image: url("https://images.unsplash.com/photo-1603831905217-8c2f485a2e20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1889&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.selected-button {
  color: #fb923c;
}
</style>
