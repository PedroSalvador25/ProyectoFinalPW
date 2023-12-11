<template>
    <div class="DetalleMaes">
        Clave Maestro: {{clavemaestro}}
        <br>
        Nombre: {{maestros.nombre}}
        <br>
        Departamento: {{maestros.departamento}}
        <br>
        Estatus: {{maestros.estatus}}
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js"
import axios from 'axios';

export default{
    name:"DetalleMaes",
    components:{},
    props:{
        clavemaestro: Number,
    },
    data: function(){
        return{
            maestros:[],
        };
    },
    created(){
        this.traeDetalle();
    },
    methods:{
        traeDetalle: async function(){
            let a = [];
            await axios.get(URL_DATOS+"/maestros/"+this.clavemaestro)
            .then(function(response){
                console.log(response.data[0]);
                a = response.data[0];
            })
            .catch(function(error){
                console.log(error);
            })
            this.maestros=a;
        },
    },
};
</script>
