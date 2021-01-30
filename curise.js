numberOfEconomyTicket = 0;
numberOfFirstClassTicket = 0;
subTotalCost = 0;
document.getElementById("economyInput").value = numberOfEconomyTicket;
document.getElementById("fastClassInput").value = numberOfFirstClassTicket;
CalculateCost();

document.getElementById("economyInput").onchange = () => {
    numberOfEconomyTicket = parseInt( document.getElementById("economyInput").value );
    CalculateCost();
}

document.getElementById("fastClassInput").onchange = () => {
    numberOfFirstClassTicket = parseInt( document.getElementById("fastClassInput").value );
    CalculateCost();
}


function updateEconomy(value){
    if(numberOfEconomyTicket == 0 && value == -1) {
        return;
    }
    numberOfEconomyTicket = numberOfEconomyTicket + value;
    document.getElementById("economyInput").value = numberOfEconomyTicket;
    CalculateCost();
}

function updateFirstClass(value){
    if(numberOfFirstClassTicket == 0 && value == -1) {
        return; 
    }
    numberOfFirstClassTicket = numberOfFirstClassTicket + value;
    document.getElementById("fastClassInput").value = numberOfFirstClassTicket;
    CalculateCost();
}

function CalculateCost(){
    subTotalCost = numberOfEconomyTicket * 100 + numberOfFirstClassTicket * 150;
    document.getElementById("subtotal").innerText = '$' + subTotalCost;
    document.getElementById("vat").innerText = '$' + subTotalCost / 10 ;
    document.getElementById("total").innerText = '$' + (subTotalCost + subTotalCost/10) ;
}

backToHome;

function submit() {

    backToHome = document.getElementById("booking").innerHTML;

    document.getElementById("booking").innerHTML =
     `
    <div class="item">
    <div class="property">Economy Tickets:</div> 
    <div class="value"> ${numberOfEconomyTicket} * $100</div>
</div>
<div class="item">
    <div class="property">First Class:</div> 
    <div class="value" > ${numberOfFirstClassTicket}  * $150</div>
</div>
<div class="item">
    <div class="property">SubTotal: </div> 
    <div class="value" > $${subTotalCost} </div>
</div>
<div class="item">
    <div class="property">Vat: </div> 
    <div class="value" > $${subTotalCost/10} </div>
</div>
<div class="item">
    <div class="property">total: </div> 
    <div class="value" > $${subTotalCost + subTotalCost/10} </div>
</div>
    `
}

function goBack() {
    document.getElementById("booking").innerHTML = backToHome;
    document.getElementById("economyInput").value = numberOfEconomyTicket;
    document.getElementById("fastClassInput").value = numberOfFirstClassTicket;
    CalculateCost();
}


