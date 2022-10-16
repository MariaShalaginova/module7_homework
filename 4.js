function ElectricDevice(name, powerConsumption){
    this.name = name,
    this.PowerWt = powerConsumption,
    this.power = false
  }
  
  ElectricDevice.prototype.enable = function(name){
      this.power = true;
      console.log(`${this.name} включена в розетку`)
  }
  ElectricDevice.prototype.disable = function(name){
      this.power = false;
      console.log(`${this.name} выключена из розетки`)
  }

 ElectricDevice.prototype.getPower = function(){
      console.log(`потребляемая мощность ${this.PowerWt} Вт`)
 }

  function Lamp(name, powerConsumption, material){
    this.name = name,
    this.PowerWt = powerConsumption,
    this.material = material  
  }

 Lamp.prototype = new ElectricDevice()


 function Computer(name, powerConsumption, system){
    this.name = name,
    this.PowerWt = powerConsumption,
    this.system = system 
  }  

Computer.prototype = new ElectricDevice()

Computer.prototype.computerSystem = function(){
      console.log(`на компьютер установлена операционная система ${this.system}`)
  }

  const lamp = new Lamp('лампа', 5, "стекло" );
  const computer = new Computer('компьютер', 300, "Windows" );
  
  lamp.disable()
  lamp.getPower()
  console.log(lamp)
  console.log(computer)
 computer.computerSystem()

