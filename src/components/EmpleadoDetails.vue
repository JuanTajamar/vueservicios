<template>
  <div>
    <h1>Empleadooooo!!!!</h1>
    <form class="form-control">
        <label class="form-label">Seleccione un empleado</label>
        <select class="form-select" v-model="idEmpleado">
            <option v-for="emp in empleados" :key="emp" :value="emp.idEmpleado">{{ emp.apellido }}</option>
        </select>
        <button v-on:click.prevent="findEmpleado()">Buscar</button>
        <div v-if="empleado">
            <h1>{{ empleado.apellido }}</h1>
        </div>
    </form>

  </div>
</template>

<script>
import axios from 'axios';
import Global from '../Global';

let urlApi = Global.urlEmpleados
    export default {
        name: "EmpleadoDetails",
        data() {
            return {
                empleados: [],
                idEmpleado: 0,
                empleado: null
            }
        }, mounted(){
            let request = "api/empleados"
            let url = urlApi + request
            axios.get(url).then(response => {
                this.empleados = response.data
            })
        }, methods: {
            findEmpleado() {
                let request = "api/empleados/" + this.idEmpleado
                let url = urlApi + request
                axios.get(url).then(response => {
                    this.empleado = response.data
                })
            }
        }
    }
</script>