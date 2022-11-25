// 리트코드 / 155 / Min Stack
// https://leetcode.com/problems/min-stack/
// solve:

import java.util.*;

class MinStack {
    private final Stack<Integer> stack;
    private final Queue<Integer> mins;
    private int min = Integer.MAX_VALUE;

    public MinStack() {
        stack = new Stack<>();
        mins = new PriorityQueue<>();
    }
    
    public void push(int val) {
        if (min >= val) {
            mins.add(min);
            min = val;
        } 
        stack.push(val);
    }
    
    public void pop() {
        int value = stack.pop();
        System.out.println(value);
        if (min == value) {
            min = mins.poll();
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
