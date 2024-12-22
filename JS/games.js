export async function getGames(category){
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
} catch (error) {
	console.error(error);
}
}