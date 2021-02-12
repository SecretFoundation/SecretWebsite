<template>
    <div class="calendar">
        <ClientOnly>
            <calendar-view
                displayPeriodUom="month"
                :displayPeriodCount="1"
                :show-date="showDate"
                :items="items"
                :showTimes="true"
                class="theme-default holiday-us-traditional holiday-us-official">

                <calendar-view-header
                    slot="header"
                    slot-scope="t"
                    :header-props="t.headerProps"
                    @input="setShowDate" />
            </calendar-view>
        </ClientOnly>
    </div>
</template>

<script>
export default {
    components: {

        CalendarView: () =>
            import ("vue-simple-calendar")
        .then(m => m.CalendarView)
        .catch(),
		CalendarViewHeader: () =>
            import ("vue-simple-calendar")
        .then(m => m.CalendarViewHeader)
        .catch()
    },
    data() {
        return {
            showDate: new Date(),
            items: [],
        }
    },
    mounted() {
       this.$static.events.edges.forEach(event => {
           this.items.push(event.node);
       });
    },
    methods: {
        setShowDate(d) {
            this.showDate = d;
        },
    }
}
</script>

<static-query>
    query {
        events: allEvents {
            edges {
                node {
                    id
                    title
                    startDate
                    endDate
                }
            }
        }
    }
</static-query>

<style lang="scss">
    .calendar {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }


    .cv-item {
        color: black;
    }
</style>