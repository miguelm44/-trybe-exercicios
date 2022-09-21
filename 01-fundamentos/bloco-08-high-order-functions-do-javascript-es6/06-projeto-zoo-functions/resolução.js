/*  Exercício 1

    Dado o código abaixo, altere a chamada da função rectangleArea de forma que
     seja impressa a área dos 3 retângulos (rectangle1, rectangle2 
      e rectangle3). O código deve retornar em sequência 2, 15 e 54.
 */
    const rectangleArea = (width, height) => width * height;

    const rectangle1 = [1, 2];
    const rectangle2 = [3, 5];
    const rectangle3 = [6, 9];
    const rectangles = [rectangle1,rectangle2,rectangle3];
    
    rectangles.forEach((rectangle) => {

      console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
      
    });
 

/*  Exercício 2

    Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. 
    Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.
 */

const sum = (...numeros) => numeros.reduce((a,b)=> a + b)

console.log(sum(4,5,6))


/*  Exercício 3

    Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa (variáveis alex e gunnar),
     retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

 */

    const alex = {
      name: 'Alex',
      age: 26,
      likes: ['fly fishing'],
      nationality: 'Australian',
    };
    
    const gunnar = {
      name: 'Gunnar',
      age: 30,
      likes: ['hiking', 'scuba diving', 'taking pictures'],
      nationality: 'Icelandic',
    };
    // name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade
   
    
    // complete a assinatura da função abaixo
    const personLikes = ({name,age,likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
    // <nome> tem <anos de idade> e gosta de <gostos da pessoa>
    // Retornos esperados:
    console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
     console.log(personLikes(gunnar));  // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

/* Exercício 4

    Escreva uma função filterPeople que, dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20:
  */

    const people = [
      {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
      },
      {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
      },
      {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
      },
      {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
      },
      {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
      },
        // bornIn: nascido em
    ];
    
    // escreva filterPeople abaixo

//...
const filterPeople = () => {
  const p =  people.filter(({bornIn, nationality}) => bornIn > 1900 &&  bornIn < 2001 && nationality === 'Australian')
  return p
}

console.log(filterPeople())



/*  Exercício 5

    Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados.
     Detalhe: você precisa fazer essa função gastando apenas 1 linha.
      O retorno da função utilizando o array myList deve ser [3, 2, 5].

 */

      const myList = [5, 2, 3];
      // escreva swap abaixo

const swap = ([a,b,c]) => [c,b,a]

console.log(swap(myList))


/*  Exercício 6

    Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é representado dentro de um array.
     Então seu chefe pede que seja mudado o formato de array para objeto.
      Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:

 */

    const palio = ['Palio', 'Fiat', 2019];
    const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
    const chiron = ['Chiron', 'Bugatti', 2016];
    
    // escreva toObject abaixo

    const toObject = ([name, brand, year]) => ({ name, brand, year });

console.log(toObject(palio))
console.log(toObject(shelbyCobra))
console.log(toObject(chiron))

/*  Exercício 7

    Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:
 */

    const ships = [
      {
        name: 'Titanic',
        length: 269.1,
        measurementUnit: 'meters',
      },
      {
        name: 'Queen Mary 2',
        length: 1132,
        measurementUnit: 'feet',
      },
      {
        name: 'Yamato',
        length: 256,
        measurementUnit: 'meters',
      },
         // measurementUnit: unidade de medida
    ];
     const shipLength = ({name,length,measurementUnit}) => `${name} is ${length} ${measurementUnit} long`;
    
    // escreva shipLength abaixo
    
    // retorno esperado
    console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
    console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
    console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'


/*  Exercício 8

    Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. 
    Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:
 */

// escreva greet abaixo
const greet = (name , recado = 'Hi') => `${recado} ${name}`
// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'


/*  Exercício 9

    Existe um objeto yearSeasons que representa as estações do ano. 
    Cada estação é uma chave deste objeto, e o valor de cada chave é um array de strings, representando os meses daquela estação.
     A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.

 */


    const yearSeasons = {
      spring: ['March', 'April', 'May'],
      summer: ['June', 'July', 'August'],
      autumn: ['September', 'October', 'November'],
      winter: ['December', 'January', 'February'],
    };
    // yearSeasons: estações do ano.
const {spring, summer,autumn,winter} = yearSeasons;

const array = [...spring,...summer,...autumn,...winter];

console.log(array)










