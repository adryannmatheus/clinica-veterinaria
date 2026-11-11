import Animal from "./Animal";
export default class Gato extends Animal {

    constructor(
        nome: string, 
        idade: number, 
        tutor: string
    ) {
        super(nome, idade, tutor);
    }

    emitirSom(): void {
        console.log("O gato mia: Miau!");
    }
    descreverCuidados(): void {
        console.log("Precisa de um arranhador.");
    }
    arranhar(): void {
        console.log(`${this.getNome()} está usando o arranhador.`);
    }
    
    imprimeInfo(): void{
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Tutor: ${this.getTutor()}`);
    }
}