export default abstract class Funcionario {
    
    private nome: string;
    private matricula: number;
    private salario: number;

    constructor(

        nome: string,
        matricula: number,
        salario: number

    ) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }

    alterarSalario(novoSalario: number): void {
        if (novoSalario > 0) { this.salario = novoSalario;
            console.log("Salário alterado");
        } else {
            console.log("Salário não aceito");
        }
    }

    getSalario(): number {
        return this.salario;
    }
    setSalario(salario:number): void{
        this.salario= salario;
    }
    
    getNome(): string{
        return this.nome
    }
    setNome(nome:string): void{
        this.nome= nome;
    }

    getMatricula(): number{
        return this.matricula
    }
    setMatricula(matricula:number): void{
        this.matricula= matricula;
    }

    abstract calcularBonus(): number;
    abstract imprimeInfo(): void;
}

