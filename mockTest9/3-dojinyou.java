/**
 * 프로그래머스 / 72412 / 순위 검색
 * https://school.programmers.co.kr/learn/courses/30/lessons/72412
 * fail: 1시간
 */

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Solution3 {
  private static final String SEPERATOR_QUERY_SCORE = " ";
  private static final String SEPERATOR_QUERY_CONDITION = " and ";
  private static final String NULL_QUERY = "-";
  List<Applicant> applicants = new ArrayList<>();

  public int[] solution(
      String[] info,
      String[] query
  ) {
    fillApplicant(info);

    return getResults(query);
  }

  private int[] getResults(String[] query) {
    int[] results = new int[query.length];

    for (int i = 0; i < query.length; i++) {
      results[i] = getResult(query[i]);
    }

    return results;
  }

  private int getResult(String query) {
    String[] splitQueryForCondition = query.split(SEPERATOR_QUERY_CONDITION);

    String programmingLanguage = splitQueryForCondition[0].equals(NULL_QUERY)
        ? null
        : splitQueryForCondition[0];
    String jobGroup = splitQueryForCondition[1].equals(NULL_QUERY)
        ? null
        : splitQueryForCondition[1];
    String career = splitQueryForCondition[2].equals(NULL_QUERY) ? null : splitQueryForCondition[2];
    String soulFood = splitQueryForCondition[3].split(SEPERATOR_QUERY_SCORE)[0];
    soulFood = soulFood.equals(NULL_QUERY) ? null : soulFood;

    int queryScore = Integer.parseInt(splitQueryForCondition[3].split(SEPERATOR_QUERY_SCORE)[1]);

    int startIdx = getIdxOverThanTestScore(queryScore);

    int count = 0;

    for (int i = startIdx; i < applicants.size(); i++) {
      if (applicants
          .get(i)
          .match(programmingLanguage, jobGroup, career, soulFood)) {
        count++;
      }
    }

    return count;
  }

  private int getIdxOverThanTestScore(int queryScore) {
    int start = 0;
    int end = applicants.size() - 1;
    int mid = (end - start) / 2;

    while (start + 1 < end) {
      if (applicants.get(mid).testScore < queryScore) {
        start = mid;
      } else {
        end = mid;
      }

      mid = (start + end) / 2;

    }

    return end;
  }

  private void fillApplicant(String[] info) {
    for (String information : info) {
      applicants.add(Applicant.of(information));
    }

    applicants.sort(Comparator.comparingInt(a -> a.testScore));
  }
}

class Applicant {
  private static final String SEPERATOR_INFORMATION = " ";
  final String programmingLanguage;
  final String jobGroup;
  final String career;
  final String soulFood;
  final int testScore;

  private Applicant(
      String programmingLanguage,
      String jobGroup,
      String career,
      String soulFood,
      int testScore
  ) {
    this.programmingLanguage = programmingLanguage;
    this.jobGroup = jobGroup;
    this.career = career;
    this.soulFood = soulFood;
    this.testScore = testScore;
  }

  public static Applicant of(String information) {
    String[] splitInformation = information.split(SEPERATOR_INFORMATION);

    return new Applicant(splitInformation[0],
                         splitInformation[1],
                         splitInformation[2],
                         splitInformation[3],
                         Integer.parseInt(splitInformation[4])
    );
  }

  public boolean match(
      String programmingLanguage,
      String jobGroup,
      String career,
      String soulFood
  ) {

    if (programmingLanguage != null && !this.programmingLanguage.equals(programmingLanguage)) {
      return false;
    }

    if (jobGroup != null && !this.jobGroup.equals(jobGroup)) {
      return false;
    }
    if (career != null && !this.career.equals(career)) {
      return false;
    }
    if (soulFood != null && !this.soulFood.equals(soulFood)) {
      return false;
    }

    return true;
  }
}
