let inventory = [
    {
        id: 1,
        name: "Fuzzy Bear's toilet paper: 4 pack",
        price: 4.99,
        quantity: 50,
        available: true,
        sale: false,
        salePrice: null,
        description: "So soft it feels like you are wiping your rear end with the fuzzy backside of a baby bear. Just keep an eye out for those 'mamma bear' customers who want it for themselves!",
        imageURL: "https://media.istockphoto.com/photos/white-roll-toilet-paper-on-the-light-blue-background-picture-id901805432?k=6&m=901805432&s=612x612&w=0&h=pX3erJkw7H539co6KXpEbae1SdsZ-wn1Z1EEyREcfjE=",
        categories: {
            cat1: 'Bathroom',
            cat2: 'Household Items'
        }
    }
];

let id = 2;

module.exports = {
    getItems: (req,res)=>{
        res.status(200).send(inventory)
    },
    addItem: (req,res)=>{
        const {name,price,quantity,description,imageURL,categories} = req.body;
        const avail = quantity>0 ? true : false;
        const newItem = {
            id,
            name,
            price,
            quantity,
            available: avail,
            sale: false,
            salePrice: null,
            description,
            imageURL,
            categories
        }
        id++
        inventory.push(newItem)
        res.status(200).send(inventory)
    },
    deleteItem: (req,res)=>{
        const idx = +req.params.id;
        inventory = inventory.filter(e=>e.id!==idx)
        res.status(200).send(inventory)
    },
    editItem: (req,res)=>{
        let {quantity,salePrice} = req.body;
        let idx = +req.params.id;
        const avail = quantity>0 ? true : false;
        salePrice = salePrice>0 ? salePrice : null;
        const index = inventory.findIndex(e=>e.id===idx);
        inventory[index].available = avail;
        inventory[index].quantity = quantity;
        inventory[index].salePrice = salePrice;
        inventory[index].sale = salePrice===null ? false : inventory[index].price<salePrice ? false : true;
        res.status(200).send(inventory)
    }
}