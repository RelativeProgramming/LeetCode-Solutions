public class _8StringToInteger {

    public int myAtoi(String s) {
        String temp = s.trim();
        if(temp.isEmpty())
            return 0;
        char first = temp.charAt(0);
        if(!Character.isDigit(first) && first != '-' && first != '+')
            return 0;
        int neg = first == '-' ? -1 : 1;
        long result = 0;
        for(int i = Character.isDigit(temp.charAt(0)) ? 0 : 1; i < temp.length(); i++) {
            int digit = temp.charAt(i) - 48;
            if(digit < 0 || digit > 9)
                break;
            result = result * 10 + digit;
            if(result > Integer.MAX_VALUE) {
                if(result*neg < Integer.MIN_VALUE)
                    return Integer.MIN_VALUE;
                if(result*neg > Integer.MAX_VALUE)
                    return Integer.MAX_VALUE;
            }
        }
        return ((int)result) * neg;
    }
}
