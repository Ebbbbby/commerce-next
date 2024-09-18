export default {
  name: 'subCategory',
  type: 'document',
  title: 'Sub Categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Sub Category',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Sub Category Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'parentCategory',
      type: 'reference',
      title: 'Parent Category',
      to: [{ type: 'category' }],
    },
  ],
}