<template>
    <div class="DetalleMate">
        Clave Materia: {{clavemateria}}
        <br>
        Nombre: {{materias.nombre}}
        <br>
        Creditos: {{materias.creditos}}
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js"
import axios from 'axios';

export default{
    name:"DetalleMate",
    components:{},
    props:{
        clavemateria: String,
    },
    data: function(){
        return{
            materias:[],
        };
    },
    created(){
        this.traeDetalle();
    },
    methods:{
        traeDetalle: async function(){
            let a = [];
            await axios.get(URL_DATOS+"/materias/"+this.clavemateria)
            .then(function(response){
                console.log(response.data[0]);
                a = response.data[0];
            })
            .catch(function(error){
                console.log(error);
            })
            this.materias=a;
        },
    },
};
</script>
