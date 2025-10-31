import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CochesComponent from "./components/CochesComponent.vue";
import EmpleadoDetails from "./components/EmpleadoDetails.vue";
import CustomersComponent from "./components/CustomersComponent.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";

const myRoutes = [
    { path: "/", component: HomeComponent},
    { path: "/coches", component: CochesComponent },
    { path: "/empleados", component: EmpleadoDetails},
    { path: "/customers", component: CustomersComponent},
    { path: "/empleadosoficios/:oficio", component: EmpleadosOficios}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router;