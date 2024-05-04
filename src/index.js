import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// `;

const circleCord = [];

function circleIntersect(x1, y1, r1, x2, y2, r2) {
  return Math.hypot(x1 - x2, y1 - y2) <= r1 + r2;
}

function logIfIntersecting() {
  const firstCirc = circleCord[0];
  const secondCirc = circleCord[1];
  const x1 = firstCirc.x;
  const x2 = secondCirc.x;
  const r1 = firstCirc.radius;
  const y1 = firstCirc.y;
  const y2 = secondCirc.y;
  const r2 = secondCirc.radius;

  return circleIntersect(x1, y1, r1, x2, y2, r2);
}

document.addEventListener("click", (e) => {
  const totalCircle = document.querySelectorAll(".circle");
  if (totalCircle.length === 2) {
    totalCircle.forEach((circ) => {
      document.body.removeChild(circ);
      circleCord.shift();
    });
  }

  const x = e.clientX;
  const y = e.clientY;
  const radius = Math.floor(Math.random() * (200 - 50) + 50);

  circleCord.push({ x, y, radius });

  console.log("x=", x, "y=", y, "radius=", radius);

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.top = y - radius + "px";
  circle.style.left = x - radius + "px";
  circle.style.width = radius * 2 + "px";
  circle.style.height = radius * 2 + "px";

  document.body.appendChild(circle);

  if (circleCord.length === 2) {
    const res = logIfIntersecting();
    console.log("Intersect=", res);
  }
});
