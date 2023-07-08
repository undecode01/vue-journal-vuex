<template>
    <div class="entry-container mb-3 pointer p-2">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-1 fw-light">2021, Jueves</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, vero qui rem enim veritatis minima iste necessitatibus placeat sapiente praesentium incidunt repellat dicta quisquam consectetur odit quas. Dolorem, maiores excepturi.
        </div>
    </div>
</template>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: .2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: .2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}

</style>