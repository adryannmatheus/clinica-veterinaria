import Funcionario from "./Funcionario";
export default class Veterinario extends Funcionario {
    private consultasRealizadas: number = 0;

    constructor(
        nome: string, 
        matricula: number, 
        salario: number
    ) {
        super(nome, matricula, salario);
    }

    realizarConsulta(): void {
        this.consultasRealizadas++;
        console.log("Consulta realizada!");
    }

    calcularBonus(): number {
        return this.consultasRealizadas * 50;
    }
    imprimeInfo(): void{
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Matrícula: ${this.getMatricula()}`);
        console.log(`Salário: ${this.getSalario()}`);
    }
}