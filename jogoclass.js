class Hero {
    constructor(name, type, universe, st, agi, int) {
      this.name = name //Nome
      this.type = type //Tipo
      this.universe = universe //Universo. Ex.: Disney, Marvel, League of Legends
      this.st = st		 //Força
      this.agi = agi	 //Agilidade
      this.int = int	 //Inteligência
      this.hp = this.st * 10 //Pontos de Vida
      this.mp = this.int * 10 //Mana (Pontos para execução de habilidades)
      this.def = this.agi * 2 //Defesa
      this.atkPower = 50 //Ataque base
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
        1 - Agility
        2 - Strength
        3 - Intelligence
      */
      switch (this.type) {
        case 1:
          this.atkPower += this.agi
          break;
  
        case 2:
          this.atkPower += this.st
          break;
  
        case 3:
          this.atkPower += this.int
          break;
  
      }
    }
    lightAtk(){
        damage = Math.ceil(this.atkPower * ((Math.random() * 0.4) + 0.4))
    }
    hardAtk(){
        damage = Math.ceil(this.atkPower * ((Math.random() * 0.2) + 0.8))
    }
    special(){
        damage = Math.ceil(this.atkPower * ((Math.random() * 0.5) + 1))
    }
  }
  
}

function batalhar(){
  document.getElementById('parte1').style.display='none';
  document.getElementById('parte2').style.display='block';
  document.getElementById('btnbatalha').style.display='none';
}

function reiniciar(){
  document.getElementById('parte2').style.display='none';
  document.getElementById('parte1').style.display='block';
  document.getElementById('btnbatalha').style.display='block';
  vez = 1;
  player1 = "";
  player2 = "";
  document.querySelector("#img-player1").setAttribute('src', "assets/images/nada.png");
  document.querySelector("#escolhap1").setAttribute('src', "assets/images/nada.png");
  document.querySelector("#img-player2").setAttribute('src', "assets/images/nada.png");
  document.querySelector("#escolhap2").setAttribute('src', "assets/images/nada.png");
}

let mula = new Hero("Mula sem Cabeça", 2, "Mitologico", 5, 10, 10);
let monica = new Hero("Mônica", 1, "Kids", 4, 15, 30);
let princesa = new Hero("Shena", 2, "Guerreira", 5, 25, 8);
let darth = new Hero("Darth Vader", 3, "Mal", 8, 15, 30);
let chucky = new Hero("Chucky", 3, "Brinquedo", 1, 60, 90);
let freddy = new Hero("Freddy", 2, "Animatronic", 6, 15, 45);
let pintinho = new Hero("Pintinho Amarelinho", 2, "Fazenda", 11, 25, 40);
let lula = new Hero("Lula Molusco", 1, "Mar", 16, 8, 20);
let yoshi = new Hero("Yoshi", 3, "Games", 11, 18, 32);
let bart = new Hero("Bart Simpsons", 2, "Kids", 7, 19, 34);
let boitata = new Hero("Boitata", 1, "Mitologico", 13, 32, 19);

let vez = 1;
let player1;
let player2;

function escolherpersonagem(value){
  if (value === 1){
    aparecerimagem('assets/images/boitata.png', boitata);
  }else if(value === 2){
    aparecerimagem('assets/images/bart.png', bart);
  }else if(value === 3){
    aparecerimagem('assets/images/yoshi.png', yoshi);
  }else if(value === 4){
    aparecerimagem('assets/images/lula.png', lula);
  }else if(value === 5){
    aparecerimagem('assets/images/galinho.png', pintinho);
  }else if(value === 6){
    aparecerimagem('assets/images/freddy.png', freddy);
  }else if(value === 7){
    aparecerimagem('assets/images/chucky.png', chucky);
  }else if(value === 8){
    aparecerimagem('assets/images/darth.png', darth);
  }else if(value === 9){
    aparecerimagem('assets/images/princesa.png', princesa);
  }else if(value === 10){
    aparecerimagem('assets/images/monica.png', monica);
  }else if(value === 11){
    aparecerimagem('assets/images/Mula_sem_cabeça.png', mula);
  }
}

function aparecerimagem(imagem, selecionado){
  if (vez === 1){
    document.querySelector("#img-player1").setAttribute('src', imagem);
    document.querySelector("#escolhap1").setAttribute('src', imagem);
    player1 = selecionado;
    vez = 2;
    document.getElementById("player1-monster-name").innerHTML = player1.name;
  }else{
    document.querySelector("#escolhap2").setAttribute('src', imagem);
    document.querySelector("#img-player2").setAttribute('src', imagem);
    player2 = selecionado;
    vez = 1;
    document.getElementById("player2-monster-name").innerHTML = player2.name;
  }
}

const HPTotalP1 = 100;
let HPActualP1 = 100;
const ShowedHPActualP1 = document.getElementById("actual-hp-player1")
const ShowedHPTotalP1 = document.getElementById("total-hp-player1")
const HPBarP1 = document.getElementById("hp-p1")

const HPTotalP2 = 100;
let HPActualP2 = 100;
const ShowedHPActualP2 = document.getElementById("actual-hp-player2")
const ShowedHPTotalP2 = document.getElementById("total-hp-player2")
const HPBarP2 = document.getElementById("hp-p2")

ShowedHPTotalP1.innerHTML = HPTotalP1
ShowedHPActualP1.innerHTML = HPActualP1

function atkSimulation(){
    HPActualP2 = HPActualP2 - 10
    atualizaHP()
}
function atualizaHP(){
    ShowedHPActualP2.innerHTML = HPActualP2
    let hp = (HPActualP2 / HPTotalP2)*100
    HPBarP2.style.setProperty('--hp',hp)
}
