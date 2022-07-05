
let channelName = "welcomePage";

let answerInput 

function preload() {

  you = random (0,1000000);
  console.log (you);
  you = int (you);
  console.log (you);
  you = you.toString ();

}
function setup() {

    createCanvas(windowWidth, windowHeight);

    answerInput = createInput();
    answerInput.style('font-size', '30px');
    answerInput.position(windowWidth/3, 325);

    submitButton = createButton("Comment");
    submitButton.position(windowWidth/3, 400);
    submitButton.style('font-size', '30px');

    var textArray = new Array ();
    textArray[0] = "Durian";
    textArray[1] = "Tomato";
    textArray[2] = "Violence";
    textArray[3] = "Horror Movies";
    textArray[4] = "BTS";
    textArray[5] = "Avocado";

    var i = Math.random();
    i = 6 * i;
    i = Math.floor(i);

    var i = Math.floor(6*Math.random())
    
    document.write(textArray[i]);


    
  
  }
  
function draw() {
  background(255);

  textSize(30);

  textAlign(CENTER);

  text("Welcome! This is an anonymous channel.", windowWidth/2, 100);

  text("How do you think about the following subject? Feel free to make comments.", windowWidth/2, 150)

  textSize(40);
  text(textArray[i], windowWidth/2, 200);
  

  






  // on submit enter the information
  submitButton.mousePressed(sendTheMessage);

}
 
function sendTheMessage() {

    // load a new page when you press submit
    window.location.href = "/../_pageTwo/index.html?you="+you+"&r="+redVal+"&g="+greenVal+"&b="+blueVal; 
  }
