import { createRouter, createWebHashHistory} from "vue-router"

import CreateBook from "../page/createBook/CreateBook.vue"
import Home from "../page/home/Home.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/createbook', component: CreateBook },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })
  
  export default router