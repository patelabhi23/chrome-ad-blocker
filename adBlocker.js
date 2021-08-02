const BlockTheseSites = [
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.profitabledisplaycontent.com/*",
    "*://*.sentexoticoncoming.com/*",
    "*://*.incorporateusagedrugged.com/*",
    "*://*.melongnaw.com/*",
    "*://*.ladsatz.com/*",
    "*://*.folderbunch.com/*",
    "*://*.candalhands.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function (details) { return { cancel: true } },
    { urls: BlockTheseSites }, ["blocking"]
)