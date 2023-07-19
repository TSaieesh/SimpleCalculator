function add(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a+b;
    document.getElementById("answer1").innerHTML = "Addition is : "+c;
}

function subtract(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a-b;
    document.getElementById("answer1").innerHTML = "Subtraction is : "+c;
}

function multiply(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a*b;
    document.getElementById("answer1").innerHTML = "Multiplicaton is : "+c;
}

function division(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a/b;
    document.getElementById("answer1").innerHTML = "Division is : "+c;
}

function mod(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a%b;
    document.getElementById("answer1").innerHTML = "Modulus is : "+c;
}