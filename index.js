var backup;

function fun() {
    alert("You clicked a Previous button");
}

function fun1() {
    alert("You clicked a Next button");
}

function fun2() {

    document.getElementById("content").value = backup;

}

function fun3() {

    let txt1 = document.getElementById("content").value;
    if (txt1 == "") {
        alert("Please enter something to delete... ");
    } else {
        backup = document.getElementById("content").value;
        document.getElementById("content").value = "";
        document.getElementById("back").style.color = "rgb(42, 230, 42)";
        document.getElementById("back").style.cursor = "pointer";

    }
}

function fun4() {
    let txt2 = document.getElementById("content").value;
    if (txt2 == "") {
        alert("Please enter any anything !!");
    } else {
        alert("You Entered : " + txt2);
    }

}
