function Appliance(name, power) {
  this.name = name;
  this.power = power;
};

//включаем прибор в розетку
Appliance.prototype.turnOn = function() {
  this.on = true;
  console.log(`${this.name} вкл.`);
}

//считаем потребление энергии
Appliance.prototype.result = function() {
  console.log(`Потребляет ${this.power}Вт в час.`);
}

//выключаем прибор из розетки
Appliance.prototype.turnOff = function() {
  this.on = false;
  console.log(`${this.name} выкл.`);
}

//----------------------------

//конструктор для телевизора
function Tv(){
  this.resolution = '3840x2160';
}

//добавляем Applience в прототип телевизора
Tv.prototype = new Appliance('Телевизор', 300);

//создаем экземпляр телевизора
const myTv = new Tv();
//console.log(myTv);

//включаем телевизор
myTv.turnOn();
//считаем потребление энергии
myTv.result();
//выключаем телевизор
myTv.turnOff();

//----------------------------

//конструктор для холодильника
function Fridge(){
  this.technology = 'Door Cooling';
}

//добавляем Applience в прототип холодильника
Fridge.prototype = new Appliance('Холодильник', 600);

//создаем экземпляр холодильника
const myFridge = new Fridge();
//console.log(myFridge);

//включаем холодильник
myFridge.turnOn();
//считаем потребление энергии
myFridge.result();
//выключаем холодильник
myFridge.turnOff();
