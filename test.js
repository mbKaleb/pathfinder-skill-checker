
const characterObj = {
    id: 1,
    name: 'Enter name...',
    level: 1,
    attributes:{
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    skills: {
        perception: {
            id: 0,
            name: "perception",
            mod: function() {
                return ([this.attributemod + this.proficiency + this.temporary])
            },
            attributeMod: function() {if(this.proficiency>0){return [this.proficiency + objectTarget.attributes.intelligence]}},
            proficiency: 0,
            temporary: 0,
            attribture: "wisdom",
        },
        acrobatics: {
            id: 1,
            name: "acrobatics",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: function() {if(this.proficiency>0){return [this.proficiency + objectTarget.attributes.intelligence]}},
            proficiency: 0,
            temporary: 0,
            attribute: "dexterity",
        },
        arcana: {
            id: 2,
            name: "arcana",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "intelligence",
        },
        athletics: {
            id: 3,
            name: "athletics",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "strength",
        },
        crafting: {
            id: 4,
            name: "crafting",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "intelligence",
        },
        deception: {
            id: 5,
            name: "deception",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "charisma",
        },
        diplomacy: {
            id: 6,
            name: "diplomacy",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "charisma",
        },
        intimidation: {
            id: 7,
            name: "intimidation",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "charisma",
        },
        medicine: {
            id: 8,
            name: "medicine",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "wisdom",
        },
        nature: {
            id: 9,
            name: "nature",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "wisdom",
        },
        occultism: {
            id: 10,
            name: "occultism",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "intelligence",
        },
        performance: {
            id: 11,
            name: "performance",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "charisma",
        },
        religion: {
            id: 12,
            name: "religion",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "wisdom",
        },
        society: {
            id: 13,
            name: "society",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "intelligence",
        },
        stealth: {
            id: 14,
            name: "stealth",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "dexterity",
        },
        survival: {
            id: 15,
            name: "survival",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "wisdom",
        },
        thievery: {
            id: 16,
            name: "thievery",
            mod: function() {
                return (this.attributemod + this.proficiency + this.temporary)
            },
            attributeMod: 0,
            proficiency: 0,
            temporary: 0,
            attribute: "dexterity",
        },
    },
};