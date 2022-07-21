var magnifying__glass = document.querySelector(".fa-magnifying-glass");
var search__pc = document.getElementById("search_input");
var btn__showsearch = document.querySelector(".btn__showsearch");

const seacrhFunction = () => {
    btn__showsearch.onclick = function () {
        magnifying__glass.classList.toggle("active");
        search__pc.classList.toggle("active");
        btn__showsearch.classList.toggle("active");
    }
}
seacrhFunction();