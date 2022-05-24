
function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    let indexes: Map<string, number> = new Map(); // indexes of found chars
    let counter = 0;
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(indexes.has(char)) {
            i = indexes.get(char)!;
            indexes.clear();
            if(counter > longest)
                longest = counter;
            counter = 0;
            continue
        } else {
            indexes.set(char, i);
            counter++;
        }
    }
    return Math.max(counter, longest);
};
