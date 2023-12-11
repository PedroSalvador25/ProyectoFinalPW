<template>
    <GruposLista></GruposLista>
</template>

<script>
import GruposLista from '@/components/GruposLista.vue';

export default{
   name: "Grupos", //Poner el mismo nombre que el nombre del archivo
   components:{GruposLista},
   data: function(){
       return{}
   },
   methods:{},
}
</script>