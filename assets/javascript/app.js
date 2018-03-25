// // Function to start game , load questiobs with start button- timer starts, counters reset to zero

// $( document ).ready(function() {
  
// });
   

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
var questionBank = [];

var timeup;

// //  Start on click of "Start Quiz" button. Call function to display quiz content.
$("#startquiz").on("click", function() {
  
      event.preventDefault();
      $("#buttons").hide();
      displayQuizContent();
 

  //  Set the button alert's timeout to run three seconds after the function's called. When time expires, clear the contents of the divs,  display game over message and results
  timeUp = setTimeout(function() {
        
        $("#quiz-content").empty();
        $("#question").empty();
        $("#score").html("Game Over! Results:");
        $("#buttons").show();
      }, 30000);
    }); 

//Function to display the questions and choices (with radio buttons)
    
      function displayQuizContent ()  {

          for (var i = 0; i < quizContent.length; i++) {

              console.log(quizContent[i].question)

              console.log(quizContent[i].correctAnswer)

              //Display question, then go through loop to disoplay answers with radio buttons

              $("#question").append("<br>"+quizContent[i].question+"<br>");

                        for (var j = 0; j < 4; j++) {

                                var labelname = quizContent[i].choices[j];

                                  var value = j;

                                    var create = $('<form><input type="radio" name="opt-radio" value="'+value+'"><label class="in-line">'+labelname+'</label></form>');
                                      
                                    $("#question").append(create);
                                 
                                             console.log("value: " + value)
            }             
                         }
                  
          }


        //   var main = $("body");
        //   var btns = main.find("#buttons");
        //   var newBtn = $("#buttons")

        //  // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        //  newBtn.addClass("btn btn-info btn-lg center-block");
 
        //  // 5. Then give each "letterBtns" a text equal to "letters[i]".
        //  newBtn.text("Submit Answers");
 
        //  // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        //  btns.append(newBtn);



 

// Submit button for finishing quiz

// var submitAnswers = <button type="button" class="btn btn-primary">Submit</button>

//need function to compare correct answer to user answer


//counter for correct, incorrect and unanswered



//Display quiz results





//Close document ready function
