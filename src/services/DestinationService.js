import { destinations as mockDest } from "../mock/mockDestinations";

export default class DestinationService {
  constructor() {
    this.destinations = [];
    //console.log(this.destinations);
    this.getData = this.getData.bind(this);
    this.getDestinationsFromService = this.getDestinationsFromService.bind(
      this
    );
    // this.getDestinationsFromService();
  }

  async getData() {
    //return await this.getDestinationsFromService();
    return await this.getDestinationsFromService();
  }

  getDestination(id) {
    return this.destinations.filter(dest => dest.id === id)[0];
  }

  addAfter(prevDest) {
    //Add destination to data. Try to update the necessary information
    console.log("Adding After " + prevDest);
  }

  updateData(destination, newData) {
    //Update data likea dding "widgets" etc.
  }

  getDestinationsFromService() {
    return fetch("https://www.mocky.io/v2/5da84f4c120000d0d1edad6c")
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        this.destinations = data;
      })
      .catch(console.error);
  }
}
