function changeColor() {
  // Generate random values for R, G, B (0–255)
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Create the RGB color string
  const randomColor = `rgb(${r}, ${g}, ${b})`;

  // Apply it to the body background
  document.body.style.backgroundColor = randomColor;
 // apply it to the text color
  document.body.style.color = randomColor;
}
