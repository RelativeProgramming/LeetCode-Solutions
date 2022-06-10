import java.util.HashSet;
import java.util.Set;

public class _141LinkedListCycle {

    static class ListNode {
        int val;
        ListNode next;

        ListNode(int x) {
            val = x;
            next = null;
        }
    }


    public boolean hasCycle(ListNode head) {
        if(head == null)
            return false;
        Set<ListNode> nodes = new HashSet<>();
        nodes.add(head);
        int size = 1;
        while(head.next != null) {
            nodes.add(head.next);
            if(nodes.size() == size)
                return true;
            head = head.next;
            size++;
        }
        return false;
    }
}
