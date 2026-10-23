// Configuração do Drumrec. Pode editar no Bloco de Notas.
// Cole entre as aspas o endereço da sua ponte do MVSEP (Cloudflare Worker),
// por exemplo: "https://drumrec-ponte.seu-nome.workers.dev"
window.DRUMREC_CONFIG = Object.assign(window.DRUMREC_CONFIG || {}, {
  mvsepProxy: "https://drumrec-ponte.derleidesigner.workers.dev",
  hosted: true
});
