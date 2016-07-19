// @flow
import faker from 'faker';
import _ from 'lodash';

class Product {
  id: string;
  text: string;
  isBought: boolean;
  userToken: ?string;

  constructor() {
    this.id = _.uniqueId('product_');
    this.text = faker.lorem.sentence();
    this.isBought = false;
    this.userToken = undefined;
  }
}

export default Product;
