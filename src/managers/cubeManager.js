const cubes = [];

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.createCube = (cubeData) => {
    const newCube = {
        id: (new Date()).getTime(),
        ...cubeData
    }

    cubes.push(newCube);
    return newCube;
}