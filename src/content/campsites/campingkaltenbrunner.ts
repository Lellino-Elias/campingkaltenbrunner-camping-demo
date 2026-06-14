import type { CampsiteConfig } from "../types";

/**
 * Camping Kaltenbrunner am Red Bull Ring — 2024 neu eröffneter Event-Campingplatz
 * in Spielberg (Murtal, Steiermark). Öffnet bewusst nur zu den Großevents am
 * Red Bull Ring (Formel 1, MotoGP, AirPower). Quelle: campingkaltenbrunner.at.
 *
 * Bildlage (ehrlich): Der Platz selbst ist neu und hat KEINE eigenen Platzfotos
 * online — die Website nutzt Motorsport-/Flugshow-Aufnahmen der Events. Verwendet
 * werden nur diese vier event-typischen Bilder + das echte Logo. Sektionen ohne
 * belastbares Bild (Galerie, Camping-Feature-Kacheln) blenden sich sauber aus;
 * die konkreten Platz-Fakten stehen in den USP-Chips und im Trust-Band.
 */
const IMG = "/campsites/campingkaltenbrunner";

const campingkaltenbrunner: CampsiteConfig = {
  name: "Camping Kaltenbrunner am Red Bull Ring",
  shortName: "Kaltenbrunner",
  slug: "campingkaltenbrunner",
  ort: "Spielberg",
  region: "Steiermark",
  brandKind: "Camping am Red Bull Ring",
  regionLong: "Murtal · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Dein Basislager für die großen Tage am Red Bull Ring",
  claimEmphasis: "am Red Bull Ring",
  emailDetail: "eure Lage nur 15 Gehminuten vom Red Bull Ring",
  intro:
    "Direkt im Murtal, nur rund 15 Gehminuten vom Red Bull Ring: Camping Kaltenbrunner ist dein Basislager für Formel 1 und AirPower — drei Hektar Wiese, zu Fuß oder mit dem Rad zur Strecke.",

  logo: { src: `${IMG}/logo-kaltenbrunner.png`, alt: "Camping Kaltenbrunner Logo" },

  statement: {
    text: "Wenn die Motoren am Red Bull Ring aufheulen, bist du nur ein paar Gehminuten entfernt.",
    emphasis: "ein paar Gehminuten",
  },

  // Die drei Großevents = die drei Gründe, hier zu campen. Jedes Bild zeigt
  // genau das Event seines Titels (event-typische Aufnahme von der Website).
  pillars: [
    {
      title: "Formel 1 hautnah",
      text: "Nur rund 15 Gehminuten von deinem Stellplatz zur Strecke — zu Fuß oder mit dem Rad, ganz ohne Shuttle-Stress.",
      image: { src: `${IMG}/event-formel1.webp`, alt: "Formel-1-Bolide auf der Rennstrecke" },
    },
    {
      title: "MotoGP-Wochenende",
      text: "Morgens aus dem Zelt, wenige Minuten später am Ring — kein Warm-up und kein Qualifying verpasst.",
      image: { src: `${IMG}/event-motogp.webp`, alt: "MotoGP-Rennmaschine in Schräglage" },
    },
    {
      title: "AirPower am Himmel",
      text: "Die Kunstflugstaffeln der AirPower ziehen quasi direkt über deinen Stellplatz — Flugshow aus der ersten Reihe.",
      image: { src: `${IMG}/event-airpower.webp`, alt: "Kunstflug-Formation am Himmel — AirPower-Atmosphäre" },
    },
  ],

  usps: [
    "Ca. 15 Gehmin. zum Ring",
    "3 ha Wiesencampingplatz",
    "Teilweise 230 V Strom",
    "Dusch- & WC-Anlagen",
    "Silent Camping",
    "Einkauf & Gastro ganz nah",
  ],

  trust: {
    heading: "Näher dran wohnt keiner",
    headingEmphasis: "Näher dran",
    intro:
      "2024 neu eröffnet, liegt der ruhige Drei-Hektar-Wiesenplatz mitten im Murtal zwischen grünen Hügeln — und öffnet ganz bewusst nur zu den großen Renn- und Flugtagen am Red Bull Ring.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-tribuene.webp`, alt: "Renn-Atmosphäre mit Rauchfackeln auf vollen Tribünen" },
  },

  // Keine eigenen Platzfotos vorhanden → keine Feature-Kacheln (Sektion blendet
  // sich aus). Die konkreten Ausstattungs-Fakten laufen über die USP-Chips.
  camping: {
    heading: "Camping am Red Bull Ring",
    intro:
      "Drei Hektar Wiese, Duschcontainer und teils 230-V-Strom — unkompliziertes Eventcamping in Gehweite zur Strecke.",
    features: [],
  },

  anreise: {
    heading: "Anfahrt nach Spielberg",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die S36 bis Abfahrt Zeltweg Ost, Richtung Zeltweg; am zweiten Kreisverkehr die erste Ausfahrt, nach der Ortstafel Stadthof die erste links — nach rund 500 m bist du da.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof ist Zeltweg, nur wenige Kilometer entfernt; von dort geht es mit Bus oder Taxi weiter bis Spielberg.",
      },
      {
        title: "Rad & zu Fuß",
        text: "Zu den Großevents erreichst du Red Bull Ring und Fliegerhorst Hinterstoisser bequem zu Fuß oder mit dem Rad — Supermarkt, Tankstelle und Bushaltestelle liegen gleich in der Nähe.",
      },
    ],
  },

  // Keine vier belastbaren Platzfotos vorhanden → Galerie bleibt leer und
  // blendet sich aus (Bento braucht genau vier Bilder).
  galerie: {
    heading: "Eindrücke",
    headingEmphasis: "",
    intro: "Aufnahmen vom Platz folgen.",
    tag: "Red Bull Ring",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz fürs nächste Rennwochenende",
    headingEmphasis: "deinen Platz",
    intro:
      "Sag uns Zeitraum und Personenzahl — wir melden uns persönlich mit deiner Verfügbarkeit für Formel 1, MotoGP oder AirPower.",
    categories: [
      { id: "stellplatz", label: "Stellplatz (Wohnwagen/-mobil)", perNight: 42, perExtraGuest: 9 },
      { id: "zelt", label: "Zeltplatz", perNight: 32, perExtraGuest: 9 },
    ],
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise pro Nacht für 2 Personen — auf der Website sind keine Preise angegeben (bitte bestätigen) · zzgl. Ortstaxe",
    highlight: { title: "Zu Fuß zur Strecke", text: "Vom Stellplatz sind es nur rund 15 Gehminuten zum Red Bull Ring." },
  },

  kontakt: {
    coords: { lat: 47.203591, lng: 14.777536 },
    tel: "+43 6505035336",
    telHref: "tel:+436505035336",
    mail: "info@campingkaltenbrunner.at",
    adresse: "Verbindungsweg 12 · 8724 Spielberg · Österreich",
    // coords bewusst weggelassen — Quelle nennt keine eindeutigen Koordinaten (Geocoding später).
  },

  languages: ["DE"],

  nav: [
    { label: "Start", href: "#top" },
    { label: "Anfahrt", href: "#anreise" },
    { label: "Preise & Anfrage", href: "#booking" },
  ],
};

export default campingkaltenbrunner;
