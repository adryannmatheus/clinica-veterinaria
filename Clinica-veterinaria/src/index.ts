import Veterinario from "./Veterinario";1
import Recepcionista from "./Recepcionista";
import Consulta from "./Consulta";
import Gato from "./Gato";
import Cachorro from "./Cachorro";
import Ave from "./Ave";


const recepcionista = new Recepcionista("Julia",
    226,
    3500);

const veterinario = new Veterinario(
    "Dr. Paulo",
     498,
     6000);

const gato = new Gato(
    "Peixe",
     2,
    "Igor");

const cachorro = new Cachorro(
    "Thor",
     3, 
     "Leandro");

const ave = new Ave(
    "pimpolho",
     1,
    "Eurico");

const consulta = new Consulta(ave, veterinario, new Date("2023-04-10"));

veterinario.imprimeInfo();
recepcionista.imprimeInfo();
gato.imprimeInfo();
cachorro.imprimeInfo();
ave.imprimeInfo();
consulta.imprimeInfo();
recepcionista.confirmarAgendamento();
recepcionista.confirmarAgendamento();
recepcionista.confirmarAgendamento();
veterinario.calcularBonus();
recepcionista.calcularBonus();
veterinario.realizarConsulta();
veterinario.realizarConsulta();

