// PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. 
// She wants to calculate the shorter angle formed between hour and minute hand at any given time.

// Note: You have to complete Minimal_Angle function. No need to take any input.

var Minimal_Angle = (h, m) => 
{
    let a= Math.abs(((11/2)*m) - (30*h));
    let b= Math.abs(360 - (30*h) + ((11/2)*m));
    
    if(a < b) {
      return a;
    }
    
    return b;   
};