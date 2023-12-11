<template>
    <MateriasLista></MateriasLista>
</template>

<script>
import MateriasLista from '@/components/MateriasLista.vue';

export default{
   name: "Materias", //Poner el mismo nombre que el nombre del archivo
   components:{MateriasLista},
   data: function(){
       return{}
   },
   methods:{},
}
</script>