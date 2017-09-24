export default class Book {
  static get schema() {
    return {
      name: 'Book',
      primaryKey: 'id',
      properties: {
        id:         {type: 'int', indexed: true},
        name:       {type: 'string'},
        authorId:   {type: 'int', indexed: true},
        genreCode:  {type: 'int', indexed: true},
      },
    }
  }
}
