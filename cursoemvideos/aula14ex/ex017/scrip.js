function calcular(){
    var num = window.document.getElementById('tabu')
    var tab = window.document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Digite um numero!')
    } else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

    }
}