// 리트코드 / 39 / Combination Sum
// https://leetcode.com/problems/combination-sum/
// solve:

class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> answer = new ArrayList<>();
         solve(0, 0, target, candidates, new int[candidates.length], answer);
        return answer;
    }
      private static void solve(int start, int sum, int target, int candidates[], int combination[],
    List<List<Integer>> answer) {
    if (sum == target) {
      List<Integer> list = new ArrayList<>();
      for (int i = 0; i < combination.length; i++) {
        for (int j = 0; j < combination[i]; j++) {
          list.add(candidates[i]);
        }
      }
      answer.add(list);
      return;
    }
    if (start >= candidates.length) {
      return;
    }

    for (int count = 0; count <= (target - sum) / candidates[start]; count++) {
      if (candidates[start] * count > target - sum) {
        continue;
      }
      combination[start] = count;
      solve(start + 1, sum + (candidates[start] * count), target, candidates, combination,
        answer);
      combination[start] = 0;
    }
  }
}
