<template>
    <div>
        <h1>Casaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <h2>{{ mensaje }}</h2>
    </div>
</template>

<script>
import ServiceEjemplo from '../services/ServiceEjemplo';
// Para poder utilizar el servicio necesitamos una instancia (variable/objeto) de la clase servicio
const service = new ServiceEjemplo();
    export default {
        name: "HomeComponent",
        data(){
            return {
                mensaje: ""
            }
        }, mounted() {
            this.mensaje = service.getSaludo("Juan")
        }
    }
</script>

<style>

</style>