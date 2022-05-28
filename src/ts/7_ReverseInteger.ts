
function reverse(x: number): number {
    const neg = x < 0 ? -1n : 1n;
    const str: string = Math.abs(x).toString();
    let result: bigint = BigInt([...str].reverse().join("")) * neg;
    if((neg == 1n && result > (2**31 - 1)) || (neg == -1n && result < -(2**31)))
        return 0;
    else
        return parseInt(result.toString());
};