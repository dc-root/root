typedef struct data {
  int dia;
  int mes;
  int ano;
} Data;

typedef struct hora {
  int horas;
  int minutos;
  int segundos;
} Hora;

typedef struct reserva {
  char nomePassageiro[50];
  int CPF;
  Data dataCompra;
} Reserva;

typedef struct registroDeVoo {
  int numeroVoo;
  char cidadeOrigem[50];
  char cidadeDestino[50];
  Data dataDaViagem;
  Hora horaDaViagem;
  float valorDaPassagem;
  Reserva passageiro[180];
} RegistroDeVoo;

RegistroDeVoo Voo[5];