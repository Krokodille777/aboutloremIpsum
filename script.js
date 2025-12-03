let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let settingsBtn = document.getElementById('gear');
let settingsModal = document.querySelector('#settingsModal');
let isOpen = false;

const langsObject = {
    "en": "English",
    "ua": "Українська"
}
const darkThemeObject = {
    "bgColor": "#121212",
    "textColor": "#FFFFFF",
    "hrColor": "#2C2C2C",
    "header-footerColor": "#1f162bff",
    "borderColor": "#2C2C2C",
    "buttonColor": "#2C2C2C",
}



let closeModalBtn = document.getElementById("close-btn");



const scrollBtnAppears = () => {
    return new Promise(resolve =>{
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
        resolve();
    }, 100);
};


function scrolltoTopFunction(){
    try{
        scrollBtnAppears();
        targetscrolltoTop();
    }
    catch(e){
        e = console.error("Error in scrolltoTopFunction: ", e);
    }
    
}
function targetscrolltoTop(){
   window.scrollTo({
     top: 0,
     behavior: "smooth"
   })
}


function openSettingsModal(){
    if (!isOpen) {
        settingsModal.style.display = "flex";
        settingsModal.style.flexDirection = "column";
        settingsModal.style.alignItems = "center";
        settingsModal.style.justifyContent = "center";
        isOpen = true;
    } else {
        settingsModal.style.display = "none";
        isOpen = false;
    }
}
let closeSettingModal = () => {
    settingsModal.style.display = "none";
    isOpen = false;
}

window.onscroll = function() {scrollBtnAppears()};

scrollToTopBtn.addEventListener("click", scrolltoTopFunction);

settingsBtn.addEventListener("click", openSettingsModal);

closeModalBtn.addEventListener("click", closeSettingModal);