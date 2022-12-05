fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then((response) => response.json())
  .then((resposta) => {
    console.log(resposta.text);
  });

fetch("https://api.kanye.rest")
  .then((response) => response.json())
  .then((resposta) => {
    console.log(resposta.quote);
  });

fetch("https://api.goprogram.ai/inspiration")
  .then((response) => response.json())
  .then((resposta) => {
    console.log(resposta.quote);
  });

fetch("http://numbersapi.com/random/?json")
  .then((response) => response.json())
  .then((resposta) => {
    console.log(resposta.text);
  });

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

fetchProdutos("https://uselessfacts.jsph.pl/random.json?language=en");

const precos = [
  "Crédito",
  "R$ 300",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

const precosFiltro = precos.filter((p) => p.includes("R$"));

//console.log(precosFiltro);

const precosNumeros = precosFiltro.map((valor) => {
  // console.log(+valor.replace("R$ ", ""));
  return +valor.replace("R$ ", "");
});

console.log(precosNumeros);

const grupoA = 100;
const grupoB = 200;

if (grupoA > grupoB) {
  console.log("grupoA ganhou");
} else {
  console.log("grupoB ganhou");
}

const vencedor = grupoA > grupoB ? "Grupo A venceu" : "Grupo B venceu";
console.log(vencedor);
