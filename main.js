const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");


function tekenBoom(x, y) {
  g.fillStyle = "green";
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x - 50, y + 100);
  g.lineTo(x + 50, y + 100);
  g.closePath();
  g.fill();

  g.fillStyle = "brown";
  g.fillRect(x - 10, y + 100, 20, 30);
}

tekenBoom(400, 200);

g.fillStyle = "red";
g.font = "40px Arial";
g.fillText("Merry Christmas", 280, 550);

