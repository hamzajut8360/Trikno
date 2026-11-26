const products = [
  {
    id: "omega-compact",
    name: "Omega Compact",
    fullName: "TCM Omega compact",
    kicker: "Kleiner, handlicher, mobiler",
    category: "Giessmaschinen",
    image: "assets/img/Produkte/Omega-compact-clean.png",
    cutoutImage: "assets/img/Produkte/Omega-compact-diagram.png",
    pdf: "/assets/pdf/TCM-Omega Compact_Technisches Datenblatt.pdf",
    video: "assets/media/products/trikno omega compact sept26 video.mp4",
    lead: "Das perfekte Werkzeug für den Confiseur – ideal geeignet für handwerkliche Betriebe mit Formen bis 405 mm.",
    description: "Die Omega Compact ist das perfekte Werkzeug für den Confiseur. Sie ist dank ihrer Rollen mobil einsetzbar.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "Die Omega Compact gibt es mit einseitigem Trichter als Single (Omega Compact 9) oder mit zwei Trichtern als Boxer (Omega Compact 9/18) für One Shot Anwendungen.",
    hasCustomLayout: true,
    diagramTitleUSP: "TCM Omega compact USP's",
    diagramTitleVariants: "TCM Omega Compact Varianten",
    diagramImage: "assets/img/Produkte/Omega-compact-diagram.png",
    usps: [
      { id: "usp-hmi", title: "Einfach bedienbar:", desc: "15.6\" neigbares HMI der neuen Generation", pos: "left", dot: { x: 14.0, y: 16.0 } },
      { id: "usp-mobility", title: "Frei beweglich:", desc: "Griffe und Räder für Verschiebung", pos: "left", dot: { x: 25.0, y: 40.0 } },
      { id: "usp-belt", title: "Grosses Einsatzgebiet:", desc: "405 mm Backblechbreite", pos: "left", dot: { x: 25.0, y: 46.0 } },
      { id: "usp-footprint", title: "20% Weniger Platzbedarf:", desc: "Kleinerer Footprint (wie CCM 9)", pos: "left", dot: { x: 25.0, y: 69.0 } },
      { id: "usp-door", title: "Praktischer Zugang:", desc: "Flügeltüre mit Gasdruckfeder", pos: "right", dot: { x: 88.0, y: 17.0 } },
      { id: "usp-hopper", title: "Einfaches Handling:", desc: "Leichte und symmetrische Trichter", pos: "right", dot: { x: 73.0, y: 24.0 } },
      { id: "usp-oneshot", title: "80 g One-Shot Produkte:", desc: "durch 52 mm Hub", pos: "right", dot: { x: 68.0, y: 35.0 } },
      { id: "usp-value", title: "Preis-Leistungs-Stark:", desc: "10% günstiger als Omega", pos: "right", dot: { x: 65.0, y: 63.0 } }
    ],
    variantsCustom: [
      { id: "var-execution", title: "Ausführungen Z", desc: "Single oder Boxer", pos: "left", dot: { x: 68.0, y: 5.0 } },
      { id: "var-screen", title: "Bildschirm", desc: "li oder re", pos: "left", dot: { x: 9.0, y: 16.0 } },
      { id: "var-belt", title: "Bandlauf", desc: "li → re oder re → li", pos: "left", dot: { x: 29.0, y: 46.0 } },
      { id: "var-modem", title: "Modem", desc: "LAN oder WLAN", pos: "left", dot: { x: 26.0, y: 72.0 } },
      { id: "var-piston", title: "Kolben-ø", desc: "3er-Büchsen (ø10, ø17, ø25 oder ø30)", pos: "right", dot: { x: 71.0, y: 30.0 } },
      { id: "var-plate", title: "Düsenplatte", desc: "Kundenspezifisch (Abstand, Art, Anzahl, Position)", pos: "right", dot: { x: 68.0, y: 36.0 } },
      { id: "var-nozzles", title: "Düsen", desc: "Kundenspezifisch (Solid, OS, Schwenk)", pos: "right", dot: { x: 66.0, y: 39.0 } }
    ],
    optionsCustom: [
      "Geteilter Trichter bei Schokoladen- oder Füllungsseite für Triple Shot: 1 Füllung / 2 Schalen ODER 2 Füllungen / 1 Schale",
      "Diverse Düsen und Düsenplatten (Bsp. Schleierdüse, Schwenkdüse, One Shot, ...)"
    ],
    applicationCustom: {
      title: "TCM Omega compact",
      subtitle: "Die perfekte Einstiegs-Giessmaschine",
      specsTitle: "Z-Ausführung",
      specs: [
        { label: "Maschinentyp:", value: "TCM 9 oder TCM 9/18" },
        { label: "Z-Achse:", value: "100 mm" },
        { label: "Kolbenhub:", value: "52 mm" },
        { label: "Büchsenbreite:", value: "35 mm (105 mm als 3er Block)" },
        { label: "Kolben-ø:", value: "10, 17, 25 und 30 mm" }
      ],
      products: [
        {
          title: "100g Tafel",
          stat1: "7'200 Tafeln/h",
          stat2: "720 kg/h",
          image: "assets/img/Applikationen/Solid.png"
        },
        {
          title: "10g Praline",
          stat1: "8'640 Pralinen/h",
          stat2: "86.4 kg/h",
          image: "assets/img/Applikationen/One-Shot.jpg"
        }
      ]
    },
    characteristics: [
      "Formenbreite bis 405 mm",
      "Kompakte Stellfläche auf Rollen, mobil im Betrieb",
      "Beheizter Trichter mit präziser Temperaturregelung",
      "One-Shot-fähig für gefüllte Pralinen in einem Arbeitsschritt",
      "Touchscreen-Steuerung mit über 100 Rezepturspeichern",
      "Werkzeuglose Zerlegung & hygienische Reinigung in unter 5 Minuten"
    ],
    specs: [
      { label: "Formenbreite", value: "Bis 405 mm" },
      { label: "Taktleistung", value: "Bis zu 25 Takte/Min." },
      { label: "Dosierbereich", value: "0.5 g bis 80 g pro Düse" },
      { label: "Trichtervolumen", value: "15 bis 30 Liter" },
      { label: "Steuerung", value: "Farb-Touchpanel mit Rezepturverwaltung" },
      { label: "Mobilität", value: "Fahrbar mit Feststellbremsen" }
    ],
    variantsDetail: [
      { name: "Omega Compact 9 (Single)", desc: "Einseitiger beheizter Trichter mit 9 Dosierkolben für klassisches Massivgiessen und Plattenproduktion." },
      { name: "Omega Compact 9/18 (Boxer)", desc: "Zwei getrennte Trichterkammern für One-Shot-Dosierung (Hülle und Kern zeitgleich) sowie zweifarbige Kreationen." }
    ],
    options: [
      "Geteilter Trichter bei Schokoladen- oder Füllungsseite für Triple Shot: 1 Füllung / 2 Schalen ODER 2 Füllungen / 1 Schale",
      "Diverse Düsen und Düsenplatten (Bsp. Schleierdüse, Schwenkdüse, One Shot, ...)"
    ],
    applications: [
      { title: "One-Shot Pralinen", desc: "Hülle und cremige Füllung präzise in einem einzigen Arbeitsgang gegossen." },
      { title: "Tafelschokolade", desc: "Exakte Grammatur für Vollmilch-, Zartbitter- und weisse Schokolade." }
    ]
  },
  {
    id: "omega",
    name: "Omega",
    kicker: "Klein, handlich, mobil",
    category: "Giessmaschinen",
    image: "assets/img/Produkte/Omega_9-18-clean.png",
    cutoutImage: "assets/img/Produkte/Omega_9-18-clean.png",
    diagramImage: "assets/img/Produkte/Omega_9-18-clean.png",
    variantsDiagramImage: "assets/img/Produkte/Omega-varianten-diagram.png",
    pdf: "/assets/pdf/TCM-Omega_Technisches Datenblatt.pdf",
    video: "assets/media/products/Omega.mp4",
    lead: "Das perfekte Werkzeug für den Confiseur – dank Rollen mobil einsetzbar.",
    description: "Die Omega ist die bewährte Giessmaschine für den professionellen Confiseriebetrieb mit höheren Durchsatzraten und modularer Zufuhr.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "Erhältlich als Single- oder Boxer-Ausführung mit variablen Kolbendurchmessern für flüssige Ganachen bis hochviskose Nuss-Nougat-Massen.",
    hasCustomLayout: true,
    diagramTitleUSP: "TCM Omega USP's",
    diagramTitleVariants: "TCM Omega Varianten",
    usps: [
      { id: "water", pos: "left", title: "Wassertropfschmierung", desc: "für stark zuckerhaltige Massen", dot: { x: 39.4, y: 48.3 } },
      { id: "versatile", pos: "left", title: "Vielseitig anwendbar:", desc: "für OS oder Solids", dot: { x: 44.4, y: 50.1 } },
      { id: "robust", pos: "left", title: "Robust:", desc: "solide Bauweise", dot: { x: 38.1, y: 80.3 } },
      { id: "proven", pos: "right", title: "Bewährt seit 20 Jahren", desc: "200 zufriedene Kunden", dot: { x: 65.9, y: 24.9 } },
      { id: "temp", pos: "right", title: "Temperaturstabil:", desc: "durch doppelwandige Trichter", dot: { x: 63.3, y: 29.8 } },
      { id: "single-piston", pos: "right", title: "Einzelkolbensystem:", desc: "35er Büchsen", dot: { x: 57.0, y: 37.9 } }
    ],
    variantsCustom: [
      { id: "exec", pos: "left", title: "Ausführungen Z", desc: "Single oder Boxer", dot: { x: 65.5, y: 19.2 } },
      { id: "screen", pos: "left", title: "Bildschirm", desc: "li oder re", dot: { x: 14.0, y: 31.4 } },
      { id: "belt", pos: "left", title: "Bandlauf", desc: "li → re oder re → li", dot: { x: 40.0, y: 51.2 } },
      { id: "modem", pos: "left", title: "Modem", desc: "LAN oder WLAN", dot: { x: 30.0, y: 77.3 } },
      { id: "hopper", pos: "right", title: "Trichter", desc: "doppelwandig, einwandig oder niedrig", dot: { x: 72.0, y: 16.6 } },
      { id: "pistons", pos: "right", title: "Kolben", desc: "in ø10, ø20 oder ø25", dot: { x: 60.0, y: 35.2 } },
      { id: "nozzle-plate", pos: "right", title: "Düsenplatte", desc: "Kundenspezifisch (Abstand, Art, Anzahl, Position)", dot: { x: 65.5, y: 45.8 } },
      { id: "nozzles", pos: "right", title: "Düsen", desc: "Kundenspezifisch (Solid, OS, Schwenk)", dot: { x: 64.0, y: 48.5 } }
    ],
    optionsCustom: [
      "Doppelwandiger Trichter auch für Füllungsseite",
      "Kolben-Schmiersystem für zuckerbasierte Massen (Tröpfchen-Schmierung)",
      "Lineares Rührwerk für einen oder beide Trichter",
      "Geteilter Trichter bei Schokoladen- oder Füllungsseite für Triple Shot: 1 Füllung / 2 Schalen ODER 2 Füllungen / 1 Schale",
      "Diverse Düsen und Düsenplatten (Bsp. Schleierdüse, Schwenkdüse, One Shot, ...)"
    ],
    applicationCustom: {
      title: "TCM Omega",
      subtitle: "Klein, handlich, mobil",
      specsTitle: "Z-Ausführung",
      specs: [
        { label: "Maschinentyp:", value: "TCM 9 oder TCM 9/18" },
        { label: "Z-Achse:", value: "100 mm" },
        { label: "Kolbenhub:", value: "32 mm" },
        { label: "Büchsenbreite:", value: "35 mm" },
        { label: "Kolben-ø:", value: "10, 20 und 25 mm" }
      ],
      products: [
        { title: "100g Tafel", stat1: "3'600 Tafeln/h", stat2: "360 kg/h", image: "assets/img/Applikationen/Solid.png" },
        { title: "10g Praline", stat1: "8'640 Pralinen/h", stat2: "86.4 kg/h", image: "assets/img/Applikationen/One-Shot.jpg" }
      ]
    },
    characteristics: [
      "Präzisions-Servomotoren für höchste Wiederholgenauigkeit",
      "Robuste Edelstahlausführung nach GMP-Richtlinien",
      "Vollautomatischer Formenförderer mit Taktsteuerung",
      "One-Shot und Triple-Shot fähig",
      "Rezepturverwaltung über modernes Farb-Touchdisplay"
    ],
    specs: [
      { label: "Formenbreite", value: "Bis 425 mm" },
      { label: "Taktleistung", value: "Bis zu 30 Takte/Min." },
      { label: "Dosiergenauigkeit", value: "+/- 0.2 g" },
      { label: "Trichterheizung", value: "Elektrisch stufenlos regulierbar" }
    ],
    variantsDetail: [
      { name: "Omega Single", desc: "Ein Trichter für unifarbene Schokoladen und Massivprodukte." },
      { name: "Omega Boxer 9/18", desc: "Doppeltrichter für One-Shot-Pralinen mit flüssigem oder halbfestem Kern." }
    ],
    options: [
      "Servogesteuertes Hebe-/Senkband für Bodenkontakt-Dosierung",
      "Heizbare Kolbeneinheiten",
      "Spezialdüsen für Tropfen und Riegel"
    ],
    applications: [
      { title: "Gefüllte Confiserie", desc: "Pralinen mit feinsten Likör-, Frucht- und Nougatfüllungen." },
      { title: "Schokoladentafeln", desc: "Grossserienproduktion von 50g bis 300g Tafeln." }
    ]
  },
  {
    id: "alpha-compact",
    name: "Alpha compact",
    kicker: "Platzsparend & Leistungsstark",
    category: "Giessmaschinen",
    image: "assets/img/Produkte/Alpha Compact Z 9-18-35-clean.png",
    cutoutImage: "assets/img/Produkte/Alpha Compact Z 9-18-35-clean.png",
    diagramImage: "assets/img/Produkte/Alpha Compact Z 9-18-35-clean.png",
    pdf: "/assets/pdf/TCM-Alpha Compact_Technisches Datenblatt.pdf",
    video: "https://www.youtube.com/playlist?list=PLJ2T3_x-XuTU",
    youtubePlaylist: "https://www.youtube.com/playlist?list=PLJ2T3_x-XuTU",
    youtubeVideos: [
      { id: "MZMBirXAaGA", title: "Curtain One-Shot" },
      { id: "D2Ae4B-54jo", title: "One-Shot Transfer Sheet" },
      { id: "PS_WdaBkYcQ", title: "Alpha Compact (Step 1 Line)" }
    ],
    lead: "Die kompakte High-Speed Giessmaschine – optimal für One-Shot gefüllte Produkte und begrenzte Platzverhältnisse.",
    description: "Die Alpha compact vereint Schweizer Hochleistungstechnologie im kompakten Format. Konzipiert für anspruchsvolle Confiseure und mittelständische Produktionen.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "Verfügbar in den Konfigurationen Alpha Compact Z 9-18-35 mit servogesteuerten Dosiereinheiten für One-Shot und Triple-Shot.",
    hasCustomLayout: true,
    diagramTitleUSP: "TCM Alpha Compact USP's",
    diagramTitleVariants: "TCM Alpha Compact Varianten",
    usps: [
      { id: "variable", pos: "left", title: "Variabel einsetzbar:", desc: "45er Büchsen mit 1 oder 2 Kolben", dot: { x: 51.1, y: 39.8 } },
      { id: "fit1", pos: "left", title: "Perfect fit 1:", desc: "Bandhöhe verstellbar", dot: { x: 35.5, y: 57.5 } },
      { id: "moulds", pos: "left", title: "Grosses Einsatzgebiet:", desc: "bis zu 517 mm breite Formen", dot: { x: 34.4, y: 60.0 } },
      { id: "robust", pos: "left", title: "Robust:", desc: "Solide Bauweise", dot: { x: 45.5, y: 72.3 } },
      { id: "compact", pos: "right", title: "Kompakt und vielseitig:", desc: "von 9 bis 24/48 Kolben", dot: { x: 72.2, y: 19.0 } },
      { id: "multishot", pos: "right", title: "Multiple Shot:", desc: "durch Trennwände in Trichter", dot: { x: 68.0, y: 30.3 } },
      { id: "oneshot80", pos: "right", title: "80 g One-Shot Produkte:", desc: "durch 52 mm Hub", dot: { x: 63.6, y: 42.8 } },
      { id: "fit2", pos: "right", title: "Perfect fit 2:", desc: "Bandlänge wählbar für Retrofit", dot: { x: 42.8, y: 61.2 } }
    ],
    variantsCustom: [
      { id: "exec", pos: "left", title: "Ausführungen Z", desc: "Single oder Boxer", dot: { x: 42.8, y: 33.7 } },
      { id: "screen", pos: "left", title: "Bildschirm", desc: "li oder re", dot: { x: 28.1, y: 40.0 } },
      { id: "belt", pos: "left", title: "Bandlauf", desc: "li → re oder re → li", dot: { x: 34.4, y: 60.0 } },
      { id: "modem", pos: "left", title: "Modem", desc: "LAN oder WLAN", dot: { x: 39.9, y: 71.1 } },
      { id: "hopper", pos: "right", title: "Trichter", desc: "doppelwandig, einwandig oder niedrig", dot: { x: 65.0, y: 27.7 } },
      { id: "bushing", pos: "right", title: "Büchsenbreite (mm):", desc: "35 (Hub 52) oder 45 (Hub 60)", dot: { x: 70.5, y: 39.4 } },
      { id: "pistons", pos: "right", title: "Kolben-ø", desc: "10, 17, 25 oder 30 (35er) / 10, 20, 25 oder 30 (45er)", dot: { x: 70.5, y: 42.8 } },
      { id: "nozzle-plate", pos: "right", title: "Düsenplatte", desc: "Kundenspezifisch (Abstand, Art, Anzahl, Position)", dot: { x: 66.3, y: 47.5 } },
      { id: "nozzles", pos: "right", title: "Düsen", desc: "Kundenspezifisch (Solid, OS, Schwenk)", dot: { x: 66.3, y: 49.1 } }
    ],
    optionsCustom: [
      "Doppelwandiger Trichter auch für Füllungsseite",
      "Kolben-Schmiersystem für eine oder beide Kolbenseiten",
      "Lineares Rührwerk für einen oder beide Trichter",
      "Triple Shot (1 Füllung / 2 Schalen ODER 2 Füllungen / 1 Schale)",
      "Steuerung von Folgemaschine (z.B. Vibrationstisch) über Bedienpanel möglich"
    ],
    applicationCustom: {
      title: "TCM Alpha compact",
      subtitle: "Platzsparend",
      specsTitle: "Z-Ausführung",
      specs: [
        { label: "Maschinentyp:", value: "TCM 9 bis TCM 24/48" },
        { label: "Z-Achse:", value: "100 mm" },
        { label: "Kolbenhub:", values: ["52 mm", "60 mm"] },
        { label: "Büchsenbreite:", values: ["35 mm", "45 mm"] },
        { label: "Kolben-ø:", values: ["10, 17, 25 und 30 mm", "10, 17, 25 und 30 mm"] }
      ],
      products: [
        { title: "100g Tafel", stat1: "12'240 Tafeln/h", stat2: "1'240 kg/h", image: "assets/img/Applikationen/Solid.png" },
        { title: "10g Praline", stat1: "28'800 Pralinen/h", stat2: "288 kg/h", image: "assets/img/Applikationen/One-Shot.jpg" }
      ]
    },
    characteristics: [
      "Kompakter Footprint bei maximaler Linienleistung",
      "Hochdynamische Servomotoren für extreme Taktzahlen",
      "Integrierte Formenwärmung und Bandreinigung",
      "Patentiertes Düsensystem gegen Nachtropfen"
    ],
    specs: [
      { label: "Formenbreite", value: "Bis 450 mm" },
      { label: "Taktleistung", value: "Bis zu 35 Takte/Min." },
      { label: "Dosiersystem", value: "Servogesteuerte Drehschieber" }
    ],
    variantsDetail: [
      { name: "Alpha Compact Z", desc: "Kompaktbauweise mit integrierter Liniensteuerung." },
      { name: "Alpha Compact One-Shot", desc: "Maximale Flexibilität für zentrierte Kernfüllungen." }
    ],
    options: [
      "Infrarot-Formenvorwärmung",
      "Automatischer Trichter-Nachfüllsensor",
      "CIP-Vorreinigungssystem"
    ],
    applications: [
      { title: "One-Shot Spezialitäten", desc: "Gleichzeitiges Giessen von Schale und Füllung mit 60% Füllanteil." },
      { title: "Zweifarbige Deko", desc: "Marmoriertes und gestreiftes Giessen." }
    ]
  },
  {
    id: "alpha",
    name: "Alpha",
    kicker: "Die flexibelste High-End Giessanlage",
    category: "Giessmaschinen",
    image: "assets/img/Produkte/Alpha X HD 48-96-30-2-clean.png",
    cutoutImage: "assets/img/Produkte/Alpha X HD 48-96-30-2-clean.png",
    diagramImage: "assets/img/Produkte/Alpha X HD 48-96-30-2-clean.png",
    pdf: "/assets/pdf/TCM-Alpha_Technisches Datenblatt.pdf",
    video: "https://www.youtube.com/playlist?list=PLJ2T3_x-XuTU",
    youtubePlaylist: "https://www.youtube.com/playlist?list=PLJ2T3_x-XuTU",
    youtubeVideos: [
      { id: "MZMBirXAaGA", title: "Curtain One-Shot" },
      { id: "D2Ae4B-54jo", title: "One-Shot Transfer Sheet" },
      { id: "PS_WdaBkYcQ", title: "Alpha Compact (Step 1 Line)" }
    ],
    lead: "Die Referenz für höchste Anforderungen im industriellen Bereich und in grossen Confiserien.",
    description: "Die Alpha ist das Flaggschiff unter den Giessmaschinen. Mit unübertroffener Flexibilität meistert sie selbst anspruchsvollste Dekorations- und Dosiermuster.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "Von der Alpha HD 48 bis zur Großserienanlage HD 96 für kontinuierlichen 24/7 Mehrschichtbetrieb in vollautomatisierten Produktionsstrassen.",
    hasCustomLayout: true,
    subModes: [
      {
        key: "standard",
        label: "Standard",
        pdf: "/assets/pdf/TCM-Alpha_Technisches Datenblatt.pdf",
        diagramTitleUSP: "TCM Alpha USP's",
        diagramTitleVariants: "TCM Alpha Varianten",
        usps: [
          { id: "axes", pos: "left", title: "1-, 2- oder als 3-achser:", desc: "Z, X und CAD", dot: { x: 37.7, y: 40.4 } },
          { id: "changeover", pos: "left", title: "Schnelle Umrüstzeiten", desc: "Kolben, Düsen und Düsenplatten", dot: { x: 43.7, y: 50.6 } },
          { id: "moulds", pos: "left", title: "Formbreiten bis 650 mm", desc: "", dot: { x: 40.5, y: 55.7 } },
          { id: "volume", pos: "left", title: "Volumen von 0.1g bis 1.1kg", desc: "Fast unendliche Kolbenkombinationen", dot: { x: 52.2, y: 44.9 } },
          { id: "configurable", pos: "right", title: "Konfigurierbar", desc: "Von 1 Schleierdüse für OS bis 192 Kolben für Dekor", dot: { x: 61.2, y: 41.6 } },
          { id: "transparency", pos: "right", title: "Komplette Transparenz", desc: "durch Makrolon® Türen", dot: { x: 74.7, y: 40.1 } },
          { id: "stroke", pos: "right", title: "60 mm Hub", desc: "individuell aktivierbar", dot: { x: 60.4, y: 48.1 } },
          { id: "touch", pos: "right", title: "21.5'' Touch Panel", desc: "frei beweglich", dot: { x: 63.5, y: 63.6 } }
        ],
        variantsCustom: [
          { id: "exec", pos: "left", title: "Ausführungen Z, X, CAD", desc: "Single oder Boxer", dot: { x: 43.0, y: 34.4 } },
          { id: "hopper", pos: "left", title: "Trichter", desc: "doppelwandig, einwandig oder niedrig", dot: { x: 53.5, y: 42.1 } },
          { id: "belt", pos: "left", title: "Bandlauf", desc: "li → re oder re → li", dot: { x: 35.8, y: 56.7 } },
          { id: "modem", pos: "left", title: "Modem", desc: "LAN oder WLAN", dot: { x: 40.5, y: 66.2 } },
          { id: "bushing", pos: "right", title: "Büchsenbreite (mm):", desc: "35 (Hub 52), 30 oder 45 (Hub 60)", dot: { x: 63.4, y: 40.2 } },
          { id: "pistons", pos: "right", title: "Kolben-ø", desc: "6..30 (35er) / 6..16 (30er) / 6..30 (45er)", dot: { x: 63.4, y: 42.8 } },
          { id: "nozzle-plate", pos: "right", title: "Düsenplatte", desc: "Kundenspezifisch (Abstand, Art, Anzahl, Position)", dot: { x: 63.0, y: 46.1 } },
          { id: "nozzles", pos: "right", title: "Düsen", desc: "Kundenspezifisch (Solid, OS, Schwenk)", dot: { x: 63.0, y: 47.5 } }
        ],
        optionsCustom: [
          "Doppelwandiger Trichter auch für Füllungsseite",
          "Kolben-Schmiersystem für eine oder beide Kolbenseiten",
          "Unterschiedliche Rührwerksysteme für einen oder beide Trichter",
          "Triple Shot (1 Füllung / 2 Schalen ODER 2 Füllungen / 1 Schale)",
          "Quatro Shot (2 Füllungen / 2 Schalen)",
          "Steuerung von Folgemaschine (z.B. Vibrationstisch) über Bedienpanel möglich",
          "Y 300 mm (Standard 150)",
          "RFID für Formerkennung"
        ],
        applicationCustom: {
          title: "TCM Alpha",
          subtitle: "Gut zum Dekorieren geeignet",
          specsTitle: "Z-/X- oder CAD-Ausführung",
          specs: [
            { label: "Maschinentyp:", value: "TCM 9 bis 96/192" },
            { label: "Z- / X- und Y-Achse:", value: "150 mm / 300 mm / 150 mm" },
            { label: "Kolbenhub:", values: ["52 mm", "60 mm", "60 mm"] },
            { label: "Büchsenbreite:", values: ["35 mm", "30 mm", "45 mm"] },
            { label: "Kolben-ø:", values: ["6, 8, 10, 17, 25 oder 30 mm", "6, 8, 10 und 16 mm", "6, 8, 10, 20, 25 und 30 mm"] }
          ],
          products: [
            { title: "100g Tafel", stat1: "16'320 Tafeln/h", stat2: "1'632 kg/h", image: "assets/img/Applikationen/Solid.png" },
            { title: "10g Praline", stat1: "86'400 Pralinen/h", stat2: "864 kg/h", image: "assets/img/Applikationen/One-Shot.jpg" }
          ]
        }
      },
      {
        key: "nuss",
        label: "Nuss (Hybrid)",
        pdf: "/assets/pdf/TCM-Alpha Nuss_Technisches Datenblatt.pdf",
        video: "assets/media/products/Nuss-I_Piston_EN_4k.mp4",
        diagramTitleUSP: "TCM Alpha Nuss USP's",
        diagramTitleVariants: "TCM Alpha Nuss Varianten",
        usps: [
          { id: "axes", pos: "left", title: "1-, 2- oder als 3-achser:", desc: "Z, X und CAD", dot: { x: 27.1, y: 40.5 } },
          { id: "changeover", pos: "left", title: "Schnelle Umrüstzeiten", desc: "Kolben, Düsen und Düsenplatten", dot: { x: 43.7, y: 43.7 } },
          { id: "moulds", pos: "left", title: "Formbreiten bis 650 mm", desc: "", dot: { x: 40.5, y: 55.7 } },
          { id: "volume", pos: "left", title: "Volumen bis zu 1.1kg", desc: "Anteil Inklusionen bis 40%", dot: { x: 52.2, y: 44.9 } },
          { id: "hybrid", pos: "right", title: "Hybrid Variante bei NI", desc: "Einseitig für Inklusionen", dot: { x: 60.8, y: 46.5 } },
          { id: "transparency", pos: "right", title: "Komplette Transparenz", desc: "durch Makrolon® Türen", dot: { x: 73.4, y: 40.1 } },
          { id: "pistons70", pos: "right", title: "Bis zu Kolben-ø70 mm", desc: "individuell aktivierbar", dot: { x: 59.0, y: 48.1 } },
          { id: "touch", pos: "right", title: "21.5'' Touch Panel", desc: "frei beweglich", dot: { x: 62.1, y: 63.6 } }
        ],
        variantsCustom: [
          { id: "exec", pos: "left", title: "Ausführungen Z, X, CAD", desc: "Single oder Boxer", dot: { x: 43.0, y: 34.4 } },
          { id: "hopper", pos: "left", title: "Trichter", desc: "doppelwandig, einwandig, mit/ohne Rührwerk", dot: { x: 53.5, y: 42.1 } },
          { id: "belt", pos: "left", title: "Bandlauf", desc: "li → re oder re → li", dot: { x: 35.8, y: 56.7 } },
          { id: "modem", pos: "left", title: "Modem", desc: "LAN oder WLAN", dot: { x: 40.5, y: 66.2 } },
          { id: "bushing", pos: "right", title: "Büchsenbreite (mm):", desc: "45 oder 90 (Hub 70)", dot: { x: 66.5, y: 39.2 } },
          { id: "pistons", pos: "right", title: "Kolben-ø", desc: "20, 30 oder 40 (45er) / 50, 60 oder 70 (90er)", dot: { x: 66.5, y: 42.1 } },
          { id: "nozzle-plate", pos: "right", title: "Düsenplatte", desc: "Kundenspezifisch (Abstand, Art, Anzahl, Position)", dot: { x: 63.0, y: 46.1 } },
          { id: "nozzles", pos: "right", title: "Düsen", desc: "Kundenspezifisch (Solid, OS, Schwenk)", dot: { x: 63.0, y: 47.5 } }
        ],
        optionsCustom: [
          "Kolben-Schmiersystem für eine oder beide Kolbenseiten",
          "Unterschiedliche Rührwerksysteme für einen oder beide Trichter",
          "Triple Shot (1 Füllung / 2 Schalen ODER 2 Füllungen / 1 Schale)",
          "Quatro Shot (2 Füllungen / 2 Schalen)",
          "Steuerung von Folgemaschine (z.B. Vibrationstisch) über Bedienpanel möglich",
          "Y 300 mm (Standard 150)",
          "Bandlaufrichtung von links nach rechts oder rechts nach links",
          "RFID für Formerkennung",
          "Hybridmaschine (1 Schokoseite, 1 Nussseite) oder als Nussmaschine"
        ],
        applicationCustom: {
          title: "TCM Alpha Nuss",
          subtitle: "Gut für Inklusionen geeignet",
          specsTitle: "Z-/X-Ausführung",
          specs: [
            { label: "Maschinentyp:", value: "TCM 9 bis 24/48" },
            { label: "Kolbenhub:", value: "70 mm" },
            { label: "Z-Achse / X-Achse:", value: "150 mm / 300 mm" },
            { label: "Büchsenbreite:", value: "45 oder 90 mm" },
            { label: "Kolben-ø:", value: "20, 30, 40, 50, 60 oder 70 mm" }
          ],
          products: [
            { title: "100g Tafel", stat1: "9'000 Tafeln/h", stat2: "900 kg/h", image: "assets/img/Applikationen/Nusse_Fruechte.jpg" },
            { title: "10g Praline", stat1: "28'800 Pralinen/h", stat2: "288 kg/h", image: "assets/img/Applikationen/One-Shot.jpg" }
          ]
        }
      }
    ],
    characteristics: [
      "Modulares Konzept für nahtlose Integration in Gesamtanlagen",
      "Multi-Achsen CNC-Bewegung für 3D-Dekorieren und Schreiben",
      "Grammgenaues Dosieren auch bei stückigen Zutaten bis 8 mm",
      "Höchste Energieeffizienz durch optimierte Heizkreisläufe"
    ],
    specs: [
      { label: "Formenbreite", value: "400 bis 1000 mm" },
      { label: "Taktleistung", value: "Bis zu 50 Takte/Min." },
      { label: "Antrieb", value: "Direkt angetriebene Servomotoren" }
    ],
    variantsDetail: [
      { name: "Alpha HD 48", desc: "Industrielle Giessmaschine für Formen bis 600 mm." },
      { name: "Alpha HD 96", desc: "Hochleistungs-Doppelbalken für Maximaldurchsatz bis 1000 mm Formen." }
    ],
    options: [
      "3D-Kurvenfahrwerk für freies Dekorieren",
      "Nussdosierer für ganze Haselnüsse und Mandeln",
      "Ethernet / OPC-UA Schnittstelle für Industrie 4.0"
    ],
    applications: [
      { title: "Industrielle Großserien", desc: "Zuverlässiger Dauerbetrieb für Millionen Schokoladenartikel." },
      { title: "3D-Dekorationen", desc: "Präzises Schreiben, Filigranmuster und Relief-Güsse." }
    ]
  },
  {
    id: "eta",
    name: "ETA",
    kicker: "Konzipiert für Drittanbieter-Anlagen",
    category: "Giessmaschinen",
    image: "assets/img/Produkte/eta-clean.png",
    cutoutImage: "assets/img/Produkte/eta-clean.png",
    diagramImage: "assets/img/Produkte/Alpha X HD 48-96-30-2-clean.png",
    pdf: "/assets/pdf/TCM-Eta_Technisches Datenblatt.pdf",
        video: "assets/media/products/tablets.mp4",
    video: "assets/media/products/tablets.mp4",
    lead: "Klein und ultrakompakt – als idealer Ersatz für alte Giessmaschinen bei engsten Platzverhältnissen.",
    description: "Die ETA wurde speziell entwickelt, um in bestehende Anlagen und Transportketten von Drittanbietern integriert zu werden, ohne dass die gesamte Linie umgebaut werden muss.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "Universell anpassbare Rahmenaufhängungen und flexible Steuerungs-Schnittstellen zur perfekten Harmonisierung mit bestehenden Antrieben.",
    hasCustomLayout: true,
    subModes: [
      {
        key: "standard",
        label: "Standard",
        pdf: "/assets/pdf/TCM-Eta_Technisches Datenblatt.pdf",
        diagramImage: "assets/img/Produkte/Alpha X HD 48-96-30-2-clean.png",
        diagramTitleUSP: "TCM Eta USP's",
        diagramTitleVariants: "TCM Eta Varianten",
        usps: [
          { id: "axes", pos: "left", title: "1-, 2- oder als 3-achser:", desc: "Z, X und CAD", dot: { x: 37.7, y: 40.4 } },
          { id: "changeover", pos: "left", title: "Schnelle Umrüstzeiten", desc: "Kolben, Düsen und Düsenplatten", dot: { x: 43.7, y: 50.6 } },
          { id: "moulds", pos: "left", title: "Formbreiten bis 1200 mm", desc: "", dot: { x: 40.5, y: 55.7 } },
          { id: "volume", pos: "left", title: "Volumen von 0.1g bis 1.1kg", desc: "Fast unendliche Kolbenkombinationen", dot: { x: 52.2, y: 44.9 } },
          { id: "retrofit", pos: "right", title: "Retrofit", desc: "Auch ohne Verschalung möglich", dot: { x: 46.0, y: 25.2 } },
          { id: "configurable", pos: "right", title: "Konfigurierbar", desc: "Von 1 Schleierdüse für OS bis 192 Kolben für Dekor", dot: { x: 61.2, y: 41.6 } },
          { id: "transparency", pos: "right", title: "Komplette Transparenz", desc: "durch Makrolon® Türen", dot: { x: 74.7, y: 40.1 } },
          { id: "stroke", pos: "right", title: "60 mm Hub", desc: "individuell aktivierbar", dot: { x: 60.4, y: 48.1 } },
          { id: "touch", pos: "right", title: "21.5'' Touch Panel", desc: "frei beweglich", dot: { x: 63.5, y: 63.6 } }
        ],
        variantsCustom: [
          { id: "exec", pos: "left", title: "Ausführungen Z, X, CAD", desc: "Single oder Boxer", dot: { x: 43.0, y: 34.4 } },
          { id: "hopper", pos: "left", title: "Trichter", desc: "doppelwandig, einwandig oder niedrig", dot: { x: 53.5, y: 42.1 } },
          { id: "belt", pos: "left", title: "Bandlauf", desc: "li → re oder re → li", dot: { x: 35.8, y: 56.7 } },
          { id: "modem", pos: "left", title: "Modem", desc: "LAN oder WLAN", dot: { x: 40.5, y: 66.2 } },
          { id: "retrofit", pos: "right", title: "Retrofit", desc: "mit oder ohne Sicherheitsverschalung", dot: { x: 65.3, y: 24.6 } },
          { id: "bushing", pos: "right", title: "Büchsenbreite (mm):", desc: "35 (Hub 52), 30 oder 45 (Hub 60)", dot: { x: 61.7, y: 40.2 } },
          { id: "pistons", pos: "right", title: "Kolben-ø", desc: "6..30 (35er) / 6..16 (30er) / 6..30 (45er)", dot: { x: 65.3, y: 43.0 } },
          { id: "nozzle-plate", pos: "right", title: "Düsenplatte", desc: "Kundenspezifisch (Abstand, Art, Anzahl, Position)", dot: { x: 63.0, y: 46.1 } },
          { id: "nozzles", pos: "right", title: "Düsen", desc: "Kundenspezifisch (Solid, OS, Schwenk)", dot: { x: 63.0, y: 48.4 } }
        ],
        optionsCustom: [
          "Für Formenbreiten von bis zu 1200 mm",
          "Doppelwandiger Trichter auch für Füllungsseite",
          "Kolben-Schmiersystem für eine oder beide Kolbenseiten",
          "Unterschiedliche Rührwerksysteme für einen oder beide Trichter",
          "Triple Shot (1 Füllung / 2 Schalen ODER 2 Füllungen / 1 Schale)",
          "Quatro Shot (2 Füllungen / 2 Schalen)",
          "Steuerung von Folgemaschine (z.B. Vibrationstisch) über Bedienpanel möglich",
          "Y 300 mm (Standard 150)",
          "RFID für Formerkennung"
        ],
        applicationCustom: {
          title: "TCM Eta",
          subtitle: "Konzipiert für Anlagen von Drittanbietern oder Formen >650 mm",
          specsTitle: "Z-/X-/CAD-Ausführung",
          specs: [
            { label: "Maschinentyp:", value: "TCM 9 bis 96/192" },
            { label: "Z- / X- und Y-Achse:", value: "150 mm / 300 mm / 150 mm" },
            { label: "Kolbenhub:", values: ["52 mm", "60 mm", "60 mm"] },
            { label: "Büchsenbreite:", values: ["35 mm", "30 mm", "45 mm"] },
            { label: "Kolben-ø:", values: ["6, 8, 10, 17, 25 oder 30 mm", "6, 8, 10 und 16 mm", "6, 8, 10, 20, 25 und 30 mm"] }
          ],
          products: [
            { title: "100g Tafel", stat1: "10'800 Tafeln/h", stat2: "1'080 kg/h", image: "assets/img/Applikationen/Solid.png" },
            { title: "10g Praline", stat1: "86'400 Pralinen/h", stat2: "864 kg/h", image: "assets/img/Applikationen/One-Shot.jpg" }
          ]
        }
      },
      {
        key: "nuss",
        label: "Nuss (Hybrid)",
        pdf: "/assets/pdf/TCM-Eta Nuss_Technisches Datenblatt.pdf",
        video: "assets/media/products/TRIKNO_Nut.mp4",
        diagramImage: "assets/img/Produkte/Alpha X HD 48-96-30-2-clean.png",
        diagramTitleUSP: "TCM Eta Nuss USP's",
        diagramTitleVariants: "TCM Eta Nuss Varianten",
        usps: [
          { id: "axes", pos: "left", title: "1-, 2- oder als 3-achser:", desc: "Z, X und CAD", dot: { x: 27.1, y: 40.5 } },
          { id: "changeover", pos: "left", title: "Schnelle Umrüstzeiten", desc: "Kolben, Düsen und Düsenplatten", dot: { x: 43.7, y: 43.7 } },
          { id: "moulds", pos: "left", title: "Formbreiten bis 1200 mm", desc: "", dot: { x: 40.5, y: 55.7 } },
          { id: "volume", pos: "left", title: "Volumen bis zu 1.1kg", desc: "Anteil Inklusionen bis 40%", dot: { x: 52.2, y: 44.9 } },
          { id: "retrofit", pos: "right", title: "Retrofit", desc: "Auch ohne Verschalung möglich", dot: { x: 61.6, y: 29.0 } },
          { id: "hybrid", pos: "right", title: "Hybrid Variante bei NI", desc: "Einseitig für Inklusionen", dot: { x: 60.8, y: 46.5 } },
          { id: "transparency", pos: "right", title: "Komplette Transparenz", desc: "durch Makrolon® Türen", dot: { x: 73.4, y: 40.1 } },
          { id: "pistons70", pos: "right", title: "Bis zu Kolben-ø70 mm", desc: "individuell aktivierbar", dot: { x: 59.0, y: 48.1 } },
          { id: "touch", pos: "right", title: "21.5'' Touch Panel", desc: "frei beweglich", dot: { x: 62.1, y: 63.6 } }
        ],
        variantsCustom: [
          { id: "exec", pos: "left", title: "Ausführungen Z, X, CAD", desc: "Single oder Boxer", dot: { x: 43.0, y: 34.4 } },
          { id: "hopper", pos: "left", title: "Trichter", desc: "doppelwandig, einwandig, mit/ohne Rührwerk", dot: { x: 53.5, y: 42.1 } },
          { id: "belt", pos: "left", title: "Bandlauf", desc: "li → re oder re → li", dot: { x: 35.8, y: 56.7 } },
          { id: "modem", pos: "left", title: "Modem", desc: "LAN oder WLAN", dot: { x: 40.5, y: 66.2 } },
          { id: "retrofit", pos: "right", title: "Retrofit", desc: "mit oder ohne Sicherheitsverschalung", dot: { x: 67.7, y: 24.9 } },
          { id: "bushing", pos: "right", title: "Büchsenbreite (mm):", desc: "45 (Hub 70) oder 90 (Hub 70)", dot: { x: 65.3, y: 41.0 } },
          { id: "pistons", pos: "right", title: "Kolben-ø", desc: "20, 30 oder 40 (45er) / 50, 60 oder 70 (90er)", dot: { x: 65.3, y: 43.3 } },
          { id: "nozzle-plate", pos: "right", title: "Düsenplatte", desc: "Kundenspezifisch (Abstand, Art, Anzahl, Position)", dot: { x: 63.0, y: 46.1 } },
          { id: "nozzles", pos: "right", title: "Düsen", desc: "Kundenspezifisch (Solid, OS, Schwenk)", dot: { x: 63.0, y: 47.5 } }
        ],
        optionsCustom: [
          "Für Formenbreiten bis zu 1200 mm",
          "Kolben-Schmiersystem für eine oder beide Kolbenseiten",
          "Unterschiedliche Rührwerksysteme für einen oder beide Trichter",
          "Triple Shot (1 Füllung / 2 Schalen ODER 2 Füllungen / 1 Schale)",
          "Quatro Shot (2 Füllungen / 2 Schalen)",
          "Steuerung von Folgemaschine (z.B. Vibrationstisch) über Bedienpanel möglich",
          "Y 300 mm (Standard 150)",
          "Bandlaufrichtung von links nach rechts oder rechts nach links",
          "RFID für Formerkennung",
          "Hybridmaschine (1 Schokoseite, 1 Nussseite) oder als Nussmaschine"
        ],
        applicationCustom: {
          title: "TCM Eta Nuss",
          subtitle: "Konzipiert für Anlagen von Drittanbietern oder Formen >650 mm",
          specsTitle: "Z-/X-/CAD-Ausführung",
          specs: [
            { label: "Maschinentyp:", value: "TCM 9 bis 24/48" },
            { label: "Kolbenhub:", value: "70 mm" },
            { label: "Z-Achse / Y-Achse:", value: "150 mm / 300 mm" },
            { label: "Büchsenbreite:", value: "45 oder 90 mm" },
            { label: "Kolben-ø:", value: "20, 30, 40, 50, 60 oder 70 mm" }
          ],
          products: [
            { title: "100g Tafel", stat1: "9'000 Tafeln/h", stat2: "900 kg/h", image: "assets/img/Applikationen/Nusse_Fruechte.jpg" },
            { title: "10g Praline", stat1: "28'800 Pralinen/h", stat2: "288 kg/h", image: "assets/img/Applikationen/One-Shot.jpg" }
          ]
        }
      }
    ],
    characteristics: [
      "Extrem geringer Platzbedarf und minimale Einbauhöhe",
      "Eigenständige Steuerung oder Master-Slave Kopplung",
      "Schweizer Präzisionspumpe für Tropffreiheit",
      "Schneller Sortenwechsel in Rekordzeit"
    ],
    specs: [
      { label: "Formenbreite", value: "275 bis 425 mm" },
      { label: "Einbauhöhe", value: "Kompakt ab 450 mm" },
      { label: "Kompatibilität", value: "Alle gängigen Ketten- und Bandförderer" }
    ],
    variantsDetail: [
      { name: "ETA Single Retrofit", desc: "Direkter 1:1 Austausch veralteter mechanischer Giessköpfe." },
      { name: "ETA Duo", desc: "Zweifarbige Dosierung auf engstem Raum nachgerüstet." }
    ],
    options: [
      "Spezial-Adapterplatten für Fremdförderer",
      "Mobilgestell für schnelles Ein- und Ausfahren der Dosiereinheit"
    ],
    applications: [
      { title: "Modernisierung bestehender Linien", desc: "Präzisionssteigerung alter Giessstrassen mit minimalem Investitionsaufwand." }
    ]
  },
  {
    id: "vibrationstisch",
    name: "Vibrationstisch",
    kicker: "Leise und hocheffektiv",
    category: "Peripheriegeräte",
    image: "assets/img/Produkte/Vibrationstisch-clean.png",
    cutoutImage: "assets/img/Produkte/Vibrationstisch-clean.png",
    diagramImage: "assets/img/Produkte/Vibrationstisch-clean.png",
    pdf: "/assets/pdf/TVT-Vibrations Tisch_Technisches Datenblatt.pdf",
    video: "assets/media/products/Free Dress Cup Cakes (2).mp4",
    lead: "Hocheffizienter Vibrationstisch mit speziell entwickelter geräuscharmer Schwingplatte.",
    description: "Der TRIKNO Vibrationstisch entlüftet die gegossene Schokolade zuverlässig und sorgt für spiegelglatte Oberflächen ohne störende Luftblasen.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "Horizontale, vertikale und multidirektionale Frequenzabstimmung passend zur jeweiligen Viskosität der Schokoladenmasse.",
    hasCustomLayout: true,
    diagramTitleUSP: "TVT Vibrationstisch USP's",
    diagramTitleVariants: "TVT Vibrationstisch Varianten",
    usps: [
      { id: "length", pos: "left", title: "Länge 750, 1000, 1500 mm", desc: "auch in Kette aneinander", dot: { x: 26.7, y: 33.8 } },
      { id: "changeover", pos: "left", title: "Schnelle Umrüstzeiten", desc: "Seitenführung", dot: { x: 35.1, y: 41.2 } },
      { id: "moulds", pos: "left", title: "Formbreiten bis 500 mm", desc: "", dot: { x: 39.0, y: 46.0 } },
      { id: "cleaning", pos: "left", title: "Einfache Reinigung", desc: "ohne Schmierung", dot: { x: 42.9, y: 59.6 } },
      { id: "transparency", pos: "right", title: "Komplette Transparenz", desc: "durch Makrolon® Deckel", dot: { x: 69.3, y: 28.5 } },
      { id: "bottom-vib", pos: "right", title: "Bodenvibration", desc: "Mechanisch oder Magnetisch", dot: { x: 66.4, y: 32.3 } },
      { id: "side-vib", pos: "right", title: "Seitenvibration", desc: "Pneumatisch oder Magnetisch", dot: { x: 66.4, y: 38.9 } },
      { id: "hmi", pos: "right", title: "HMI", desc: "ansteuerbar über TCM", dot: { x: 57.3, y: 65.6 } }
    ],
    variantsCustom: [
      { id: "length", pos: "left", title: "Länge", desc: "750 als Standalone oder 1000, 1500 mm integriert in TCM : auch in Kette aneinander", dot: { x: 35.1, y: 43.8 } },
      { id: "moulds", pos: "left", title: "Formbreiten bis", desc: "500 oder 650 mm", dot: { x: 40.3, y: 45.6 } },
      { id: "bottom-vib", pos: "right", title: "Bodenvibration", desc: "Mechanisch oder Magnetisch", dot: { x: 66.4, y: 32.3 } },
      { id: "side-vib", pos: "right", title: "Seitenvibration", desc: "Pneumatisch oder Magnetisch", dot: { x: 66.4, y: 38.9 } }
    ],
    optionsCustom: [
      "Seitenvibration: ohne (Default und ausreichend für viele Produkte) / magnetisch (hochfrequent, verteilt Inklusionen besser) / pneumatisch (noch besser für Solid und One-Shot)",
      "Bodenvibration: Unwucht (Default, optimiert Verteilung für Solid und One-Shot) / Elektromagnetisch (ideal für Dekor-Produkte) / kombiniert (für Laborversuche geeignet)",
      "Bookmould-Seitenführung"
    ],
    applicationCustom: {
      title: "TVT Vibrationstisch",
      subtitle: "Leise und effektiv",
      products: [
        { title: "Tafeln & Inklusionen", stat1: "Vertikalvibration (Magnet)", stat2: "Frequenz einstellbar", image: "assets/img/Applikationen/Solid.png" },
        { title: "Pralinen & Dekor", stat1: "Boden- & Seitenvibration", stat2: "Flüsterleiser Betrieb", image: "assets/img/Applikationen/Dekorieren.jpg" }
      ],
      specs: [
        { label: "Anlagentyp", value: "TVT 750, 1000 oder 1500" },
        { label: "Magnetbetriebene vertikale Vibration:", value: "für massive und gefüllte Produkte, Frequenz einstellbar" },
        { label: "Elektromagnetische Boden-Vibration:", value: "für Dekorationen, Frequenz und Amplitude einstellbar" },
        { label: "pneumatische Seitenvibration:", value: "optional – für gleichmässige Verteilung in der Kavität" },
        { label: "Hochfrequente magnetische Seitenvibration:", value: "optional – für grosse Inklusionen/Nüsse usw." }
      ]
    },
    characteristics: [
      "Flüsterleiser Betrieb dank innovativer Dämpfungselemente",
      "Stufenlose Frequenz- und Amplitudenregelung",
      "Hygienisches Edelstahldesign ohne Schmutzkanten",
      "Schonender Formstransport ohne Verkanten"
    ],
    specs: [
      { label: "Frequenzbereich", value: "20 bis 100 Hz stufenlos" },
      { label: "Material", value: "Edelstahl 1.4301 / AISI 304" }
    ],
    variantsDetail: [
      { name: "VT-Artisan", desc: "Kompaktgerät für den Confiseurtisch." },
      { name: "VT-Inline", desc: "In die Förderschiene integrierter Schwingabschnitt." }
    ],
    options: [
      "Magnetische Formenfixierung",
      "Zonen-Vibration für mehrphasige Dosierung"
    ],
    applications: [
      { title: "Entlüftung gegossener Formen", desc: "Entfernt Bläschen an Ecken und Kanten für makellosen Glanz." }
    ]
  },
  {
    id: "coldpress",
    name: "Coldpress System",
    kicker: "Patentiertes Stempelkaltpressen",
    category: "Peripheriegeräte",
    image: "assets/img/Produkte/Coldpress-clean.png",
    cutoutImage: "assets/img/Produkte/Coldpress-clean.png",
    diagramImage: "assets/img/Produkte/Coldpress-clean.png",
    pdf: "/assets/pdf/TCP-Cold Press_Technisches Datenblatt.pdf",
    video: "assets/media/products/one shot transfer sheet sep 22 trikno .movie.mp4",
    lead: "Das patentierte Stempelkaltpressen für perfekt gleichmässige, ultradünne Schokoladenschalen.",
    description: "Das ColdPress-System von TRIKNO setzt weltweite Massstäbe in der Herstellung makelloser Schalen. Es ermöglicht ultradünne Wandstärken bei absolut homogener Schokoladenverteilung.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "Vom Einzelstempel für Confiserien bis zu gekühlten Mehrfachstempel-Werkzeugen für industrielle Formenförderer.",
    hasCustomLayout: true,
    subModes: [
      {
        key: "v1",
        label: "ColdPress 1.0",
        diagramTitleUSP: "TCP ColdPress 1.0 USP's",
        diagramTitleVariants: "TCP ColdPress 1.0 Varianten",
        usps: [
          { id: "energy", pos: "left", title: "Kleinerer Energieverbrauch", desc: "Durch direkte Stempelkühlung", dot: { x: 40.1, y: 49.9 } },
          { id: "moulds", pos: "left", title: "Formbreiten bis", desc: "2x 500x500 mm", dot: { x: 40.6, y: 47.7 } },
          { id: "clean", pos: "left", title: "Reinigung der Formen unnötig", desc: "", dot: { x: 40.6, y: 67.2 } },
          { id: "touch", pos: "right", title: "15'' Touch Panel", desc: "", dot: { x: 68.7, y: 37.2 } },
          { id: "cooling", pos: "right", title: "Kühlung mit", desc: "Glycol oder Freon-Gas", dot: { x: 59.9, y: 52.5 } },
          { id: "geom", pos: "right", title: "Exakte Geometrien", desc: "Durch fixe Stempelhöhen", dot: { x: 51.1, y: 51.2 } }
        ],
        variantsCustom: [
          { id: "width", pos: "left", title: "Formbreiten", desc: "275, 380, 500 oder 650 mm", dot: { x: 41.9, y: 47.1 } },
          { id: "plates", pos: "left", title: "1 oder 2 Platten gleichzeitig", desc: "", dot: { x: 41.9, y: 49.6 } },
          { id: "tooling", pos: "left", title: "Mehrere Master- und Stempelplatten", desc: "", dot: { x: 41.9, y: 52.1 } },
          { id: "new-ret", pos: "right", title: "Neuanlage oder als Retrofit", desc: "", dot: { x: 62.1, y: 46.2 } },
          { id: "cooling", pos: "right", title: "Kühlung mit Glycol oder Freon-Gas", desc: "", dot: { x: 59.9, y: 61.4 } }
        ]
      },
      {
        key: "v2",
        label: "ColdPress 2.0",
        diagramTitleUSP: "TCP ColdPress 2.0 USP's",
        diagramTitleVariants: "TCP ColdPress 2.0 Varianten",
        usps: [
          { id: "norim", pos: "left", title: "Kein Rim-Cutting nötig", desc: "da Formabschliessend", dot: { x: 35.7, y: 42.4 } },
          { id: "change", pos: "left", title: "Kurze Umrüstzeiten", desc: "Werkzeug, Programm", dot: { x: 36.8, y: 46.1 } },
          { id: "moulds", pos: "left", title: "Formbreiten bis", desc: "2x 500x500 mm", dot: { x: 40.6, y: 47.7 } },
          { id: "clean", pos: "left", title: "Reinigung der Formen unnötig", desc: "", dot: { x: 40.6, y: 67.2 } },
          { id: "touch", pos: "right", title: "15'' Touch Panel", desc: "", dot: { x: 68.7, y: 39.1 } },
          { id: "cooling", pos: "right", title: "Kühlung mit Glycol oder Freon-Gas", desc: "", dot: { x: 59.9, y: 42.4 } },
          { id: "book", pos: "right", title: "Keine 2. CP nötig", desc: "bei Book-moulding", dot: { x: 53.3, y: 45.5 } },
          { id: "volcomp", pos: "right", title: "Volumen Kompensation", desc: "möglich durch Stempeldruck", dot: { x: 50.0, y: 47.7 } }
        ],
        variantsCustom: [
          { id: "width", pos: "left", title: "Formbreiten", desc: "275, 380, 500 oder 650 mm", dot: { x: 41.9, y: 47.1 } },
          { id: "plates", pos: "left", title: "1 oder 2 Platten gleichzeitig", desc: "", dot: { x: 41.9, y: 49.6 } },
          { id: "tooling", pos: "left", title: "Mehrere Master- und Stempelplatten", desc: "", dot: { x: 41.9, y: 52.1 } },
          { id: "new-ret", pos: "right", title: "Neuanlage oder als Retrofit", desc: "", dot: { x: 62.1, y: 46.2 } },
          { id: "cooling", pos: "right", title: "Kühlung mit Glycol oder Freon-Gas", desc: "", dot: { x: 59.9, y: 61.4 } }
        ]
      }
    ],
    optionsNote: "Im technischen Datenblatt sind sämtliche Konfigurations-Optionen direkt als wählbare Varianten aufgeführt (kein separater Optionen-Abschnitt).",
    optionsCustom: [
      "Bedienung HMI Links oder Rechts",
      "Band-Laufrichtung von links nach rechts oder von rechts nach links",
      "LAN- oder WLAN-Modem",
      "Anzahl Pressplatten: 1 oder 2",
      "Baugrössen nach Formenbreite: TCP 275 / TCP 380 / TCP 500 / TCP 650"
    ],
    applicationCustom: {
      title: "TCP ColdPress",
      subtitle: "Das einzigartige System – als einstufig oder zweistufiger Prozess",
      products: [
        { title: "Schalen", stat1: "ab 1.0 mm Wandstärke", stat2: "bis zu 30 Formen/min", image: "assets/img/Applikationen/ColdPress-shell.png" },
        { title: "Hohleier & Kugeln", stat1: "1.0 … 1.8 mm Wandstärke", stat2: "mit / ohne Schmelzrand", image: "assets/img/Applikationen/Hohlformen.png" }
      ],
      specs: [
        { label: "Anlagentyp", value: "TCP" },
        { label: "Formenbreite", value: "275, 380, 500 oder 650 mm" },
        { label: "Anlagengeschwindigkeit", value: "bis zu 30 Formen pro Minute" },
        { label: "Schalendicke", value: "ab 1.0 mm aufwärts" }
      ],
      bulletsTitle: "Empfohlene minimale Wandstärken:",
      bullets: [
        "1.0 mm für Pralinen",
        "1.5 mm für Tafeln",
        "1.5 … 1.8 mm für Bookmoulding Eier",
        "1.0 … 1.2 mm für Bookmoulding Kugeln"
      ]
    },
    characteristics: [
      "Gleichmässigste Rand- und Bodenstärken ohne Lufteinschlüsse",
      "Gesteigerte Füllvolumina bei minimiertem Schokoladenaufwand",
      "Präzise gekühlte Stempelwerkzeuge mit Anti-Haft-Geometrie",
      "Erhebliche Verkürzung der gesamten Kühlzeit"
    ],
    specs: [
      { label: "Kühltemperatur", value: "-15°C bis -5°C am Stempel" },
      { label: "Taktzeit", value: "Unter 3 Sekunden Presszeit" },
      { label: "Schalenstärke", value: "Exakt einstellbar ab 0.8 mm" }
    ],
    variantsDetail: [
      { name: "Coldpress Compact", desc: "Stand-Alone Einheit für Confiseure." },
      { name: "Coldpress Industrial", desc: "Hochgeschwindigkeits-Aggregat für kontinuierliche Kühllinien." }
    ],
    options: [
      "Automatische Entfeuchtung gegen Kondensatbildung",
      "Schnellwechselsystem für Formatsätze in unter 3 Minuten"
    ],
    applications: [
      { title: "Pralinenschalen", desc: "Perfekt symmetrische Hüllen für zartschmelzende Füllungen." },
      { title: "Hohleier & Kugeln", desc: "Nahtlose Kugel- und Eihälften mit gratfreien Rändern." }
    ]
  },
  {
    id: "spinner",
    name: "Spinner",
    kicker: "Kompakte Schleuder",
    category: "Peripheriegeräte",
    image: "assets/img/Produkte/spinner-clean.png",
    cutoutImage: "assets/img/Produkte/spinner-clean.png",
    diagramImage: "assets/img/Produkte/spinner-clean.png",
    pdf: "/assets/pdf/TSM-Schleuder_Technisches Datenblatt.pdf",
    video: "assets/media/products/Swivel nozzle and transfer sheets.MOV",
    lead: "Kompakte Schleuder für eine homogene Schokoladenverteilung von bis zu 24 Hohlformen.",
    description: "Der Spinner schleudert gefüllte Hohlformen in mehreren Rotationsachsen, sodass sich die Schokolade absolut gleichmässig an der Forminnenwand verteilt.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "Erhältlich als Doppel- oder Mehrfachspinner mit elektromagnetischen Formenschnellspannern.",
    hasCustomLayout: true,
    diagramTitleUSP: "TSM Spinning Machine USP's",
    diagramTitleVariants: "TSM Spinning Machine Varianten",
    usps: [
      { id: "arms", pos: "left", title: "Grössen 1 oder 2-Armig:", desc: "Flexibel einsetzbar", dot: { x: 33.8, y: 30.6 } },
      { id: "changeover", pos: "left", title: "Schnelle Umrüstzeiten", desc: "Magnethalter an Arme", dot: { x: 17.8, y: 38.1 } },
      { id: "moulds", pos: "left", title: "Formen bis 500x500 mm", desc: "", dot: { x: 20.9, y: 52.3 } },
      { id: "cleaning", pos: "left", title: "Einfache Reinigung", desc: "ohne Schmierung", dot: { x: 28.9, y: 49.1 } },
      { id: "safety", pos: "right", title: "Sicher, keine Verletzung", desc: "Durch Rutschkupplungen", dot: { x: 66.1, y: 33.4 } },
      { id: "speed", pos: "right", title: "Drehgeschwindigkeit", desc: "Stufenlos einstellbar", dot: { x: 54.8, y: 61.9 } },
      { id: "vibration", pos: "right", title: "Vibration", desc: "Stufenlos einstellbar", dot: { x: 54.8, y: 62.7 } },
      { id: "quiet", pos: "right", title: "Ruhige Bewegung", desc: "nicht auf Boden übertragend", dot: { x: 59.6, y: 71.1 } }
    ],
    variantsCustom: [
      { id: "arms", pos: "left", title: "Grössen", desc: "1 oder 2-Armig", dot: { x: 33.8, y: 30.6 } },
      { id: "moulds", pos: "left", title: "Formen bis 500x500 mm", desc: "", dot: { x: 20.9, y: 52.3 } }
    ],
    optionsNote: "Die TSP Spinning Machine ist im Datenblatt serienmässig vollausgestattet (kein separater Optionen-Abschnitt). Konfigurierbare Ausstattungsmerkmale:",
    optionsCustom: [
      "1 oder 2 rotierende Trommeln mit jeweils 6 Drehelementen (bis zu 12 Drehelemente / 24 Formenrahmen)",
      "Permanent magnetische Haltevorrichtungen (2 Formenrahmen pro Drehelement) für Formen bis 500 × 500 mm",
      "Rotordrehgeschwindigkeit, Drehelementgeschwindigkeit und Drehrichtung stufenlos und unabhängig regelbar",
      "Elektromagnetische Vibration mit einstellbarer Intensität (verschleissfrei, berührungslos)"
    ],
    applicationCustom: {
      title: "TSM Spinning Machine",
      subtitle: "Für perfekte Hohlfiguren",
      products: [
        { title: "Hohlfiguren", stat1: "Bis zu 24 Formen", stat2: "Formen bis 500x500 mm", image: "assets/img/Applikationen/Hohlformen.png" },
        { title: "Hohlkugeln & Eier", stat1: "Porenfreie Wandstärke", stat2: "Biaxiale Rotation", image: "assets/img/Applikationen/ColdPress-shell.png" }
      ],
      bulletsTitle: "Technische Highlights & Aufbau:",
      bullets: [
        "Zentrale Drehtrommel mit bis zu 24 Formen (6 Arme auf beiden Seiten mit 2 magnetischen Haltern).",
        "Edelstahlrahmen.",
        "Keine Schmierung nötig (wartungsfrei).",
        "Trommelgeschwindigkeit, Drehrichtung und Armgeschwindigkeit können unabhängig voneinander angepasst werden.",
        "Elektromagnetische Schwingung mit verstellbarer Intensität.",
        "Reibungskupplungen für sicheren Betrieb.",
        "Luftfederung (keine Vibrationen zum Boden)."
      ]
    },
    characteristics: [
      "Biaxial rotierende Planetenbewegung für gleichmässige Wandstärken",
      "Einstellbare Drehzahl für jede Rotationsachse",
      "Kompakte Bauweise mit Sicherheitsverriegelung",
      "Schwingungsfreier Lauf durch ausbalancierte Magnetträger"
    ],
    specs: [
      { label: "Kapazität", value: "Bis zu 24 Formen gleichzeitig" },
      { label: "Rotation", value: "2-Achsen planetarisch regelbar" }
    ],
    variantsDetail: [
      { name: "Spinner Duo", desc: "Kompakter Doppelarmschleuderer für Confiserien." }
    ],
    options: [
      "Kühlluftgebläse zur Beschleunigung des Festwerdens während der Rotation",
      "Spezialklammern für Sondergrössen von Osterhasen und Weihnachtsmännern"
    ],
    applications: [
      { title: "Hohlfiguren aller Art", desc: "Osterhasen, Nikoläuse, Hohlkugeln und Schokoladenfiguren ohne Lunker." }
    ]
  },
  {
    id: "spirale",
    name: "Spirale",
    kicker: "Das ideale Transportsystem",
    category: "Peripheriegeräte",
    image: "assets/img/Produkte/Spiral_50M-clean.png",
    cutoutImage: "assets/img/Produkte/Spiral_50M-clean.png",
    diagramImage: "assets/img/Produkte/Spiral_50M-clean.png",
    pdf: "/assets/pdf/TCS-Spiral_Technisches Datenblatt.pdf",
    video: "assets/media/hero-bg-chocolate.mp4",
    lead: "Konditionierspirale für Formen von unterschiedlichsten Grössen auf minimalem Raum.",
    description: "Die Kühlluft- und Konditionierspirale nutzt die Raumhöhe optimal aus und kühlt Schokoladenprodukte schonend und gleichmässig ab.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "Erhältlich als Einzelturm oder Doppelturm-Kühlsystem mit variabler Bandlänge von 30 bis 150 Metern.",
    hasCustomLayout: true,
    diagramTitleUSP: "TCS Conditioning Spiral USP's",
    diagramTitleVariants: "TCS Conditioning Spiral Varianten",
    usps: [
      { id: "efficient", pos: "left", title: "Effiziente und homogene", desc: "Konditionierung beidseitig", dot: { x: 36.0, y: 33.2 } },
      { id: "changeover", pos: "left", title: "Keine Umrüstzeiten", desc: "Losformprinzip", dot: { x: 37.7, y: 55.2 } },
      { id: "moulds", pos: "left", title: "Formbreiten bis", desc: "275, 500 oder 650 mm", dot: { x: 36.0, y: 56.5 } },
      { id: "maintenance", pos: "left", title: "Wartung / Reinigung", desc: "über Türen zugänglich", dot: { x: 46.1, y: 68.5 } },
      { id: "footprint", pos: "left", title: "Kleiner Fussabdruck", desc: "Volumen zu Anzahl Formen", dot: { x: 52.8, y: 71.2 } },
      { id: "temp", pos: "right", title: "Temperaturregelung", desc: "Nach Geschwindigkeit, ..", dot: { x: 83.4, y: 26.9 } },
      { id: "transparency", pos: "right", title: "Komplette Transparenz", desc: "bei Makrolon bzw. Glaswänden", dot: { x: 82.1, y: 41.1 } },
      { id: "cool-heat", pos: "right", title: "Einsatz als Kühlung", desc: "oder als Vorheizung", dot: { x: 80.9, y: 44.8 } },
      { id: "loose", pos: "right", title: "Losformprinzip", desc: "kein Stau oder Verkanten", dot: { x: 68.8, y: 45.1 } },
      { id: "touch", pos: "right", title: "15'' Touch Panel", desc: "oder über Linienpanel", dot: { x: 43.4, y: 60.4 } }
    ],
    variantsCustom: [
      { id: "housing", pos: "left", title: "Isolierhausmaterial", desc: "Alu, Kunststoff oder Glas", dot: { x: 36.0, y: 33.2 } },
      { id: "heatex", pos: "left", title: "Wärmetauscher", desc: "Anzahl je nach Länge", dot: { x: 37.7, y: 55.2 } },
      { id: "radius", pos: "left", title: "Radius 625, 750, 1000", desc: "je nach Formgrössen und Konditionierzeiten", dot: { x: 36.0, y: 56.5 } },
      { id: "infeed", pos: "left", title: "Einlaufposition", desc: "Individuelle Länge und Ort", dot: { x: 46.1, y: 68.5 } },
      { id: "outfeed", pos: "right", title: "Auslaufposition", desc: "Individuelle Länge und Ort", dot: { x: 83.4, y: 26.9 } },
      { id: "doors", pos: "right", title: "Anzahl Türen", desc: "Individuelle Anzahl und Ort", dot: { x: 82.1, y: 41.1 } },
      { id: "mode", pos: "right", title: "Einsatz", desc: "als Kühlung oder als Vorheizung", dot: { x: 80.9, y: 44.8 } },
      { id: "led", pos: "right", title: "LED-Beleuchtung", desc: "Rot oder blau oder ohne", dot: { x: 68.8, y: 45.1 } },
      { id: "coolant", pos: "right", title: "Wärmetauscher", desc: "Freon Gas oder Glycol", dot: { x: 43.4, y: 60.4 } }
    ],
    optionsCustom: [
      "Gummierte Kettenglieder für erhöhte Reibung, sodass leichte oder glatte Formen bzw. Blister stabil und prozesssicher transportiert werden",
      "Isolierhaus geschlossen (Alu, Edelstahl oder Kunststoff) oder als sichtbar (Makrolon oder Glas) – mit Beleuchtung (blau oder rot) & wählbarer Türanzahl (Skizze a … l)",
      "Länge von Einlaufposition (1) und Auslaufposition (2) je nach Kundenwunsch definierbar"
    ],
    applicationCustom: {
      title: "TCS Konditionier Spirale",
      subtitle: "Das ideale Transportsystem (Heizen oder Kühlen)",
      products: [
        { title: "Tafeln & Inklusionen", stat1: "Kühlstrecke 9 – 500 m", stat2: "Formbreite bis 650 mm", image: "assets/img/Applikationen/Solid.png" },
        { title: "Pralinen & Riegel", stat1: "Beidseitige Kühlung", stat2: "One / Triple / Quatro Shot", image: "assets/img/Applikationen/One-Shot.jpg" }
      ],
      specs: [
        { label: "Anlagentyp:", value: "TCS Spirale" },
        { label: "Kühlstrecke:", value: "9 bis 500 m" },
        { label: "Formenbreite:", value: "bis 650 mm (R625, R750 oder R1000)" },
        { label: "Optional:", value: "Doppelturm / zweiteilige Spirale (Zugangsanlage)" }
      ],
      flowDiagram: {
        image: "assets/img/Produkte/Spiral-flow-diagram.png",
        caption: "Ein- und Auslauf frei wählbar"
      }
    },
    characteristics: [
      "Maximale Pufferzeit auf minimaler Grundfläche",
      "Kontrollierte laminare Kaltluftführung",
      "Kein Verkanten oder Umkippen von hohen Hohlfiguren",
      "Wartungsarme Schweizer Antriebstechnik"
    ],
    specs: [
      { label: "Bandlänge", value: "30 bis 150 m" },
      { label: "Kühltemperatur", value: "+8°C bis +18°C einstellbar" }
    ],
    variantsDetail: [
      { name: "Spirale Up/Down", desc: "Aufwärts- und Abwärtsförderung mit integrierter Kühlung." }
    ],
    options: [
      "Integrierte Entfeuchtungsstation",
      "Automatisches Band-Waschsystem"
    ],
    applications: [
      { title: "Schonende Pralinenkühlung", desc: "Perfektes Kristallwachstum für feinsten Knack und Glanz." }
    ]
  },
  {
    id: "handlingsystem",
    name: "Handling System (Hi-Flex)",
    kicker: "Getriebeloses Linear-Servo-Robotersystem",
    category: "Peripheriegeräte",
    image: "assets/img/Produkte/Hi-Flex-clean.png",
    cutoutImage: "assets/img/Produkte/Hi-Flex-clean.png",
    diagramImage: "assets/img/Produkte/THS-diagram.png",
    variantsDiagramImage: "assets/img/Produkte/THS-diagram.png",
    pdf: "/assets/pdf/THS-Handling System_Technisches Datenblatt.pdf",
    video: "assets/media/products/freedressed marzipan sep20 trikno.mp4",
    lead: "Getriebeloses Linear-Servo-Robotersystem mit einer Präzision von besser als 0.1 mm.",
    description: "Das Hi-Flex Handling System übernimmt das vollautomatische Einlegen, Umsetzen, Wenden und Entformen von Pralinen und Tafeln mit höchster Dynamik.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "2-Achsen bis 4-Achsen Hochgeschwindigkeits-Linearportale mit Vakuumgreifern oder mechanischen Greifarmen.",
    hasCustomLayout: true,
    diagramTitleUSP: "THS Handling System USP's",
    diagramTitleVariants: "THS Handling System Varianten",
    usps: [
      { id: "modular", pos: "left", title: "Modular & individuell", desc: "Exakt auf Produkt und bestehende Linie abgestimmt", dot: { x: 25.0, y: 42.0 } },
      { id: "gentle", pos: "left", title: "Schonende Umformung", desc: "Weniger Beschädigungen und Produktionsverluste", dot: { x: 16.0, y: 63.0 } },
      { id: "compact", pos: "left", title: "Kompakte Bauweise", desc: "Optimal bei engen Platzverhältnissen", dot: { x: 18.0, y: 64.9 } },
      { id: "precision", pos: "left", title: "Positioniergenauigkeit <0.1 mm", desc: "Präzise und zuverlässige Produktübergabe", dot: { x: 34.0, y: 56.0 } },
      { id: "speed", pos: "right", title: "Bis zu 24 Formen/min", desc: "Hoher Durchsatz bei konstanter Geschwindigkeit", dot: { x: 68.0, y: 38.0 } },
      { id: "reliability", pos: "right", title: "Hohe Prozesssicherheit", desc: "Zuverlässige Taktung auch bei anspruchsvollen Produkten", dot: { x: 62.0, y: 45.0 } },
      { id: "scalable", pos: "right", title: "Skalierbarkeit", desc: "Erweiterungen / Anpassungen jederzeit umsetzbar", dot: { x: 75.0, y: 48.0 } },
      { id: "platform", pos: "right", title: "Eine Platform, viele Anwendungen", desc: "Unterschiedliche Produkte und Prozesse mit einem System", dot: { x: 56.0, y: 58.0 } }
    ],
    variantsCustom: [
      { id: "modular", pos: "left", title: "Modular & individuell", desc: "Exakt auf Produkt und bestehende Linie abgestimmt", dot: { x: 25.0, y: 42.0 } },
      { id: "vacuum", pos: "left", title: "Vakuumstation", desc: "Eintaktung, Taktband, Twister, Pick'n'Turn, Pick'n'Place, Vakuumeinheit, Formöffner, Deckelschliesser, Produkteband (Textil), Plaque-Einleger", dot: { x: 38.0, y: 55.0 } },
      { id: "demould", pos: "right", title: "Als Ausformung", desc: "Mit Klopfstation oder Vakuum", dot: { x: 58.0, y: 46.0 } },
      { id: "knock", pos: "right", title: "Klopfstation", desc: "Eintaktung, Taktband, Twister, Plaque-Einleger, Formwender mit/ohne Plaque, Klopfer, Formöffner, Deckelschliesser, Riemenband für Plaques", dot: { x: 66.0, y: 52.0 } }
    ],
    optionsCustom: [
      "Ausführung Produktentnahme: Klopfstation",
      "Ausführung Produktentnahme: Vakuumstation (Schonend auch bei komplexeren Produkt-Geometrien)",
      "Vorgelagerter Prozess Tooling: Randschneider (ColdPress 1.0) & Bodenabstreifer",
      "Ausformungs-Tooling: Form-Wender (mit/ohne Plaque), Deckelöffner mit Nagelplatte, Bookmould-Öffner+Wender, Spreiz-Werkzeug / Übersetzer"
    ],
    applicationCustom: {
      title: "THS Handling System",
      subtitle: "Handlingsystem mit 3-D-Motion",
      products: [
        { title: "Tafeln & Riegel", stat1: "Bis zu 24 Formen/min", stat2: "Präzision < 0.1 mm", image: "assets/img/Applikationen/Solid.png" },
        { title: "Pralinen & Blister", stat1: "Vakuum- oder Klopfstation", stat2: "Pick'n'Turn & Pick'n'Place", image: "assets/img/Applikationen/One-Shot.jpg" }
      ],
      specs: [
        { label: "Maschinentyp:", value: "THS Handling System" },
        { label: "Gehäuselängen:", value: "2100/2450/2960/3960 mm" },
        { label: "Gehäusetyp:", value: "einfach / doppelt" },
        { label: "Werkzeuggewicht:", value: "max. 100 kg" }
      ],
      bulletsTitle: "Anwendung:",
      bullets: [
        "Entformung auf Plaques, Band oder direkt in Kundenverpackungen.",
        "Formverdrehung und Vakuum- oder Klopfsystem"
      ]
    },
    characteristics: [
      "Direktangetriebene Linearmotoren ohne Getriebespiel",
      "Präzision < 0.1 mm für empfindlichste Schokoladenprodukte",
      "Extrem hohe Beschleunigungswerte für reduzierte Taktzeiten",
      "Rezeptgesteuerter Greiferwechsel in Minuten"
    ],
    specs: [
      { label: "Wiederholgenauigkeit", value: "< 0.05 mm" },
      { label: "Geschwindigkeit", value: "Bis zu 4 m/s" }
    ],
    variantsDetail: [
      { name: "Hi-Flex Portal", desc: "Überkopfmontage zur platzsparenden Beschickung von Kühllinien." }
    ],
    options: [
      "Spezial-Vakuum-Saugleisten aus lebensmittelechtem Silikon",
      "Integriertes Kamerasystem zur Lageerkennung"
    ],
    applications: [
      { title: "Formenhandling & Entformen", desc: "Schonendes Entnehmen und Setzen in Blister oder Zuführbänder." }
    ]
  },
  {
    id: "vision-control",
    name: "Vision Control",
    kicker: "Optische Qualitätsprüfung & Kontrolle",
    category: "Peripheriegeräte",
    image: "assets/img/Produkte/vision-control-clean.png",
    cutoutImage: "assets/img/Produkte/vision-control-clean.png",
    diagramImage: "assets/img/Produkte/Vision-control-diagram.png",
    variantsDiagramImage: "assets/img/Produkte/Vision-control-diagram.png",
    pdf: "/assets/pdf/TVC-Vision Control_Technisches Datenblatt.pdf",
    video: "assets/media/products/cad panda sep 22 trikno .mp4",
    lead: "Vision Control mit automatischer Leerformen-Kontrolle und Auf-/Abstapler.",
    description: "Das optische Prüfsystem garantiert, dass nur saubere, unbeschädigte Formen in den Giesskreislauf gelangen und keine fehlerhaften Produkte die Linie verlassen.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "Hochauflösende 2D- und 3D-Kamerasysteme mit KI-gestützter Fehlererkennung und Ausschleuseweiche.",
    hasCustomLayout: true,
    diagramTitleUSP: "TVC Vision Control USP's",
    diagramTitleVariants: "TVC Vision Control Varianten",
    usps: [
      { id: "unmanned", pos: "left", title: "Mannlose Qualitätsprüfung", desc: "Automatisch und immer (24/7)", dot: { x: 65.1, y: 27.9 } },
      { id: "rfid", pos: "left", title: "RFID-Formerkennung", desc: "Nur richtige Formen werden überprüft", dot: { x: 54.5, y: 43.2 } },
      { id: "switchover", pos: "left", title: "Schnelle Produktionswechsel", desc: "ohne Stillstände", dot: { x: 37.5, y: 54.6 } },
      { id: "live", pos: "right", title: "Live Kavitätenkontrolle", desc: "Gezielte Fehlerlokalisierung", dot: { x: 70.4, y: 23.2 } },
      { id: "colors", pos: "right", title: "Unterschiedliche Farben", desc: "Mehrfarbige Schokoladen sauber prüfen", dot: { x: 63.8, y: 44.4 } },
      { id: "mouldchange", pos: "right", title: "Formwechsel", desc: "Ohne unnötige Unterbrechungen", dot: { x: 45.2, y: 51.2 } },
      { id: "retooling", pos: "right", title: "Einfaches Umrüsten", desc: "Weniger manuelle Eingriffe", dot: { x: 37.3, y: 56.7 } }
    ],
    variantsCustom: [
      { id: "in-out", pos: "left", title: "Ein- und Auslauf", desc: "Länge und Breite individuell", dot: { x: 21.4, y: 63.9 } },
      { id: "rfid", pos: "right", title: "RFID-Formerkennung", desc: "Nur richtige Formen werden überprüft", dot: { x: 57.2, y: 38.2 } },
      { id: "stacker", pos: "right", title: "1 oder 2 Aufstapler", desc: "", dot: { x: 45.1, y: 49.4 } },
      { id: "destacker", pos: "right", title: "1 oder 2 Abstapler", desc: "", dot: { x: 36.0, y: 53.3 } }
    ],
    optionsCustom: [
      "Laufrichtung: Links nach rechts (Bildschirm rechts) / Rechts nach links (Bildschirm links)",
      "Aufstapler: ohne / 1 Aufstapler (Default) / 2 Aufstapler",
      "Abstapler: ohne / 1 Abstapler (Default) / 2 Abstapler"
    ],
    applicationCustom: {
      title: "TVC Vision control (Formen handling)",
      subtitle: "Für eine reibungslose Produktion",
      products: [
        { title: "Tafeln & Pralinen", stat1: "24/7 Live-Kontrolle", stat2: "RFID-Formerkennung", image: "assets/img/Applikationen/Gesamtsortiment.jpg" },
        { title: "Formen-Magazin", stat1: "25 Formen Speicher", stat2: "Fliegender Formwechsel", image: "assets/img/Applikationen/One-Shot.jpg" }
      ],
      bulletsTitle: "Funktionsumfang & Anwendung:",
      bullets: [
        "Live-Überwachung der Formen mit automatisch generierten Rastern und Positionen in jedem Hohlraum.",
        "Verschiedene Schokoladenfarben sind in einem Programm möglich.",
        "Einfache Bedienung auf einem 15'' Touchscreen.",
        "Formerkennung durch RFID ist möglich.",
        "Magazin für jeweils 25 Formen als Aufbewahrung für Formen, die nicht vollständig entformt wurden, und für neue, leere Formen.",
        "Diese Funktion kann auch während eines Formwechsels verwendet werden: «alte Formen» heraus und «neue Formen» hinein."
      ]
    },
    characteristics: [
      "100% lückenlose Qualitätskontrolle bei voller Liniengeschwindigkeit",
      "Erkennt Schokoladenreste, Risse, Verschmutzungen und Fremdkörper",
      "Automatischer Ausschleuser für fehlerhafte Formen",
      "Ausführliche statistische Protokollierung"
    ],
    specs: [
      { label: "Inspektionsrate", value: "Bis zu 60 Formen/Min." },
      { label: "Kameraauflösung", value: "5 Megapixel Industrie-Sensor" }
    ],
    variantsDetail: [
      { name: "Vision Control Mold", desc: "Prüfung auf Formenverschmutzung vor dem Giessen." },
      { name: "Vision Control Product", desc: "Prüfung auf Füllstand und Oberflächenbeschaffenheit." }
    ],
    options: [
      "Farbkamera für Dekorationsabgleich",
      "Cloud-Reporting für Schichtberichte"
    ],
    applications: [
      { title: "Qualitätssicherung", desc: "Null-Fehler-Strategie für anspruchsvolle Premiummarken." }
    ]
  },
  {
    id: "elevator",
    name: "Elevator",
    kicker: "Mit und ohne Kühlung",
    category: "Peripheriegeräte",
    image: "assets/img/Produkte/Elevator.jpg",
    cutoutImage: "assets/img/Produkte/Elevator.jpg",
    pdf: "/assets/pdf/Trikno_Imagebrochure_2026-08_EN_V5.pdf",
    video: "assets/media/products/cad panda sep 22 trikno .mp4",
    lead: "Hauptsächlich als Puffer oder Lift zum Überkopf-Formenrücktransport verwendet.",
    description: "Der vertikale Paternoster überwindet Höhenunterschiede mühelos und ermöglicht den platzsparenden Formenrücktransport unter der Decke.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "Verfügbar als reiner Hebelift oder als isolierter Kühlturm mit integrierter Kältetechnik.",
    characteristics: [
      "Extrem raumsparender Vertikaltransport",
      "Schonende Wiegenaufhängung der Formen ohne Schräglage",
      "Integrierbare Kühlaggregate für Zwischenkühlung",
      "Präzise Taktung synchronisiert mit der Giesslinie"
    ],
    specs: [
      { label: "Hubhöhe", value: "Bis zu 6 Meter" },
      { label: "Traglast", value: "Bis zu 25 kg pro Träger" }
    ],
    variantsDetail: [
      { name: "Elevator Transport", desc: "Höhenüberwindung zum Formenspeicher." },
      { name: "Elevator Cooling", desc: "Gekühlter Paternoster zur Kühlung im Aufstieg." }
    ],
    options: [
      "Isoliergehäuse mit Sichtfenstern",
      "Sicherheits-Lichtgitter an Ein- und Auslauf"
    ],
    applications: [
      { title: "Formenrückführung", desc: "Überkopf-Rücktransport ohne Belegung wertvoller Bodenflächen." }
    ]
  },
  {
    id: "roboter",
    name: "Roboter (Handling)",
    kicker: "Vielseitig einsetzbar",
    category: "Peripheriegeräte",
    image: "assets/img/Produkte/Roboter.jpg",
    cutoutImage: "assets/img/Produkte/Roboter.jpg",
    pdf: "/assets/pdf/Trikno_Imagebrochure_2026-08_EN_V5.pdf",
    video: "assets/media/products/cad panda sep 22 trikno .mp4",
    lead: "Industrieroboter für hochflexible Verpackungs- und Handlingsaufgaben.",
    description: "TRIKNO Roboterzellen automatisieren das Einlegen, Palettieren und Verpacken mit höchster Präzision und schonendem Greifverhalten für zarte Schokoladenprodukte.",
    variantsTitle: "Ausführungs-Varianten",
    variantsText: "4-Achs Scara- und 6-Achs Gelenkarm-Roboter mit massgeschneiderten Greiferköpfen und Reinraum-Schutzklasse.",
    characteristics: [
      "Höchste Flexibilität für wechselnde Produkte und Packmuster",
      "Lebensmittelechte Greifer und schmierstofffreie Gelenke",
      "Einfache Programmierung über Teach-Pendant",
      "Nahtlose Verkettung mit Schlauchbeutel- und Schachtelpackern"
    ],
    specs: [
      { label: "Reichweite", value: "800 bis 1600 mm" },
      { label: "Taktzahl", value: "Bis zu 90 Picks/Min." }
    ],
    variantsDetail: [
      { name: "Pick & Place Roboter", desc: "Schnelles Einsetzen von Pralinen in Trays und Blister." },
      { name: "Palettier-Roboter", desc: "Automatisches Stapeln fertiger Kartons auf Europaletten." }
    ],
    options: [
      "3D-Kamerabasiertes Bandverfolgungssystem (Conveyor Tracking)",
      "Vakuum-, Nadel- oder Klemmgreifer je nach Gebäck- oder Schokoladentyp"
    ],
    applications: [
      { title: "Endverpackung", desc: "Sortieren und Verpacken edelster Süsswaren ohne jede Druckstelle." }
    ]
  },
  {
    id: "gesamtanlagen",
    name: "Gesamtanlagen & Engineering",
    kicker: "Schlüsselfertige Produktionslinien",
    category: "Gesamtanlagen",
    image: "assets/img/Produkte/Alpha_CAD-clean.png",
    cutoutImage: "assets/img/Produkte/Alpha_CAD-clean.png",
    pdf: "/assets/pdf/Trikno_Imagebrochure_2026-08_EN_V5.pdf",
    video: "assets/media/products/cad panda sep 22 trikno .mp4",
    lead: "Vollautomatisierte industrielle Gesamtanlagen von der Schokoladenzufuhr bis zur Endverpackung.",
    description: "TRIKNO plant, konstruiert und realisiert komplette, schlüsselfertige Schokoladen- und Süsswarenlinien für führende Hersteller weltweit.",
    variantsTitle: "Modulares Linienkonzept",
    variantsText: "Nahtlose Verkettung von Giessmaschinen, ColdPress-Stationen, Kühltürmen, Rüttelstrecken und Robotik nach Industrie 4.0 Standards.",
    characteristics: [
      "Individuelles Schweizer Engineering nach Mass",
      "Vollautomatische Steuerung mit zentraler Leitstand-Anbindung",
      "Höchste Gesamtanlageneffektivität (OEE)",
      "Weltweiter 24/7 Fernwartungs- und Ersatzteilservice"
    ],
    specs: [
      { label: "Kapazität", value: "Bis zu mehreren Tonnen / Schicht" },
      { label: "Linienbreite", value: "Individuell bis 1200 mm" },
      { label: "Automationsgrad", value: "Vollautomatisch mit SCADA Anbindung" }
    ],
    variantsDetail: [
      { name: "Turnkey Pralinenlinie", desc: "Schale, Füllung, Deckeln und Kühlen in einem kontinuierlichen Durchlauf." },
      { name: "Tafellinie High-Output", desc: "Kontinuierliches Giessen und Verpacken von Schokoladentafeln." }
    ],
    options: [
      "Zentrale Masseaufbereitung und Ringleitungssteuerung",
      "Integrierte Röntgen- und Metalldetektoren",
      "Energie-Rückgewinnungssysteme für Kühlstrecken"
    ],
    applications: [
      { title: "Industrielle Grossproduktion", desc: "Höchste Durchsätze bei kompromissloser Schweizer Qualität." }
    ]
  }
];

function insertStandaloneNussProducts(list) {
  function buildFrom(base, overrides) {
    const nuss = (base.subModes || []).find((m) => m.key === "nuss");
    if (!nuss) return null;
    return {
      ...base,
      ...overrides,
      pdf: nuss.pdf || base.pdf,
      video: nuss.video || base.video,
      diagramImage: nuss.diagramImage || base.diagramImage,
      diagramTitleUSP: nuss.diagramTitleUSP,
      diagramTitleVariants: nuss.diagramTitleVariants,
      usps: nuss.usps,
      variantsCustom: nuss.variantsCustom,
      optionsCustom: nuss.optionsCustom,
      applicationCustom: nuss.applicationCustom,
      subModes: undefined
    };
  }

  const additions = [
    {
      afterId: "alpha",
      overrides: {
        id: "alpha-nuss",
        name: "Alpha Nuss",
        fullName: "TCM Alpha Nuss",
        kicker: "Gut für Inklusionen geeignet",
        lead: "Speziell für Massen mit grossen Inklusionen bis zu 40 % Anteil – als reine Nussmaschine oder Hybrid-Variante.",
        description: "Die TCM Alpha Nuss kombiniert höchste Dosierpräzision mit bis zu Ø70 mm Kolben für stückige Massen, ganze Nüsse und anspruchsvolle Hybrid-Anwendungen bis 650 mm Formbreite."
      }
    },
    {
      afterId: "eta",
      overrides: {
        id: "eta-nuss",
        name: "ETA Nuss",
        fullName: "TCM Eta Nuss",
        kicker: "Konzipiert für Drittanbieter-Anlagen (>650 mm)",
        lead: "Kompakte Retrofit- und Hochleistungsmaschine für Inklusionen bis zu 40 % Anteil und Formbreiten bis 1200 mm.",
        description: "Die TCM Eta Nuss eignet sich ideal für die Integration in bestehende Linien oder breite Formen >650 mm – wahlweise mit Sicherheitsverschalung oder als offenes Retrofit-Modul."
      }
    }
  ];

  additions.forEach(({ afterId, overrides }) => {
    const idx = list.findIndex((p) => p.id === afterId);
    if (idx === -1) return;
    const built = buildFrom(list[idx], overrides);
    if (built) list.splice(idx + 1, 0, built);
  });
}

insertStandaloneNussProducts(products);

if (typeof window !== 'undefined') {
  window.TRIKNO_PRODUCTS = products;
}
if (typeof module !== 'undefined') {
  module.exports = products;
}
