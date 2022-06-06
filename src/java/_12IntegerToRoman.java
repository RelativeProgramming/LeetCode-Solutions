public class _12IntegerToRoman {

    public String intToRoman(int num) {
        int m = num / 1000;
        num = num % 1000;
        int c = num / 100;
        num = num % 100;
        int x = num / 10;
        num = num % 10;
        int i = num;
        String builder = "M".repeat(m) +
                numPart("C", "D", "M", c) +
                numPart("X", "L", "C", x) +
                numPart("I", "V", "X", i);
        return builder;
    }

    public String numPart(String sym, String fiveSym, String tenSym, int num) {
        if(num == 9) {
            return  sym + tenSym;
        }
        if(num == 4)
            return sym + fiveSym;
        else
            return num - 5 >= 0 ? fiveSym + sym.repeat(num-5) : sym.repeat(num);
    }

    public static void main(String[] args) {
        var sol = new _12IntegerToRoman();
        System.out.println(sol.intToRoman(1994));
    }

}
