# Configuration PocketBase pour Partners et Filiales

## 🎯 Objectif
Les collections `partners` et `filiales` doivent être créées dans PocketBase pour que l'admin panel fonctionne correctement.

## ✅ Solutions disponibles

### Option 1 : Exécuter les migrations automatiquement (Recommandé)
Les migrations PocketBase se trouvent dans `/pocketbase/pb_migrations/`:
- `1775604800_create_partners_collection.js` - Crée la collection `partners`
- `1775604801_create_filiales_collection.js` - Crée la collection `filiales`

Ces migrations s'exécutent automatiquement quand PocketBase démarre si c'est le premier démarrage après leur ajout.

**Étapes :**
1. Assurez-vous que PocketBase n'est pas en cours d'exécution
2. Supprimez ou renommez le répertoire `pocketbase/pb_data/` s'il existe (pour forcer réinitialization)
3. Relancez PocketBase
4. Accédez à http://localhost:8090/_/ pour vérifier que les collections existent

### Option 2 : Créer manuellement dans l'interface PocketBase
Si vous préférez créer les collections manuellement :

1. Allez à http://localhost:8090/_ (admin panel PocketBase)
2. Connectez-vous
3. Cliquez sur "+" pour créer une nouvelle collection

#### Collection `partners` :
- **Champs :**
  - `name` (text, required): Nom du partenaire
  - `description` (text): Description du partenaire
  - `website` (text): URL du site web
  - `category` (text): Catégorie (ex: Technologie, Conseil, Formation, Institutionnel, Autre)
  - `active` (bool): Statut actif/inactif
  - `logo_file` (file): Logo du partenaire (images: jpeg, png, svg, webp)

#### Collection `filiales` :
- **Champs :**
  - `name` (text, required): Nom de la filiale
  - `badge` (text): Badge/slogan de la filiale
  - `description` (text, required): Description
  - `location` (text): Localisation
  - `services` (text): Services proposés
  - `domains` (text): Domaines d'activité
  - `details` (text): Points forts / détails
  - `contact_email` (text, required): Email de contact
  - `contact_phone` (text): Téléphone
  - `address` (text): Adresse complète
  - `website` (text): URL du site
  - `active` (bool): Statut actif/inactif
  - `logo_file` (file): Logo/image (images: jpeg, png, svg, webp)

## 🔄 Après création des collections

Une fois les collections créées :

1. **L'admin panel** affichera les collections au lieu de retourner des erreurs 404
2. **Le tableau de bord** affichera les compteurs corrects pour partenaires et filiales
3. **Vous pourrez** ajouter, modifier, et supprimer des partenaires/filiales via l'interface admin

## 📝 Notes

- Les migrations incluent automatiquement les champs `created` et `updated` (autodate)
- Les champs `logo_file` acceptent les fichiers images: JPEG, PNG, SVG, WebP
- Les collections sont configurées sans règles de contrôle d'accès (createRule, deleteRule, updateRule : null)
- Vous pouvez ajouter des règles de sécurité via l'interface PocketBase admin si nécessaire

## 🐛 Troubleshooting

Si vous voyez toujours des erreurs 404 après la création des collections:

1. **Rafraîchissez le navigateur** (Ctrl+F5 pour ignorer le cache)
2. **Redémarrez le serveur de développement** (`npm run dev`)
3. **Vérifiez les noms**: Assurez-vous qu'elles s'appellent exactement `partners` et `filiales` (minuscules)
4. **Consultez les logs PocketBase** pour voir si les migrations ont échoué
