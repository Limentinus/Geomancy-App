let display = document.getElementById('display');
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

let daughters;
let nieces;
let witnesses;
let judge;
let totalDots;

function addDots(first, second) {
    let sum = first + second;
    if (sum % 2 == 0) {
        return 2;
    } else {
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
    const container1 = document.createElement('div');
    container1.setAttribute("id", "container1");
    display.append(container1);
    
    inputButton.innerText = "Submit";
    labelText.innerText = "Ask Your Question";

    inputButton.setAttribute("id", "inputButton");
    inputText.setAttribute("id", "inputText");
    inputText.setAttribute("type", "text");

    container1.append(labelText);
    labelText.append(inputText);
    labelText.append(inputButton);

    inputButton.addEventListener("click", () => {
        const question = inputText.value;
        console.log(question);

        inputText.remove();
        inputButton.remove();
        labelText.remove();

        const questionTitle = document.createElement('h1');
        const explainP = document.createElement('p');
        explainP.innerText = "Click the Click Counter as often as feels right. Then click Generate to generate a figure."
        display.insertBefore(questionTitle, container1);
        container1.append(explainP);
        questionTitle.innerText = question;
        motherMaker();

    });
};


function motherMaker() {


    const clickCounter = document.createElement('button');
    clickCounter.setAttribute("id", "clickCounter");
    clickCounter.innerText = "Click Counter";
    container1.append(clickCounter);

    const generate = document.createElement('button');
    generate.setAttribute("id", "generate");
    generate.innerText = "Generate";
    container1.append(generate);

    
    let clickCount = 0;
    let motherCount = 0;
    const figureCount = document.createElement('p');
    figureCount.setAttribute("id", "figureCount");
    container1.append(figureCount);
    clickCounter.addEventListener("click", () => {
        ++clickCount
    });
    
    generate.addEventListener("click", () => {
        if (motherCount > 15) {
            motherCount = 0;
            clickCount = 0;
            updateDots();
            displayShield();
            
        };
        
        mothers[motherCount] = createDots(clickCount);
        motherCount++;
        clickCount = 0;
        figureCount.innerText = `Figure: ${motherCount}/16`;

        if (motherCount == 16) {
            clickCounter.remove();
            generate.innerText = "Create Shield Chart";
        };

    });
};

function displayShield() {
    container1.remove();
    drawShield();
    console.log({totalDots});

    
};

function updateDots() {
    daughters = {
        16: mothers[0],
        17: mothers[4],
        18: mothers[8],
        19: mothers[12],
        20: mothers[1],
        21: mothers[5],
        22: mothers[9],
        23: mothers[13],
        24: mothers[2],
        25: mothers[6],
        26: mothers[10],
        27: mothers[14],
        28: mothers[3],
        29: mothers[7],
        30: mothers[11],
        31: mothers[15],
        }
    nieces = {
        32: addDots(mothers[0], mothers[4]),
        33: addDots(mothers[1], mothers[5]),
        34: addDots(mothers[2], mothers[6]),
        35: addDots(mothers[3], mothers[7]),
        36: addDots(mothers[8], mothers[12]),
        37: addDots(mothers[9], mothers[13]),
        38: addDots(mothers[10], mothers[14]),
        39: addDots(mothers[11], mothers[15]),
        40: addDots(daughters[16], daughters[20]),
        41: addDots(daughters[17], daughters[21]),
        42: addDots(daughters[18], daughters[22]),
        43: addDots(daughters[19], daughters[23]),
        44: addDots(daughters[24], daughters[28]),
        45: addDots(daughters[25], daughters[29]),
        46: addDots(daughters[26], daughters[30]),
        47: addDots(daughters[27], daughters[31])
    }
    witnesses = {
        48: addDots(nieces[32], nieces[36]),
        49: addDots(nieces[33], nieces[37]),
        50: addDots(nieces[34], nieces[38]),
        51: addDots(nieces[35], nieces[39]),
        52: addDots(nieces[40], nieces[44]),
        53: addDots(nieces[41], nieces[45]),
        54: addDots(nieces[42], nieces[46]),
        55: addDots(nieces[43], nieces[47])
    }
    judge = {
        56: addDots(witnesses[48], witnesses[52]),
        57: addDots(witnesses[49], witnesses[53]),
        58: addDots(witnesses[50], witnesses[54]),
        59: addDots(witnesses[51], witnesses[55])
    }
    totalDots = {
        0: mothers[0],
        1: mothers[1], 
        2: mothers[2],
        3: mothers[3],
        4: mothers[4],
        5: mothers[5],
        6: mothers[6],
        7: mothers[7],
        8: mothers[8],
        9: mothers[9],
        10: mothers[10],
        11: mothers[11],
        12: mothers[12],
        13: mothers[13],
        14: mothers[14],
        15: mothers[15],
        16: daughters[16],
        17: daughters[17],
        18: daughters[18],
        19: daughters[19],
        20: daughters[20],
        21: daughters[21],
        22: daughters[22],
        23: daughters[23],
        24: daughters[24],
        25: daughters[25],
        26: daughters[26],
        27: daughters[27],
        28: daughters[28],
        29: daughters[29],
        30: daughters[30],
        31: daughters[31],
        32: nieces[32],
        33: nieces[33],
        34: nieces[34],
        35: nieces[35],
        36: nieces[36],
        37: nieces[37],
        38: nieces[38],
        39: nieces[39],
        40: nieces[40],
        41: nieces[41],
        42: nieces[42],
        43: nieces[43],
        44: nieces[44],
        45: nieces[45],
        46: nieces[46],
        47: nieces[47],
        48: witnesses[48],
        49: witnesses[49],
        50: witnesses[50],
        51: witnesses[51],
        52: witnesses[52],
        53: witnesses[53],
        54: witnesses[54],
        55: witnesses[55],
        56: judge[56],
        57: judge[57],
        58: judge[58],
        59: judge[59],
    }

}
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
        one.setAttribute("class", "one");
        two.setAttribute("class", "two");
        three.setAttribute("class", "three");
        four.setAttribute("class", "four");
        
        if(totalDots[idNumber] == 2) {
            let fstDot = document.createElement('div');
            let sndDot = document.createElement('div');
            one.append(fstDot, sndDot);
        } else {
            let fstDot = document.createElement('div');
            one.append(fstDot)
        };
        
        idNumber++;
        
        if(totalDots[idNumber] == 2) {
            let fstDot = document.createElement('div');
            let sndDot = document.createElement('div');
            two.append(fstDot, sndDot);
        } else {
            let fstDot = document.createElement('div');
            two.append(fstDot)
        };

        idNumber++;
        
        if(totalDots[idNumber] == 2) {
            let fstDot = document.createElement('div');
            let sndDot = document.createElement('div');
            three.append(fstDot, sndDot);
        } else {
            let fstDot = document.createElement('div');
            three.append(fstDot)
        };
        
        idNumber++;

        if(totalDots[idNumber] == 2) {
            let fstDot = document.createElement('div');
            let sndDot = document.createElement('div');
            four.append(fstDot, sndDot);
        } else {
            let fstDot = document.createElement('div');
            four.append(fstDot)
        };
        idNumber++;
        

  
    });

};

inputQuestion();