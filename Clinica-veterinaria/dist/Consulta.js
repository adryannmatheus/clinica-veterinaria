"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Consulta {
    animal;
    veterinario;
    data;
    constructor(animal, veterinario, data) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }
    getAnimal() {
        return this.animal;
    }
    setAnimal(animal) {
        this.animal = animal;
    }
    getVeterinario() {
        return this.veterinario;
    }
    setVeterinario(veterinario) {
        this.veterinario = veterinario;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    imprimeInfo() {
        console.log(`Animal: ${this.getAnimal().getNome()}`);
        console.log(`Veterinário: ${this.getVeterinario().getNome()}`);
        console.log(`Data: ${this.getData().toLocaleDateString()}`);
    }
}
exports.default = Consulta;
//# sourceMappingURL=Consulta.js.map