<script setup>
import { inject, ref } from "vue";

//inyect - props
const listBook = inject("listBook");

let localStorageDataView = JSON.parse(localStorage.getItem("view")) || [];
let lisFavorite = ref(localStorageDataView || {});

console.log(localStorageDataView);

if (!Array.isArray(localStorageDataView)) {
  localStorageDataView = [];
}

const bookView = (book, index) => {
  console.log(book);
  const elementoBuscado = localStorageDataView.some((item) => item === book);

  console.log(elementoBuscado);
  if (!elementoBuscado) {
    localStorageDataView.push(book);
    localStorage.setItem("view", JSON.stringify(localStorageDataView));
  } else {;
    localStorageDataView.splice(index, 1);
    localStorage.setItem("view", JSON.stringify(localStorageDataView));
  }

  console.log(lisFavorite);
};

//metodo de eliminacion de libros
const bookRemove = (index) => {
  // Get the books from local storage
  const localStorageData = JSON.parse(localStorage.getItem("books"));
  // Remove the book at the specified index
  localStorageData.splice(index, 1);
  // Save the books back to local storage
  localStorage.setItem("books", JSON.stringify(localStorageData));
  listBook.value = localStorageData
};
</script>

<template>
  <div class="px-4 py-10 bg-gray-100 xl:py-20 md:px-20 lg:px-20 xl:px-40">
    <h2 class="text-[32px] font-bold text-gray-600">Listado de Libros</h2>
    <p>
      Explora nuestra increíble colección de libros y encuentra tus próximas
      aventuras literarias.
    </p>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-[30px]">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-50 uppercase bg-orange-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Image</span>
            </th>
            <th scope="col" class="px-6 py-3">Libros</th>
            <th scope="col" class="px-6 py-3">Autor</th>
            <th scope="col" class="px-6 py-3">Visto</th>
            <th scope="col" class="px-6 py-3">Eliminar</th>
          </tr>
        </thead>

        <!--Contenido-->

        <tbody>
          <tr
            class="bg-white border-b hover:bg-gray-200"
            v-for="(book, index) in listBook"
            :key="index"
          >
            <td class="w-32 p-4">
              <img :src="book.image" alt="" />
            </td>
            <td class="px-6 py-4 font-semibold text-gray-500">
              {{ book.author }}
            </td>
            <td class="px-6 py-4 font-semibold text-gray-500">
              {{ book.title }}
            </td>
            <td class="px-6 py-4 font-semibold text-orange-400">
              <button @click.prevent="bookView(book, index)">
                <p>No mostrar</p>
                Mostrar view
              </button>
            </td>
            <td class="px-6 py-4">
              <a
                @click.prevent="bookRemove(index)"
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >Remove</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
