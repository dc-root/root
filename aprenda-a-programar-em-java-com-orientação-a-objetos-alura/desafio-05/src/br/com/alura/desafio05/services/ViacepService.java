package br.com.alura.desafio05.services;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ViacepService {
    public static HttpResponse<String> getAddressByCEP(String cep) throws IOException, InterruptedException {
        String endpoint = String.format("https://viacep.com.br/ws/%s", cep);

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(endpoint))
                .build();
        return client.send(request, HttpResponse.BodyHandlers.ofString());
    }

    public static HttpResponse<String> getListAddress(String uf, String city, String street) throws IOException, InterruptedException {
        if(!uf.matches("[A-Za-z]{2,3}")) throw new IOException("O formato do campo estado não foi reconhecido!");

        String endpoint = String.format("https://viacep.com.br/ws/%s/%s/%s/json", uf, formatCity(city), formatStreet(street));

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(endpoint))
                .build();
        return client.send(request, HttpResponse.BodyHandlers.ofString());
    }

    private static String formatCity(String city) {
        String formattedCity = capitalizeEachWord(city.toLowerCase());
        formattedCity = formattedCity.replace(" ", "%20");

        System.out.println(formattedCity);

        return formattedCity;
    }
    public static String formatStreet(String street) {
        String formattedStreet = capitalizeEachWord(street.toLowerCase());
        formattedStreet = formattedStreet.replace(" ", "+");

        System.out.println(formattedStreet);

        return formattedStreet;
    }
    private static String capitalizeEachWord(String input) {
        StringBuilder result = new StringBuilder();
        boolean capitalizeNext = true;

        for (char ch : input.toCharArray()) {
            if (Character.isWhitespace(ch)) {
                capitalizeNext = true;
            } else if (capitalizeNext) {
                result.append(Character.toTitleCase(ch));
                capitalizeNext = false;
            } else {
                result.append(ch);
            }
        }

        System.out.println(result.toString());

        return result.toString();
    }
}
