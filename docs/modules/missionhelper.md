---
title: Einsatzhelfer
lang: de
---

# Einsatzhelfer
Du möchtest auf einen Blick alle wichtigen Infos zu einem Einsatz im Einsatzfenster haben? Der Einsatzhelfer ermöglicht dir genau das.
Um dir so viel Freiheit wie möglich zu gewährleisten, haben wir den Einsatzhelfer mit vielen Einstellungen versehen. Ebenfalls geben wir dir die Möglichkeit zwischen zwei Modi auszuwählen.
:::warning Automatisches Erfassen und Fehlerhafte Einträge
Unser System erfasst die Einsätze automatisch. Das heisst, wenn ein Einsatztyp (oder die Hilfe zu diesem Einsatztyp) das erste mal aufgerufen wird, so werden die Informationen in unserer Datei gespeichert. Dabei kann es immer passieren, dass eine Unregelmäßigkeit dazu führt, dass falsche oder unvollständige Daten erfasst werden. Ebenfalls bemerkt das System nicht, wenn ein Einsatztyp im Nachhinein geändert wird. Sollte dir ein Fehler auffallen, so melde ihn einfach, wie in [Fehler melden](/error_report) beschrieben. Wir sorgen dann dafür, dass der Fehler behoben wird und können ggf. sogar ein erneutes Auftreten dieses Fehlers verhindern.
:::

## Die beiden Modi
Eine kurze Erläuterung, damit du alles genau verstehst. Zwischen den beiden Modi wechselt man durch einen Klick auf den Pin oben rechts in der Ecke des Einsatzhelfers:

![Mit dem Pin zwischen den Modi wechseln](/modules/missionhelper/pin.png)

:::tip Übrigens
Der Einsatzhelfer merkt sich, in welchem Modus er ist und behält diesen so lange bei, bis du ihn wechselst.
:::

### Modus 1: Der angepinnte Modus
Dies ist der Standard-Modus.

Im angepinnten, "alten", Modus befindet sich der Einsatzhelfer zwischen der AAO und der Liste der freien Fahrzeuge (bzw. dem Bereich für Rückmeldungen, wenn der Einsatz im Verband freigegeben ist). Bei einem eigenen Einsatz sieht das, sofern man keine Einstellungen verändert hat, beispielsweise so aus:
![Einsatzhelfer im angepinnten Modus, Standardeinstellungen](/modules/missionhelper/angepinnt_eigener_einsatz.png)

### Modus 2: Der unangepinnte Modus
Der neue, unangepinnte Modus schwebt als Overlay über den Inhalten des Alarmfensters. Um trotzdem eine Lesbarkeit von allen Inhalten des Fensters zu gewährleisten, wird der Einsatzhelfer durchsichtig, sobald du mit der Maus über eine der folgenden Bestandteile gehst:
* Die Liste, welche Fahrzeuge noch benötigt werden
* Eine AAO oder ein Zug, welcher vom Einsatzhelfer überdeckt ist
* Der Bereich für Rückmeldungen, wenn gerade vom Einsatzhelfer überdeckt.

Ein Beispielhaftes Aussehen des Einsatzhelfers im unangepinnten Modus:
![Beispielhaftes Aussehen des Einsatzhelfers im unangepinnten Modus](/modules/missionhelper/unangepinnt.png)
:::tip Schon gewusst?
Im unangepinnten Modus kannst du den Einsatzhelfer an der gestrichelten Linie oben ziehen und verschieben, bis ihm schwindelig wird.

Ein Klick auf den "Pfeil" ermöglicht es dir, den Einsatzhelfer zu minimieren bzw. maximieren. Auch diesen Zustand merkt sich der Einsatzhelfer und nimmt ihn an, wenn ein anderer Einsatz geöffnet wird.
:::

## Die Einstellungen
Dieser Abschnitt soll dazu dienen, jede Einstellung kurz zu beschreiben.

### Name
Ist diese Einstellung aktiv, so wird im Einsatzhelfer der Name des Einsatzes angezeigt. Da dies, je nach Länge, viel Platz einnehmen kann und nicht jeder diese Information benötigt, kann jeder selbst über die Anzeige des Namens entscheiden. Der Name befindet sich immer an oberster Stelle im Einsatzhelfer.

Diese Einstellung ist standardmäßig `aktiv`

### ID
Jeder Einsatz verfügt über eine einzigartige ID. Gerade, wenn man eine Fehlermeldung machen möchte, ist es sehr wichtig, die ID zu betroffenen Einsätzen mitzugeben. Diese Einstellung ermöglicht dir, diese ID anzeigen zu lassen. Die ID wird zusammen mit Name, Typ und POI (jeweils, falls aktiviert) angezeigt.

Diese Einstellung ist standardmäßig `inaktiv`

### Typ-ID
Du möchtest wissen, welchen Einsatztyp der aktuelle Einsatz hat? Der Wunsch wäre hiermit erfüllt. Auch der Einsatztyp ist ganz oben mit dabei.

Diese Einstellung ist standardmäßig `inaktiv`

### POI
Als letzte Information, welche es geschafft hat, einen Platz in der ersten Zeile zu bekommen, gibt es noch den POI. Damit weisst du direkt, ob dies nun ein Mülleimerbrand an einer Bushaltestelle oder doch an einem Krankenhaus ist.

Diese Einstellung ist standardmäßig `inaktiv`

### Patienten
Wenn man schon den Blick auf den Einsatzhelfer wirft, statt die normale Titelleiste zu bewundern, kann man sich doch auch gleich die aktuelle Zahl der Patienten anzeigen lassen. Die Zahl wird in so einem schönen grauen Feldchen angezeigt.

Diese Einstellung ist standardmäßig `aktiv`

### Fahrzeuge
Auch wenn dies der eigentliche Haupt-Inhalt des Einsatzhelfers ist, kann man auch die Anzeige der benötigten Fahrzeuge ausschalten. Hat man die Einstellung "Zeige 100% Wahrscheinlichkeit" nicht aktiviert, so werden nur Wahrscheinlichkeiten angezeigt, die nicht 100% sind.

Diese Einstellung ist standardmäßig `aktiv`
:::tip Sortierung der Fahrzeuge
Die Fahrzeuge sind so sortiert, wie sie in der offiziellen Einsatzhilfe stehen. Die offizielle Einsatzhilfe ist über den Knopf "Hilfe zu diesem Einsatz" in der roten Leiste unten rechts vom Alarmfenster zu finden.
:::

### Patienteninformationen
Sofern ein Einsatz Patienten hat, ist es auch immer ganz hilfreich, zu wissen, was man für diese hinsenden muss. Diese Einstellung zeigt folgende Informationen (sofern bekannt):
* Wie viele Patienten minimal und wie viele maximal erscheinen können
* Transportwahrscheinlichkeit
* Welche Ausbaute die Zielklinik haben muss, um den 15%-Zuschlag zu bekommen
* Mit welcher Wahrscheinlichkeit ein Notarzt benötigt wird (als NEF angegeben)
* Mit welcher Wahrscheinlichkeit ein RTH benötigt wird
* Mit welcher Wahrscheinlichkeit eine Tragehilfe angefordert wird
* Bei mehr als 5 Patienten wird der KdoW-LNA erwähnt
* Bei mehr als 10 Patienten wird der KdoW-OrgL aufgelistet

Diese Einstellung ist standardmäßig `aktiv`

### Gefangeneninformationen
Gibt Auskunft darüber, wie viele Gefangene der Einsatz maximal bzw. minimal hervorbringen kann (Falls nicht beide Werte auf 0 sind logischerweise).

Diese Einstellung ist standardmäßig `aktiv`

### Sonstige Informationen
Hier finden alle Informationen Platz, die sonst nirgends hinpassen. Dazu gehören aktuell folgende Werte:
* Durschnittlich benötigte Feuerwehrleute
* Durschnittlich benötigte Polizisten

Diese Einstellung ist standardmäßig `aktiv`

### Ausbreitungen
Einsätze können sich ausbreiten. Zumindest, wenn man das in den Einstellungen vom Spiel aktiviert hat. Um eine Übersicht darüber zu bekommen, zu was sich der Einsatz ausbreiten kann gibt es diese Einstellung.

Diese Einstellung ist standardmäßig `aktiv`
:::warning Mehrstufige Einsätze
Der Einsatzhelfer beachtet derzeit nicht, dass sich Einsätze mehrfach ausbreiten können. Ist jedoch die Funktion gewünscht, dass auch weiterführende Ausbreitungen angezeigt werden, so mache doch einen Vorschlag, wie in [Vorschläge 💡](/suggestions) beschrieben.
:::

### Zeige 100% Wahrscheinlichkeit
Die einen finden es unnötig, den nächsten gefällt es besser und dem Rest ist es egal. Nicht jeder mag es, wenn hinter den Fahrzeuganforderungen `(100%)` steht. Ist diese Einstellung deaktiviert, werden die unnötigen Wahrscheinlichkeiten ausgeblendet.

Diese Einstellung ist standardmäßig `inaktiv`

### Durchschnittlicher Verdienst
Jeder freut sich zu sehen, wie viele Credits ein Einsatz durschnittlich gibt. La voilá, mit dieser Einstellung wird das angezeigt.

Diese Einstellung ist standardmäßig `aktiv`

### Anforderungen von Sicherheitswachen
Bei Sicherheitswachen aka geplanten Einsätzen ist von Anfang an das Feld sichtbar, in dem die noch benötigten Fahrzeuge angezeigt werden. Möchte man die Anforderungen dennoch im Einsatzhelfer angezeigt bekommen, so muss man dies erst manuell aktivieren.

Diese Einstellung ist standardmäßig `inaktiv`

### Generierungszeit
Manch ein Mensch möchte auch im Einsatzhelfer sehen können, wann ein Einsatz generiert wurde. Wir haben diese Information für diese Gruppe eingebaut.

Diese Einstellung ist standardmäßig `inaktiv`

### Wasserbedarf
Ein paar Einsätze benötigen statt einer Mindestzahl an Löschfahrzeuge eine bestimmte Wassermenge vor Ort. Diese wird, falls vorhanden und diese Einstellung aktiv ist, neben den Credits angezeigt.

Diese Einstellung ist standardmäßig `aktiv`

### ELW 1 einfach werten
Wie manche vielleicht wissen zählt ein ELW 2 ebenfalls als ein ELW 1. Wird also ein ELW 1 und ein ELW 2 angefordert, so reicht es aus, ein ELW 2 zu senden. Um Leuten zu helfen, diese Tatsache zu nutzen, gibt es die Möglichkeit, die Zahl der benötigten ELW 1 im Einsatzhelfer geringer anzuzeigen. Es wird einfach die Zahl der benötigten ELW 2 abgezogen.

Diese Einstellung ist standardmäßig `inaktiv`

### Rüstwagen einfach werten
Wie manche vielleicht wissen zählt ein HLF gleichzeitig als ein LF und ein Rüstwagen (RW). Wird also ein RW und ein LF angefordert, so reicht es aus, ein HLF zu senden. Um Leuten zu helfen, diese Tatsache zu nutzen, gibt es die Möglichkeit, die Zahl der benötigten RW im Einsatzhelfer geringer anzuzeigen. Es wird einfach die Zahl der benötigten LF abgezogen. Diese Einstellung ist hauptsächlich für die Spieler gedacht, die anstelle von LF und RW nur HLF haben.

Diese Einstellung ist standardmäßig `inaktiv`
