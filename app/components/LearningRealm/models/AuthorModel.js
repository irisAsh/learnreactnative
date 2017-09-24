export default class Author {
  static get schema() {
    return {
      name: 'Author',
      primaryKey: 'id',
      properties: {
        id:   {type: 'int', indexed: true},
        name: {type: 'string'},
      },
    }
  }
}
