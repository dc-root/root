# Escreva um programa que converta uma temperatura digitada em °C e converta para °F

grauCelcils = float(input("Digite a temperatura em grau Celcius(°C): "))
grauFahrenheit = ((9 * grauCelcils) / 5) + 32

print("A temperatura de {}°C e igual a {}°F".format(grauCelcils, grauFahrenheit))
