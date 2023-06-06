const { fields } = require("../default-page");

module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'product',
    pluralLabel: 'Producten',
  },
  fields:{
    add:{
      price: {
        type: 'float',
        label: 'Price',
        required: true
      },
      description: {
        type: 'string',
        label: 'Description',
        textarea: true,
        required: true
      },
      image: {
        label: 'Product photo',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }

    }
  }
  },
  group:{
  basics:{
    label:'Algemeen',
    fields:['Title','price','description','image']
  }  
}
}
};