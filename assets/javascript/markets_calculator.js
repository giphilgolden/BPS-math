let marketTextArea = document.querySelector("#market-text-area")
let marketInfo = document.querySelector("#market-info")
let marketSearchButton = document.querySelector("#market-search-button")
let marketNone  = document.querySelector("#market-none")
let a1Info = document.querySelector("#a1-info")
let a3Info = document.querySelector("#a3-info")
let aeInfo = document.querySelector("#ae-info")
let a5Info = document.querySelector("#a5-info")
let adInfo = document.querySelector("#ad-info")
let a9Info = document.querySelector("#a9-info")
let a7Info = document.querySelector("#a7-info")
let b2Info = document.querySelector("#b2-info")
let n3Info = document.querySelector("#n3-info")
let b4Info = document.querySelector("#b4-info")
let b9Info = document.querySelector("#b9-info")
let baInfo = document.querySelector("#ba-info")
let k3Info = document.querySelector("#k3-info")
let bbInfo = document.querySelector("#bb-info")
let bfInfo = document.querySelector("#bf-info")
let s5Info = document.querySelector("#s5-info")
let bgInfo = document.querySelector("#bg-info")
let v3Info = document.querySelector("#v3-info")
let Info10 = document.querySelector("#info10")
let Info20 = document.querySelector("#info20")
let Info30 = document.querySelector("#info30")
let Info40 = document.querySelector("#info40")
let Info50 = document.querySelector("#info50")
let Info60 = document.querySelector("#info60")
let Info70 = document.querySelector("#info70")
let Info80 = document.querySelector("#info80")
let Info90 = document.querySelector("#info90")
let Info100 = document.querySelector("#info100")
let Info110 = document.querySelector("#info110")
let Info120 = document.querySelector("#info120")
let Info130 = document.querySelector("#info130")
let Info140 = document.querySelector("#info140")
let Info150 = document.querySelector("#info150")
let Info160 = document.querySelector("#info160")
let Info170 = document.querySelector("#info170")
let Info180 = document.querySelector("#info180")


marketSearchButton.addEventListener("click", function() {
    a1Info.innerHTML = ""
    a3Info.innerHTML = ""
    aeInfo.innerHTML = ""
    a5Info.innerHTML = ""
    adInfo.innerHTML = ""
    a9Info.innerHTML = ""
    a7Info.innerHTML = ""
    b2Info.innerHTML = ""
    n3Info.innerHTML = ""
    b4Info.innerHTML = ""
    b9Info.innerHTML = ""
    baInfo.innerHTML = ""
    k3Info.innerHTML = ""
    bbInfo.innerHTML = ""
    bfInfo.innerHTML = ""
    s5Info.innerHTML = ""
    bgInfo.innerHTML = ""
    v3Info.innerHTML = ""
    Info10.innerHTML = ""
    Info20.innerHTML = ""
    Info30.innerHTML = ""
    Info40.innerHTML = ""
    Info50.innerHTML = ""
    Info60.innerHTML = ""
    Info70.innerHTML = ""
    Info80.innerHTML = ""
    Info90.innerHTML = ""
    Info100.innerHTML = ""
    Info110.innerHTML = ""
    Info120.innerHTML = ""
    Info130.innerHTML = ""
    Info140.innerHTML = ""
    Info150.innerHTML = ""
    Info160.innerHTML = ""
    Info170.innerHTML = ""
    Info180.innerHTML = ""


    let a1i = 1
    let a1Number = 2400
    while (a1i <= 50) {
        if (marketTextArea.value.includes((a1Number * a1i)+" 	0 	COR10879")) {
            a1Info.innerHTML += "<li>A1 - " + (a1i) + " </li>"
        } 
        a1i += 1
    }   

    if ((marketTextArea.value.includes("COR10879")) && (a1Info.innerHTML===(""))) {
        a1Info.innerHTML+=("A1 - Wrong Pallet QTY")
    }

    let a3i = 1
    let a3Number = 1600
    while (a3i <= 50) {
        if (marketTextArea.value.includes((a3Number * a3i)+" 	0 	COR10880")) {
            a3Info.innerHTML += "<li>A3 - " + (a3i) + " </li>"
        }
        a3i += 1
    }

    if ((marketTextArea.value.includes("COR10880")) && (a3Info.innerHTML===(""))) {
        a3Info.innerHTML+=("A3 - Wrong Pallet QTY")
    }



    let aei = 1
    let aeNumber = 1200
    while (aei <= 50) {
        if (marketTextArea.value.includes((aeNumber * aei)+" 	0 	COR10898")) {
            aeInfo.innerHTML += "<li>AE - " + (aei) + " </li>"
        }
        aei += 1
    }

    if ((marketTextArea.value.includes("COR10898")) && (aeInfo.innerHTML===(""))) {
        aeInfo.innerHTML+=("AE - Wrong Pallet QTY")
    }


    let a5i = 1
    let a5Number = 1200
    while (a5i <= 50) {
        if (marketTextArea.value.includes((a5Number * a5i)+" 	0 	COR10900")) {
            a5Info.innerHTML += "<li>A5 - " + (a5i) + " </li>"
        }
        a5i += 1
    }

    if ((marketTextArea.value.includes("COR10900")) && (a5Info.innerHTML===(""))) {
        a5Info.innerHTML+=("A5 - Wrong Pallet QTY")
    }

    let adi = 1
    let adNumber = 1600
    while (adi <= 50) {
        if (marketTextArea.value.includes((adNumber * adi)+" 	0 	COR10899")) {
            adInfo.innerHTML += "<li>AD - " + (adi) + " </li>"
        }
        adi += 1
    }

    if ((marketTextArea.value.includes("COR10899")) && (adInfo.innerHTML===(""))) {
        adInfo.innerHTML+=("AD - Wrong Pallet QTY")
    }

    let a9i = 1
    let a9Number = 800
    while (a9i <= 50) {
        if (marketTextArea.value.includes((a9Number * a9i)+" 	0 	COR10434")) {
            a9Info.innerHTML += "<li>A9 - " + (a9i) + " </li>"
        }
        a9i += 1
    }

    if ((marketTextArea.value.includes("COR10434")) && (a9Info.innerHTML===(""))) {
        a9Info.innerHTML+=("A9 - Wrong Pallet QTY")
    }

    let a7i = 1
    let a7Number = 1200
    while (a7i <= 50) {
        if (marketTextArea.value.includes((a7Number * a7i)+" 	0 	COR10902")) {
            a7Info.innerHTML += "<li>A7 - " + (a7i) + " </li>"
        }
        a7i += 1
    }

    if ((marketTextArea.value.includes("COR10902")) && (a7Info.innerHTML===(""))) {
        a7Info.innerHTML+=("A7 - Wrong Pallet QTY")
    }

    let b2i = 1
    let b2Number = 800
    while (b2i <= 50) {
        if (marketTextArea.value.includes((b2Number * b2i)+" 	0 	COR10903")) {
            b2Info.innerHTML += "<li>B2 - " + (b2i) + " </li>"
        }
        b2i += 1
    }

    if ((marketTextArea.value.includes("COR10903")) && (b2Info.innerHTML===(""))) {
        b2Info.innerHTML+=("B2 - Wrong Pallet QTY")
    }

    let n3Number = 800
    let n3i = 1
    while (n3i <= 50) {
        if (marketTextArea.value.includes((n3Number * n3i)+" 	0 	COR10904")) {
            n3Info.innerHTML += "<li>N3 - " + (n3i) + " </li>"
        }
        n3i += 1
    }

    if ((marketTextArea.value.includes("COR10904")) && (n3Info.innerHTML===(""))) {
        n3Info.innerHTML+=("N3 - Wrong Pallet QTY")
    }

    let b4Number = 400
    let b4i = 1
    while (b4i <= 50) {
        if (marketTextArea.value.includes((b4Number * b4i)+" 	0 	COR10436")) {
            b4Info.innerHTML += "<li>B4 - " + (b4i) + " </li>"
        }
        b4i += 1
    }

    if ((marketTextArea.value.includes("COR10436")) && (b4Info.innerHTML===(""))) {
        b4Info.innerHTML+=("B4 - Wrong Pallet QTY")
    }

    let b9Number =  800
    let b9i = 1
    while (b9i <= 50) {
        if (marketTextArea.value.includes((b9Number * b9i)+" 	0 	COR10906")) {
            b9Info.innerHTML += "<li>B9 - " + (b9i) + " </li>"
        }
        b9i += 1
    }

    if ((marketTextArea.value.includes("COR10906")) && (b9Info.innerHTML===(""))) {
        b9Info.innerHTML+=("B9 - Wrong Pallet QTY")
    }

    let baNumber = 400
    let bai = 1
    while (bai <= 50) {
        if (marketTextArea.value.includes((baNumber * bai)+" 	0 	COR10438")) {
            baInfo.innerHTML += "<li>BA - " + (bai) + " </li>"
        }
        bai += 1
    }

    if ((marketTextArea.value.includes("COR10438")) && (baInfo.innerHTML===(""))) {
        baInfo.innerHTML+=("BA - Wrong Pallet QTY")
    }

    let k3Number = 400
    let k3i = 1
    while (k3i <= 50) {
        if (marketTextArea.value.includes((k3Number * k3i)+" 	0 	COR10346")) {
            k3Info.innerHTML += "<li>K3 - " + (k3i) + " </li>"
        }
        k3i += 1
    }

    if ((marketTextArea.value.includes("COR10346")) && (k3Info.innerHTML===(""))) {
        k3Info.innerHTML+=("K3 - Wrong Pallet QTY")
    }

    let bbNumber = 400
    let bbi = 1
    while (bbi <= 50) {
        if (marketTextArea.value.includes((bbNumber * bbi)+" 	0 	COR10439")) {
            bbInfo.innerHTML += "<li>BB - " + (bbi) + " </li>"
        }
        bbi += 1
    }

    if ((marketTextArea.value.includes("COR10439")) && (bbInfo.innerHTML===(""))) {
        bbInfo.innerHTML+=("BB - Wrong Pallet QTY")
    }

    let bfNumber = 400
    let bfi = 1
    while (bfi <= 50) {
        if (marketTextArea.value.includes((bfNumber * bfi)+" 	0 	COR10910")) {
            bfInfo.innerHTML += "<li>BF - " + (bfi) + " </li>"
        }
        bfi += 1
    }

    if ((marketTextArea.value.includes("COR10910")) && (bfInfo.innerHTML===(""))) {
        bfInfo.innerHTML+=("BF - Wrong Pallet QTY")
    }

    let s5Number = 950 	
    let s5i = 1
    while (s5i <= 50) {
        if (marketTextArea.value.includes((s5Number * s5i)+" 	0 	COR30013")) {
            s5Info.innerHTML += "<li>S5 - " + (s5i) + " </li>"
        }
        s5i += 1
    }

    if ((marketTextArea.value.includes("COR30013")) && (s5Info.innerHTML===(""))) {
        s5Info.innerHTML+=("S5 - Wrong Pallet QTY")
    }

    let bgNumber = 400
    let bgi = 1
    while (bgi <= 50) {
        if (marketTextArea.value.includes((bgNumber * bgi)+" 	0 	COR20534")) {
            bgInfo.innerHTML += "<li>BG - " + (bgi) + " </li>"
        }
        bgi += 1
    }

    if ((marketTextArea.value.includes("COR20534")) && (bgInfo.innerHTML===(""))) {
        bgInfo.innerHTML+=("BG - Wrong Pallet QTY")
    }


    let v3Number = 2100
    let v3i = 1
    while (v3i <= 50) {
        if (marketTextArea.value.includes((v3Number * v3i)+" 	0 	COR20103")) {
            v3Info.innerHTML += "<li>V3 - " + (v3i) + " </li>"
        }
        v3i += 1
    }

    if ((marketTextArea.value.includes("COR20103")) && (v3Info.innerHTML===(""))) {
        v3Info.innerHTML+=("V3 - Wrong Pallet QTY")
    }

    let Number10 = 3150
    let i10 = 1
    while (i10 <= 50) {
        if (marketTextArea.value.includes((Number10 * i10)+" 	0 	COR11071")) {
            Info10.innerHTML += "<li>10 - " + (i10) + " </li>"
        }
        i10 += 1
    }

    if ((marketTextArea.value.includes("COR11071")) && (Info10.innerHTML===(""))) {
        Info10.innerHTML+=("10 - Wrong Pallet QTY")
    }
    
    let Number20 = 2520
    let i20 = 1
    while (i20 <= 50) {
        if (marketTextArea.value.includes((Number20 * i20)+" 	0 	COR11053")) {
            Info20.innerHTML += "<li>20 - " + (i20) + " </li>"
        }
        i20 += 1
    }

    if ((marketTextArea.value.includes("COR11053")) && (Info20.innerHTML===(""))) {
        Info20.innerHTML+=("20 - Wrong Pallet QTY")
    }

    let Number30 = 2100
    let i30 = 1
    while (i30 <= 50) {
        if (marketTextArea.value.includes((Number30 * i30)+" 	0 	COR11055")) {
            Info30.innerHTML += "<li>30 - " + (i30) + " </li>"
        }
        i30 += 1
    } 

    if ((marketTextArea.value.includes("COR11055")) && (Info30.innerHTML===(""))) {
        Info30.innerHTML+=("30 - Wrong Pallet QTY")
    }

    let Number40 = 2400
    let i40 = 1
    while (i40 <= 50) {
        if (marketTextArea.value.includes((Number40 * i40)+" 	0 	COR10795")) {
            Info40.innerHTML += "<li>40 - " + (i40) + " </li>"
        }
        i40 += 1
    } 

    if ((marketTextArea.value.includes("COR10795")) && (Info40.innerHTML===(""))) {
        Info40.innerHTML+=("40 - Wrong Pallet QTY")
    }

    let Number50 = 1600
    let i50 = 1
    while (i50 <= 50) {
        if (marketTextArea.value.includes((Number50 * i50)+" 	0 	COR11056")) {
            Info50.innerHTML += "<li>50 - " + (i50) + " </li>"
        }
        i50 += 1
    } 

    if ((marketTextArea.value.includes("COR11056")) && (Info50.innerHTML===(""))) {
        Info50.innerHTML+=("50 - Wrong Pallet QTY")
    }
    
    let Number60 = 1600
    let i60 = 1
    while (i60 <= 50) {
        if (marketTextArea.value.includes((Number60 * i60)+" 	0 	COR11070")) {
            Info60.innerHTML += "<li>60 - " + (i60) + " </li>"
        }
        i60 += 1
    } 

    if ((marketTextArea.value.includes("COR11070")) && (Info60.innerHTML===(""))) {
        Info60.innerHTML+=("60 - Wrong Pallet QTY")
    }

    let Number70 = 1680
    let i70 = 1
    while (i70 <= 50) {
        if (marketTextArea.value.includes((Number70 * i70)+" 	0 	COR10867")) {
            Info70.innerHTML += "<li>70 - " + (i70) + " </li>"
        }
        i70 += 1
    } 

    if ((marketTextArea.value.includes("COR10867")) && (Info70.innerHTML===(""))) {
        Info70.innerHTML+=("70 - Wrong Pallet QTY")
    }

    let Number80 = 840
    let i80 = 1
    while (i80 <= 50) {
        if (marketTextArea.value.includes((Number80 * i80)+" 	0 	COR10868")) {
            Info80.innerHTML += "<li>80 - " + (i80) + " </li>"
        }
        i80 += 1
    } 

    if ((marketTextArea.value.includes("COR10868")) && (Info80.innerHTML===(""))) {
        Info80.innerHTML+=("80 - Wrong Pallet QTY")
    }

    let Number90 = 1800
    let i90 = 1
    while (i90 <= 50) {
        if (marketTextArea.value.includes((Number90 * i90)+" 	0 	COR10869")) {
            Info90.innerHTML += "<li>90 - " + (i90) + " </li>"
        }
        i90 += 1
    } 

    if ((marketTextArea.value.includes("COR10869")) && (Info90.innerHTML===(""))) {
        Info90.innerHTML+=("90 - Wrong Pallet QTY")
    }


    let Number100 = 1260
    let i100 = 1
    while (i100 <= 50) {
        if (marketTextArea.value.includes((Number100 * i100)+" 	0 	COR10870")) {
            Info100.innerHTML += "<li>100 - " + (i100) + " </li>"
        }
        i100 += 1
    } 

    if ((marketTextArea.value.includes("COR10870")) && (Info100.innerHTML===(""))) {
        Info100.innerHTML+=("100 - Wrong Pallet QTY")
    }


    let Number110 = 800
    let i110 = 1
    while (i110 <= 50) {
        if (marketTextArea.value.includes((Number110 * i110)+" 	0 	COR10871")) {
            Info110.innerHTML += "<li>110 - " + (i110) + " </li>"
        }
        i110 += 1
    } 

    if ((marketTextArea.value.includes("COR10871")) && (Info110.innerHTML===(""))) {
        Info110.innerHTML+=("110 - Wrong Pallet QTY")
    }

    let Number120 = 1200
    let i120 = 1
    while (i120 <= 50) {
        if (marketTextArea.value.includes((Number120 * i120)+" 	0 	COR10872")) {
            Info120.innerHTML += "<li>120 - " + (i120) + " </li>"
        }
        i120 += 1
    } 

    if ((marketTextArea.value.includes("COR10872")) && (Info120.innerHTML===(""))) {
        Info120.innerHTML+=("120 - Wrong Pallet QTY")
    }
 
    let Number130 = 1200
    let i130 = 1
    while (i130 <= 50) {
        if (marketTextArea.value.includes((Number130 * i130)+" 	0 	COR10873")) {
            Info130.innerHTML += "<li>130 - " + (i130) + " </li>"
        }
        i130 += 1
    } 

    if ((marketTextArea.value.includes("COR10873")) && (Info130.innerHTML===(""))) {
        Info130.innerHTML+=("130 - Wrong Pallet QTY")
    }

    let Number140 = 840
    let i140 = 1
    while (i140 <= 50) {
        if (marketTextArea.value.includes((Number140 * i140)+" 	0 	COR10874")) {
            Info140.innerHTML += "<li>140 - " + (i140) + " </li>"
        }
        i140 += 1
    } 

    if ((marketTextArea.value.includes("COR10874")) && (Info140.innerHTML===(""))) {
        Info140.innerHTML+=("140 - Wrong Pallet QTY")
    }

    let Number150 = 1200
    let i150 = 1
    while (i150 <= 50) {
        if (marketTextArea.value.includes((Number150 * i150)+" 	0 	COR10875")) {
            Info150.innerHTML += "<li>150 - " + (i150) + " </li>"
        }
        i150 += 1
    } 

    if ((marketTextArea.value.includes("COR10875")) && (Info150.innerHTML===(""))) {
        Info150.innerHTML+=("150 - Wrong Pallet QTY")
    }

    let Number160 = 600
    let i160 = 1
    while (i160 <= 50) {
        if (marketTextArea.value.includes((Number160 * i160)+" 	0 	COR10876")) {
            Info160.innerHTML += "<li>160 - " + (i160) + " </li>"
        }
        i160 += 1
    } 

    if ((marketTextArea.value.includes("COR10876")) && (Info160.innerHTML===(""))) {
        Info160.innerHTML+=("160 - Wrong Pallet QTY")
    }

    let Number170 = 600
    let i170 = 1
    while (i170 <= 50) {
        if (marketTextArea.value.includes((Number170 * i170)+" 	0 	COR10877")) {
            Info170.innerHTML += "<li>170 - " + (i170) + " </li>"
        }
        i170 += 1
    } 

    if ((marketTextArea.value.includes("COR10877")) && (Info170.innerHTML===(""))) {
        Info170.innerHTML+=("170 - Wrong Pallet QTY")
    }

    let Number180 = 630
    let i180 = 1
    while (i180 <= 50) {
        if (marketTextArea.value.includes((Number180 * i180)+" 	0 	COR10840")) {
            Info180.innerHTML += "<li>180 - " + (i180) + " </li>"
        }
        i180 += 1
    } 
    if ((marketTextArea.value.includes("COR10840")) && (Info180.innerHTML===(""))) {
        Info180.innerHTML+=("180 - Wrong Pallet QTY")
    }


})

