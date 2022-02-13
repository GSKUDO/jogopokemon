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
}

let mula = new Hero("Mula sem Cabeça", 2, "Mitologico", 5, 15, 30);
let monica = new Hero("Mônica", 2, "Mitologico", 5, 15, 30);
let princesa = new Hero("Shena", 2, "Mitologico", 5, 15, 30);
let darth = new Hero("Darth Vader", 2, "Mitologico", 5, 15, 30);
let chucky = new Hero("Chucky", 2, "Mitologico", 5, 15, 30);
let freddy = new Hero("Freddy", 2, "Mitologico", 5, 15, 30);
let pintinho = new Hero("Pintinho Amarelinho", 2, "Mitologico", 5, 15, 30);
let lula = new Hero("Lula Molusco", 2, "Mitologico", 5, 15, 30);
let yoshi = new Hero("Yoshi", 2, "Mitologico", 5, 15, 30);
let bart = new Hero("Bart Simpsons", 2, "Mitologico", 5, 15, 30);
let boitata = new Hero("Boitata", 1, "Herois", 10, 25, 14);

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
    document.querySelector("#escolhap1").setAttribute('src', imagem);
    player1 = selecionado;
    vez = 2;
  }else{
    document.querySelector("#escolhap2").setAttribute('src', imagem);
    player2 = selecionado;
    vez = 1;
  }
}
