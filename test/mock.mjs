import { Matrix } from './matrix.mjs';

export class MatrixMock extends Matrix {
    constructor(data) {
        super(data);
    }

    solve() {
        return [1, 2, 3];
    }

    multiply(matrixB) {
        return [[1, 0], [0, 1]];
    }
}