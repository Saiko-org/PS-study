// 리트코드 / 21 / Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
// solve:

class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode root = new ListNode(0, null);
        ListNode temp = root;
        while (list1 != null || list2 != null) {
            if (list1 != null && list2 != null && list1.val >= list2.val) {
                append(temp, list2);
                temp = temp.next;
                list2 = list2.next;

                continue;
            }
            if (list1 == null) {
                append(temp, list2);
                temp = temp.next;
                list2 = list2.next;
                continue;
            }
            if (list2 == null) {
                append(temp, list1);
                temp = temp.next;
                list1 = list1.next;
                continue;
            }
            append(temp, list1);
            temp = temp.next;
            list1 = list1.next;
    }
    return root.next;
  }

  private void append(ListNode root, ListNode list) {
    root.next = new ListNode(list.val, null);
  }
}
