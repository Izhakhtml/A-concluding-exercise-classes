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
    let max = array[0] 
    array.forEach(element => {
       if(max.engineCapacity < element.engineCapacity) max = element;
    });
    return max
  }
}
const car1 = new Cars(5,1600,"green")

btn.onclick =()=>{
const car2 = new Cars(wheels.value,engine.value,color.value)
console.log(car2);
container.innerHTML = 
`<table>
       <tr>
           <th>numberOfWheels</th>
           <th>engineCapacity</th>
           <th>color</th>
       </tr>
       <tr>
           <td>${wheels.value}</td>
           <td>${engine.value}</td>
           <td>${color.value}</td>
       </tr>
</table>
`
}

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
