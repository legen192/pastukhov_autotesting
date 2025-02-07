import { expect } from 'chai';
import { Matrix } from './matrix.mjs';

describe('Matrix Library', function() {
    it('should create a 2x2 zero matrix', function() {
        const matrix = Matrix.zeros(2, 2);
        expect(matrix.data).to.deep.equal([[0, 0], [0, 0]]);
    });
    it('should transpose a matrix', function () {
        const matrix = new Matrix([[1, 2, 3], [4, 5, 6]]);
        const transposed = matrix.transpose();
        expect(transposed.toArray()).to.deep.equal([[1, 4], [2, 5], [3, 6]]);
    });     
});

describe('Matrix Operations', function() {
    it('should add two matrices', function() {
        const matrix1 = new Matrix([[1, 2], [3, 4]]);
        const matrix2 = new Matrix([[5, 6], [7, 8]]);
        const sum = matrix1.add(matrix2);
        expect(sum.toArray()).to.deep.equal([[6, 8], [10, 12]]);
    });
});
