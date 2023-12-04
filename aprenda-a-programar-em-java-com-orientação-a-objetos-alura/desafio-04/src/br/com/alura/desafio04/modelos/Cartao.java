package br.com.alura.desafio04.modelos;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Cartao {
    private double limite;
    private List<Compra> compras;

    public Cartao(double limite) {
        this.limite = limite;
        this.compras = new ArrayList<>();
    }

    public double getLimite() {
        return limite;
    }

    private void debitar(double valor) {
        this.limite -= valor;
    }

    public boolean realizarCompra(Compra compra) {
        if(compra.getValorDaCompra() > this.limite) {
            System.out.println("Saldo insuficiente!\n");
            return false;
        }

        this.debitar(compra.getValorDaCompra());
        this.compras.add(compra);

        System.out.println("Compra realizada!\n");
        return true;
    }

    public void listarCompras() {
        System.out.println("COMPRAS REALIZADS\n");

        compras.sort(Comparator.comparing(Compra::getValorDaCompra));
        compras.forEach((compra) -> System.out.println(compra.getDescricao()+" | R$ "+compra.getValorDaCompra()));
    }
}
