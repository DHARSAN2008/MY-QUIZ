var gameState=0,contestantCount, database, quiz, question,contestant;

function setup(){
  canvas = createCanvas(1100,500);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("lime");
  
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clearInterval();
    quiz.play();
  }
}
