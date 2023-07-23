const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = "black";
c.fillRect(0, 0, canvas.width, canvas.height);
//dist from right, dist from top, width, height
