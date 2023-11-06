const car={
    name: 'car',
    start() {
      document.write('Start the ' + this.name+"<br>");
    },
    speedUp() {
      document.write('Speed up the ' + this.name+"<br>");
    },
    stop() {
      document.write('Stop the ' + this.name);
    },
  
}

console.log(car);

const aircraft={
    name: 'aircraft',
    fly() {
      document.write('Fly');
    },
  
}

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly.call(aircraft)

