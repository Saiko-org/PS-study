/**
 *  프로그래머스 / 72413 / 합승 택시 요금
 *  https://school.programmers.co.kr/learn/courses/30/lessons/72413
 *  fail: 1시간
 */

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
  int startPoint;
  int[][] fareTable;
  int[] minCostFromStart;
  Map<Integer, List<Integer>> minCostRouteFromStart;

  public int solution(
      int n,
      int s,
      int a,
      int b,
      int[][] fares
  ) {
    initFareTable(n, fares);

    updateMinCost(n, s);

    return getSumMinCost(a, b);
  }

  private int getSumMinCost(
      int a,
      int b
  ) {
    int sumCost = minCostFromStart[a] + minCostFromStart[b];
    List<Integer> routeA = minCostRouteFromStart.get(a);
    List<Integer> routeB = minCostRouteFromStart.get(b);

    int prev = startPoint;
    for (int i = 0; i < Math.min(routeA.size(), routeB.size()); i++) {
      if (routeA.get(i) != routeB.get(i)) {
        break;
      }
      sumCost -= fareTable[prev][i];
      prev = i;
    }

    return sumCost;
  }

  private void updateMinCost(
      int numOfPoints,
      int startPoint
  ) {
    this.startPoint = startPoint;
    initMinCost(numOfPoints);
    boolean[] visited = new boolean[numOfPoints + 1];
    visited[0] = true;

    updateCostAndRoute(visited, startPoint);
  }

  private void updateCostAndRoute(
      boolean[] visited,
      int currentPoint
  ) {
    visited[currentPoint] = true;
    for (int i = 1; i < fareTable[currentPoint].length; i++) {
      int cost = fareTable[currentPoint][i];

      if (cost == 0 || (currentPoint != startPoint
          && minCostFromStart[currentPoint] == Integer.MAX_VALUE)
          || minCostFromStart[i] <= minCostFromStart[currentPoint] + cost) {
        continue;
      }

      minCostFromStart[i] = minCostFromStart[currentPoint] + cost;
      List<Integer> routeCurrent = minCostRouteFromStart.get(currentPoint);
      List<Integer> routePrev = minCostRouteFromStart.get(i);

      routePrev.clear();
      routePrev.addAll(routeCurrent);
      routePrev.add(currentPoint);
    }

    int nextPoint = getMinCostPoint(visited);
    if (nextPoint != 0) {
      updateCostAndRoute(visited, nextPoint);
    }
  }

  private int getMinCostPoint(boolean[] visited) {
    int minCostPoint = 0;
    int minCost = Integer.MAX_VALUE;
    for (int i = 1; i < minCostFromStart.length; i++) {
      if (visited[i]) {
        continue;
      }

      int cost = minCostFromStart[i];
      if (cost < minCost) {
        minCost = cost;
        minCostPoint = i;
      }
    }
    return minCostPoint;
  }

  private void initMinCost(int numOfPoints) {
    minCostFromStart = new int[numOfPoints + 1];
    Arrays.fill(minCostFromStart, Integer.MAX_VALUE);
    minCostFromStart[startPoint] = 0;

    minCostRouteFromStart = new HashMap<>();
    for (int i = 1; i <= numOfPoints; i++) {
      minCostRouteFromStart.put(i, new ArrayList<>());
    }
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
