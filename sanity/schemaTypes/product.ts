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
    // {
    //   name: 'price_id',
    //   type: 'string',
    //   title: 'Stripe Price ID',
    // },

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
