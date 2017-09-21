export default class Book {}

Book.schema = {
  name: 'Book',
  primaryKey: 'id',
  properties: {
    id:         {type: 'int', indexed: true},
    name:       {type: 'string'},
    authorId:   {type: 'int', indexed: true},
    genreCode:  {type: 'int', default: 0, indexed: true},
  },
}
