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
      title: "Test",
      startDate: moment().subtract(1, 'days').format(),
      endDate: moment().subtract(1, 'days').format()
    });
    eventCollection.addNode({
      id: 2,
      title: "Test2",
      startDate: moment().subtract(2, 'days').add(1, 'hours').format(),
      endDate: moment().subtract(2, 'days').add(1, 'hours').format()
    });
    eventCollection.addNode({
      id: 3,
      title: "Test3",
      startDate: moment().subtract(1, 'days').add(2, 'hours').format(),
      endDate: moment().subtract(1, 'days').add(2, 'hours').format()
    });
    eventCollection.addNode({
      id: 4,
      title: "Test4",
      startDate: moment().add(3, 'days').add(3, 'hours').format(),
      endDate: moment().add(4, 'days').add(3, 'hours').format()
    });
    eventCollection.addNode({
      id: 5,
      title: "Test5",
      startDate: moment().add(20, 'days').add(3, 'hours').format(),
      endDate: moment().add(20, 'days').add(3, 'hours').format()
    });
    eventCollection.addNode({
      id: 6,
      title: "Test6",
      startDate: moment().add(26, 'days').add(3, 'hours').format(),
      endDate: moment().add(29, 'days').add(3, 'hours').format()
    });

  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
