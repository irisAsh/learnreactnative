export default class Author {}

Author.schema = {
  name: 'Author',
  primaryKey: 'id',
  properties: {
    id:         {type: 'int', indexed: true},
    name:       {type: 'string'},
  },
}
