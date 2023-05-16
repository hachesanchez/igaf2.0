
document.querySelector('#addIngredient').onclick = () => {

    const ingredientInput = `<div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Amount" name="amount">
                            <input type="text" class="form-control" placeholder="Name" name="name">
                        </div>`


    document.querySelector('.ingredient-inputs').innerHTML += ingredientInput

}