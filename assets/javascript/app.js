$(document).ready(function() {
  // Define variables: object for questions. answers, correctanswer, variables (counters) for correct and incorrect guesses

  var quizContent = [
    {
      question: "Which soap opera included the character Erica Kane?",
      choices: [
        "All My Children",
        "One Life to Live",
        "General Hospital",
        "The Young & the Restless"
      ],
      correctAnswer: 0
    },
    {
      question: "Which character does Mark Harmon play on NCIS?",
      choices: [
        "Anthony Dinozo",
        "Jethro Gibbs",
        "Timothy McGee ",
        "Leon Vance"
      ],
      correctAnswer: 1
    },
    {
      question: "In which series did George Clooney play Dr. Doug Ross?",
      choices: ["Grey's Anatomy", "ER", "Scrubs", "The Good Doctor"],
      correctAnswer: 1
    },
    {
      question: "What actress played the character Marissa Cooper on The OC?",
      choices: [
        "Rachel Bilson",
        "Mischa Barton",
        "Kelly Rowan",
        "Melinda Clarke"
      ],
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

  //Define scoring variables (counters/timer)

  var correctCount;
  var incorrectCount;
  var unAnsweredCount;
  var correctAnswers = [0, 1, 1, 1, 3, 3];
  var checkedButtons;
  var number = 30;
  var create;
  var intervalId;

  //Countdown function
  function run() {
    var number = 30;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {
    number--;

    //  Display time remaining.

    $("#status").text("Time Remaining: " + number + " seconds");

    //Call the stop function when timer hits 0, clear out the quiz contents and display score info
    if (number === 0) {
      stop();

      function stop() {
        clearInterval(intervalId);
        number = 30;

        var checkedButtons = [];
        var correctCount = 0;
        var incorrectCount = 0;
        var unAnsweredCount = 0;
        //Store radio button values in an array
        var responseVal = $("#choiceForm0 input:checked").val();
        checkedButtons.push(responseVal);
        var responseVal = $("#choiceForm1 input:checked").val();
        checkedButtons.push(responseVal);
        var responseVal = $("#choiceForm2 input:checked").val();
        checkedButtons.push(responseVal);
        var responseVal = $("#choiceForm3 input:checked").val();
        checkedButtons.push(responseVal);
        var responseVal = $("#choiceForm4 input:checked").val();
        checkedButtons.push(responseVal);
        var responseVal = $("#choiceForm5 input:checked").val();
        checkedButtons.push(responseVal);

        console.log("Answers selected: " + checkedButtons);
        console.log("Correct Answers: " + correctAnswers);
//compare checked answers to correct answers
        for (var k = 0; k < 6; k++) {
          if (checkedButtons[k] === undefined) {
            unAnsweredCount++;
          } else if (checkedButtons[k] == correctAnswers[k]) {
            correctCount++;
          } else {
            incorrectCount++;
          }
        }
        //Empty question div and display scoring info

        $("#quiz-content").empty();
        $("#status").empty();
        $("#question").empty();
        $("#submitAnswers").hide();
        $("#score").html("Game Over!<br>");
        $("#score").append(
          "<br>" +
            "Score: " +
            Math.round(correctCount / quizContent.length * 100) +
            "%" +
            "<br>"
        );
        $("#score").append(
          "<br>" + "Correct Answers: " + correctCount + "<br>"
        );
        $("#score").append(
          "<br>" + "Incorrect Answers: " + incorrectCount + "<br>"
        );
        $("#score").append("<br>" + "Unanswered Questions: " + unAnsweredCount);
        $("#startquiz").show();
      }
    }
  }
  //Function to display the questions and choices (with radio buttons), creates new divs/forms for the radio buttons

  function displayQuizContent() {
    // $("#quiz-content").text("Time Remaining: " +number+ " seconds");

    for (var i = 0; i < quizContent.length; i++) {
      console.log(quizContent[i].question);

      console.log(quizContent[i].correctAnswer);

      //Display question, then go through loop to display answers with radio buttons

      $("#question").append("<br>" + quizContent[i].question + "<br>");

      var newForm = $("<fieldset/>");

      var cform = "choiceForm" + i;
      var cname = "optradio" + i;

      $(newForm).attr("id", cform);

      $(newForm).attr("class", "form-group");

      $(newForm).attr("name", cname);

      $("#question").append(newForm);

      for (var j = 0; j < 4; j++) {
        var labelname = quizContent[i].choices[j];

        var value = j;

        var newId = "radio" + j;

        var create = $(
          '<input type="radio" name="' +
            cname +
            '"  id= "' +
            newId +
            '" value="' +
            value +
            '"><label class="radio-inline">' +
            labelname +
            "</label>"
        );

        $(newForm).append(create);

        console.log("value: " + value);
      }
    }
    //   $("#submitAnswers").show();
    $(
      "<input type='submit' value='Submit' id='submitAnswers' class='btn-lg center-block'/>"
    ).appendTo(newForm);
  }

  // //  Start on click of "Start Quiz" button. Hide start quiz button, display submit answers button and call functions to display quiz content and start timer.
  $("#startquiz").on("click", function() {
    event.preventDefault();

    $("#startquiz").hide();
    $("#score").empty();

    run();

    displayQuizContent();
  });

  $("#question").on("submit", function(e) {
    e.preventDefault();
    clearInterval(intervalId);
    number = 30;



      var checkedButtons = [];
      var correctCount = 0;
      var incorrectCount = 0;
      var unAnsweredCount = 0;
  //Store radio button values in an array
  var responseVal = $("#choiceForm0 input:checked").val()
  checkedButtons.push(responseVal)
  var responseVal = $("#choiceForm1 input:checked").val()
  checkedButtons.push(responseVal)
  var responseVal = $("#choiceForm2 input:checked").val()
  checkedButtons.push(responseVal)
  var responseVal = $("#choiceForm3 input:checked").val()
  checkedButtons.push(responseVal)
  var responseVal = $("#choiceForm4 input:checked").val()
  checkedButtons.push(responseVal)
  var responseVal = $("#choiceForm5 input:checked").val()
  checkedButtons.push(responseVal)

  console.log("Answers selected: " + checkedButtons)
  console.log("Correct Answers: " + correctAnswers)

  for (var k = 0; k < 6; k++) {

  if (checkedButtons[k] === undefined){
      unAnsweredCount++
  }
  else if (checkedButtons[k] == correctAnswers[k]){
      correctCount++
  }
  else {
      incorrectCount++
  }

  }

  $("#quiz-content").empty();
  $("#status").empty();
  $("#question").empty();
  $("#submitAnswers").hide();
  $("#score").html("Game Over!<br>");
  $("#score").append("<br>"+"Score: "+Math.round((correctCount/quizContent.length)*100)+"%"+"<br>");
  $("#score").append("<br>"+"Correct Answers: " + correctCount + "<br>");
  $("#score").append("<br>"+"Incorrect Answers: " + incorrectCount + "<br>");
  $("#score").append("<br>"+"Unanswered Questions: " + unAnsweredCount);

  $("#startquiz").show();
  console.log("correct: " +correctCount+ "incorrect: " +incorrectCount+ "unanswered: " + unAnsweredCount)

  })
});
