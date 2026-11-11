export default abstract class Funcionario {
    private nome;
    private matricula;
    private salario;
    constructor(nome: string, matricula: number, salario: number);
    alterarSalario(novoSalario: number): void;
    getSalario(): number;
    setSalario(salario: number): void;
    getNome(): string;
    setNome(nome: string): void;
    getMatricula(): number;
    setMatricula(matricula: number): void;
    abstract calcularBonus(): number;
    abstract imprimeInfo(): void;
}
//# sourceMappingURL=Funcionario.d.ts.map