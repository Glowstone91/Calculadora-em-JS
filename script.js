var res = document.getElementById("res");
var valor;
let ponto = true;

function calcular(num) {
    res.value += num;
}


function p(pp) {
    if (ponto == true) {
        res.value += pp;
        ponto = false;
    }
}

function op(ope) {
    valor = res.value;
    if (valor.slice(-1) != "+" &&
        valor.slice(-1) != "-" &&
        valor.slice(-1) != "*" &&
        valor.slice(-1) != "/" &&
        valor.slice(-1) != "." &&
        valor.slice(-1) != ""
    ) {
        res.value += ope;
        ponto = true;
    }

}

function c() {
    res.value = ""
    ponto = true;
}

function mm() {
    valor = res.value;
    if (valor.slice(-1) != "") {
        res.value = eval(res.value);
        let aux = res.value * -1;
        res.value = aux;
    }

}

function igual() {
    valor = res.value;
    if (valor.slice(-1) != "") {
        res.value = eval(res.value);
    }
}

res.addEventListener("input", () => {
    let valor = res.value;

    valor = valor.replace(/[^0-9+\-*/.]/g, "");
    valor = valor.replace(/\.{2,}/g, ".");

    res.value = valor;
});
