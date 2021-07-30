// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
ProductTag.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    //unique: true,
  },
 as: 'productTag'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through: {
    model: ProductTag,
    //unique: true,
  },
  as: 'productTag'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
