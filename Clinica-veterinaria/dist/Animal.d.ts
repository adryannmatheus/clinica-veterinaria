export default abstract class Animal {
    private nome;
    private idade;
    private tutor;
    constructor(nome: string, idade: number, tutor: string);
    getNome(): string;
    setNome(nome: string): void;
    getIdade(): number;
    setIdade(idade: number): void;
    getTutor(): string;
    setTutor(tutor: string): void;
    abstract emitirSom(): void;
    abstract descreverCuidados(): void;
    abstract imprimeInfo(): void;
}
//# sourceMappingURL=Animal.d.ts.map