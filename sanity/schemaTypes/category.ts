// export default {
//   name: 'category',
//   type: 'document',
//   title: 'Categories',
//   fields: [
//     {
//     name: 'name',
//     type:'string',
//     title: 'Name of Category',
//   }
// ],
// }
export default {
  name: 'category',
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Category',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Category Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'subcategories',
      type: 'array',
      title: 'Subcategories',
      of: [{ type: 'reference', to: [{ type: 'subCategory' }] }],
    },
  ],
}
