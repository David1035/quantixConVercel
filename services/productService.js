const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom')

class ProductService {

  constructor() {
    this.products = [];
    this.generate(); // correr y generar una instancia del servicio.
    //console.log(this.products)
  }

  async generate(){
    const limit = 21;
    for (let index = 0; index < limit; index++){
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      })
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return this.products;
  }

  async findOne(id) {
    if(this.products.find(item => item.id != id)){
      throw boom.notFound();
    }

    return this.products.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('product no encontrado');
    }

    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]

  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    this.products.splice(index, 1)
    return true
  }
}

module.exports = ProductService;
