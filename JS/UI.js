export class Ui{
   
   
    displayGames(gamesResponse){
      let gamesContainer = '';
      for(let index=0; index<gamesResponse.length; index++){
        gamesContainer+=` 
        
        <div class="card p-3 col" data-id="${gamesResponse[index].id}">
          <img src="${gamesResponse[index].thumbnail}" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="title d-flex justify-content-between">
              <h5 class="card-title">${gamesResponse[index].title}</h5>
              <a href="#" class="text-decoration-none text-light stretched-link">Free</a>
            </div>
            <p class="card-text text-center">${gamesResponse[index].short_description}</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <small>${gamesResponse[index].genre}</small>
            <small>${gamesResponse[index].platform}</small>
          </div>
        
        </div>`
      }
      
      document.getElementById("games").innerHTML = gamesContainer;
      } 

      displayGame(gameResponse){
        document.getElementById("games").classList.add("d-none");
        document.getElementById("nav").classList.add("d-none");
        document.getElementById("details").classList.remove("d-none");

        document.getElementById("closeDetails").addEventListener( "click", function(){
            document.getElementById("details").classList.add("d-none");
            document.getElementById("games").classList.remove("d-none");
            document.getElementById("nav").classList.remove("d-none");
        }

        )
        document.getElementById("gameDetails").innerHTML = `
        <div class="d-flex gap-3">
        <figure>
            <img src="${gameResponse.thumbnail}" alt="">
          </figure>
          <div class="text-light">
           <h2>Title: ${gameResponse.title}</h2>
           <p class="my-3">Category: <span>${gameResponse.genre}</span></p>
           <p class="my-3">Platform: <span>${gameResponse.platform}</span></p>
           <p class="my-3">Status: <span>${gameResponse.status}</span></p>
           <p>${gameResponse.description}</p>
          <button class="btn " id="showGameBtn"><a href="${gameResponse.game_url}" target="_blank" >Show Game</a></button>
          </div>
        </div>
        
        `
      }
    }