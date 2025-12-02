let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let settingsBtn = document.getElementById('gear');
let settingsModal = document.getElementById('settingsModal');


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
    settingsModal.style.display = "block";
}

window.onscroll = function() {scrollBtnAppears()};

scrollToTopBtn.addEventListener("click", scrolltoTopFunction);

settingsBtn.addEventListener("click", openSettingsModal);