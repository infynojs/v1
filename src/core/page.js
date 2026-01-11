export function Page(config) {
  document.title = config.title || "infynojs"
  const root = document.getElementById("app")
  root.innerHTML = ""
  config.children.forEach(el => root.appendChild(el))
}
