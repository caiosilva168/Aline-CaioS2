const menuBtn = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navMenu.classList.toggle('active'); // Opcional, se preferir controlar via classe no nav
});
function IdadeAtual() {
    const dataNasc = new Date(2025, 2, 9); // Março é índice 2 (Jan=0, Fev=1, Mar=2)
    const hoje = new Date();

    let anos = hoje.getFullYear() - dataNasc.getFullYear();
    let meses = hoje.getMonth() - dataNasc.getMonth();
    let dias = hoje.getDate() - dataNasc.getDate();

    // Ajuste para dias negativos (quando o dia atual é menor que o dia de nascimento)
    if (dias < 0) {
        meses--;
        // Pega o último dia do mês anterior para compensar
        const ultimoDiaMesPassado = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        dias += ultimoDiaMesPassado;
    }

    // Ajuste para meses negativos
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    return `${anos} ano(s), ${meses} mese(s) e ${dias} dia(s)`;
}
const elemento = document.getElementById("exibirTempo");
if (elemento) {
    elemento.innerText = "Estamos há " + IdadeAtual() + " juntos";
}
function update(direction){
    document.querySelector('.item.active1').classList.remove('active1');
     //Responsável pela animação de ir para o próximo
    if (direction>0) {
        active += 1;

        if (active == total){
            active = 0;
        }
        

    //Responsável pela animação de ir para o anterior
    }else if (direction < 0) {
        active -= 1;
        
        if(active <0 ){
            active = total -1
            //Truque para chegar no último item da lista
        }
    }
    //Adicionar a classe Active para poder aparecer o proximo ou anterior
    items[active].classList.add('active1');
}
clearInterval(timer);
 timer = setInterval(() => {
    update(1)
}, 8000);

prevButton.addEventListener('click', () =>{
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(1)
})

// Para evitar que o texto acumule toda vez que a função rodar, use "=" em vez de "+=" 
// ou verifique se o elemento existe primeiro.

