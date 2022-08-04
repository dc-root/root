# Faça um algoritimo que leia o preço de um produto e mostre seu novo preço com 5% de desconto

prProduto = float(input('Digite o preço do produto(R$): '))
novoPreco = prProduto - (prProduto*0.05)

print('O produto que antes custava R${:.2f} com 5% de desconto agora custa {:.2f}'.format(prProduto, novoPreco))