package br.com.alura.desafio05.services;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Arrays;
import java.util.stream.Collectors;

public class ViacepService {
    public static HttpResponse<String> getAddressByCEP(String cepInput) throws IOException, InterruptedException {
        String cep = cepInput.replaceAll("-", "");
        if (!cep.matches("\\d{8,}")) throw new IllegalArgumentException("CEP deve ter pelo menos 8 digitos");

        String endpoint = String.format("https://viacep.com.br/ws/%s/json", cep);

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(endpoint))
                .build();
        return client.send(request, HttpResponse.BodyHandlers.ofString());
    }

    public static HttpResponse<String> getListAddress(String uf, String city, String street) throws IOException, InterruptedException {
        if(!uf.matches("[A-Za-z]{2,3}")) throw new IOException("O formato do campo estado não foi reconhecido!");

        String endpoint = "https://viacep.com.br/ws/"+uf+"/"+formatCity(city)+"/"+formatStreet(street)+"/json";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(endpoint))
                .build();
        return client.send(request, HttpResponse.BodyHandlers.ofString());
    }

    private static String formatCity(String city) {
        return Arrays.stream(city.split("\\s+"))
                .map(word -> capitalizeFirstLetter(word.toLowerCase()))
                .collect(Collectors.joining("%20"));
    }
    public static String formatStreet(String street) {
        return Arrays.stream(street.split("\\s+"))
                .map(word -> capitalizeFirstLetter(word.toLowerCase()))
                .collect(Collectors.joining("+"));
    }

    private static String capitalizeFirstLetter(String word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    }
}
