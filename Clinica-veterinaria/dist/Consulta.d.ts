import Animal from "./Animal";
import Veterinario from "./Veterinario";
export default class Consulta {
    private animal;
    private veterinario;
    private data;
    constructor(animal: Animal, veterinario: Veterinario, data: Date);
    getAnimal(): Animal;
    setAnimal(animal: Animal): void;
    getVeterinario(): Veterinario;
    setVeterinario(veterinario: Veterinario): void;
    getData(): Date;
    setData(data: Date): void;
    imprimeInfo(): void;
}
//# sourceMappingURL=Consulta.d.ts.map