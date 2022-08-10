
# Desafio da semana #7

```js
/*
Crie um array com 5 items (tipos variados).
*/
let MyArray = [
    "Diego Silva",
    20,
    { 
        rua: "Rua Comendador Rui Jordão", 
        numero: 418, 
        bairro: "Vila Mariana", 
        cidade: "paracatu", 
        estado: "MG"
    }, 
    function() { 
        return `${this[2].rua}, `+ 
               `${this[2].numero}, `+
               `${this[2].bairro}, `+
               `${this[2].cidade} - `+
               `${this[2].estado}`;
    },
    function() {
        return `Ola me chamo ${this[0]} tenho ${this[1]} anos`;
    }
]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function additem(Item) {
    MyArray.push(Item);
    return MyArray;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(additem([
    "Skate",
    "Games",
    "Technologia",
    "Filmes, Animes e Series",
    "Viajar"
]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é '${MyArray[5][1]}'`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${MyArray.lenght} itens`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${MyArray[5].length} itens`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
let iterator=10;
while (iterator >= 10 && iterator <= 20) {
    if(iterator % 2 == 0) {
        console.log(iterator);
    }

    iterator++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
let iterator=10;
while (iterator >= 10 && iterator < 20) {
    if(iterator % 2 != 0) {
        console.log(iterator);
    }

    iterator++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (let iterator=100; iterator>=100 && iterator<120; iterator++) {
    if(iterator % 2 != 0) {
        console.log(iterator);
    }
}

console.log( 'Números ímpares entre 111 e 125:' );
for (let iterator=111;iterator>=111 && iterator<125; iterator++) {
    if(iterator % 2 != 0) {
        console.log(iterator);
    }
}

```