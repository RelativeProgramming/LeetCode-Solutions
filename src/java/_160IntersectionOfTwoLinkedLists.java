import java.util.HashSet;
import java.util.Set;
import java.util.Stack;

public class _160IntersectionOfTwoLinkedLists {

    //Definition for singly-linked list.
    public static class ListNode {
        int val;
        ListNode next;

        ListNode(int x) {
            val = x;
            next = null;
        }
    }

    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        Stack<ListNode> a = new Stack<>();
        Stack<ListNode> b = new Stack<>();
        while (headA != null) {
            a.push(headA);
            headA = headA.next;
        }
        while (headB != null) {
            b.push(headB);
            headB = headB.next;
        }

        if(a.peek() != b.peek())
            return null;

        ListNode last = a.peek();
        while (!(a.empty() || b.empty())) {
            ListNode aN = a.pop();
            ListNode bN = b.pop();
            if(aN != bN)
                return last;
            last = aN;
        }
        return last;
    }
}
