/**
 *  프로그래머스 / 72413 / 합승 택시 요금
 *  https://school.programmers.co.kr/learn/courses/30/lessons/72413
 *  fail: 1시간, add: 풀이법 생각나서 다시 품
 */

import java.util.Arrays;

public class Solution {
  int[][] fareTable;
  int[] minCostFromStart;
  int[] minCostFromA;
  int[] minCostFromB;

  public int solution(
      int n,
      int s,
      int a,
      int b,
      int[][] fares
  ) {
    initFareTable(n, fares);

    minCostFromStart = getMinCostFrom(s);
    minCostFromA = getMinCostFrom(a);
    minCostFromB = getMinCostFrom(b);

    return getMinSumCost();
  }

  private int getMinSumCost() {
    int minSumCost = Integer.MAX_VALUE;

    for (int i = 1; i < minCostFromStart.length; i++) {
      int sumCost = minCostFromStart[i] + minCostFromA[i] + minCostFromB[i];
      minSumCost = Math.min(minSumCost, sumCost);
    }

    return minSumCost;
  }

  private int[] getMinCostFrom(int startPoint) {
    int[] minCost = new int[fareTable.length];
    Arrays.fill(minCost, Integer.MAX_VALUE);
    minCost[startPoint] = 0;
    boolean[] visited = new boolean[fareTable.length];

    updateCost(minCost, visited, startPoint);

    return minCost;
  }

  private void updateCost(
      int[] minCosts,
      boolean[] visited,
      int currentPoint
  ) {
    visited[currentPoint] = true;
    for (int i = 1; i < fareTable[currentPoint].length; i++) {
      int cost = fareTable[currentPoint][i];

      if (cost == 0 ||
          minCosts[currentPoint] == Integer.MAX_VALUE ||
          minCosts[i] <= minCosts[currentPoint] + cost) {
        continue;
      }

      minCosts[i] = minCosts[currentPoint] + cost;
    }

    int nextPoint = getMinCostPoint(minCosts, visited);
    if (nextPoint != 0) {
      updateCost(minCosts, visited, nextPoint);
    }
  }

  private int getMinCostPoint(int[] minCosts, boolean[] visited) {
    int minCostPoint = 0;
    int minCost = Integer.MAX_VALUE;
    for (int i = 1; i < minCosts.length; i++) {
      if (visited[i]) {
        continue;
      }

      int cost = minCosts[i];
      if (cost < minCost) {
        minCost = cost;
        minCostPoint = i;
      }
    }
    return minCostPoint;
  }

  private void initFareTable(
      int numOfPoints,
      int[][] fares
  ) {
    fareTable = new int[numOfPoints + 1][numOfPoints + 1];

    for (int[] fare : fares) {
      int from = fare[0];
      int to = fare[1];
      int cost = fare[2];

      fareTable[from][to] = cost;
      fareTable[to][from] = cost;
    }
  }
}
