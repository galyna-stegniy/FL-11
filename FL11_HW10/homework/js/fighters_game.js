function Fighter(fighterObj) {
  this.wins = 0;
  this.losses = 0;

  this.getName = function() {
    return fighterObj.name;
  };

  this.getDamage = function() {
    return fighterObj.damage;
  };

  this.getAgility = function() {
    return fighterObj.agility;
  };

  this.getHealth = function() {
    return fighterObj.hp;
  };

  this.attack = function(defender) {
    let maxProbability = 100;
    let basicSuccess = maxProbability - defender.getAgility();
    let randomSuccess = Math.round(Math.random() * basicSuccess);
    if (randomSuccess < basicSuccess) {
      defender.dealDamage(this.getDamage());
      console.log(
        `${this.getName()} make ${this.getDamage()} to ${defender.getName()}`
      );
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  };

  this.logConmatHistory = function() {
    console.log(
      `Name: ${fighterObj.name}, Wins: ${this.wins}, Losses: ${this.losses}`
    );
  };

  this.heal = function(restoredHP) {
    this.hp += restoredHP;
  };

  this.dealDamage = function(reducedHP) {
    if (fighterObj.hp < reducedHP) {
      fighterObj.hp = 0;
    } else {
      fighterObj.hp -= reducedHP;
    }
  };

  this.addWin = function() {
    this.wins += 1;
  };

  this.addLoss = function() {
    this.losses += 1;
  };
}

let minHP = 0;

function battle(fighter1, fighter2) {
  console.log(
    `The battle begin: ${fighter1.getName()} VS ${fighter2.getName()}`
  );

  while (fighter1.getHealth() > minHP && fighter2.getHealth() > minHP) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);

    if (fighter1.getHealth() === minHP && fighter2.getHealth() > minHP) {
      fighter1.addLoss();
      fighter2.addWin();
      console.log(`${fighter1.getName()} is dead!`);
      console.log(`${fighter2.getName()} wins!`);
    } else if (fighter2.getHealth() === minHP && fighter1.getHealth() > minHP) {
      fighter2.addLoss();
      fighter1.addWin();
      console.log(`${fighter2.getName()} is dead!`);
      console.log(`${fighter1.getName()} wins!`);
    }
  }
}
const john = new Fighter({ name: 'John', damage: 20, hp: 100, agility: 25 });
const jack = new Fighter({ name: 'Jack', damage: 10, hp: 100, agility: 35 });

battle(john, jack);
