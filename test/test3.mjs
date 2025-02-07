import { MatrixMock } from './mock.mjs';
import assert from 'assert';

describe('MatrixMock', () => {
  it('Matrix.solve() should return mock solution', () => {
    const matrix = new MatrixMock([[1, 2], [3, 4]]);
    const solution = matrix.solve();

    assert.deepEqual(solution, [1, 2, 3]);
  });

  it('Matrix.multiply() should return mock multiplication result', () => {
    const matrix = new MatrixMock([[1, 2], [3, 4]]);
    const result = matrix.multiply([[5, 6], [7, 8]]);

    assert.deepEqual(result, [[1, 0], [0, 1]]);
  });
});