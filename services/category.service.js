
class CategoryService{

  constructor(){
    this.categories = [];
    //this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.string.alphanumeric(5),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      });
    }
  }

  create(){

  }

  find(){
    return this.categories;
  }

  findOne(id){
    return this.categories.find(item => item.id===id);
  }

  update(){

  }

  delete(){

  }

}

export default CategoryService;
