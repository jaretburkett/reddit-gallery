
export const objCopy = <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
}

export const nextFrame = () => {
    return new Promise<void>((resolve) => {
        window.requestAnimationFrame(() => {
            resolve();
        })
    })
}

export const wait = (ms: number) => {
    return new Promise<void>((resolve) => {
        window.setTimeout(() => {
            resolve();
        }, ms);
    })
}