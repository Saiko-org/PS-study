
/**
 * 프로그래머스 / 92342 / 양궁대회
 * https://school.programmers.co.kr/learn/courses/30/lessons/92342
 * add: 1시간 30분
 */

import java.util.*;


class Solution {
    int[] answer;
    int scoreDiff = 0;
    final int SCORE[] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0};
    public int[] solution(int n, int[] info) {
        answer = new int[11];
        int apeachScoreSum = 0;
        for (int s = 0; s < info.length; s++) {
            if (info[s] >= 1) {
                apeachScoreSum += SCORE[s];
            }
        }
        solve(info, 0, apeachScoreSum, 0, 0, n, new int[SCORE.length]);
        if (scoreDiff <= 0) {
            return new int[]{-1};
        }
        return answer;
    }
    public void solve(int[] info, int score, int apeachScoreSum, int lionScoreSum, int usedArrowCount, int arrowCount, int arrows[]) {
        if (usedArrowCount >= arrowCount) { // 화살 다 쏘면
            if (apeachScoreSum >= lionScoreSum) { // 어피치가 이겼다면 확인안함
                return;
            }

            if (scoreDiff > lionScoreSum - apeachScoreSum) { // 점수차이가 가장 큰 경우 확인
                return;
            }

            if (scoreDiff < lionScoreSum - apeachScoreSum) {
                scoreDiff = lionScoreSum - apeachScoreSum;
                changeAnswer(arrows);
                return;
            }

            for (int s = answer.length - 1; s >= 0; s--) { // 정답 체크
                if (answer[s] > arrows[s]) {
                    break;
                }
                if (answer[s] < arrows[s]) {
                    scoreDiff = lionScoreSum - apeachScoreSum;
                    changeAnswer(arrows);
                    break;
                }
            }
            return;
        }

        if (score >= SCORE.length) {
            return;
        }

        for (int c = 0; c <= arrowCount - usedArrowCount; c++) { 
            int lionWillGetScore = getScore(score, info[score], c); 
            arrows[score] = c; 
            if (info[score] >= 1) {
                solve(info, score + 1, apeachScoreSum - lionWillGetScore, lionScoreSum + lionWillGetScore, usedArrowCount + c, arrowCount, arrows);
            } else {
                solve(info, score + 1, apeachScoreSum, lionScoreSum + lionWillGetScore, usedArrowCount + c, arrowCount, arrows);
            }
            arrows[score] = 0;
        }

    }

    public void changeAnswer(int arrows[]) {
        for (int s = 0; s < arrows.length; s++) {
            answer[s] = arrows[s];
        }
    }

    public int getScore(int score, int apeachArrow, int lionArrow) {
        if (apeachArrow >= lionArrow) {
            return 0;
        }
        return SCORE[score];
    }
}
