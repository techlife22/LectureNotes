const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //1
const key = "2r9UcbjTsOWFeV3UpKzUtNTAzoARyp56"; //2
let url; //3
//SEARCH FORM
const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".startdate");
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");
//RESULTS NAVIGATION
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");
//RESULTS SECTION
const section = document.querySelector("section");
nav.style.display = "none";
let pageNumber = 0;
let displayNav = false;
//1                     //2
searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage); //3
previousBtn.addEventListener("click", previousPage); //3
function fetchResults(e) {
  console.log(e);
}
//1
function fetchResults(e) {
  e.preventDefault(); //2
  // Assemble the full URL
  url =
    baseURL +
    "?api-key=" +
    key +
    "&page=" +
    pageNumber +
    "&q=" +
    searchTerm.value; //3
  //Dates
  /*if (startDate.value !== "") {
    console.log(startDate.value);
    url += "&begin_date" + startDate.value;
  }
  if (endDate.value !== "") {
    url += "&end_date" + endDate.value;
  }
  */
  //Fetch the data
  fetch(url)
    .then(function (result) {
      return result.json(); //2
    })
    .then(function (json) {
      displayResults(json); //3
    });
}
//2
function displayResults(json) {
    let articles = json.response.docs;
    if (articles.length === 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    } else {
        nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
    }
};
    if(articles.length === 0) {
      console.log("No results");
    } else {
      for(let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a'); //1
  
        let current = articles[i]; //2
        console.log("Current:", current); //3
  
        link.href = current.web_url; //4
        link.textContent = current.headline.main; //5
  
        article.appendChild(heading);
        heading.appendChild(link); //6
        section.appendChild(article);
      }
    }
  ;

function nextPage() {
  console.log("Next button clicked");
} //5

function previousPage() {
  console.log("Next button clicked");
} //5

