#include <stdlib.h>
#include <string.h>
#include <time.h>

#define cmp n_voo != Voo[0].numeroVoo && n_voo != Voo[1].numeroVoo && n_voo != Voo[2].numeroVoo && n_voo != Voo[3].numeroVoo && n_voo != Voo[4].numeroVoo


void menuEfetuarReserva() {
    int n_voo, v;
    int n_poltrona, p;

    do {
        for (v=0; v<5; v++) {
            printf("💺  %d\n", Voo[v].numeroVoo);
        }
        printf("\n\nDigite o numero de voo: ");
        scanf("%d%*c", &n_voo);

        limparTela();

        if (cmp) {
            InvalidValue(cmp);
        }
    } while (cmp);

    do {
      printf("\n\n");
      for(p=0; p<180; p++){
          if(!Voo[n_voo].passageiro[p].CPF) {
            printf("[%d]\t", p);
          }
      }
      printf("\nNumero da poltrona: ");
      scanf("%d%*c", &n_poltrona); // 180 // Número da poltrona

      if (Voo[n_voo].passageiro[n_poltrona].CPF) {
          InvalidValue(Voo[n_voo].passageiro[n_poltrona].CPF);
          printf("\n\t⚠ VOO LOTADO ⚠");
      }
    } while (Voo[n_voo].passageiro[n_poltrona].CPF);

    printf("Nome: ");
    gets(Voo[n_voo].passageiro[n_poltrona].nomePassageiro); // Nome

    printf("CPF: ");
    scanf("%d%*c", &Voo[n_voo].passageiro[n_poltrona].CPF); // CPF do passageiro

    // Data da compra da passagem
    time_t mytime;
    mytime = time(NULL);
    struct tm tm = *localtime(&mytime);

    Voo[n_voo].passageiro[n_poltrona].dataCompra.dia = tm.tm_mday;
    Voo[n_voo].passageiro[n_poltrona].dataCompra.mes = tm.tm_mon + 1;
    Voo[n_voo].passageiro[n_poltrona].dataCompra.ano = tm.tm_year + 1900;

    int quantDias = quantidadeDeDias(Voo[n_voo].dataDaViagem , Voo[n_voo].passageiro[n_poltrona].dataCompra);
    if (quantDias > 30) {
      Voo[n_voo].valorDaPassagem -= Voo[n_voo].valorDaPassagem * (5/100);
    }

    progessBar();
    limparTela();
    printf("\n\n");

    printf("\tnome: %s\n", Voo[n_voo].passageiro[n_poltrona].nomePassageiro);
    printf("\tCPF: %d\n", Voo[n_voo].passageiro[n_poltrona].CPF);
    printf("\tOrigem: %s\n", Voo[n_voo].cidadeOrigem);
    printf("\tDestino: %s\n", Voo[n_voo].cidadeDestino);
    printf("\tNúmero da poltrona: %d\n", n_poltrona);
    printf("\tData da compra da passagem: %02d/%02d/%04d\n", tm.tm_mday, tm.tm_mon, tm.tm_year);
    printf("\tValor da passagem: R$%.2f\n", Voo[n_voo].valorDaPassagem);
    tempo(5);
}

// void menuConsultar() {
//     int option;
//     printf("1️⃣  Por número de voo\n");
//     printf("2️⃣  Por origem\n");
//     printf("3️⃣  Por destino\n\n");
//     printf("Digite uma das Opções acima(1-3): ");
//     scanf("%d", &option);
// }

void menu() {
  int cmpConsultar;
  int cmpReservar;
  int cmpSair;

  limparTela();

  for (int i=0; i<180; i++) {
    do {
      char option[30];
      printf("🧳 Consultar\n");
      printf("🧳 Efetuar Reserva\n");
      printf("🧳 Sair\n\n");
      printf("Digite uma das Opções acima: ");
      gets(option);

      // Tratativa | transformar o valor digitado em maiúscula
      for (int i = 0; option[i] != '\0'; i++) {
        if (option[i] >= 'a' && option[i] <= 'z') {
          //  option[i] = option[i] - 32; // Também e uma opção
          option[i] = toupper(option[i]);
        }
      }

      // Consultar
      cmpConsultar = strcmp(option, "CONSULTAR");
      if (cmpConsultar == 0) {
        limparTela();
        // menuConsultar();
      }

      // Efetura reserva
      cmpReservar = strcmp(option, "EFETUAR RESERVA");
      if (cmpReservar == 0) {
          limparTela();
          menuEfetuarReserva();
      }

      // Sair
      cmpSair = strcmp(option, "SAIR");
      if (cmpSair == 0) {
        exit(0);
      }

      InvalidValue(cmpConsultar != 0 && cmpReservar != 0 && cmpSair != 0);

    } while (cmpConsultar != 0 && cmpReservar != 0 && cmpSair != 0);
  }
}