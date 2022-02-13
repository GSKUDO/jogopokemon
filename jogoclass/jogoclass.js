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
  
monica = new Hero("monica", 2, Monica, 100, 20, 50);

console.log(monica)

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