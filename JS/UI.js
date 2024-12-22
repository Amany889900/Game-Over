export class Ui{
   
   
    displayGames(gamesResponse){
      let gamesContainer = '';
      for(let index=0; index<gamesResponse.length; index++){
        gamesContainer+=` <div class="col overflow-hidden">
        <div class="card p-3">
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


    }