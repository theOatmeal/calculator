function QuadraticEquationSolve() {
    const a = document.querySelector('.acoef').value;
    const b = document.querySelector('.bcoef').value;
    const c = document.querySelector('.ccoef').value;
    const d = document.querySelector('.dcoef').value;
    let acoe = Number(a);
    let bcoe = Number(b);
    let ccoe = Number(c) - Number(d);
    let delta = Math.pow(bcoe, 2) - 4 * acoe * ccoe;
    let content = "";
    if (delta > 0) {
        content += "此方程式有兩組解: ";
        let solution1 = (bcoe * (-1) + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        let solution2 = (bcoe * (-1) - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        content += `solution 1 = ${solution1}, solution 2 = ${solution2}`;
    } else if  (delta == 0) {
        content += "此方程式重複的解: ";
        let solution = (bcoe * (-1) + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        content += `solution = ${solution}`
    } else {
        content += "此方程式無解";
    }
    document.querySelector('.QuadraticEquation').innerHTML = content;
};