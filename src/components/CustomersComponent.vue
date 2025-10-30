<template>
  <div>
    <h1>Customers</h1>
    <form>
        <label>Introduzca una ID: </label>
        <input type="text" v-model="idCustomer"/>
        <button v-on:click.prevent="buscarCustomer()">Buscar Customer</button>
    </form>
    <div v-if="customer">
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>COMPAÑIA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ customer.CustomerID }}</td>
                    <td>{{ customer.ContactName }}</td>
                    <td>{{ customer.CompanyName }}</td>
                </tr>
            </tbody>
        </table>
        <hr>
    </div>
    <div >
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>COMPAÑIA</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in customers" :key="c">
                    <td>{{ c.CustomerID }}</td>
                    <td>{{ c.ContactName }}</td>
                    <td>{{ c.CompanyName }}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';

let urlCustomers = Global.urlCustomers
    export default {
        name: "CustomersComponent",
        data() {
            return {
                customers: [],
                idCustomer: "",
                customer: null
            }
        }, mounted() {
            let request = "/Customers";
            let url = urlCustomers + request;
            axios.get(url).then(response => {
                console.log(response.data.value)
                this.customers = response.data.value
            })
        }, methods: {
            buscarCustomer() {
                // Bucle recorriendo todos los customer y comparamos el "idCustomer" de data con "customerID" del objeto
                for(var customer of this.customers){
                    if(customer.CustomerID.toLowerCase() == this.idCustomer.toLowerCase()) {
                        this.customer = customer    
                    }
                }
            }
        }
    }
</script>

<style>

</style>