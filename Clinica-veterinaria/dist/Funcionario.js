"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    nome;
    matricula;
    salario;
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }
    alterarSalario(novoSalario) {
        if (novoSalario > 0) {
            this.salario = novoSalario;
            console.log("Salário alterado");
        }
        else {
            console.log("Salário não aceito");
        }
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
}
exports.default = Funcionario;
//# sourceMappingURL=Funcionario.js.map