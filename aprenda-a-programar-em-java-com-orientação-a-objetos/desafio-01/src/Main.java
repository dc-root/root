import java.util.Random;
import java.util.Scanner;

class Conta {
    public String nome = "Diego C. Silva";
    public String tipoConta = "Corrente";
    public double saldoAtual = 2050.0;

    public void receberValor(double valor) {
        saldoAtual += (double) valor;
        System.out.println("Saldo atualizado R$ "+saldoAtual);
    }

    public void transferirvalor(double valor) {
        if(valor > saldoAtual) {
            System.out.println("Não há saldo suficiente para fazer essa transferência.");
            return;
        }

        saldoAtual -= (double) valor;
        System.out.println("Saldo atualizado R$ "+saldoAtual);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        Conta contaDiego = new Conta();
        int option = 0;
        String menu = """
        
        Operações
        
        1- Consultar saldos
        2- Recber valor
        3 - Transferir valor
        4 - sair
        """;

        System.out.println(
            "***********************\n"+
            "Dados iniciais do cliente:\n\n"+
            "Nome: "+contaDiego.nome+"\n"+
            "Tipo conta: "+contaDiego.tipoConta+"\n"+
            "Saldo inicial: "+contaDiego.saldoAtual+"\n"+
            "***********************"
        );

        while(option != 4) {

            System.out.println(menu);
            System.out.print("Digite a opção desejada: ");
            option = leitor.nextInt();

            switch (option) {
                case 1:
                    System.out.println("O saldo da conta e de R$ "+contaDiego.saldoAtual);
                    break;
                case 2:
                    System.out.print("\nInforme o valor a receber: ");
                    contaDiego.receberValor(leitor.nextDouble());
                    break;
                case 3:
                    System.out.print("\nInforme o valor que deseja transferir: ");
                    contaDiego.transferirvalor(leitor.nextDouble());
                    break;
                case 4: break;
                default:
                    System.out.println("Opçao invalida!");
            }
        }
    }
}