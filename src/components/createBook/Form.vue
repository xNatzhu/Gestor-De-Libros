<script setup>
import { reactive } from "vue";

// Obtiene los valores del formulario - método para la limpieza de datos
// Obtiene los valores del formulario - método para la limpieza de datos
const state = reactive({
  author: "",
  image: "",
  title: "",
  errors: {},
});

const stateClean = () => {
  state.author = "";
  state.image = "";
  state.title = "";
};


// Funciones de validación
const validateAuthor = () => {
  if (state.author.length < 2) {
    state.errors.author = "El nombre del autor debe tener al menos 2 caracteres.";
  } else {
    state.errors.author = null;
  }
};

const validateTitle = () => {
  if (state.title.length < 2) {
    state.errors.title = "El título del libro debe tener al menos 2 caracteres.";
  } else {
    state.errors.title = null;
  }
};

const handleSubmit = () => {
  
  // Valida los datos
  validateAuthor();
  validateTitle();

 // Verifica si hay errores
 if (Object.values(state.errors).some(error => error !== null)) {
    // Hay errores de validación, no continúes con el envío de datos
    return;
  }


  // LocalStorage inicialización - carga de estado
  let bookListLocalStorage = JSON.parse(localStorage.getItem("books"));

  // Verificar si es un arreglo válido
  if (!Array.isArray(bookListLocalStorage)) {
    bookListLocalStorage = [];
  }

  const bookListLength = bookListLocalStorage.length;

  bookListLocalStorage.push({
    author: state.author,
    image: state.image,
    title: state.title,
    id: bookListLength + 1,
    view:false,
  });

  // Guarda la lista
  const savedBooksLocalStorage = JSON.stringify(bookListLocalStorage);
  localStorage.setItem("books", savedBooksLocalStorage);
  console.log(bookListLocalStorage);
  stateClean();
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
  :class="{ 'border-red-500': state.errors.title }"
>
  <input
    type="text"
    id="title"
    placeholder="Titulo"
    v-model="state.title"
    @input="state.errors.title = null"
    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
    required
  />
  <span
    class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Titulo<span class="text-orange-400 font-bold"> *</span>
  </span>
</label>

<div
    v-if="state.errors.title"
    class="start-3 bottom-0 text-xs text-red-500"
  >
    {{ state.errors.title }}
</div>

<label
  for="UserAuthor"
  class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400"
  :class="{ 'border-red-500': state.errors.author }"
>
  <input
    type="text"
    id="UserAuthor"
    placeholder="Autor"
    v-model="state.author"
    @input="state.errors.author = null"
    required
    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Autor<span class="text-orange-400 font-bold"> *</span>
  </span>

</label>

<div
    v-if="state.errors.author"
    class="start-3 bottom-0 text-xs text-red-500"
  >
    {{ state.errors.author }}
  </div>
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

<style scoped>

</style>
