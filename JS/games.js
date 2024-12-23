import {Ui} from "./UI.js"
import {Details} from "./details.js"

export class Games {
  
	constructor(){
		this.getGames("mmorpg");

		document.querySelectorAll(".navbar-nav a").forEach((link) => {
			link.addEventListener("click", (e) => {
			   document.querySelector(".navbar-nav .active").classList.remove("active");
			   e.target.classList.add("active");
			   this.getGames(e.target.dataset.category);
			});
		 });

		this.ui = new Ui();
	}




	async getGames(category){
		const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
		const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '8beae10c57mshdd54ea865816877p1b5c36jsn388b7f9bea0a',
			'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
		}
	};
	
	try {
		const gamesResponse = await fetch(url, options);
		const allGames = await gamesResponse.json();
		console.log(allGames);
		this.ui.displayGames(allGames);
	    this.action();
	} catch (error) {
		console.error(error);
	}

	
    
	}


	action(){
		document.querySelectorAll(".card").forEach((item) => {
			item.addEventListener("click", () => {
			   const id = item.dataset.id;
			   this.showDetails(id);
			});
		 });
	}

	showDetails(idGame){
		const info = new Details(idGame);
		document.querySelector("#games").classList.add("d-none");
		document.querySelector("#nav").classList.add("d-none");
		document.querySelector("#details").classList.remove("d-none");
	}
}

