import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner getData = new Scanner(System.in);
        
        System.out.println("Precisaremos de alguns dados da conta!");
        
        System.out.print("Qual e o nome do cliente: ");
        String nomeCliente = getData.nextLine();

        System.out.print("Por favor, digite o número da conta: ");
        int numero = getData.nextInt();getData.nextLine();

        System.out.print("Agora o número da agência: ");
        String agencia = getData.nextLine();

        System.out.print("Por fim o saldo da conta: ");
        float saldo = getData.nextFloat();
        
        ContaTerminal conta = new ContaTerminal(
            numero,
            agencia,
            nomeCliente,
            saldo
        );

        System.out.println("Olá "+conta.getNomeCliente()+", obrigado por criar uma conta em nosso banco, sua agência é "+conta.getAgencia()+", conta "+conta.getNumero()+" e seu saldo "+conta.getSaldo()+" já está disponível para saque!");
    }
}
