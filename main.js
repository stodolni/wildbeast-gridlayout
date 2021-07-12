/*SCROLL REVEAL mostrar elementos conforme dar scroll na pagina */

const scrollReveal = ScrollReveal({
  origin:'top',
  distance: '30px',
  durantion: 700,
  reset: true
})

scrollReveal.reveal(`
.content .titulo, .content .caracteristicas,
.content .col-wide, .content .imagem-1,
.content .destaque, .content .imagem-2,
.content p, .content .citacao,
.content .atributos, .content .informacoes,
.content img .col-wide
`, { interval: 40 })