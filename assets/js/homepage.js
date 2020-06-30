var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");


function formSubmitHandler(event) {
    event.preventDefault();
    
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    }
    else {
        alert("Please enter a GitHub username");
    }
}

function getUserRepos(user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
        });
    })

};

getUserRepos();
userFormEl.addEventListener("submit", formSubmitHandler);