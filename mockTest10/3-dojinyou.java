/**
 *  프로그래머스 / 72411 / 메뉴리뉴얼
 *  https://school.programmers.co.kr/learn/courses/30/lessons/72411
 *  solve: 40분
 */

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {

  Map<String, Integer> menuCounter = new HashMap<>();
  List<String> newCourseMenus = new ArrayList<>();

  public String[] solution(
      String[] orders,
      int[] course
  ) {
    countOrders(orders, course);
    newCourseMenus.sort(String::compareTo);
    return newCourseMenus.toArray(String[]::new);
  }

  private void selectNewCourseMenu() {
    int maxCount = 0;
    List<String> temp = new ArrayList<>();
    for (var entrySet: menuCounter.entrySet()) {
      if (entrySet.getValue() < 2 || entrySet.getValue() < maxCount) {
        continue;
      }

      if (entrySet.getValue() > maxCount) {
        temp.clear();
        maxCount = entrySet.getValue();
      }

      temp.add(entrySet.getKey());
    }

    newCourseMenus.addAll(temp);
  }

  private void countOrders(
      String[] orders,
      int[] course
  ) {
    for (int numOfMenuInCourse : course) {
      for (String order : orders) {
        boolean[] visited = new boolean[order.length()];
        updateOrderCombination(order, visited, 0, numOfMenuInCourse);
      }
      selectNewCourseMenu();
      menuCounter.clear();
    }
  }

  private void updateOrderCombination(
      String order,
      boolean[] visited,
      int start,
      int numOfMenu
  ) {
    if (numOfMenu == 0) {
      String menu = getMenu(order, visited);
      int count = menuCounter.getOrDefault(menu, 0);
      menuCounter.put(menu, count + 1);
      return;
    }
    for (int i = start; i < order.length(); i++) {
      if (visited[i]) {
        continue;
      }
      visited[i] = true;
      updateOrderCombination(order, visited, i + 1, numOfMenu - 1);
      visited[i] = false;
    }
  }

  private String getMenu(
      String order,
      boolean[] visited
  ) {
    List<Character> menuCombination = new ArrayList<>();
    for (int i = 0; i < visited.length; i++) {
      if (visited[i]) {
        menuCombination.add(order.charAt(i));
      }
    }
    menuCombination.sort(Character::compareTo);

    StringBuilder sb = new StringBuilder();
    menuCombination.forEach(sb::append);
    return sb.toString();
  }
}
