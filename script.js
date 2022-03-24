let display = document.getElementById('display');

const shieldButton = document.createElement('button');

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

    });
};

inputQuestion();

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
    
    container.setAttribute("id","container");
    I.setAttribute("id", "I");
    II.setAttribute("id", "II");
    III.setAttribute("id", "III");
    IV.setAttribute("id", "IV");
    V.setAttribute("id", "V");
    VI.setAttribute("id", "VI");
    VII.setAttribute("id", "VII");
    VIII.setAttribute("id", "VIII");
    IX.setAttribute("id", "IX");
    X.setAttribute("id", "X");
    XI.setAttribute("id", "XI");
    XII.setAttribute("id", "XII");
    XIII.setAttribute("id", "XIII");
    XIV.setAttribute("id", "XIV");
    XV.setAttribute("id", "XV");

    display.append(container);
    container.append(I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XV);
}

// drawShield();