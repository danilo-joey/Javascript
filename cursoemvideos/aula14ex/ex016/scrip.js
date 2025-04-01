function verificar(){
    var ini = window.document.getElementById('txt1')
    var fim = window.document.getElementById('txt2')
    var pas = window.document.getElementById('txt3')
    var res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){window.alert('[ERRO]Dados incompletos!')
    } else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if(p <= 0){
            window.alert('passo invalido!')
            p=1
        }
    
        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} `
        }
    }

    



}