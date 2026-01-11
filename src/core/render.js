export function render(elements, root) {
  root.innerHTML = ""
  elements.forEach(el => root.appendChild(el))
}
