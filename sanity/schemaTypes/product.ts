export default {
  name: 'product', //name is how the schema is queried
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of the product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'product slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },

    {
      name: 'sponsored',
      type: 'boolean',
      title: 'Sponsored Product',
      description: 'Is this product sponsored?',
    },
    {
      name: 'onSale',
      type: 'boolean',
      title: 'Product On Sale',
      description: 'Is this product currently on sale?',
    },

    {
      name: 'salePrice',
      type: 'number',
      title: 'Sale Price',
      description: 'Discounted price if the product is on sale',
      hidden: ({document}: any) => !document?.onSale,
    },
    {
      name: 'category',
      title: 'Product category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}

// export default {
//   name: 'product',

//   type: 'document',
//   title: 'Product',
//   fields: [
//     {name: 'name', type: 'string', title: 'Name of Product'},
//     {name: 'images', type: 'array', title: 'Product Images', of: [{type: 'image'}]},
//     {name: 'description', type: 'text', title: 'Description of the product'},
//     {name: 'slug', type: 'slug', title: 'product slug', options: {source: 'name'}},
//     {name: 'price', type: 'number', title: 'Price'},
//     {name: 'category', title: 'Product category', type: 'reference', to: [{type: 'category'}]},
//   ],
// }
