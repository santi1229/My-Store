import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

class ProductService{

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    const products = [];
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.alphanumeric(5),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean()
      });
    }
  }

  async create(data){
    const newProduct ={
      id: faker.string.alphanumeric(5),
      ...data
    }

    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 2000);
    })
  }

  async findOne(id){
    const product = this.products.find(item => item.id===id);
    if (!product){
      throw boom.notFound('Product not found');
    }
    if (product.isBlock){
      throw boom.conflict('Product is block');
    }
    return product;
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id===id);
    if(index === -1){
      throw boom.notFound('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id){
    //this.products = this.products.filter(value => value.id != id);
    const index = this.products.findIndex(item => item.id===id);
    if(index === -1){
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

export default ProductService;
