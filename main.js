// const espada = {
//     ataque :30,
//     diametro : "30cm",
//     efecto : undefined,
//     atacar(){
//         return this.ataque;
//     }
// }

// const espadaHielo = Object.create(espada);
// Object.defineProperties(espadaHielo,{
//                         "vida":{
//                             value: "+30",
//                             enumerable: true
//                         },
//                         "efecto":{
//                             value: "Congelar",
//                             enumerable: true
//                         },
//                         "ataque":{
//                             value: espada.ataque += 10,
//                             enumerable: true
//                         }
// });
// espadaHielo.atacar = function(){
//     return `${this.ataque} MOD ${this.efecto} y ${this.vida} vida`;
// }
// console.log(espada.atacar());


//Clase padre
class espada{
    constructor(arg){
        for(let [id, value] of Object.entries(arg)){
            this[id] = value;
        }
    }
    atacar(){
        return this.ataque;
    }
}

//Clase hija extendida a espada, hereda
class espadaHielo extends espada{
    constructor(arg){
        super(arg);
        this.vida = "+30";
        //Polimorfismo "Agrega nuevas variables"
        this.efecto = "Congelar";
        this.ataque += 20;
    }
    atacar(){
        return `La Espada Hielo tiene un nivel de ataque: ${this.ataque} su efecto es ${this.efecto} y otorga ${this.vida} vida`;
    }
}

//Clase hija extendida a espada, hereda
class espadaFuego extends espada{
    constructor(arg){
        super(arg);
        this.vida = "+40";
        //Polimorfismo "Agrega nuevas variables"
        this.efecto = "Quemar";
        this.ataque += 35;
        this.velocidad = "-10";
    }
    atacar(){
        return `La Espada Fuego tiene un nivel de ataque: ${this.ataque} su efecto es ${this.efecto}, otorga ${this.vida} vida y afecta la velocidad ${this.velocidad}`;
    }
}

//Set de datos
let data = {
    ataque:30,
    diametro: "30 cm",
    efecto: undefined
}

//Instancia Espada Basica con el set de datos
console.log(`Impresión clase Espada`);
const inst = new espada(data);
console.log(`La Espada Basica tiene un nivel de ataque: ${inst.atacar()}`);
console.log(inst);

//Instancia Espada Hielo con set de datos
console.log(`Impresión clase Espada Hielo`);
const instHielo = new espadaHielo(data);
console.log(instHielo.atacar());
console.log(instHielo);
console.log(instHielo);

//Instancia Espada Fuego con set de datos
console.log(`Impresión clase Espada Fuego`);
const instFuego = new espadaFuego(data);
console.log(instFuego.atacar(),` diametro ${data.diametro}`);
console.log(instFuego);
console.log(instFuego);