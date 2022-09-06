/**
 * 프로그래머스 : 거리두기 확인
 * https://school.programmers.co.kr/learn/courses/30/lessons/81302?language=go
 * 소요시간 : 1시간 초과
 */

import java.util.*;

class Solution {

  public int[] solution(String[][] places) {

    int[] answer = new int[places.length];

    for (int i = 0 ; i < places.length ; i++) {
      answer[i] = validDistance(places[i]);
    }

    return answer;
  }

  private int validDistance(String[] place) {

    for (int i = 0 ; i < place.length ; i++) {
      for (int j = 0 ; j < place[i].length() ; j++) {

        if (place[i].charAt(j) == 'P' && !bfs(i, j, place)) {
          return 0;
        }
      }
    }

    return 1;
  }

  private boolean bfs(int r, int c, String[] place) {

    int[] dr = {-1, 0, 1, 0};
    int[] dc = {0, 1, 0, -1};


    Queue<int[]> queue = new LinkedList<>();
    queue.offer(new int[] {r, c});

    while (!queue.isEmpty()) {
      int[] coordinate = queue.poll();

      for (int i = 0 ; i < 4 ; i++) {
        int nr = coordinate[0] + dr[i];
        int nc = coordinate[1] + dc[i];

        if (nr < 0 || nc < 0 || nr >= 5 || nc >= 5 || (nr == r && nc == c)) {
          continue;
        }

        int distance = Math.abs(r - nr) + Math.abs(c - nc);

        if (place[nr].charAt(nc) == 'P' && distance <= 2) {
          return false;
        }

        if (place[nr].charAt(nc) == 'O' && distance < 2) {
          queue.offer(new int[] {nr, nc});
        }
      }
    }

    return true;
  }
}