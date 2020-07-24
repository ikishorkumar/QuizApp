var questions = [
    {
        question: " Which is greater than 4 ?",
        answers: {
            a: -5,
            b: 0,
            c: -6,
            d: 5
        },
        answer: 5

    },
    {
        question: " Which is lesser than 0 ?",
        answers: {
            a: 1,
            b: 0,
            c: -1,
            d: 2
        },
        answer: -1

    },
    {
        question: " Which is equals than 10 ?",
        answers: {
            a: 10,
            b: -10,
            c: -6
        },
        answer: 10

    },
    {
        question: " What is answer of 2/2 ?",
        answers: {
            a: 1,
            b: 0,
            c: -1,
            d: -0
        },
        answer: 1

    }
    
    
];
function makeQuiz() {
    var divbody = document.getElementById("Questions");

    for (let index = 0; index < questions.length; index++) {

        var dive = document.createElement('div');
        dive.setAttribute('class', 'alert-info');

        var obj = questions[index];
        // question
        var h = document.createElement('h4');
        h.innerHTML = (index + 1) + " : " + obj.question;
        dive.appendChild(h);


        //answers
        var answerobj = obj.answers;

        var optdive = document.createElement('div');
        optdive.setAttribute('class', 'alert alert-success');

        Object.keys(answerobj).forEach(key => {

            var optdiv = document.createElement('div');
            optdiv.setAttribute('class', 'alert-light');

            var labeel = document.createElement('label');
            labeel.setAttribute('for', key);
            var labeel = document.createElement('label');
            labeel.innerText = answerobj[key];

            var labeeval = document.createElement("input");
            labeeval.setAttribute('type', 'radio');
            labeeval.setAttribute('class', 'btn-radio');
            labeeval.setAttribute('name', index);
            var setval = answerobj[key];
            labeeval.setAttribute('value', setval);

            optdiv.appendChild(labeeval);
            optdiv.appendChild(labeel);
            optdive.appendChild(optdiv);
            dive.appendChild(optdive);

        });
        divbody.appendChild(dive);

    }

}


makeQuiz();

function showResult() {
    var btn = document.getElementById("btnResult");

    var correctAnswer = [];
    var userAnswers = [];

    // pushing correct answers to the array;
    questions.forEach(element => {
        correctAnswer.push(element.answer);
    });

    // findind and saving all btn-radio inputs to the array
    var selectedAnswers = document.getElementsByClassName('btn-radio');

    // fiding checked inputs radios form selected answers and saving their values to the array.
    for (let index = 0; index < selectedAnswers.length; index++) {
        if (selectedAnswers[index].checked) {
            userAnswers.push(selectedAnswers[index].value);
        }
    }

    if (userAnswers == "") {
        alert("Please select the answers it is required");
    } else {
        btn.hidden = true;


        //Creating Result;
        var count = 0;
        for (let j = 0; j < correctAnswer.length; j++) {
            var corrValue = correctAnswer[j];
            corrValue = corrValue.toString();
            var userValue = userAnswers[j];
            if (corrValue === userValue) {
                count += 1;
            }
        }
        //alert the result
        var divbody = document.getElementById("Questions");
        divbody.innerHTML = "";
        
        var optdiv = document.createElement('div');
        optdiv.setAttribute('class', 'alert-info');
        optdiv.setAttribute('id','score');
        var textnode = document.createTextNode("Your Result is : " + count);
        
        var i = document.createElement('i');
        i.setAttribute('class', 'fa fa-check-circle');
        i.style.fontSize = "font-size:48px;color:red";

        optdiv.appendChild(i);
        optdiv.appendChild(document.createElement("br"));
        optdiv.appendChild(textnode);
        divbody.appendChild(optdiv);


    }
}
