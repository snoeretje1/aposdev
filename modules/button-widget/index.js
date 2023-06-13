const { pages } = require("apostrophe");

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Button',
  },
  fields: {
    add: {
      Tekstbutton:{
        type:'string',
        label:'button',
        textarea:true
      },
      _page:{
        label: 'Page to link',
        type: 'relationship',
        withType: '@apostrophecms/page',
        max: 1,
        required: true,
        project: {
          title: 1,
          _url: 1
        }
      }
    }
  }
};