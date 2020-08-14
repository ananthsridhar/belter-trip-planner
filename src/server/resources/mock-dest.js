
const MOCK_DESTINATIONS = [
  {
    id: '1',
    name: 'Chennai',
    loc: '<coords>',
    widgets: [{
      id: '1',
      type: 'Weather',
      data: {
        text: 'What did you expect?WEather is Hot AF, as usual',
        temperature: '36'
      }
    },
    {
      id: '2',
      type: 'Notes',
      data: {
        type: 'Note',
        color: 'slate',
        text: 'Sample Note Here'
      }
    },
    {
      id: '3',
      type: 'Map',
      data: {
        loc: 'Coordinates',
        text: 'Sample Map Here'
      }
    }]
  },
  {
    id: '2',
    name: 'Hampi',
    loc: '<coords>',
    widgets: [{
      id: '1',
      type: 'Weather',
      data: {
        text: 'What did you expect?WEather is Hot AF, as usual',
        temperature: '36'
      }
    },
    {
      id: '2',
      type: 'Notes',
      data: {
        type: 'Note',
        color: 'slate',
        text: 'Sample Note Here'
      }
    },
    {
      id: '3',
      type: 'Map',
      data: {
        loc: 'Coordinates',
        text: 'Sample Map Here'
      }
    }]
  }
];

const MOCK_TRIPS = [
  {
    id: '1',
    name: 'Karnataka Kalling',
    destinations: MOCK_DESTINATIONS
  },
  {
    id: '2',
    name: 'Down South!',
    destinations: [{
      id: '2',
      name: 'Kanyakumari',
      loc: '<coords>',
      widgets: [{
        id: '1',
        type: 'Weather',
        data: {
          text: 'What did you expect?WEather is Hot AF, as usual',
          temperature: '36'
        }
      },
      {
        id: '2',
        type: 'Notes',
        data: {
          type: 'Note',
          color: 'slate',
          text: 'Sample Note Here'
        }
      },
      {
        id: '3',
        type: 'Map',
        data: {
          loc: 'Coordinates',
          text: 'Sample Map Here'
        }
      }]
    }]
  },
  {
    id: '3',
    name: 'Up North',
    widgets: [],
    destinations: []
  }
];

module.exports = MOCK_TRIPS;
