function solveCircumcentre() {
    const x1 = Number(document.querySelector('.x1').value);
    const x2 = Number(document.querySelector('.x2').value);
    const x3 = Number(document.querySelector('.x3').value);
    const y1 = Number(document.querySelector('.y1').value);
    const y2 = Number(document.querySelector('.y2').value);
    const y3 = Number(document.querySelector('.y3').value);
    let xCircumcentre = (x1 + x2 + x3) / 3;
    let yCircumcentre = (y1 + y2 + y3) / 3;
    xCircumcentre = Math.round(xCircumcentre * 100000) / 100000;
    yCircumcentre = Math.round(yCircumcentre * 100000) / 100000;
    let content = `此三角形的外心座標(x, y) = (${xCircumcentre}, ${yCircumcentre})`;
    document.querySelector('.pResult').innerHTML = content;
};

function solveIncentre() {
    const x1 = Number(document.querySelector('.x1').value);
    const x2 = Number(document.querySelector('.x2').value);
    const x3 = Number(document.querySelector('.x3').value);
    const y1 = Number(document.querySelector('.y1').value);
    const y2 = Number(document.querySelector('.y2').value);
    const y3 = Number(document.querySelector('.y3').value);
    const side1 = Number(document.querySelector('.side1').value);
    const side2 = Number(document.querySelector('.side2').value);
    const side3 = Number(document.querySelector('.side3').value);
    let xIncentre = (x1 * side1 + x2 * side2 + x3 * side3) / (side1 + side2 + side3);
    let yIncentre = (y1 * side1 + y2 * side2 + y3 * side3) / (side1 + side3 + side3);
    xIncentre = Math.round(xIncentre * 100000) / 100000;
    yIncentre = Math.round(yIncentre * 100000) / 100000;
    let content = `此三角形的外心座標(x, y) = (${xIncentre}, ${yIncentre})`;
    document.querySelector('.pResult').innerHTML = content;
};

function solveCentroid() {
    const x1 = Number(document.querySelector('.x1').value);
    const x2 = Number(document.querySelector('.x2').value);
    const x3 = Number(document.querySelector('.x3').value);
    const y1 = Number(document.querySelector('.y1').value);
    const y2 = Number(document.querySelector('.y2').value);
    const y3 = Number(document.querySelector('.y3').value);
    let xCentroid = (x1 + x2 + x3) / 3;
    let yCentroid = (y1 + y2 + y3) / 3;
    xCentroid = Math.round(xCentroid * 100000) / 100000;
    yCentroid = Math.round(yCentroid * 100000) / 100000;
    let content = `此三角形的重心(形心)座標(x, y) = (${xCentroid}, ${yCentroid})`;
    document.querySelector('.pResult').innerHTML = content;
};

function clearInput1() {
    document.querySelector('.x1').value = "";
    document.querySelector('.x2').value = "";
    document.querySelector('.x3').value = "";
    document.querySelector('.y1').value = "";
    document.querySelector('.y2').value = "";
    document.querySelector('.y3').value = "";
    document.querySelector('.side1').value = "";
    document.querySelector('.side2').value = "";
    document.querySelector('.side3').value = "";
};

function calculateAreaByVector() {
    const x1 = Number(document.querySelector('.xFirstVector').value);
    const y1 = Number(document.querySelector('.yFirstVector').value);
    const x2 = Number(document.querySelector('.xSecondVector').value);
    const y2 = Number(document.querySelector('.ySecondVector').value);
    let triangleArea = Math.abs(x1 * y2 - x2 * y1);
    let content = "";
    content = `此三角形面積為: ${triangleArea}`
    document.querySelector('.vectorResult').innerHTML = content;
};

function clearInput2() {
    document.querySelector('.xFirstVector').value = "";
    document.querySelector('.yFirstVector').value = "";
    document.querySelector('.xSecondVector').value = "";
    document.querySelector('.ySecondVector').value = "";
};

function calculateAreaBySideLength() {
    const length1 = Number(document.querySelector('.firstSideLength').value);
    const length2 = Number(document.querySelector('.secondSideLength').value);
    const length3 = Number(document.querySelector('.thirdSideLength').value);
    let s = (length1 + length2 + length3) / 2;
    console.log(s);
    let area = Math.sqrt(s * (s - length1) * (s - length2) * (s - length3));
    let content = "";
    content = `此三角形面積為: ${area}`;
    document.querySelector('.sideResult').innerHTML = content;
};

function clearInput3() {
    document.querySelector('.firstSideLength').value = "";
    document.querySelector('.secondSideLength').value = "";
    document.querySelector('.thirdSideLength').value = "";
};