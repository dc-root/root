// Exercicio 01

var vetor = [[1, 2, 3], [4, 2, 10], [15, 5, 6, 7, 8], [20, 17, 13, 12, 11, 22], [201, 107, 130, 114, 121, 212]];

function forAninhado(vetor) {
   for(let i = 0; i <= vetor.length; i++){
      for(let v in vetor[i]){
      
         if((vetor[i][v] % 2) == 0) {
            document.querySelector("#result").innerHTML += vetor[i][v]+'</br>';
         }
      }
   }
}

forAninhado(vetor);

document.querySelector("#Exercice1").value =
`// Esse exercicio retornara todos os numeros pares dos vetores dentro de um vetor

var vetor = [[1, 2, 3], [4, 2, 10], [15, 5, 6, 7, 8], [20, 17, 13, 12, 11, 22], [201, 107, 130, 114, 121, 212]];

function forAninhado(vetor) {
   for(let i = 0; i <= vetor.length; i++){
      for(let v in vetor[i]){
      
         if((vetor[i][v] % 2) == 0) {
            document.querySelector("#result").innerHTML += vetor[i][v]+'</br>';
         }
      }
   }
}

forAninhado(vetor);
`;
