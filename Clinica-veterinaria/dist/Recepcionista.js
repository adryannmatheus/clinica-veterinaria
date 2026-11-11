"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Recepcionista extends Funcionario_1.default {
    agendamentosConfirmados = 0;
    constructor(nome, matricula, salario) {
        super(nome, matricula, salario);
    }
    confirmarAgendamento() {
        this.agendamentosConfirmados++;
        console.log("Agendamento confirmado!");
    }
    calcularBonus() {
        return this.agendamentosConfirmados * 10;
    }
    imprimeInfo() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Matrícula: ${this.getMatricula()}`);
        console.log(`Salário: ${this.getSalario()}`);
    }
}
exports.default = Recepcionista;
//# sourceMappingURL=Recepcionista.js.map