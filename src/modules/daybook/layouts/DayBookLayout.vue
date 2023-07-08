<template>
    <Navbar/>
    <div class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <RouterView/>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Navbar: defineAsyncComponent(() => import(/* NavbarDayBook */'@/modules/daybook/components/NavbarDayBook')),
        EntryList: defineAsyncComponent(() => import(/* EntryListDayBook */'@/modules/daybook/components/EntryListDayBook'))

    }
}
</script>