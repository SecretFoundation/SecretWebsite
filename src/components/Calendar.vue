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
    .outsideOfMonth {
        opacity: 0;
    }
    .calendar {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .cv-header {
        border-style: none !important;
        border-bottom: 1px solid #fff !important;
        font-family: $headers-default-font;
        font-size: 28px;
        font-weight: 700;
        position: relative;
        padding-bottom: 34px;
        button {
            font-size: 28px !important;
        }
        &-nav {
            width: 100%;
            margin: 0 !important;
            display: flex;
            justify-content: space-between;
            .previousYear, .nextYear {
                display: none;
            }
            .currentPeriod {
                opacity: 0;
            }
            .previousPeriod, .nextPeriod {
                border: 0;
            }
        }
        .periodLabel {
            width: 100%;
            position: absolute;
            text-align: center;
            display: unset !important;
            z-index: -1;
            font-size: 28px !important;
            padding: .4355em 0 !important;
            margin: 0 !important;
        }
        &-days {
            display: none !important;
        }
    }
    .cv-weeks {
        grid-row-gap: 16px;
        border: none !important;
        margin-top: 50px;
        .cv-week {
            flex-basis: unset;
        }
        .cv-weekdays {
            grid-column-gap: 16px;
            .cv-day {
                border: 2px solid #fff;
                border-radius: 10px;
                padding: 10px;
                min-height: 166px;
                //height: auto;
                //position: relative;
                &-number {
                    font-size: 22px;
                    font-weight: 700;
                    font-family: $headers-default-font;
                    width: 100%;
                    text-align: right;
                }
            }
        }
    }


    .cv-item {
        color: white;
        border-radius: 2px;
        padding: 4px;
        margin-top: 30px;
        text-overflow: ellipsis;
        border: 0;
        border-style: none !important;
        font-weight: bold;
        font-size: 12px;
        line-height: 12px;
        width: calc((100% / 7) - 38px) !important;
        display: flex;
        flex-direction: column;
        &:last-child {
            background-color: green;
        }
        &.offset0 {
            left: 13px !important;
        }

        &.offset1 {
            left: calc((100% / 7) + 15px) !important;
        }

        &.offset2 {
            left: calc(((100% / 7) * 2) + 17px) !important;
        }

        &.offset3 {
            left: calc(((100% / 7) * 3) + 19px) !important;
        }

        &.offset4 {
            left: calc(((100% / 7) * 4) + 21px) !important;
        }

        &.offset5 {
            left: calc(((100% / 7) * 5) + 23px) !important;
        }

        &.offset6 {
            left: calc(((100% / 7) * 6) + 25px) !important;
        }
        .startTime {
            font-weight: normal;
            order: 3;
        }
        .endTime {
            display: none;
        }
    }
    .cv-item[style*="calc(1.4em + 0px)"] {
        background-color: #816DA8 !important;
    }
    .cv-item[style*="calc(2.8em + 2px)"] {
        background-color: $primary-orange-color !important;
        top: calc(2.8em + 20px) !important;
    }
    .cv-item[style*="calc(4.2em + 4px)"] {
        background-color: $primary-purple-color !important;
        top: calc(4.2em + 40px) !important;
    }
    .cv-item[style*="calc(5.6em + 6px)"] {
        background-color: #5AA361 !important;
        top: calc(5.6em + 60px) !important;
    }
    .cv-item[style*="calc(7em + 8px)"] {
        background-color: $primary-blue-color !important;
        top: calc(7em + 80px) !important;
    }
</style>