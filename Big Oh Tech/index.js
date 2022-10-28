

class Person{
   
    constructor(name,quantity,vehicle1,vehicle2){
       this.name=name;
       this.quantity=quantity;
       this.vehicle1=vehicle1;
       this.Vehicle2=vehicle2;
    }
    getPersonDetails(){
        console.log(`${this.name} has ${this.quantity} vehicle, one is  ${this.vehicle1} car and another is ${this.Vehicle2}` );
    }

}


class Vehicle {
   
   constructor(fuel,condition,manufacture){
       this.fuel=fuel;
       this.condition=condition;
       this.manufacture=manufacture;
       
    }
   }
  
 
//This is the example of Inheritance
    class HondaCar extends Vehicle{
       constructor(fuel,uses,manufacture){

           super(fuel,uses,manufacture)
          
       }
      getHonda=function(){
           console.log(`Honda accord car runs on fuel called ${this.fuel}`);
           console.log(`Honda accord is ${this.condition} and ${this.manufacture} in India`);
       }
   }


//This is the example Encapsulation using geter and seter
class  DucatiBike{
   constructor(){
       let fuel, condition,manufacture
   }
   setFuel(fuel){
       this.fuel=fuel 
   }
   getFuel(){
   return this.fuel
   }
   setcondition(condition){
       this.condition=condition
   }
   getcondition(){
     return  this.condition
   }
   setmanufacture(manufacture){
       this.manufacture=manufacture
   }
   getmanufacture(){
       return this.manufacture
   }


}


class Answer{
    runProgram(){
       // creatting object for Person
      let person=new Person("Sourabh","two","Honda accord","Ducati Bike")
          person.getPersonDetails()
  
       // creatting object for Honda Car
      let honda = new HondaCar("diesel","new","made");
          honda.getHonda();
  
       // creatting object for Ducati Bike
      let ducati = new DucatiBike(); 
          ducati.setFuel("petrol");
          ducati.setcondition("used")
          ducati.setmanufacture("imported")
          console.log(`Ducati runs on fuel called ${ducati.getFuel()}`);
          console.log(`Ducati is ${ducati.getcondition()} and ${ducati.getmanufacture()} vehicle`);
   }
}


let ans=new Answer()
ans.runProgram()
