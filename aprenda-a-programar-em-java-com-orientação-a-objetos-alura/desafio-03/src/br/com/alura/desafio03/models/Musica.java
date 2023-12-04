package br.com.alura.desafio03.models;

public class Musica extends Audio {
    private String audio;
    private String cantor;
    private String genero;

    public String getAudio() {
        return audio;
    }

    public void setAudio(String audio) {
        this.audio = audio;
    }

    public String getCantor() {
        return cantor;
    }

    public void setCantor(String cantor) {
        this.cantor = cantor;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    @Override
    public int getClassificacao() {
        if(this.getTotalReproducoes() > 2000) {
            return 10;
        } else {
            return 7;
        }
    }
}
