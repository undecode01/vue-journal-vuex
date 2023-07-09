<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input 
                type="search"
                class="form-control"
                placeholder="Buscar entrada"
                v-model="term"
            >
        </div>
        <div class="mt-2 d-flex flex-column">
            <button 
                class="btn btn-primary mx-3"
                @click="$router.push({ name: 'entry-view-daybook', params: { id: 'new' } })"
            >
                <i class="fa fa-plus-"></i>
                Nueva entrada
            </button>
        </div>
        <div class="entry-scrollarea">
            <Entry
                v-for="entry in entriesByTermn"
                :key="entry.id"
                :entry="entry"
            />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        Entry: defineAsyncComponent(() => import(/* EntryDayBook */'./EntryDayBook'))
    },
    data(){
        return{
            term: null
        }
    },
    computed: {
        ...mapGetters('journal', [
            'getEntriesByTerm'
        ]),
        entriesByTermn(){
            return this.getEntriesByTerm(this.term)
        },   
    }
}
</script>

<style lang="scss" scoped>
.entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc( 100vh - 56px );
}

.entry-scrollarea{
    height: calc( 100vh - 110px );
    overflow-y: scroll;
}
</style>