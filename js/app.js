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
function calculateEllipseArea(a, b) {
    return 3.14 * a * b;
}


//input field value getting function
function getInput(inputId1, inputId2) {
    const inputField1 = document.getElementById(inputId1);
    const inputField2 = document.getElementById(inputId2);

    const input1 = inputField1.value;
    const input2 = inputField2.value;

    if (input1 == '' || input2 == '') {
        inputField1.value = '';
        inputField2.value = '';
        return "please fill both the fields.";
    }
    else if (isNaN(input1) || isNaN(input2)) {
        inputField1.value = '';
        inputField2.value = '';
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
        <p class="" id="${serial}-result">${result.toFixed(2)}cm<sup>2</sup></p>
        <button class="bg-blue-500 py-2 px-4 rounded-lg text-white font-medium w-full text-center" id="$convert-${serial}">cm to m</button>
    </div>
    `

    ol.appendChild(li);
}

//random color generator
function generateRandomColor(){
    const hxCode= '0123456789ABCDEF';
    let col = '#';
    for(let i = 0; i<6; i++){
        col += hxCode[Math.floor(Math.random()*16)];
    }
    return col;
}
//set random color function
function setBackgroundRandom(id){
    const card = document.getElementById(id);
    card.style.backgroundColor = generateRandomColor();
}

//---------- Event Handlers ------------//

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
//rectangle
document.getElementById('rectangle-calculate').addEventListener('click', function (){
    const inputs = getInput('rectangle-width', 'rectangle-length');
    if(Array.isArray(inputs)){
        serial += 1;
        const rectangleArea = calculateRectangleArea(inputs[0], inputs[1]);
        showResult("Rectangle", rectangleArea);
        console.log(rectangleArea);
    }
    else{
        alert(inputs);
    }
})
//perallelogram
document.getElementById('parallelogram-calculate').addEventListener('click', function (){
    const inputs = getInput('parallelogram-base', 'parallelogram-height');
    if(Array.isArray(inputs)){
        serial += 1;
        const parallelogramArea = calculatePerallelogramArea(inputs[0], inputs[1]);
        showResult("Parallelogram", parallelogramArea);
        console.log(parallelogramArea);
    }
    else{
        alert(inputs);
    }
})
//rhombus
document.getElementById('rhombus-calculate').addEventListener('click', function (){
    const inputs = getInput('rhombus-d1', 'rhombus-d2');
    if(Array.isArray(inputs)){
        serial += 1;
        const rhombusArea = calculateRhombusArea(inputs[0], inputs[1]);
        showResult("Rhombus", rhombusArea);
        console.log(rhombusArea);
    }
    else{
        alert(inputs);
    }
})
//pentagon
document.getElementById('pentagon-calculate').addEventListener('click', function (){
    const inputs = getInput('pentagon-p', 'pentagon-b');
    if(Array.isArray(inputs)){
        serial += 1;
        const pentagonArea = calculatePentagonArea(inputs[0], inputs[1]);
        showResult("Pentagon", pentagonArea);
        console.log(pentagonArea);
    }
    else{
        alert(inputs);
    }
})
//ellipse
document.getElementById('ellipse-calculate').addEventListener('click', function (){
    const inputs = getInput('ellipse-a', 'ellipse-b');
    if(Array.isArray(inputs)){
        serial += 1;
        const ellipseArea = calculateEllipseArea(inputs[0], inputs[1]);
        showResult("Ellipse", ellipseArea);
        console.log(ellipseArea);
    }
    else{
        alert(inputs);
    }
})

//set random color on hover
document.getElementById('triangle-card').addEventListener('mouseover', function(){
    setBackgroundRandom('triangle-card');
});
document.getElementById('rectangle-card').addEventListener('mouseover', function(){
    setBackgroundRandom('rectangle-card');
});
document.getElementById('parallelogram-card').addEventListener('mouseover', function(){
    setBackgroundRandom('parallelogram-card');
});
document.getElementById('rhombus-card').addEventListener('mouseover', function(){
    setBackgroundRandom('rhombus-card');
});
document.getElementById('pentagon-card').addEventListener('mouseover', function(){
    setBackgroundRandom('pentagon-card');
});
document.getElementById('ellipse-card').addEventListener('mouseover', function(){
    setBackgroundRandom('ellipse-card');
});
//remove background on mouse out
document.getElementById('triangle-card').addEventListener('mouseout', function(){
    this.style.background = 'none';
})
document.getElementById('rectangle-card').addEventListener('mouseout', function(){
    this.style.background = 'none';
})
document.getElementById('parallelogram-card').addEventListener('mouseout', function(){
    this.style.background = 'none';
})
document.getElementById('rhombus-card').addEventListener('mouseout', function(){
    this.style.background = 'none';
})
document.getElementById('pentagon-card').addEventListener('mouseout', function(){
    this.style.background = 'none';
})
document.getElementById('ellipse-card').addEventListener('mouseout', function(){
    this.style.background = 'none';
})


//Redirect to blog page
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = "blog.html";
})