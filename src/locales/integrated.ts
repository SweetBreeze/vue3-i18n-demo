export function buildLocales(key: string, codes: any) {
    let ret: any = {};

    for (let k in codes) {
        ret[key + "." + k] = codes[k];
    }
    return ret;
}
