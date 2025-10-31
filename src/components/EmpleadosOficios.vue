<template>
    <div>
        <h1>Empleados oficios</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emp in empleados" :key="emp">
                    <td>{{ emp.apellido }}</td>
                    <td>{{ emp.oficio }}</td>
                    <td>{{ emp.salario }}</td>
                    <td>{{ emp.departamento }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceEmpleados from '@/services/ServiceEmpleados';
const service = new ServiceEmpleados();
export default {
    name: "EmpleadosOficios",
    data() {
        return {
            empleados: [],
        }
    },

    mounted() {
        service.getEmpleadosOficio(this.$route.params.oficio).then(result => {
            this.empleados = result;
            console.log("Empleados de oficio " + this.$route.params.oficio + " cargados.");
        });
    },
    watch: {
        '$route.params.oficio': function (newVal, oldVal) {
            if (newVal != oldVal) {
                service.getEmpleadosOficio(newVal).then(result => {
                    this.empleados = result;
                    console.log("Empleados de oficio " + newVal + " cargados.");
                });
                console.log("Nuevo valor de oficio: " + newVal);
                console.log("Viejo valor de oficio: " + oldVal);
            }
        }
    }
}
</script>

<style scoped>

</style>