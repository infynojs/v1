export function Section(children = []) {
  const el = document.createElement("section")
  el.className = "infy-section"
  children.forEach(child => el.appendChild(child))
  return el
}
