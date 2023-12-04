import br.com.alura.desafio04.modelos.Cartao;
import br.com.alura.desafio04.modelos.Compra;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        int option = 0;
        boolean compraRealizada = false;

        System.out.print("Digite o limite do cartão: ");
        double limiteDoCartao = leitor.nextDouble();

        var cartaoDeCredito = new Cartao(limiteDoCartao);

        do {
            System.out.print("Digite a descrição da compra: ");
            leitor.nextLine();
            String descricaoDaNovaCompra = leitor.nextLine();

            System.out.print("Digite o valor da compra: ");
            double valorDaNovaCompra = leitor.nextDouble();

            compraRealizada = cartaoDeCredito.realizarCompra(new Compra(
                descricaoDaNovaCompra,
                valorDaNovaCompra
            ));

            if(!compraRealizada) break;

            System.out.println("Digite 0 para sair ou 1 para continuar");
            option = leitor.nextInt();

        } while(option != 0);

        cartaoDeCredito.listarCompras();
    }
}