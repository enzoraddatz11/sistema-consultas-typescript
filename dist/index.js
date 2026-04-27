"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Especialidades
const cardiologia = {
    id: 1,
    nome: "Cardiologia",
};
const ortopedia = {
    id: 2,
    nome: "Ortopedia",
    descricao: "Tratamento de ossos e articulações",
};
const pediatria = {
    id: 3,
    nome: "Pediatria",
};
// Médicos
const medico1 = {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "CRM12345",
    especialidade: cardiologia,
    ativo: true,
};
const medico2 = {
    id: 2,
    nome: "Dra. Ana Paula Costa",
    crm: "CRM54321",
    especialidade: ortopedia,
    ativo: true,
};
const medico3 = {
    id: 3,
    nome: "Dr. João Mendes",
    crm: "CRM98765",
    especialidade: pediatria,
    ativo: true,
};
// Pacientes
const paciente1 = {
    id: 1,
    nome: "Carlos Andrade",
    cpf: "123.456.789-00",
    email: "carlos@email.com",
};
const paciente2 = {
    id: 2,
    nome: "Maria Silva",
    cpf: "987.654.321-00",
    email: "maria@email.com",
    telefone: "(11) 98765-4321",
};
const paciente3 = {
    id: 3,
    nome: "Pedro Santos",
    cpf: "456.789.123-00",
    email: "pedro@email.com",
};
//Criar Consulta
function criarConsulta(id, medico, paciente, data, valor) {
    return {
        id,
        medico,
        paciente,
        data,
        valor,
        status: "agendada",
    };
}
//Confirmar Consulta
function confirmarConsulta(consulta) {
    return Object.assign(Object.assign({}, consulta), { status: "confirmada" });
}
//Cancelar Consulta
function cancelarConsulta(consulta) {
    if (consulta.status === "realizada") {
        return null;
    }
    return Object.assign(Object.assign({}, consulta), { status: "cancelada" });
}
//Exibir Consulta
function exibirConsulta(consulta) {
    const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return `
Consulta #${consulta.id}
Médico: ${consulta.medico.nome}
Paciente: ${consulta.paciente.nome}
Especialidade: ${consulta.medico.especialidade.nome}
Data: ${consulta.data.toLocaleDateString("pt-BR")}
Valor: ${valorFormatado}
Status: ${consulta.status}
`;
}
//Execução Inicial
const consulta1 = criarConsulta(1, medico1, paciente1, new Date(), 350);
const consultaConfirmada = confirmarConsulta(consulta1);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada));
function listarConsultasPorStatus(consultas, status) {
    return consultas.filter((consulta) => consulta.status === status);
}
function listarConsultasFuturas(consultas) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return consultas.filter((consulta) => consulta.data >= hoje);
}
const consultas = [];
consultas.push(consultaConfirmada);
console.log("\n=== CONSULTAS CONFIRMADAS ===");
console.log(listarConsultasPorStatus(consultas, "confirmada"));
console.log("\n=== CONSULTAS FUTURAS ===");
console.log(listarConsultasFuturas(consultas));
//Status
function alterarStatusConsulta(consulta, novoStatus) {
    return Object.assign(Object.assign({}, consulta), { status: novoStatus });
}
//Mais Consultas
const consulta2 = criarConsulta(2, medico2, paciente2, new Date("2026-05-10"), 500);
const consulta3 = criarConsulta(3, medico3, paciente3, new Date("2026-06-01"), 300);
const consulta4 = criarConsulta(4, medico1, paciente2, new Date("2026-04-20"), 450);
const consulta5 = criarConsulta(5, medico2, paciente1, new Date("2026-03-15"), 250);
//Alterar Status
const c1 = alterarStatusConsulta(consulta1, "confirmada");
const c2 = alterarStatusConsulta(consulta2, "realizada");
const c3 = alterarStatusConsulta(consulta3, "cancelada");
const c4 = alterarStatusConsulta(consulta4, "realizada");
const c5 = alterarStatusConsulta(consulta5, "confirmada");
//Faturamento
function calcularFaturamento(consultas) {
    return consultas
        .filter((consulta) => consulta.status === "realizada")
        .reduce((total, consulta) => total + consulta.valor, 0);
}
console.log("\n=== FATURAMENTO ===");
console.log(calcularFaturamento(consultas));
