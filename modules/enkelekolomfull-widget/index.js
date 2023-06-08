module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'enkelekolomfull-Widget',
  },
      fields: {
        add: {
          Kolom1full:{
            type:'area',
            label:'Kolomfull',
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
  
  