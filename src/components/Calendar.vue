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
    <button type="button" class="btn btn-primary" @click="refreshGApi">Refresh</button>
    <button type="button" class="btn btn-primary" v-if="!authorized" @click="handleAuthClick">Login</button>
    <button type="button" class="btn btn-primary" v-if="authorized" @click="handleSignOutClick">Sign Out</button>
    <button type="button" class="btn btn-primary" v-if="authorized" @click="getEvents">Get Events</button>
    </div>
</template>

<script>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
import moment from "moment"

const CLIENT_ID = "932323359337-e5p4fh2dsutc9lte24gffchuhrdjfftl.apps.googleusercontent.com";
const API_KEY = "AIzaSyBKHAaOQqtd7_7upr_hAx1nCVJibhQI3vc";
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

export default {
    components: {
        CalendarView,
		CalendarViewHeader
    },
    data() {
        return {
            showDate: new Date(),
            items: [],
            authorized: false,
            gItems: [],
        }
    },
    created() {
        
    },
    methods: {
        setShowDate(d) {
            this.showDate = d;
        },
        refreshGApi() {
            this.api = gapi;
            this.handleClientLoad();
        },
        handleClientLoad() {
            this.api.load('client:auth2', this.initClient);
        },
        initClient() {
            let vm = this;
            vm.api.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            }).then(_ => {
                vm.api.auth2.getAuthInstance().isSignedIn.listen(vm.authorized);
            });
        },

        handleAuthClick(event) {
            Promise.resolve(this.api.auth2.getAuthInstance().signIn())
            .then(_ => {
                this.authorized = true;
            });
        },
        handleSignOutClick(event) {
            Promise.resolve(this.api.auth2.getAuthInstance().signOut())
                .then(_ => {
                    this.authorized = false;
                });
        },
        getEvents() {
            let vm = this;
            vm.api.client.calendar.events.list({
                'calendarId': 'primary',
                'timeMin': moment().subtract(1, 'days').format(),
                'showDeleted': false,
                'singleEvents': true,
                'maxResults': 10,
                'orderBy': 'startTime'
            }).then(response => {
                this.gItems = response.result.items;
                this.items = [];
                for(let i=0; i < this.gItems.length; i++) {
                    this.items.push({
                        id: this.gItems[i].id,
                        title: this.gItems[i].summary,
                        startDate: this.gItems[i].start.dateTime,
                        endDate: this.gItems[i].end.dateTime
                    })
                }
            });
        },
    }
}
</script>

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