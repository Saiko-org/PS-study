class Solution {
    
     String changeSecondToTime(long second){
        long h = second / (60 * 60);
        second = second % ( 60 * 60);
        long m = second / 60;
        second = second % 60;
        long s = second;
        return String.format("%02d:%02d:%02d",h,m,s);
    }
     int changeTimetoSecond(String s){
        String time[] = s.split(":");

        return Integer.parseInt(time[0]) * 60 * 60 + Integer.parseInt(time[1]) * 60 + Integer.parseInt(time[2]);
    }
    public String solution(String play_time, String adv_time, String[] logs) {
        
        int playTimeSecond = changeTimetoSecond(play_time);
        int advTimeSecond = changeTimetoSecond(adv_time);

        long viewers[] = new long[playTimeSecond+1];
        for(String log : logs){
            String time[] = log.split("-");

            //int startSecond = changeTimetoSecond(time[0]);
            //int endSecond = changeTimetoSecond(time[1]);

            viewers[changeTimetoSecond(time[0])]++;
            viewers[changeTimetoSecond(time[1])]--;

        }
        for(int i=1; i<=playTimeSecond; i++){
            viewers[i] += viewers[i-1];
        }
        for(int i=1; i<=playTimeSecond; i++){
            viewers[i] += viewers[i-1];
        }

        long max = viewers[advTimeSecond],startTime = 0;

        for(int i=1; i+advTimeSecond <= playTimeSecond; i++){
      
            long sum = viewers[i + advTimeSecond] - viewers[i];
            if(max < sum) {
                max = sum;
                startTime = i + 1;
            }
        }
        return changeSecondToTime(startTime);

    }
}
