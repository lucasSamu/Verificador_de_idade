 function verificar() {
     var data = new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.getElementById('res')
     if (fano.value.length == 0 || fano.value >= ano) {
         window.alert('[ERRO!] Verifique os dados e tente novamente.')
     } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var genero = ''
         var img = document.createElement('img') // Criar um elemento IMG(imagem) por JavaScript
         img.setAttribute('id', 'foto') // Depois pode colocar um atributo ID como = FOTO
         if (fsex[0].checked) { // Se a bolinha do Homem (checked) tiver selecionada, sera executado o if (fsex[0].checked), onde tem as outras ações dentro
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
               // Criança
               img.setAttribute('src', 'images/crianca-m.png')
            } else if (idade < 21) {
               // Jovem
               img.setAttribute('src', 'images/jovem-m.png')
            } else if (idade < 50) {
               // Adulto
               img.setAttribute('src', 'images/adulto-m.png')
            } else {
               // Idoso
               img.setAttribute('src', 'images/idoso-m.png')
            }
         } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
               // Criança
               img.setAttribute('src', 'images/crianca-f.png')
            } else if (idade < 21) {
               // Jovem
               img.setAttribute('src', 'images/jovem-f.png')
            } else if (idade < 50) {
               // Adulto
               img.setAttribute('src', 'images/adulto-f.png')
            } else {
               // Idoso
               img.setAttribute('src', 'images/idoso-f.png')
            }
         }
         res.style.textAlign = 'center' // Quando a function verificar() for ativa o 'res' mudara a sua alinhação para center(centro)
         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
         res.appendChild(img) //  A div que fica em baixo chamado 'res', quando ela for executada, tera como função em mostrar a foto que foi escolhida
      }
 }