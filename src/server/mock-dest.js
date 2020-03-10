
const MOCK_DESTINATIONS = [
    {
        id: "1",
        name: "Chennai",
        location: "<coords>",
        widgets: [
            {
                type: "Weather",
                data: {
                    "text": "What did you expect?WEather is Hot AF, as usual",
                    "temperature": "36"
                }
            },
            {
                type: "Notes",
                data: {
                    "type": "Note",
                    "color": "slate",
                    "text": "Sample Note Here"
                }
            },
            {
                type: "Map",
                data: {
                    "location": "Coordinates",
                    "text": "Sample Map Here"
                }
            }
        ]
    },
    {
        id: "2",
        name: "Hampi",
        location: "<coords>",
        widgets: [
            {
                type: "Weather",
                data: {
                    "text": "What did you expect?WEather is Hot AF, as usual",
                    "temperature": "36"
                }
            },
            {
                type: "Notes",
                data: {
                    type: "Note",
                    color: "slate",
                    text: "Sample Note Here"
                }
            },
            {
                type: "Map",
                data: {
                    location: "Coordinates",
                    text: "Sample Map Here"
                }
            }
        ]
    }
];

const MOCK_TRIPS = [
    {
        id: "1",
        name: "Karnataka Kalling",
        destinations: MOCK_DESTINATIONS
    },
    {
        id: "2",
        name: "Down South!",
        destinations: [{
            id: "2",
            name: "Kanyakumari",
            location: "<coords>",
            widgets: [
                {
                    type: "Weather",
                    data: {
                        "text": "What did you expect?WEather is Hot AF, as usual",
                        "temperature": "36"
                    }
                },
                {
                    type: "Notes",
                    data: {
                        type: "Note",
                        color: "slate",
                        text: "Sample Note Here"
                    }
                },
                {
                    type: "Map",
                    data: {
                        location: "Coordinates",
                        text: "Sample Map Here"
                    }
                }
            ]
        }]
    },
];

module.exports = MOCK_TRIPS;