$(document).ready(function () {
    $("#start").click(function(){
        triviaQuestions();

        $(time).show();
        $(questionArray).show();
        
    })

    var yourScore = 0;
    var wins = 0;
    var losses = 0;
    var userselection = []
    var question = "";
    var questionArray= [];
    
    var clock = {
        time:5,
        count:function(){
            clock.time--;
            $("#time").html("You have "+ clock.time + " seconds to complete this test");
            if (clock.time==0){
               clearInterval(counter);
               clock.time=5;
               clock.reset();

            };
        },
        start: function(){
            $("#time").html("You have "+ clock.time + " seconds to complete this test").hide();
            counter = setInterval(clock.count,1000);
        },
        reset: function(){
            $("#time").html("You have "+ clock.time + " seconds to complete this test");
            counter = setInterval(clock.count, 1000);
        },

         }

         clock.start();

    function triviaQuestions() {
        questionArray = [{
            question: "1. Which is the capital of Australia?",
            button: ["Canberra", "Sydney", "Melbourne", "Perth"],
            correctAnswer: 0
        },
        {
            question: "2.In what year the breaking of the Berlin Wall began?",
            answers: ["1989", "1990", "1987", "1980"],
            correctAnswer: 0
        },
        {
            question: "3.Where the Sistine Chapel is located:",
            answers: ["Rome", "France", "Vatican City", "Budapest"],
            correctAnswer: 2
        },
        {
            question: "The Prime Minister of Canada is called?",
            answers: ["Angela Merkel", "Theresa May", "Justin Trudeau", "Stefan Lofven"],
            correctAnswer: 2
        },
        {
            question: "5.How many oceans has the planet",
            answers: ["6", "7", "4", "5"],
            correctAnswer: 3
        },
        ]

        $("#question0").html(questionArray[0].question);
        $("#answers").html(questionArray[0].answers);
        $("#question1").html(questionArray[1].question);
        $("#question2").html(questionArray[2].question);
        $("#question3").html(questionArray[3].question);
        $("#question4").html(questionArray[4].question);

        // function getAnswer() {

        //         $('userselection').on('click', function() {
        //           console.log('alert', index);
        //             index++;
        //             console.log('click', index);
        //             $(".question").text('');
        //             $("#buttonA").text('');
        //             $("#buttonB").text('');
        //             $("#buttonC").text('');
        //             $("#buttonD").text('');
        //             loadQuestion();
        //         })
        //     }
            
        //     function answerCorrect() {
        //         correct++;
        //         alert("Correct!");
        //         console.log("correct");
        //     }
            
        //     function answerWrong() {
        //         wrong++;
        //         alert("Incorrect!");
        //         console.log("wrong");
        //     }
            
        //     function showScore() {
        //         $('.question').empty();
        //         $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        //         $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        //         countdownTimer.stop();
        //         $('.timer').empty();
            
        //     }

    };


    })