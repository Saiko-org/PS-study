/**
 *  프로그래머스 / 43164 / 여행경로
 *  https://school.programmers.co.kr/learn/courses/30/lessons/43164
 *  solve: 40분
 */

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {

  final String startCity = "ICN";
  final Map<String, List<String>> ticketMap = new HashMap<>(10000);
  final Map<String, List<Boolean>> visited = new HashMap<>(10000);
  private boolean isFinished = false;

  public String[] solution(String[][] tickets) {
    initTickets(tickets);
    return getRoute(tickets.length + 1);
  }

  private String[] getRoute(int length) {
    String[] route = new String[length];
    findRoute(route, startCity, 0);
    return route;
  }

  private void findRoute(
      String[] route,
      String currentCity,
      int depth
  ) {
    route[depth] = currentCity;

    if (depth == route.length - 1) {
      isFinished = true;
      return;
    }

    if (!ticketMap.containsKey(currentCity)) {
      return;
    }

    List<String> nextCities = ticketMap.get(currentCity);

    for (int i = 0; i < nextCities.size(); i++) {
      if (this.visited
          .get(currentCity)
          .get(i)) {
        continue;
      }
      String nextCity = nextCities.get(i);
      this.visited
          .get(currentCity)
          .set(i, true);
      findRoute(route, nextCity, depth + 1);
      if (isFinished) {
        break;
      }
      this.visited
          .get(currentCity)
          .set(i, false);
    }
  }

  private void initTickets(String[][] tickets) {
    for (String[] ticket : tickets) {
      String from = ticket[0];
      String to = ticket[1];

      if (!this.ticketMap.containsKey(from)) {
        this.ticketMap.put(from, new ArrayList<>());
        this.visited.put(from, new ArrayList<>());
      }

      List<String> ticketsForFrom = this.ticketMap.get(from);
      List<Boolean> visitedForFrom = this.visited.get(from);

      ticketsForFrom.add(to);
      visitedForFrom.add(false);
    }

    for (List<String> value : ticketMap.values()) {
      value.sort(String::compareTo);
    }
  }
}
