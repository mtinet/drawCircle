//이 부분의 값을 바꿔보세요.
var init_angle = document.getElementById('init_angle');
var lenthX = document.getElementById('lenthX');
var lenthY = document.getElementById('lenthY');
var changeAngleX = document.getElementById('changeAngleX');
var changeAngleY = document.getElementById('changeAngleY');

// 움직이는 좌표 초기값 설정
var moveX = 0;
var moveY = 0;

//사분면 그리기
var centerX = 300;
var centerY = 200;

//i, 각도 초기값 설정
var i = 0;
var angle = 0;

function setup() {
  createCanvas(600, 400);
  background(51);
  stroke(255);
  line(0, 200, 600, 200);
  line(300, 0, 300, 400);

  noStroke();
  fill(255, 100, 10);

  pointB(lenthX, lenthY, changeAngleX, changeAngleY);
}

function draw() {

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      pointB(lenthX, lenthY, changeAngleX, changeAngleY);
      drawF(lenthX, lenthY, changeAngleX, changeAngleY);
    }
  if (keyCode === RIGHT_ARROW) {
      pointB(lenthX, lenthY, changeAngleX, changeAngleY);
      drawB(lenthX, lenthY, changeAngleX, changeAngleY);
  }
}

function drawGraphB(moveX, moveY) {
  moveX = centerX + moveX;
  moveY = centerY + moveY;
  ellipse(moveX, moveY, 6, 6);
}

function drawGraphF(moveX, moveY) {
  moveX = centerX + moveX;
  moveY = centerY + moveY;
  ellipse(moveX, moveY, 5, 5);
}

function pointB(lenthX, lenthY, x, y) {
  for (var i = 0; i < init_angle; i++) {
    var angle = i*3.141592 / 180;

    fill(255, 100, 10);
    moveX = lenthX*cos(angle*x);
    moveY = lenthY*sin(angle*y);
    drawGraphB(moveX, moveY);
    console.log(moveX + "  " + moveY);
  }
}

function drawF(lenthX, lenthY, x, y) {
  angle = i*3.141592 / 180;
  fill(255);
  noStroke();
  moveX = lenthX*cos(angle*x);
  moveY = lenthY*sin(angle*y);
  drawGraphF(moveX, moveY);
  i -= 5;
  console.log(moveX + "  " + moveY);
}

function drawB(lenthX, lenthY, x, y) {
  angle = i*3.141592 / 180;
  fill(255);
  noStroke();
  moveX = lenthX*cos(angle*x);
  moveY = lenthY*sin(angle*y);
  drawGraphF(moveX, moveY);
  i += 5;
  console.log(moveX + "  " + moveY);
}
