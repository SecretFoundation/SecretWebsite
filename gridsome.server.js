// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');
const moment = require('moment');

module.exports = function (api) {
  api.loadSource(async actions => {
    // // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // const eventCollection = actions.addCollection('Events');
    // const url = "https://content.googleapis.com/calendar/v3/calendars/primary/events?maxResults=10&orderBy=startTime&showDeleted=false&singleEvents=true&key=AIzaSyBKHAaOQqtd7_7upr_hAx1nCVJibhQI3vc"
    // await axios.get(url).then(response => {
    //   let events = response.result.items
    //   events.forEach(event => {
    //     eventCollection.addNode({
    //       id: event.id,
    //       name: event.summary,
    //       startDate: event.start.dateTime,
    //       endDate: event.end.dateTime
    //     });
    //   });
    // });

    const eventCollection = actions.addCollection('Events');

    eventCollection.addNode({
      id: 1,
      name: "Test",
      startDate: moment().subtract(1, 'days').format(),
      endDate: moment().subtract(1, 'days').format()
    });
f
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
