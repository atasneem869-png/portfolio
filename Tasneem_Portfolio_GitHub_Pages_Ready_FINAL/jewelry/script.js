function showSearch() {

    let searchBox = document.getElementById("searchBox");

    if (searchBox.style.display === "none" || searchBox.style.display === "") {
        searchBox.style.display = "block";
    } 
    else {
        searchBox.style.display = "none";
    }

}

function doSearch() {

    let search = document.getElementById("searchInput").value;

    if (search === "") {
        alert("Please enter something to search");
    } 
    else {
        alert("You searched for: " + search);
    }

}
function store() {
    window.location.href = "store.html";
}
