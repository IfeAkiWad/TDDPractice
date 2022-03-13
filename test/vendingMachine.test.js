const VendingMachine = require('../components/VendingMachine')

describe('test', () => {
    const items = [{ name: 'Smarties', code: 'A01', quantity: 10, price: 0.6 },
    { name: 'Caramac Bar', code: 'A02', quantity: 5, price: 0.6 },
    { name: 'Dairy Milk', code: 'A03', quantity: 1, price: 0.65 },
    { name: 'Freddo', code: 'A04', quantity: 0, price: 0.25 },
    { name: 'Crunchie', code: 'A05', quantity: 10, price: 0.7 },
    { name: 'Starbar', code: 'A06', quantity: 1, price: 0.99 },
    { name: 'Snickers', code: 'A07', quantity: 7, price: 0.89 },
    { name: 'Yorkie', code: 'A08', quantity: 20, price: 0.87 },
    { name: 'Toblerone', code: 'A09', quantity: 1, price: 1.99 },
    { name: 'Flake', code: 'A10', quantity: 10, price: 0.27 },
    { name: 'Ready Salted Crisps',
      code: 'B01',
      quantity: 7,
      price: 0.55 },
    { name: 'Sweet Chilli Crisps',
      code: 'B02',
      quantity: 12,
      price: 1.2 },
    { name: 'Smoky Barbecue Crisps',
      code: 'B03',
      quantity: 10,
      price: 0.65 },
    { name: 'Salt and Vinegar Crisps',
      code: 'B04',
      quantity: 5,
      price: 0.6 },
    { name: 'Roast Chicken Crisps',
      code: 'B05',
      quantity: 10,
      price: 0.59 },
    { name: 'Cheese and Onion Crisps',
      code: 'B06',
      quantity: 0,
      price: 0.67 },
    { name: 'Prawn Cocktail Crisps',
      code: 'B07',
      quantity: 10,
      price: 0.77 },
    { name: 'Thai Sweet Chicken Crisps',
      code: 'B08',
      quantity: 10,
      price: 0.88 },
    { name: 'Flamed Steak Crisps',
      code: 'B09',
      quantity: 10,
      price: 0.43 },
    { name: 'Coke', code: 'C02', quantity: 50, price: 0.75 },
    { name: 'Diet Coke', code: 'C03', quantity: 50, price: 0.75 },
    { name: 'Coke Zero', code: 'C04', quantity: 0, price: 0.75 },
    { name: 'Dandelion and Burdock',
      code: 'C05',
      quantity: 10,
      price: 0.68 },
    { name: 'Cream Soda', code: 'C06', quantity: 5, price: 0.69 },
    { name: 'Irn Bru', code: 'C07', quantity: 3, price: 0.79 },
    { name: 'Cherry Coke', code: 'C08', quantity: 1, price: 0.75 },
    { name: 'Orange Soda', code: 'C09', quantity: 10, price: 0.79 },
    { name: 'Parma Violets', code: 'D01', quantity: 10, price: 1.27 },
    { name: 'Refresher Chews',
      code: 'D02',
      quantity: 10,
      price: 4.27 },
    { name: 'Mini Love Hearts',
      code: 'D03',
      quantity: 10,
      price: 2.02 },
    { name: 'Popping Candy', code: 'D04', quantity: 10, price: 1.01 },
    { name: 'Drumstick Lollies',
      code: 'D05',
      quantity: 10,
      price: 5.12 },
    { name: 'Double Candy Lollies',
      code: 'D06',
      quantity: 10,
      price: 10 },
    { name: 'Wham Bars', code: 'D07', quantity: 10, price: 50 },
    { name: 'Double Dip', code: 'D08', quantity: 10, price: 1.04 },
    { name: 'Candy Sticks', code: 'D09', quantity: 10, price: 2.14 },
    { name: 'Jelly Cubes', code: 'D10', quantity: 10, price: 1.18 }];

    

    const machine = new VendingMachine(items, 10.00)

    test('If the money given to the machine is less than the item cost return "Not enough money!"', () => { 
        expect(machine.vend('A04', 0.10)).toBe("Not enough money!")
    })

    test('If the quantity is 0 for an item return "Item Name: Out of stock!"', () => {
        expect(machine.vend('A04', 0.25)).toBe("Freddo: Out of stock!")
    })  

    test('If an item is correctly selected return "Vending Item Name with 0.4 change"', () => {
        expect(machine.vend('A02', 1)).toBe("Vending Caramac Bar with 0.4 change")
    })

    test('If an item is correctly selected and there is no change needed then return "Vending Item Name"', () => {
        expect(machine.vend('A03', 0.65)).toBe("Vending Dairy Milk")
    })

    test('If an invalid item is selected return "Invalid selection! : Money in vending machine = 11.20"', () => {
        const invalidItem = !items
        expect(machine.vend(invalidItem, invalidItem)).toBe("Invalid selection! : Money in vending machine = 10.00")
    })
    
})
  