#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

#if defined(_WIN32) || defined(_WIN64) // In windows
#include <windows.h>
  void limparTela() {
    system("cls");
  }

  int tempo(int t) {
    Sleep(t*1000); // passar segundos a t
  }
#else // In linux
#include <unistd.h>
  void limparTela() {
    system("clear");
  }

  int tempo(int t) {
    sleep(t); // passar segundos a t
  }
#endif

// remover buffer
void flush_in() {
    char ch;
    while ((ch = getchar()) != '\n' && ch != EOF);
}

void progessBar() {
    unsigned short ntSleepTmp;
    unsigned short shPercent=0;
    unsigned short i=0;

    printf("\n\n");
    while(shPercent < 100) {
      while(ntSleepTmp += 7) printf("\r\r");
      shPercent += 5;
      for(i = 0; i < shPercent/2; i++ ) printf("🛫");
      printf(" %d%%", shPercent);
    }
}

// MENSAGEM DE ERRO
void InvalidValue(bool expression) {
    if (expression == true) {
      limparTela();
      printf("\n\t⚠ VALOR INVALIDO!! ⚠\n");
    }
    tempo(2);
    limparTela();
}


// QUANTIDADE DE DIAS
int dias_mes[2][13] = { {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31},
                        {0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31} };

int bissexto(int ano) {
	return (ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0));
}

unsigned long quantidadeDeDias(Data inicio, Data fim) {
	unsigned long idias, fdias;	/* guarda qtos dias tem da data */ /* ate o comeco do ano */
	unsigned long def_anos = 0;	/* guarda diferenca entre anos das */ /* datas inicio e fim medida em dias */
	register int i;
	int diaBissexto;

	idias = inicio.dia;
	diaBissexto = bissexto (inicio.ano);
	for (i = inicio.mes - 1; i > 0; --i)
		idias += dias_mes[diaBissexto][i];

	fdias = fim.dia;
	diaBissexto = bissexto (fim.ano);
	for (i = fim.mes - 1; i > 0; --i)
		fdias += dias_mes[diaBissexto][i];

	while (inicio.ano < fim.ano)
		def_anos += 365 + bissexto(inicio.ano++);

	return def_anos - idias + fdias;
}