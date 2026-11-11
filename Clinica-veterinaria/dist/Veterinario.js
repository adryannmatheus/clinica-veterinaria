"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Veterinario extends Funcionario_1.default {
    consultasRealizadas = 0;
    constructor(nome, matricula, salario) {
        super(nome, matricula, salario);
    }
    realizarConsulta() {
        this.consultasRealizadas++;
        console.log("Consulta realizada!");
    }
    calcularBonus() {
        return this.consultasRealizadas * 50;
    }
    imprimeInfo() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Matrícula: ${this.getMatricula()}`);
        console.log(`Salário: ${this.getSalario()}`);
    }
}
exports.default = Veterinario;
//# sourceMappingURL=Veterinario.js.map