<script setup>
import {inject } from 'vue';

//inyect - props 
const listBook = inject("listBook")

// Método para agregar o eliminar vistas de libros
const bookView = (book, index) => {
  let localStorageDataView = JSON.parse(localStorage.getItem("view")) || [];

  if (!localStorageDataView[index]) {

    localStorageDataView[index] = book;
    console.log("Guardando", localStorageDataView);
  } else {
    delete localStorageDataView[index];
    console.log("Eliminando", localStorageDataView);
  }
  // Guardar los datos actualizados en el localStorage
  localStorage.setItem("view", JSON.stringify(localStorageDataView));


};

//metodo de eliminacion de libros
const bookRemove = (index)=>{
    listBook.value.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(listBook) );
}


console.log("probando si entro",listBook);

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
          <tr class="bg-white border-b hover:bg-gray-200" v-for="(book, index) in listBook" :key="index">
            <td class="w-32 p-4">
              <img
                :src="book.image"
                alt= ""
              />
            </td>
            <td class="px-6 py-4 font-semibold text-gray-500">{{book.author }}</td>
            <td class="px-6 py-4 font-semibold text-gray-500">
             {{ book.title }}
            </td>
            <td class="px-6 py-4 font-semibold text-orange-400">
              <button @click.prevent="bookView(book, index)">
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
