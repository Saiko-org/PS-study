
// 리트코드  / 973 / K Closest Points to Origin
// https://leetcode.com/problems/k-closest-points-to-origin/
// solve:

import java.util.*;

class Point {
    private int x;
    private int y;
    private double distance;

    Point(int y, int x, double distance) {
        this.y = y;
        this.x = x;
        this.distance = distance;
    }

    public double getDistance() {
        return distance;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}

class Solution {
    public int[][] kClosest(int[][] points, int k) {
       
        List<Point> distances = new ArrayList<>();

        for (int i = 0; i < points.length; i++) {
            double distance = Math.sqrt((Math.pow(points[i][0] - 0, 2.0) + Math.pow(points[i][1] - 0, 2.0)));
            distances.add(new Point(points[i][1], points[i][0], distance));
        }

        Collections.sort(distances, new Comparator<Point>() {
            @Override
            public int compare(Point o1, Point o2) {
                if (o1.getDistance() > o2.getDistance()) {
                    return 1;
                }
                if (o1.getDistance() < o2.getDistance()) {
                    return -1;
                }
                return 0;
            }
        });

        int answer[][] = new int[k][2];
        for (int i = 0; i < k; i++) {
            Point p = distances.get(i);
            answer[i][0] = p.getX();
            answer[i][1] = p.getY();
        }

        return answer;
    }
}
