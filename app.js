// Concatenation of strings
document.getElementById("concatenateSomeStrings").onclick = function () {
    let firstString = prompt("Enter First String")
    let secondString = prompt("Enter Second String")
    document.getElementById("originalStatement").innerHTML = `<h5>First String=${firstString}<h5/><h5>Second String=${secondString}<h5/>`
    document.getElementById("output").innerHTML = `<h5>Result=${firstString + secondString}<h5/>`

}
// User Name 
document.getElementById("userName").onclick = function () {
    let userName = prompt("Enter Your Name")
    document.getElementById("originalStatement").innerHTML = `<h5>Name=${userName}<h5/>`
    document.getElementById("output").innerHTML = `<h5>Hi,${userName}.Wellcome to our website<h5/>`
}
// Comparison OPerators
document.getElementById("operators").onclick = function () {
    document.getElementById("originalStatement").innerHTML = "<h4>></h4><h4><</h4><h4>==</h4><h4>===</h4>"
    document.getElementById("output").innerHTML = "<h3 id='description'>Description:</h3><h5>Greater than Sign(>)</h5><h5>Less than Sign(<)</h5><h5>This sign matches only values(==)</h5><h5>This sign checks both the values and types(===)</h5>"
}
// if else...else if Statements
document.getElementById("ifElseIf").onclick = function () {
    let totalMarks = prompt("Enter your Total marks")
    let obtainedMarks = prompt("Enter your Obtained marks")
    let percentage = (obtainedMarks / totalMarks) * 100
    if (percentage > 90 && percentage <= 100) {
        document.getElementById("output").innerHTML = "<h5>Your Grade is A+</h5>"
    }
    else if (percentage > 80 && percentage <= 90) {
        document.getElementById("output").innerHTML = "<h5>Your Grade is A</h5>"
    }
    else if (percentage > 70 && percentage <= 80) {
        document.getElementById("output").innerHTML = "<h5>Your Grade is B</h5>"
    }
    else if (percentage > 60 && percentage <= 70) {
        document.getElementById("output").innerHTML = "<h5>Your Grade is C</h5>"
    }
    else if (percentage > 50 && percentage <= 60) {
        document.getElementById("output").innerHTML = "<h5>Your Grade is D</h5>"
    }
    else if (percentage > 40 && percentage <= 50) {
        document.getElementById("output").innerHTML = "<h5>Your Grade is E</h5>"
    }
    else {
        document.getElementById("output").innerHTML = "<h5>Fail</h5>"
    }
}

// Clear original statement
document.getElementById("clearOriginal").onclick = function () {
    document.getElementById("originalStatement").innerText = ""

}
// clear output
document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").innerText = ""

}