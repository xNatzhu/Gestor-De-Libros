<script setup>
import { ref } from "vue";
const open = ref(false);

const toggleOpen = () => {
  open.value = !open.value;
};
</script>
<template>
  <header class="bg-white border-2 fixed w-[100%] z-10">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex h-16 items-center justify-between"
        :class="{ 'open': open }"
      >
        <div
          class="md:flex md:items-center md:gap-12 logo-menu"
        >
          <a
            class="block text-orange-400 text-uppercase font-bold text-[20px]"
            href="/"
          >
            <h5>Texas</h5>
          </a>
        </div>
        <div class="md:block" :class="{ block: open, hidden: !open }">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm open-menu-mobile">
              <li>
                <router-link
                  class="text-gray-500 transition hover:text-gray-500/75"
                  to="/"
                >
                  Inicio
                </router-link>
              </li>

              <li>
                <router-link
                  class="text-gray-500 transition hover:text-gray-500/75"
                  to="/createbook"
                >
                  Creacion de libros
                </router-link>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Libros leidos
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center gap-4" >
          <div class="sm:flex sm:gap-4 dark-mode">
            <a
              class="rounded-md bg-orange-400 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/"
            >
              Dark mode
            </a>
          </div>
          <div class="block">
            <button
              class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              :class="{ 'hidden': open }"
              @click="toggleOpen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <button
              class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 px-4 hidden"
              :class="{ 'active-menu block': open }"
              @click="toggleOpen"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  color: #fb923c;
  font-weight: 500;
}

body{
    overflow-y: hidden;
}
.open .open-menu-mobile{
    display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
}
.open .dark-mode{
    display: none;
}

.open .active-menu{
    position: absolute;
    z-index: 11;
    top: 20px;
    right: 23px ;
    display: block;
}
/*768 */
.open .logo-menu{
    display: none;
}
</style>
