/* 1° */



/* const newEmployees = (a) => {
  const employees = {
    id1: obj.entries(a) 
    
  }
  return employees;
};

console.log(newEmployees(dados))
 */


/* const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator)); */

const dados = (nomeCompleto) => {
const email = nomeCompleto.toLowerCase().split(' ').join('_') + '@trybe.com';
return {Nome: nomeCompleto, email: email}
}

const newEmployees = (nome) => {
  const employees = {
    id1: nome('Pedro Guerra'), 
    id2: nome('Luiza Drumond'), 
    id3: nome('Carla Paiva'), 
  }
  return employees;
};

console.log(newEmployees(dados))

/* 2° */

 const numeroEscolhido = (a, b, c, d)  => {
  const numeroEscolhido = Math.floor(Math.random() * (b - a) + a);
  const numeroSorteado = Math.floor(Math.random() * (d- c) + c);
  if ( numeroEscolhido === numeroSorteado){
    return '"Parabéns você ganhou"';
  }else {
    return "Tente novamente";
  }
 }
const sorteio = (a,b,c,d,e) => {
return a(b,c,d,e)
}
console.log(sorteio(numeroEscolhido,1,6,1,6))

/* 3° */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    counter += actionReturn;
  }
  return `Resultado final: ${counter} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

 












