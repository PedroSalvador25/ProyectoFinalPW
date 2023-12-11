<template>
    <div class="DetalleGrup">
        Clave Grupo: {{clavegrupo}}
        <br>
        Clave Materia: {{grupos.clavemateria}}
        <br>
        Clave Maestro: {{grupos.clavemaestro}}
        <br>
        Limite Alumnos: {{grupos.limitealumnos}}
        <br>
        Inscritos: {{grupos.inscritos}}
        <br>
        Horario Lunes: {{grupos.horariolunes}}
        <br>
        Horario Martes: {{grupos.horariomartes}}
        <br>
        Horario Miercoles: {{grupos.horariomiercoles}}
        <br>
        Horario Jueves: {{grupos.horariojueves}}
        <br>
        Horario Viernes: {{grupos.horarioviernes}}
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js"
import axios from 'axios';

export default{
    name:"DetalleGrup",
    components:{},
    props:{
        clavegrupo: String,
    },
    data: function(){
        return{
            grupos:[],
        };
    },
    created(){
        this.traeDetalle();
    },
    methods:{
        traeDetalle: async function(){
            let a = [];
            await axios.get(URL_DATOS+"/grupos/"+this.clavegrupo)
            .then(function(response){
                console.log(response.data[0]);
                a = response.data[0];
            })
            .catch(function(error){
                console.log(error);
            })
            this.grupos=a;
        },
    },
};
</script>
