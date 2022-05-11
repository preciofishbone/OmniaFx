try {
    // Configure the site name
    const siteId = "root"
    // Configure the list name
    const listId = "Documents"

    // Configure the list fields to be displayed - type is used for formatting and figuring out how to sort
    // The fields below work for a standard document library
    const fields = 
        [ 
            {hidden: false, id: "id",                           type: "number",     display: "ID"}, 
            {hidden: false, id: "fields.Title",                 type: "string",     display: "Title"}, 
            {hidden: false, id: "contentType.name",             type: "string",     display: "Type"},
            {hidden: false, id: "lastModifiedDateTime",         type: "datetime",   display: "Last modified" }, 
            {hidden: false, id: "createdDateTime",              type: "datetime",   display: "Created"},
            {hidden: true,  id: "createdBy.user.email",         type: "string",     display: "Creator email"},
            {hidden: false, id: "createdBy.user.displayName",   type: "string",     display: "Creator"},
            {hidden: false, id: "webUrl",                       type: "link",       display: "URL"},
        ]

    const vm = new Vue({ 
        el: "#myListContainer",
        data: () => ({
            items: [],
            fields: fields,
            user: omnia.user,
            sortDesc: false,
            sortBy: '',
        }),
        created: async function () {
            await this.loadEvents();
        },
        methods: {
            async loadEvents() {
                const client = await omniaScriptApi.m365.graphClient
                const res = await client.get('/beta/sites/' + siteId + '/lists/' + listId + '/items?expand=fields'); // this isn't really performant - if you know which fields you want, only $select the ones you need!
                
                this.items = res.data.value;
            },
            // The basic data-iterator sorting isn't good enough for us (doesn't support multi-level objects), so we'll create one ourselves
            sort (fieldName, fieldType) {

                if (this.sortBy == fieldName) {
                    this.sortDesc = !this.sortDesc; // reverse sortingOrder if the user clicked on the same header again
                }

                this.sortBy = fieldName;

                var prop = fieldName.split('.');
                var len = prop.length;

                this.items.sort(function (a, b) {
                    var i = 0;
                    while( i < len ) { a = a[prop[i]]; b = b[prop[i]]; i++; }

                    // handle nulls:
                    if (a == null) {
                        return -1;
                    } else if (b == null) {
                        return 1;
                    } 

                    if (fieldType === 'string'
                        || fieldType === 'link') {
                        a = a.trim();
                        b = b.trim();
                    }
                    else if (fieldType === 'datetime') {
                        a = new Date(a);
                        b = new Date(b);
                    }
                    else if (fieldType === 'number') {
                        a = parseFloat(a);
                        b = parseFloat(b);
                    }
                    else {
                        console.log("Unknown field type: " + fieldType);
                        // default sorting might work here?
                    }

                    if (a < b) {
                        return -1;
                    } else if (a > b) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                if (this.sortDesc)
                { 
                    this.items.reverse();
                }
            },
        },
        computed: {
            numberOfPages () {
              return Math.ceil(this.items.length / this.itemsPerPage)
            },
            filteredKeys () {
              return this.keys.filter(key => key !== 'Name')
            },
        },
    });
} 
catch (err) {
    console.error("There was an error instantiating your SharePoint List Viewer: " + err);
}