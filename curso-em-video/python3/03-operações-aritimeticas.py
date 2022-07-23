n1 = int(input('Digite um numero: '))
n2 = int(input('Digite outro numero: '))

soma = n1 + n2
mult = n1 * n2
divisao = n1 / n2
divisaoInt = n1 // n2
ex = n1 ** n2

print('A soma: {}\nmultiplicaçao: {}\ndivisão: {:.3f}'.format(soma, mult, divisao), end=' ')
print('divisão inteiro {} e pontência {}'.format(divisaoInt, ex))