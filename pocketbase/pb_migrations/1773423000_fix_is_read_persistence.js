/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collections = [
    { id: 'pbc_2991277223', name: 'intersec_contacts' },
    { id: 'pbc_3044008618', name: 'ab_ynnov_contacts' },
    { id: 'pbc_3137226819', name: 'h2i_contacts' }
  ];

  collections.forEach(({ id, name }) => {
    try {
      const collection = app.findCollectionByNameOrId(id);
      let modified = false;

      // Ensure is_read field exists with proper type
      const isReadField = collection.schema.getFieldByName('is_read');
      if (!isReadField) {
        // Field doesn't exist, add it
        collection.schema.addField(new Field({
          name: 'is_read',
          type: 'bool',
          required: false,
          system: false,
          presentable: false
        }));
        console.log(`✅ Added is_read field to ${name}`);
        modified = true;
      } else if (isReadField.type !== 'bool') {
        // Field exists but wrong type - remove and recreate
        collection.schema.removeField('is_read');
        collection.schema.addField(new Field({
          name: 'is_read',
          type: 'bool',
          required: false,
          system: false,
          presentable: false
        }));
        console.log(`✅ Fixed is_read field type in ${name}`);
        modified = true;
      }

      // Ensure status field exists
      if (!collection.schema.getFieldByName('status')) {
        collection.schema.addField(new Field({
          name: 'status',
          type: 'text',
          required: false,
          system: false,
          presentable: false
        }));
        console.log(`✅ Added status field to ${name}`);
        modified = true;
      }

      // Ensure admin_response field exists
      if (!collection.schema.getFieldByName('admin_response')) {
        collection.schema.addField(new Field({
          name: 'admin_response',
          type: 'text',
          required: false,
          system: false,
          presentable: false
        }));
        console.log(`✅ Added admin_response field to ${name}`);
        modified = true;
      }

      // Ensure response_date field exists
      if (!collection.schema.getFieldByName('response_date')) {
        collection.schema.addField(new Field({
          name: 'response_date',
          type: 'date',
          required: false,
          system: false,
          presentable: false
        }));
        console.log(`✅ Added response_date field to ${name}`);
        modified = true;
      }

      if (modified) {
        app.save(collection);
        console.log(`✅ Collection ${name} schema updated`);
      } else {
        console.log(`ℹ️ Collection ${name} already has all required fields`);
      }
    } catch (e) {
      console.error(`❌ Error migrating ${name}: ${e.message}`);
    }
  });

  // Migrate null values to false for all existing records
  const collections_list = [
    { id: 'pbc_2991277223', name: 'intersec_contacts' },
    { id: 'pbc_3044008618', name: 'ab_ynnov_contacts' },
    { id: 'pbc_3137226819', name: 'h2i_contacts' }
  ];

  collections_list.forEach(({ id, name }) => {
    try {
      const collection = app.findCollectionByNameOrId(id);
      const records = app.find(id) || [];
      
      let updatedCount = 0;
      records.forEach(record => {
        // Fix null or missing is_read values
        if (record.is_read === null || record.is_read === undefined) {
          record.is_read = false;
          app.save(record);
          updatedCount++;
        }
      });

      if (updatedCount > 0) {
        console.log(`✅ Migrated ${updatedCount} records in ${name}: NULL → false`);
      }
    } catch (e) {
      console.log(`ℹ️ Data migration for ${name}: ${e.message}`);
    }
  });
}, (app) => {
  // Rollback not needed - just field additions
  console.log('Rollback: Keeping fields for data safety');
});
