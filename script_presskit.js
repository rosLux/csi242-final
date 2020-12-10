//sorry this file is so bloated kayla :(

//11. attempting to create and modify stylesheets, but once again like a lot of things in this project i don't know how to do it properly
window.addEventListener("load", setMyStyle);
function setMyStyle() {
    var myStyle = document.createElement("link");
    myStyle.setAttribute("rel","styleSheet");
    myStyle.setAttribute("id","myStyle");
    myStyle.setAttribute("href","ss_insert.css");
    document.head.appendChild(myStyle);
    document.styleSheets[document.styleSheets.length-1].insertRule(
        "body h2 { \
            font-style: italic; \
        }"
    );
}

//set up mail form to respond to button click using anonymous function, adds/removes html
var mailForm = document.forms.mailForm;
//child element to change on submission, using removeChild and appendChild
var mailResult = document.createElement("img");
mailResult.setAttribute("src", "img/index_center.png");
mailResult.setAttribute("class", "imgCenter");
var mailResultText = document.createElement("p");
mailResultText.innerHTML = "Please enter your name and email address!";
mailForm.appendChild(mailResult);
mailForm.appendChild(mailResultText);

//3.b. modify existing content in DOM
//button click event
//5. JS code that adds and removes DOM elements in response to events
//5.a. createElement is used ^
//5.b. appendChild is used
//5.c. removeChild is used
document.getElementById("mailButton").addEventListener("click", function () {
    if (mailForm.elements.mailName.value != "" && mailForm.elements.mailAddress.value != "") {
        //empty text fields
        mailForm.elements.mailName.value = null;
        mailForm.elements.mailAddress.value = null;
        //removeChild and replace using appendChild
        mailForm.removeChild(mailResult);
        mailForm.removeChild(mailResultText);
        mailResult.setAttribute("src", "img/index_center2.png");
        mailResult.setAttribute("class", "imgCenter");
        mailResultText.innerHTML = "Thanks for joining!";
        mailForm.appendChild(mailResult);
        mailForm.appendChild(mailResultText);
    }
    else if (mailForm.elements.mailName.value == "" || mailForm.elements.mailName.value == "") {
        mailForm.removeChild(mailResult);
        mailForm.removeChild(mailResultText);
        mailResult.setAttribute("src", "img/sit.png");
        mailResult.setAttribute("class", "imgCenter");
        mailResultText.innerHTML = "Please enter a valid email address! Don't forget your name!";
        mailForm.appendChild(mailResult);
        mailForm.appendChild(mailResultText);
    }
});

//6. attempting to modify classList of an element, but to be honest i don't know what i'm doing
document.getElementById("pressHeader").classList.add("bold");