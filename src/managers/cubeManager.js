const Cube = require('../models/Cube');

const cubes = [];

exports.getAll =async (search,from,to) => {
    let result =await Cube.find().lean();

    if (result == search) {
        result = result.filter(cube => cube.toLowerCase().includes(search.toLowerCase()))
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(from));
    }

    return result;
};

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.createCube = async (cubeData) => {
    const cube = new Cube(cubeData);

    await cube.save();

    return cube;
}