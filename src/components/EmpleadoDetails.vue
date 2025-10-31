<template>
  <div>
    <form>
      <h1>Empleados details</h1>
      <select class="form-control" v-model="idEmpleado">
        <option v-for="emp in empleados" :key="emp" :value="emp.idEmpleado">
          {{ emp.apellido }}
        </option>
      </select>
      <button v-on:click.prevent="findEmpleado()" class="btn btn-primary mt-2">
        Detalles
      </button>
    </form>
    <ul class="list-group mt-4" v-if="empleado != null">
      <li class="list-group-item">ID: {{ empleado.idEmpleado }}</li>
      <li class="list-group-item">Apellido: {{ empleado.apellido }}</li>
      <li class="list-group-item">Oficio: {{ empleado.oficio }}</li>
      <li class="list-group-item">Salario: {{ empleado.salario }}</li>
      <li class="list-group-item">Departamento: {{ empleado.departamento }}</li>
    </ul>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleados";
const service = new ServiceEmpleados();
export default {
  name: "EmpleadoDetails",
  data() {
    return {
      empleados: [],
      idEmpleado: 0,
      empleado: null,
    };
  },
  mounted() {
    service.getEmpleados().then((result) => {
      this.empleados = result;
      if (this.empleados.length > 0) {
        this.idEmpleado = this.empleados[0].idEmpleado;
      }
    });
  },
  methods: {
    findEmpleado() {
      service.getEmpleados(this.idEmpleado).then((result) => {
        this.empleado = result;
      });
    }
  }
};
</script>

<style scoped></style>