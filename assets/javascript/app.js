// // Function to start game , load questiobs with start button- timer starts, counters reset to zero

// $( document ).ready(function() {



// Define variables: object for questions. answers, correctanswer, variables (counters) for correct and incorrect guesses

var quizContent = [
  {
      question: "Which soap opera included the character Erica Kane?",
      choices: ["All My Children", "One Life to Live", "General Hospital", "The Young & the Restless"], 
      correctAnswer: 0
  },
  {
      question: "Which character does Mark Harmon play on NCIS?",
      choices: ["Anthony Dinozo","Jethro Gibbs", "Timothy McGee ", "Leon Vance"],
      correctAnswer: 1
  } ,
  {
      question: "In which series did George Clooney play Dr. Doug Ross?",
      choices: ["Grey's Anatomy","ER", "Scrubs", "The Good Doctor"],
      correctAnswer: 1
  },
  {
      question: "What actress played the character Marissa Cooper on The OC?",
      choices: ["Rachel Bilson", "Mischa Barton", "Kelly Rowan", "Melinda Clarke"],
      correctAnswer: 1
  },
  {
      question: "Which bingeworthy series included the character Walter White?",
      choices: ["Better Call Saul", "House of Cards", "Narcos", "Breaking Bad"],
      correctAnswer: 3
  },
  {
      question: "Which show is the longest running on tv with 29 seasons?",
      choices: ["Mash", "Brady Bunch", "Law and Order", "The Simpsons"],
      correctAnswer: 3
  }   
];

console.log(quizContent)


//Define scoring variables (counters/timer)

var correctCount = 0;
var incorrectCount = 0;
var unAnsweredCount = 0;
var checkedButtons = [];

var create; 

// //  Start on click of "Start Quiz" button. Hide start quiz button, create new submit answers button and call function to display quiz content.
$("#startquiz").on("click", function() {
  
      event.preventDefault();
      $("#startquiz").hide();
      $("#score").empty();
      var correctCount = 0;
        var incorrectCount = 0;
        var unAnsweredCount = 0;

      

        displayQuizContent();

        // $("#submitAnswers").on("click", function() {
  
        //     event.preventDefault();
            
      
        //       scoreCheck();


  //  Set the button alert's timeout to run three seconds after the function's called. When time expires, clear the contents of the divs,  
//   display game over message and call score check funciton for results
  
// var countdown;
// var countdown_number;

// function countdown_init() {
//     countdown_number = 11;
//     countdown_trigger();
// }

// function countdown_trigger() {
//     if(countdown_number > 0) {
//         countdown_number--;
//         $('countdown_text').innerHTML = countdown_number;
//         if(countdown_number > 0) {
//             countdown = setTimeout('countdown_trigger()', 1000);


//                 $("#quiz-content").empty();
//                 $("#question").empty();
//                 $("#submitAnswers").hide();
//                 $("#score").html("Game Over!<br>");
            
//             scoreCheck();     

// 	}

// 	function countdown_clear() {
// 		clearTimeout(countdown);
// 	}

    timeUp = setTimeout(function() {
                
                    $("#quiz-content").empty();
                    $("#question").empty();
                    $("#submitAnswers").hide();
                    $("#score").html("Game Over!<br>");
                
                scoreCheck();
            
            
            }, 20000);

        });
        

//Function to display the questions and choices (with radio buttons)
    
      function displayQuizContent ()  {

        $("#quiz-content").text("Time Remaining: " +30+ " seconds");


          for (var i = 0; i < quizContent.length; i++) {

              console.log(quizContent[i].question)

              console.log(quizContent[i].correctAnswer)

              //Display question, then go through loop to disoplay answers with radio buttons

              $("#question").append("<br>"+quizContent[i].question+"<br>");

                    var newForm = $("<form/>");

                        var cform = "choiceForm" + i;

                        $(newForm).attr("id", cform);

                        $(newForm).attr("class", "form-group");

                        $("#question").append(newForm);

                        for (var j = 0; j < 4; j++) {

                                var labelname = quizContent[i].choices[j];

                                  var value = j;

                                  var newId = "radio" + j;


                                    var create = $('<input type="radio" name="optradio" id= "'+newId+'" value="'+value+'"><label class="radio-inline">'+labelname+'</label>');
                                      
                                    $(newForm).append(create);
                                 
                                             console.log("value: " + value);                                                                              
                        }  
                        
                     
                        
                //        
                //  }    
            };
                 
            var newButton = $("<button/>");
            $(newButton).attr("class","btn btn-info btn-lg center-block");
            $(newButton).attr("type","Submit");
            $(newButton).attr("id","submitAnswers");
            $(newButton).text("Submit Answers");
            $("#question").append(newButton);  



            $("#submitAnswers").click(function(scoreCheck) {

                event.preventDefault();
    
              })


}



        //   $('#submitAnswers').click(function() {
        //     var selValue = $('input[name=optradio]:checked').val(); 
        //     $('#score').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
        // });

     



          function scoreCheck()      {


            for (var k = 0; k < quizContent.length; k++) {


                var userAnswer = ('#choiceForm'+k+"input[name=optradio]:checked") == true.valueOf();

                (checkedButtons).push(userAnswer)

                if (checkedButtons[k]===quizContent[k].correctAnswer){

                    correctCount++

                        console.log(correctCount)
                        console.log(userAnswer)
                        console.log("Question" +k+ checkedButtons)

        
                    }

                }  
            $("#score").append("<br>"+"Score: "+correctCount/quizContent.length+"%"+"<br>");
            $("#score").append("<br>"+"Correct Answers: " + correctCount + "<br>");
            $("#score").append("<br>"+"Incorrect Answers: " + incorrectCount + "<br>");
            $("#score").append("<br>"+"Unanswered Questions: " + unAnsweredCount);

            $("#startquiz").show();  
               
    }
                
        

        // });

            
                          

                       
                        
