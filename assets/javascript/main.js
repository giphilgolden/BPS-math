let linksButton = document.querySelector("#links")
let rightHeaderTitle = document.querySelector(".right-header-title")
let dailyCounts = document.querySelector("#daily-counts")
let dailyReminders = document.querySelector("#daily-reminders")
let ymsLink = document.querySelector("#yms-link")
let receiving = document.querySelector("#receiving-link")
let delphi = document.querySelector("#delphi")
let trailerAudit = document.querySelector("#trailer-audit")
let wash = document.querySelector("#wash")
let bps = document.querySelector("#bps-link")
let ccLink = document.querySelector("#cc-link")
let EM = document.querySelector("#em-link")
let tranship = document.querySelector("#tranship-link")
let worldShip = document.querySelector("#worldship-link")
let c3po = document.querySelector("#c3po")
let newHire = document.querySelector("#new-hire")
let markets = document.querySelector("#markets")

linksButton.addEventListener("mouseover", function() {
    rightHeaderTitle.innerHTML = ("Useful links to the sites that NIRs uses the most");
})

dailyCounts.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to print the sheets, and how to upload to share point and delphi. And Go Cart/ BPS counts");
})

dailyReminders.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("Reminders for daily tasks and also for special task on certain days");
})

ymsLink.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to edit notes, view history, and move trucks in YMS");
})

receiving.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to look up and receive PO #s in Coupa");
})

delphi.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to see what trucks are coming in on a certain day");
})

trailerAudit.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to do the trailer auidit");
})

wash.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to do the wash");
})

bps.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to see when pick ups are scheduled, attack a VRID, and create the BOL")
})

ccLink.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to do a cycle count")
})

EM.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to do safety Circles, and Labor track")
})

tranship.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to do a tranship load")
})

worldShip.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to ship a pallet using WorldShip")
})

c3po.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How to send and view a C3PO")
})

newHire.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("All the PMVs and training a new hire will need")
})

markets.addEventListener("mouseover", function () {
    rightHeaderTitle.innerHTML = ("How many pallets go into each market and other tools for the markets")
})
