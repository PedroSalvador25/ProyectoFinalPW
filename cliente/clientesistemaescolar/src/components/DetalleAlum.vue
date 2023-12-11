<template>
    <div class="DetalleAlum">
        Numero de Control: {{ncontrol}}
        <br>
        Nombre: {{alumnos.nombre}}
        <br>
        Carrera: {{alumnos.carrera}}
        <br>
        Estatus: {{alumnos.estatus}}
    </div>
</template>
<script>
import {URL_DATOS} from "../utils/constantes.js"
import axios from 'axios';

export default{
    name:"DetalleAlum",
    components:{},
    props:{
        ncontrol: Number,
    },
    data: function(){
        return{
            alumnos:[],
        };
    },
    created(){
        this.traeDetalle();
    },
    methods:{
        traeDetalle: async function(){
            let a = [];
            await axios.get(URL_DATOS+"/alumnos/"+this.ncontrol)
            .then(function(response){
                console.log(response.data[0]);
                a = response.data[0];
            })
            .catch(function(error){
                console.log(error);
            })
            this.alumnos=a;
        },
    },
};
</script>
