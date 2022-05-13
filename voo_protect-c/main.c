#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

// Files
#include "main.h"
#include "./tratativa.c"
#include "./menu.c"

#define N_AVIAO 5

int main() {
  for (int i = 0; i < N_AVIAO; i++) { // 5
    printf("Registrar numero de voo para o %dº avião: ", i + 1);
    scanf("%d%*c", &Voo[i].numeroVoo);

    printf("Origem do voo: ");
    gets(Voo[i].cidadeOrigem);

    printf("Destino: ");
    gets(Voo[i].cidadeDestino);

    printf("Data da viagem[dd/mm/aaaa]: ");
    scanf("%d/%d/%d", &Voo[i].dataDaViagem.dia, &Voo[i].dataDaViagem.mes, &Voo[i].dataDaViagem.ano);

    printf("Horario da viagem[hh:mm]: ");
    scanf("%d:%d", &Voo[i].horaDaViagem.horas, &Voo[i].horaDaViagem.minutos);

    printf("Valor da passagem: ");
    scanf("%f%*c", &Voo[i].valorDaPassagem);

    progessBar();
    printf("\n\nREGISTRADO COM SUCESSO!!\n\n");

    limparTela();
  }
  
  menu(); // 4 

  return 0;
}