/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collections = ['pbc_2991277223', 'pbc_3044008618', 'pbc_3137226819']; // intersec_contacts, ab_ynnov_contacts, h2i_contacts

  collections.forEach(collectionId => {
    try {
      const collection = app.findCollectionByNameOrId(collectionId);
      
      // Add is_read field if it doesn't exist
      if (!collection.schema.getFieldByName('is_read')) {
        collection.schema.addField(new Field({
          name: 'is_read',
          type: 'bool',
          required: false,
          system: false,
          presentable: false
        }));
      }

      app.save(collection);
      console.log(`✅ Added is_read field to ${collectionId}`);
    } catch (e) {
      console.log(`⚠️ Collection ${collectionId}: ${e.message}`);
    }
  });
}, (app) => {
  // Rollback - remove is_read field
  const collections = ['pbc_2991277223', 'pbc_3044008618', 'pbc_3137226819'];
  
  collections.forEach(collectionId => {
    try {
      const collection = app.findCollectionByNameOrId(collectionId);
      
      if (collection.schema.getFieldByName('is_read')) {
        collection.schema.removeField('is_read');
        app.save(collection);
      }
    } catch (e) {
      console.log(`Collection ${collectionId}: ${e.message}`);
    }
  });
});
