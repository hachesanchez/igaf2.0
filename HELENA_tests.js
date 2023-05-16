

//VISTA DE HBS RECIPE-SEARCH

<div class="container">
    <h1>Buscar recetas por ingredientes</h1>
    <form action="/recipes" method="GET">
        <div class="form-group">
            <label for="ingredientes">Ingrediente:</label>
            <input type="text" id="ingredientes" name="ingredientes" class="form-control" placeholder="Ingrese el ingrediente"> </input>
        </div>
        <button type="submit" class="btn btn-primary">Buscar</button>
    </form>
</div>



//ROUTES

router.get('/recipes/buscar', (req, res) => {
    res.render('recipes/recipe-search');
});

router.get('/recipes', (req, res, next) => {
    const { ingredientes } = req.query;

    if (ingredientes) {
        recipeApiHandler
            .searchByIngredient(ingredientes)
            .then(response => {
                res.render('recipes/recipes-list', { recipes: response.data });
            })
            .catch(err => next(err));
    } else {
        recipeApiHandler
            .getAllRecipes()
            .then(response => {
                res.render('recipes/recipes-list', { recipes: response.data.results });
            })
            .catch(err => next(err));
    }
});




//TESTEO

router.get('/recipes', (req, res, next) => {
    // res.send("HOAISDOAKSODAOSDKOASKD")
    recipeApiHandler
        .getAllRecipes()
        .then(response => {
            // console.log(response.data.results)
            res.render('recipes/recipes-list', { recipes: response.data.results })
        })
        .catch(err => next(err))
});



//RECIPE-LIST

< div class="container" >
    <h1>Recetas super chulis</h1>

    <div class="row">
        <div class="col-md-12">
            <form action="/recipes/buscar" method="GET">
                <div class="form-row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="ingredientes">Buscar por ingredientes:</label>
                            <input type="text" id="ingredientes" name="ingredientes" class="form-control" placeholder="Ingrese el ingrediente"> </input>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <button type="submit" class="btn btn-primary">Buscar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="row mt-3">
        {{ #each recipes }}
        <div class="card col-3 mt-2">
            <div>
                <img class="card-img-top" src="{{image}}" alt="profile-pic">
            </div>
            <div class="card-body" style="color: black;">
                <h5 class="card-title"><strong>{{ title }}</strong></h5>
                <a href="/recipes/{{id}}" class="btn btn-outline-dark btn-sm">View Recipe</a>
            </div>
        </div>
        {{/ each}}
    </div>
</div >

