var tb = '';

const useinp = document.querySelector('#useinp');
const compout = document.querySelector('#compout');

function calcad(value) {
    tb += value;
    useinp.value = tb;
}

function removeCH() {
    tb = tb.substring(0, tb.length - 1);
    useinp.value = tb;
}

function exeCM() {
    if (tb.length === 0 || tb === "") {
        alert('Insira um valor');
        return
    }
    try {
        awnser = eval(tb);
        compout.value = awnser;
    } catch (error) {
        alert('Entrada inválida')
    }
}

function reset() {
    useinp.value = '';
    compout.value = '';
    tb = '';
}