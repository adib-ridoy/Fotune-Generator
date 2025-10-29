document.getElementById("ModifiedTime").textContent = document.lastModified;
const fortunes = [
    "You will have a great day!",
    "Success is in your future.",
    "Happiness is coming your way.",
    "You will find what you seek.",
    "A pleasant surprise is waiting for you.",
    "You will achieve your goals.",
    "Good fortune will come to you.",
    "You will make a new friend.",
    "Expect good news soon.",
    "Your hard work will pay off."
];


// const index = Math.floor(Math.random() * fortunes.length)

// document.getElementById("fortune-message").innerText = fortunes[index]
const fontFamily = ["Story Script", "Limelight", "Lavishly Yours", "Macondo"]



function changeYellow(){
    let yellow = document.getElementById("changeEffect");
    yellow.style.borderColor = "yellow"
    yellow.style.fontFamily = "Story Script"
    yellow.style.fontSize = "3rem"
    yellow.style.backgroundColor = "yellowgreen"
    yellow.style.color = "red"
    localStorage.setItem("border-color","yellow")
    localStorage.setItem("back-color","yellowgreen")
    localStorage.setItem("font-fam","Story Script")
    localStorage.setItem("font-size","3rem")
    localStorage.setItem("font-color","red")
    
}
function changeBlue(){
    let blue = document.getElementById("changeEffect")
    blue.style.borderColor = "blue"
    blue.style.fontFamily = "Limelight"
    blue.style.fontSize = "2.5rem"
    blue.style.backgroundColor = "aquamarine"
    blue.style.color = "#016B61"
    localStorage.setItem("border-color","blue")
    localStorage.setItem("back-color","aquamarine")
    localStorage.setItem("font-fam","Limelight")
    localStorage.setItem("font-size","2.5rem")
    localStorage.setItem("font-color","#016B61")

}
function changeAsh(){
    let ash = document.getElementById("changeEffect")
    ash.style.borderColor = "rgba(137, 136, 136, 1)"
    ash.style.fontFamily = "Lavishly Yours"
    ash.style.fontSize = "5rem"
    ash.style.backgroundColor = "rgba(39, 34, 34, 1)"
    ash.style.color = "#063cbcff"
    localStorage.setItem("border-color","rgba(137, 136, 136, 1)")
    localStorage.setItem("back-color","aquamarine")
    localStorage.setItem("font-fam","Lavishly Yours")
    localStorage.setItem("font-size","5rem")
    localStorage.setItem("font-color","rgba(39, 34, 34, 1)")
}
function changeGreen(){
    let green = document.getElementById("changeEffect")
    green.style.borderColor = "green"
    green.style.fontFamily = "Macondo"
    green.style.fontSize = "4rem"
    green.style.backgroundColor = "chartreuse"
    green.style.color = "#163804ff"
    localStorage.setItem("border-color","green")
    localStorage.setItem("back-color","chartreuse")
    localStorage.setItem("font-fam","Macondo")
    localStorage.setItem("font-size","4rem")
    localStorage.setItem("font-color","#163804ff")
}

function submitFortune(){
    let fortune = document.getElementById("new-fortune").value;
    if (fortune.trim() != ""){
        fortunes.push(fortune);
        console.log(fortune)
        document.getElementById("new-fortune").value="";
    }
}



window.onload = function(){
    let box = document.getElementById("changeEffect");
    box.style.borderColor = localStorage.getItem("border-color");
    box.style.fontFamily = localStorage.getItem("font-fam");
    box.style.fontSize = localStorage.getItem("font-size");
    box.style.backgroundColor = localStorage.getItem("back-color");
    box.style.color = localStorage.getItem("font-color");
    const index = Math.floor(Math.random() * fortunes.length)

    document.getElementById("fortune-message").innerText = fortunes[index]

}