<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2021, Jueves</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea 
            placeholder="¿Qué sucedió hoy?"
            class="form-control"
        ></textarea>
    </div>
    <img 
    src="https://iso.500px.com/wp-content/uploads/2022/07/Sunset-somewhere-in-Iowa-By-Vath.-Sok-2.jpeg"
        alt="Entry picture"
        class="img-thumbnail"
        >
    <Fab
        icon="fa-save"
    />
    </template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Fab: defineAsyncComponent(() => import(/* FabDaybook */'@/modules/daybook/components/FabDayBook'))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: .2);
}
</style>
