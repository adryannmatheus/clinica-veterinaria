"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cachorro extends Animal_1.default {
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    emitirSom() {
        console.log("O cachorro late: Au au!");
    }
    descreverCuidados() {
        console.log("Precisa de passeio diário.");
    }
    passear() {
        console.log(`${this.getNome()} está passeando.`);
    }
    imprimeInfo() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Tutor: ${this.getTutor()}`);
    }
}
exports.default = Cachorro;
//# sourceMappingURL=Cachorro.js.map