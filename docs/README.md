---
title: Allgemein
lang: de
sidebarDepth: 2
---

# Wiki :de: <Badge text="LSSM Stable 3.3.5"/>


## Über den LSSM

Der LSS MANAGER V3 ist eine Erweiterung für das Spiel www.leitstellenspiel.de.

Mit dieser Erweiterung wird ein Appstore zum Spiel hinzugefügt, welches das Installieren von Plugins ermöglicht. Dabei sind alle Funktionen Modular aufgebaut - man kann bis auf den letzten Baustein bestimmen, was alles aktiviert werden soll.

Plugins die nicht aktiviert sind, werden auch nicht geladen - das macht die Verwaltung natürlich sehr einfach und sorgt für eine bessere Performance.


## Installation :inbox_tray:
Mit der Nutzung des LSSM bist du damit einverstanden, dass wir Metadaten erheben. Mehr Informationen hierzu findest du unter [Metadaten](./metadaten.md)

### Schritt 1: Tampermonkey
Sofern du Tampermonkey in deinem Browser noch nicht installiert hast, musst du dies noch tun. Hier eine Übersicht der Links für die häufigsten Browser:

Browser|Link
-------|----
Chrome | [Download](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)
Firefox| [Download](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
Safari | [Download](https://safari.tampermonkey.net/tampermonkey.safariextz)
Opera  | [Download](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)

Für sontige Browser kann man Tampermonkey auf [tampermonkey.net](https://www.tampermonkey.net/) herunterladen.

::: warning
Bitte beachte, dass wir ältere Browser, sowie mobile Browser und Microsoft Edge bzw. Internet Explorer nicht offiziell unterstützen. Der Support für diese Browser ist also weder garantiert, noch wahrscheinlich.
:::

### Schritt 2: Userscript
Wenn Tampermonkey in deinem Browser erfolgreich installiert wurde, kannst du entweder [hier](https://github.com/LSS-Manager/lss-manager-v3/raw/master/lssm-v3.user.js) klicken oder ein neues Userscript mit folgendem Inhalt anlegen:

<<< lssm-v3.user.js{4}

### Schritt 3: Aktivieren
Folgendes ist der Indikator für einen aktiven LSS-Manager: ![LSSM-Indikator](/img/lssm_navbar.png)
Solltest du dich im Leitstellenspiel befinden, aber diesen Indikator nicht in der oberen rechten Ecke sehen, so klicke auf das Tampermonkey-Icon in deinem Browser und überprüfe, ob der Schalter für das LSS-Manager Script auf "an" gestellt ist.

Bei Problemen kannst du dich jederzeit an den [Support](/support) wenden.
