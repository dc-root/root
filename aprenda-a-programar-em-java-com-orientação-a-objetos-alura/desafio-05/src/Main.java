import br.com.alura.desafio05.modelos.Address;
import br.com.alura.desafio05.modelos.AddressRepresentation;
import br.com.alura.desafio05.services.ViacepService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

import java.io.FileWriter;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner writer = new Scanner(System.in);
        Gson gson = new GsonBuilder()
                .setPrettyPrinting()
                .create();
        int option = 0;
        String optionSelected = "";
        Address dadosEndereco = null;
        List<Address> dadoListaEndereco = new ArrayList<>();

        try {
            do {
                System.out.println("##########################");
                System.out.println("1. Procurar CEP\n2. Procurar endereço\n0. Sair");
                System.out.println("##########################");

                System.out.print("\nEscolha uma opção: ");

                option = writer.nextInt();
                writer.nextLine();

                switch (option) {
                    case 1:
                        System.out.print("\nInsira o estado (ex.: SP): ");
                        String estado = writer.nextLine();

                        System.out.print("Insira o cidade (ex.: Brasilia): ");
                        String cidade = writer.nextLine();

                        System.out.print("Insira o logradouro (ex.: Rua, Avenida, Trav.): ");
                        String logradouro = writer.nextLine();

                        Type listaEnderecosType = new TypeToken<List<AddressRepresentation>>(){}.getType();
                        List<AddressRepresentation> listaDeEnderecos = gson.fromJson(
                            ViacepService.getListAddress(estado, cidade, logradouro).body(),
                            listaEnderecosType
                        );

                        for(AddressRepresentation endereco : listaDeEnderecos) {
                            dadoListaEndereco.add(new Address(endereco));
                        }

                        System.out.println(dadoListaEndereco);

                        optionSelected = "cep";
                        break;
                    case 2:
                        System.out.print("\nInsira o CEP (ex.: 99999999): ");
                        String numeroCEP = writer.nextLine();

                        AddressRepresentation endereco = gson.fromJson(
                            ViacepService.getAddressByCEP(numeroCEP).body(),
                            AddressRepresentation.class
                        );

                        dadosEndereco = new Address(endereco);

                        System.out.println(dadosEndereco);
                        optionSelected = "endereço";
                        break;
                    case 0: break;
                    default: System.out.println("Opção invalida!");
                }
            } while (option != 0);

            FileWriter escrita = new FileWriter("enderecos.json");
            if(optionSelected.equals("cep")) escrita.write(gson.toJson(dadoListaEndereco));
            if(optionSelected.equals("endereço")) escrita.write(gson.toJson(dadosEndereco));
            escrita.close();
        } catch (Exception e) {
            System.out.println("Houve algum erro!");
            System.out.println(e.getMessage());
        }

        System.out.println("Programa Finalizado!");
    }
}