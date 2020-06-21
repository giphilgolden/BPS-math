let topsInput = document.querySelector(".tops-input")
let topsHTMLWeight = document.querySelector(".tops-weight")
let topsHTMLPieces = document.querySelector(".tops-pieces")
let calculate = document.querySelector(".calculate-bps")
let bottomsInput = document.querySelector(".bottoms-input")
let bottomsHTMLWeight = document.querySelector(".bottoms-weight")
let bottomsHTMLPieces = document.querySelector(".bottoms-pieces")
let sidesHTMLWeight = document.querySelector(".sides-weight")
let sidesHTMLPieces = document.querySelector(".sides-pieces")
let sidesInput = document.querySelector(".sides-input")
let greyTopsHTMLWeight = document.querySelector(".grey-tops-weight")
let greyTopsHTMLPieces = document.querySelector(".grey-tops-pieces")
let greyTopsInput = document.querySelector(".grey-tops-input")
let totalWeight = document.querySelector(".total-weight")
let totalPieces = document.querySelector(".total-pieces")
let totalPallets = document.querySelector(".total-pallets")
let topsInputValue = topsInput.value
let bottomsInputValue = bottomsInput.value
let sidesInputValue = sidesInput.value
let greyTopsInputValue = greyTopsInput.value
let ymsNotes = document.querySelector(".result-yms-notes")


calculate.addEventListener("click", function(){
 topsHTMLWeight.innerHTML = topsInput.value * 391
 topsHTMLPieces.innerHTML = topsInput.value * 25
 bottomsHTMLWeight.innerHTML = bottomsInput.value * 538
 bottomsHTMLPieces.innerHTML = bottomsInput.value * 25
 sidesHTMLWeight.innerHTML = sidesInput.value * 953
 sidesHTMLPieces.innerHTML = sidesInput.value * 50
 greyTopsHTMLPieces.innerHTML = greyTopsInput.value * 320
 greyTopsHTMLWeight.innerHTML = greyTopsInput.value * 546
 totalPallets.innerHTML = 0 + (1 * topsInput.value) + (1 * bottomsInput.value) + (1 * sidesInput.value) + (1 * greyTopsInput.value)
 totalWeight.innerHTML =  (topsInput.value * 391) + (bottomsInput.value * 538) + (sidesInput.value * 953) + (greyTopsInput.value * 546)
 totalPieces.innerHTML =  (topsInput.value * 25) + (bottomsInput.value * 25) + (sidesInput.value * 50) + (greyTopsInput.value * 320)
if (greyTopsInput.value > 1) {
     ymsNotes.innerHTML = "NI BPS " + totalPallets.innerHTML + " Total pallets, " + topsInput.value + " pallets of tops, " + bottomsInput.value + " pallets of bottoms, " + sidesInput.value + " pallets of sides, " + greyTopsInput.value + " pallets of grey tote tops. Total weight = " + totalWeight.innerHTML + ", Total Pieces = " + totalPieces.innerHTML
 } if (greyTopsInput.value <= 0) {
    ymsNotes.innerHTML = "NI BPS " + totalPallets.innerHTML + " Total pallets, " + topsInput.value + " pallets of tops, " + bottomsInput.value + " pallets of bottoms, " + sidesInput.value + " pallets of sides. Total weight = " + totalWeight.innerHTML + ", Total Pieces = " + totalPieces.innerHTML
 } if (greyTopsInput.value == 1) {
   ymsNotes.innerHTML = "NI BPS " + totalPallets.innerHTML + " Total pallets, " + topsInput.value + " pallets of tops, " + bottomsInput.value + " pallets of bottoms, " + sidesInput.value + " pallets of sides, " + greyTopsInput.value + " pallet of grey tote tops. Total weight = " + totalWeight.innerHTML + ", Total Pieces = " + totalPieces.innerHTML
 }

})