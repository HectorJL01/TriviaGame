$(document).ready(function () {
    $("#start").click(function(){
        triviaQuestions();

        $(time).show();
        $(questionArray).show();
        
    })
    var youreScore = 0;
    var userselection = ["t","f"];
    var correctAnswer = ["t"];
    var wrongAnswer = ["f"]
    var wins = 0;
    var losses = 0;
    var questionArray= [];
    
    var clock = {
        time:30,
        count:function(){
            clock.time--;
            $("#time").html("You have "+ clock.time + " seconds to complete this test");
            if (clock.time==0){
               clearInterval(counter);
            //    clock.time=30;
            //    clock.reset();

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
            answers: ["Canberra", "Sydney", "Melbourne", "Perth"],
            correctAnswer: 0
        },
        {
            question: "2. In what year the breaking of the Berlin Wall began?",
            answers: ["1989", "1990", "1987", "1980"],
            correctAnswer: 0
        },
        {
            question: "3. Where the Sistine Chapel is located:",
            answers: ["Rome", "France", "Vatican City", "Budapest"],
            correctAnswer: 2
        },
        {
            question: "4. The Prime Minister of Canada is called?",
            answers: ["Angela Merkel", "Theresa May", "Justin Trudeau", "Stefan Lofven"],
            correctAnswer: 2
        },
        {
            question: "5. How many oceans has the planet",
            answers: ["6", "7", "4", "5"],
            correctAnswer: 3
        },
        ]

        document.getElementById(answers)
        console.log(answers)
        $("#question0").html(questionArray[0].question);
        $("input#answers").html(questionArray[0].answers[0]);
        $("#question1").html(questionArray[1].question);
        // $("#answers").html(questionArray[].answers);
        $("#question2").html(questionArray[2].question);
        // $("#answers").html(questionArray[].answers);
        $("#question3").html(questionArray[3].question);
        // $("#answers").html(questionArray[].answers);
        $("#question4").html(questionArray[4].question);
        // $("#answers").html(questionArray[].answers);


        function correct (){
            if (userselection === correctAnswer)
            wins ++;
            $('#wins').text(wins);
            $(correctAnswer).show()

        }
        function incorrect (){
            if (userselection === wrongAnswer)
            losses ++;
            $('#losses').text(losses);

        }

    };


    })