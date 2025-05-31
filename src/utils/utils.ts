// So I don't confuse the order of indices.
export function getFrom2DArray<T>(array: T[][], col: number, row: number ): T  {
    if (row < 0 || row >= array.length || col < 0 || col >= array[row].length) {
        throw new RangeError(`Index out of bounds: row index: ${row}, column index: ${col} for array with ${array.length} rows and ${array[0].length} columns.`);
    } else {
        return array[row][col];
    }
}