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
            path: `${dir}/5-skin/RedSkin.png`,
            weight: 1,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/5-skin/OrangeSkin.png`,
            weight: 1,
          },
          {
            id: 2,
            name: "Blue",
            path: `${dir}/5-skin/BlueSkin.png`,
            weight: 1,
          },
          {
            id: 3,
            name: "Brown",
            path: `${dir}/5-skin/BrownSkin.png`,
            weight: 1,
          },
          {
            id: 4,
            name: "Grey",
            path: `${dir}/5-skin/GreySkin.png`,
            weight: 1,
          },
          {
            id: 5,
            name: "Alien",
            path: `${dir}/5-skin/AlienSkin.png`,
            weight: 1,
          },
          {
            id: 6,
            name: "Frozen",
            path: `${dir}/5-skin/Frozen.png`,
            weight: 1,
          },
          {
            id: 7,
            name: "Green Gradient",
            path: `${dir}/5-skin/GreenGradient.png`,
            weight: 1,
          },
          {
            id: 8,
            name: "Heat",
            path: `${dir}/5-skin/Heat.png`,
            weight: 1,
          },
          {
            id: 9,
            name: "Zombie",
            path: `${dir}/5-skin/ZombieSkin.png`,
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
            name: "Bandaid",
            path: `${dir}/6-face-tatts/Bandaid.png`,
            weight: 1,
          },
          {
            id: 1,
            name: "Cracks",
            path: `${dir}/6-face-tatts/Cracks.png`,
            weight: 1,
          },
          {
            id: 2,
            name: "Face Tats",
            path: `${dir}/6-face-tatts/FaceTats.png`,
            weight: 1,
          },
          {
            id: 3,
            name: "Stiches",
            path: `${dir}/6-face-tatts/Stiches.png`,
            weight: 1,
          },
          {
            id: 4,
            name: "Tribal",
            path: `${dir}/6-face-tatts/Tribal.png`,
            weight: 1,
          },
          {
            id: 5,
            name: "Unshaven",
            path: `${dir}/Unshaven.png`,
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
            name: "Carrot Nose",
            path: `${dir}/7-nose/CarrotNose.png`,
            weight: 1,
          },
          {
            id: 1,
            name: "Regular",
            path: `${dir}/7-nose/NoseHoles.png`,
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
            name: "Regular",
            path: `${dir}/8-eyes/BlackEyeRegular.png`,
            weight: 1,
          },
          {
            id: 1,
            name: "High Eyes Black",
            path: `${dir}/8-eyes/HighEyesBlack.png`,
            weight: 1,
          },
          {
            id: 2,
            name: "High Eyes Blue",
            path: `${dir}/8-eyes/HighEyesBlue.png`,
            weight: 1,
          },
          {
            id: 3,
            name: "High Eyes Green",
            path: `${dir}/8-eyes/HighEyesGreen.png`,
            weight: 1,
          },
          {
            id: 4,
            name: "High Eyes Orange",
            path: `${dir}/8-eyes/HighEyesOrange.png`,
            weight: 1,
          },
          {
            id: 5,
            name: "High Eyes Red",
            path: `${dir}/8-eyes/HighEyesRed.png`,
            weight: 1,
          },
          {
            id: 6,
            name: "Hypnotized",
            path: `${dir}/8-eyes/Hypnotized.png`,
            weight: 1,
          },
          {
            id: 7,
            name: "Mesh Blue",
            path: `${dir}/8-eyes/MeshEyesBlue.png`,
            weight: 1,
          },
          {
            id: 8,
            name: "Mesh Green",
            path: `${dir}/8-eyes/MeshEyesGreen.png`,
            weight: 1,
          },
          {
            id: 9,
            name: "Mesh Orange",
            path: `${dir}/8-eyes/MeshEyesOrange.png`,
            weight: 1,
          },
          {
            id: 10,
            name: "Mesh Red",
            path: `${dir}/8-eyes/MeshEyesRed.png`,
            weight: 1,
          },
          {
            id: 11,
            name: "Mesh White",
            path: `${dir}/8-eyes/MeshEyesWhite.png`,
            weight: 1,
          },
          {
            id: 12,
            name: "Money",
            path: `${dir}/8-eyes/MoneyEyes.png`,
            weight: 1,
          },
          {
            id: 13,
            name: "SOLANA",
            path: `${dir}/8-eyes/SOLANAEYES.png`,
            weight: 1,
          },
          {
            id: 14,
            name: "Star",
            path: `${dir}/8-eyes/StarEyes.png`,
            weight: 1,
          },
          {
            id: 15,
            name: "Staring Blue",
            path: `${dir}/8-eyes/StaringEyesBlue.png`,
            weight: 1,
          },
          {
            id: 16,
            name: "Staring Green",
            path: `${dir}/8-eyes/StaringEyesGreen.png`,
            weight: 1,
          },
          {
            id: 17,
            name: "Staring Orange",
            path: `${dir}/8-eyes/StaringEyesOrange.png`,
            weight: 1,
          },
          {
            id: 18,
            name: "Staring Red",
            path: `${dir}/8-eyes/StaringEyesRed.png`,
            weight: 1,
          },
          {
            id: 19,
            name: "Staring White",
            path: `${dir}/8-eyes/StaringEyesWhite.png`,
            weight: 1,
          },
          {
            id: 20,
            name: "X Blue",
            path: `${dir}/8-eyes/Xeyesblue.png`,
            weight: 1,
          },
          {
            id: 21,
            name: "X Green",
            path: `${dir}/8-eyes/Xeyesgreen.png`,
            weight: 1,
          },
          {
            id: 22,
            name: "X Grey",
            path: `${dir}/8-eyes/Xeyesgrey.png`,
            weight: 1,
          },
          {
            id: 23,
            name: "X Orange",
            path: `${dir}/8-eyes/Xeyesorange.png`,
            weight: 1,
          },
          {
            id: 24,
            name: "X Red",
            path: `${dir}/8-eyes/Xeyesred.png`,
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
            name: "Outline",
            path: `${dir}/Outline.png`,
            weight: 100,
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
            name: "Beak",
            path: `${dir}/10-mouth/Beak.png`,
            weight: 1,
          },
          {
            id: 1,
            name: "Stache",
            path: `${dir}/10-mouth/BeeStache.png`,
            weight: 1,
          },
          {
            id: 2,
            name: "Bored",
            path: `${dir}/10-mouth/Bored.png`,
            weight: 1,
          },
          {
            id: 3,
            name: "BubbleGum",
            path: `${dir}/10-mouth/BubbleGum.png`,
            weight: 1,
          },
          {
            id: 4,
            name: "BuckTeeth",
            path: `${dir}/10-mouth/BuckTeeth.png`,
            weight: 1,
          },
          {
            id: 5,
            name: "Fangs",
            path: `${dir}/10-mouth/Fangs.png`,
            weight: 1,
          },
          {
            id: 6,
            name: "Lipstick",
            path: `${dir}/10-mouth/Lipstick.png`,
            weight: 1,
          },
          {
            id: 7,
            name: "Sad",
            path: `${dir}/10-mouth/Sad.png`,
            weight: 1,
          },
          {
            id: 8,
            name: "Smile",
            path: `${dir}/10-mouth/Smile.png`,
            weight: 1,
          },
          {
            id: 9,
            name: "Smile Tongue",
            path: `${dir}/10-mouth/SmileTongue.png`,
            weight: 1,
          },
          {
            id: 10,
            name: "Smile Tongue Honey",
            path: `${dir}/10-mouth/SmileTongueHoney.png`,
            weight: 1,
          },
          {
            id: 11,
            name: "Smoking",
            path: `${dir}/10-mouth/Smoking.png`,
            weight: 11,
          },
          {
            id: 12,
            name: "Snowman",
            path: `${dir}/10-mouth/Snowman.png`,
            weight: 12,
          },
          {
            id: 13,
            name: "Surprised",
            path: `${dir}/10-mouth/Surprised.png`,
            weight: 13,
          },
          {
            id: 14,
            name: "Zipper",
            path: `${dir}/10-mouth/Zipper.png`,
            weight: 14,
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
            name: "Flat",
            path: `${dir}/11-glasses/FlatGlasses.png`,
            weight: 1,
          },
          {
            id: 1,
            name: "Monacle",
            path: `${dir}/11-glasses/Monacle.png`,
            weight: 1,
          },
          {
            id: 2,
            name: "Round",
            path: `${dir}/11-glasses/RoundGlasses.png`,
            weight: 1,
          },
          {
            id: 3,
            name: "Star",
            path: `${dir}/11-glasses/StarGlasses.png`,
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
            name: "Antenna",
            path: `${dir}/12-hats/Antenna.png`,
            weight: 1,
          },
          {
            id: 1,
            name: "Blue Ball Cap",
            path: `${dir}/12-hats/BallCapcopyBlue.png`,
            weight: 1,
          },
          {
            id: 2,
            name: "Yellow Ball Cap",
            path: `${dir}/12-hats/BallCapcopyYellow.png`,
            weight: 1,
          },
          {
            id: 3,
            name: "Green Ball Cap",
            path: `${dir}/12-hats/BallCapGreen.png`,
            weight: 1,
          },
          {
            id: 4,
            name: "Red Ball Cap",
            path: `${dir}/12-hats/BallCapRed.png`,
            weight: 1,
          },
          {
            id: 5,
            name: "Bunny Ears",
            path: `${dir}/12-hats/BunnyEars.png`,
            weight: 1,
          },
          {
            id: 6,
            name: "Brown Cowboy Hat",
            path: `${dir}/12-hats/CowboyHatBrown.png`,
            weight: 1,
          },
          {
            id: 7,
            name: "Grey Cowboy Hat",
            path: `${dir}/12-hats/CowboyHatGrey.png`,
            weight: 1,
          },
          {
            id: 8,
            name: "Purple Cowboy Hat",
            path: `${dir}/12-hats/CowboyHatpurple.png`,
            weight: 1,
          },
          {
            id: 9,
            name: "Crown",
            path: `${dir}/12-hats/Crown.png`,
            weight: 1,
          },
          {
            id: 10,
            name: "Devil Ears",
            path: `${dir}/12-hats/DevilEars.png`,
            weight: 1,
          },
          {
            id: 11,
            name: "Drill",
            path: `${dir}/12-hats/Drill.png`,
            weight: 1,
          },
          {
            id: 12,
            name: "Egghead",
            path: `${dir}/12-hats/Egghead.png`,
            weight: 1,
          },
          {
            id: 13,
            name: "Flower Antenna",
            path: `${dir}/12-hats/FlowerAntenna.png`,
            weight: 1,
          },
          {
            id: 14,
            name: "Blue Flower Antenna",
            path: `${dir}/12-hats/FlowerAntennaBlue.png`,
            weight: 1,
          },
          {
            id: 15,
            name: "Red Flower Antenna",
            path: `${dir}/12-hats/FlowerAntennaRed.png`,
            weight: 1,
          },
          {
            id: 16,
            name: "Halo",
            path: `${dir}/12-hats/Halo.png`,
            weight: 1,
          },
          {
            id: 17,
            name: "Honey Hat",
            path: `${dir}/12-hats/HoneyHat.png`,
            weight: 1,
          },
          {
            id: 18,
            name: "Matrix Antenna",
            path: `${dir}/12-hats/MatrixAntenna.png`,
            weight: 1,
          },
          {
            id: 19,
            name: "Blue Mowhawk",
            path: `${dir}/12-hats/Mowhawkblue.png`,
            weight: 1,
          },
          {
            id: 20,
            name: "Flame Mowhawk",
            path: `${dir}/12-hats/Mowhawkflame.png`,
            weight: 1,
          },
          {
            id: 21,
            name: "Gold Mowhawk",
            path: `${dir}/12-hats/Mowhawkgold.png`,
            weight: 1,
          },
          {
            id: 22,
            name: "Green Mowhawk",
            path: `${dir}/12-hats/Mowhawkgreen.png`,
            weight: 1,
          },
          {
            id: 23,
            name: "Rainbow Mowhawk",
            path: `${dir}/12-hats/Mowhawkrainbow.png`,
            weight: 1,
          },
          {
            id: 24,
            name: "Red Mowhawk",
            path: `${dir}/12-hats/Mowhawkred.png`,
            weight: 1,
          },
          {
            id: 25,
            name: "Silver Mowhawk",
            path: `${dir}/12-hats/Mowhawksilver.png`,
            weight: 1,
          },
          {
            id: 26,
            name: "Regular Antenna",
            path: `${dir}/12-hats/RegularAnetenna.png`,
            weight: 1,
          },
          {
            id: 27,
            name: "Space Helmet",
            path: `${dir}/12-hats/SpaceHelmet.png`,
            weight: 1,
          },
          {
            id: 28,
            name: "TopHat",
            path: `${dir}/12-hats/TopHat.png`,
            weight: 1,
          },
          {
            id: 29,
            name: "Unicorn",
            path: `${dir}/12-hats/Unicorn.png`,
            weight: 1,
          },
          {
            id: 29,
            name: "Xray",
            path: `${dir}/12-hats/Xray.png`,
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
