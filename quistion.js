class Question {

    constructor() {
      this.name = createInput("Enter Your Name");
      this.option = createInput("Enter Correct Option");
      this.button = createButton('submit');
      this.title = createElement('h2');
      this.question = createElement('h1')
      this.option1 = createElement('h1')
      this.option2 = createElement('h1')
      this.option3 = createElement('h1')
      this.option4 = createElement('h1')

    }
    hide(){
      this.title.hide();
      this.button.hide();
      this.name.hide();
      this.option.hide();

    }

    display(){
      this.title.html("MyQuiz Game");
      this.title.position(350,0)   

      this.question.html("Question:- What starts and end with the letter 'E',but has only one letter ?");
      this.question.position(100,80);
      this.option1.html("1: Everyone");
      this.option1.position(100,120)
      this.option2.html("2: Envelope");
      this.option2.position(100,160)
      this.option3.html("3: Estimate");
      this.option3.position(100,200)
      this.option4.html("4: Example");
      this.option4.position(100,240)

      this.name.position(200,320)
      this.option.position(500,320)
      this.button.position(420,370);

      this.button.mousePressed(()=>{
        this.title.hide();
        this.name.hide();
        this.option.hide();
        this.button.hide();
        contestant.option = this.option.value();
        contestant.name = this.name.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });

    }

}