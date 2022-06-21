export const locations = [
    {
        name: "brimstone mine",
        cords: {
            x: 1,
            y: 1
        },
        text: "You are inside a brimstone mine",
        movement: ['e'],
        img: "11.gif",
        bgc: "rgb(235,211,64)",
        itemID: null,
        itemCrafting: [{ from: 24, to: 25, text: "You are digging... (timeout) and digging... (timeout) That's enought sulphur for you", toHand: true }]
    },
    {
        name: "entrance to the mine",
        cords: {
            x: 2,
            y: 1
        },
        text: "You are at the entrance to the mine",
        movement: ['e', 'w'],
        img: "12.gif",
        bgc: "rgb(89,93,87)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "A hill",
        cords: {
            x: 3,
            y: 1
        },
        text: "A hill",
        movement: ['e', 'w', 's'],
        img: "13.gif",
        bgc: "rgb(117,237,243)",
        itemID: 31,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Some bushes",
        cords: {
            x: 4,
            y: 1
        },
        text: "Some bushes",
        movement: ['e', 'w'],
        img: "14.gif",
        bgc: "rgb(202,230,51)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "An old deserted hut",
        cords: {
            x: 5,
            y: 1
        },
        text: "An old deseted hut",
        movement: ['e', 'w'],
        img: "15.gif",
        bgc: "rgb(220,204,61)",
        itemID: 27,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "The edge of the forest",
        cords: {
            x: 6,
            y: 1
        },
        text: "The edge of the forest",
        movement: ['e', 'w'],
        img: "16.gif",
        bgc: "rgb(167,245,63)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "A dark forest",
        cords: {
            x: 7,
            y: 1
        },
        text: "A dark forest",
        movement: ['w', 's'],
        img: "17.gif",
        bgc: "rgb(140,253,99)",
        itemID: 14,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "A man nearby making tar",
        cords: {
            x: 1,
            y: 2
        },
        text: "A man nearby making tar",
        movement: ['e', 's'],
        img: "21.gif",
        bgc: "rgb(255,190,99)",
        itemID: null,
        itemCrafting: [{ from: 27, to: 21, text: "You got a bucket full of tar", toHand: true }]
    },
    {
        name: "A timber yard",
        cords: {
            x: 2,
            y: 2
        },
        text: "A timber yard",
        movement: ['e', 's', 'w'],
        img: "22.gif",
        bgc: "rgb(255,190,99)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Roadside shrine",
        cords: {
            x: 3,
            y: 2
        },
        text: "You are nearby a roadside shrine",
        movement: ['e', 's', 'w', 'n'],
        img: "23.gif",
        bgc: "rgb(167,245,63)",
        itemID: 10,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Small chapel",
        cords: {
            x: 4,
            y: 2
        },
        text: "You are by a small chapel",
        movement: ['e', 'w'],
        img: "24.gif",
        bgc: "rgb(212,229,36)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Road leading to a wood",
        cords: {
            x: 5,
            y: 2
        },
        text: "You are on a road leading to a wood",
        movement: ['e', 'w', 's'],
        img: "25.gif",
        bgc: "rgb(167,245,63)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Forest",
        cords: {
            x: 6,
            y: 2
        },
        text: "You are in a forest",
        movement: ['e', 'w'],
        img: "26.gif",
        bgc: "rgb(167,245,63)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Deep forest",
        cords: {
            x: 7,
            y: 2
        },
        text: "You are in a deep forest",
        movement: ['w', 'n'],
        img: "27.gif",
        bgc: "rgb(140,253,99)",
        itemID: 18,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Vistula River",
        cords: {
            x: 1,
            y: 3
        },
        text: "You are by the Vistula River",
        movement: ['e', 'n'],
        img: "31.gif",
        bgc: "rgb(122,232,252)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Vistula River",
        cords: {
            x: 2,
            y: 3
        },
        text: "You are by the Vistula River",
        movement: ['w', 'n'],
        img: "32.gif",
        bgc: "rgb(140,214,255)",
        itemID: 32,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Bridge",
        cords: {
            x: 3,
            y: 3
        },
        text: "You are on the bridge over river",
        movement: ['s', 'n'],
        img: "33.gif",
        bgc: "rgb(108,181,242)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Old tavern",
        cords: {
            x: 4,
            y: 3
        },
        text: "You are by the old tavern",
        movement: ['e'],
        img: "34.gif",
        bgc: "rgb(255,189,117)",
        itemID: null,
        itemCrafting: [{ from: 14, to: 15, text: "The tavern owner paid you money", toHand: true }]
    },
    {
        name: "Town's end",
        cords: {
            x: 5,
            y: 3
        },
        text: "You are at the town's end",
        movement: ['e', 'n', 's'],
        img: "35.gif",
        bgc: "rgb(255,190,99)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Butcher's shop",
        cords: {
            x: 6,
            y: 3
        },
        text: "You are in a butcher's shop",
        movement: ['s'],
        img: "36.gif",
        bgc: "rgb(255,188,102)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Cooper's house",
        cords: {
            x: 7,
            y: 3
        },
        text: "You are in a cooper's house",
        movement: ['s'],
        img: "37.gif",
        bgc: "rgb(255,188,102)",
        itemID: null,
        itemCrafting: [{ from: 15, to: 16, text: "The cooper sold you a new barrel", toHand: true }]
    },
    {
        name: "Wawel Casle",
        cords: {
            x: 1,
            y: 4
        },
        text: "You are in the Wawel Castle",
        movement: ['e'],
        img: "41.gif",
        bgc: "rgb(255,176,141)",
        itemID: null,
        itemCrafting: [{ from: 35, to: 36, text: "The King is impressed by your shoes", toHand: true }]
    },
    {
        name: "Dragon's cave",
        cords: {
            x: 2,
            y: 4
        },
        text: "You are inside dragon's cave",
        movement: ['e', '!w'],
        img: "42.gif",
        bgc: "rgb(198,205,193)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Trap place",
        cords: {
            x: 3,
            y: 4
        },
        text: "A perfect place to set a trap",
        movement: ['n', 'w'],
        img: "43.gif",
        bgc: "rgb(255,176,141)",
        itemID: null,
        itemCrafting: [
            { from: 12, to: 13, text: "You prepared legs for your fake sheep, OK", toHand: false },
            { from: 16, to: 17, text: "You made a nice sheeptrunk, OK", toHand: false },
            { from: 19, to: 20, text: "You prepared skin for your fake sheep, OK", toHand: false },
            { from: 22, to: 23, text: "You made a fake sheephead, OK", toHand: false },
            { from: 25, to: 26, text: "You prepared a solid poison, OK", toHand: false },
            { from: 28, to: 29, text: "You prepared a liquid poison, OK", toHand: false },
            { from: 37, to: 30, text: "Dragon noticed your gift... (timeout) The dragon ate your sheep and died!", toHand: false, extra: "" }, //TODO: podmieni na zdjecie smoka
            { from: 33, to: 34, text: "You cut a piece of dragon's skin", toHand: true, dragonKilled: true }, //TODO: sprawdzić, czy smok jest zabity
        ]
    },
    {
        name: "Water mill",
        cords: {
            x: 4,
            y: 4
        },
        text: "You are by the water mill",
        movement: ['e'],
        img: "44.gif",
        bgc: "rgb(255,190,99)",
        itemID: 21,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Main crossroad",
        cords: {
            x: 5,
            y: 4
        },
        text: "You are at a main crossroad",
        movement: ['e', 'w', 'n', 's'],
        img: "45.gif",
        bgc: "rgb(255,190,99)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Town street",
        cords: {
            x: 6,
            y: 4
        },
        text: "You are on a town street",
        movement: ['e', 'w', 'n'],
        img: "46.gif",
        bgc: "rgb(255,190,99)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Frontyard of your house",
        cords: {
            x: 7,
            y: 4
        },
        text: "You are in frontyard of your house",
        movement: ['w', 'n', 's'],
        img: "47.gif",
        bgc: "rgb(255,190,99)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Swift stream",
        cords: {
            x: 4,
            y: 5
        },
        text: "You are by swift stream",
        movement: ['e'],
        img: "54.gif",
        bgc: "rgb(108,181,242)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Street leading forest",
        cords: {
            x: 5,
            y: 5
        },
        text: "You are on a street leading forest",
        movement: ['w', 'n', 's'],
        img: "55.gif",
        bgc: "rgb(255,190,99)",
        itemID: 33,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Woodcutter's backyard",
        cords: {
            x: 6,
            y: 5
        },
        text: "You are in a woodcutter's backyard",
        movement: ['s'],
        img: "56.gif",
        bgc: "rgb(255,190,99)",
        itemID: null,
        itemCrafting: [{ from: 10, to: 11, text: "You opened a tool shed and took an axe", toHand: true }]
    },
    {
        name: "Shoemaker's house",
        cords: {
            x: 7,
            y: 5
        },
        text: "You are in a shoemaker's house",
        movement: ['n'],
        img: "57.gif",
        bgc: "rgb(254,194,97)",
        itemID: null,
        itemCrafting: [
            { from: 21, to: 22, text: "You used your tools to make a rag", toHand: true },
            { from: 34, to: 35, text: "You used your tools to make shoes", toHand: true },
        ]
    },
    {
        name: "Bleak funeral house",
        cords: {
            x: 4,
            y: 6
        },
        text: "You are in a bleak funeral house",
        movement: ['e'],
        img: "64.gif",
        bgc: "rgb(254,194,97)",
        itemID: 24,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Path leading to the wood",
        cords: {
            x: 5,
            y: 6
        },
        text: "You are on a path leading to the wood",
        movement: ['e', 'w', 'n'],
        img: "65.gif",
        bgc: "rgb(167,245,63)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "The edge of the forest",
        cords: {
            x: 6,
            y: 6
        },
        text: "You are at the edge of the forest",
        movement: ['e', 'w', 'n'],
        img: "66.gif",
        bgc: "rgb(167,245,63)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
    {
        name: "Deep forest",
        cords: {
            x: 7,
            y: 6
        },
        text: "You are in a deep forest",
        movement: ['w'],
        img: "67.gif",
        bgc: "rgb(140,253,99)",
        itemID: null,
        itemCrafting: [{ from: null, to: null, text: null, toHand: false }]
    },
]