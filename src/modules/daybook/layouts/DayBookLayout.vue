<template>
    <Navbar/>
    <div class="row justify-content-md-center" v-if="isLoading">
        <div class="col-3 bg-info text-center text-white mt-5 py-2">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync text-white"></i>
            </h3>
        </div>
    </div>
    <div class="d-flex" v-else>
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
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('journal')

export default {
    components: {
        Navbar: defineAsyncComponent(() => import(/* NavbarDayBook */'@/modules/daybook/components/NavbarDayBook')),
        EntryList: defineAsyncComponent(() => import(/* EntryListDayBook */'@/modules/daybook/components/EntryListDayBook'))
    },
    methods: {
        ...mapActions(['loadEntries'])        
    },
    computed: {
        ...mapState(['isLoading'])
    },
    created(){
        this.loadEntries()
    }
}
</script>