
document.querySelector("form").addEventListener("submit", userSubmit);

let userArr = JSON.parse(localStorage.getItem("user")) || [];

function userSubmit(){
    event.preventDefault()
    let userName = document.querySelector("#name").value;
    let userEmail = document.querySelector("#email").value;
    let userAddress = document.querySelector("#address").value;
    let userAmount = document.querySelector("#amount").value;
    userAmount = +userAmount;
    console.log(typeof(userAmount));

    let userObj = {
        name: userName,
        email: userEmail,
        address: userAddress,
        wallet: userAmount
       }

       userArr.push(userObj);
       console.log(userArr);

       localStorage.setItem("user", JSON.stringify(userArr));
}