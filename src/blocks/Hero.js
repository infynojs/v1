export function Hero({ title, subtitle }) {
  const el = document.createElement("div")
  el.className = "infy-hero"

  const h1 = document.createElement("h1")
  h1.textContent = title

  const p = document.createElement("p")
  p.textContent = subtitle

  el.append(h1, p)
  return el
}
