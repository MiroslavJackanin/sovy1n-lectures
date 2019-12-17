import "./styles.css";

console.log("hello");
fetch("https://swapi.co/api/people/1/").then(function(response) {
    response.json().then(function(data) {
        console.log(data);
        console.log(data.name);
        document.getElementById("name").innerHTML = data.name;
    });
});