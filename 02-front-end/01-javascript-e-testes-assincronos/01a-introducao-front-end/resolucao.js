/* 01-  Observe o código abaixo e responda: qual é a ordem de finalização de execução das linhas comentadas? */
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

const mars = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

/* console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
 */
/* Resposta: a,b e depois c */

/* 02-- Observe o código abaixo e responda: qual é a ordem de finalização de execução das linhas comentadas? */


const planetDistanceFromSun2 = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT2 = 'quilômetros';

const mars2 = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT2,
  },
};

const venus2 = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT2,
  },
};

const jupiter2 = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT2,
  },
};

/* console.log(planetDistanceFromSun2(mars2)); // A
setTimeout(() => console.log(planetDistanceFromSun2(venus2)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun2(jupiter2)), 2000); // C */

/* Resposta: a,c e depos b */


/* 03-- A função getPlanet abaixo imprime o planeta Marte de forma síncrona. 
Modifique a função getPlanet, de forma que Marte seja impresso assincronamente, após 4 segundos. */

const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  /* setTimeout(()=> console.log('Returned planet: ', mars), 4000) */
  
};

getPlanet(); // Imprime Marte depois de 4 segundos



/* 04- - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. 
O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio.
 Crie a função sendMarsTemperature de forma que:

    A função sendMarsTemperature imprima no console o seguinte texto: 
    “A temperatura de Marte é: temperaturaAtual graus celsius” onde, temperaturaAtual é o valor recebido da função getMarsTemperature; 
    e
    A mensagem deve ser impressa no console depois de no máximo 5 segundos.

 */

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = ()=> {
  const temperaturaAtual = getMarsTemperature();
 /*  setTimeout(()=> console.log(`A temperatura de Marte é: ${temperaturaAtual} graus celsius`), messageDelay()) */
}

sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo



/* 05- - Agora que você fez a função que envia a temperatura de Marte,
 vamos utilizar essa temperatura para realizar outras operações.
 No código abaixo, temos as funções temperatureInFahrenheit e greet. 
 Elas irão utilizar a temperatura obtida pela função getMarsTemperature para realizar nossas operações.
  Escreva a função sendMarsTemperature de forma que:

    A função sendMarsTemperature receba uma callback;

 Dica: Essa callback será uma de nossas funções: temperatureInFahrenheit ou greet;

    A função sendMarsTemperature execute essa callback depois de no máximo 5 segundos.

Dica: Lembre-se de nossa função messageDelay para gerar o tempo de espera necessário.
 */

const messageDelay2 = () => Math.floor(Math.random() * 5000);

const getMarsTemperature2 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// Definição da função sendMarsTemperature...
const sendMarsTemperature2 = (cal)=> {
const temperatura = getMarsTemperature2()
setTimeout(()=> cal(temperatura), messageDelay2())
}
sendMarsTemperature2(temperatureInFahrenheit) // Imprime "Atualmente está 46.4ºF em Marte", por exemplo
                                                              
sendMarsTemperature2(greet) // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo

/* 06- Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. 
Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha. */


const messageDelay3 = () => Math.floor(Math.random() * 5000);

const getMarsTemperature3 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit3= (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit3 = (temperature) =>
  console.log(`It is currently ${toFahrenheit3(temperature)}ºF at Mars`);

const greet3 = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature4 = (onSuccess, onError) => {
  const currentTemperature = getMarsTemperature3();
  const messageSuccessfullySent = Math.random() <= 0.6;
  setTimeout(() => {
      if(messageSuccessfullySent) onSuccess(currentTemperature)
      else onError('Robot is busy');
  }, messageDelay3());
}
// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature4(temperatureInFahrenheit3, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature4(greet3, handleError);



/* 07- A função uppercase recebe um parâmetro str e uma callback.
 Esta função transforma as letras de uma palavra em letras maiúsculas. Escreva um teste que verifique a chamada da função uppercase.
 Lembre-se de ter cuidado com os falso-positivos em testes assíncronos. */

/* reposta no arquivo resolução.test.js */

 const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


/* 08 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon!

No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle.

Complete a função handlePokemonSearch de modo que:

    Ao chamar a função getPokemonDetails com um pokémon existente, imprime no console a mensagem com os detalhes deste pokémon.

    Ao chamar a função getPokemonDetails com um pokémon não existente, imprime no console o erro.

 */

    
    const pokemons = [
      {
        name: 'Bulbasaur',
        type: 'Grama',
        ability: 'Raio Solar',
      },
      {
        name: 'Charmander',
        type: 'Fogo',
        ability: 'Lança Chamas',
      },
      {
        name: 'Squirtle',
        type: 'Água',
        ability: 'Jato de Água',
      },
    ];
    
    function getPokemonDetails(selectedPokemon, callback) { // 1. Adicionamos o parâmetro `selectedPokemon`
      const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);
    
      setTimeout(() => {
        if (foundPokemon === undefined) {
          return callback(new Error('Não temos esse pokémon para você :('), null);
        }
    
        const { name, type, ability } = foundPokemon;
        
    
        const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
    
        callback(null, messageFromProfOak);
      }, 2000);
    }
    
    const handlePokemonSearch = (error, message) => {
      // Insira a callback de tratamento
      if (error) { // 2, 3. Criamos o `if/else` com o parâmetro `error`
        console.log(error); // 4. Colocamos o console.log() para imprimir o erro
      } else {
        console.log(message);// 5. Colocamos o console.log() para imprimir a mensagem
      }
    };
    
    getPokemonDetails('Bulbasaur', handlePokemonSearch);



/* 09- A fim de evitar que futuros treinadores de Pokémon sejam prejudicados,
 o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui esses Pokémon. 
 Para isso, você deve criar um novo arquivo .test.js ou .spec.js e copiar o código abaixo. 
Lembre-se de completar os testes para a função getPokemonDetails de acordo com as especificações. */

// Verifique se a importação do arquivo correto está sendo feita.

/* resposta no aquivo resolução2.teste */

module.exports = getPokemonDetails;
/* 10- Para este exercício, você tentará adivinhar a saída dos console.log dos testes abaixo sem executá-los,
 vendo se compreendeu bem o funcionamento do beforeEach e do afterEach. */
 /* beforeEach(() => console.log('1 - beforeEach'));
 afterEach(() => console.log('1 - afterEach'));
 
 test('', () => console.log('1 - test'));
 
 describe('Scoped / Nested block', () => {
   beforeEach(() => console.log('2 - beforeEach'));
   afterEach(() => console.log('2 - afterEach'));
 
   test('', () => console.log('2 - test'));
 }); */
/* 
 1 - beforeEach // antes de cada teste
 1 - test // o teste
 1 - afterEach // depois de cada teste
 1 - beforeEach // antes de cada teste
 2 - beforeEach // antes de cada teste dentro do describe
 2 - test // o teste dentro do describe
 2 - afterEach // depois de cada teste dentro do describe
 1 - afterEach // depois de cada teste


 */










