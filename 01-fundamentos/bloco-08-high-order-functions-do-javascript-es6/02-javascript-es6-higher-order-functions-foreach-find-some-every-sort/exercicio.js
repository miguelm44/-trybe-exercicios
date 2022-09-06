const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
/* 1° */
function authorBornIn1947() {
  // escreva aqui o seu código
  return books.find((v)=> v.author.birthYear === 1947).author.name
}
console.log(authorBornIn1947())


/* 2° */
function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  nameBook = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  books.forEach((v) => {
    if ( v.name.length < nameBook.length) {
     return  nameBook = v.name;
    }
  });

  // Variável nameBook que receberá o valor do menor nome;
 return nameBook;
}
console.log(smallerName())

/* 3° */
const expectedResult1 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find((v) => v.name.length === 26)
   
  
}
console.log(getNamedBook())

/* 4° */
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  
    return books.sort((a,b) => b.releaseYear - a.releaseYear)
  }

console.log(booksOrderedByReleaseYearDesc())

/* 5° */
const expectedResult2 = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((v) => v.author.birthYear < 2001  && v.author.birthYear > 1901)
}
console.log(everyoneWasBornOnSecXX())


/* 6° */
/* const expectedResult3 = true; */

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((v) => v.releaseYear < 1990 && v.releaseYear > 1979)
}

console.log(someBookWasReleaseOnThe80s()) 


/* 7° */
const expectedResult4 = false;

 // escreva seu código aqui

function authorUnique() {
  return books.every((v) => {
    if (v.author.birthYear !== v.author.birthYear) {
      return true
    }
    else {
      return false
    }
  } )
  
 
}

console.log(authorUnique());













