//area calculate functions for all shapes
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}
function calculateRectangleArea(width, length) {
    return width * length;
}
function calculatePerallelogramArea(base, height) {
    return base * height;
}
function calculateRhombusArea(d1, d2) {
    return 0.5 * d1 * d2;
}
function calculatePentagonArea(p, b) {
    return 0.5 * p * b;
}
function calclateEllipseArea(a, b) {
    return 3.14 * a * b;
}
//input field value getting function
function getInput(inputId1, inputId2) {
    const inputField1 = document.getElementById(inputId1);
    const inputField2 = document.getElementById(inputId2);

    const input1 = inputField1.value;
    const input2 = inputField2.value;

    if (input1 == '' || input2 == '') {
        return "please fill both the fields.";
    }
    else if (isNaN(input1) || isNaN(input2)) {
        return "Please enter a number."
    }
    else {
        const inputs = [input1, input2];
        return inputs;
    }
}

//triangle
document.getElementById('triangle-calculate').addEventListener('click', function (){
    const inputs = getInput('triangle-base', 'triangle-height');
    if(Array.isArray(inputs)){
        const triangleArea = calculateTriangleArea(inputs[0], inputs[1]);
        console.log(triangleArea);
    }
    else{
        alert(inputs);
    }
})