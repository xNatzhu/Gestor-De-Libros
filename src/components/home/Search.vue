<script setup>
import { inject } from 'vue';
import { ref } from 'vue';

// props
const listBook = inject("listBook");

const localStorageData = JSON.parse(localStorage.getItem("books"));
const changeValue = ref("");


const changeSearch = () => {
  const filteredData = localStorageData.filter(book => {
    return book.title.toLowerCase().includes(changeValue.value);
  });
  listBook.value = filteredData;
}
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
    required
    v-model="changeValue"
    @input="changeSearch"
  />
</label>

        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heroe-search-background {
  background-image: url("https://images.unsplash.com/photo-1603831905217-8c2f485a2e20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1889&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
