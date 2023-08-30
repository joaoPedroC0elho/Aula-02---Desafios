//Faça um algoritmo que imprime uma matriz A e sua transposta.


const matrixA = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];


const transposedMatrix = transposeMatrix(matrixA); // Calcula a matriz transposta

// Função para imprimir uma matriz
function printMatrix(matrix) {
    // Itera pelas linhas da matriz usando um loop 'for...of'
    for (const element of matrix) {
      // Imprime os elementos da linha, separados por tabulação (\t)
      console.log(element.join('\t'));
    }
  }
  // Função para calcular a matriz transposta
  function transposeMatrix(matrix) {
    const rows = matrix.length; // Número de linhas na matriz original
    const cols = matrix[0].length; // Número de colunas na matriz original
    const transposed = []; // Matriz transposta a ser construída
  
    // Itera pelas colunas da matriz original
    for (let i = 0; i < cols; i++) {
      transposed[i] = []; // Inicializa uma nova coluna na matriz transposta
      // Itera pelas linhas da matriz original
      for (let j = 0; j < rows; j++) {
        // Atribui o elemento da matriz original à matriz transposta trocando linhas por colunas
        transposed[i][j] = matrix[j][i];
      }
    }
  
    return transposed; // Retorna a matriz transposta
  }
  
  
  console.table("Matrix A:");
  printMatrix(matrixA); // Imprime a matriz original
  
 
  
  console.table("\nTransposed Matrix:");
  printMatrix(transposedMatrix); // Imprime a matriz transposta
  