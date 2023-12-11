<template>
    <div class="MateriasLista">
        <table class="table table-striped">
        <thead>
            <tr>
                <th>Clave Materia</th>
                <th>Nombre</th>
                <th>Creditos</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="mat in materias" :key="mat.clavemateria">
                <td>
                    <a href="" @click.prevent="detalleMate(mat.clavemateria)">{{ mat.clavemateria }}</a>
                </td>
                <td>{{ mat.nombre }}</td>
                <td>{{ mat.creditos }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js"
import axios from 'axios';

export default{
    name: "MateriasLista", //Poner el mismo nombre que el nombre del archivo
    components:{},
    data: function(){
        return{
            materias:[]
        }
    },
    created(){
        this.traeMaterias();
    },
    methods:{
        traeMaterias: async function(){
            let a = [];
            await axios.get(URL_DATOS+"/materias")
            .then(function(response){
                console.log(response);
                a = response.data;
            })
            .catch(function(error){
                console.log(error);
            })
            this.materias=a;
        },
        detalleMate: function(clavemateria){
            this.$router.push({name:"detallemate",params:{clavemateria:clavemateria}});
        },
    },
}
</script>