let count = 0;

function increment () {
    count += 1;
    document.getElementById("count-el").innerHTML = count;
}

function decrement (){
    count -= 1;
    document.getElementById("count-el").innerHTML = count;
}

function save () {
    let countStr = count + " , ";
    document.getElementById("save-el").textContent += countStr;
    document.getElementById("count-el").textContent = 0;
    count = 0;
}