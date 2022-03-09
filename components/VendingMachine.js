class VendingMachine {
    
    constructor(items, initialMoneyInVending){
        this.items = items
        this.initialMoneyInVending = initialMoneyInVending
    }

    vend(selectionCode, userMoneyAmount) {
        const item = this.items.find( item => {
            return item.code === selectionCode
        })

       if (userMoneyAmount < item.price) {
           return "Not enough money!"
       }
       
       if (item.quantity === 0) {
           return `${item.name}: Out of stock!`
       }

       if(item) {
           return `Vending ${item.name} with ${userMoneyAmount - item.price} change`
        }

       if(item) {
           retrun
       } 
    }
}

module.exports = VendingMachine