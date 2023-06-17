const accessKey = "KJI6ZSPH6TObv-Pl782XHTVtm5ZUdsDYYQgNt9phADQ";

//targeting html elements

const searchForm = document.querySelector('#search-form')
const searchBox = document.querySelector('#search-box')
const searchResult = document.querySelector('#search-result')
const showMoreBtn = document.querySelector('#show-more-btn');

let keyword = "";
let page = 1;

//creating API and Adding Images

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    //making old search clear

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);


    })

    showMoreBtn.style.display = "block";

}

//function for search Images

searchForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    page = 1;
    searchImages();
})

//load more Images

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})