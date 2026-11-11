import Funcionario from "./Funcionario";
export default class Recepcionista extends Funcionario {
    private agendamentosConfirmados: number = 0;

    constructor(
        nome: string, 
        matricula: number, 
        salario: number
    ) {
        super(nome, matricula, salario);
    }
    confirmarAgendamento(): void {
        this.agendamentosConfirmados++;
        console.log("Agendamento confirmado!");
    }

    calcularBonus(): number {
        return this.agendamentosConfirmados * 10;
    }
    imprimeInfo(): void{
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Matrícula: ${this.getMatricula()}`);
        console.log(`Salário: ${this.getSalario()}`);
    }
}