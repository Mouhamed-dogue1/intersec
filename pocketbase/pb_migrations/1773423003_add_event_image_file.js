/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId('events_collection');

  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "file_image_file",
    "max": 0,
    "min": 0,
    "name": "image_file",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "file"
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId('events_collection');

  collection.fields.removeById('file_image_file');

  return app.save(collection);
});