<template>
    <div class="AlumnosLista">
        <table class="table table-striped">
        <thead>
            <tr>
                <th>Numero de Control</th>
                <th>Nombre</th>
                <th>Carrera</th>
                <th>Estatus</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="alu in alumnos" :key="alu.ncontrol">
                <td>
                   <a href="" @click.prevent="detalleAlum(alu.ncontrol)">{{ alu.ncontrol }}</a> 
                </td>
                <td>{{ alu.nombre }}</td>
                <td>{{ alu.carrera }}</td>
                <td>{{ alu.estatus }}</td>
                <td>
                    <button @click.prevent="editarAlumno(alu.ncontrol)">Editar</button>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js"
import axios from 'axios';

export default{
    name: "AlumnosLista", //Poner el mismo nombre que el nombre del archivo
    components:{},
    data: function(){
        return{
            alumnos:[]
        }
    },
    created(){
        this.traeAlumnos();
    },
    methods:{
        traeAlumnos: async function(){
            let a = [];
            await axios.get(URL_DATOS+"/alumnos")
            .then(function(response){
                console.log(response);
                a = response.data;
            })
            .catch(function(error){
                console.log(error);
            })
            this.alumnos=a;
        },
        detalleAlum: function(ncontrol){
            this.$router.push({name:"detallealum",params:{ncontrol:ncontrol}});
        },
        editarAlumno: function(ncontrol){
            this.$router.push({name:"editaralum",params:{ncontrol:ncontrol}});
        }
    },
}
</script>