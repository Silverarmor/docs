---
title: Fahrzeuge umbenennen
lang: de
---

# Fahrzeuge umbenennen
Dieses Modul ermöglicht es einem, alle Fahrzeuge einer Wache oder einer Leitstelle auf einmal nach einem eigenen System zu umzubenennen. Dabei stehen einem viele Variablen und Einstellungsmöglichkeiten zur Verfügung.

## Das Umbenennen im Gebäude
Über das kleine durchgestrichene Auge in der Wache bzw. im Reiter "Fahrzeuge" der Leitstelle lässt sich das Formular ein- bzw. ausblenden. Somit spart man Platz, sollte das Modul mal länger nicht in Benutzung sein.
Um seine Fahrzeuge umbenennen zu können, muss man zunächst ein Template angeben. Das geht ganz leicht, indem man Text in das Textfeld eingibt. Da es langweilig ist, alle Fahrzeuge gleich zu benennen, gibt es verschiedene Variablen, die du nutzen kannst. Diese sind im Abschnitt [Variablen](#die-variablen) detailliert erklärt. Eine Variable kannst du entweder selbst in das Textfeld schreiben oder über einen der Buttons darüber einfügen.

In dem Zifferneingabefeld kann man einen Startwert für den Typzähler angeben. Setzt man da 0 und legt den Hebel darunter um, so werden Fahrzeuge, die nur einen Typ auf der Wache haben keine Durchnummerierung bekommen, sollten sich aber mehrere Fahrzeuge eines Typs auf der Wache befinden, wird der Typ, bei 1 beginnend, durchnummeriert. Man kann dann aber auch den Zähler bei 5 starten lassen (warum auch immer man das wollen sollte, aber es ist möglich :wink:)

Mittels des Knopfes "Umbenennen" werden alle Fahrzeugnamen überprüft und gegebenenfalls ein Textfeld geöffnet, über das man den Namen noch nachkorrigieren kann.

Der Button "Alle speichern" speichert alle Fahrzeugnamen. Da die Beschriftung des Knopfes ganz bestimmt nicht genug Aufklärung über die Funktionsweise bietet, ist dieser Text hier sehr wichtig. Genauso wie beim daneben liegenden Knopf "Fahrzeuge mit richtigem Namen ein-/ausblenden", welcher alle Fahrzeuge ein- bzw. ausblendet, welche bereits den richtigen Namen tragen.

## Die Variablen
Diese Variablen gibt es und stehen dir zur Verfügung.

`{id}` Jedes Fahrzeug hat eine eigene ID, diese kann über diese Variable eingefügt werden.

`{old}` Du willst den alten Namen des Fahrzeugs mitverarbeiten? Mache dies mit dieser Variable.

`{vehicleType}` Jedes Fahrzeug hat einen Typ, der über diese Variable in den Namen integriert werden kann. Eigene Fahrzeugklassen werden derzeit (noch) nicht unterstützt.

Du willst jedoch einen alternativen Namen für einen Typen festlegen? Mache dies über die Einstellungen und füge ihn dann via folgender Variable ein: `{tagging}`

`{stationName}` Mittels dieser Variable ermöglichen wir dir den Namen des Gebäudes, an dem das Fahrzeug stationiert ist, einzufügen.

Analog zu Aliasen der Fahrzeugtypen, kannst du auch für jedes Gebäude ein Alias in den Einstellungen angeben und hierüber dem neuen Namen des Fahrzeuges hinzuzufügen: `{stationAlias}`

`{dispatch}` Mittels dieser Variable ermöglichen wir dir den Namen der Leitstelle, in der du dich gerade befindest, einzufügen.

Analog zu Aliasen der Gebäude-Aliasen, kannst du auch für jede Leitstelle ein Alias in den Einstellungen angeben und hierüber dem neuen Namen des Fahrzeuges hinzuzufügen: `{dispatchAlias}`

Auch eine Nummerierung nach Typ pro Wache ist in arabischen Ziffern über die Variable `{number}` bzw. `{numberRoman}` in römischer Schreibweise ermöglicht.

## Die Einstellungen

In den Einstellungen kannst du die oben erwähnten Aliase festlegen.

Hierbei ist zwischen Fahrzeugtypen und Gebäuden aufgeteilt, um ein schnelleres Finden des gewollten Objektes zu ermöglichen.
