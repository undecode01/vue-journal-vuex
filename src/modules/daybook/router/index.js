export default {
    name: 'daybook',
    component: () => import(/* DayBookLayout */ '@/modules/daybook/layouts/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry-daybook',
            component: () => import(/* NoEntryDayBook */ '@/modules/daybook/views/NoEntrySelected'),
        },
        {
            path: ':id',
            name: 'entry-view-daybook',
            props: (route) => {
                return {
                    id: route.params.id
                }
            },
            component: () => import(/* EntryViewDayBook */ '@/modules/daybook/views/EntryViewDayBook'),
        }
    ]
}