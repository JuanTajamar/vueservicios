import { createWebHashHistory, createRouter } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue";
import CustomersComponent from "./components/CustomersComponent.vue";
import EmpleadoDetails from "./components/EmpleadoDetails.vue";
import HomeComponent from "./components/HomeComponent.vue";

const myRoutes =[
    { path: "/", component: HomeComponent },
    { path: "/coches", component: CochesComponent },
    { path: "/customers", component: CustomersComponent },
    { path: "/empleado", component: EmpleadoDetails },
]

const router = createRouter ({
    history: createWebHashHistory,
    routes: myRoutes
})

export default router