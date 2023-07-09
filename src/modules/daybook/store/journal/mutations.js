// export const myMutation = ( state ) => {
    
// }

export const setEntries = (state, entries) => {
    state.entries   = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (state, entry) => {
    const index = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[index] = entry
}

export const addEntry = (state, entry) => {
    state.entries.unshift(entry)
}

export const deleteEntry = (state, id) => {
    state.entries = state.entries.filter(entry => entry.id !== id)
}
