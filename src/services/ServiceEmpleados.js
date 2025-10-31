import Global from "../Global"
import axios from "axios";

export default class ServiceEmpleados {
    getEmpleados() {
        return new Promise(function(resolve) {
            let Empleados = []
            let request = "api/empleados"
            let url = Global.urlEmpleados + request;
            axios.get(url).then(response => {
                Empleados = response.data
                resolve(Empleados)
            })
        })
    }

    findEmpleados(id) {
        return new Promise(function(resolve) {
            let Empleado = []
            let request = "api/empleados/" + id
            let url = Global.urlEmpleados + request
            axios.get(url).then(response => {
                Empleado = response.data
                resolve(Empleado)
            })
        })
    }

    getOficios() {
        return new Promise(function(resolve) {
            let Oficios = []
            let request = "api/empleados/oficios"
            let url = Global.urlEmpleados + request;
            axios.get(url).then(response => {
                Oficios = response.data
                resolve(Oficios)
            })
        })
    }

    getEmpleadosOficio(oficio) {
        return new Promise(function(resolve) {
            let Oficio = []
            let request = "api/empleados/empleadosoficio/" + oficio
            let url = Global.urlEmpleados + request;
            axios.get(url).then(response => {
                Oficio = response.data
                resolve(Oficio)
            })
        })
    }
}