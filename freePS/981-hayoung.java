// 리트코드 / 981 / Time Based Key-Value Store
// https://leetcode.com/problems/time-based-key-value-store/
// solve:

class TimeMap {

  private Map<String, String> map = new HashMap<>();
  private Map<String, Integer> min = new HashMap<>();
  private Map<String, Integer> max = new HashMap<>();

  public TimeMap() {
  }

  public void set(String key, String value, int timestamp) {
    if (min.containsKey(key)) {
      int before = min.get(key);
      min.replace(key, Math.min(before, timestamp));
    } else {
      min.put(key, timestamp);
    }
    if (max.containsKey(key)) {
      int before = max.get(key);
      max.replace(key, Math.max(before, timestamp));
    } else {
      max.put(key, timestamp);
    }
    map.put(timestamp + key, value);
  }

  public String get(String key, int timestamp) {
    if (min.get(key) == null) {
      return "";
    }
    for (int t = Math.min(timestamp, max.get(key)); t >= min.get(key); t--) {
      if (map.get(t + key) != null) {
        return map.get(t + key);
      }
    }
    return "";
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.set(key,value,timestamp);
 * String param_2 = obj.get(key,timestamp);
 */
