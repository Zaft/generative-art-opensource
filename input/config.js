const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "This is an NFT test collection.";
const baseImageUri = "https://github.com/Zaft/zaft.github.io";
const startEditionFrom = 1;
const endEditionAt = 10;
const editionSize = 10;
const raceWeights = [
  {
    value: "FunnyFace",
    from: 1,
    to: editionSize,
  },
];

const races = {
  FunnyFace: {
    name: "FunnyFace",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "",
            path: `${dir}/1-background/black.png`,
            weight: 20,
          },
          {
            id: 1,
            name: "blue",
            path: `${dir}/1-background/blue.png`,
            weight: 20,
          },
          {
            id: 2,
            name: "green",
            path: `${dir}/1-background/green.png`,
            weight: 20,
          },
          {
            id: 3,
            name: "peach",
            path: `${dir}/1-background/peach.png`,
            weight: 20,
          },
          {
            id: 4,
            name: "red",
            path: `${dir}/1-background/red.png`,
            weight: 20,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Face",
        elements: [
          {
            id: 0,
            name: "Regular",
            path: `${dir}/2-face/face_white.png`,
            weight: 100,
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
            name: "black",
            path: `${dir}/3-glasses/black.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "star yellow",
            path: `${dir}/3-glasses/star_yellow.png`,
            weight: 65,
          },
          {
            id: 2,
            name: "star orange",
            path: `${dir}/3-glasses/star_orange.png`,
            weight: 45,
          },
          {
            id: 3,
            name: "star green",
            path: `${dir}/3-glasses/star_green.png`,
            weight: 25,
          },
          {
            id: 4,
            name: "pineapple",
            path: `${dir}/3-glasses/pineapple.png`,
            weight: 5,
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
            name: "Black",
            path: `${dir}/4-hats/black.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Brown",
            path: `${dir}/4-hats/brown.png`,
            weight: 90,
          },
          {
            id: 2,
            name: "Green",
            path: `${dir}/4-hats/green.png`,
            weight: 90,
          },
          {
            id: 3,
            name: "Santa Red",
            path: `${dir}/4-hats/santa_red.png`,
            weight: 35,
          },
          {
            id: 4,
            name: "Santa Green",
            path: `${dir}/4-hats/santa_green.png`,
            weight: 15,
          },
          {
            id: 5,
            name: "Santa Purple",
            path: `${dir}/4-hats/santa_purple.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      // {
      //   name: "Race",
      //   elements: [
      //     {
      //       id: 0,
      //       name: "Skull",
      //       path: `${dir}/5-skin/Skull.png`,
      //       weight: 100,
      //     },
      //   ],
      //   position: { x: 0, y: 0 },
      //   size: { width: width, height: height },
      // },
      {
        name: "Mouth",
        elements: [
          {
            id: 0,
            name: "Buck Teeth",
            path: `${dir}/5-mouth/buck_teeth.png`,
            weight: 40,
          },
          {
            id: 1,
            name: "Sharp Teeth",
            path: `${dir}/5-mouth/sharp_teeth.png`,
            weight: 30,
          },
          {
            id: 2,
            name: "Tongue",
            path: `${dir}/5-mouth/tongue.png`,
            weight: 30,
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
