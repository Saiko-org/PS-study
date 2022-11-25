// 리트코드 / 322 / Coin Change
// https://leetcode.com/problems/coin-change/
// add:


class Solution {
    public int coinChange(int[] coins, int amount) {
        int dp[] = new int[amount + 1];
        for (int i = 1; i <= amount; i++) {
            dp[i] = amount + 1;
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        return dp[amount] == amount + 1 ? -1 : dp[amount];
    }
}
