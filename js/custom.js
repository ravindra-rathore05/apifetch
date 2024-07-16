var current_page = 1;

var APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+current_page;

var searchAPIURL = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



let movies = async (APIURL) => {
    var data = await fetch(APIURL);

   var finalData = await data.json();
    var finalData = await finalData.results;
   displayData(finalData);
}

   
let displayData = (moviesData)=>{

    let finalMovies = '';

    moviesData.forEach((v, i) => {
        finalMovies += `<div class="col-md-3">
    <div class="card">
    <img src="https://image.tmdb.org/t/p/w1280${v.poster_path}" class="card-img-top" alt="...">
   <div class="card-body">
  <h5 class="card-title">${v.original_title}</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
      </div>    
 </div>`;
    });
  document.getElementById('moviesapp').innerHTML = finalMovies;
}



movies(APIURL);

let search = (title) => {
   if(title == ''){
    movies(APIURL);
   }
   else{
    var searchAPIURL = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+title;
    movies(searchAPIURL)
   }
}

let previous = () =>{
    if(current_page > 1){
        current_page--;
        var APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+current_page;
        movies(APIURL);
       
    }
}
let next = () =>{
    current_page++;
    var APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="+current_page;
    movies(APIURL);

};

