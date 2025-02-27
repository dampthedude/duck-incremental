addLayer("1", {
    name: "duck basics", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "d", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "yellow",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "ducks", // Name of prestige currency
    baseResource: "d points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [

    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "duck efficiency",
            description: "makes ducks actually do something by making 'd point' production double",
            cost: new Decimal(3),
        },
    },

})
