/*
 * Original Code by Lucien Huang! 
 */
const images = [
    "newschoolbuilding.jpg",
    "050615_Festival_052_750x563.jpg",
    "745127-original.jpg",
    "1496605813404.jpeg",
    "bigimg_parsons.png",
    "D10_01.jpg",
    "DnKbS0IX4AEBA5-.jpg",
    "exterior-PortalImages.jpg",
    "newschoolbuilding.jpg",
    "Parsons_about_5607thave.jpg",
    "Parsons-about.jpg",
    "SP16_SummerIntensive_Nector_Parsons.jpg",
    "The-New-School-Student-Life-3.jpg",
    "The-New-School’s-Parsons-School-of-Design-3.jpg",
    "tish.jpg"];


    /* 
    1. Create columns
    2. Place images inside columns
    3. Hover, change color
    4. Click images
    5. Open images
    6. close images
    
    */

let imgSwitch = 0; 

document.addEventListener("DOMContentLoaded", ()=>{
    loadImages();
})


loadImages = ()=>{

    let imageNumber = 0;

    let columns = document.getElementsByClassName("column");

    for(let i = 0 ; i < images.length ; i++){

        let newImg = document.createElement('img');
        newImg.className = "images";
        newImg.id = i; 
        newImg.src = "./assets/images/"+ images[i];

        columns[imageNumber].appendChild(newImg);
        imageNumber++;

        if(imageNumber > columns.length - 1){
            imageNumber = 0;
        }

        newImg.addEventListener('click', (banana)=>{

            newPop(banana.target.id);
            imgSwitch = banana.target.id;
        })

    }
}


newPop = (imgCount) => {

    imgSwitch = imgCount;
    let popUp = document.getElementById("popup");

    var img = document.getElementById("pic");

    popUp.style.display = "block";
    popUp.zIndex = "1";

    // img.addEventListener('click', ()=>{

    // });

    img.src = "./assets/images/"+ images[imgCount];



}

