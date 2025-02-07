import { expect } from 'chai';
import Mtrx from 'mtrx';

describe('Mtrx Library', function () {
    it('should create a 2x2 matrix of zeros', function () {
        const matrix = Mtrx.zeros(2, 2);
        expect(matrix).to.deep.equal([[0, 0], [0, 0]]);
    });

    it('should calculate the determinant of a 2x2 matrix', function () {
        const matrix = new Mtrx([[1, 2], [3, 4]]);
        expect(matrix.det).to.equal(-2);
    });

    it('should transpose a 2x3 matrix', function () {
        const matrix = new Mtrx([[1, 2, 3], [4, 5, 6]]);
        const transposed = matrix.T();
        expect(transposed).to.deep.equal([[1, 4], [2, 5], [3, 6]]);
    });
});
