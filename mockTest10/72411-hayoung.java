/**
 *  프로그래머스 / 72411 / 메뉴리뉴얼
 *  https://school.programmers.co.kr/learn/courses/30/lessons/72411
 *  solve: 
 */

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;
class Solution {
    final int MIN_MENU_SIZE = 2;
    final int MIN_ORDER_SIZE = 2;
    Map<String, Integer> map = new HashMap<>();

    public String[] solution(String[] orders, int[] course) {
        init(orders);
        List<String> list = new LinkedList<>();
        ArrayList<String> al = new ArrayList<>(map.keySet());
        Collections.sort(al, (o1, o2) -> map.get(o2) - map.get(o1));

        for (int size : course) {
            List<String> collect = al.stream()
                                    .filter(s -> s.length() == size)
                                    .filter(s -> map.get(s) >= MIN_ORDER_SIZE)
                                    .collect(Collectors.toList());
            if (collect.isEmpty()) {
                continue;
            }
            int max = map.get(collect.get(0));
            for (int i = 0; i < collect.size(); i++) {
                if (map.get(collect.get(i)) >= max) {
                    list.add(collect.get(i));
                }
            }
        }
        Collections.sort(list);
        return list.toArray(new String[0]);
    }
    public void init(String[] orders) {
        for (String order : orders) {
            combination(0, order, new boolean[order.length()]);
        }
    }
    public void combination(int i, String order, boolean choose[]) {
        if (i >= order.length()) {

            StringBuffer sb = new StringBuffer();
            for (int j = 0; j < choose.length; j++) {
                if (choose[j]) {
                    sb.append(order.charAt(j));
                }
            }
            String result = sb.toString();
            result = Stream.of(result.split(""))
                .sorted()
                .collect(Collectors.joining());

            if (result.length() < MIN_MENU_SIZE) {
                return;
            }

            if (!map.containsKey(result)) {
                map.put(result, 1);
                return;
            }
            int count = map.get(result);
            map.replace(result, count + 1);
            return;
        }

        choose[i] = true;
        combination(i + 1, order, choose);

        choose[i] = false;
        combination(i + 1, order, choose);
    }
}
