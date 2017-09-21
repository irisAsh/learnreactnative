export default class Author {}

Book.schema = {
  name: 'Author',
  primaryKey: 'id',
  properties: {
    id:         {type: 'int', indexed: true},
    name:       {type: 'string'},
  },
}
