<script setup>
import { reactive } from "vue";
// Obtiene los valores del formulario - metodo para la limpieza de datos
const state = reactive({
  author: "",
  image: "",
  title: "",
  description: "",
});

const stateClean = ()=>{
  state.author = ""
  state.description = ""
  state.image = ""
  state.title = ""
}

// LocalStorage inicializacion - carga de estado
let bookListLocalStorage = []; 

const localStorageData = localStorage.getItem("books");
if (localStorageData) {
  bookListLocalStorage = JSON.parse(localStorageData);
}

const handleSubmit = () => {
  // Agrega un nuevo libro al arreglo
  bookListLocalStorage.push({
    author: state.author,
    image: state.image,
    title: state.title,
    description: state.description,
  });

  // Guarda la lista actualizada en el localStorage
  const savedBooksLocalStorage  = JSON.stringify(bookListLocalStorage);
  localStorage.setItem("books", savedBooksLocalStorage );
  console.log(bookListLocalStorage);
  stateClean()
};


</script>


<template>
  <div
    class="w-full px-4 py-20 mx-auto bg-white xl:py-32 md:w-3/5 lg:w-4/5 xl:w-3/5 md:px-[50px]"
  >
    <h1
      class="mb-4 -mt-3 text-2xl font-extrabold leading-snug tracking-tight text-gray-600 md:text-4xl text-center"
    >
      ¡Guarda tus libros favoritos en nuestra biblioteca!
    </h1>
    <form class="mt-[45px] space-y-4" @submit.prevent="handleSubmit">
      <label
        for="UserTitle"
        class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400"
      >
        <input
          type="text"
          id="title"
          placeholder="Titulo"
          v-model="state.title"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
        <span
          class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
        >
          Titulo
        </span>
      </label>

      <label
        for="UserAuthor"
        class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400"
      >
        <input
          type="text"
          id="UserAuthor"
          placeholder="Autor"
          v-model="state.author"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span
          class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
        >
          Autor
        </span>
      </label>

      <label
        for="UserDescription"
        class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400"
      >
        <input
          type="text"
          id="UserEmail"
          placeholder="Descripcion"
          v-model="state.description"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span
          class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
        >
          Descripcion
        </span>
      </label>

      <label
        for="UserImage"
        class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400"
      >
        <input
          type="text"
          id="UserImage"
          placeholder="Imagen"
          v-model="state.image"
          class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span
          class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
        >
          Imagen
        </span>
      </label>

      <button
        type="submit"
        class="block w-full rounded-lg bg-orange-400 px-5 py-3 text-sm font-medium text-white"
      >
        Enviar
      </button>
      <div
        class="pt-6 mt-6 text-sm font-medium text-gray-700 border-t border-gray-200"
      ></div>
    </form>
  </div>
</template>

<style scoped></style>
