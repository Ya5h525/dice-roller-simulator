function diceRoll() {
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const input = document.getElementById("input").value;
    const arrVal = [];
    const arrImg = [];

    for (let i = 0; i < input; i++) {
        let value = (Math.floor(Math.random() * 6)) + 1;
        arrVal.push(value);
        arrImg.push(`<img src="Dice-${value}.png" class="dice-img"> `);


    }

    const values = arrVal.join(`, `);
 
    diceResult.textContent = `DICE - ${values}`;
   
    diceImages.innerHTML = arrImg.join(``);
}