# infynojs v1 ⚡

Eine kleine JavaScript-Library, um einfache Websites schnell zu bauen.

🌐 Website & Doku: https://js.infyno.de  
📦 Repository: https://github.com/infynojs/v1  
📄 Lizenz: MIT

---

## ❓ Was ist infynojs?

infynojs ist ein leichtgewichtiges Website-Baukasten-Framework in purem JavaScript.

Gedacht für:
- Landing Pages
- kleine Business-Websites
- Portfolios
- einfache statische Seiten

Kein Build-Step, kein Framework-Overhead, keine Konfiguration.

---

## ✨ Features

- ⚡ eine kleine JS-Datei
- 🧱 vorgefertigte Blöcke
- 🎨 simples Standard-Styling
- 📄 Seiten & Sections
- 🌍 läuft direkt im Browser

---

## 🚀 Nutzung

Datei einbinden und Seite aus Blöcken zusammensetzen.

```html
<!DOCTYPE html>
<html>
<body>
  <div id="app"></div>

  <script type="module">
    import { Page, Text, Button, Section, Hero } from "./infyno.js"

    Page({
      title: "infynojs",
      children: [
        Hero({
          title: "infynojs",
          subtitle: "Websites schnell bauen"
        }),
        Section([
          Text("Willkommen bei infynojs v1"),
          Button("Loslegen", { link: "#" })
        ])
      ]
    })
  </script>
</body>
</html>
