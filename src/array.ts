export function range(start:number, stop:number, step = 1) {
    start = isNaN(+start) ? 0 : +start;
    stop = isNaN(+stop) ? 0 : +stop;
    step = isNaN(+step) ? 0 : +step;

    if (start > stop && step > 0) {
        step = -step;
    }
    const arr = [];
    for (let i = start; start > stop ? i > stop : i < stop; i += step) {
        arr.push(i);
    }
    return arr;
}
