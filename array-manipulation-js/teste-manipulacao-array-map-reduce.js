/// Manipulação de array com map, filter e reduce

// 1. Empresas criadas depois dos anos 2000.
// 2. O nome de cada empresa e de seu CEO.
// 3. O valor de todas as empresas somadas.

const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

console.log(empresas
    .filter((empresa) => empresa.anoDeCriacao > 2000)
);

console.log(empresas
    .map((emp) => ({[emp.nome]: emp.CEO}))
);


console.log(empresas
    .reduce((acumulate, emp) => {
        return (acumulate + emp.valorDeMercado)
    }, 0)
);

// JUNÇÃO
console.log(empresas
    .filter((emp) => emp.anoDeCriacao > 2000)
    .map((emp) => ({[emp.nome]: emp.CEO, "valor": emp.valorDeMercado}))
    .reduce((acumulate, emp) => {
        return (acumulate + emp.valor)
    }, 0)
)