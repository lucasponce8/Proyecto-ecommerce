const { Product } = require("../models/Products"); // Importa el modelo de Producto desde su archivo

const getCategories = async () => {
    try {
        const categories = [];        
        const products = await Product.find(); // los productos completos los guardo en esta variable
        // itero los productos para ir guardando las categorias que tienen
        products.map(prod => {

            // si no esta la categoria la agrego al array categories, en caso de que ya este no se repite
            if(!categories.includes(prod.category)) {
                categories.push(prod.category)  
            }
        
        })
        
        return categories;
    }
    catch (error) {
        console.log(error);
    }
};



module.exports = {
    getCategories
}