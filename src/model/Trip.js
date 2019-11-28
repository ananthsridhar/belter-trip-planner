

export class Trip {
    constructor(){
        this._id = Math.trunc(Math.random()*1000);
        this._destinations = [];
    }

    getId(){
        return this._id;
    }

    getDestinations(){
        return this._destinations;
    }

    findDestinations(name){
        return this._destinations.filter(dest=>dest.name===name);
    }
}