alert("Aquí ya estoy en archivo poo");
class Personas{
    constructor(altura, peso, genero){
        this.altura = altura;
        this.peso= peso;
        this.genero= genero;
    }

    correr(){
        return `${this.genero} está corriendo`;
    }
    saltar(){
        return `${this.altura} es lo alto de la persona y por eso salta`;
    }
    nadar(){
        return `${this.peso} es lo que pesa la persona por eso tiene que nadar`;
    }

}

const personaUno = new Personas(60,30,"Masculino");
console.log(personaUno.correr());
console.log(personaUno.saltar());
console.log(personaUno.nadar());
const personaDos = new Personas(90,50, "Femenino");
console.log(personaDos.correr());
console.log(personaDos.saltar());
console.log(personaDos.nadar());

