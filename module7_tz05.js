class Appliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }

  //включаем прибор в розетку
  turnOn() {
    console.log(`${this.name} вкл.`);
  }
  //считаем потребление энергии
  result() {
    console.log(`Потребляет ${this.power}Вт в час.`);
  }
  //выключаем прибор из розетки
  turnOff() {
    console.log(`${this.name} выкл.`);
  }

};

//----------------------------

//класс для телевизора
class Tv extends Appliance {
  constructor(name, power){
    super(name, power);
    this.resolution = '3840x2160';
  }
};

//создаем экземпляр телевизора
const myTv = new Tv('Телевизор', 300);
console.log(myTv);

//включаем телевизор
myTv.turnOn();
//считаем потребление энергии
myTv.result();
//выключаем телевизор
myTv.turnOff();

//----------------------------

//класс для холодильника
class Fridge extends Appliance {
  constructor(name, power){
    super(name, power);
    this.technology = 'Door Cooling';
  }
};

//создаем экземпляр холодильника
const myFridge = new Fridge('Холодильник', 600);
console.log(myFridge);

//включаем холодильник
myFridge.turnOn();
//считаем потребление энергии
myFridge.result();
//выключаем холодильник
myFridge.turnOff();
