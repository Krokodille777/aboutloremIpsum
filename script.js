let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let settingsBtn = document.getElementById('gear');
let settingsModal = document.querySelector('#settingsModal');
let closeModalBtn = document.getElementById("close-btn");
let themeBtn = document.getElementById("toggleThemeBtn"); 
let languageBtn = document.getElementById("toggleLanguageBtn");
let saveBtn = document.getElementById("saveChangesBtn");

let isOpen = false;





// --- Scroll Logic ---
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
        // Ensure the button visibility is updated before scrolling
        scrollBtnAppears();
        // Call the scroll to top function
    targetscrolltoTop();
    }
    catch(e){
        e = console.error("Ooops... something went wrong. Please check your scrollToTopFunction and try again ", e);
    }
}

function targetscrolltoTop(){
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- Modal Logic ---
function openSettingsModal(){
    if (!isOpen) {
        settingsModal.style.display = "flex";
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

// --- THEME LOGIC ---

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


let intro = document.getElementById("intro");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let thankYouMessage = document.getElementById("thankYouMessage");
let ideasMessage = document.getElementById("ideasMessage");
let secondh2 = document.getElementById("secondh2");
let thirdh2 = document.getElementById("thirdh2");
let fourthh2 = document.getElementById("fourthh2");
let bqlorem = document.getElementById("bqlorem");
let isEnglish = false;
let isUkrainian = true;



function translation(){
    if (isUkrainian){
        languageBtn.innerText = "Українська";
        intro.innerText = "Introduction";
        p1.innerText = "Lorem ipseum dolor sit amet ..., this phrase is as popular as 'hello, world!' among programmers. Despite where it is used, Lorum Ipsum remains the de facto standard for placeholder text in the printing and web design industry. But it is interesting to know how such a strange phrase even appeared and what path it took to gain such popularity? On this page, I will tell you about the evolution of Lorem Ipsum from its mysterious beginnings to its modern usage. I hope everyone will find it interesting!";
        p2.innerText = "It all started back in 45 BC, in the heart of the Roman Empire. One day, the famous Roman orator and politician Cicero decided to write a treatise on ethics called 'De Finibus Bonorum et Malorum' (On the Extremes of Good and Evil). This work contains the words:"+bqlorem.innerText+" which means 'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...'. This phrase was taken out of context and used as placeholder text in printing. It was perfect for this purpose because it contains a variety of letters and words, making it resemble natural text, yet it has no meaning.";
        p3.innerText = 'Which translates to: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...".';
        p4.innerText = "For centuries, Lorem Ipsum has been used in printing as a standard placeholder text. In the 1960s, with the advent of phototypesetting, Lorem Ipsum received a new life. Companies like Letraset released sheets with Lorem Ipsum that designers could use for layouts. With the development of digital typography and the emergence of desktop publishing software like Aldus PageMaker, Lorem Ipsum became even more widespread.";
        p5.innerText = "Today, Lorem Ipsum is an integral part of web design and development, remaining relevant for over 2000 years. Many online Lorem Ipsum generators allow users to create placeholder text of varying lengths and styles. Lorem Ipsum is used not only in printing but also in web design, graphic design, and even programming.";
        thankYouMessage.innerText = "Thank you very much for taking the time to learn about Lorem Ipsum! I hope you found it interesting.";
        ideasMessage.innerText = "If you have ideas about what the next websites will be about, write in the comments under this repository.";
        secondh2.innerText = "The Origins of Lorem Ipsum";
        thirdh2.innerText = "The Evolution of Lorem Ipsum";
        fourthh2.innerText = "Lorem Ipsum Today";
        isUkrainian = false;
        isEnglish = true;
    }
    else if (isEnglish){
        languageBtn.innerText = "English";
        intro.innerText = "Ознайомлення";
        p1.innerText = "Lorem ipseum dolor sit amet ...,  цей вираз такий ж популярний як і 'hello, world!' серед програмістів. Незважаючи на те, де його використовують, Lorum Ipsum залишається стандартом де-факто для тексту-заповнювача в галузі друку та веб-дизайну. Але цікаво, як така дивна фраза взагалі з'явилася і який шлях вона зробила, щоб набрати таку популярність? Ось у цієї сторінці, я розповім вам про еволюцію Lorem Ipsum від його загадкових початків до його сучасного використання. Сподіваюся усім буде цікаво!";
        p2.innerText = "А все почалося ще в далекому 45 році до нашої ери, у самому серці Римської імперії. Одного разу, відомий римсткий оратор і політик Цицерон вирішив написати трактат про етику під назвою 'De Finibus Bonorum et Malorum' (Про межі добра і зла). Цей твір містить такі слова: "+bqlorem.innerText+" Ця фраза була вирвана з контексту і використана як заповнювач тексту в друкарстві. Вонаідеально подійшла для цієї мети, бо містить різноманітні літери і слова, що робить її схожою на природний текст, проте немає сенсу.";
        p3.innerText = 'Що в перекладі означає: "Немає нікого, хто б любив біль сам по собі, хто б шукав його і хотів би отримати його, просто тому, що це біль...".';
        p4.innerText = "Протягом століть Lorem Ipsum використовувався в друкарстві як стандартний текст-заповнювач. У 1960-х роках, з появою фотокомпозиції, Lorem Ipsum отримав нове життя. Компанії, такі як Letraset, випустили листи з Lorem Ipsum, які дизайнери могли використовувати для макетів. З розвитком цифрової типографії і появою програмного забезпечення для настільних видавництв, таких як Aldus PageMaker, Lorem Ipsum став ще більш поширеним.";
        p5.innerText = "Сьогодні Lorem Ipsum є невід'ємною частиною веб-дизайну і розробки, яка не теряє своєї актуальності вже понад 2000 років.";
        thankYouMessage.innerText = "Дуже дякую, що знайшли час для ознайомлення з Lorem Ipsum! Сподіваюся, вам було цікаво. Багато онлайн-генераторів Lorem Ipsum дозволяють користувачам створювати текст-заповнювачі різної довжини і стилю. Lorem Ipsum використовується не тільки в друкарстві, але й у веб-дизайні, графічному дизайні та навіть у програмуванні.";
        ideasMessage.innerText = "Якщо в вас є ідеї про що буде йти мова у наступних веб-сайтах, напишіть в комментарях під цим репозиторієм.";
        secondh2.innerText = "Походження Lorem Ipsum";
        thirdh2.innerText = "Еволюція Lorem Ipsum";
        fourthh2.innerText = "Lorem Ipsum Сьогодні";
        isUkrainian = true;
        isEnglish = false;
    }
}
    saveBtn.innerText = "Save";
    
    function saveChanges(){
        if(document.body.classList.contains("dark-theme")){    
            localStorage.setItem("theme", "dark"); //localStorage - це веб-сховище, яке дозволяє зберігати дані у браузері користувача.
        }
        else{
            localStorage.setItem("theme", "light");

        }
        if (isEnglish){
            localStorage.setItem("language", "english");
        }
        else{
            localStorage.setItem("language", "ukrainian");
        }
    }
    
 

// Check for saved theme preference on load
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-theme");
    themeBtn.innerText = "Light Mode";
}
else{
    themeBtn.innerText = "Dark Mode";
}

if (localStorage.getItem("language") === "english"){
    translation();
}
else if (localStorage.getItem("language") === "ukrainian"){
    // Do nothing, default is Ukrainian
}
window.onscroll = function() { scrollBtnAppears() };
scrollToTopBtn.addEventListener("click", scrolltoTopFunction);
settingsBtn.addEventListener("click", openSettingsModal);
closeModalBtn.addEventListener("click", closeSettingModal);
themeBtn.addEventListener("click", enableThemeSettings);
languageBtn.addEventListener("click", translation);
saveBtn.addEventListener("click", saveChanges());