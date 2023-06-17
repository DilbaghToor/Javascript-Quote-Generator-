const accessKey = "KJI6ZSPH6TObv-Pl782XHTVtm5ZUdsDYYQgNt9phADQ";


const searchForm = document.querySelector('#search-form')
const searchBox = document.querySelector('#search-box')
const searchResult = document.querySelector('#search-result')
const showMoreBtn = document.querySelector('#show-more-btn');

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

}

searchForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    page = 1;
    searchImages();
})