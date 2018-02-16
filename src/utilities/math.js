export function square(n) {
    return n ** 2;
}

export function cube(n) {
    if (!n) return 0;
    if (Number.isNaN(n)) return 0;
    return n ** 3;
}
