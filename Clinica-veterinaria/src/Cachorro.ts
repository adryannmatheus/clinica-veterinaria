import Animal from "./Animal";
export default class Cachorro extends Animal {
    constructor(
        nome: string, 
        idade: number, 
        tutor: string
    ) {
        super(nome, idade, tutor);
    }
    emitirSom(): void {
        console.log("O cachorro late: Au au!");
    }
    descreverCuidados(): void {
        console.log("Precisa de passeio diário.");
    }
    passear(): void {
        console.log(`${this.getNome()} está passeando.`);
    }
    imprimeInfo(): void{
    console.log(`Nome: ${this.getNome()}`);
    console.log(`Idade: ${this.getIdade()}`);
    console.log(`Tutor: ${this.getTutor()}`);
    }
}