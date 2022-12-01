// 리트코드 / 46 / Permutations
// https://leetcode.com/problems/permutations/
// solve:

class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> answer = new ArrayList<>();
        solve(answer, nums, 0);
        return answer;
    }

    private void solve(List<List<Integer>> answer, int[] nums, int index) {
        if (index >= nums.length) {
            List<Integer> list = new ArrayList<>();
            for (int num : nums) {
                list.add(num);
            }
            answer.add(list);
        }

        for (int i = index; i < nums.length; i++) {
            swap(index, i, nums);
            solve(answer, nums, index + 1);
            swap(i, index, nums);
        }
    }

    private void swap(int i, int j, int[] nums) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
