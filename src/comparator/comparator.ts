class Comparator<T, U> {
    compare: (a: T, b: U) => number;
    constructor(compare: (a: T, b: U) => number) {
        this.compare = compare
    }

    defaultCompare (a: T, b: U) {
        if (a === b) {
          return 0
        }
        return a > b ? 1 : -1
      },

}