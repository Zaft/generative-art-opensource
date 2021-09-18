const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "This is an NF BEEs collection.";
const baseImageUri = "https://github.com/Zaft/zaft.github.io";
const startEditionFrom = 1;
const endEditionAt = 10;
const editionSize = 10;
const raceWeights = [
  {
    value: "NFBEES",
    from: 1,
    to: editionSize,
  },
];

const races = {
  FunnyFace: {
    name: "NFBEES",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Blue",
            path: `${dir}/1-background/Blue.png`,
            weight: 10,
          },
          {
            id: 1,
            name: "Brown",
            path: `${dir}/1-background/Brown.png`,
            weight: 10,
          },
          {
            id: 2,
            name: "Green",
            path: `${dir}/1-background/Green.png`,
            weight: 10,
          },
          {
            id: 3,
            name: "Grey",
            path: `${dir}/1-background/Grey.png`,
            weight: 15,
          },
          {
            id: 4,
            name: "Orange",
            path: `${dir}/1-background/Orange.png`,
            weight: 15,
          },
          {
            id: 5,
            name: "Light Green",
            path: `${dir}/1-background/Light Green.png`,
            weight: 15,
          },
          {
            id: 6,
            name: "Yellow",
            path: `${dir}/1-background/Yellow.png`,
            weight: 15,
          },
          {
            id: 7,
            name: "Snowman",
            path: `${dir}/1-background/Snowman.png`,
            weight: 5,
          },
          {
            id: 8,
            name: "Halloween",
            path: `${dir}/1-background/Halloween.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Wings",
        elements: [
          {
            id: 0,
            name: "Wings",
            path: `${dir}/2-wings/Wings.png`,
            weight: 40,
          },
          {
            id: 1,
            name: "Bat Wings",
            path: `${dir}/2-wings/BatWings.png`,
            weight: 40,
          },
          {
            id: 2,
            name: "Devil Wings",
            path: `${dir}/2-wings/DevilWings.png`,
            weight: 5,
          },
          {
            id: 3,
            name: "Angel Wings",
            path: `${dir}/2-wings/AngelWings.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Body",
        elements: [
          {
            id: 0,
            name: "Blue",
            path: `${dir}/3-body/BeeBodyBlue.png`,
            weight: 10,
          },
          {
            id: 1,
            name: "Green",
            path: `${dir}/3-body/BeeBodyGreen.png`,
            weight: 10,
          },
          {
            id: 2,
            name: "Orange",
            path: `${dir}/3-body/BeeBodyOrange.png`,
            weight: 10,
          },
          {
            id: 3,
            name: "Red",
            path: `${dir}/3-body/BeeBodyRed.png`,
            weight: 10,
          },
          {
            id: 4,
            name: "White",
            path: `${dir}/3-body/BeeBodyWhite.png`,
            weight: 5,
          },
          {
            id: 5,
            name: "Yellow",
            path: `${dir}/3-body/BeeBodyYellow.png`,
            weight: 8,
          },
          {
            id: 6,
            name: "Penguin",
            path: `${dir}/3-body/Penguin.png`,
            weight: 22,
          },
          {
            id: 7,
            name: "Bone Body",
            path: `${dir}/3-body/BoneBody.png`,
            weight: 18,
          },
          {
            id: 8,
            name: "Pez Blue",
            path: `${dir}/3-body/PezBlue.png`,
            weight: 14,
          },
          {
            id: 9,
            name: "Pez Red",
            path: `${dir}/3-body/PezRed.png`,
            weight: 10,
          },
          {
            id: 10,
            name: "Pumpkin",
            path: `${dir}/3-body/Pumpkin.png`,
            weight: 6,
          },
          {
            id: 11,
            name: "Scarecrow",
            path: `${dir}/3-body/Scarecrow.png`,
            weight: 4,
          },
          {
            id: 12,
            name: "Zombie",
            path: `${dir}/3-body/Zombie.png`,
            weight: 2,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Collar",
        elements: [
          {
            id: 0,
            name: "Blue Tie",
            path: `${dir}/4-collar/BlueTie.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Blue Collar",
            path: `${dir}/4-collar/CollarBlue.png`,
            weight: 90,
          },
          {
            id: 2,
            name: "Green",
            path: `${dir}/4-collar/CollarGreen.png`,
            weight: 90,
          },
          {
            id: 3,
            name: "Grey Collar",
            path: `${dir}/4-collar/CollarGrey.png`,
            weight: 35,
          },
          {
            id: 4,
            name: "Orange Collar",
            path: `${dir}/4-collar/CollarOrange.png`,
            weight: 15,
          },
          {
            id: 5,
            name: "Red Collar",
            path: `${dir}/4-collar/CollarRed.png`,
            weight: 5,
          },
          {
            id: 6,
            name: "Yellow Collar",
            path: `${dir}/4-collar/CollarYellow.png`,
            weight: 5,
          },
          {
            id: 7,
            name: "Green Tie",
            path: `${dir}/4-collar/GreenTie.png`,
            weight: 5,
          },
          {
            id: 8,
            name: "",
            path: `${dir}/4-collar/NeonCollar.png`,
            weight: 5,
          },
          {
            id: 9,
            name: "Red Tie",
            path: `${dir}/4-collar/RedTie.png`,
            weight: 5,
          },
          {
            id: 10,
            name: "Blue Space Collar",
            path: `${dir}/4-collar/SpaceCollarBlue.png`,
            weight: 5,
          },
          {
            id: 11,
            name: "Green Space Collar",
            path: `${dir}/4-collar/SpaceCollarGreen.png`,
            weight: 5,
          },
          {
            id: 12,
            name: "Red Space Collar",
            path: `${dir}/4-collar/SpaceCollarRed.png`,
            weight: 5,
          },
          {
            id: 13,
            name: "Yellow Space Collar",
            path: `${dir}/4-collar/SpaceCollarYellow.png`,
            weight: 5,
          },
          {
            id: 14,
            name: "Blue Tie Collar",
            path: `${dir}/4-collar/TieCollarBlue.png`,
            weight: 5,
          },
          {
            id: 15,
            name: "Green Tie Collar",
            path: `${dir}/4-collar/TieCollarGreen.png`,
            weight: 5,
          },
          {
            id: 16,
            name: "Orange Tie Collar",
            path: `${dir}/4-collar/TieCollarOrange.png`,
            weight: 5,
          },
          {
            id: 17,
            name: "Red Tie Collar",
            path: `${dir}/4-collar/TieCollarRed.png`,
            weight: 5,
          },
          {
            id: 18,
            name: "White Tie",
            path: `${dir}/4-collar/WhiteTie.png`,
            weight: 5,
          },
          {
            id: 19,
            name: "Yellow Tie",
            path: `${dir}/4-collar/YellowTie.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Skin",
        elements: [
          {
            id: 0,
            name: "Red",
            path: `${dir}/RedSkin.png`,
            weight: 1,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/OrangeSkin.png`,
            weight: 1,
          },
          {
            id: 2,
            name: "Blue",
            path: `${dir}/BlueSkin.png`,
            weight: 1,
          },
          {
            id: 3,
            name: "Brown",
            path: `${dir}/BrownSkin.png`,
            weight: 1,
          },
          {
            id: 4,
            name: "Grey",
            path: `${dir}/.png`,
            weight: 1,
          },
          {
            id: 5,
            name: "Alien",
            path: `${dir}/AlienSkin.png`,
            weight: 1,
          },
          {
            id: 6,
            name: "Frozen",
            path: `${dir}/Frozen.png`,
            weight: 1,
          },
          {
            id: 7,
            name: "Green Gradient",
            path: `${dir}/GreenGradient.png`,
            weight: 1,
          },
          {
            id: 8,
            name: "Heat",
            path: `${dir}/Heat.png`,
            weight: 1,
          },
          {
            id: 9,
            name: "Zombie",
            path: `${dir}/ZombieSkin.png`,
            weight: 1,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Face Tatts",
        elements: [
          {
            id: 0,
            name: "",
            path: `${dir}/.png`,
            weight: 1,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Nose",
        elements: [
          {
            id: 0,
            name: "",
            path: `${dir}/.png`,
            weight: 1,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyes",
        elements: [
          {
            id: 0,
            name: "",
            path: `${dir}/.png`,
            weight: 1,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Outline",
        elements: [
          {
            id: 0,
            name: "",
            path: `${dir}/.png`,
            weight: 1,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mouth",
        elements: [
          {
            id: 0,
            name: "",
            path: `${dir}/.png`,
            weight: 1,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Glasses",
        elements: [
          {
            id: 0,
            name: "",
            path: `${dir}/.png`,
            weight: 1,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Hats",
        elements: [
          {
            id: 0,
            name: "",
            path: `${dir}/.png`,
            weight: 1,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
