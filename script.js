const form = document.getElementById("profileForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const city = document.getElementById("city").value;
    const sport = document.getElementById("sport").value;
    const ambition = document.getElementById("ambition").value;

    // Display values in the profile card
    document.getElementById("profileName").textContent = name;
    document.getElementById("profileAge").textContent = age;
    document.getElementById("profileGender").textContent = gender;
    document.getElementById("profileCity").textContent = city;
    document.getElementById("profileSport").textContent = sport;
    document.getElementById("profileAmbition").textContent = ambition;
});
