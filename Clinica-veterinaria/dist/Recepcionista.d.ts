import Funcionario from "./Funcionario";
export default class Recepcionista extends Funcionario {
    private agendamentosConfirmados;
    constructor(nome: string, matricula: number, salario: number);
    confirmarAgendamento(): void;
    calcularBonus(): number;
    imprimeInfo(): void;
}
//# sourceMappingURL=Recepcionista.d.ts.map