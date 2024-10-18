fetch("https://dummyapi.online/api/movies")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderMovies(data);
  });

let rootEle = document.getElementById("root");
function renderMovies(movies) {
  let movieList = document.createElement("div");

  let movieItems = movies.map((movie) => {
    return `<div>
    <h2>${movie.movie}</h2>
    <img src=${movie.image}/>
    </div>`;
  });
  movieList.innerHTML = movieItems;
  rootEle.append(movieList);
}
