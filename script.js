function generateGrid() {
  const grid = document.getElementById("grid");
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1).sort(
    () => Math.random() - 0.5
  );
  numbers.forEach((number) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = number;
    cell.addEventListener("click", () => {
      cell.textContent = parseInt(cell.textContent) + 5;
    });
    grid.appendChild(cell);
  });
}
generateGrid();
