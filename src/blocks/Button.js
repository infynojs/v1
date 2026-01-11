export function Button(text, options = {}) {
  const el = document.createElement("a")
  el.className = "infy-button"
  el.textContent = text
  el.href = options.link || "#"
  return el
}
