const form = document.getElementById("profileForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const city = document.getElementById("city").value;
    const sport = document.getElementById("sport").value;
    const ambition = document.getElementById("ambition").value;

    document.getElementById("displayName").textContent = name;
    document.getElementById("displayAge").textContent = age;
    document.getElementById("displayGender").textContent = gender;
    document.getElementById("displayCity").textContent = city;
    document.getElementById("displaySport").textContent = sport;
    document.getElementById("displayAmbition").textContent = ambition;

    document.getElementById("avatarLetter").textContent =
        name.charAt(0).toUpperCase();
});
