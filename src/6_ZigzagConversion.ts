
function convert(s: string, numRows: number): string {
    if(numRows === 1)
        return s;
    
    const unitSize = Math.max(1, numRows + numRows - 2);
    const fullUnits = Math.floor(s.length / unitSize);
    const extraCols = ((s.length % unitSize) > 0 ? 1 : 0)  + Math.max(0, (s.length % unitSize) - numRows);
    const numCols = fullUnits * Math.max(1, numRows - 1) + extraCols;

    let builder: string[] = [];

    for(let y: number = 0; y < numRows; y++) {
        let restZig = (numRows-y) + (numRows-y) - 2;
        let restZag = 2 * (y+1) - 2;
        if(restZag <= 0)
            restZag = restZig;
        if(restZig <= 0)
            restZig = restZag;
        let zig = y !== (numRows - 1);
        let index = y;
        for(let x: number = 0; x < numCols; x++) {
            if(index < s.length)
                builder.push(s[index])
            index += (zig ? restZig : restZag);
            zig = !zig;

            if(builder.length === s.length)
                break;
        }

        if(builder.length === s.length)
                break;
    }

    return builder.join("");
};
