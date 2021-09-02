
// hier is een loop waarin in de console 10x 'i heeft nu de waarde' staat,
// alleen heb ik ook gezegd dat in de console staat wat de waarde is van i
// dus vanaf het begin staat er dat i 0 is en dat gaat door tot de loop 10x is geherhaald
for (let i = 0; i < 10; i++) {
    console.log("i heeft nu de waarde " + i);
}

console.log("Hello world")

//hier is een variabele gemaakt genaamd mijnauto
    let mijnauto = {
//daarin ziten variabelen die details aangeven van de auto, zoals de kleur en het aantal wielen
    merk: "Ford ",
    type: "Mondeo ",
    aantalWielen: 4,
    kleur: "blauw ",

    }
console.log(mijnauto.kleur);


document.write(mijnauto.kleur)
document.write(mijnauto.merk)
document.write(mijnauto.type)
document.write(mijnauto.aantalWielen + " wielen")