<template>
    <AlumnosLista></AlumnosLista>
</template>

<script>
import AlumnosLista from '@/components/AlumnosLista.vue';

export default{
   name: "Alumnos", //Poner el mismo nombre que el nombre del archivo
   components:{AlumnosLista},
   data: function(){
       return{}
   },
   methods:{},
}
</script>