// modules/webpagina/index.js
module.exports = {
    extend: '@apostrophecms/page-type',
    options: {
        types: [
          // 👇 Adding our new page type
          {
            name: 'webpagina',
            label: 'webpagina'
          }
        ]
        },
    
  fields: {
    add: {
        banner:{
            type:'area',
            options:{
        widgets:{
            '@apostrophecms/image':{}
        }
        }
    },
      subtitle: {
        type: 'string'
      },
      main: {
        type: 'area',
        options: {
          widgets: {
            'twocolumn': {}
           
          }
        }
      }
    },
    group: {
      inhoud: {
        label:'inhoud',
        fields: ['title', 'subtitle', 'main']
      },
      banner:{
        label:'banner',
        fields:['banner']

      },
    }
  
}
  };
