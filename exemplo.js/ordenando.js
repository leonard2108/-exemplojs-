// ============================
// Funções de Ordenação e Suporte
// ============================

// a) Troca os valores de duas posições de um vetor
const swap = (vetor, pos1, pos2) => {
    let temp = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = temp;
};

// b) Embaralha os elementos do vetor
const shuffle = (vetor, qtdTrocas) => {
    for (let i = 0; i < qtdTrocas; i++) {
        let pos1 = Math.floor(Math.random() * vetor.length);
        let pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
    return vetor;
};

// c) Bubble Sort
const bubble_sort = (vetor) => {
    let tamanho = vetor.length;
    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
    return vetor;
};

// d) Selection Sort
const selection_sort = (vetor) => {
    let tamanho = vetor.length;
    for (let i = 0; i < tamanho - 1; i++) {
        let min = i;
        for (let j = i + 1; j < tamanho; j++) {
            if (vetor[j] < vetor[min]) {
                min = j;
            }
        }
        swap(vetor, i, min);
    }
    return vetor;
};

// e) Particionamento (para o Quick Sort)
const particionamento = (vetor, ini, fim) => {
    let pivot = vetor[fim];
    let i = ini - 1;
    for (let j = ini; j < fim; j++) {
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};

// f) Quick Sort (recursivo)
const quick_sort = (vetor, ini, fim) => {
    if (ini < fim) {
        let posPivot = particionamento(vetor, ini, fim);
        quick_sort(vetor, ini, posPivot - 1);
        quick_sort(vetor, posPivot + 1, fim);
    }
    return vetor;
};