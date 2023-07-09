<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>
    <Fab
        @on:click="$router.push({ name: 'entry-view-daybook', params: { id: 'new' } })"
    />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Fab: defineAsyncComponent(() => import(/* FabDayBook */ '@/modules/daybook/components/FabDayBook'))
    }    
}
</script>

<style lang="scss" scoped>
div{
    height: 100%;
}
</style>