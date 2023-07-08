export default () => ({
    isLoading: false,
    entries: [ 
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a laboriosam id quo illo ipsam deleniti iusto cum hic velit.'
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a laboriosam id quo illo ipsam deleniti iusto cum hic velit.'
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a laboriosam id quo illo ipsam deleniti iusto cum hic velit.'
        }
    ]
})