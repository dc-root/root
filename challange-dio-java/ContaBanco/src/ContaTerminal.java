public class ContaTerminal {
  private int numero;
  private String agencia;
  private String nomeCliente;
  private float saldo;

  public ContaTerminal(int numero, String agencia, String nomeCliente, float saldo) {
    this.numero = numero;
    this.agencia = agencia;
    this.nomeCliente = nomeCliente;
    this.saldo = saldo;
  }

  public void setAgencia(String agencia) {
    this.agencia = agencia;
  }
  public String getAgencia() {
    return agencia;
  }

  public void setNomeCliente(String nomeCliente) {
    this.nomeCliente = nomeCliente;
  }
  public String getNomeCliente() {
    return nomeCliente;
  }

  public void setNumero(int numero) {
    this.numero = numero;
  }
  public int getNumero() {
    return numero;
  }

  public void setSaldo(float saldo) {
    this.saldo = saldo;
  }
  public float getSaldo() {
    return saldo;
  }
}