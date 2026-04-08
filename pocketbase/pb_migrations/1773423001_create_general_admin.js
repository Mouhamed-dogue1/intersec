/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Créer l'admin général
  const admin = new Record(app.findCollectionByNameOrId('users'));
  admin.set('email', 'admin@intersec-group.com');
  admin.set('password', 'GeneralAdmin123!');
  admin.set('entity', 'general');
  admin.set('full_name', 'Administrateur Général');
  admin.set('emailVisibility', true);
  admin.set('verified', true);

  app.save(admin);

  console.log('Admin général créé avec succès');
}, (app) => {
  // Rollback: supprimer l'admin général
  try {
    const admin = app.findFirstRecordByData('users', 'email', 'admin@intersec-group.com');
    if (admin) {
      app.delete(admin);
    }
  } catch (e) {
    // Ignore si l'admin n'existe pas
  }
});