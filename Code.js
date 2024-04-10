var programCode = function(processingInstance) {
    with (processingInstance) {
      size(580, 380); 
      frameRate(5);
        
      // Paste code from Khan Academy here:
    draw = function() {
var n = 0;

var makeafish = function(x, y, r, g, b) {
    
    fill(r, g, b);
    bezier(x-20, y-160, x+130, y, x+150, y-280, x-20, y-120);
    fill(0, 0, 0);
    ellipse(x+80, y-150, 10, 10);
    line(x+80, y-135, x+100, y-140);
};

background(0, 255, 208);

while (n < 100) { 
    makeafish(random(0,700), random(0, 700), random(0, 255), random(0, 255), random(0,255));
    n++;
}};
}};

  // Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("mycanvas");
  
  var $canvas = $("#mycanvas");
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, programCode);
