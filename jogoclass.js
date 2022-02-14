class Hero {
  constructor(name, type, universe, st, agi, int) {
    this.name = name //Nome
    this.type = type //Tipo
    this.universe = universe //Universo. Ex.: Disney, Marvel, League of Legends
    this.st = st //Força
    this.agi = agi //Agilidade
    this.int = int //Inteligência
    this.hp = this.st * 40 //Pontos de Vida
    this.hpatual = this.hp // Pontos de Vida atualizado
    this.mp = this.int * 20 //Mana (Pontos para execução de habilidades)
    this.mpatual = this.mp
    this.def = this.agi * 2 //Defesa
    this.atkPower = 50 //Ataque base
    this.damage = 0 //força do ataque da vez (danocausado)
    this.dmgUp()
    this.lightAtk()
    this.hardAtk()
    this.special()
  }

  /*
      Método que ajusta os pontos de ataque do personagem com base no seu tipo
  */
  dmgUp() {
    /*	
          Types: 
        1 - Strength
        2 - Agility
        3 - Intelligence
      */
    switch (this.type) {
      case 1:
        this.atkPower += this.st
        break;

      case 2:
        this.atkPower += this.agi
        break;

      case 3:
        this.atkPower += this.int
        break;

    }
  }

  lightAtk() {
    this.damage = Math.ceil(this.atkPower * ((Math.random() * 0.4) + 0.4))
  }

  hardAtk() {
    this.damage = Math.ceil(this.atkPower * ((Math.random() * 0.2) + 0.8))
  }

  special() {
    this.damage = Math.ceil(this.atkPower * ((Math.random() * 0.5) + 1))
  }

}


// muda a tela de seleção de personagens para campo de batalha
// esconde a seleção e mostra a batalha 
function batalhar() {
  document.getElementById('parte1').style.display = 'none';
  document.getElementById('parte2').style.display = 'block';
  document.getElementById('btnbatalha').style.display = 'none';
}

// reinicia o jogo
// esconde o campo de batalha e reinicia as variaveis 
function reiniciar() {
  document.getElementById('parte2').style.display = 'none';
  document.getElementById('parte1').style.display = 'block';
  document.getElementById('btnbatalha').style.display = 'block';
  vez = 1;
  player1 = "";
  player2 = "";
  document.querySelector("#escolhap1").setAttribute('src', "assets/images/nada.png");
  document.querySelector("#escolhap2").setAttribute('src', "assets/images/nada.png");
  document.getElementById("nome-personagem-p1").innerHTML = "";
  document.getElementById("universo-personagem-p1").innerHTML = "";
  document.getElementById("nome-personagem-p2").innerHTML = "";
  document.getElementById("universo-personagem-p2").innerHTML = "";
  document.getElementById("btnEspecial2").disabled = false;
  document.getElementById("btnEspecial1").disabled = false;
  document.getElementById("btnForte2").disabled = false;
  document.getElementById("btnForte1").disabled = false;
  
  document.getElementById("hp-p1").style.setProperty('--hp', 100)
  document.getElementById("hp-p2").style.setProperty('--hp', 100)
  document.getElementById("mp-p1").style.setProperty('--mp', 100)
  document.getElementById("mp-p2").style.setProperty('--mp', 100)
}

// personagens criados pela class Hero pré definidos
let mula = new Hero("Mula sem Cabeça", 2, "Mitológico", 20, 26, 10);
let monica = new Hero("Mônica", 3, "Kids", 10, 16, 18);
let princesa = new Hero("Shena", 1, "Guerreira", 23, 20, 20);
let darth = new Hero("Darth Vader", 1, "Mal", 33, 13, 20);
let chucky = new Hero("Chucky", 1, "Brinquedo", 25, 20, 15);
let freddy = new Hero("Freddy", 2, "Animatronic", 15, 35, 25);
let pintinho = new Hero("Pintinho Amarelinho", 3, "Fazenda", 6, 20, 30);
let lula = new Hero("Lula Molusco", 3, "Mar", 8, 12, 12);
let yoshi = new Hero("Yoshi", 2, "Games", 19, 30, 12);
let bart = new Hero("Bart Simpson", 2, "Kids", 11, 25, 5);
let boitata = new Hero("Boitatá", 1, "Mitológico", 29, 18, 16);

//variaveis globais:
//vez - indica qual player é a vez
// player1 - recebe o jogador da vez
// player2 - recebe o jogador da vez
let vez = 1;
let player1;
let player2;


// escolhe a personagem de acordo com o que o usuario escolheu 
// lista de personagens pré definidas 
function escolherpersonagem(value) {
  if (value === 1) {
    aparecerimagem('assets/images/boitata.png', boitata);
  } else if (value === 2) {
    aparecerimagem('assets/images/bart.png', bart);
  } else if (value === 3) {
    aparecerimagem('assets/images/yoshi.png', yoshi);
  } else if (value === 4) {
    aparecerimagem('assets/images/lula.png', lula);
  } else if (value === 5) {
    aparecerimagem('assets/images/galinho.png', pintinho);
  } else if (value === 6) {
    aparecerimagem('assets/images/freddy.png', freddy);
  } else if (value === 7) {
    aparecerimagem('assets/images/chucky.png', chucky);
  } else if (value === 8) {
    aparecerimagem('assets/images/darth.png', darth);
  } else if (value === 9) {
    aparecerimagem('assets/images/princesa.png', princesa);
  } else if (value === 10) {
    aparecerimagem('assets/images/monica.png', monica);
  } else if (value === 11) {
    aparecerimagem('assets/images/Mula_sem_cabeça.png', mula);
  }
}

// mostra a imagem do personagem escolhido na tela de seleção de personagens e 
//no campo de batalha (imagem e nome)
function aparecerimagem(imagem, selecionado) {
  if (vez === 1) {
    document.querySelector("#img-player1").setAttribute('src', imagem);
    document.querySelector("#escolhap1").setAttribute('src', imagem);
    player1 = selecionado;
    vez = 2;
    document.getElementById("nome-personagem-p1").innerHTML = player1.name ;
    document.getElementById("universo-personagem-p1").innerHTML = player1.universe;
    document.getElementById("player1-monster-name").innerHTML = player1.name;
    document.getElementById("actual-hp-player1").innerHTML = player1.hp;
    document.getElementById("total-hp-player1").innerHTML = player1.hp;
    document.getElementById("actual-mp-player1").innerHTML = player1.mp;
    document.getElementById("total-mp-player1").innerHTML = player1.mp;
   
  } else {
    document.querySelector("#escolhap2").setAttribute('src', imagem);
    document.querySelector("#img-player2").setAttribute('src', imagem);
    player2 = selecionado;
    vez = 1;
    document.getElementById("nome-personagem-p2").innerHTML = player2.name ;
    document.getElementById("universo-personagem-p2").innerHTML = player2.universe;
    document.getElementById("player2-monster-name").innerHTML = player2.name;
    document.getElementById("actual-hp-player2").innerHTML = player2.hp;
    document.getElementById("total-hp-player2").innerHTML = player2.hp;
    document.getElementById("actual-mp-player2").innerHTML = player2.mp;
    document.getElementById("total-mp-player2").innerHTML = player2.mp;
  }
}

const HPBarP1 = document.getElementById("hp-p1")
const HPBarP2 = document.getElementById("hp-p2")

function atkp1(){
  player1.lightAtk();
  player2.hpatual = player2.hpatual - player1.damage;
  atualizaHP2();
}

function atkp2(){
  player2.lightAtk();
  player1.hpatual = player1.hpatual - player2.damage;
  atualizaHP1();
}

function atkFortep1(){
  player1.hardAtk(); 
  player2.hpatual = player2.hpatual - player1.damage;
  player1.mpatual = player1.mpatual - 10
  atualizaHP2();
  atualizaMP1();
}


function atkFortep2(){
  player2.hardAtk(); 
  player1.hpatual = player1.hpatual - player2.damage;
  player2.mpatual = player2.mpatual - 10
  atualizaHP1();
  atualizaMP2();
}

function atkEspecialp1(){
  player1.special(); 
  player2.hpatual = player2.hpatual - player1.damage;
  player1.mpatual = player1.mpatual - 40
  atualizaHP2();
  atualizaMP1();
}

function atkEspecialp2(){
  player2.special(); 
  player1.hpatual = player1.hpatual - player2.damage;
  player2.mpatual = player2.mpatual - 40
  atualizaHP1();
  atualizaMP2();
}

// atualiza a barra de hp do player 1
function atualizaHP1() {
  document.getElementById("actual-hp-player1").innerHTML = player1.hpatual;
  let hp = (player1.hpatual / player1.hp) * 100
  document.getElementById("hp-p1").style.setProperty('--hp', hp)
  if (player1.hpatual <= 0){
    alert("Fim de jogo! " + player2.name + " ganhou")
    reiniciar()
  }
}

// atualiza a barra de hp do player 2
function atualizaHP2() {
  document.getElementById("actual-hp-player2").innerHTML = player2.hpatual;
  let hp = (player2.hpatual / player2.hp) * 100
  document.getElementById("hp-p2").style.setProperty('--hp', hp)
  if (player2.hpatual <= 0){
    alert("Fim de jogo! " + player1.name + " ganhou")
    reiniciar()
  }
}

// atualiza a barra de mp do player 1
function atualizaMP1() {
  document.getElementById("actual-mp-player1").innerHTML = player1.mpatual;
  let mp = (player1.mpatual / player1.mp) * 100
  document.getElementById("mp-p1").style.setProperty('--mp', mp)
  if (player1.mpatual < 40){
    document.getElementById("btnEspecial1").disabled = true;
  }
  if(player1.mpatual < 10){
    document.getElementById("btnForte1").disabled = true;
  }
}

// atualiza a barra de mp do player 2
function atualizaMP2() {
  document.getElementById("actual-mp-player2").innerHTML = player2.mpatual;
  let mp = (player2.mpatual / player2.mp) * 100
  document.getElementById("mp-p2").style.setProperty('--mp', mp)
  if (player2.mpatual < 40){
    document.getElementById("btnEspecial2").disabled = true;
  }
  if(player2.mpatual < 10){
    document.getElementById("btnForte2").disabled = true;
  }
}
