class Quiz {
  constructor(){
    this.answer = createElement("h2")
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
   
    //write code to change the background color here
   

    //write code to show a heading for showing the result of Quiz
    textSize(50)
    text("Result Of The Quiz",100,-140)
    

    //call getContestantInfo( ) here
   getContestantInfo()
 var contestantInfo = database.ref("contestants")
 contestantInforef.on("value",(data) =>{
  allContestants = data.val()
})
  

    //write condition to check if contestantInfor is not undefined
   if(allContestants !== undefined){
    file("blue")
    textSize(20);
    text("NOTE : Contenstants who answered correctly are highlited in green color",130,230);
   }
   for (var plr in allContestants){
     var correctAns = "2";
   }
   if(correctAns === allContestants[plr].answer){
   fill("green")
   } else 
     fil("red");
   
    //write code to add a note here
  
    //write code to highlight contest who answered correctly
    
  }

}
