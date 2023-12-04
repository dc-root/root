package br.com.alura.desafio05.modelos;

public class Address {
    private int cep;
    private String logradouro;
    private String complemento;
    private String bairro;
    private String localidade;
    private String uf;
    private int ibge;
    private int gia;
    private int ddd;
    private int siafi;

    public Address(AddressRepresentation recEndereco) {
        this.cep = Integer.valueOf(recEndereco.cep().replace("-", ""));
        this.logradouro = recEndereco.logradouro();
        this.complemento = recEndereco.complemento();
        this.bairro = recEndereco.bairro();
        this.localidade = recEndereco.localidade();
        this.uf = recEndereco.uf();
        this.ibge = Integer.valueOf(recEndereco.ibge().equals("") ? "0" : recEndereco.ibge());
        this.gia = Integer.valueOf(recEndereco.gia().equals("") ? "0" : recEndereco.gia());
        this.ddd = Integer.valueOf(recEndereco.ddd().equals("") ? "0" : recEndereco.ddd());
        this.siafi = Integer.valueOf(recEndereco.siafi().equals("") ? "0" : recEndereco.siafi());
    }

    public int getCep() {
        return cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public String getComplemento() {
        return complemento;
    }

    public String getBairro() {
        return bairro;
    }

    public String getLocalidade() {
        return localidade;
    }

    public String getUf() {
        return uf;
    }

    public int getIbge() {
        return ibge;
    }

    public int getGia() {
        return gia;
    }

    public int getDdd() {
        return ddd;
    }

    public int getSiafi() {
        return siafi;
    }

    @Override
        public String toString() {
            return "Address{" +
                    "cep=" + cep +
                    ", logradouro='" + logradouro + '\'' +
                    ", complemento='" + complemento + '\'' +
                    ", bairro='" + bairro + '\'' +
                    ", localidade='" + localidade + '\'' +
                    ", uf='" + uf + '\'' +
                    ", ibge=" + ibge +
                    ", gia=" + gia +
                    ", ddd=" + ddd +
                    ", siafi=" + siafi +
                    '}';
    }
}
