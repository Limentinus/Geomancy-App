let display = document.getElementById('display');

// let mothers = {
//     i: {f: undefined, a: undefined, w: undefined, e: undefined},
//     ii: {f: undefined, a: undefined, w: undefined, e: undefined},
//     iii: {f: undefined, a: undefined, w: undefined, e: undefined},
//     iv: {f: undefined, a: undefined, w: undefined, e: undefined},
// };

let mothers = {
    0: undefined,
    1: undefined,
    2: undefined, 
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined,
    10: undefined,
    11: undefined,
    12: undefined,
    13: undefined,
    14: undefined,
    15: undefined,
};



function addDots(first, second) {
    let sum = first + second;
    if (sum === 2 || 4) {
        return 2;
    } else if (sum === 3) {
        return 1;
    };
};

function createDots(inputNumber) {
    if (inputNumber % 2 === 0) {
        return 2;
    } else {
        return 1;
    };
};



function inputQuestion() {
    const labelText = document.createElement('label');
    const inputText = document.createElement('input');
    const inputButton = document.createElement('button');

    inputButton.innerText = "Submit";
    labelText.innerText = "Ask Your Question";

    inputButton.setAttribute("id", "inputButton");
    inputText.setAttribute("id", "inputText");
    inputText.setAttribute("type", "text");

    display.append(labelText);
    labelText.append(inputText);
    labelText.append(inputButton);

    inputButton.addEventListener("click", () => {
        const question = inputText.value;
        console.log(question);

        inputText.remove();
        inputButton.remove();
        labelText.remove();

        const questionTitle = document.createElement('h1');
        display.append(questionTitle);
        questionTitle.innerText = question;
        motherMaker();

    });
};

// inputQuestion();

function motherMaker() {
    const clickCounter = document.createElement('button');
    clickCounter.setAttribute("id", "clickCounter");
    clickCounter.innerText = "Click Counter";
    display.append(clickCounter);

    const generate = document.createElement('button');
    generate.setAttribute("id", "generate");
    generate.innerText = "Generate";
    display.append(generate);

    let clickCount = 0;
    let motherCount = 0;
    clickCounter.addEventListener("click", () => {
        ++clickCount
    });

    generate.addEventListener("click", () => {
        if (motherCount > 15) {
            displayShield();
            motherCount = 1;
            clickCount = 0;
            console.log(mothers);
        };

        mothers[motherCount] = createDots(clickCount);
        
       
        console.log(mothers);

        motherCount++;
        clickCount = 0;

    })
}

function displayShield() {
    // generate.remove();
    // clickCounter.remove();
    drawShield();


    
};
function drawShield() {
    
    const container = document.createElement('div');
    
    const I = document.createElement('div');
    const II = document.createElement('div');
    const III = document.createElement('div');
    const IV = document.createElement('div');
    const V = document.createElement('div');
    const VI = document.createElement('div');
    const VII = document.createElement('div');
    const VIII = document.createElement('div');
    const IX = document.createElement('div');
    const X = document.createElement('div');
    const XI = document.createElement('div');
    const XII = document.createElement('div');
    const XIII = document.createElement('div');
    const XIV = document.createElement('div');
    const XV = document.createElement('div');
    // const XVI = document.createElement('div');
    display.append(container);
    container.append(I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XV);
    
    
    I.innerText = "I";
    II.innerText = "II";
    III.innerText = "III";
    IV.innerText = "IV";
    V.innerText = "V";
    VI.innerText = "VI";
    VII.innerText = "VII";
    VIII.innerText = "VIII";
    IX.innerText = "IX";
    X.innerText = "X";
    XI.innerText = "XI";
    XII.innerText = "XII";
    XIII.innerText = "XIII";
    XIV.innerText = "XIV";
    XV.innerText = "XV";
    
    container.setAttribute("id","container");
    const figureContainers = container.querySelectorAll("div");
    let idNumber = 0;
    figureContainers.forEach(element => {
        element.setAttribute("id", element.innerText);
        element.setAttribute("class", "figureContainers");
        let dotContainer = document.createElement('div');
        let one = document.createElement('div');
        let two = document.createElement('div');
        let three = document.createElement('div');
        let four = document.createElement('div');
        element.append(dotContainer);
        dotContainer.append(one, two, three, four);
        dotContainer.setAttribute("class", "dotContainer");
        one.setAttribute("id", `${idNumber}`);
        idNumber++;
        two.setAttribute("id", `${idNumber}`);
        idNumber++;
        three.setAttribute("id", `${idNumber}`);
        idNumber++;
        four.setAttribute("id", `${idNumber}`);
        idNumber++;
        one.setAttribute("class", "one");
        two.setAttribute("class", "two");
        three.setAttribute("class", "three");
        four.setAttribute("class", "four");

        
    });

    
    // console.log(figureContainers);
}

// drawShield();
displayShield();