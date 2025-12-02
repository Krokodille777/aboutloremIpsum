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


window.onscroll = function() {scrollBtnAppears()};

scrollToTopBtn.addEventListener("click", scrolltoTopFunction);