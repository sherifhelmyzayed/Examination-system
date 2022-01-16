const data = [
    {
        index: 1,
        question: "Output of 2 x 4?",
        answer1 : "8",
        answer2 : "10",
        answer3 : "12",
        answer4 : "14",
        correct : "8",
        score: 0,
        category: "Statistical",
        answerInd : null
    },
    {
        index: 2,
        question: "How many days are there in a year?",
        answer1 : "400",
        answer2 : "200",
        answer3 : "365",
        answer4 : "500",
        correct : "365",
        score: 0,
        category: "General knowledge",
        answerInd : null
    },
    {
        index: 3,
        question: "Which animal is known as the Ship of the Desert?",
        answer1 : "dog",
        answer2 : "horse",
        answer3 : "lion",
        answer4 : "camel",
        correct : "camel",
        score: 0,
        category: "General knowledge",
        answerInd : null
    },
    {
        index: 4,
        question: "How many sides are there in a triangle",
        answer1 : "1",
        answer2 : "2",
        answer3 : "3",
        answer4 : "4",
        correct : "3",
        score: 0,
        category: "Statistical",
        answerInd : null
    },
    {
        index: 5,
        question: "What type of gas do plants absorb",
        answer1 : "O2",
        answer2 : "H20",
        answer3 : "HCL",
        answer4 : "CO2",
        correct : "CO2",
        score: 0,
        category: "General knowledge",
        answerInd : null
    },
    {
        index: 6,
        question: "Output of 5 x 5",
        answer1 : "25",
        answer2 : "30",
        answer3 : "50",
        answer4 : "10",
        correct : "25",
        score: 0,
        category: "Statistical",
        answerInd : null
    }
]

function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

i = 0

questionDesc = document.getElementsByClassName('quesDesc')[0]
questionTitle = document.getElementsByClassName('quesTitle')[0]
answersContainer = document.getElementsByClassName('answers')[0]
catContainer = document.getElementsByClassName('category')[0]
answers = document.getElementsByClassName('answer')
allCircles = document.getElementsByClassName('circle')
nextQuesBtn = document.getElementsByClassName('nextQues')[0]
prevQuesBtn = document.getElementsByClassName('prevQues')[0]
progPercText = document.getElementsByClassName('display-percentage')[0]

randomArrayShuffle(data)
start()

function start() {
    
    displayQuestion()
    createCircles()
    activeCircle()
    timetime = setTimeout(endExam, 30000);
}



function displayQuestion() {
    questionDesc.innerText = `Question ${i+1} of ${data.length}`
    questionTitle.innerText = data[i].question
    answersContainer.innerHTML = `
    <div class="col-md-5 answer answer1" id="1" value="${data[i].answer1}" onclick="submitAns()">${data[i].answer1}</div>
    <div class="col-md-5 answer answer3" id="3" value="${data[i].answer3}" onclick="submitAns()">${data[i].answer3}</div>
    <div class="col-md-5 answer answer2" id="2" value="${data[i].answer2}" onclick="submitAns()">${data[i].answer2}</div>
    <div class="col-md-5 answer answer4" id="4" value="${data[i].answer4}" onclick="submitAns()">${data[i].answer4}</div>
    `
    catContainer.innerHTML = `
        <h5>Category: <span>${data[i].category}</span></h5>
    `
    if (data[i].answerInd != null) {
        tempIndex = data[i].answerInd
        selectedAns = document.querySelector(`.answer.answer${tempIndex}`).classList.add('active')
    }
    if ((i+1) == data.length) {
        nextQuesBtn.classList.add('noVis')
    } else {
        nextQuesBtn.classList.remove('noVis')
    }
    (i == 0)
    ? prevQuesBtn.classList.add('noVis')
    : prevQuesBtn.classList.remove('noVis')
    activeCircle()
}

function createCircles() {
    circlesContainer = document.getElementsByClassName('indexes')[0]
    for (let j = 0; j < data.length; j++) {
        if (j > 8) {
            circlesContainer.insertAdjacentHTML('beforeend', `
            <div class="circle move" onclick="getIndex()">
                <div class="num">${j + 1}</div>
            </div>
            `)
        } else {
        circlesContainer.insertAdjacentHTML('beforeend', `
        <div class="circle" onclick="getIndex()">
            <div class="num">0${j + 1}</div>
        </div>
        `)
    }
    }
}

function activeCircle() {
    circlesContainer = document.getElementsByClassName('indexes')[0].children
    for (let j = 0; j < circlesContainer.length; j++) {
        circlesContainer[j].classList.remove('active')
        circlesContainer[i].classList.add('active')
    }
}

function nextQues() {
    i++
    displayQuestion()
}

function prevQues() {
    i--
    displayQuestion()
}






/////////// ANSWERS START //////////////

function submitAns() {
    markAns()
    storeAns()
    markCirc()
    if (event.target.getAttribute("value") === data[i].correct) {
        data[i].score = 1
    }
    else {
        data[i].score = 0
    }


    var numofSubmitted = 0
    for (let j = 0; j < data.length; j++) {
        (data[j].answerInd) ? numofSubmitted ++ : '' 
    }


    let total = numofSubmitted / data.length
    updateProgress2(total)
}

function markAns() {
    for (let j = 0; j < answers.length; j++) {
        answers[j].classList.remove("active")
    }
    event.target.classList.add("active")
}

function storeAns() {
    selectedAns = document.querySelector('.answer.active').getAttribute("id")
    data[i].answerInd = selectedAns
}

/////////// ANSWERS END //////////////





/////////// CIRCLES START //////////////


function markCirc() {
    allCircles[i].classList.add('done')
}

function flagCircle() {
    allCircles[i].classList.toggle('flag')
}

function getIndex() {
    i = parseInt(event.target.firstElementChild.innerText) - 1
    displayQuestion()
}

/////////// CIRCLES END //////////////





/////////// EXAM START //////////////

function endExam() {
    let result = 0
    let genRes = 0
    let genQues = 0
    let statQues = 0
    let statRes = 0
    for(let j = 0; j < data.length; j++) {
        if(data[j].category == "General knowledge"){
            genQues ++ 
            tempGenRes = data[j].score
            genRes += tempGenRes
        }
        if(data[j].category == "Statistical"){
            statQues ++ 
            tempStatRes = data[j].score
            statRes += tempStatRes
        }
        tempResult = data[j].score
        result = result + tempResult


    }

    clearTimeout(timetime);

    result = Math.round(result*100 / data.length)
    genRes = Math.round(genRes*100 / genQues)
    statRes = Math.round(statRes*100 / statQues)



    displayResult(result, genRes, statRes)
}

/////////// EXAM END //////////////



/////////// COUNTER START //////////////
let progressBar = document.querySelector('.e-c-progress');
let indicator = document.getElementById('e-indicator');
let pointer = document.getElementById('e-pointer');
let length = Math.PI * 2 * 70;

progressBar.style.strokeDasharray = length;

function update(value, timePercent) {
	var offset = - length - length * value / (timePercent);
	progressBar.style.strokeDashoffset = offset; 
	pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`; 
};

//circle ends
const displayOutput = document.querySelector('.display-remain-time')
const pauseBtn = document.getElementById('pause');
const setterBtns = document.querySelectorAll('button[data-setter]');

let intervalTimer;
let timeLeft;
let wholeTime = 0.5 * 60; // manage this to set the whole time 
let isPaused = false;
let isStarted = false;

pauseTimer()


update(wholeTime,wholeTime); //refreshes progress bar
displayTimeLeft(wholeTime);

function changeWholeTime(seconds){
  if ((wholeTime + seconds) > 0){
    wholeTime += seconds;
    update(wholeTime,wholeTime);
  }
}


function timer (seconds){ //counts time, takes seconds
  let remainTime = Date.now() + (seconds * 1000);
  displayTimeLeft(seconds);
  
  intervalTimer = setInterval(function(){
    timeLeft = Math.round((remainTime - Date.now()) / 1000);
    if(timeLeft < 0){
      clearInterval(intervalTimer);
      isStarted = false;
      setterBtns.forEach(function(btn){
        btn.disabled = false;
        btn.style.opacity = 1;
      });
      displayTimeLeft(wholeTime);
      return ;
    }
    displayTimeLeft(timeLeft);
  }, 1000);
}
function pauseTimer(){
    timer(wholeTime);
    isStarted = true;
}

function displayTimeLeft (timeLeft){ //displays time on the input
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  displayOutput.textContent = displayString;
  update(timeLeft, wholeTime);
}

/////////// COUNTER END //////////////










/////////// PROGRESS START //////////////
let progressBar2 = document.querySelector('.e-c-progress2');
let length2 = Math.PI * 2 * 40;

progressBar2.style.strokeDasharray = length2;

function updateProgress2(value) {
	var offset = - length2 - length2 * value / (1);
	progressBar2.style.strokeDashoffset = offset; 
    progPercText.innerHTML = `${Math.round(value * 100)}%`
};

//circle ends


updateProgress2(0)



/////////// COUNTER END //////////////











/////////// RESULT START //////////////


function displayResult(result, genRes, statRes) {

    examPage = document.getElementById('exam-page')
    resultPage = document.getElementById('result-page')

    examPage.style.display = "none"
    resultPage.style.display = "inherit"

    resultStroke = document.getElementById('aPath')
    genStroke = document.getElementById('bPath')
    statStroke = document.getElementById('gPath')



    pushResults(result, genRes, statRes);
    (result > 49) 
        ? resultPage.firstElementChild.innerHTML = '<h1 class="">Congratulations! You have passed the test<h1/>'
        : resultPage.firstElementChild.innerHTML = '<h1 class="failed">Good luck next time!<h1/>';
    (result < 50 )
        ? resultStroke.classList.add('failed')
        : '';
    (result < 76 && result > 49 )
    ? resultStroke.classList.add('moderate')
    : '';

    (genRes < 50 )
        ? genStroke.classList.add('failed')
        : '';

    (genRes < 76 && genRes > 49 )
    ? genStroke.classList.add('moderate')
    : '';
    
    (statRes < 50 )
        ? statStroke.classList.add('failed')
        : '';

    (statRes < 76 && statRes > 49 )
    ? statStroke.classList.add('moderate')
    : '';
    
}




/////////// RESULT END //////////////
