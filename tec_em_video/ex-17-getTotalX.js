function getTotalX(a, b) {
  let finalHolder = [];

  a.forEach((element) => {
    let temp = [];

    for (let index = 1; index <= 100; index += 1) {
      if (index % element === 0) {
        temp.push(index);
      }
    }

    return finalHolder.push(temp);
  });

  // console.log(finalHolder);

  let finalHolder2 = [];

  finalHolder.forEach((element) => {
    let temp = [];

    element.forEach((element2) => {
      if (element2 <= b[b.length - 1]) {
        temp.push(element2);
      }
      finalHolder2.push(temp);
    });
    return finalHolder2;
  });

  // console.log("finalHolder2:", finalHolder2);

  // criando array para a segunda condição (b)

  b.forEach((element) => {
    let temp = [];

    for (let index = 1; index <= 100; index += 1) {
      if (index % element === 0) {
        temp.push(index);
      }
    }

    return finalHolder2.push(temp);
  });

  // console.log(finalHolder2);

  let conditionTest = a.length + b.length;

  let finalHolder3 = finalHolder2.flat(10).sort((a, b) => a - b);
  // console.log("finalHolder3:", finalHolder3);

  let finalHolder4 = [];

  finalHolder3.forEach((element) => {
    console.log(element);
    let count = 0;

    finalHolder3.forEach((element2) => {
      if (element === element2) {
        count++;
        if (count === conditionTest) {
          finalHolder4.push(element);
        }
      }
    });
    return finalHolder4;
  });

  // console.log("finalHolder4:", finalHolder4);

  let finalHolder5 = Array.from(new Set(finalHolder4));
  // console.log(finalHolder5);

  let allDone = finalHolder5.length;
  return allDone;
  // console.log(allDone);
}

// elementos de testes para a função

let a4 = [2, 6];
let b4 = [24, 36];

getTotalX(a4, b4);

function newFunction(finalHolder3) {}
// let a1 = [2, 4];
// let a2 = [2];
// let a3 = [3, 4];

// let b1 = [16, 32, 96];
// let b2 = [20, 30, 12];
// let b3 = [24, 48];
