import { createRouter, createWebHashHistory} from "vue-router"

import CreateBook from "../page/createBook/CreateBook.vue"
import Home from "../page/home/Home.vue"
import ViewBook from "../page/viewBook/ViewBook.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/createbook', component: CreateBook },
    { path: '/viewbook', component: ViewBook },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })
  
  export default router