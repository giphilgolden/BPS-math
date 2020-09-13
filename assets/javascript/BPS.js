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
let blueSidesInput = document.querySelector(".blue-sides-input")
let blueSidesHTMLPieces = document.querySelector(".blue-sides-pieces")
let blueSidesHTMLWeight = document.querySelector(".blue-sides-weight")
let greyTopsHTMLWeight = document.querySelector(".grey-tops-weight")
let greyTopsHTMLPieces = document.querySelector(".grey-tops-pieces")
let greyTopsInput = document.querySelector(".grey-tops-input")
let totalWeight = document.querySelector(".total-weight")
let totalPieces = document.querySelector(".total-pieces")
let totalPallets = document.querySelector(".total-pallets")
let topsInputValue = topsInput.value
let bottomsInputValue = bottomsInput.value
let sidesInputValue = sidesInput.value
// let blueSidesInputValue = blueSidesInput.value
let greyTopsInputValue = greyTopsInput.value
let ymsNotes = document.querySelector(".result-yms-notes")
let ymsNotes2 = document.querySelector(".result-yms-notes2")
let blueNotes = document.querySelector(".result-blue-notes")
let greyTopsNotes = document.querySelector(".result-grey-tops-notes")

calculate.addEventListener("click", function(){
 topsHTMLWeight.innerHTML = topsInput.value * 391
 topsHTMLPieces.innerHTML = topsInput.value * 25
 bottomsHTMLWeight.innerHTML = bottomsInput.value * 538
 bottomsHTMLPieces.innerHTML = bottomsInput.value * 25
 sidesHTMLWeight.innerHTML = sidesInput.value * 953
 sidesHTMLPieces.innerHTML = sidesInput.value * 50
//  blueSidesHTMLWeight.innerHTML = blueSidesInput.value * 927
//  blueSidesHTMLPieces.innerHTML = blueSidesInput.value * 50
 greyTopsHTMLPieces.innerHTML = greyTopsInput.value * 320
 greyTopsHTMLWeight.innerHTML = greyTopsInput.value * 546

//  totalPallets.innerHTML = 0 + (1 * topsInput.value) + (1 * bottomsInput.value) + (1 * sidesInput.value) + (1 * blueSidesInput.value) + (1 * greyTopsInput.value)
//  totalWeight.innerHTML =  (topsInput.value * 391) + (bottomsInput.value * 538) + (sidesInput.value * 953) + (blueSidesInput.value * 927) + (greyTopsInput.value * 546)
//  totalPieces.innerHTML =  (topsInput.value * 25) + (bottomsInput.value * 25) + (sidesInput.value * 50) + (blueSidesInput.value * 50) + (greyTopsInput.value * 320)
 
totalPallets.innerHTML = 0 + (1 * topsInput.value) + (1 * bottomsInput.value) + (1 * sidesInput.value) + (1 * greyTopsInput.value)
 totalWeight.innerHTML =  (topsInput.value * 391) + (bottomsInput.value * 538) + (sidesInput.value * 953) + (greyTopsInput.value * 546)
 totalPieces.innerHTML =  (topsInput.value * 25) + (bottomsInput.value * 25) + (sidesInput.value * 50) + (greyTopsInput.value * 320)

 ymsNotes.innerHTML ="NI BPS " + totalPallets.innerHTML + " Total pallets, " + topsInput.value + " pallets of tops, " + bottomsInput.value + " pallets of bottoms, " + sidesInput.value + " pallets of sides" ;
//  ymsNotes2.innerHTML = "NI BPS " + totalPallets.innerHTML + " Total pallets, " + topsInput.value + " pallets of tops, " + bottomsInput.value + " pallets of bottoms, " + sidesInput.value + " pallets of sides";
 

//   blueNotes.innerHTML = ", " + blueSidesInput.value + " pallets of blue sides"
//   console.log(blueNotes.innerHTML)

//   greyTopsNotes.innerHTML = ", " + greyTopsInputValue + " pallets of gray tops"

// let index = 5
// console.log(index)
// if (blueSidesInputValue >= 1) {
//   index += 1
// }
// if (greyTopsInputValue >= 1) {
//   index += 1
// }

// for (i=0; i<=index; i+=1) {
//  console.log(i)
//  if (i === i) {
//   ymsNotes.append(i)
//  }

// }

if (greyTopsInput.value > 1) {
  ymsNotes.innerHTML = "NI BPS " + totalPallets.innerHTML + " Total pallets, " + topsInput.value + " pallets of tops, " + bottomsInput.value + " pallets of bottoms, " + sidesInput.value + " pallets of sides, " + greyTopsInput.value + " pallets of grey tote tops. Total weight = " + totalWeight.innerHTML + ", Total Pieces = " + totalPieces.innerHTML
} if (greyTopsInput.value <= 0) {
 ymsNotes.innerHTML = "NI BPS " + totalPallets.innerHTML + " Total pallets, " + topsInput.value + " pallets of tops, " + bottomsInput.value + " pallets of bottoms, " + sidesInput.value + " pallets of sides, " + "Total weight = " + totalWeight.innerHTML + ", Total Pieces = " + totalPieces.innerHTML
} if (greyTopsInput.value == 1) {
ymsNotes.innerHTML = "NI BPS " + totalPallets.innerHTML + " Total pallets, " + topsInput.value + " pallets of tops, " + bottomsInput.value + " pallets of bottoms, " + sidesInput.value + " pallets of sides, " + greyTopsInput.value + " pallet of grey tote tops. Total weight = " + totalWeight.innerHTML + ", Total Pieces = " + totalPieces.innerHTML
} 



// if (greyTopsInput.value > 1) {
//      ymsNotes.innerHTML = "NI BPS " + totalPallets.innerHTML + " Total pallets, " + topsInput.value + " pallets of tops, " + bottomsInput.value + " pallets of bottoms, " + sidesInput.value + " pallets of sides, " + blueSidesInput.value + " pallets of blue sides, " + greyTopsInput.value + " pallets of grey tote tops. Total weight = " + totalWeight.innerHTML + ", Total Pieces = " + totalPieces.innerHTML
//  } if (greyTopsInput.value <= 0) {
//     ymsNotes.innerHTML = "NI BPS " + totalPallets.innerHTML + " Total pallets, " + topsInput.value + " pallets of tops, " + bottomsInput.value + " pallets of bottoms, " + sidesInput.value + " pallets of sides, " + blueSidesInput.value + " pallets of blue sides. " + "Total weight = " + totalWeight.innerHTML + ", Total Pieces = " + totalPieces.innerHTML
//  } if (greyTopsInput.value == 1) {
//    ymsNotes.innerHTML = "NI BPS " + totalPallets.innerHTML + " Total pallets, " + topsInput.value + " pallets of tops, " + bottomsInput.value + " pallets of bottoms, " + sidesInput.value + " pallets of sides, " + blueSidesInput.value + " pallets of blue sides, " + greyTopsInput.value + " pallet of grey tote tops. Total weight = " + totalWeight.innerHTML + ", Total Pieces = " + totalPieces.innerHTML
//  } 
 
//   if (greyTopsInput.value > 1 && blueSidesInput.value > 1){
//     ymsNotes.innerHTML = "yes"
//   }

})
