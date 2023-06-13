module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'TwoColumn-Widget',
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
            '@apostrophecms/video':{},
            'button':{}
          }
        }
      },
      Kolom2:{
        type:'area',
        label:'Kolom2 ',
        options:{
          widgets:{
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image':{},
            '@apostrophecms/video':{},
            'button':{}
          }
        }
      }
          }
        }

      };