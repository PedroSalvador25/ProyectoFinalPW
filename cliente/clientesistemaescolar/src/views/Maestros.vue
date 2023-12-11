<template>
     <MaestrosLista></MaestrosLista>
</template>

<script>
import MaestrosLista from '@/components/MaestrosLista.vue';

export default{
    name: "Maestros", //Poner el mismo nombre que el nombre del archivo
    components:{MaestrosLista},
    data: function(){
        return{}
    },
    methods:{},
}
</script>