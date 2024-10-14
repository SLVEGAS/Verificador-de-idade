function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value == '' || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os campos e tente novamente!')
    }else{ 
       var fsex = document.getElementsByName('rsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked ) {
           genero = 'Homem'
            if(idade > 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'foto-crianca-h.png')
            }else if (idade <= 30) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-h.png')
            }else if(idade <= 50 ) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-h.png')
            }else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-h.png')
      }
       }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade > 0 && idade < 15) {
                //Criança
                img.setAttribute('src', 'foto-crianca-m.png')
            }else if (idade <= 30) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade <= 50 ) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Declaramos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}