class Cars{
    numberOfWheels;
    engineCapacity;
    color;
    constructor(numberOfWheels,engineCapacity,color){
        this.numberOfWheels = numberOfWheels
        this.engineCapacity = engineCapacity
        this.color = color
    }
    getComplicated(){
        return `number Of Wheels:${this.engineCapacity} engine Capacity:${this.engineCapacity} color:${this.color}`
    }
    static getNumberOfWheels(array){
    let biggesEngine = array[0] 
    array.forEach(engineItem => {
       if(biggesEngine.engineCapacity < engineItem.engineCapacity) biggesEngine = engineItem;
    });
    return biggesEngine
  }
}
const car1 = new Cars(5,1600,"green")

//////////////////////////////////////////////////////////////////////// honda
class Honda extends Cars{
    getComplicated(){
        return `${super.getComplicated()} Name of car:honda`
    }
    getUpperCase(){
        return `${this.getComplicated().toLocaleUpperCase()}`
    }
    get result(){
        return this.getUpperCase()
    }
    
}
const honda = new Honda(6,2000,"black")
console.log(honda.result);

//////////////////////////////////////////////////////////////////////// pego
class Pego extends Cars{

    getComplicated(){
        return `${super.getComplicated()} Name of car:pego`
    }
    getBigEngine(array){
        return `${super.getNumberOfWheels(array)}`
    }
}
const pego = new Pego(8,2500,"gray")

// console.log(pego.getComplicated());

//////////////////////////////////////////////////////////////////////// Mazada
class Mazda extends Cars{
    getComplicated(){
        return `${super.getComplicated()} Name of car:mazda`
    }
    getBigEngine(array){
        return `${super.getNumberOfWheels(array)}`
    }
}
const mazda = new Mazda(10,3000,"yellow")
// console.log(mazda.getComplicated());


btn.onclick =()=>{

switch (typeCar.value) {
        case "honda":
                let hondaCar = new Honda(wheels.value,engine.value,color.value)
                container.innerHTML = 
                `<table>
                <tr>
                    <th>numberOfWheels</th>
                    <th>engineCapacity</th>
                    <th>color</th>
                    <th>type of car</th>
                </tr>
                <tr>
                    <td>${hondaCar.numberOfWheels}</td>
                    <td>${hondaCar.engineCapacity}</td>
                    <td>${hondaCar.color}</td>
                    <td>honda</td>
                </tr>
         </table>
         `
            return;
            case "mazda":
                let mazdaCar = new Mazda(wheels.value,engine.value,color.value)
                container.innerHTML = 
                `<table>
                <tr>
                    <th>numberOfWheels</th>
                    <th>engineCapacity</th>
                    <th>color</th>
                    <th>type of car</th>
                </tr>
                <tr>
                    <td>${mazdaCar.numberOfWheels}</td>
                    <td>${mazdaCar.engineCapacity}</td>
                    <td>${mazdaCar.color}</td>
                    <td>mazda</td>
                </tr>
         </table>
         `
            return;
            case "pego":
                let pegoCar = new Pego(wheels.value,engine.value,color.value)
                container.innerHTML = 
            `<table>
                 <tr>
                      <th>numberOfWheels</th>
                      <th>engineCapacity</th>
                      <th>color</th>
                      <th>type of car</th>
                 </tr>
                 <tr>
                      <td>${pegoCar.numberOfWheels}</td>
                      <td>${pegoCar.engineCapacity}</td>
                      <td>${pegoCar.color}</td>
                      <td>pego</td>

                </tr>
            </table>
            `
            return;
    
        default:
            container.innerHTML = ""
            alert("there is not types of cars")
            
            return;
    }
    }