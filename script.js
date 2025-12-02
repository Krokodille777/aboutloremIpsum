let scrollToTopBtn = document.getElementById("scrollToTopBtn");

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
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    catch(e){
        e = console.error("Error in scrolltoTopFunction: ", e);
    }
    finally {
        return;
    }
    
}


window.onscroll = function() {scrollBtnAppears()};

scrollToTopBtn.addEventListener("click", scrolltoTopFunction);