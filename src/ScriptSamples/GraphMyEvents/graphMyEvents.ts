(function () {

    const vm = new Vue({
        el: "#myCalendar",
        data: () => ({
            events: [],
            user: omnia.user
        }),
        created: async function () {
            await this.loadEvents();
        },
        methods: {
            async loadEvents() {
                // instantiate Graph API client and query for my events
                const client = await omniaScriptApi.m365.graphClient
                const res = await client.get('/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location');
                this.events = res.data.value

                // You could also use SharePoint REST client to query for a calendar, something like this:
                let spClient = await omniaScriptApi.spfx.sharepointClient;
                let res2 = await spClient.get('/_api/web/lists/getbytitle(\'Corporate%20Calendar\')/items?$select=Title,EventDate,EndDate,Location,Description');
                this.events = res2.data.value
                // ...But then you'll also need to change the fields used in the Vue component, subject -> Title and start -> EventDate and so on. 
                // For formatting the dates, "new Date(ev.EventData).toLocaleString()" should be pretty good.

            }
        }
    })

})();