export default class Genre {}

Genre.schema = {
  name: 'Genre',
  primaryKey: 'code',
  properties: {
    code:     {type: 'int', indexed: true},
    value:    {type: 'string'},
    label:    {type: 'string'},
    favorite: {type: 'bool'},
  },
}
