const cubes = [];

exports.getAll = (search,from,to) => {
    let result = cubes.slice();

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

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.createCube = (cubeData) => {
    const newCube = {
        id: (new Date()).getTime(),
        ...cubeData
    }

    cubes.push(newCube);
    return newCube;
}