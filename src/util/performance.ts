/**
 * 高精度计算时间
 * @param func 
 * @returns 
 */
export function getFuncExecuteTime(func: Function, ...args: any[]): number {
    const t0 = performance.now();
    func(...args);
    const t1 = performance.now();
    console.log("func 函数执行了" + (t1 - t0) + "毫秒.")
    return t1 - t0
}

function testMapKeys(time: number) {
    const m = new Map([
        [1, 1],
        [2, 2],
    ])
    for (let i = 0; i < time; i++) {
        m.keys()
    }
}

function testMapGet(time: number) {
    const m = new Map([
        [1, 1],
        [2, 2],
    ])
    for (let i = 0; i < time; i++) {
        m.get(i)
    }
}