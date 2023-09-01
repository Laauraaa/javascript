function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique se os dados estão corretos.')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'image/m-child.png')
        } else if (idade >= 10 && idade < 25) {
            //jovem
            img.setAttribute('src', 'image/m-young.png')
        } else if (idade >=25 && idade < 50){
            //adulto
            img.setAttribute('src', 'image/m-adult.png')
        } else {
            //idoso
            img.setAttribute('src', 'image/m-old.png')
        }

       } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'image/.png')
        } else if (idade >= 10 && idade < 25) {
            //jovem
            img.setAttribute('src', 'image/.png')
        } else if (idade >=25 && idade < 50){
            //adulto
            img.setAttribute('src', 'image/.png')
        } else {
            //idoso
            img.setAttribute('src', 'image/.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `${genero} com ${idade} anos`
       res.appendChild(img )
    }
}