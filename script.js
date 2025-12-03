let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let settingsBtn = document.getElementById('gear');
let settingsModal = document.querySelector('#settingsModal');
let closeModalBtn = document.getElementById("close-btn");
// FIX: Correct variable name to match usage
let themeBtn = document.getElementById("toggleThemeBtn"); 

let isOpen = false;

// --- Scroll Logic (Kept mostly the same) ---
const scrollBtnAppears = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

function scrolltoTopFunction(){
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- Modal Logic ---
function openSettingsModal(){
    if (!isOpen) {
        settingsModal.style.display = "flex";
        // Recommended: Add these styles in CSS class .modal-open instead of JS
        settingsModal.style.flexDirection = "column"; 
        settingsModal.style.alignItems = "center";
        settingsModal.style.justifyContent = "center";
        isOpen = true;
    } else {
        closeSettingModal();
    }
}

let closeSettingModal = () => {
    settingsModal.style.display = "none";
    isOpen = false;
}

// --- THEME LOGIC (The Fixed Part) ---

function enableThemeSettings() {
    // This simply adds/removes the class 'dark-theme' from the body
    document.body.classList.toggle("dark-theme");

    // Update the button text based on the current state
    if (document.body.classList.contains("dark-theme")) {
        themeBtn.innerText = "Light Mode";
    } else {
        themeBtn.innerText = "Dark Mode";
    }
}

// --- Initialization ---

// Check for saved theme preference on load
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-theme");
    themeBtn.innerText = "Light Mode";
}

window.onscroll = function() { scrollBtnAppears() };
scrollToTopBtn.addEventListener("click", scrolltoTopFunction);
settingsBtn.addEventListener("click", openSettingsModal);
closeModalBtn.addEventListener("click", closeSettingModal);
themeBtn.addEventListener("click", enableThemeSettings);