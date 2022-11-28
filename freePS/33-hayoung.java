// 리트코드 / 33 / Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
// add:

class Solution {
    public int search(int[] nums, int target) {
        return binarySearch(0, nums.length - 1, nums, target);
    }
    private int binarySearch(int left, int right, int[] nums, int target) {
        if (left > right) {
            return -1;
        }
        int mid = (left + right) / 2;
        if (nums[mid] == target) {
            return mid;
        }
        int result = binarySearch(left, mid - 1, nums, target);
        if (result == -1) {
            result = binarySearch(mid + 1, right, nums, target);
        }
        return result;
    }
}
