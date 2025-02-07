export class Matrix {
    constructor(data) {
        this.data = data;
    }

    static zeros(rows, cols) {
        return new Matrix(Array.from({ length: rows }, () => Array(cols).fill(0)));
    }

    transpose() {
        const transposedData = this.data[0].map((_, i) => this.data.map(row => row[i]));
        return new Matrix(transposedData);
    }

    toArray() {
        return this.data;
    }

    add(matrix) {
        if (this.data.length !== matrix.data.length || this.data[0].length !== matrix.data[0].length) {
            throw new Error('Matrices must have the same dimensions');
        }

        const result = this.data.map((row, i) =>
            row.map((value, j) => value + matrix.data[i][j])
        );

        return new Matrix(result);
    }

    solve() {
        const n = this.data.length;

        for (let i = 0; i < n; i++) {
            let maxEl = Math.abs(this.data[i][i]);
            let maxRow = i;
            for (let k = i + 1; k < n; k++) {
                if (Math.abs(this.data[k][i]) > maxEl) {
                    maxEl = Math.abs(this.data[k][i]);
                    maxRow = k;
                }
            }

            for (let k = i; k < n + 1; k++) {
                const tmp = this.data[maxRow][k];
                this.data[maxRow][k] = this.data[i][k];
                this.data[i][k] = tmp;
            }

            for (let k = i + 1; k < n; k++) {
                const c = -this.data[k][i] / this.data[i][i];
                for (let j = i; j < n + 1; j++) {
                    if (i === j) {
                        this.data[k][j] = 0;
                    } else {
                        this.data[k][j] += c * this.data[i][j];
                    }
                }
            }
        }

        const x = Array(n).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            x[i] = this.data[i][n] / this.data[i][i];
            for (let k = i - 1; k >= 0; k--) {
                this.data[k][n] -= this.data[k][i] * x[i];
            }
        }

        return x;
    }

    multiply(matrixB) {
        const rowsA = this.data.length;
        const colsA = this.data[0].length;
        const rowsB = matrixB.data.length;
        const colsB = matrixB.data[0].length;

        if (colsA !== rowsB) {
            throw new Error('Matrices cannot be multiplied');
        }

        const result = Array(rowsA)
            .fill(null)
            .map(() => Array(colsB).fill(0));

        for (let i = 0; i < rowsA; i++) {
            for (let j = 0; j < colsB; j++) {
                for (let k = 0; k < colsA; k++) {
                    result[i][j] += this.data[i][k] * matrixB.data[k][j];
                }
            }
        }

        return result;
    }
}