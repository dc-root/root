package br.com.alura.desafio03.principal;

import br.com.alura.desafio03.models.MinhasPreferidas;
import br.com.alura.desafio03.models.Musica;
import br.com.alura.desafio03.models.Podcast;

public class Principal {
    public static void main(String[] args) {
        Musica minhaMusica = new Musica();

        minhaMusica.setTitulo("O Sono de Emily");
        minhaMusica.setCantor("K A M A I T A C H I");

        for (int i = 0; i < 1000; i++) {
            minhaMusica.reproduz();
        }

        for (int i = 0; i < 50; i++) {
            minhaMusica.curte();
        }

        Podcast meupodcast = new Podcast();

        meupodcast.setTitulo("Podpah");
        meupodcast.setApresentador("Igão");

        for (int i = 0; i < 5000; i++) {
            meupodcast.reproduz();
        }

        for (int i = 0; i < 1000; i++) {
            meupodcast.curte();
        }

        MinhasPreferidas minhasPreferidas = new MinhasPreferidas();
        minhasPreferidas.inclui(meupodcast);
        minhasPreferidas.inclui(minhaMusica);
    }
}
