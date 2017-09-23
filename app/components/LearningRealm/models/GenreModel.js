export default class GenreModel {
  static get schema() {
    return {
      name: 'Genre',
      primaryKey: 'code',
      properties: {
        code:     {type: 'int', indexed: true},
        value:    {type: 'string'},
        label:    {type: 'string'},
        favorite: {type: 'bool', default: false},
      },
    }
  }
}
