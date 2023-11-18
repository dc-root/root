import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class App {
    public static void main(String[] args) throws Exception {
        String[] candidatos = { "FELIPE", "MARCIA", "JULIA", "PAULA", "AUGUSTO" };
        // selecaoCandidatos();
        imprimirSelecionados();
        for(String candidato : candidatos) {
            entrandoEmContato(candidato);
        }
    }

    static void entrandoEmContato(String candidato) {
        int tentativasRelizadas =1;
        boolean continuarTentando = true;
        boolean atendeu = false;
        do {
            atendeu = atender();
            continuarTentando = !atendeu;

            if(continuarTentando)
                tentativasRelizadas++;
            else
                System.out.println("CONTATO RELIZADO COM SUCESSO!");
        } while (continuarTentando && tentativasRelizadas < 3);

        if(atendeu)
            System.out.println("CONSEGUIU CONTATO COM "+candidato+ " NA "+tentativasRelizadas);
        else
            System.out.println("NÃO CONSEGUIMOS CONTATO COM "+candidato+ ", NUMERO MAXIMO DE TENTATIVAS ATIGIDAS");
    }

    static boolean atender() {
        return new Random().nextInt(3)==1;
    }

    static void imprimirSelecionados() {
        String[] candidatos = { "FELIPE", "MARCIA", "JULIA", "PAULA", "AUGUSTO" };

        System.out.println("Imprimindo a lista de candidados informando o indice do elemento");

        for(int indice=0; indice < candidatos.length;indice++) {
            System.out.println("O candidato de nº "+(indice+1)+" é "+candidatos[indice]);
        }

        System.out.println("Forma abreviado de iteração utilizando o for each");

        for(String candidato : candidatos) {
            System.out.println("O candidato selecionado foi "+candidato);
        }

    }

    public static void selecaoCandidatos() {
        String[] candidatos = { "FELIPE", "MARCIA", "JULIA", "PAULA", "AUGUSTO", "MONICA", "FABRICIO", "MIRELA", "DANIELA", "JORGE" };
        
        int selecionados=0;
        int atual=0;
        double salarioBase=2000.0;

        while(selecionados<5 && atual < candidatos.length) {
            String candidato = candidatos[atual++];
            double salarioPretendido = valorPretendido();

            System.out.println("O candidato "+candidato+" solicitou este valor de salário: R$ "+salarioPretendido);

            if(salarioBase >= salarioPretendido) {
                System.out.println("O candidato "+candidato+" foi selecionado para a vaga!");
                selecionados++;
            }
        }
    }

    static double valorPretendido() {
        return ThreadLocalRandom.current().nextDouble(1500, 2200);
    }

    static void analisarCandidato(double salarioPretendido) {
        double salarioBase = 2000.0;
        if(salarioBase > salarioPretendido) {
            System.out.println("LIGAR PARA CANDIDATO");
        } else if(salarioBase == salarioPretendido) {
            System.out.println("LIGAR PARA CANDIDATO COM CONTRA PROPOSTA");
        } else {
            System.out.println("AGUARDANDO RESULTADO DOS DEMAIS CANDIDATOS");
        }
    }
}
