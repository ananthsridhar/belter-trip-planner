// import { destinations as mockDest } from "../mock/mockDestinations";

export default class DestinationService {
  constructor() {

    //console.log(this.destinations);
    this.getData = this.getData.bind(this);
    this.getDestinationsFromService = this.getDestinationsFromService.bind(
      this
    );
    //this.destinations = this.getData();
    // this.getDestinationsFromService();
  }

  async getData() {
    return await this.getDestinationsFromService();
  }

  getDestination(id) {
    if (this.destination) {
      return this.destinations.filter(dest => dest.id === id)[0];
    }
  }

  addAfter(prevDest) {
    //Add destination to data. Try to update the necessary information
    console.log("Adding After " + prevDest);
  }

  updateData(destination, newData) {
    //Update data like adding "widgets" etc.
  }

  getDestinationsFromService() {
    return fetch("http://www.mocky.io/v2/5da948373100005d004e0759")
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        // this.destinations = data;
        return data;
      })
      .catch(console.error);
  }
}
