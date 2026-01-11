export function Text(content) {
  const el = document.createElement("p")
  el.className = "infy-text"
  el.textContent = content
  return el
}
