package br.com.alura.desafio04.modelos;

public class Compra {
    private String descricao;
    private double valorDaCompra;

    public Compra(String descricao, double valorDaCompra) {
        this.descricao = descricao;
        this.valorDaCompra = valorDaCompra;
    }

    public String getDescricao() {
        return descricao;
    }

    public double getValorDaCompra() {
        return valorDaCompra;
    }

    @Override
    public String toString() {
        return "Compra("+this.descricao+", "+this.valorDaCompra+")";
    }
}
