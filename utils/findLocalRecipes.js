function findLocalRecipes() {
    return Recipe.find({ owner: { $exists: true } }).populate('owner');
}

module.exports = findLocalRecipes;