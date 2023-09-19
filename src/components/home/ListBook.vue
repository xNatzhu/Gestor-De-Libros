<script setup>
import { inject } from "vue";

//inyect - props
const listBook = inject("listBook");

//metodo de borrado
const bookRemove = (index) => {
  const localStorageData = JSON.parse(localStorage.getItem("books"));
  localStorageData.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(localStorageData));
  listBook.value = localStorageData;
};

const bookView = (book, index) => {
  const localStorageData = JSON.parse(localStorage.getItem("books"));
  localStorageData[index].view = !book.view;
  localStorage.setItem("books", JSON.stringify(localStorageData));
  listBook.value = localStorageData;
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
      <table class="w-full text-sm text-center text-gray-500">
        <thead class="text-xs text-white uppercase bg-orange-400">
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

        <!-- Contenido -->

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
              {{ book.title }}
            </td>
            <td class="px-6 py-4 font-semibold text-gray-500">
              {{ book.author }}
            </td>
            <td class="px-6 py-4 font-semibold text-orange-400">
              <div class="flex justify-center items-center h-full">
                <button
                  class="flex space-x-3"
                  :class="{ block: book.view, hidden: !book.view }"
                  @click.prevent="bookView(book, index)"
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
                </button>
                <button
                  :class="{ hidden: book.view, block: !book.view }"
                  @click.prevent="bookView(book, index)"
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
                </button>
              </div>
            </td>

            <td class="px-6 py-4">
              <button
                @click.prevent="bookRemove(index)"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
