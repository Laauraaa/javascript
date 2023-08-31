function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 13){
        img.src = 'image/morning.png'
        document.body.style.background = '#F29F05'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'image/afternoon.png'
        document.body.style.background = '#D9A25F'
    } else {
        img.src = 'image/night.png'
        document.body.style.background = '#032340'
    }
}