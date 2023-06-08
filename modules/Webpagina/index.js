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
            'twocolumn': {},
            'enkelekolom':{},
            'enkelekolomfull':{}
           
          }
        }
      },
      titel_formulier:{
        label:'Titel Formulier',
        type:'string'
      },
      formulier:{
        type:'area',
        options:{
          max:1,
          widgets:{
            '@apostrophecms/form': {}
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
      formulier:{
        label:'Formulier',
        fields:['titel_formulier','formulier']
      }
    }
  
}
  };
