/**
 * 프로그래머스 / 92343 / 양과 늑대
 * https://school.programmers.co.kr/learn/courses/30/lessons/92343
 * solve: 43분
 */

import java.util.*;

class Solution {
    int answer = 0;
    public int solution(int[] info, int[][] edges) {
        Map<Integer, List<Integer>> edge = new HashMap<>();

        for (int i = 0; i < info.length; i++) {
            edge.put(i, new ArrayList<>());
        }

        for (int i = 0; i < edges.length; i++) {
            edge.get(edges[i][0]).add(edges[i][1]);
            edge.get(edges[i][1]).add(edges[i][0]);
        }

        boolean[] visited = new boolean[info.length];
        visited[0] = true;
        List<Integer> possibleNode = new ArrayList<>();
        insertPossibleNode(edge, possibleNode, 0);
        solve(0, 1, 0, edge, info, visited, possibleNode);
        return answer;
    }

    public void solve(int wolfCount, int sheepCount, int i, Map<Integer, List<Integer>> edge, int[] info, boolean visited[], List<Integer> possibleNode) {
        answer = Math.max(answer, sheepCount);

        for (int j = 0; j < possibleNode.size(); j++) {
            int n = possibleNode.get(j);
            if (visited[n]) {
                continue;
            }
            if (info[n] == 1 && wolfCount + 1 >= sheepCount) {
                continue;
            }
            visited[n] = true;
            ArrayList<Integer> tempPossibleNode = new ArrayList<>(possibleNode);
            insertPossibleNode(edge, tempPossibleNode, n);

            if (info[n] == 0) {
                solve(wolfCount, sheepCount + 1, n, edge, info, visited, tempPossibleNode);
                visited[n] = false;
                continue;
            }
            solve(wolfCount + 1, sheepCount, n, edge, info, visited, tempPossibleNode);
            visited[n] = false;
        }
    }

    public void insertPossibleNode(Map<Integer, List<Integer>> edge, List<Integer> possibleNode, int i) {
        List<Integer> nodes = edge.get(i);
        for (int j = 0; j < nodes.size(); j++) {
            int n = nodes.get(j);
            possibleNode.add(n);
        }
    }
}

