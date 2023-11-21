var tab = '';

const useinp = document.querySelector('#useinp');
const compout = document.querySelector('#compout');

function calcad(value) {
    tab += value;
    useinp.value = tab;
}

function removeCH() {
    tab = tab.substring(0, tab.length - 1);
    useinp.value = tab;
}

function exeCM() {
    if (tab.length === 0 || tab === "") {
        alert('Insira um valor');
        return
    }
    try {
        awnser = eval(tab);
        compout.value = awnser;
    } catch (error) {
        alert('Entrada inválida')
    }
}

function reset() {
    useinp.value = '';
    compout.value = '';
    tab = '';
}