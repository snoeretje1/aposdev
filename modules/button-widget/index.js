module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'ButtonWidget',
  },
  fields: {
    add: {
      Tekstbutton:{
        type:'string',
        label:'button',
        textarea:true
      }
    }
  }
};