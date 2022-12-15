// 리트코드 / 78 / Subsets
// https://leetcode.com/problems/subsets/
// solve:

class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> answer = new ArrayList<>();
        solve(0, nums, answer, new boolean[nums.length]);
        return answer;
    }
    private void solve(int index, int[] nums, List<List<Integer>> answer, boolean check[]) {
        if (index >= nums.length) {
            List<Integer> list = new ArrayList<>();
            for (int i = 0; i < nums.length; i++) {
                if (check[i]) {
                    list.add(nums[i]);
                }
            }
            answer.add(list);
            return;
        }
        check[index] = true;
        solve(index + 1, nums, answer, check);
        check[index] = false;
        solve(index + 1, nums, answer, check);

    }
}
