function calculate() {
    var start = document.getElementById('txtst')
    var end = document.getElementById('txten')
    var step = document.getElementById('txtsp')
    var res = document.getElementById('result')
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        window.alert('Error')
    } else {
        res.innerHTML = 'Calculated: '
        var s = Number(start.value)
        var e = Number(end.value)
        var sp = Number(step.value)
    if (s < e) {
        // contagem crescente
        for (var c = s; c <= e; c += sp ) {
            res.innerHTML += `${c} `
        }
    }
    else {
        // contagem regressiva
        for (c = s; c >= e; c -= sp) {
            res.innerHTML += `${c} `
        }
    }
    }
}