console.log('WHILE.JS')

var i = 2;

while (i <= 65536) {
    console.log(i);
    i *= 2;

}

var allCones = Math.floor(Math.random() * 50) + 50;//assign random number 50-100 to var=allCones

console.log("Starting with " + allCones + " cones.");//log starting amount
do {
    var conesToSell = Math.floor(Math.random() * 5) + 1 //assing random number between 1-5 to var=conesToSell
    if (conesToSell <= allCones) {                      //if conesToSell is less than or equal to allCones, log the number of cones sold
        console.log(conesToSell + " cones sold...");    //display "conesSold(1-5)cones sold
        allCones -= conesToSell;                        //remove conesSold from allCones and refeed
    } else {
        console.log("Can not sell you " + conesToSell + " cones, I only have " + allCones + "...")
                                                        //else(if conesToSell is less than allCones, display "can not sell you conesToSell(1-5), i only have allCones(recalculated)
    }
    }
    while (allCones > 0) ;//if allCones is less than 0, then log "Yay! I sold them all!!"
    console.log("Yay! I sold them all!");