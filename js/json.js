const shop = {
    owner:  'sandip',
    address: {
        street: 'sector5 , road8',
        building: 'RK Tower',
        shopNo: '4th floor, shop no- 25',
        city: 'Uttara', 
    },
    products: ['GPU', 'monitor', 'laptop', 'keyboard', 'RAM', 'SSD'],
    revenue: 405000,
    isOpen: true,
    isNew: false
};

// console.log(shop);
const shopJSON = JSON.stringify(shop)
console.log(shopJSON);

const shopString = JSON.parse(shopJSON)
console.log(shopString); 