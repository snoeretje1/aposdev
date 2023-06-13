// const { pages } = require("apostrophe");

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'button',
  },
  fields: {
    add: {
    tekst:{
      type:'area',
      label:'tekst',
      options:{
        widgets:{
          '@apostrophecms/rich-text': {}
        }
    }
  }
}
  }
};