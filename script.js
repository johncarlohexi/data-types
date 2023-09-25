const availableCurrency = {
    yen: "Yen",
    usDollar: "US Dollars",
    caDollar: "CA Dollars"
}

let customerData = {
    user6969: {
        name:"Hex Kundiman",
        balance:2000 + " " + availableCurrency.yen,
        cartItems: 0
    },

    user7979: {
        name: "Reigne Manalang",
        balance: 3000 + " " + availableCurrency.yen,
        cartItems: 0
    }
}

function checkName() {
    for (const key in customerData) {
        if (customerData[key].name.includes(newCreatedUser.name)) {
            console.log("already")
            return true;
        }
    }
    return false
}

function NewUser(name, balance, cartItems) {
    this.name = name;
    this.balance = balance;
    this.cartItems = cartItems;
}

const btn = document.getElementById("submit")

btn.addEventListener("click", () => {
    createNewUser()
    checkName()
    pushToData(newCreatedUser)
    console.table(customerData)
})

let newCreatedUser;
function createNewUser() {
    let getUserName = document.getElementById("fullName").value
    let getBalance = document.getElementById("balance").value
    let getItems = document.getElementById("cartItems").value
    let itemsNum = Number(getItems)


    newCreatedUser = new NewUser(getUserName, getBalance, itemsNum)
}

function pushToData(user) {
    if (user instanceof NewUser) {

        if(checkName(user.name)) {
            return;
        }

        const userId = "user" + Math.floor(Math.random() * 10000)

        customerData[userId] = {
            name: user.name,
            balance: user.balance + " " + availableCurrency.yen,
            cartItems: user.cartItems
        }
    }
};






