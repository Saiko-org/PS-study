// 리트코드 / 704 / Binary Search
// https://leetcode.com/problems/binary-search/
// solve:

class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (nums[mid] == target) {
                return mid;
            }
            if (nums[mid] < target) {
                left = mid + 1;
                continue;
            } 
            right = mid - 1;
        }
        return -1;
    }
}
