"use strict";

// const klasseliste = ["Lasse", "Andreas", "Gauti", "Astrid", "Marie", "Troels", "Malou"];

// for (let i = 0; i < klasseliste.length; i++) {
//     console.log(`${i + 1}. ${klasseliste[i]}`);
// }

// function message(){
//     let firstName = prompt("Indtast dit navn her:");
    
//     alert(`Hej ${firstName}! Ha' en god dag!`);

// }

// message();

function adgang(){
    let age = prompt("Hvor gammel er du?")
    age = parseInt(age);
    
    while(condition) {
        if(isNaN(age)){
            alert("Indtast en gyldig alder");
            return;
        }

        if(age < 18){
            alert("Du er ikke gammel nok til denne hjemmeside")
            break;
        }
        else if(age >= 18){
            alert("Du er gammel nok! Velkommen til hjemmesiden")
            break;
        }
    }    
}

adgang();