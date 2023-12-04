package br.com.alura.desafio03.models;

public class MinhasPreferidas {

    public void inclui(Audio audio) {
        if(audio.getClassificacao() >= 8) {
            System.out.println(audio.getTitulo() + " é considerado sucesso absoluto e preferido de todos");
        } else {
            System.out.println(audio.getTitulo() + " também e um dos que todo mundo esta curtindo!");
        }
    }
}
