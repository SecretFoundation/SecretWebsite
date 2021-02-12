<template>
    <div class="calendar">
        <ClientOnly>
            <calendar-view
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
    <!-- <button type="button" class="btn btn-primary" @click="refreshGApi">Refresh</button>
    <button type="button" class="btn btn-primary" v-if="!authorized" @click="handleAuthClick">Login</button>
    <button type="button" class="btn btn-primary" v-if="authorized" @click="handleSignOutClick">Sign Out</button>
    <button type="button" class="btn btn-primary" v-if="authorized" @click="getEvents">Get Events</button> -->
    </div>
</template>

<script>
//import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"

// const CLIENT_ID = "932323359337-e5p4fh2dsutc9lte24gffchuhrdjfftl.apps.googleusercontent.com";
// const API_KEY = "AIzaSyBKHAaOQqtd7_7upr_hAx1nCVJibhQI3vc";
// const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
// const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

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
            // authorized: false,
            // gItems: [],
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
            margin: 0;
            .previousYear, .nextYear, .currentPeriod {
                display: none;
            }
            .previousPeriod, .nextPeriod {
                border: 0;
            }
            .nextPeriod {
                position: absolute;
                right: 0;
            }
        }
        .periodLabel {
            width: 100%;
            position: absolute;
            text-align: center;
            display: unset !important;
            z-index: -1;
            font-size: 28px !important;
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
                height: 166px;
                position: relative;
                &-number {
                    font-size: 22px;
                    font-weight: 700;
                    font-family: $headers-default-font;
                    position: absolute;
                    top: 16px;
                    right: 16px;
                }
            }
        }
    }


    .cv-item {
        color: black;
    }
</style>