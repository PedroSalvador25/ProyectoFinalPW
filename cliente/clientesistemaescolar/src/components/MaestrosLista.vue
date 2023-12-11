<template>
    <div class="MaestrosLista">
        <table class="table table-striped">
        <thead>
            <tr>
                <th>Clave Maestro</th>
                <th>Nombre</th>
                <th>Departamento</th>
                <th>Estatus</th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="mae in maestros" :key="mae.clavemaestro">
                <td>
                    <a href="" @click.prevent="detalleMaes(mae.clavemaestro)">{{ mae.clavemaestro }}</a>
                </td>
                <td>{{ mae.nombre }}</td>
                <td>{{ mae.departamento }}</td>
                <td>{{ mae.estatus }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js"
import axios from 'axios';

export default{
    name: "MaestrosLista", //Poner el mismo nombre que el nombre del archivo
    components:{},
    data: function(){
        return{
            maestros:[]
        }
    },
    created(){
        this.traeMaestros();
    },
    methods:{
        traeMaestros: async function(){
            let a = [];
            await axios.get(URL_DATOS+"/maestros")
            .then(function(response){
                console.log(response);
                a = response.data;
            })
            .catch(function(error){
                console.log(error);
            })
            this.maestros=a;
        },
        detalleMaes: function(clavemaestro){
            this.$router.push({name:"detallemaes",params:{clavemaestro:clavemaestro}});
        },
    },
}
</script>