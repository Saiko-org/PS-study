// 리트코드 / 121 / Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// solve:

class Solution {
    public int maxProfit(int[] prices) {
        int answer = 0;
        int min[] = new int[prices.length];
        int max[] = new int[prices.length];

        min[0] = prices[0];
        for (int i = 1; i < prices.length; i++) {
        min[i] = Math.min(prices[i], min[i - 1]);
        }
        max[0] = prices[prices.length - 1];
        for (int i = prices.length - 2, j = 1; i >= 0; i--) {
        max[j] = Math.max(prices[i], max[j - 1]);
        j++;
        }

        for (int i = 0; i < min.length; i++) {
            if (prices.length - i - 2 >= 0) {
                int sell = max[prices.length - i - 2];
                answer = Math.max(sell - min[i], answer);
            }
        }
        return answer;
    }
}

