const form = document.getElementById("profileForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const city = document.getElementById("city").value.trim();
    const sport = document.getElementById("sport").value.trim();
    const ambition = document.getElementById("ambition").value.trim();

    document.getElementById("displayName").textContent = name;
    document.getElementById("displayAge").textContent = age;
    document.getElementById("displayGender").textContent = gender;
    document.getElementById("displayCity").textContent = city;
    document.getElementById("displaySport").textContent = sport;
    document.getElementById("displayAmbition").textContent = ambition;

    // First letter for avatar
    document.getElementById("avatarLetter").textContent =
        name ? name.charAt(0).toUpperCase() : "M";
});
