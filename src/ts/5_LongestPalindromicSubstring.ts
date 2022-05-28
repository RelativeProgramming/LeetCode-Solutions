
// I know this is hugely inefficient xD
function longestPalindrome(s: string): string {
    let longestPalindrome = "";
    for(let i = 0; i < s.length-longestPalindrome.length; i++) {
        for(let j = i+longestPalindrome.length; j < s.length; j++) {
            let sub = s.slice(i, j+1);
            if(sub.length > longestPalindrome.length && isPalidrome(sub)) {
                longestPalindrome = sub;
            }
        }
    }
    return longestPalindrome;
};

function isPalidrome(s: string): boolean {
    let result = true;
    for(let i = 0; i < Math.floor(s.length/2); i++) {
        if(s[i] !== s[s.length-i-1]) {
            result = false;
            break;
        }
    }
    return result;
}
