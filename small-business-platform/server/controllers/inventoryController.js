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
    },
    {
        id: 2,
        name: "Good Book",
        price: 12.99,
        quantity: 10,
        available: true,
        sale: false,
        salePrice: null,
        description: "A good book. Trust us, it really is good. It is so good that you will prefer to read this book rather than watch cat videos on your phone.",
        imageURL: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        categories: {
            cat1: "Household Items",
            cat2: ""
        }
    },
    {
        id: 3,
        name: "Egg Sandwich",
        price: 5.99,
        quantity: 5,
        available: true,
        sale: true,
        salePrice: 1.99,
        description: "Come get a delicious egg sandwich while they last. Believe us, they won't last long, our deli is already starting to develop an odor. The sandwich still looks fine though so it must be ok to eat, right?",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Egg_Sandwich.jpg",
        categories: {
            cat1: "Food",
            cat2: ""
        }
    },
    {
        id: 4,
        name: "Blueberry and Banana, Goat's Milk Smoothie",
        price: 7.99,
        quantity: 10,
        available: true,
        sale: false,
        salePrice: null,
        description: "The best, award winning smoothies made from only the finest ingredients. We also added a miniscule amount of organic hemp seeds and sprouted wheat grass so that you can't taste it but can still brag to your friends about how healthy your diet is.",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/92/Blueberry_and_Banana_Milk_Smoothie.png",
        categories: {
            cat1: "Drink",
            cat2: "Food"
        }
    },
    {
        id: 5,
        name: "Vertigo 5000ecg Ultra Elliptical",
        price: 2999.99,
        quantity: 2,
        available: true,
        sale: false,
        salePrice: null,
        description: "The best elliptical machine that money can buy. You know that you won't use it more than a handful of times, but it also works great as a drying rack for those fancy exercise clothes of yours that can't go in the dryer which you wear grocery shopping since you don't actually exercise.",
        imageURL: "https://i.pinimg.com/564x/0e/27/46/0e27469a432650353f3879aaf4c94d5b.jpg",
        categories: {
            cat1: "Furniture",
            cat2: "Electronics"
        }
    },
    {
        id: 6,
        name: "Camping Television 1321c",
        price: 109.99,
        quantity: 8,
        available: true,
        sale: false,
        salePrice: null,
        description: "Do you hate the outdoors, but your family loves it? Well, suffer in secret no longer! Just bring this baby along for the ride (don't forget your rabbit ears!) and forget that you even left the house while viewing this exquisite 13 inch screen in full color!",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Mini_Star_416-8834.jpg/220px-Mini_Star_416-8834.jpg",
        categories: {
            cat1: "Electronics",
            cat2: "Outdoors"
        }
    },
    {
        id: 7,
        name: "Antique Senate Sofa",
        price: 8980.98,
        quantity: 1,
        available: true,
        sale: false,
        salePrice: null,
        description: "Are you trying to build up the motivation to start a new exercise program but you can't seem to get up off the couch? If so, this is the sofa for you! Built over 90 years ago this sofa is so valuable, yet fragile, you won't ever want to sit on it for fear of decreasing its resale value",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/59/VshSenateSofa.JPG",
        categories: {
            cat1: "Furniture",
            cat2: ""
        }
    },
    {
        id: 8,
        name: "Roman Dodecahedron",
        price: 49.99,
        quantity: 3,
        available: true,
        sale: false,
        salePrice: null,
        description: "You're not sure what this is? Well don't worry, we don't know either.",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pentagon-dodeca%C3%ABder_in_brons%2C_150_tot_400_NC%2C_vindplaats-_Tongeren%2C_Leopoldwal%2C_1939%2C_collectie_Gallo-Romeins_Museum_Tongeren%2C_4002.jpg/257px-Pentagon-dodeca%C3%ABder_in_brons%2C_150_tot_400_NC%2C_vindplaats-_Tongeren%2C_Leopoldwal%2C_1939%2C_collectie_Gallo-Romeins_Museum_Tongeren%2C_4002.jpg",
        categories: {
            cat1: "Tools",
            cat2: ""
        }
    },
    {
        id: 9,
        name: "Brilliant White Duvet (without cover)",
        price: 199.99,
        quantity: 200,
        available: true,
        sale: false,
        salePrice: null,
        description: "Have you ever had a desire to have bed coverings as brilliantly white as those from a hotel?  Well, look no further because this duvet is the whitest you will ever see. Don't worry about your kids staining it right after coming in from playing in the rain, as we have plenty in stock and you can always buy another!",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/White-duvet.jpg/220px-White-duvet.jpg",
        categories: {
            cat1: "Bedroom",
            cat2: ""
        }
    },
    {
        id: 10,
        name: "Alienware UFO",
        price: 899.99,
        quantity: 20,
        available: true,
        sale: false,
        salePrice: null,
        description: "Do you want to play the most graphically intense, high resolution video games on the go, and you don't care if your device only has 30 minutes of battery life? if so, this Alienware UFO image is for you! Get it now for our ultra low price and you can own an Alienware UFO image today (box contains image only, no console included).",
        imageURL: "https://cdn.mos.cms.futurecdn.net/AGPeuNwMsoaD46a6i2NSPJ.jpeg",
        categories: {
            cat1: "Electronics",
            cat2: "Household Items"
        }
    }
];

let id = 11;

module.exports = {
    getItems: (req,res)=>{
        let {search} = req.query;
        let filtInventory = inventory.filter(e=>{
            const name = e.name.toLowerCase();
            const cat1 = e.categories.cat1.toLowerCase();
            const cat2 = e.categories.cat2.toLowerCase();
            if (search===undefined){
                return true
            } else{
                search = search.toLowerCase();
                if (name.includes(search) || cat1.includes(search) || cat2.includes(search)){
                    return true
                }
            } 
        })
        res.status(200).send(filtInventory)
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
        const {id} = req.params;
        inventory = inventory.filter(e=>e.id!== +id)
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
    },
    // getSearch: (req,res)=>{
    //     console.log(req.query.name)
    //     let {name} = req.query;
    //     inventory = inventory.filter(e=>e.name.includes(name))
    //     res.status(200).send(inventory)
    // }
}