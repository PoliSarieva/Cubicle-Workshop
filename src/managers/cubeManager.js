const Cube = require('../models/Cube');

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
exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories');

exports.create = async (cubeData) => {
    const cube = new Cube(cubeData);

    await cube.save();

    return cube;
}

exports.update = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData);

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.attachAccessory = ( cubeId, accessoryId ) => {
  return  Cube.findByIdAndUpdate(cubeId, {$push: {accessories: accessoryId}});
};

