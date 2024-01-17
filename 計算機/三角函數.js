function sin() {
    const input = document.querySelector('.sin').value;
    let result = Math.sin(Number(input));
    let content = "";
    content = `sin(${input}) = ${result}`;
    document.querySelector('.psin').innerHTML = content;
    document.querySelector('.sin').value = "";
};

function cos() {
    const input = document.querySelector('.cos').value;
    let result = Math.cos(Number(input));
    let content = "";
    content =  `cos(${input}) = ${result}`;
    document.querySelector('.pcos').innerHTML = content;
    document.querySelector('.cos').value = "";
};

function tan() {
    const input = document.querySelector('.tan').value;
    let result = Math.tan(Number(input));
    let content = "";
    content =  `tan(${input}) = ${result}`;
    document.querySelector('.ptan').innerHTML = content;
    document.querySelector('.tan').value = "";
};

function sec() {
    const input = document.querySelector('.sec').value;
    let result = 1 / Math.cos(Number(input));
    let content = "";
    content =  `sec(${input}) = ${result}`;
    document.querySelector('.psec').innerHTML = content;
    document.querySelector('.sec').value = "";
};

function csc() {
    const input = document.querySelector('.csc').value;
    let result = 1 / Math.sin(Number(input));
    let content = "";
    content =  `csc(${input}) = ${result}`;
    document.querySelector('.pcsc').innerHTML = content;
    document.querySelector('.csc').value = "";
};

function cot() {
    const input = document.querySelector('.cot').value;
    let result = 1 / Math.tan(Number(input));
    let content = "";
    content =  `cot(${input}) = ${result}`;
    document.querySelector('.pcot').innerHTML = content;
    document.querySelector('.cot').value = "";
};

function sinAngleSum() {
    const input1 = document.querySelector('.sinA').value;
    const input2 = document.querySelector('.sinB').value;
    let result = Math.sin(Number(input1)) * Math.cos(Number(input2)) + Math.cos(Number(input1)) * Math.sin(Number(input2));
    result = Math.round(result * 10000) / 10000;
    let content = "";
    content =  `sin(${input1} + ${input2}) = ${result}`
    document.querySelector('.SinSum').innerHTML = content;
    document.querySelector('.sinA').value = "";
    document.querySelector('.sinB').value = "";
};

function cosAngleSum() {
    const input1 = document.querySelector('.cosA').value;
    const input2 = document.querySelector('.cosB').value;
    let result = Math.cos(Number(input1)) * Math.cos(Number(input2)) - Math.sin(Number(input1)) * Math.sin(Number(input2));
    result = Math.round(result * 10000) / 10000;
    let content = "";
    content = `cos(${input1} + ${input2}) = ${result}`;
    document.querySelector('.CosSum').innerHTML = content;
    document.querySelector('.cosA').value = "";
    document.querySelector('.cosB').value = "";
};

function tanAngleSum() {
    const input1 = document.querySelector('.tanA').value;
    const input2 = document.querySelector('.tanB').value;
    let result = (Math.tan(Number(input1)) + Math.tan(Number(input2))) / (1 - Math.tan(Number(input1)) * Math.tan(Number(input2)));
    result = Math.round(result * 10000) / 10000;
    let content = "";
    content = `tan(${input1} + ${input2}) = ${result}`;
    document.querySelector('.tanSum').innerHTML = content;
    document.querySelector('.tanA').value = "";
    document.querySelector('.tanB').value = "";
};