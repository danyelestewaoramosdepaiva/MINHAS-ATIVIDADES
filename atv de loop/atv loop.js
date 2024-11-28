//1.

function pedirNota() {

    let nota;

    
    do {
        nota = parseFloat(prompt("Digite uma nota entre 0 e 10:"));
        
        if (nota >= 0 && nota <= 10) {
            console.log("Nota válida: " + nota);
        } else {
            console.log("Nota inválida! Por favor, digite um valor entre 0 e 10.");
        }
    } while (nota < 0 || nota > 10);
}

pedirNota();


//2. 

for (var i = 1; i <= 100; i++) {
    alert(i)
}


//3.

let usuario;
let senha;

do {
    
    usuario = prompt("Digite seu nome de usuário:");
    senha = prompt("Digite sua senha:");
    
    
    if (senha === usuario) {
        alert("A senha não pode ser igual ao nome de usuário. Tente novamente.");
    }
} while (senha === usuario);


alert("Cadastro realizado com sucesso.");


//4. 

let nome, idade, salario, sexo, estadoCivil;

do {
    nome = prompt("Digite seu nome (maior que 3 caracteres):");
} while (nome.length <= 3);

do {
    idade = parseInt(prompt("Digite sua idade (entre 0 e 150):"));
} while (idade < 0 || idade > 150);

do {
    salario = parseFloat(prompt("Digite seu salário (maior que zero):"));
} while (salario <= 0);

do {
    sexo = prompt("Digite seu sexo ('f' ou 'm'):");
} while (sexo !== 'f' && sexo !== 'm');

do {
    estadoCivil = prompt("Digite seu estado civil ('s', 'c', 'v', 'd'):");
} while (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd');

alert("Cadastro realizado com sucesso.");


//5. 

let popA = 80000;
let popB = 200000;
let taxaA = 0.03;
let taxaB = 0.015;
let anos = 0;

while (popA < popB) {
    popA += popA * taxaA;
    popB += popB * taxaB;
    anos++;
}

let popA = 80000;
let popB = 200000;
let taxaA = 0.03;
let taxaB = 0.015;
let anos = 0;

while (popA < popB) {
    popA += popA * taxaA;
    popB += popB * taxaB;
    anos++;
}

alert(`Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`);


alert(`Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`);

//6. 

let popA = parseInt(prompt("Digite a população do país A:"));
let popB = parseInt(prompt("Digite a população do país B:"));
let taxaA = parseFloat(prompt("Digite a taxa de crescimento do país A (em %):")) / 100;
let taxaB = parseFloat(prompt("Digite a taxa de crescimento do país B (em %):")) / 100;
let anos = 0;

while (popA < popB) {
    popA += popA * taxaA;
    popB += popB * taxaB;
    anos++;
}

alert(`Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`);

//7. 


for (let i = 1; i <= 20; i++) {
    console.log(i);
}


let resultado = "";
for (let i = 1; i <= 20; i++) {
    resultado += i + " ";
}
console.log(resultado.trim());

//8.

let maiorNumero = -Infinity;

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt("Digite um número:"));
    if (num > maiorNumero) {
        maiorNumero = num;
    }
}

alert("O maior número é: " + maiorNumero);

//9. 

let soma = 0;

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt("Digite um número:"));
    soma += num;
}

let media = soma / 5;
alert("Soma: " + soma + "\nMédia: " + media);

//10. 

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//11. 

let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

for (let i = num1 + 1; i < num2; i++) {
    console.log(i);
}


//12. 

let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let soma = 0;

for (let i = num1 + 1; i < num2; i++) {
    soma += i;
}

console.log("Soma dos números: " + soma);


//13.

let numero = parseInt(prompt("Digite o número para ver a tabuada:"));

console.log(`Tabuada de ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`);
}


//14.

let base = parseInt(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));
let resultado = 1;

for (let i = 0; i < expoente; i++) {
    resultado *= base;
}

alert(`${base} elevado a ${expoente} é: ${resultado}`);


//15. 

let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Digite um número inteiro:"));
    if (num % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

alert(`Pares: ${pares}\nÍmpares: ${impares}`);


//16. 

let termos = parseInt(prompt("Digite quantos termos da sequência de Fibonacci deseja ver:"));
let a = 0, b = 1;

console.log("Sequência de Fibonacci:");
for (let i = 0; i < termos; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}


//17. 

let a = 0, b = 1;

console.log("Sequência de Fibonacci:");
while (a <= 500) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}


//18. 

let num = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

for (let i = 1; i <= num; i++) {
    fatorial *= i;
}

alert(`${num}! = ${fatorial}`);


//19. 

let quantidade = parseInt(prompt("Quantos números você quer digitar?"));
let menor = Infinity, maior = -Infinity, soma = 0;

for (let i = 0; i < quantidade; i++) {
    let num = parseInt(prompt("Digite um número:"));
    soma += num;

    if (num < menor) {
        menor = num;
    }
    if (num > maior) {
        maior = num;
    }
}

alert(`Menor: ${menor}\nMaior: ${maior}\nSoma: ${soma}`);


//20.

let num = parseInt(prompt("Digite um número entre 0 e 1000:"));
while (num < 0 || num > 1000) {
    num = parseInt(prompt("Número inválido. Digite um número entre 0 e 1000:"));
}
alert("Número válido: " + num);


//21.

let continuar = true;
while (continuar) {
    let num = parseInt(prompt("Digite um número inteiro menor que 16 para calcular o fatorial:"));
    if (num < 0 || num >= 16) {
        alert("Número inválido! O número deve ser entre 0 e 15.");
    } else {
        let fatorial = 1;
        for (let i = 1; i <= num; i++) {
            fatorial *= i;
        }
        alert("Fatorial de " + num + " é " + fatorial);
    }
    continuar = confirm("Deseja calcular outro fatorial?");
}

//22. 

let num = parseInt(prompt("Digite um número inteiro:"));
let isPrimo = true;

if (num <= 1) {
    isPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrimo = false;
            break;
        }
    }
}

alert(isPrimo ? num + " é primo!" : num + " não é primo.");
    </code></pre>

//23. 

let num = parseInt(prompt("Digite um número inteiro:"));
let divisores = [];
let isPrimo = true;

if (num <= 1) {
    isPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisores.push(i);
            isPrimo = false;
        }
    }
}

if (isPrimo) {
    alert(num + " é primo!");
} else {
    alert(num + " não é primo. Ele é divisível por: " + divisores.join(", "));
}

//24.

function mostrarPrimos(N) {
    let divisões = 0;
    for (let num = 2; num <= N; num++) {
      let primo = true;
      for (let i = 2; i < num; i++) {
        divisões++;
        if (num % i === 0) {
          primo = false;
          break;
        }
      }
      if (primo) {
        console.log(num);
      }
    }
    console.log(`Total de divisões: ${divisões}`);
  }
  
  const N = parseInt(prompt("Digite um número N:"));
  mostrarPrimos(N);
  

//25. 

function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  }
  
  const N = parseInt(prompt("Quantas notas?"));
  const notas = [];
  for (let i = 0; i < N; i++) {
    const nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    notas.push(nota);
  }
  
  const media = calcularMedia(notas);
  console.log(`A média das notas é: ${media.toFixed(2)}`);
  

//26.

function verificarFaixaEtaria(idades) {
    const mediaIdade = idades.reduce((acc, idade) => acc + idade, 0) / idades.length;
    if (mediaIdade <= 25) {
      return "Turma jovem";
    } else if (mediaIdade <= 60) {
      return "Turma adulta";
    } else {
      return "Turma idosa";
    }
  }
  
  const n = parseInt(prompt("Quantas pessoas na turma?"));
  const idades = [];
  for (let i = 0; i < n; i++) {
    const idade = parseInt(prompt(`Idade da pessoa ${i + 1}:`));
    idades.push(idade);
  }
  
  const faixa = verificarFaixaEtaria(idades);
  console.log(`A turma é: ${faixa}`);
  

//27. 

function contarVotos() {
    const votos = [0, 0, 0]; 
    const totalEleitores = parseInt(prompt("Número de eleitores:"));
    
    for (let i = 0; i < totalEleitores; i++) {
      const voto = parseInt(prompt(`Voto do eleitor ${i + 1} (1, 2 ou 3):`));
      if (voto >= 1 && voto <= 3) {
        votos[voto - 1]++;
      }
    }
  
    console.log(`Votos para o Candidato 1: ${votos[0]}`);
    console.log(`Votos para o Candidato 2: ${votos[1]}`);
    console.log(`Votos para o Candidato 3: ${votos[2]}`);
  }
  
  contarVotos();
  

//28. 

function calcularMediaAlunos() {
    const turmas = parseInt(prompt("Quantas turmas?"));
    let totalAlunos = 0;
    
    for (let i = 0; i < turmas; i++) {
      let alunos = parseInt(prompt(`Quantos alunos na turma ${i + 1}?`));
      if (alunos > 40) {
        alert("Número de alunos não pode ser maior que 40.");
        alunos = 40; 
      }
      totalAlunos += alunos;
    }
  
    const media = totalAlunos / turmas;
    console.log(`Média de alunos por turma: ${media.toFixed(2)}`);
  }
  
  calcularMediaAlunos();
  

//29. 

function calcularCD() {
    const qtdCDs = parseInt(prompt("Quantos CDs na coleção?"));
    let totalInvestido = 0;
  
    for (let i = 0; i < qtdCDs; i++) {
      const preco = parseFloat(prompt(`Digite o preço do CD ${i + 1}: R$`));
      totalInvestido += preco;
    }
    
    const media = totalInvestido / qtdCDs;
    console.log(`Total investido: R$ ${totalInvestido.toFixed(2)}`);
    console.log(`Valor médio por CD: R$ ${media.toFixed(2)}`);
  }
  
  calcularCD();
  

//30. 

function tabelaPrecos1_99() {
    console.log("Lojas Quase Dois - Tabela de Preços");
    for (let i = 1; i <= 50; i++) {
      console.log(`${i} - R$ ${(i * 1.99).toFixed(2)}`);
    }
  }
  
  tabelaPrecos1_99();
  

//31. 
function tabelaPrecosPao() {
    const precoPao = parseFloat(prompt("Digite o preço do pão: R$"));
    console.log("Panificadora Pão de Ontem - Tabela de preços");
    for (let i = 1; i <= 50; i++) {
      console.log(`${i} - R$ ${(precoPao * i).toFixed(2)}`);
    }
  }
  
  tabelaPrecosPao();
  

//32.

Troco: R$ 11.00
...

function caixaRegistradora() {
    while (true) {
      let totalCompra = 0;
      let produto = 1;
      
      while (true) {
        const preco = parseFloat(prompt(`Produto ${produto}: R$`));
        if (preco === 0) {
          break;
        }
        totalCompra += preco;
        produto++;
      }
      
      console.log(`Total: R$ ${totalCompra.toFixed(2)}`);
      const dinheiro = parseFloat(prompt("Dinheiro recebido: R$"));
      const troco = dinheiro - totalCompra;
      console.log(`Troco: R$ ${troco.toFixed(2)}`);
      
      const continuar = prompt("Deseja registrar outra compra? (s/n):").toLowerCase();
      if (continuar !== 's') {
        break;
      }
    }
  }
  
  caixaRegistradora();
  

//33.

function temperatura() {
    const temperaturas = [];
    
    while (true) {
      const temp = parseFloat(prompt("Digite a temperatura (-999 para encerrar):"));
      if (temp === -999) {
        break;
      }
      temperaturas.push(temp);
    }
    
    if (temperaturas.length > 0) {
      const menorTemp = Math.min(...temperaturas);
      const maiorTemp = Math.max(...temperaturas);
      const mediaTemp = temperaturas.reduce((acc, temp) => acc + temp, 0) / temperaturas.length;
      
      console.log(`Menor temperatura: ${menorTemp}°C`);
      console.log(`Maior temperatura: ${maiorTemp}°C`);
      console.log(`Média das temperaturas: ${mediaTemp.toFixed(2)}°C`);
    } else {
      console.log("Nenhuma temperatura foi registrada.");
    }
  }
  
  temperatura();
  

//34. 

function verificarPrimo(numero) {
    if (numero <= 1) {
      return false; // Números menores ou iguais a 1 não são primos
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const numero = parseInt(prompt("Digite um número para verificar se é primo:"));
  if (verificarPrimo(numero)) {
    console.log(`${numero} é um número primo.`);
  } else {
    console.log(`${numero} não é um número primo.`);
  }
  

//35. 

function gerarPrimos(N) {
    const primos = [];
    for (let num = 2; num <= N; num++) {
      if (verificarPrimo(num)) {
        primos.push(num);
      }
    }
    return primos;
  }
  
  const N = parseInt(prompt("Digite um número N:"));
  const primos = gerarPrimos(N);
  console.log(`Números primos entre 1 e ${N}:`, primos);
  

//36.

function tabuadaPersonalizada() {
    const numero = parseInt(prompt("Montar a tabuada de:"));
    let inicio = parseInt(prompt("Começar por:"));
    let fim = parseInt(prompt("Terminar em:"));
    
    if (fim < inicio) {
      console.log("O valor final não pode ser menor que o inicial.");
      return;
    }
  
    console.log(`Vou montar a tabuada de ${numero} começando em ${inicio} e terminando em ${fim}:`);
    for (let i = inicio; i <= fim; i++) {
      console.log(`${numero} X ${i} = ${numero * i}`);
    }
  }
  
  tabuadaPersonalizada();
  



//37.

function sensoAcademia() {
    let maisAlto = { codigo: 0, altura: 0 };
    let maisBaixo = { codigo: 0, altura: Infinity };
    let maisGordo = { codigo: 0, peso: 0 };
    let maisMagro = { codigo: 0, peso: Infinity };
    let somaAltura = 0, somaPeso = 0, contador = 0;
  
    while (true) {
      const codigo = parseInt(prompt("Digite o código do cliente (ou 0 para terminar):"));
      if (codigo === 0) break;
      
      const altura = parseFloat(prompt("Digite a altura (em metros):"));
      const peso = parseFloat(prompt("Digite o peso (em kg):"));
      
      somaAltura += altura;
      somaPeso += peso;
      contador++;
  
      if (altura > maisAlto.altura) maisAlto = { codigo, altura };
      if (altura < maisBaixo.altura) maisBaixo = { codigo, altura };
      if (peso > maisGordo.peso) maisGordo = { codigo, peso };
      if (peso < maisMagro.peso) maisMagro = { codigo, peso };
    }
  
    if (contador > 0) {
      console.log(`Cliente mais alto: Código ${maisAlto.codigo}, Altura: ${maisAlto.altura}m`);
      console.log(`Cliente mais baixo: Código ${maisBaixo.codigo}, Altura: ${maisBaixo.altura}m`);
      console.log(`Cliente mais gordo: Código ${maisGordo.codigo}, Peso: ${maisGordo.peso}kg`);
      console.log(`Cliente mais magro: Código ${maisMagro.codigo}, Peso: ${maisMagro.peso}kg`);
      console.log(`Média de altura: ${(somaAltura / contador).toFixed(2)}m`);
      console.log(`Média de peso: ${(somaPeso / contador).toFixed(2)}kg`);
    } else {
      console.log("Nenhum dado foi registrado.");
    }
  }
  
  sensoAcademia();
  


//38.

function calcularSalario() {
    let salario = parseFloat(prompt("Digite o salário inicial do funcionário:"));
    let aumento = 1.5; // Aumento de 1.5% em 1996
    
    for (let ano = 1996; ano <= 2024; ano++) {
      salario += salario * (aumento / 100);
      aumento *= 2; // O aumento dobra a cada ano
    }
  
    console.log(`O salário atual do funcionário é: R$ ${salario.toFixed(2)}`);
  }
  
  calcularSalario();
  

//39.

function estatisticasTransito() {
    let maiorIndice = -Infinity;
    let menorIndice = Infinity;
    let cidadeMaiorIndice = "";
    let cidadeMenorIndice = "";
    let somaVeiculos = 0;
    let somaAcidentes = 0;
    let cidadesComMenos2000Veiculos = 0;
    let acidentesMenos2000 = 0;
  
    for (let i = 0; i < 5; i++) {
      const codigoCidade = prompt(`Código da cidade ${i + 1}:`);
      const veiculos = parseInt(prompt(`Número de veículos de passeio da cidade ${codigoCidade} (1999):`));
      const acidentes = parseInt(prompt(`Número de acidentes com vítimas da cidade ${codigoCidade} (1999):`));
  
      const indiceAcidentes = acidentes / veiculos;
  
      if (indiceAcidentes > maiorIndice) {
        maiorIndice = indiceAcidentes;
        cidadeMaiorIndice = codigoCidade;
      }
      if (indiceAcidentes < menorIndice) {
        menorIndice = indiceAcidentes;
        cidadeMenorIndice = codigoCidade;
      }
  
      somaVeiculos += veiculos;
      somaAcidentes += acidentes;
  
      if (veiculos < 2000) {
        cidadesComMenos2000Veiculos++;
        acidentesMenos2000 += acidentes;
      }
    }
  
    const mediaVeiculos = somaVeiculos / 5;
    const mediaAcidentesMenos2000 = acidentesMenos2000 / cidadesComMenos2000Veiculos;
  
    console.log(`Maior índice de acidentes: Cidade ${cidadeMaiorIndice}, Índice: ${maiorIndice.toFixed(4)}`);
    console.log(`Menor índice de acidentes: Cidade ${cidadeMenorIndice}, Índice: ${menorIndice.toFixed(4)}`);
    console.log(`Média de veículos: ${mediaVeiculos}`);
    console.log(`Média de acidentes nas cidades com menos de 2000 veículos: ${mediaAcidentesMenos2000.toFixed(2)}`);
  }
  
  estatisticasTransito();
  

//40.

function calcularDivida() {
    const divida = parseFloat(prompt("Digite o valor da dívida: R$"));
    const tabelasParcelas = [
      { parcelas: 1, juros: 0 },
      { parcelas: 3, juros: 10 },
      { parcelas: 6, juros: 15 },
      { parcelas: 9, juros: 20 },
      { parcelas: 12, juros: 25 }
    ];
  
    console.log("Valor da Dívida | Valor dos Juros | Quantidade de Parcelas | Valor da Parcela");
    tabelasParcelas.forEach(tabela => {
      const valorComJuros = divida + (divida * (tabela.juros / 100));
      const valorParcela = valorComJuros / tabela.parcelas;
      console.log(`R$ ${valorComJuros.toFixed(2)} | R$ ${(valorComJuros - divida).toFixed(2)} | ${tabela.parcelas} | R$ ${valorParcela.toFixed(2)}`);
    });
  }
  
  calcularDivida();
  

//41.

function calcularPedido() {
    
    const menu = {
      100: { nome: "Cachorro Quente", preco: 1.20 },
      101: { nome: "Bauru Simples", preco: 1.30 },
      102: { nome: "Bauru com ovo", preco: 1.50 },
      103: { nome: "Hambúrguer", preco: 1.20 },
      104: { nome: "Cheeseburguer", preco: 1.30 },
      105: { nome: "Refrigerante", preco: 1.00 }
    };
  
    let total = 0;
    
    console.log("Bem-vindo à Lanchonete!");
    console.log("Cardápio:");
    f
  

//42. 

function calcularPedido() {
    const menu = {
      100: 1.20, // Cachorro Quente
      101: 1.30, // Bauru Simples
      102: 1.50, // Bauru com ovo
      103: 1.20, // Hambúrguer
      104: 1.30, // Cheeseburguer
      105: 1.00  // Refrigerante
    };
  
    let total = 0;
    while (true) {
      const codigo = parseInt(prompt("Digite o código do item (ou 0 para encerrar):"));
      if (codigo === 0) break;
      if (menu[codigo]) {
        const quantidade = parseInt(prompt("Digite a quantidade:"));
        total += menu[codigo] * quantidade;
        console.log(`Item ${codigo}: R$ ${menu[codigo].toFixed(2)} * ${quantidade} = R$ ${(menu[codigo] * quantidade).toFixed(2)}`);
      } else {
        console.log("Código inválido!");
      }
    }
    console.log(`Total do pedido: R$ ${total.toFixed(2)}`);
  }
  
  calcularPedido();
  

//43.


function verificarNotas() {
    // Gabarito da prova
    const gabarito = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B'];  // Exemplo de gabarito
  
    let totalAlunos = 0;
    let totalNotas = 0;
    let maiorNota = 0;
    let menorNota = 10;  // A menor nota possível é 0, então começamos com 10 (mais alta possível)
  
    while (true) {
      let acertos = 0;
  
      // Perguntar ao aluno as respostas das 10 questões
      for (let i = 0; i < 10; i++) {
        let resposta = prompt(`Qual é a resposta da questão ${i + 1} (A, B, C, D)?`);
        
        // Verificar se a resposta está correta
        if (resposta.toUpperCase() === gabarito[i]) {
          acertos++;
        }
      }
  
      // Exibir nota do aluno
      console.log(`Você acertou ${acertos} questões. Sua nota: ${acertos}`);
      
      // Atualizar estatísticas da turma
      totalAlunos++;
      totalNotas += acertos;
      maiorNota = Math.max(maiorNota, acertos);
      menorNota = Math.min(menorNota, acertos);
  
      // Perguntar se outro aluno vai usar o sistema
      let outroAluno = prompt("Outro aluno vai utilizar o sistema? (sim/não)");
  
      if (outroAluno.toLowerCase() !== "sim") {
        break;
      }
    }
  
    // Calcular a média das notas
    const mediaNotas = totalNotas / totalAlunos;
  
    // Exibir resultados finais
    console.log("\nResultados finais da turma:");
    console.log(`Maior Nota: ${maiorNota}`);
    console.log(`Menor Nota: ${menorNota}`);
    console.log(`Total de Alunos: ${totalAlunos}`);
    console.log(`Média das Notas: ${mediaNotas.toFixed(2)}`);
  }
  
  // Chamar a função para iniciar o processo
  verificarNotas();
 


