//1. script.js linked to index.html
//2. window onload event listener
//13. all original content relating to a theme
window.addEventListener("load", init);
setInterval(init,1000);

//7. use date() object to display current date and time in index
//12.1. named function
function init() {
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();
    document.getElementById("dateNow").innerHTML = dateStr + " || " +  timeStr;
}

var contactForm = document.forms.contactForm;

//3.a. create additional HTML content and append to DOM
//10. HTML form elements, including
//10.1. <input>
//10.2. text fields
//10.3. textarea
//10.4. checkbox
//no regular expression, i couldn't figure out the syntax, sorry
//12.2. anonymous function
//12.3. self-invoking function
document.getElementById("contactButton").addEventListener("click", function () {
    if ((contactForm.elements.contactEmail.value != "") && (contactForm.elements.contactTextArea.value) != "") {
        //clear text fields
        contactForm.elements.contactTextArea.value = "";
        contactForm.elements.contactEmail.value = "";
        //create element to add
        var contactFormResult = document.createElement("img");
        contactFormResult.setAttribute("src","img/question.png");
        //append element to DOM
        var form = document.querySelector("form");
        form.appendChild(contactFormResult);
    }
});

//4. mouse events to respond using JS functions, but they use html attributes and not event handlers (i don't know why i couldn't
// get them to work no matter what i did, so i gave up. sorry) i don't expect full credit for this :(
function changeImg() {
    document.getElementById("anim").setAttribute("src", "img/index_center2.png");
}
function revertImg() {
    document.getElementById("anim").setAttribute("src", "img/index_center.png");
}
//4.c. using a timer in an event
function sip() {
    document.getElementById("him").setAttribute("src", "img/cast_tucker2.png");
    setTimeout(function () {document.getElementById("him").setAttribute("src", "img/cast_tucker.png")}, 2000);
}
//4.b. attempting to add an event listener for a keydown, but it doesn't respond in the page. i don't know. i haven't figured it out. frankly i'm about to lose my mind
document.addEventListener('keydown', function (event) {
    if (event.key == 37) {
        document.getElementById("her").setAttribute("src", "img/question.png");
    }
});

