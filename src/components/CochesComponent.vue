<template>
  <div class="coches-container">
    <h1>Api Coches</h1>
    <div class="coches-list">
      <div v-for="car in coches" :key="car" class="car-card">
        <h3>{{ car.marca }}  {{ car.modelo }}</h3>
        <p>Driver: {{ car.conductor }}</p>
        <img :src="car.imagen" alt="">
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
// import Global from '../Global';
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches()
// Si necesitamos variables para todo el component y sus metodos se declaran aqui (mounted, methods, create)
// let urlApi = Global.urlCoches
    export default {
        name: "CochesComponent",
        data() {
            return {
                coches: []
            }
        }, mounted() {
            // let request = "webresources/coches";
            // // Las variables declaradas fuera de export no utilizan "this"
            // let url = urlApi + request
            // axios.get(url).then(response => {
            //     this.coches = response.data
            // })

            // Una promesa no es un metodo, es un objeto
            service.getCoches().then(result => {
                this.coches = result
            }); 
        }
    }
</script>

<style scoped>
    /* Colores y variables (scoped) */
    .coches-container {
    padding: 1.5rem;
    font-family: inherit;
    background: linear-gradient(135deg, #f0f7ff 0%, #f7fff4 100%);
    color: #0f1724;
    min-height: 100vh;
    }

    /* Encabezado */
    .coches-container > h1 {
    margin: 0;
    padding-bottom: 0.5rem;
    color: #0b4da2; /* color del título */
    text-shadow: 0 1px 0 rgba(255,255,255,0.5);
    }

    /* Layout de las cards */
    .coches-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-top: 1.25rem;
    align-items: flex-start;
    justify-content: flex-start;
    }

    /* Cards más anchas y altas, con color y sombra */
    .car-card {
    background: linear-gradient(180deg, #ffffff 0%, #fbfeff 100%);
    border-radius: 14px;
    box-shadow: 0 6px 20px rgba(7,34,63,0.10);
    padding: 1rem;
    width: 320px;      /* ancho aumentado */
    min-height: 380px; /* altura mayor */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
    overflow: hidden;
    border: 1px solid rgba(11,77,162,0.06);
    position: relative;
    }

    /* Acento de color lateral (opcional) */
    .car-card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6px;
    background: linear-gradient(180deg, #3b82f6, #06b6d4);
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    }

    /* Imagen más destacada */
    .car-card img {
    width: calc(100% - 1rem);
    height: 300px; /* imagen más alta */
    object-fit: cover;
    border-radius: 10px;
    margin-top: 0.5rem;
    box-shadow: 0 4px 12px rgba(11,77,162,0.06);
    border: 1px solid rgba(11,77,162,0.04);
    }

    /* Texto */
    .car-card h3 {
    margin: 0.25rem 0 0.4rem;
    font-size: 1.05rem;
    line-height: 1.15;
    color: #05243b;
    font-weight: 600;
    }

    .car-card p {
    margin: 0.25rem 0;
    color: #315b7a;
    font-size: 0.95rem;
    }

    /* Pie de card: ejemplo para detalles o botones */
    .car-card .details {
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding-top: 0.75rem;
    }

    /* Hover más visible */
    .car-card:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 14px 36px rgba(7,34,63,0.16);
    border-color: rgba(11,77,162,0.14);
    }

    /* Responsive: dos columnas en tablets, una columna en móviles */
    @media (max-width: 980px) {
    .car-card { width: 48%; }
    }

    @media (max-width: 540px) {
    .car-card { width: 100%; min-height: 320px; }
    }
</style>