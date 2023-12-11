<template>
    <div class="GruposLista">
        <table class="table table-striped">
        <thead>
            <tr>
                <th>Clave Grupo</th>
                <th>Clave Materia</th>
                <th>Clave Maestro</th>
                <th>Limite Alumnos</th>
                <th>Inscritos</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miercoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="gru in grupos" :key="gru.clavegrupo">
                <td>
                    <a href="" @click.prevent="detalleGrup(gru.clavegrupo)">{{ gru.clavegrupo }}</a>
                </td>
                <td>{{ gru.clavemateria }}</td>
                <td>{{ gru.clavemaestro }}</td>
                <td>{{ gru.limitealumnos }}</td>
                <td>{{ gru.inscritos }}</td>
                <td>{{ gru.horariolunes }}</td>
                <td>{{ gru.horariomartes }}</td>
                <td>{{ gru.horariomiercoles }}</td>
                <td>{{ gru.horariojueves }}</td>
                <td>{{ gru.horarioviernes }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js"
import axios from 'axios';

export default{
    name: "GruposLista", //Poner el mismo nombre que el nombre del archivo
    components:{},
    data: function(){
        return{
            grupos:[]
        }
    },
    created(){
        this.traeGrupos();
    },
    methods:{
        traeGrupos: async function(){
            let a = [];
            await axios.get(URL_DATOS+"/grupos")
            .then(function(response){
                console.log(response);
                a = response.data;
            })
            .catch(function(error){
                console.log(error);
            })
            this.grupos=a;
        },
        detalleGrup: function(clavegrupo){
            this.$router.push({name:"detallegrup",params:{clavegrupo:clavegrupo}});
        },
    },
}
</script>