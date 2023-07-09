import journalApi from "@/api/journalApi"

export const loadEntries = async({ commit }) => {
    const { data } = await journalApi.get('entries.json')
    
    if(!data) return commit('setEntries', [])

    const entries = []

    for(let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })    
    }
    
    commit('setEntries', entries)
}

export const updateEntry = async({ commit }, entry) => {
    const { id, ...dataToSave } = entry
    const { statusText } = await journalApi.patch(`entries/${id}.json`, dataToSave)

    if(statusText === 'OK') commit('updateEntry', {...entry})
}

export const createEntry = async({ commit }, entry) => {
    const { data } = await journalApi.post('entries.json', entry)
    const { name: newEntryId } = data

    entry.id = newEntryId
    commit('addEntry', { ...entry })

    return newEntryId
}

export const deleteEntry = async({ commit }, id) => {
    await journalApi.delete(`entries/${id}.json`)
    commit('deleteEntry', id)
}



// export const myAction = async( { commit } ) => {
// }
