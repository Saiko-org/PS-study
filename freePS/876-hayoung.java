// 리트코드 / 876 / Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/
// solve: 

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
 import java.util.*;

class Solution {
    public ListNode middleNode(ListNode head) {
        List<ListNode> list = new ArrayList<>();
        solve(head, list);
        return list.get(list.size() / 2);
    }
    private void solve(ListNode head, List<ListNode> list) {
        if (head == null) {
            return;
        }
        list.add(head);
        solve(head.next, list);
    }
}
