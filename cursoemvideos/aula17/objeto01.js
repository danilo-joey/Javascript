let amigo = {nome: 'jose',
 sexo: 'm', 
 peso: 85.2, 
 engordar(p=0){
    console.log('Engordou!')
    this.peso += p

 }}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)