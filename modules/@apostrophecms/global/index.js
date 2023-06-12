module.exports = {
    fields: {
      add: {
        Naambedrijf:{
          type:'string',
          label:'Naam bedrijf'
        },
        straathuisnummer:{
          type:'string',
          label:'Straat+Huisnummer'
        },
        telefoonnummer:{
          type:'string',
          label:'telefoon'
        },
        email:{
          type:'string',
          label:'email'
        },
        kvk:{
          type:'string',
          label:'kvk'
        },
        iban:{
          type:'string',
          label:'iban'
        },
        githubUrl: {
          type: 'url',
          label: 'Github organization url'
        }
        
      },
      group: {
        naw:{
          label:'Naw',
          fields: ['Naambedrijf','straathuisnummer','telefoonnummer','email','kvk','iban']
        },
        basics: {
          label: 'Basics',
          fields: ['githubUrl']
        }
      }
    }
  }