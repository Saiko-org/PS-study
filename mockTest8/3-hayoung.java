// 프로그래머스 / 모의테스트8-3 / 거리두기 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/81302
// 

import java.util.*;

class Solution {
    final int SIZE = 5;
    char map[][];
    
    public int[] solution(String[][] places) {
        int answer[] = new int[SIZE];
        
        for (int i = 0; i < SIZE; i++) {
          map = new char[SIZE][SIZE];
          String[] room = places[i];
          for (int j = 0; j < SIZE; j++) {
            for (int k = 0; k < SIZE; k++) {
              map[j][k] = room[j].charAt(k);
            }
          }
          answer[i] = solve();
        }
        return answer;
    }
    
    public int solve() {
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                if (map[i][j] == 'P') {
                    if (!isValid(i, j)) {
                        return 0;
                    }
                }
            }
        }
        return 1;
    }
    
    public boolean isValid(int y, int x) {

    // 위 아래 왼쪽 오른쪽 위왼 위오 아왼 아오
    int dy[] = {-1, 1, 0, 0, -2, 2, 0, 0, -1, -1, 1, 1};
    int dx[] = {0, 0, -1, 1, 0, 0, -2, 2, -1, 1, -1, 1};
    int d = dy.length;

    //위왼 위오 아왼 아오
    int partitionDy[][] = {
      {-1, 0},
      {-1, 0},
      {0, 1},
      {0, 1}
    };

    int partitionDx[][] = {
      {0, -1},
      {0, 1},
      {-1, 0},
      {1, 0}
    };

    int partition = partitionDy[0].length;

    for (int j = 0; j < d; j++) {
      int ny = y + dy[j];
      int nx = x + dx[j];

      if (isOutOfArray(ny, nx)) {
        continue;
      }

      if (map[ny][nx] != 'P') {
        continue;
      }

      if (j < 4) { // 위 아래 왼쪽 오른쪽
        return false;
      }

      if (j < 8) { // 위위, 아아, 왼왼, 오오
        if (map[y + dy[j] / 2][x + dx[j] / 2] != 'X') {
          return false;
        }
        return true;
      }
                              
      for (int k = 0; k < partition; k++) {
        if (isOutOfArray(y + partitionDy[j % 4][k], x + partitionDx[j % 4][k])) {
          return false;
        }
        if (map[y + partitionDy[j % 4][k]][x + partitionDx[j % 4][k]] != 'X') {
          return false;
        }
      }
    }
    return true;
  }

  boolean isOutOfArray(int y, int x) {
    if (y < 0 || x < 0 || y >= SIZE || x >= SIZE) {
      return true;
    }
    return false;
  }
}
