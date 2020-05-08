---
title: General
lang: en
sidebarDepth: 2
---

# Wiki :us: :gb: :australia: <Badge text="LSSM Stable 3.3.5"/>

## About the LSSM
LSS MANAGER V3 (LSSM) is an extension for [missionchief.com](https://missionchief.com), [missionchief.co.uk](https://missionchief.co.uk) and [missionchief-australia.com](https://missionchief-australia.com).

LSSM is an extension which allows you to install different plugins to your game. All functions from LSSM are modular, so you can decide which to activate.

Plugins which are not activated will not be loaded, increasing performance.

## Installation :inbox_tray:
By using LSSM you agree that we collect metadata. You can find more information about what we collect [here](/en/metadata).

We will soon provide a Table with compatible Browser in our [FAQ](./faq#in-welchen-browsern-funktioniert-der-lss-manager)

::: tip Use the LSSM on mobile devices
Officially we do not support a mobile version. The mobile Firefox supports using addons but we do not guarantee full functionality.

Official support for mobile browsers is currently **not** planned.
:::

### First Step: Install Tampermonkey
If you don't have Tampermonkey installed in your browser yet, you have to do so. Here are installation links for the most common browsers:

Browser|Link
-------|----
Chrome | [Download](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)
Firefox| [Download](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
Safari | [Download](https://safari.tampermonkey.net/tampermonkey.safariextz)
Opera  | [Download](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)

For other Browsers you can download Tampermonkey from [tampermonkey.net](https://www.tampermonkey.net/)

::: warning
Please be aware that we don't officially support older browser as well as mobile browsers and Microsoft Edge (Internet Explorer). Support for these browsers is neither guaranteed nor probable.
:::

### Second Step: Install Userscript
After installing Tampermonkey to your browser, you can click [here](https://github.com/LSS-Manager/lss-manager-v3/raw/master/lssm-v3.user.js) or create a new Userscript with the following content:

<<< lssm-v3.user.js

### Third Step: Activate

Following is the indicator for LSS-Manager while it is active: ![LSSM-Indikator](/img/lssm_navbar.png) If you are in Missionchief but do not see this indicator in the upper right corner, click on the Tampermonkey icon in your browser and check if the switch for LSS-Manager Script is "on".

If you encounter problems you can contact [support](/en/support).
