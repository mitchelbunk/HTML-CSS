let iRate;
let month;
let monthly;
let loan;
let totaal;

function MaandelijkseVasteLasten () {
    iRate = parseInt(document.getElementById("iRate").value);
    month = parseInt(document.getElementById("month").value);
    loan = parseInt(document.getElementById("loan").value);

    totaal = loan + (iRate / 100 *  loan);
    monthly = totaal/month;

    document.getElementById("totaal").value = monthly;

}
