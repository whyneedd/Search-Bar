const magnifying__glass = document.querySelector(".fa-magnifying-glass");
const search__pc = document.getElementById("search_input");
const btn__showsearch = document.querySelector(".btn__showsearch");


btn__showsearch.onclick = function() {
    magnifying__glass.classList.toggle("active");
    search__pc.classList.toggle("active");
    btn__showsearch.classList.toggle("active");
}