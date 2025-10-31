<template>
    <div class="customer-manager">
        <h1>
            Lista clientes
        </h1>

        <div class="search-container">
            <input type="text" v-model="idCustomer" placeholder="Introduzca ID Cliente" class="form-control"/>
            <button @click="findByID" class="btn btn-primary">Buscar por ID</button>
            <button v-if="selectedCustomer" @click="clearSelection" class="btn btn-outline-secondary">Volver a lista</button>
        </div>

        <table v-if="!selectedCustomer" class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Compañía</th>
                    <th>Contacto</th>
                    <th>País</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.CustomerID" @click="viewDetails(customer)" class="clickable-row">
                    <td>{{ customer.CustomerID }}</td>
                    <td>{{ customer.CompanyName }}</td>
                    <td>{{ customer.ContactName }}</td>
                    <td>{{ customer.Country }}</td>
                    <td><span class="view-more">Ver más →</span></td>
                </tr>
            </tbody>
        </table>

        <table v-if="selectedCustomer" class="table table-hover table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Compañía</th>
                    <th>Contacto</th>
                    <th>País</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="selectedCustomer.CustomerID" @click="viewDetails(selectedCustomer)" class="clickable-row">
                    <td>{{ selectedCustomer.CustomerID }}</td>
                    <td>{{ selectedCustomer.CompanyName }}</td>
                    <td>{{ selectedCustomer.ContactName }}</td>
                    <td>{{ selectedCustomer.Country }}</td>
                    <td><span class="view-more">Ver más →</span></td>
                </tr>
            </tbody>
        </table>

        <div class="modal fade show d-block" v-if="detailCustomer" @click="closeDetails" style="background-color: rgba(0,0,0,0.8);">
            <div class="modal-dialog modal-dialog-centered modal-lg" @click.stop>
                <div class="modal-content bg-dark text-light">
                    <div class="modal-header border-secondary">
                        <h2 class="modal-title fs-4">{{ detailCustomer.CompanyName }}</h2>
                        <button type="button" class="btn-close btn-close-white" @click="closeDetails" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="card bg-secondary text-white h-100">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-warning">ID Cliente:</h6>
                                        <p class="card-text">{{ detailCustomer.CustomerID }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card bg-secondary text-white h-100">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-warning">Compañía:</h6>
                                        <p class="card-text">{{ detailCustomer.CompanyName }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card bg-secondary text-white h-100">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-warning">Contacto:</h6>
                                        <p class="card-text">{{ detailCustomer.ContactName }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card bg-secondary text-white h-100">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-warning">Cargo:</h6>
                                        <p class="card-text">{{ detailCustomer.ContactTitle || '-' }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card bg-secondary text-white h-100">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-warning">Dirección:</h6>
                                        <p class="card-text">{{ detailCustomer.Address || '-' }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card bg-secondary text-white h-100">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-warning">Ciudad:</h6>
                                        <p class="card-text">{{ detailCustomer.City || '-' }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card bg-secondary text-white h-100">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-warning">Región:</h6>
                                        <p class="card-text">{{ detailCustomer.Region || '-' }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card bg-secondary text-white h-100">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-warning">Código Postal:</h6>
                                        <p class="card-text">{{ detailCustomer.PostalCode || '-' }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card bg-secondary text-white h-100">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-warning">País:</h6>
                                        <p class="card-text">{{ detailCustomer.Country }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card bg-secondary text-white h-100">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-warning">Teléfono:</h6>
                                        <p class="card-text">{{ detailCustomer.Phone || '-' }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card bg-secondary text-white h-100">
                                    <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-warning">Fax:</h6>
                                        <p class="card-text">{{ detailCustomer.Fax || '-' }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Global from './../Global.js';
let urlApi = Global.apiCustomers;
export default {
    name: "CustomersComponent",
    data() {
        return {
            customers: [],
            idCustomer: '',
            selectedCustomer: null,
            detailCustomer: null  // Para el modal con todos los detalles
        }
    },
    mounted() {
        this.getCustomers();
    },
    methods: {
        getBase() {
            // Asegura la barra final para concatenar correctamente
            return urlApi && urlApi.endsWith('/') ? urlApi : (urlApi + '/');
        },
        getCustomers() {
            let request = "customers";
            axios.get(this.getBase() + request)
                .then(response => {
                    // OData suele devolver .value para colecciones
                    this.customers = response.data && response.data.value ? response.data.value : response.data;
                })
                .catch(err => {
                    console.error('Error al obtener clientes:', err);
                    // mostrar mensaje breve al usuario si quieres
                });
        },
        findByID() {
            // Si el input está vacío, mostrar todos los clientes
            if (!this.idCustomer || this.idCustomer.trim() === '') {
                this.selectedCustomer = null;
                return;
            }
            
            // Buscar el cliente localmente en el array con .find()
            const id = this.idCustomer.trim().toUpperCase(); // OData IDs suelen ser uppercase
            const found = this.customers.find(customer => 
                customer.CustomerID.toUpperCase() === id
            );
            
            if (found) {
                this.selectedCustomer = found;
            } else {
                this.selectedCustomer = null;
                alert('No se encontró ningún cliente con ese ID');
            }
        },
        clearSelection() {
            this.selectedCustomer = null;
            this.idCustomer = '';
            this.getCustomers();
        },
        viewDetails(customer) {
            // Muestra el modal con todos los detalles del cliente
            this.detailCustomer = customer;
        },
        closeDetails() {
            // Cierra el modal
            this.detailCustomer = null;
        }
    }
}
</script>

<style scoped>

</style>