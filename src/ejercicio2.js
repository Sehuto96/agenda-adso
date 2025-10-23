const estudiante = {
    nombreCompleto: "Sebastián Torres",
    numeroFicha: "2567893"
};
const notas = [4.5, 3.8, 4.2];

const promedio = notas.reduce((acum, nota) => acum + nota, 0) / notas.length;
const estado = promedio >= 3.5 ? "Aprobado" : "No Aprobado ";

console.log("===== SISTEMA DE NOTAS SENA =====");
    console.log(`Aprendiz: ${estudiante.nombreCompleto}`);
    console.log(`Ficha: ${estudiante.numeroFicha}`);
    console.log("----------------------------------");
    console.log(`Notas registradas: ${notas.join(", ")}`);
    console.log(`Promedio final: ${promedio.toFixed(2)}`);
    console.log(`Estado: ${estado}`);
    console.log("==================================");