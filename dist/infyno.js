/*!
 * infynojs v1.0.0
 * https://github.com/infynojs/v1
 * MIT License
 */

function clearRoot(root) {
  if (!root) throw new Error("infynojs: #app not found")
  root.innerHTML = ""
}

export function Page(config = {}) {
  const title = config.title || "infynojs"
  const children = config.children || []

  document.title = title

  const root = document.getElementById("app")
  clearRoot(root)

  children.forEach(el => {
    if (el instanceof HTMLElement) {
      root.appendChild(el)
    }
  })
}

export function Text(content = "") {
  const el = document.createElement("p")
  el.className = "infy-text"
  el.textContent = content
  return el
}

export function Button(text = "", options = {}) {
  const el = document.createElement("a")
  el.className = "infy-button"
  el.textContent = text
  el.href = options.link || "#"
  if (options.target) el.target = options.target
  return el
}

export function Section(children = []) {
  const el = document.createElement("section")
  el.className = "infy-section"
  children.forEach(c => c instanceof HTMLElement && el.appendChild(c))
  return el
}

export function Hero(options = {}) {
  const el = document.createElement("div")
  el.className = "infy-hero"

  if (options.title) {
    const h1 = document.createElement("h1")
    h1.textContent = options.title
    el.appendChild(h1)
  }

  if (options.subtitle) {
    const p = document.createElement("p")
    p.textContent = options.subtitle
    el.appendChild(p)
  }

  return el
}
