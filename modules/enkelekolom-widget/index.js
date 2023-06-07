module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Enkelekolom Widget',
  },
    fields: {
      add: {
        Kolom1:{
          type:'area',
          label:'Kolom1',
          options:{
            widgets:{
              '@apostrophecms/rich-text': {},
              '@apostrophecms/image': {},
              '@apostrophecms/video':{}
            }
          }
        }
            }
          }
  
        };

