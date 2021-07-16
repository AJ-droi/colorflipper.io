const color = document.querySelector('.color');
const btn = document.querySelector('.btn');
let container = document.querySelector('.container');

const getColor = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8","9"];

function getRandomColor() {
    return Math.floor(Math.random() * getColor.length);
    }

btn.addEventListener("click",function(){
    let getNum = "#";

    for (let i=0; i<6; i++){
        getNum += getColor[getRandomColor()];
    };

    color.innerHTML= getNum
        document.body.style.backgroundColor=getNum;
    });



