// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const moment = require('moment');
const { google } = require('googleapis')

google.auth.keyFilename = './static/cal-key.json';
google.auth.scopes = ['https://www.googleapis.com/auth/calendar'];

const client = google.auth;

module.exports = function (api) {
  api.loadSource(async actions => {

    async function getEvents(client) {

      const calendar = google.calendar({ version: 'v3', auth: client});

      calendar.events.watch(
        {
          auth: client,
          resource: {
            id: "5x5y5z",
            type: "web_hook",
            address: "https://secret-website-development.onrender.com/rebuild/",
            params:  {
              "ttl": 604800
            }
          },
          calendarId: 'sandy@stakeordie.com'
        },(error, response) => {
          if (error) {
              console.log(error);
              return;
          }
          console.log(response);
        }
      );
      
      let eventCollection;

      return new Promise((resolve, reject) => {

        calendar.events.list(
          {
            calendarId: 'sandy@stakeordie.com',
            timeMin: moment().subtract(1,'weeks').format(),
            timeMax: moment().add(51,'weeks').format(), // EVENTS FOR 1 Year WEEKS
            singleEvents: true,
            orderBy: 'startTime',
          },
          (err, res) => {
            if (err) {
              console.log(`The API returned an error: ${err}`)
            }

            const eventCollection = actions.addCollection('Events');
            
            res.data.items.forEach(item => {
              eventCollection.addNode({
                id: item.id,
                title: item.summary,
                startDate: item.start.dateTime,
                endDate: item.end.dateTime
              });
            });
            resolve(eventCollection);
          });
        },
      );
    }
    eventCollection = await getEvents(client)

  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
