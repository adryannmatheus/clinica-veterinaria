import Animal from "./Animal";
export default class Ave extends Animal {

    constructor(
        nome: string, 
        idade: number, 
        tutor: string
    ) {
        super(nome, idade, tutor);
    }

    emitirSom(): void {
        console.log("A ave está cantando!");
    }

    descreverCuidados(): void {
        console.log("Precisa de uma gaiola adequada.");
    }

    cantar(): void {
        console.log(`${this.getNome()} está cantando.`);
    }

    imprimeInfo(): void{
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Tutor: ${this.getTutor()}`);
    }
}