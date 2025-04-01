let num =[5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor e ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log('valor nao encontrado!')
} else{
    console.log(`O valor esta na posicao ${pos}`)
}
