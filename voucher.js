// https://masai-vouchers-api.herokuapp.com/api/vouchers

let userArr = JSON.parse(localStorage.getItem("user"));
console.log(userArr);

let container = document.getElementById("voucher_list");

let bal = JSON.parse(localStorage.getItem("wallet"));
let wallet = document.getElementById("wallet_balance");
if(bal == undefined){
    wallet.innerText = userArr[0].wallet;
}
else{
    wallet.innerText = bal;
}


async function getVoucher(){
    let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

    let res = await fetch(url);

    let data = await res.json();
    console.log(data[0].vouchers);
    append(data[0].vouchers)
}

getVoucher();



let purchaseArr = JSON.parse(localStorage.getItem("purchase")) || [];
console.log(purchaseArr)

function append(data){
    
    let sum = 0;
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
        console.log(pr.value);

        let btn = document.createElement("button");
        btn.innerText = "Buy";
        btn.setAttribute("class", "buy_voucher");
        btn.addEventListener("click", function(){
            if(pr.value <= bal){
                alert("Hurray! purchase successful");
                sum += pr.value;
                
                purchaseArr.push(el);
                localStorage.setItem("purchase", JSON.stringify(purchaseArr))
            }

            else{
                alert("Sorry! insufficient balance")
            }
        })

        card.append(img, name, pr, btn);

        container.append(card);

        
    })
    
}


