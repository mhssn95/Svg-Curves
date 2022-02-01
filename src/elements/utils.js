export function round(num) {
    return Math.round(num * 100) / 100
}

export function inside(x0, y0, x1, y1) {
    return (x1 >= x0 - 5 && x1 <= x0 + 5) && (y1 >= y0 - 5 && y1 <= y0 + 5)
}

export function reflect(p0, p1) {
    return p1 + (p1 - p0)
}