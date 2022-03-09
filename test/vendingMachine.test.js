const VendingMachine = require('./VendingMachine')

describe('test', () => {
    const items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
    {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
    {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
    {name:"Freddo", code:"A04", quantity:0, price:0.25}];

    const machine = new VendingMachine(items,10.00)

    test('If the money given to the machine is less than the item cost return "Not enough money!"', () => { 
        expect(machine.vend('A04', 0.10)).toBe("Not enough money!")
    })

    test('If the quantity is 0 for an item return "Item Name: Out of stock!"', () => {
        expect(machine.vend('A04', 0.25)).toBe("Freddo: Out of stock!")
    })  

    test('If an item is correctly selected return "Vending Item Name with 0.4 change', () => {
        expect(machine.vend('A02', 1)).toBe("Vending Caramac Bar with 0.4 change")
    })

    test('If an item is correctly selected and there is no change needed then return "Vending Item Name"', () => {
        expect(machine.vend('A03', 0.65)).toBe("Vending Item Name")
    })
})
  