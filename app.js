// CLASE 1
// VARIABLES:
/*Let se puede declarar vacia en cambio cosnt no ya que es una constante,
ademas no puede cambiar su valor en futuro, en let si.
*/
// let comision = 70067
//     // cosnt comision  

// console.log(comision);


// FUNCIONES
// function suma(a,b) {
//     // calculo, validacion
//     return a + b
// }
// console.log(suma (2,4));

// const rest =(a,b)=> a - b
// console.log(rest(4,2));




// FUNCION ANONIMA

// const saludar = function (nombre){
//     console.log(`hola ${nombre}, como andas?`);
// }
// saludar('eze')



// CLASSES
// Atributos = caracteristicas
// Metedos ()= acciones

// class Persona {
//     constructor(nombre, edad, apellido) {
//             this.nombre = nombre,
//             this.edad = edad,
//             this.apellido = apellido
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad}`);
//     }
// }

// const persona1 = new Persona('Eze','23','Cordoba')

// persona1.saludar()
// console.log(persona1);

// EJERCICIO
class Contador {
    static cuentaGlobal = 0

    constructor(responsable) {
        this.responsable=responsable
        this.cuentaIndividual = 0
    }

    obtenerResponsable(){
        return this.responsable
    }

    obtenerCuentaIndividual(){
        return this.cuentaIndividual
    }

    static obtenerCuentaGlobal (){
        return Contador.cuentaGlobal
    }

    contar(){
        this.cuentaIndividual++
        Contador.cuentaGlobal++
    }
}

const contador1 = new Contador('Eze')
const contador2 = new Contador('Ezeeee')

console.log(contador1.obtenerResponsable());

contador1.contar()
contador1.contar()
contador1.contar()
contador2.contar()

console.log(contador1.obtenerCuentaIndividual());
console.log(contador2.obtenerCuentaIndividual());
console.log(Contador.obtenerCuentaGlobal());