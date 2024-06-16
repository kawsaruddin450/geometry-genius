let serial = 0;

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
//adds into result list
function showResult(shapeName, result){
    const ol = document.getElementById('result-list');
    const li = document.createElement('li');
    li.classList.add('grid', 'grid-cols-2', 'justify-between', 'items-center', 'mb-5')
    li.innerHTML = `
    
    <h2 class="text-xl">${serial}. ${shapeName}</h2>
    <div class="grid grid-cols-2 items-center gap-2">
        <p class="">${result}cm<sup>2</sup></p>
        <button class="bg-blue-500 py-2 px-4 rounded-lg text-white font-medium w-full text-center">cm to m</button>
    </div>
    `

    ol.appendChild(li);
}

//triangle
document.getElementById('triangle-calculate').addEventListener('click', function (){
    const inputs = getInput('triangle-base', 'triangle-height');
    if(Array.isArray(inputs)){
        serial += 1;
        const triangleArea = calculateTriangleArea(inputs[0], inputs[1]);
        showResult("Triangle", triangleArea);
        console.log(triangleArea);
    }
    else{
        alert(inputs);
    }
})