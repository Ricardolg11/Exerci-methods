// Metodos de array :  Map() pecorre o array
   
// array principal
 const array = [ 1, 2, 3, 4 ,5];
/* 
    normal 
for(const i of array) {
    document.body.innerText += i;
}

    basico 
array.forEach(element => {
    document.body.innerText += element
});
*/

// Metodos de array :  Map()  

// retornando novo array multiplicado por 2, novo array criado do mesmo tamanho
const novoarray = array.map(item => {   
        return item * 2;
})

const novoarray2 = array.map(item => {   
    if(item % 2 == 0) {    //  resto item / 2
        return item * 10;
    }
    return item;
})

    document.body.innerHTML = JSON.stringify(novoarray);

    document.body.innerHTML = JSON.stringify(novoarray2);
/* Metodos de array :  filter()

const farray = [ 1, 2, 3, 4 ,5];

const fnovoArray = farray.filter(item => item % 2 == 0) // .filter() filtrando apenas os pares
.map(item => item + 10) // .map() pecorendo o array cada item + 10
 

document.body.innerText = JSON.stringify(fnovoArray);

*/

// Metodos de array :  every() retona um valor boleano, apos verificar itens dada uma condiçao

// const array = [ 1, 2, 3, 4 ,5, "ds"];

const todosistenssaonumeros = array.every(item =>{ return typeof item == 'number'}); // retorna tru se tipo dos valores de item for iqual a number 

document.body.innerText = JSON.stringify(todosistenssaonumeros);


/* Metodos de array :  some() 

const pelomenosumutemnaoeumnumero = Array.some(item => typeof item == 'number');
*/

 // Metodos de array :  find() / findindex() 



const par = array.find(item => item % 2 == 0); //pegando o primeiro par
document.body.innerText = JSON.stringify(par);

const imparposicao = array.findIndex(item => item % 2 !== 0); //pegando a posicao do primeiro impar
document.body.innerText = JSON.stringify(imparposicao); 


// Metodos de array : reduce() normalmente usa para cria algo novo

    //  acc(objeto que to criando)  item(contem cada informaçao do array)                 
    const soma = array.reduce((acc, item)=> {
        document.body.innerText += acc + ',' + item + ' ------ '

        return acc + item;
    }, 0) // "0" inicia a soma ex objeto inicia com {}

    document.body.innerText = JSON.stringify(par);
