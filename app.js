const supportedLanguages = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "mx", label: "Español (México)" },
  { code: "it", label: "Italiano" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "ar", label: "العربية" },
  { code: "ja", label: "日本語" },
  { code: "ru", label: "Русский" },
  { code: "sv", label: "Svenska" },
  { code: "hi", label: "हिन्दी" },
  { code: "zh", label: "中文" },
  { code: "nl", label: "Nederlands" },
];

const t = {
  de: {
    langLabel: "Sprache",
    skip: "Zum Inhalt springen",
    navFeatures: "Features",
    navHow: "How to play",
    navEu: "EU-Konformität",
    heroEyebrow: "Synthwave • Arcade • Skill",
    heroWelcome: "Willkommen bei",
    heroTitle: "R-K8: Reaktionsstarkes Neon-Arcade Gameplay",
    heroLead: "Weiche Gegnerwellen aus, sammle Credits, schalte Upgrades frei und jage den Highscore im futuristischen Space-Look.",
    btnGuide: "Spielanleitung",
    btnFeatures: "Features ansehen",
    coreLoop: "Core Loop",
    loop1: "Starten und Wellen überleben",
    loop2: "Credits verdienen und Upgrades kaufen",
    loop3: "Build optimieren und Highscore pushen",
    featuresTitle: "Hauptfeatures",
    howTitle: "How to play",
    euTitle: "EU-Konformität (Schwerpunkt)",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    access: "Barrierefreiheit",
    backHome: "Zurück zur Startseite",
    imprintLaw: "Angaben gemäß 5 TMG",
    contact: "Kontakt",
    responsible: "Verantwortlich für den Inhalt",
    f1t: "Dynamische Arcade-Action",
    f1d: "Schnelles Gameplay mit steigender Schwierigkeit und klaren Rückmeldungen bei Treffern, Explosionen und Combos.",
    f2t: "Power-Ups & Build-Strategie",
    f2d: "Schalte Upgrades frei (z. B. Mehrfachschuss, Schutzsysteme) und kombiniere sie passend zu deinem Spielstil.",
    f3t: "Leaderboard & Fortschritt",
    f3d: "Speichere Scores lokal, verfolge deine Bestleistungen und arbeite dich konstant zu besseren Runs hoch.",
    f4t: "Synthwave-Design",
    f4d: "Das visuelle Konzept basiert auf Neon-Cyan, Magenta und dunklen Space-Gradienten - passend zum Ingame-Look.",
    s1t: "1. Steuerung wählen",
    s1d: "Wähle im Menü zwischen Tap- und Swipe-Steuerung, je nachdem was dir präziser liegt.",
    s2t: "2. Positionieren & ausweichen",
    s2d: "Bleibe in Bewegung, lies Gegnerbewegungen früh und halte sichere Fluchtwege offen.",
    s3t: "3. Credits investieren",
    s3d: "Nutze erspielte Credits gezielt für Upgrades und aktiviere die stärksten Kombinationen für längere Runs.",
    s4t: "4. Highscore verbessern",
    s4d: "Lerne Spawn-Muster, minimiere Treffer und optimiere deinen Build Runde für Runde.",
    p2t: "2. Hosting und Server-Logs",
    p2d: "Beim Aufruf der Website können technisch notwendige Logdaten (z. B. IP-Adresse, Datum/Uhrzeit, User-Agent) durch den Hosting-Anbieter verarbeitet werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (sicherer Betrieb der Website).",
    p3t: "3. Cookies und Tracking",
    p3d: "Diese Website setzt standardmäßig keine Marketing- oder Tracking-Cookies und nutzt keine externen Analyse-Skripte. Sollte das später geändert werden, ist vorab ein DSGVO-konformes Einwilligungsmanagement zu implementieren.",
    p4t: "4. Kontaktaufnahme",
    p4d: "Wenn du per E-Mail kontaktierst, werden deine Angaben zur Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b oder lit. f DSGVO.",
    p5t: "5. Betroffenenrechte",
    p5d: "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch gemäß DSGVO. Zudem besteht ein Beschwerderecht bei einer Aufsichtsbehörde.",
    p6t: "6. Stand",
    p6d: "Stand: April 2026",
    a1t: "Unser Anspruch",
    a1d: "Diese Website ist so gestaltet, dass sie möglichst wahrnehmbar, bedienbar, verständlich und robust ist. Das betrifft besonders Struktur, Kontrast und Bedienung ohne Maus.",
    a2t: "Umgesetzte Maßnahmen",
    a2l1: "Semantische HTML-Struktur mit klaren Überschriften",
    a2l2: "Tastaturfokus für interaktive Elemente",
    a2l3: "Responsives Layout für Mobilgeräte und Desktop",
    a2l4: "Verzicht auf auto-playende Audioelemente",
    a3t: "Bekannte Einschränkungen",
    a3d: "Einzelne visuelle Effekte (Neon-Glows, Glas-Effekte) können je nach Endgerät variieren. Wenn du auf Probleme stößt, melde dich bitte mit Gerät, Browser und kurzer Beschreibung.",
    a4t: "Feedback und Kontakt",
    a4d: "Wir prüfen gemeldete Barrieren zeitnah und verbessern die Seite fortlaufend.",
    supportTitle: "Support & Hilfe",
    supContactT: "Kontakt",
    supContactD:
      "Bei Fragen zu R-K8, In-App-Käufen oder technischen Problemen erreichst du uns per E-Mail. Wir antworten in der Regel innerhalb weniger Werktage.",
    supRestoreT: "Käufe wiederherstellen",
    supRestoreD:
      "Im Spiel: Menü → „…“ → „Käufe wiederherstellen“. Nutze dieselbe Apple-ID wie beim ursprünglichen Kauf. Dauerhafte Freischaltungen (z. B. alle Power-Ups oder alle Musiktracks) werden dabei wiederhergestellt.",
    supRestoreNote:
      "Münz-Pakete sind verbrauchbare In-App-Käufe; Apple liefert abgeschlossene Käufe in der Regel nicht erneut. Bei Abrechnungsfragen wende dich an den Apple-Kauf-Support.",
    supTechT: "Technische Probleme",
    supTechD:
      "Bitte nenne in deiner E-Mail: Gerätemodell, iOS-Version, kurze Beschreibung des Problems und ob es nach einem App-Update aufgetreten ist. Screenshots helfen bei der Fehlersuche.",
    supLegalT: "Weitere Informationen",
    appPrivacyTitle: "App-Datenschutz",
    appPrivacyMeta: "Stand: Mai 2026 · Entwickler: Hashim Acra · Kontakt:",
    app1t: "1. Verantwortlicher",
    app1d:
      "Verantwortlich für die App R-K8 (Bundle-ID: com.hashim.gamebase1) ist der Entwickler Hashim Acra. Bei Fragen zum Datenschutz erreichst du uns unter der oben genannten E-Mail-Adresse.",
    app2t: "2. Kurzfassung",
    app2l1: "Keine Werbung, kein App-Tracking (ATT), keine Abfrage der Werbe-ID (IDFA).",
    app2l2: "Keine Erstellung von Nutzerkonten und keine Übermittlung von Spielständen an unsere Server.",
    app2l3: "Spieldaten werden nur lokal auf deinem Gerät gespeichert (z. B. Coins, Highscores, Einstellungen).",
    app2l4: "Optionale In-App-Käufe werden ausschließlich von Apple abgewickelt.",
    app3t: "3. Welche Daten verarbeiten wir?",
    app3Intro: "Lokal auf dem Gerät (UserDefaults / App-Speicher):",
    app3l1: "Spielstand und Fortschritt (z. B. Coins, freigeschaltete Upgrades, Musik, Schwierigkeit, Steuerung)",
    app3l2: "Lokale Bestenliste (Name und Punktzahl, die du freiwillig eingibst)",
    app3l3: "Spracheinstellung und Audio-Einstellungen",
    app3l4: "Technische Merker für In-App-Käufe (z. B. bereits vergebene Transaktions-IDs, um Doppelvergaben zu vermeiden)",
    app3d: "Diese Daten verbleiben auf deinem iPhone/iPad, bis du die App löschst oder die Daten in iOS zurücksetzt.",
    app4t: "4. In-App-Käufe",
    app4l1:
      "Wenn du optionale Produkte kaufst (z. B. Coin-Pakete oder dauerhafte Freischaltungen), verarbeitet Apple die Zahlung. Wir erhalten keine vollständigen Zahlungsdaten (z. B. keine Kreditkartennummer). Apple kann uns eine Transaktions-ID und Produktinformationen zur Verfügung stellen, damit wir den Kauf im Spiel anwenden können.",
    app4l2:
      "Verbrauchbare Coin-Pakete werden nach Abschluss in der Regel nicht erneut ausgeliefert. „Käufe wiederherstellen“ synchronisiert vor allem dauerhafte Freischaltungen und ausstehende Transaktionen über deine Apple-ID.",
    app5t: "5. Keine Tracking-Dienste",
    app5d: "Wir binden keine Analyse- oder Werbe-SDKs von Drittanbietern ein und verkaufen keine personenbezogenen Daten.",
    app6t: "6. Berechtigungen",
    app6d: "Die App fordert keine Kamera-, Mikrofon-, Standort- oder Kontaktberechtigungen an.",
    app7t: "7. Kinder",
    app7d: "Die App richtet sich an ein allgemeines Publikum. Es werden wissentlich keine personenbezogenen Daten von Kindern an uns übermittelt.",
    app8t: "8. Deine Rechte",
    app8d:
      "Du kannst lokale Daten jederzeit löschen, indem du die App deinstallierst oder App-Daten in den iOS-Einstellungen zurücksetzt. Für Käufe und Rückerstattungen wende dich an den",
    app8Link: "Apple Support",
    app9t: "9. Änderungen",
    app9d: "Wir können diese Erklärung bei Bedarf anpassen. Die aktuelle Version ist unter der in App Store Connect angegebenen URL abrufbar.",
    metaTitleIndex: "R-K8 — Neon-Arcade-Shooter",
    metaDescIndex:
      "R-K8 — Neon-Arcade-Shooter für iOS. Wellen, Power-Ups, Tägliche Missionen, Veteran-Ränge und Synthwave-Design.",
    metaTitleSupport: "Support & Hilfe — R-K8",
    metaDescSupport: "Support für R-K8: Kontakt, Käufe wiederherstellen und Hilfe bei technischen Problemen.",
    metaTitleImprint: "Impressum — R-K8",
    metaDescImprint: "Impressum und Anbieterkennzeichnung der R-K8-Website.",
    metaTitlePrivacy: "Datenschutz — R-K8",
    metaDescPrivacy: "Datenschutzerklärung der R-K8-Website: Hosting, Cookies, Kontakt und Betroffenenrechte.",
    metaTitleAppPrivacy: "App-Datenschutz — R-K8",
    metaDescAppPrivacy: "Datenschutz der iOS-App R-K8: lokale Speicherung, In-App-Käufe und keine Tracking-Dienste.",
    metaTitleAccess: "Barrierefreiheit — R-K8",
    metaDescAccess: "Barrierefreiheit der R-K8-Website: Maßnahmen, Grenzen und Kontakt für Feedback.",
  },
  en: {
    langLabel: "Language", skip: "Skip to content", navFeatures: "Features", navHow: "How to play", navEu: "EU compliance", heroEyebrow: "Synthwave • Arcade • Skill", heroWelcome: "Welcome to", heroTitle: "R-K8: Fast-paced neon arcade gameplay", heroLead: "Dodge enemy waves, earn credits, unlock upgrades, and chase your high score in a futuristic space style.", btnGuide: "How to play", btnFeatures: "View features", coreLoop: "Core loop", loop1: "Start and survive waves", loop2: "Earn credits and buy upgrades", loop3: "Optimize your build and push high score", featuresTitle: "Main features", howTitle: "How to play", euTitle: "EU compliance focus", legal: "Legal", imprint: "Imprint", privacy: "Privacy", access: "Accessibility", backHome: "Back to home", imprintLaw: "Information according to 5 TMG", contact: "Contact", responsible: "Responsible for content",
    f1t: "Dynamic arcade action",
    f1d: "Fast gameplay with rising difficulty and clear feedback for hits, explosions and combos.",
    f2t: "Power-ups and build strategy",
    f2d: "Unlock upgrades (e.g. multishot, protection systems) and combine them to match your play style.",
    f3t: "Leaderboard and progress",
    f3d: "Save scores locally, track your best runs and steadily improve your performance.",
    f4t: "Synthwave design",
    f4d: "The visual concept is based on neon cyan, magenta and dark space gradients, matching the in-game look.",
    s1t: "1. Choose controls",
    s1d: "Choose between tap and swipe controls in the menu to match your preferred precision.",
    s2t: "2. Position and dodge",
    s2d: "Keep moving, read enemy movement early and maintain safe escape paths.",
    s3t: "3. Invest credits",
    s3d: "Use earned credits strategically for upgrades and activate strong combinations for longer runs.",
    s4t: "4. Improve high score",
    s4d: "Learn spawn patterns, reduce hits taken and optimize your build run after run.",
    p2t: "2. Hosting and server logs",
    p2d: "When visiting this website, technically required log data (e.g. IP address, date/time, user agent) may be processed by the hosting provider. Legal basis: Art. 6(1)(f) GDPR.",
    p3t: "3. Cookies and tracking",
    p3d: "This website does not use marketing or tracking cookies by default and does not load external analytics scripts. If this changes, a GDPR-compliant consent solution must be added first.",
    p4t: "4. Contact",
    p4d: "If you contact us by email, your data is processed to handle your request. Legal basis: Art. 6(1)(b) or Art. 6(1)(f) GDPR.",
    p5t: "5. Data subject rights",
    p5d: "You have rights to access, rectification, erasure, restriction, data portability and objection under GDPR, plus the right to lodge a complaint with a supervisory authority.",
    p6t: "6. Version",
    p6d: "Version: April 2026",
    a1t: "Our commitment",
    a1d: "This website is designed to be as perceivable, operable, understandable and robust as possible.",
    a2t: "Implemented measures",
    a2l1: "Semantic HTML structure with clear headings",
    a2l2: "Keyboard focus for interactive elements",
    a2l3: "Responsive layout for mobile and desktop",
    a2l4: "No auto-playing audio elements",
    a3t: "Known limitations",
    a3d: "Some visual effects may vary depending on device/browser. If you find barriers, please report device, browser and issue details.",
    a4t: "Feedback and contact",
    a4d: "We review reported barriers promptly and continuously improve the site.",
    supportTitle: "Support & help",
    supContactT: "Contact",
    supContactD:
      "For questions about R-K8, in-app purchases or technical issues, contact us by email. We usually reply within a few business days.",
    supRestoreT: "Restore purchases",
    supRestoreD:
      "In the game: Menu → \"…\" → \"Restore Purchases\". Use the same Apple ID as for the original purchase. Permanent unlocks (e.g. all power-ups or all music tracks) are restored.",
    supRestoreNote:
      "Coin packs are consumable in-app purchases; Apple typically does not re-deliver completed purchases. For billing questions, contact Apple purchase support.",
    supTechT: "Technical issues",
    supTechD:
      "Please include in your email: device model, iOS version, a short description of the issue, and whether it started after an app update. Screenshots help with troubleshooting.",
    supLegalT: "More information",
    appPrivacyTitle: "App privacy policy",
    appPrivacyMeta: "Last updated: May 2026 · Developer: Hashim Acra · Contact:",
    app1t: "1. Controller",
    app1d:
      "The app R-K8 (bundle ID: com.hashim.gamebase1) is provided by Hashim Acra. For privacy questions, contact us at the email address above.",
    app2t: "2. Summary",
    app2l1: "No ads, no App Tracking Transparency (ATT), no advertising identifier (IDFA).",
    app2l2: "No user accounts and no upload of gameplay progress to our servers.",
    app2l3: "Gameplay data is stored only on your device (e.g. coins, high scores, settings).",
    app2l4: "Optional in-app purchases are processed by Apple only.",
    app3t: "3. What data do we process?",
    app3Intro: "On-device only (UserDefaults / app storage):",
    app3l1: "Game progress (e.g. coins, unlocked upgrades, music, difficulty, controls)",
    app3l2: "Local leaderboard entries (name and score you optionally enter)",
    app3l3: "Language and audio preferences",
    app3l4: "Purchase bookkeeping (e.g. granted transaction IDs to prevent duplicate rewards)",
    app3d: "This data stays on your iPhone/iPad until you delete the app or reset its data in iOS.",
    app4t: "4. In-app purchases",
    app4l1:
      "If you buy optional products (e.g. coin packs or permanent unlocks), Apple processes payment. We do not receive full payment details (such as card numbers). Apple may provide a transaction ID and product information so we can apply the purchase in the game.",
    app4l2:
      "Consumable coin packs are generally not re-delivered after completion. “Restore Purchases” mainly syncs permanent unlocks and pending transactions for your Apple ID.",
    app5t: "5. No tracking services",
    app5d: "We do not integrate third-party analytics or advertising SDKs and we do not sell personal data.",
    app6t: "6. Permissions",
    app6d: "The app does not request camera, microphone, location, or contacts access.",
    app7t: "7. Children",
    app7d: "The app is intended for a general audience. We do not knowingly collect personal data from children.",
    app8t: "8. Your rights",
    app8d:
      "You can delete local data at any time by uninstalling the app or resetting app data in iOS Settings. For purchases and refunds, contact",
    app8Link: "Apple Support",
    app9t: "9. Changes",
    app9d: "We may update this policy when needed. The current version is available at the URL listed in App Store Connect.",
    metaTitleIndex: "R-K8 — Neon Arcade Shooter",
    metaDescIndex:
      "R-K8 — neon arcade shooter for iOS. Waves, power-ups, daily missions, veteran ranks and synthwave style.",
    metaTitleSupport: "Support & help — R-K8",
    metaDescSupport: "R-K8 support: contact, restore purchases and help with technical issues.",
    metaTitleImprint: "Imprint — R-K8",
    metaDescImprint: "Imprint and provider information for the R-K8 website.",
    metaTitlePrivacy: "Privacy — R-K8",
    metaDescPrivacy: "Privacy policy for the R-K8 website: hosting, cookies, contact and your rights.",
    metaTitleAppPrivacy: "App privacy — R-K8",
    metaDescAppPrivacy: "Privacy for the R-K8 iOS app: on-device storage, in-app purchases and no tracking.",
    metaTitleAccess: "Accessibility — R-K8",
    metaDescAccess: "Accessibility on the R-K8 website: measures, limitations and feedback contact.",
  },
  es: {
    langLabel: "Idioma", skip: "Saltar al contenido", navFeatures: "Funciones", navHow: "Cómo jugar", navEu: "Conformidad UE", heroEyebrow: "Synthwave • Arcade • Habilidad", heroWelcome: "Bienvenido a", heroTitle: "R-K8: jugabilidad arcade neón intensa", heroLead: "Esquiva oleadas enemigas, gana créditos, desbloquea mejoras y supera tu récord.", btnGuide: "Guía de juego", btnFeatures: "Ver funciones", coreLoop: "Bucle principal", loop1: "Comienza y sobrevive oleadas", loop2: "Gana créditos y compra mejoras", loop3: "Optimiza tu build y sube récord", featuresTitle: "Funciones principales", howTitle: "Cómo jugar", euTitle: "Conformidad UE", legal: "Legal", imprint: "Aviso legal", privacy: "Privacidad", access: "Accesibilidad", backHome: "Volver al inicio", imprintLaw: "Información según 5 TMG", contact: "Contacto", responsible: "Responsable del contenido"
  },
  mx: {
    langLabel: "Idioma", skip: "Saltar al contenido", navFeatures: "Funciones", navHow: "Cómo jugar", navEu: "Cumplimiento UE", heroEyebrow: "Synthwave • Arcade • Habilidad", heroWelcome: "Bienvenido a", heroTitle: "R-K8: acción arcade neón rápida", heroLead: "Esquiva oleadas enemigas, gana créditos, desbloquea mejoras y rompe tu récord.", btnGuide: "Guía de juego", btnFeatures: "Ver funciones", coreLoop: "Bucle principal", loop1: "Inicia y sobrevive oleadas", loop2: "Gana créditos y compra mejoras", loop3: "Optimiza tu build y sube récord", featuresTitle: "Funciones principales", howTitle: "Cómo jugar", euTitle: "Cumplimiento UE", legal: "Legal", imprint: "Aviso legal", privacy: "Privacidad", access: "Accesibilidad", backHome: "Volver al inicio", imprintLaw: "Información según 5 TMG", contact: "Contacto", responsible: "Responsable del contenido"
  },
  it: {
    langLabel: "Lingua", skip: "Vai al contenuto", navFeatures: "Funzionalità", navHow: "Come giocare", navEu: "Conformità UE", heroEyebrow: "Synthwave • Arcade • Skill", heroWelcome: "Benvenuto in", heroTitle: "R-K8: gameplay arcade neon ad alta velocità", heroLead: "Schiva ondate nemiche, guadagna crediti, sblocca upgrade e migliora il tuo record.", btnGuide: "Guida", btnFeatures: "Vedi funzionalità", coreLoop: "Ciclo di gioco", loop1: "Inizia e sopravvivi", loop2: "Guadagna crediti e compra upgrade", loop3: "Ottimizza la build e il record", featuresTitle: "Funzionalità principali", howTitle: "Come giocare", euTitle: "Conformità UE", legal: "Note legali", imprint: "Impressum", privacy: "Privacy", access: "Accessibilità", backHome: "Torna alla home", imprintLaw: "Informazioni ai sensi del 5 TMG", contact: "Contatto", responsible: "Responsabile dei contenuti"
  },
  fr: {
    langLabel: "Langue", skip: "Aller au contenu", navFeatures: "Fonctionnalités", navHow: "Comment jouer", navEu: "Conformité UE", heroEyebrow: "Synthwave • Arcade • Skill", heroWelcome: "Bienvenue sur", heroTitle: "R-K8 : gameplay arcade néon nerveux", heroLead: "Esquivez les vagues ennemies, gagnez des crédits, débloquez des améliorations et battez votre score.", btnGuide: "Guide de jeu", btnFeatures: "Voir les fonctionnalités", coreLoop: "Boucle de jeu", loop1: "Démarrer et survivre", loop2: "Gagner des crédits et acheter", loop3: "Optimiser le build et le score", featuresTitle: "Fonctionnalités principales", howTitle: "Comment jouer", euTitle: "Conformité UE", legal: "Mentions légales", imprint: "Mentions", privacy: "Confidentialité", access: "Accessibilité", backHome: "Retour à l'accueil", imprintLaw: "Informations selon le §5 TMG", contact: "Contact", responsible: "Responsable du contenu"
  },
  pt: {
    langLabel: "Idioma", skip: "Saltar para o conteúdo", navFeatures: "Recursos", navHow: "Como jogar", navEu: "Conformidade UE", heroEyebrow: "Synthwave • Arcade • Skill", heroWelcome: "Bem-vindo ao", heroTitle: "R-K8: gameplay arcade neon rápido", heroLead: "Desvie de ondas inimigas, ganhe créditos, desbloqueie upgrades e bata seu recorde.", btnGuide: "Guia do jogo", btnFeatures: "Ver recursos", coreLoop: "Loop principal", loop1: "Inicie e sobreviva às ondas", loop2: "Ganhe créditos e compre upgrades", loop3: "Otimize sua build e recorde", featuresTitle: "Recursos principais", howTitle: "Como jogar", euTitle: "Conformidade UE", legal: "Legal", imprint: "Aviso legal", privacy: "Privacidade", access: "Acessibilidade", backHome: "Voltar ao início", imprintLaw: "Informações conforme §5 TMG", contact: "Contato", responsible: "Responsável pelo conteúdo"
  },
  ar: {
    langLabel: "اللغة", skip: "انتقل إلى المحتوى", navFeatures: "المميزات", navHow: "طريقة اللعب", navEu: "الامتثال الأوروبي", heroEyebrow: "سينث ويف • أركيد • مهارة", heroWelcome: "مرحباً بـ", heroTitle: "R-K8: أسلوب أركيد نيون سريع", heroLead: "تجنب موجات الأعداء، اجمع الرصيد، افتح الترقيات، وحقق أعلى نتيجة.", btnGuide: "دليل اللعب", btnFeatures: "عرض المميزات", coreLoop: "حلقة اللعب", loop1: "ابدأ واصمد أمام الموجات", loop2: "اكسب الرصيد واشترِ الترقيات", loop3: "حسّن البناء وارفع النتيجة", featuresTitle: "المميزات الرئيسية", howTitle: "طريقة اللعب", euTitle: "الامتثال الأوروبي", legal: "قانوني", imprint: "بيانات النشر", privacy: "الخصوصية", access: "إمكانية الوصول", backHome: "العودة للرئيسية", imprintLaw: "بيانات وفق §5 TMG", contact: "التواصل", responsible: "المسؤول عن المحتوى"
  },
  ja: {
    langLabel: "言語", skip: "コンテンツへ移動", navFeatures: "特徴", navHow: "遊び方", navEu: "EU準拠", heroEyebrow: "シンセウェーブ • アーケード • スキル", heroWelcome: "ようこそ", heroTitle: "R-K8: ハイテンポなネオンアーケード", heroLead: "敵の波を回避し、クレジットを集め、アップグレードを解除してハイスコアを狙おう。", btnGuide: "遊び方", btnFeatures: "特徴を見る", coreLoop: "ゲームループ", loop1: "開始してウェーブを生き残る", loop2: "クレジットを稼いで購入", loop3: "ビルド最適化とスコア更新", featuresTitle: "主な特徴", howTitle: "遊び方", euTitle: "EU準拠", legal: "法的情報", imprint: "運営者情報", privacy: "プライバシー", access: "アクセシビリティ", backHome: "ホームへ戻る", imprintLaw: "TMG第5条に基づく情報", contact: "連絡先", responsible: "コンテンツ責任者"
  },
  ru: {
    langLabel: "Язык", skip: "Перейти к содержимому", navFeatures: "Особенности", navHow: "Как играть", navEu: "Соответствие ЕС", heroEyebrow: "Synthwave • Arcade • Skill", heroWelcome: "Добро пожаловать в", heroTitle: "R-K8: динамичный неон-аркадный геймплей", heroLead: "Уклоняйтесь от волн врагов, зарабатывайте кредиты, открывайте улучшения и бейте рекорд.", btnGuide: "Руководство", btnFeatures: "Смотреть особенности", coreLoop: "Основной цикл", loop1: "Старт и выживание", loop2: "Кредиты и улучшения", loop3: "Оптимизация билда и рекорда", featuresTitle: "Ключевые особенности", howTitle: "Как играть", euTitle: "Соответствие ЕС", legal: "Правовая информация", imprint: "Импрессум", privacy: "Конфиденциальность", access: "Доступность", backHome: "Назад на главную", imprintLaw: "Сведения согласно §5 TMG", contact: "Контакты", responsible: "Ответственный за содержание"
  },
  sv: {
    langLabel: "Språk", skip: "Hoppa till innehåll", navFeatures: "Funktioner", navHow: "Hur man spelar", navEu: "EU-efterlevnad", heroEyebrow: "Synthwave • Arkad • Skill", heroWelcome: "Välkommen till", heroTitle: "R-K8: snabb neon-arkadaction", heroLead: "Undvik fiendevågor, tjäna credits, lås upp uppgraderingar och slå ditt rekord.", btnGuide: "Spelguide", btnFeatures: "Visa funktioner", coreLoop: "Kärnloop", loop1: "Starta och överlev vågor", loop2: "Tjäna credits och köp", loop3: "Optimera build och rekord", featuresTitle: "Huvudfunktioner", howTitle: "Hur man spelar", euTitle: "EU-efterlevnad", legal: "Juridiskt", imprint: "Impressum", privacy: "Integritet", access: "Tillgänglighet", backHome: "Tillbaka till startsidan", imprintLaw: "Uppgifter enligt 5 TMG", contact: "Kontakt", responsible: "Ansvarig för innehållet"
  },
  hi: {
    langLabel: "भाषा", skip: "सामग्री पर जाएँ", navFeatures: "फ़ीचर्स", navHow: "कैसे खेलें", navEu: "EU अनुपालन", heroEyebrow: "सिंथवेव • आर्केड • स्किल", heroWelcome: "स्वागत है —", heroTitle: "R-K8: तेज़ नीयॉन आर्केड गेमप्ले", heroLead: "दुश्मन वेव से बचें, क्रेडिट कमाएँ, अपग्रेड अनलॉक करें और हाईस्कोर बनाएं।", btnGuide: "गेम गाइड", btnFeatures: "फ़ीचर्स देखें", coreLoop: "कोर लूप", loop1: "शुरू करें और वेव सर्वाइव करें", loop2: "क्रेडिट कमाएँ और खरीदें", loop3: "बिल्ड ऑप्टिमाइज़ करें", featuresTitle: "मुख्य फ़ीचर्स", howTitle: "कैसे खेलें", euTitle: "EU अनुपालन", legal: "कानूनी", imprint: "इम्प्रिंट", privacy: "गोपनीयता", access: "सुलभता", backHome: "होम पर वापस", imprintLaw: "§5 TMG के अनुसार जानकारी", contact: "संपर्क", responsible: "सामग्री के लिए जिम्मेदार"
  },
  zh: {
    langLabel: "语言", skip: "跳到内容", navFeatures: "功能", navHow: "玩法", navEu: "欧盟合规", heroEyebrow: "合成波 • 街机 • 技巧", heroWelcome: "欢迎来到", heroTitle: "R-K8：高节奏霓虹街机体验", heroLead: "躲避敌方波次，赚取积分，解锁升级，不断刷新最高分。", btnGuide: "游戏指南", btnFeatures: "查看功能", coreLoop: "核心循环", loop1: "开始并生存", loop2: "赚积分并购买升级", loop3: "优化配置冲击高分", featuresTitle: "主要功能", howTitle: "玩法", euTitle: "欧盟合规重点", legal: "法律信息", imprint: "网站信息", privacy: "隐私", access: "无障碍", backHome: "返回首页", imprintLaw: "根据 TMG 第5条信息", contact: "联系方式", responsible: "内容负责人"
  },
  nl: {
    langLabel: "Taal", skip: "Ga naar inhoud", navFeatures: "Functies", navHow: "Hoe te spelen", navEu: "EU-conformiteit", heroEyebrow: "Synthwave • Arcade • Skill", heroWelcome: "Welkom bij", heroTitle: "R-K8: snelle neon-arcade gameplay", heroLead: "Ontwijk vijandgolven, verdien credits, speel upgrades vrij en verbeter je highscore.", btnGuide: "Spelgids", btnFeatures: "Bekijk functies", coreLoop: "Kernlus", loop1: "Starten en overleven", loop2: "Credits verdienen en kopen", loop3: "Build optimaliseren", featuresTitle: "Belangrijkste functies", howTitle: "Hoe te spelen", euTitle: "EU-conformiteit", legal: "Juridisch", imprint: "Impressum", privacy: "Privacy", access: "Toegankelijkheid", backHome: "Terug naar start", imprintLaw: "Gegevens volgens §5 TMG", contact: "Contact", responsible: "Verantwoordelijk voor inhoud"
  },
};

const fullContent = {
  es: {
    f1t: "Acción arcade dinámica", f1d: "Jugabilidad rápida con dificultad creciente y respuesta clara en impactos, explosiones y combos.",
    f2t: "Power-ups y estrategia de build", f2d: "Desbloquea mejoras y combínalas para adaptarlas a tu estilo de juego.",
    f3t: "Clasificación y progreso", f3d: "Guarda puntuaciones localmente y mejora tus partidas de forma constante.",
    f4t: "Diseño synthwave", f4d: "El concepto visual usa neón cian, magenta y gradientes espaciales oscuros.",
    s1t: "1. Elige controles", s1d: "Selecciona control por toque o deslizamiento desde el menú.",
    s2t: "2. Posición y esquiva", s2d: "Mantente en movimiento y anticipa los patrones enemigos.",
    s3t: "3. Invierte créditos", s3d: "Usa créditos para mejoras y activa combinaciones potentes.",
    s4t: "4. Mejora tu récord", s4d: "Aprende patrones, reduce daños y optimiza tu build en cada partida.",
    p2t: "2. Hosting y registros del servidor", p2d: "Al visitar el sitio, el proveedor puede procesar datos técnicos necesarios (IP, fecha/hora, agente). Base legal: Art. 6.1.f RGPD.",
    p3t: "3. Cookies y seguimiento", p3d: "Este sitio no usa cookies de marketing ni scripts de analítica externos por defecto. Si cambia, se requiere consentimiento RGPD previo.",
    p4t: "4. Contacto", p4d: "Si contactas por correo, tus datos se procesan para gestionar la solicitud. Base legal: Art. 6.1.b o 6.1.f RGPD.",
    p5t: "5. Derechos", p5d: "Tienes derecho de acceso, rectificación, supresión, limitación, portabilidad y oposición, además del derecho a reclamar ante la autoridad competente.",
    p6t: "6. Versión", p6d: "Versión: abril de 2026",
    a1t: "Nuestro compromiso", a1d: "Este sitio está diseñado para ser lo más perceptible, operable, comprensible y robusto posible.",
    a2t: "Medidas implementadas", a2l1: "Estructura HTML semántica con encabezados claros", a2l2: "Foco de teclado en elementos interactivos", a2l3: "Diseño responsive para móvil y escritorio", a2l4: "Sin audio en reproducción automática",
    a3t: "Limitaciones conocidas", a3d: "Algunos efectos visuales pueden variar según dispositivo y navegador.",
    a4t: "Feedback y contacto", a4d: "Revisamos barreras reportadas y mejoramos el sitio continuamente."
  },
  mx: {
    f1t: "Acción arcade dinámica", f1d: "Jugabilidad rápida con dificultad creciente y retroalimentación clara en impactos y combos.",
    f2t: "Power-ups y estrategia", f2d: "Desbloquea mejoras y combínalas según tu estilo.",
    f3t: "Ranking y progreso", f3d: "Guarda puntajes localmente y mejora cada run.",
    f4t: "Diseño synthwave", f4d: "Visual neón cian/magenta con gradientes espaciales oscuros.",
    s1t: "1. Elige controles", s1d: "Elige toque o deslizamiento en el menú.",
    s2t: "2. Posición y esquiva", s2d: "Muévete siempre y anticipa enemigos.",
    s3t: "3. Invierte créditos", s3d: "Compra mejoras y activa combinaciones fuertes.",
    s4t: "4. Mejora tu récord", s4d: "Aprende patrones y optimiza tu build partida tras partida.",
    p2t: "2. Hosting y logs del servidor", p2d: "Al visitar el sitio, el proveedor puede procesar datos técnicos necesarios. Base legal: Art. 6(1)(f) RGPD.",
    p3t: "3. Cookies y tracking", p3d: "No se usan cookies de marketing ni analítica externa por defecto.",
    p4t: "4. Contacto", p4d: "Si escribes por correo, tus datos se procesan para responder tu solicitud.",
    p5t: "5. Derechos", p5d: "Derechos de acceso, rectificación, eliminación, limitación, portabilidad y oposición según RGPD.",
    p6t: "6. Versión", p6d: "Versión: abril 2026",
    a1t: "Nuestro compromiso", a1d: "Sitio diseñado para ser perceptible, operable, comprensible y robusto.",
    a2t: "Medidas implementadas", a2l1: "HTML semántico con títulos claros", a2l2: "Foco de teclado en elementos interactivos", a2l3: "Diseño responsivo móvil y escritorio", a2l4: "Sin audio automático",
    a3t: "Limitaciones conocidas", a3d: "Algunos efectos visuales pueden variar según dispositivo/navegador.",
    a4t: "Comentarios y contacto", a4d: "Revisamos barreras reportadas y mejoramos continuamente."
  },
  it: {
    f1t: "Azione arcade dinamica", f1d: "Gameplay rapido con difficoltà crescente e feedback chiaro su colpi, esplosioni e combo.",
    f2t: "Power-up e strategia build", f2d: "Sblocca upgrade e combinazioni adatte al tuo stile.",
    f3t: "Classifica e progressi", f3d: "Salva i punteggi in locale e migliora costantemente.",
    f4t: "Design synthwave", f4d: "Look neon ciano/magenta con gradienti spaziali scuri.",
    s1t: "1. Scegli i controlli", s1d: "Seleziona tap o swipe dal menu.",
    s2t: "2. Posizionati e schiva", s2d: "Rimani in movimento e anticipa i nemici.",
    s3t: "3. Investi i crediti", s3d: "Usa i crediti per upgrade e combinazioni forti.",
    s4t: "4. Migliora il record", s4d: "Impara i pattern e ottimizza la build run dopo run.",
    p2t: "2. Hosting e log server", p2d: "Il provider può trattare dati tecnici necessari (IP, ora, user agent). Base giuridica: Art. 6(1)(f) GDPR.",
    p3t: "3. Cookie e tracciamento", p3d: "Nessun cookie marketing/tracking o analytics esterno di default.",
    p4t: "4. Contatto", p4d: "Se ci contatti via email, i dati sono trattati per gestire la richiesta.",
    p5t: "5. Diritti dell'interessato", p5d: "Diritto di accesso, rettifica, cancellazione, limitazione, portabilità e opposizione.",
    p6t: "6. Versione", p6d: "Versione: aprile 2026",
    a1t: "Il nostro impegno", a1d: "Sito progettato per essere percepibile, utilizzabile, comprensibile e robusto.",
    a2t: "Misure implementate", a2l1: "HTML semantico con titoli chiari", a2l2: "Focus tastiera sugli elementi interattivi", a2l3: "Layout responsive", a2l4: "Nessun audio in autoplay",
    a3t: "Limitazioni note", a3d: "Alcuni effetti visivi possono variare in base a dispositivo e browser.",
    a4t: "Feedback e contatto", a4d: "Analizziamo le segnalazioni e miglioriamo continuamente."
  },
  fr: {
    f1t: "Action arcade dynamique", f1d: "Gameplay rapide avec difficulté croissante et retours clairs sur impacts, explosions et combos.",
    f2t: "Power-ups et stratégie", f2d: "Débloque des améliorations et combine-les selon ton style.",
    f3t: "Classement et progression", f3d: "Enregistre les scores localement et progresse régulièrement.",
    f4t: "Design synthwave", f4d: "Univers visuel néon cyan/magenta avec dégradés spatiaux sombres.",
    s1t: "1. Choisir les contrôles", s1d: "Choisis tap ou swipe dans le menu.",
    s2t: "2. Se placer et esquiver", s2d: "Reste en mouvement et anticipe les ennemis.",
    s3t: "3. Investir les crédits", s3d: "Utilise les crédits pour des améliorations efficaces.",
    s4t: "4. Améliorer le score", s4d: "Apprends les patterns et optimise ton build.",
    p2t: "2. Hébergement et journaux serveur", p2d: "L'hébergeur peut traiter des données techniques nécessaires. Base légale: art. 6(1)(f) RGPD.",
    p3t: "3. Cookies et suivi", p3d: "Pas de cookies marketing/suivi ni d'analytics externes par défaut.",
    p4t: "4. Contact", p4d: "En cas de contact par email, les données sont traitées pour répondre à la demande.",
    p5t: "5. Droits", p5d: "Droit d'accès, rectification, effacement, limitation, portabilité et opposition.",
    p6t: "6. Version", p6d: "Version: avril 2026",
    a1t: "Notre engagement", a1d: "Le site est conçu pour être perceptible, utilisable, compréhensible et robuste.",
    a2t: "Mesures mises en oeuvre", a2l1: "HTML sémantique avec titres clairs", a2l2: "Focus clavier pour éléments interactifs", a2l3: "Mise en page responsive", a2l4: "Aucun audio en lecture automatique",
    a3t: "Limites connues", a3d: "Certains effets visuels peuvent varier selon l'appareil et le navigateur.",
    a4t: "Retour et contact", a4d: "Nous examinons rapidement les signalements et améliorons le site."
  },
  pt: {
    f1t: "Ação arcade dinâmica", f1d: "Gameplay rápido com dificuldade crescente e feedback claro em impactos e combos.",
    f2t: "Power-ups e estratégia", f2d: "Desbloqueie melhorias e combine-as com seu estilo.",
    f3t: "Classificação e progresso", f3d: "Salve pontuações localmente e evolua de forma constante.",
    f4t: "Design synthwave", f4d: "Visual com neon ciano/magenta e gradientes espaciais escuros.",
    s1t: "1. Escolha os controles", s1d: "Escolha toque ou deslize no menu.",
    s2t: "2. Posicione e desvie", s2d: "Fique em movimento e antecipe inimigos.",
    s3t: "3. Invista créditos", s3d: "Use créditos em melhorias e combinações fortes.",
    s4t: "4. Melhore o recorde", s4d: "Aprenda padrões e otimize sua build.",
    p2t: "2. Hospedagem e logs", p2d: "O provedor pode processar dados técnicos necessários. Base legal: Art. 6(1)(f) RGPD.",
    p3t: "3. Cookies e rastreamento", p3d: "Sem cookies de marketing/rastreamento nem analytics externo por padrão.",
    p4t: "4. Contato", p4d: "Se você contatar por email, os dados serão tratados para responder à solicitação.",
    p5t: "5. Direitos do titular", p5d: "Direitos de acesso, retificação, exclusão, limitação, portabilidade e oposição.",
    p6t: "6. Versão", p6d: "Versão: abril de 2026",
    a1t: "Nosso compromisso", a1d: "Site projetado para ser perceptível, operável, compreensível e robusto.",
    a2t: "Medidas implementadas", a2l1: "HTML semântico com títulos claros", a2l2: "Foco de teclado em elementos interativos", a2l3: "Layout responsivo", a2l4: "Sem áudio automático",
    a3t: "Limitações conhecidas", a3d: "Alguns efeitos visuais podem variar por dispositivo/navegador.",
    a4t: "Feedback e contato", a4d: "Analisamos barreiras reportadas e melhoramos continuamente."
  },
  ar: {
    f1t: "حركة أركيد ديناميكية", f1d: "أسلوب لعب سريع مع صعوبة متزايدة وتغذية راجعة واضحة.",
    f2t: "تعزيزات واستراتيجية", f2d: "افتح الترقيات وادمجها وفق أسلوب لعبك.",
    f3t: "لوحة الصدارة والتقدم", f3d: "احفظ النتائج محليًا وطوّر أداءك باستمرار.",
    f4t: "تصميم سينث ويف", f4d: "هوية بصرية بألوان نيون سيان/ماجنتا وخلفيات فضائية داكنة.",
    s1t: "1. اختر التحكم", s1d: "اختر بين اللمس أو السحب من القائمة.",
    s2t: "2. التموضع والمراوغة", s2d: "تحرك باستمرار وتوقع حركة الأعداء.",
    s3t: "3. استثمر الرصيد", s3d: "استخدم الرصيد للترقيات وتركيبات أقوى.",
    s4t: "4. حسّن أعلى نتيجة", s4d: "تعلم الأنماط وقلّل الضرر وحسّن البناء.",
    p2t: "2. الاستضافة وسجلات الخادم", p2d: "قد يعالج مزود الاستضافة بيانات تقنية لازمة. الأساس القانوني: المادة 6(1)(f) من GDPR.",
    p3t: "3. ملفات تعريف الارتباط والتتبع", p3d: "لا توجد ملفات تتبع/تسويق أو تحليلات خارجية افتراضيًا.",
    p4t: "4. التواصل", p4d: "عند التواصل عبر البريد الإلكتروني تتم معالجة البيانات للرد على الطلب.",
    p5t: "5. حقوق صاحب البيانات", p5d: "لك حق الوصول والتصحيح والحذف والتقييد والنقل والاعتراض.",
    p6t: "6. الإصدار", p6d: "الإصدار: أبريل 2026",
    a1t: "التزامنا", a1d: "تم تصميم الموقع ليكون واضحًا وقابلًا للاستخدام والفهم وموثوقًا.",
    a2t: "إجراءات مطبقة", a2l1: "هيكل HTML دلالي بعناوين واضحة", a2l2: "دعم تركيز لوحة المفاتيح", a2l3: "تصميم متجاوب", a2l4: "بدون تشغيل صوت تلقائي",
    a3t: "قيود معروفة", a3d: "قد تختلف بعض التأثيرات المرئية حسب الجهاز والمتصفح.",
    a4t: "ملاحظات وتواصل", a4d: "نراجع البلاغات بسرعة ونواصل تحسين الموقع."
  },
  ja: {
    f1t: "ダイナミックなアーケードアクション", f1d: "難易度が上がる高速プレイと、ヒット/爆発/コンボの明確なフィードバック。",
    f2t: "パワーアップと戦略", f2d: "アップグレードを解放し、プレイスタイルに合わせて組み合わせます。",
    f3t: "ランキングと進行", f3d: "スコアをローカル保存し、継続的に上達できます。",
    f4t: "シンセウェーブデザイン", f4d: "ネオンシアン/マゼンタとダークな宇宙グラデーションのビジュアル。",
    s1t: "1. 操作を選ぶ", s1d: "メニューでタップ/スワイプ操作を選択。",
    s2t: "2. 位置取りと回避", s2d: "常に動き、敵の動きを先読み。",
    s3t: "3. クレジット投資", s3d: "クレジットを強化に使い、強力な組み合わせを有効化。",
    s4t: "4. ハイスコア更新", s4d: "出現パターンを学び、被弾を減らし、ビルドを最適化。",
    p2t: "2. ホスティングとサーバーログ", p2d: "技術的に必要なデータをホスティング事業者が処理する場合があります。法的根拠: GDPR 第6条1項f。",
    p3t: "3. Cookie とトラッキング", p3d: "既定でマーケティング/トラッキングCookieや外部解析は使用しません。",
    p4t: "4. お問い合わせ", p4d: "メールでの問い合わせ時、対応のためにデータを処理します。",
    p5t: "5. 利用者の権利", p5d: "開示、訂正、削除、制限、移転、異議申立ての権利があります。",
    p6t: "6. 版", p6d: "版: 2026年4月",
    a1t: "私たちの方針", a1d: "本サイトは知覚可能・操作可能・理解可能・堅牢であることを重視して設計されています。",
    a2t: "実装済み対策", a2l1: "明確な見出しを持つセマンティックHTML", a2l2: "キーボードフォーカス対応", a2l3: "レスポンシブレイアウト", a2l4: "自動再生オーディオなし",
    a3t: "既知の制限", a3d: "一部の視覚効果は端末/ブラウザにより異なる場合があります。",
    a4t: "フィードバックと連絡", a4d: "報告された問題を確認し、継続的に改善します。"
  },
  ru: {
    f1t: "Динамичный аркадный экшен", f1d: "Быстрый геймплей с ростом сложности и понятной обратной связью.",
    f2t: "Усиления и стратегия", f2d: "Открывайте улучшения и комбинируйте их под свой стиль.",
    f3t: "Таблица лидеров и прогресс", f3d: "Сохраняйте результаты локально и стабильно улучшайте игру.",
    f4t: "Синтвейв-дизайн", f4d: "Визуальный стиль: неон cyan/magenta и тёмные космические градиенты.",
    s1t: "1. Выберите управление", s1d: "В меню выберите tap или swipe.",
    s2t: "2. Позиция и уклонение", s2d: "Двигайтесь постоянно и заранее читайте поведение врагов.",
    s3t: "3. Вкладывайте кредиты", s3d: "Покупайте улучшения и включайте сильные комбинации.",
    s4t: "4. Улучшайте рекорд", s4d: "Изучайте паттерны и оптимизируйте билд.",
    p2t: "2. Хостинг и логи сервера", p2d: "Провайдер может обрабатывать технические данные. Основание: ст. 6(1)(f) GDPR.",
    p3t: "3. Cookies и трекинг", p3d: "По умолчанию нет маркетинговых cookie и внешней аналитики.",
    p4t: "4. Связь", p4d: "При обращении по email данные обрабатываются для ответа.",
    p5t: "5. Права субъекта данных", p5d: "Права на доступ, исправление, удаление, ограничение, переносимость и возражение.",
    p6t: "6. Версия", p6d: "Версия: апрель 2026",
    a1t: "Наш подход", a1d: "Сайт спроектирован как воспринимаемый, управляемый, понятный и устойчивый.",
    a2t: "Реализованные меры", a2l1: "Семантическая HTML-структура", a2l2: "Фокус клавиатуры для интерактивных элементов", a2l3: "Адаптивная вёрстка", a2l4: "Без автопроигрывания аудио",
    a3t: "Известные ограничения", a3d: "Некоторые визуальные эффекты могут отличаться в зависимости от устройства/браузера.",
    a4t: "Обратная связь и контакт", a4d: "Мы проверяем сообщения о барьерах и постоянно улучшаем сайт."
  },
  sv: {
    f1t: "Dynamisk arkadaction", f1d: "Snabb gameplay med ökande svårighet och tydlig återkoppling.",
    f2t: "Power-ups och strategi", f2d: "Lås upp uppgraderingar och kombinera dem efter din spelstil.",
    f3t: "Topplista och progression", f3d: "Spara poäng lokalt och förbättra dina runs.",
    f4t: "Synthwave-design", f4d: "Visuellt tema med neoncyan, magenta och mörka rymdgradienter.",
    s1t: "1. Välj styrning", s1d: "Välj tryck- eller svepstyrning i menyn.",
    s2t: "2. Positionera och undvik", s2d: "Håll dig i rörelse och läs fiender tidigt.",
    s3t: "3. Investera credits", s3d: "Använd credits till uppgraderingar och starka kombinationer.",
    s4t: "4. Förbättra rekord", s4d: "Lär dig mönster och optimera din build.",
    p2t: "2. Hosting och serverloggar", p2d: "Hosting-leverantören kan behandla tekniskt nödvändiga data. Rättslig grund: Art. 6(1)(f) GDPR.",
    p3t: "3. Cookies och spårning", p3d: "Inga marknadsförings-/spårningscookies eller extern analys som standard.",
    p4t: "4. Kontakt", p4d: "Vid kontakt via e-post behandlas data för att hantera förfrågan.",
    p5t: "5. Rättigheter", p5d: "Rätt till tillgång, rättelse, radering, begränsning, portabilitet och invändning.",
    p6t: "6. Version", p6d: "Version: april 2026",
    a1t: "Vårt åtagande", a1d: "Webbplatsen är utformad för att vara uppfattbar, hanterbar, begriplig och robust.",
    a2t: "Genomförda åtgärder", a2l1: "Semantisk HTML med tydliga rubriker", a2l2: "Tangentbordsfokus", a2l3: "Responsiv layout", a2l4: "Ingen autoplay-ljud",
    a3t: "Kända begränsningar", a3d: "Vissa visuella effekter kan variera mellan enheter och webbläsare.",
    a4t: "Feedback och kontakt", a4d: "Vi granskar rapporterade hinder och förbättrar kontinuerligt."
  },
  hi: {
    f1t: "डायनामिक आर्केड एक्शन", f1d: "तेज़ गेमप्ले, बढ़ती कठिनाई और स्पष्ट फीडबैक।",
    f2t: "पावर-अप और रणनीति", f2d: "अपग्रेड अनलॉक करें और अपने स्टाइल के अनुसार संयोजन बनाएं।",
    f3t: "लीडरबोर्ड और प्रगति", f3d: "स्कोर लोकली सेव करें और लगातार बेहतर बनें।",
    f4t: "सिंथवेव डिज़ाइन", f4d: "नियॉन सायन/मैजेंटा और डार्क स्पेस ग्रेडिएंट विज़ुअल शैली।",
    s1t: "1. कंट्रोल चुनें", s1d: "मेनू में टैप या स्वाइप कंट्रोल चुनें।",
    s2t: "2. पोज़िशन और डॉज", s2d: "चलते रहें और दुश्मन की चाल पहले पढ़ें।",
    s3t: "3. क्रेडिट निवेश करें", s3d: "क्रेडिट से अपग्रेड लें और मजबूत संयोजन सक्रिय करें।",
    s4t: "4. हाईस्कोर बेहतर करें", s4d: "पैटर्न सीखें और अपनी बिल्ड ऑप्टिमाइज़ करें।",
    p2t: "2. होस्टिंग और सर्वर लॉग", p2d: "होस्टिंग प्रदाता तकनीकी आवश्यक डेटा प्रोसेस कर सकता है। कानूनी आधार: GDPR Art. 6(1)(f).",
    p3t: "3. कुकी और ट्रैकिंग", p3d: "डिफ़ॉल्ट रूप से मार्केटिंग/ट्रैकिंग कुकी या बाहरी एनालिटिक्स नहीं।",
    p4t: "4. संपर्क", p4d: "ईमेल से संपर्क पर अनुरोध संभालने हेतु डेटा प्रोसेस किया जाता है।",
    p5t: "5. अधिकार", p5d: "आपको एक्सेस, सुधार, हटाने, प्रतिबंध, पोर्टेबिलिटी और आपत्ति के अधिकार हैं।",
    p6t: "6. संस्करण", p6d: "संस्करण: अप्रैल 2026",
    a1t: "हमारी प्रतिबद्धता", a1d: "वेबसाइट को यथासंभव perceptible, operable, understandable और robust बनाया गया है।",
    a2t: "लागू उपाय", a2l1: "स्पष्ट हेडिंग के साथ semantic HTML", a2l2: "इंटरैक्टिव तत्वों के लिए कीबोर्ड फोकस", a2l3: "रिस्पॉन्सिव लेआउट", a2l4: "ऑटो-प्ले ऑडियो नहीं",
    a3t: "ज्ञात सीमाएँ", a3d: "कुछ विज़ुअल इफेक्ट डिवाइस/ब्राउज़र के अनुसार बदल सकते हैं।",
    a4t: "फीडबैक और संपर्क", a4d: "रिपोर्ट की गई बाधाओं की समीक्षा कर हम लगातार सुधार करते हैं।"
  },
  zh: {
    f1t: "动态街机动作", f1d: "快节奏玩法，难度递增，并提供清晰反馈。",
    f2t: "强化与策略", f2d: "解锁升级并按你的风格组合使用。",
    f3t: "排行榜与进度", f3d: "本地保存分数并持续提升表现。",
    f4t: "Synthwave 设计", f4d: "采用霓虹青/洋红与深色太空渐变视觉风格。",
    s1t: "1. 选择操作方式", s1d: "在菜单中选择点击或滑动操作。",
    s2t: "2. 走位与躲避", s2d: "保持移动并提前预判敌人动向。",
    s3t: "3. 投入积分", s3d: "用积分购买升级并启用强力组合。",
    s4t: "4. 提升最高分", s4d: "学习刷新模式，减少受击并优化配置。",
    p2t: "2. 托管与服务器日志", p2d: "托管服务商可能处理必要的技术日志数据。法律依据：GDPR 第6条第1款(f)。",
    p3t: "3. Cookie 与跟踪", p3d: "默认不使用营销/跟踪 Cookie，也不加载外部分析脚本。",
    p4t: "4. 联系方式", p4d: "通过邮件联系时，将为处理请求而处理相关数据。",
    p5t: "5. 数据主体权利", p5d: "你享有访问、更正、删除、限制、可携带和反对处理等权利。",
    p6t: "6. 版本", p6d: "版本：2026年4月",
    a1t: "我们的承诺", a1d: "网站尽可能做到可感知、可操作、可理解和稳健。",
    a2t: "已实施措施", a2l1: "语义化 HTML 与清晰标题结构", a2l2: "交互元素支持键盘焦点", a2l3: "响应式布局", a2l4: "无自动播放音频",
    a3t: "已知限制", a3d: "部分视觉效果可能因设备/浏览器而不同。",
    a4t: "反馈与联系", a4d: "我们会及时处理反馈并持续改进网站。"
  },
  nl: {
    f1t: "Dynamische arcade-actie", f1d: "Snelle gameplay met oplopende moeilijkheid en duidelijke feedback.",
    f2t: "Power-ups en strategie", f2d: "Speel upgrades vrij en combineer ze met jouw speelstijl.",
    f3t: "Ranglijst en voortgang", f3d: "Sla scores lokaal op en verbeter je runs stap voor stap.",
    f4t: "Synthwave-design", f4d: "Visuele stijl met neon-cyaan, magenta en donkere ruimtegradients.",
    s1t: "1. Besturing kiezen", s1d: "Kies in het menu tussen tik- en veegbesturing.",
    s2t: "2. Positioneer en ontwijk", s2d: "Blijf bewegen en lees vijandpatronen vroeg.",
    s3t: "3. Investeer credits", s3d: "Gebruik credits voor upgrades en sterke combinaties.",
    s4t: "4. Verbeter highscore", s4d: "Leer spawnpatronen en optimaliseer je build.",
    p2t: "2. Hosting en serverlogs", p2d: "De hostingprovider kan technisch noodzakelijke data verwerken. Rechtsgrond: Art. 6(1)(f) AVG.",
    p3t: "3. Cookies en tracking", p3d: "Standaard geen marketing-/trackingcookies of externe analytics.",
    p4t: "4. Contact", p4d: "Bij contact via e-mail worden gegevens verwerkt om je aanvraag te behandelen.",
    p5t: "5. Rechten", p5d: "Je hebt recht op inzage, correctie, verwijdering, beperking, overdraagbaarheid en bezwaar.",
    p6t: "6. Versie", p6d: "Versie: april 2026",
    a1t: "Onze inzet", a1d: "De website is ontworpen om zo waarneembaar, bedienbaar, begrijpelijk en robuust mogelijk te zijn.",
    a2t: "Geïmplementeerde maatregelen", a2l1: "Semantische HTML-structuur met duidelijke koppen", a2l2: "Toetsenbordfocus op interactieve elementen", a2l3: "Responsieve lay-out", a2l4: "Geen auto-play audio",
    a3t: "Bekende beperkingen", a3d: "Sommige visuele effecten kunnen verschillen per apparaat/browser.",
    a4t: "Feedback en contact", a4d: "We beoordelen meldingen en verbeteren de site continu."
  }
};

for (const [lang, copy] of Object.entries(fullContent)) {
  t[lang] = { ...t[lang], ...copy };
}

const extendedContent = {
  de: {
    heroWelcome: "Willkommen bei",
    navGameplay: "Gameplay",
    navSystems: "Systeme",
    navProgress: "Fortschritt",
    navHow: "Spielanleitung",
    pillWaves: "Wellen & Bosse",
    pillDaily: "Tägliche Mission",
    pillStyle: "Style-Rang S–D",
    tagGameplay: "Kern-Gameplay",
    secGameplayTitle: "Survival in Neon-Wellen",
    secGameplayLead: "Jede Runde ist ein Aufstieg durch immer hektischere Gegnerformationen — mit klarem Feedback bei Treffern, Combos und knappen Rettungen.",
    featWavesT: "Wellen & Schwierigkeitsstufen",
    featWavesD: "Gegner erscheinen in Regen- und Invader-Formationen. Alle paar Abschüsse steigt die Schwierigkeitsstufe — schneller, dichter, gefährlicher. Alle 10 Wellen wartet ein Endboss.",
    featCombosT: "Combo-System",
    featCombosD: "Zerstöre mehrere Gegner innerhalb von 1,5 Sekunden für Combo-Feedback mit Screen-Shake, Neon-Flash und Sound. Vier Kills in 2 Sekunden spawnen sofort ein Power-Up.",
    featCloseCallsT: "Close Calls & Style-Rang",
    featCloseCallsD: "Knapp an Gegnern, Boss-Kugeln oder Ram-Angriffen vorbei? Das Spiel belohnt riskantes, präzises Fliegen mit Style-Punkten — am Ende der Runde gibt es einen Rang von D bis S.",
    featCoinsT: "Münzen & Belohnungsdrops",
    featCoinsD: "Gegner lassen Münzen fallen, die zum Schiff magnetisch angezogen werden. Nutze sie im Menü für permanente Upgrades, Musiktracks und Skins — oder sammle sie für Tagesmissionen.",
    featDifficultyT: "Drei Schwierigkeitsgrade",
    featDifficultyD: "Leicht (mehr Leben, langsamere Gegner), Klassik (ausgewogenes Original-Balancing) oder Schwer (schnellere Spawns, aggressivere Bosse). Wählbar jederzeit in den Optionen.",
    featControlsT: "Tap- oder Swipe-Steuerung",
    featControlsD: "Bewege dein Schiff per Touch-Tap oder Swipe — je nachdem, was auf deinem Gerät präziser fühlt. Schießen erfolgt automatisch, damit du dich auf Positionierung konzentrierst.",
    tagSystems: "Power & Build",
    secSystemsTitle: "Power-Ups & permanente Upgrades",
    secSystemsLead: "Im Run sammelst du temporäre Power-Ups von fallenden Kisten. Im Hangar kaufst du dauerhafte Upgrades mit erspielten Münzen.",
    featPowerUpsTitle: "Run-Power-Ups",
    puSlowMoT: "Zeitlupe",
    puSlowMoD: "Blaues Power-Up: Gegner und Münzen bewegen sich langsamer — ideal, um dich neu zu positionieren. Dauer: 8 Sekunden.",
    puRapidT: "Schnellfeuer",
    puRapidD: "Gelbes Power-Up: Deutlich höhere Feuerrate in Vorwärtsrichtung. Perfekt für Combo-Ketten und Boss-Phasen. Dauer: 8 Sekunden.",
    puFreezeT: "Freeze-Batterien",
    puFreezeD: "Violettes Power-Up: Friert Gegner, Schüsse und fallende Items ein — dein Schiff bleibt steuerbar, Belohnungsmünzen fliegen weiter. Dauer: 6 Sekunden. Erscheint ab mittlerer Schwierigkeit.",
    featUpgradesTitle: "Permanente CPU-Upgrades (Münz-Shop)",
    upTriT: "Tri Bullet",
    upTriD: "Schießt drei Projektile gleichzeitig — vorwärts, links und rechts. Erweitert deine Trefferfläche deutlich.",
    upStartT: "Start +10",
    upStartD: "Beginne jede Runde mit +10 auf dem Schiff-Zähler (Batterie-Counter) und einem leicht veränderten Schiffslook.",
    upGuardT: "Enemy Guard",
    upGuardD: "Überlebe einmal pro Runde eine Kollision mit einem stärkeren Gegner, wenn dessen Wert höher ist als dein Schiff-Zähler.",
    featMusicT: "Musikbibliothek",
    featMusicD: "Kauf zusätzliche Synthwave-Tracks im Menü und wähle deinen Lieblingssound für Startbildschirm und Gameplay. Eigene Tracks werden im unteren Menü angezeigt.",
    tagProgress: "Langzeit-Fortschritt",
    secProgressTitle: "Missionen, Ränge & Belohnungen",
    secProgressLead: "Neben dem Highscore gibt es tägliche Ziele, Veteran-Ränge mit exklusiven Skins und lebenslange Erfolge im Belohnungsmenü.",
    featDailyT: "Tägliche Mission",
    featDailyD: "Jeden Tag eine neue Aufgabe — z. B. 30 Gegner zerstören, Welle 10 erreichen, einen Boss besiegen oder 3 Close Calls landen. Abschluss bringt Münzen und zählt für deinen Veteran-Rang. Serien werden getrackt.",
    featVeteranT: "Veteran-Ränge & Skins",
    featVeteranD: "Abgeschlossene Tagesmissionen steigern deinen Pilot-Rang. Höhere Ränge schalten exklusive Schiffsskins frei — von Neon Storm bis Gold Phoenix.",
    rankRecruit: "Rekrut",
    rankRecruitD: "Start",
    rankPilot: "Pilot",
    rankAce: "Ass",
    rankCommander: "Kommandeur",
    rankLegend: "Legende",
    rankDays: "Missionen",
    featStyleT: "Style-Rang (pro Runde)",
    featStyleD: "Unabhängig vom Score bewertet R-K8 dein Können pro Run: Close Calls sammeln Style-Punkte. Am Game-Over-Screen siehst du deinen Buchstaben-Rang — von D über C, B, A bis S.",
    featRewardsT: "Lebenslange Belohnungen",
    featRewardsD: "Im Belohnungsmenü findest du Erfolge wie Scharfschütze (50/500/1000 Abschüsse), Highscore-Jäger, Veteran (Schwer-Modus), Shopping Spree (alle Upgrades & Tracks) und mehr. Freigeschaltete Belohnungen leuchten im Menü auf.",
    featLeaderboardT: "Lokales Leaderboard",
    featLeaderboardD: "Bestleistungen werden auf dem Gerät gespeichert — mit optionalem Namen. Vergleiche deine Top-Runs direkt im Startmenü, ohne Account oder Cloud.",
    featBossT: "Endbosse & Wellen-Belohnungen",
    featBossD: "Endbosse greifen mit Ram-Angriffen und Energiekugeln an. Jede 10. Welle bringt Bonus-Münzen mit Gold-Overlay-Feedback — ein klarer Meilenstein in jeder Session.",
    tagGuide: "Schnellstart",
    s1t: "1. Steuerung & Schwierigkeit wählen",
    supportBanner: "Fragen zu Käufen, „Käufe wiederherstellen“ oder technischen Problemen?",
    supportLink: "Support & Hilfe",
    supportNav: "Support",
    privacyApp: "App-Datenschutz",
    heroLead: "Weiche Gegnerwellen aus, sammle Münzen, aktiviere Power-Ups, erledige Tägliche Missionen und steige vom Rekruten zum Legenden-Piloten auf.",
    btnFeatures: "Alle Features",
    howTitle: "Spielanleitung",
    s1d: "Öffne Optionen: Wähle Tap oder Swipe und stelle Leicht, Klassik oder Schwer ein. Passe Sound, Sprache und Datenschutz-Einstellungen nach Bedarf an.",
    s2t: "2. Tägliche Mission checken",
    s2d: "Auf dem Startbildschirm siehst du die heutige Mission mit Fortschrittsbalken. Plane deinen Run danach — Boss-Kills oder Close Calls können das Tagesziel direkt erfüllen.",
    s3t: "3. Starten & überleben",
    s3d: "Bleibe in Bewegung, sammle Münzen, nutze Power-Up-Kisten und baue Combos. Achte auf den Schiff-Zähler: Ramme schwächere Gegner, weiche stärkeren aus.",
    s4t: "4. Upgrades & Highscore",
    s4d: "Investiere Münzen in CPU-Upgrades und Musik. Wiederhole Runs, um Style-Rang S zu jagen, Veteran-Rang aufzusteigen und deinen lokalen Rekord zu brechen.",
  },
  en: {
    heroWelcome: "Welcome to",
    navGameplay: "Gameplay",
    navSystems: "Systems",
    navProgress: "Progress",
    navHow: "How to play",
    pillWaves: "Waves & bosses",
    pillDaily: "Daily mission",
    pillStyle: "Style rank S–D",
    tagGameplay: "Core gameplay",
    secGameplayTitle: "Survival in neon waves",
    secGameplayLead: "Each run is a climb through increasingly hectic enemy formations — with clear feedback for hits, combos and narrow escapes.",
    featWavesT: "Waves & difficulty tiers",
    featWavesD: "Enemies appear in rain and invader formations. Every few kills the difficulty tier rises — faster, denser, deadlier. An end boss awaits every 10 waves.",
    featCombosT: "Combo system",
    featCombosD: "Destroy multiple enemies within 1.5 seconds for combo feedback with screen shake, neon flash and sound. Four kills in 2 seconds instantly spawn a power-up.",
    featCloseCallsT: "Close calls & style rank",
    featCloseCallsD: "Barely dodge enemies, boss orbs or ram attacks? The game rewards risky, precise flying with style points — at the end of the run you get a rank from D to S.",
    featCoinsT: "Coins & reward drops",
    featCoinsD: "Enemies drop coins that magnetically home toward your ship. Spend them in the menu on permanent upgrades, music tracks and skins — or collect them for daily missions.",
    featDifficultyT: "Three difficulty levels",
    featDifficultyD: "Easy (extra lives, slower enemies), Classic (balanced original tuning) or Hard (faster spawns, aggressive bosses). Change anytime in options.",
    featControlsT: "Tap or swipe controls",
    featControlsD: "Move your ship with touch tap or swipe — whichever feels more precise on your device. Shooting is automatic so you can focus on positioning.",
    tagSystems: "Power & build",
    secSystemsTitle: "Power-ups & permanent upgrades",
    secSystemsLead: "During a run you collect temporary power-ups from falling crates. In the hangar you buy permanent upgrades with earned coins.",
    featPowerUpsTitle: "Run power-ups",
    puSlowMoT: "Slow motion",
    puSlowMoD: "Blue power-up: enemies and coins move slower — ideal for repositioning. Duration: 8 seconds.",
    puRapidT: "Rapid fire",
    puRapidD: "Yellow power-up: much higher forward fire rate. Perfect for combo chains and boss phases. Duration: 8 seconds.",
    puFreezeT: "Freeze batteries",
    puFreezeD: "Violet power-up: freezes enemies, shots and falling items — your ship stays controllable, reward coins keep moving. Duration: 6 seconds. Appears from mid difficulty onward.",
    featUpgradesTitle: "Permanent CPU upgrades (coin shop)",
    upTriT: "Tri Bullet",
    upTriD: "Fires three projectiles at once — forward, left and right. Greatly expands your hit area.",
    upStartT: "Start +10",
    upStartD: "Begin every run with +10 on the ship counter (battery counter) and a slightly altered ship look.",
    upGuardT: "Enemy Guard",
    upGuardD: "Survive one collision per run with a stronger enemy when their value is higher than your ship counter.",
    featMusicT: "Music library",
    featMusicD: "Buy extra synthwave tracks in the menu and pick your favorite sound for start screen and gameplay. Equipped tracks show in the bottom menu bar.",
    tagProgress: "Long-term progress",
    secProgressTitle: "Missions, ranks & rewards",
    secProgressLead: "Beyond high score there are daily goals, veteran ranks with exclusive skins and lifetime achievements in the rewards menu.",
    featDailyT: "Daily mission",
    featDailyD: "A new task every day — e.g. destroy 30 enemies, reach wave 10, defeat a boss or land 3 close calls. Completion grants coins and counts toward your veteran rank. Streaks are tracked.",
    featVeteranT: "Veteran ranks & skins",
    featVeteranD: "Completed daily missions raise your pilot rank. Higher ranks unlock exclusive ship skins — from Neon Storm to Gold Phoenix.",
    rankRecruit: "Recruit",
    rankRecruitD: "Start",
    rankPilot: "Pilot",
    rankAce: "Ace",
    rankCommander: "Commander",
    rankLegend: "Legend",
    rankDays: "missions",
    featStyleT: "Style rank (per run)",
    featStyleD: "Independent of score, R-K8 rates your skill per run: close calls earn style points. On the game over screen you see a letter rank — from D through C, B, A to S.",
    featRewardsT: "Lifetime rewards",
    featRewardsD: "The rewards menu includes achievements like Marksman (50/500/1000 kills), High Score Hunter, Veteran (hard mode), Shopping Spree (all upgrades & tracks) and more. Unlocked rewards glow in the menu.",
    featLeaderboardT: "Local leaderboard",
    featLeaderboardD: "Best runs are saved on device — with an optional name. Compare top scores right on the start screen, no account or cloud required.",
    featBossT: "End bosses & wave rewards",
    featBossD: "End bosses attack with ram charges and energy orbs. Every 10th wave grants bonus coins with gold overlay feedback — a clear milestone each session.",
    tagGuide: "Quick start",
    supportBanner: "Questions about purchases, Restore Purchases or technical issues?",
    supportLink: "Support & help",
    supportNav: "Support",
    privacyApp: "App privacy policy",
    heroLead: "Dodge enemy waves, collect coins, trigger power-ups, complete daily missions and rise from recruit to legend pilot.",
    btnFeatures: "All features",
    howTitle: "How to play",
    s1t: "1. Choose controls & difficulty",
    s1d: "Open options: pick tap or swipe and set Easy, Classic or Hard. Adjust sound, language and privacy settings as needed.",
    s2t: "2. Check the daily mission",
    s2d: "The start screen shows today's mission with a progress bar. Plan your run around it — boss kills or close calls can complete the daily goal directly.",
    s3t: "3. Start & survive",
    s3d: "Keep moving, collect coins, grab power-up crates and build combos. Watch the ship counter: ram weaker enemies, dodge stronger ones.",
    s4t: "4. Upgrades & high score",
    s4d: "Invest coins in CPU upgrades and music. Repeat runs to chase style rank S, climb veteran rank and break your local record.",
  },
};

for (const [lang, copy] of Object.entries(extendedContent)) {
  t[lang] = { ...t[lang], ...copy };
}

const localePacks = typeof window !== "undefined" && window.__localePacks ? window.__localePacks : {};
for (const [lang, copy] of Object.entries(localePacks)) {
  t[lang] = { ...t[lang], ...copy };
}

function localeFallbackChain(lang) {
  if (lang === "mx") return ["mx", "es", "en", "de"];
  if (lang === "de" || lang === "en") return [lang, "de", "en"];
  return [lang, "en", "de"];
}

function resolveCopy(lang) {
  const merged = {};
  for (const code of [...localeFallbackChain(lang)].reverse()) {
    Object.assign(merged, t[code] || {}, fullContent[code] || {}, extendedContent[code] || {}, localePacks[code] || {});
  }
  return merged;
}

function translatePage(lang) {
  const copy = resolveCopy(lang);
  document.documentElement.lang = lang === "mx" ? "es-MX" : lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = copy[key];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    const value = copy[key];
    if (value) node.setAttribute("placeholder", value);
  });
  document.querySelectorAll("[data-i18n-meta]").forEach((node) => {
    const key = node.getAttribute("data-i18n-meta");
    const value = copy[key];
    if (value) node.setAttribute("content", value);
  });
}

function setupLanguagePicker() {
  const picker = document.getElementById("language-picker");
  if (!picker) return "de";
  picker.innerHTML = "";
  for (const lang of supportedLanguages) {
    const option = document.createElement("option");
    option.value = lang.code;
    option.textContent = lang.label;
    picker.appendChild(option);
  }

  const saved = localStorage.getItem("gamebase-lang");
  const browser = (navigator.language || "de").toLowerCase();
  const initial = supportedLanguages.some((l) => l.code === saved)
    ? saved
    : supportedLanguages.find((l) => browser.startsWith(l.code))?.code || "de";
  picker.value = initial;
  picker.addEventListener("change", () => {
    const next = picker.value;
    localStorage.setItem("gamebase-lang", next);
    translatePage(next);
  });
  return initial;
}

function initSite() {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
  const current = setupLanguagePicker();
  translatePage(current);
}

initSite();
