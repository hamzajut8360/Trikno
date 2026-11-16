# Trikno Giessmaschinen – Interactive Presentation & Portfolio

An interactive, high-fidelity web presentation for **Trikno AG** chocolate moulding and dosing machinery (*Giessmaschinen*), featuring the **Omega Compact**, **Alpha**, **Eta**, and related series.

Based on the interactive digital catalog at [level-east.ch/transfer/trikno](https://www.level-east.ch/transfer/trikno/).

---

## 🚀 Features

- **Interactive Multi-Slide Presentation:**
  - **Slide 1:** Full-screen background intro video showcase (`Test_Video.mp4`), animated headline *Giessmaschinen: Modular, kraftvoll und erweiterbar*, and start navigation.
  - **Slide 2:** Detailed spotlight on **Omega Compact** machine with interactive controls, machine specs, technical datasheet download, and video demonstration modal.
  - **Slide 3:** **Eigenschaften** (Features & Properties) with animated interactive highlights.
  - **Slide 4:** **Varianten** (Machine configurations & models).
  - **Slide 5:** **Optionen** (Custom add-ons & technical options).
  - **Slide 6:** **Anwendung** (Applications & production methods).
- **Embedded Media & Assets:**
  - 🎥 Background video loop & Omega Compact demonstration video (`assets/media/Test_Video.mp4`).
  - 📄 Complete German Technical Datasheet PDF (`assets/media/260909_Technisches_Datenblatt_TCM_Omega.pdf`).
  - 🎨 100+ high-resolution graphics, SVG typography, and machine imagery.
- **Interactive Video Modal:**
  - Built-in responsive video lightbox popup with smooth blur backdrop, HTML5 playback controls, and keyboard shortcut dismissal (`Esc`).
- **Offline / Standalone:**
  - Completely self-contained with zero external runtime network dependencies.

---

## 💻 Quick Start / Local Setup

Clone the repository and serve using any local HTTP web server:

```bash
# Clone the repository
git clone https://github.com/HasnainAli56/Trikno-Portfolio.git
cd Trikno-Portfolio

# Start a local Python HTTP server
python -m http.server 8080
```

Then open your browser at:
```
http://localhost:8080/
```

---

## 📂 Project Structure

```
├── index.html                  # Main interactive presentation entry point
├── README.md                   # Project documentation
├── style.css                   # Custom presentation styles
├── script.js                   # Custom application logic
├── assets/
│   ├── css/                    # Core stylesheets (in5 slider, pages, mediaelement)
│   ├── js/                     # Presentation engine, scaling logic & navigation scripts
│   ├── images/                 # SVG text assets, UI icons, and machine photos
│   └── media/                  # Video assets (Test_Video.mp4) & Datasheet PDF
└── tools/                      # Development & asset verification scripts
```

---

## 🛠️ Technologies Used

- HTML5 / CSS3 / JavaScript
- In5 Presentation Framework & AnythingSlider
- MediaElement.js
- Scalable Vector Graphics (SVG)
