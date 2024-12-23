import {Ui} from "./UI.js"

export class Details{
   
	constructor(id){
		this.ui = new Ui();
		this.getDetails(id);
	}

	async getDetails(id){
		const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
		const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '8beae10c57mshdd54ea865816877p1b5c36jsn388b7f9bea0a',
			'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
		}
	};
	
	try {
		const detailsResponse = await fetch(url, options);
		const gamedetails = await detailsResponse.json();
		console.log(gamedetails);
		this.ui.displayGame(gamedetails);
	} catch (error) {
		console.error(error);
	}
	}
}


