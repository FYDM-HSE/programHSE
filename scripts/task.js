

function verify() {
    console.log("D, A")
    let D = parseInt(document.getElementById('D').value);
    let A = parseInt(document.getElementById('A').value);
    console.log(D, A)

    if (A * Math.sqrt(2)<=D) {
        result = "Можно выпилить"
        check = true;
    }
    else {
        result = "Нельзя выпилить"
        check = false;
    }
    document.getElementById("result").value = result;
}


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);