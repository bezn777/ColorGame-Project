var numSquare = 6;
var colors = generateRandomColors(numSquare);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i =0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquare = 3 : numSquare = 6 ;
        resets();
    });
}

function resets(){
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    reset.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i = 0; i <square.length; i++){
        if(colors[i]){
            square[i].style.display = "block";
            square[i].style.backgroundColor = colors[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquare = 3;
//     colors =generateRandomColors(numSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0 ; i< square.length ; i++){
//         if(colors[i]){
//             square[i].style.backgroundColor = colors[i]
//         }else{
//             square[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected"); 
//     numSquare = 6;  
//     colors =generateRandomColors(numSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0 ; i< square.length ; i++){
//         square[i].style.backgroundColor = colors[i]
//         square[i].style.display = "block";
//     }
// });

reset.addEventListener("click", function(){
    resets();
});

colorDisplay.textContent = pickedColor;

for(var i=0; i<square.length;i++){
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            reset.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;

        }else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for(var i = 0; i <square.length; i++){
        square[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i< num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}