package br.com.alura.desafio05.modelos;

public record AddressRepresentation(
        String cep, String logradouro, String complemento,
        String bairro, String localidade, String uf,
        String ibge, String gia, String ddd, String siafi
) {
}
