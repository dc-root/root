// # Desafio da semana #11

// ```js
(function() {
/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
let arrayStr = [2, 'Banana', 4, 'Maça', 1, 'Melancia'];
console.log( 'O array em formato de string é:' );
console.log(arrayStr.toString()); // '2,Banana,4,Maça,1,Melancia'

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
let sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
let sudeste = ['Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo'];

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
let brasil = sul.concat(sudeste);

console.log( '\nAlguns Estados do Brasil:' );
console.log(brasil);

// ['Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo']

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );
brasil.unshift('Amazonas', 'Pará', 'Acre'); 
console.log(brasil);

// ['Amazonas', 'Pará', 'Acre', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo']

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );
brasil.shift();
console.log(brasil);

// ['Pará', 'Acre', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo']

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul, pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
let newSul = brasil.slice(2, 5);

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log('\nEstados do Sul do Brasil:');
console.log(newSul);

// [ 'Paraná', 'Santa Catarina', 'Rio Grande do Sul' ]

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
console.log(brasil);

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
let nordeste = ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
console.log(nordeste);

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
let newSudeste = brasil.splice(0, (brasil.slice(5, 9)).length);

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
brasil = brasil.concat(nordeste);

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
console.log(newSudeste);
// [ 'Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo' ]

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
console.log(brasil);
// [ 'Pará', 'Acre', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe']

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
let newBrasil = [];
brasil.forEach((state) => {
    newBrasil.push({ id: brasil.indexOf(state), estado: state });
});

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
console.log(newBrasil);
// [
//   { id: 0, estado: 'Pará' },
//   { id: 1, estado: 'Acre' },
//   { id: 2, estado: 'Paraná' },
//   { id: 3, estado: 'Santa Catarina' },
//   { id: 4, estado: 'Rio Grande do Sul' },
//   { id: 5, estado: 'Alagoas' },
//   { id: 6, estado: 'Bahia' },
//   { id: 7, estado: 'Ceará' },
//   { id: 8, estado: 'Maranhão' },
//   { id: 9, estado: 'Paraíba' },
//   { id: 10, estado: 'Pernambuco' },
//   { id: 11, estado: 'Piauí' },
//   { id: 12, estado: 'Rio Grande do Norte' },
// ]

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );

brasil.forEach((state) => {
    if(state.split(' ').join('').length < 7) {
        
    }
});


/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
})();
// ```