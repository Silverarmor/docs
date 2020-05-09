---
title: FAQ ❓
lang: de
sidebarDepth: 1
---

# FAQ :question:

## Warum sollte ich den LSS-Manager nutzen? 
Frag doch mal die Nutzer :wink:

## In welchen Browsern funktioniert der LSS-Manager?
Hier werden nur Desktop Browser aufgelistet, da mobile Browser nicht offiziell unterstützt werden.
Diese Tabelle ist noch nicht umbedingt korrekt und wird bei neuen Informationen aktualisiert!
::: warning Kompatibilität
Eine hier aufgelistete Kompatibilität gewährleistet noch keine Funktionsweise. Dies sind nur Informationen, die von Drittanbietern zusammengetragen und ausgewertet wurden.
:::
Browser | mind. Version
--------|--------
Firefox | 54
Chrome  | 51
Safari  | 11
Opera   | 38

## Ist die Nutzung AGB-Konform?
Natürlich doch. Das Entwicklungsteam steht aber bei kritischen Situationen in engem Kontakt mit der XYRALITY.

## Wieso werden meine Einstellungen und aktivierten AddOns nicht gespeichert?
Das passiert nur, wenn in deinem Browser der `localStorage` geleert wird. Man kann das irgendwo in den Einstellungen des Browsers ändern (ist oft gleich mit den Cookie-Einstellungen).

Ein paar Informationen zu den gängigen Browsern werden hier mit der Zeit gesammelt:

::: warning Haftungsbeschränkung
Diese Informationen sind hauptsächlich von Drittanbietern. Wir übernehmen keine Garantie für eine volle Funktionsfähigkeit der hier aufgelisteten Lösungsvorschlägen. Jeder Nutzer ist selbst dafür verantwortlich, abzuwägen, ob er aufgeführte Vorschläge probiert oder nicht. Eine Quellenangabe ist stets dabei, so dass sich der Nutzer selbst ein Bild über die Quelle und deren Vertraulichkeit machen kann. Eine allgemeine, kurze Übersicht findet sich [hier](https://mid.as/kb/00103/enable-disable-or-clear-web-storage-cache).
:::

### Firefox
Eine **offizielle** "Meldung" findet sich auf den Seiten vom [Mozilla Support](https://support.mozilla.org/de/kb/webseitendaten-einige-websites-mochten-dateien-auf).

In Bezug auf [diesen Kommentar](https://bugzilla.mozilla.org/show_bug.cgi?id=341524#c17) lässt sich folgendes zusammenfassend sagen:

1. Ist die Einstellung "Cookies und Website-Daten beim Beenden von Firefox löschen" aktiviert, so wird auch der `localStorage` beim Beenden geleert und die LSSM-Einstellungen sind weg. Ausnahme: Webseiten, die auf der Whitelist stehen, die man in den Einstellungen anpassen kann. Das heisst, wenn du alle Cookies beim Beenden löschen lassen willst, aber trotzdem die Einstellungen vom LSSM behalten möchtest, musst du das Leitstellenspiel (bzw. jenachdem die anderssprachigen Äquivalente) auf die Whitelist setzen.
2. Ist die Einstellung "Cookies und Website-Daten beim Beenden von Firefox löschen" **nicht** aktiviert, so wird auch der `localStorage` beim Beenden **nicht** geleert und die LSSM-Einstellungen bleiben erhalten. Ausnahme: Webseiten, die auf der Blacklist stehen, die man in den Einstellungen anpassen kann.
3. Wenn eine Webseite in der Blacklist auf "Nur für diese Sitzung" (o.ä.) ist. Wird deren `localStorage` unabhängig anderer Einstellungen beim Schliessen des Browsers gelöscht. Die LSSM-Einstellungen "überleben" einen Neustart des Browsers nicht.
4. Sind die Cookie-Einstellungen auf "Nur für eine Sitzung" (o.ä.), so wird auch der `localStorage` nur für diese Sitzung bestehen. Die Einstellungen des LSSM sind nach einem Neustart des Browsers nichtmehr vorhanden.


## Ich möchte mein Setup an Freunde weitergeben oder es an mehreren Geräten nutzen. Geht das?
Ja. In den [Einstellungen](/modules#einstellungen) gibt es jeweils einen Knopf zum Exportieren und Importieren von Einstellungen. Du bekommst beim Export eine Datei, die du speichern und weitergeben kannst. Beim Import kannst du dann ganz einfach diese Datei von deinem Computer auswählen.

## Gibt es eine Möglichkeit, Einstellungen Account-gebunden zu speichern, um sie an einem anderen Gerät nicht importieren zu müssen?
Nein, wir bieten diese Funktion derzeit noch nicht an.
