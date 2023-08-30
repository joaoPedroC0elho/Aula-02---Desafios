function multiplyMatrices(matrixA, matrixB) {
  const linhaA = matrixA.length;
  const colsA = matrixA[0].length;
  const linhaB = matrixB.length;
  const colsB = matrixB[0].length;
  
  // Verifica se as matrizes podem ser multiplicadas
  if (colsA != linhaB) {
    console.log("Não é possível calcular a multiplicação das matrizes.");
    return;
  }

  // Inicializa a matriz resultante C com zeros
  const matrixC = new Array(linhaA);
  for (let i = 0; i < linhaA; i++) {
    matrixC[i] = new Array(colsB).fill(0);
  }

  // Realiza a multiplicação das matrizes
  for (let i = 0; i <  linhaA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        matrixC[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return matrixC;
}

// Exemplo de matrizes
const matrixA = [
  [1, 3],
  [2, 5],
];

const matrixB = [
  [2, 2],
  [0, 1],
];

// Chamada da função de multiplicação
const resultMatrix = multiplyMatrices(matrixA, matrixB);

// Imprime o resultado
if (resultMatrix) {
    console.log("Matriz resultante C:");
    for (let i = 0; i < resultMatrix.length; i++) {
      console.log(resultMatrix[i]);
    }
  }