import Card from './Card';
import {CARD_TYPES} from '../resources/Constants';

export default class Destination {
    constructor(destinationName){
        this._id = Math.random()*100;
        this.name = destinationName;
        this.cards = [new Card(CARD_TYPES.WEATHER)];
    }

    getId(){
        return this._id;
    }

    addCard(cardType,data){
        let card = new Card(cardType,data);
        this.cards = this.cards.push(card);
    }
}