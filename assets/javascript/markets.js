let selectAll = document.querySelector(".select_all")
let removeAll = document.querySelector(".remove_all")
let groundMarket = document.querySelector(".gmbutton")
let westMarket = document.querySelector(".wmbutton")
let singlesMarket = document.querySelector(".SinglesMButton")
let afe1 = document.querySelector(".AFE1button")
let afe2 = document.querySelector(".AFE2button")
let singlesMM = document.querySelector(".SinglesMMButton")
let groundMTable = document.querySelector(".Ground-M")
let afe1Table = document.querySelector(".AFE1-MM")
let westTable = document.querySelector(".West-M")
let afe2Table = document.querySelector(".AFE2-MM")
let singlesTable = document.querySelector(".Singles-M")
let singlesMMTable = document.querySelector(".Singles-MM")

selectAll.addEventListener("click", function () {
    groundMTable.style.display = "inline-block"
    afe1Table.style.display = "inline-block"
    westTable.style.display = "inline-block"
    afe2Table.style.display = "inline-block"
    singlesTable.style.display = "inline-block"
    singlesMMTable.style.display = "inline-block";


})

removeAll.addEventListener("click", function () {
    groundMTable.style.display = "none"
    afe1Table.style.display = "none"
    westTable.style.display = "none"
    afe2Table.style.display = "none"
    singlesTable.style.display = "none"
    singlesMMTable.style.display = "none";
})

groundMarket.addEventListener("click", function () {
    if (groundMTable.style.display === "inline-block") {
        groundMTable.style.display = "none";
      } else {
        groundMTable.style.display = "inline-block";
      }
})

if (groundMTable.style.display === "inline-block") {
    groundMarket.style.bordercolor = "red"
}

afe1.addEventListener("click", function () {
    if (afe1Table.style.display === "inline-block") {
        afe1Table.style.display = "none";
    } else {
        afe1Table.style.display = "inline-block";
    }
})

westMarket.addEventListener("click", function () {
    if (westTable.style.display === "inline-block") {
        westTable.style.display = "none";
    } else {
        westTable.style.display = "inline-block";
    }
})

afe2.addEventListener("click", function () {
    if (afe2Table.style.display === "inline-block") {
        afe2Table.style.display = "none";
    } else {
        afe2Table.style.display = "inline-block";
    }
})

singlesMarket.addEventListener("click", function () {
    if (singlesTable.style.display === "inline-block") {
        singlesTable.style.display = "none";
    } else {
        singlesTable.style.display = "inline-block";
    }
})

singlesMM.addEventListener("click", function () {
    if (singlesMMTable.style.display === "inline-block") {
        singlesMMTable.style.display = "none"; 
    } else {
        singlesMMTable.style.display = "inline-block";
    }
})

