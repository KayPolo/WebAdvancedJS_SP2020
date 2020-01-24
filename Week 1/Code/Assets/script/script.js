let information = "Hello people";


console.log("Hello");

alert("Greetings" + " "+information);


//document.write("<p>"+ information + "</p>");

//This is the right way to do it
let child = document.createElement("p");
child.innerHTML = information;
document.getElementById('content').appendChild(child); // append





var atributes = ["Blue" , "Green", "Yellow"];

//console.log(atributes[1]);

var myMSG = document.getElementsByClassName('msg');

for (let i = 0; i< atributes.length; i++){
    console.log(atributes[i]);

	for (let j = 0; j< myMSG.length; j++) {
	myMSG[j].innerHTML = atributes[j];
	}
}


