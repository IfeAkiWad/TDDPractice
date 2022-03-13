class VendingMachine {
    
    constructor(items, initialMoneyInVending){
        this.items = items
        this.initialMoneyInVending = initialMoneyInVending
    }

    vend(selectionCode, userMoneyAmount) {
        const item = this.items.find( item => {
            return item.code === selectionCode
        })

        const invalidItem = !item

       if(invalidItem) return `Invalid selection! : Money in vending machine = ${this.initialMoneyInVending.toFixed(2)}`

       if (userMoneyAmount < item.price) {
           return "Not enough money!"
       }
       
       if (item.quantity === 0) {
           return `${item.name}: Out of stock!`
       }

       if(item && userMoneyAmount > item.price) {
           return `Vending ${item.name} with ${userMoneyAmount - item.price} change`
        }else{
            return `Vending ${item.name}`
        }
        

       
    }
}

module.exports = VendingMachine