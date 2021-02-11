<template>
    <div class="calendar">
        <calendar-view
			:show-date="showDate"
            :items="items"
			class="theme-default holiday-us-traditional holiday-us-official">

			<calendar-view-header
				slot="header"
				slot-scope="t"
				:header-props="t.headerProps"
				@input="setShowDate" />
		</calendar-view>
    <!-- <button type="button" class="btn btn-primary" @click="refreshGApi">Refresh</button>
    <button type="button" class="btn btn-primary" v-if="!authorized" @click="handleAuthClick">Login</button>
    <button type="button" class="btn btn-primary" v-if="authorized" @click="handleSignOutClick">Sign Out</button>
    <button type="button" class="btn btn-primary" v-if="authorized" @click="getEvents">Get Events</button> -->
    </div>
</template>

<script>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
import moment from "moment"

// const CLIENT_ID = "932323359337-e5p4fh2dsutc9lte24gffchuhrdjfftl.apps.googleusercontent.com";
// const API_KEY = "AIzaSyBKHAaOQqtd7_7upr_hAx1nCVJibhQI3vc";
// const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
// const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

export default {
    components: {
        CalendarView,
		CalendarViewHeader
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
                    name
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