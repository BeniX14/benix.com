document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const adminContainer = document.getElementById("admin-container");
    const userPanel = document.getElementById("user-panel");
    const welcomeMessage = document.getElementById("welcome-message");
    const logoutButton = document.getElementById("logout-button");

    const usersDatabase = [
        { username: "BeniX", password: "kukimuki", role: "premium" },
        // További felhasználók...
    ];

    let currentUser = null; // Az aktuális felhasználó kezelésére

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const username = usernameInput.value;
        const password = passwordInput.value;

        const user = usersDatabase.find(u => u.username === username && u.password === password);

        if (user) {
            // Bejelentkezett felhasználó kezelése
            currentUser = user; // Bejelentkezett felhasználó tárolása

            welcomeMessage.textContent = `Üdvözöllek, ${user.username}!`;

            if (user.role === "premium") {
                // Prémium felhasználó kezelése
                // ...

                // Példa: Prémium felhasználók listájának megjelenítése
                adminContainer.innerHTML = '<h2>Fiókok</h2><ul><li>Felhasználó1</li><li>Felhasználó2</li></ul>';
            } else {
                // Nem prémium felhasználó kezelése
                // ...

                // Példa: Üzenetküldési lehetőség
                userPanel.innerHTML = '<button>Küldj üzenetet</button>';
                logoutButton.style.display = "block"; // Kijelentkezés gomb megjelenítése
            }

            // Bejelentkezési űrlap elrejtése
            loginForm.style.display = "none";
            userPanel.classList.remove("hidden");
        } else {
            // Sikertelen bejelentkezés
            console.log("Hibás felhasználónév vagy jelszó. Sikertelen bejelentkezés.");
        }
    });

    logoutButton.addEventListener("click", function() {
        // Kijelentkezés gomb eseménykezelője
        currentUser = null; // Felhasználói adat törlése

        // Példa: Visszalépés a bejelentkezéshez
        welcomeMessage.textContent = "";
        userPanel.classList.add("hidden");
        adminContainer.innerHTML = ""; // Töröljük az admin felület tartalmát
        loginForm.style.display = "block";
        logoutButton.style.display = "none"; // Kijelentkezés gomb elrejtése
    });
});
