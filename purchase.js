let purchaseArr = JSON.parse(localStorage.getItem("purchase")) || [];


let userArr = JSON.parse(localStorage.getItem("user"));

let sum = 0;
let container = document.getElementById("purchased_vouchers");

function append(data){
    
    let wallet = document.getElementById("wallet_balance");
    if(purchaseArr.length >=1){
    data.forEach(function(el){
        
        let card = document.createElement("div");
        card.setAttribute("class", "voucher")

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("h3");
        name.innerText = el.name;

        let pr = document.createElement("h3");
        pr.innerText = el.price;
        pr.value = el.price;
        

        card.append(img, name, pr);

        container.append(card);

        

        sum += pr.value;
    })
}
    if(sum == 0){
        wallet.innerText = userArr[0].wallet;
        wallet.value = userArr[0].wallet;
    }

    else{
        wallet.innerText = userArr[0].wallet - sum;
        wallet.value = userArr[0].wallet - sum;
    }

userArr[0].wallet = userArr[0].wallet - sum;

wallet.innerText = +wallet.innerText;

let bal = wallet.value;
localStorage.setItem("wallet", JSON.stringify(bal));
}

append(purchaseArr);