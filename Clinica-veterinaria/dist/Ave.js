"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Ave extends Animal_1.default {
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    emitirSom() {
        console.log("A ave está cantando!");
    }
    descreverCuidados() {
        console.log("Precisa de uma gaiola adequada.");
    }
    cantar() {
        console.log(`${this.getNome()} está cantando.`);
    }
    imprimeInfo() {
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Tutor: ${this.getTutor()}`);
    }
}
exports.default = Ave;
//# sourceMappingURL=Ave.js.map