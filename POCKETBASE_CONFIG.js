// PocketBase Configuration Examples

// ============================================
// COLLECTION: contacts
// ============================================

// Schema pour la collection contacts
const contactsSchema = {
  id: "string",              // Auto-generated
  name: {
    type: "text",
    required: true,
    maxLength: 255
  },
  email: {
    type: "email",
    required: true,
    unique: false
  },
  subject: {
    type: "text",
    required: true,
    maxLength: 255
  },
  message: {
    type: "text",
    required: true
  },
  created: {
    type: "datetime",
    autoNow: true
  },
  updated: {
    type: "datetime",
    autoNowUpdate: true
  }
};

// ============================================
// COLLECTION: partnership_requests
// ============================================

// Schema pour la collection partnership_requests
const partnershipSchema = {
  id: "string",              // Auto-generated
  name: {
    type: "text",
    required: true,
    maxLength: 255
  },
  company: {
    type: "text",
    required: true,
    maxLength: 255
  },
  email: {
    type: "email",
    required: true
  },
  phone: {
    type: "text",
    required: true,
    maxLength: 20
  },
  partnership_type: {
    type: "select",
    required: true,
    values: [
      "investor",
      "supplier",
      "distributor",
      "collaborator",
      "other"
    ]
  },
  message: {
    type: "text",
    required: true
  },
  status: {
    type: "select",
    values: ["pending", "reviewed", "accepted", "rejected"],
    defaultValue: "pending"
  },
  created: {
    type: "datetime",
    autoNow: true
  },
  updated: {
    type: "datetime",
    autoNowUpdate: true
  }
};

// ============================================
// OPTIONAL: Collection pour les services
// ============================================

// Si vous souhaitez gérer les services dynamiquement depuis PocketBase

const servicesSchema = {
  id: "string",
  title: {
    type: "text",
    required: true
  },
  description: {
    type: "text",
    required: true
  },
  icon: {
    type: "text",
    required: true
  },
  order: {
    type: "number",
    min: 1
  }
};

// ============================================
// OPTIONAL: Collection pour les partenaires
// ============================================

const partnersSchema = {
  id: "string",
  name: {
    type: "text",
    required: true,
    maxLength: 255
  },
  description: {
    type: "text",
    required: true
  },
  website: {
    type: "text",
    required: false
  },
  category: {
    type: "text",
    required: false
  },
  active: {
    type: "bool",
    defaultValue: true
  },
  logo_file: {
    type: "file",
    required: false,
    maxSelect: 1,
    maxSize: 5242880,
    mimeTypes: ["image/png", "image/jpeg", "image/webp"]
  },
  created: {
    type: "datetime",
    autoNow: true
  },
  updated: {
    type: "datetime",
    autoNowUpdate: true
  }
};

// ============================================
// OPTIONAL: Collection pour les filiales
// ============================================

const filialesSchema = {
  id: "string",
  name: {
    type: "text",
    required: true,
    maxLength: 255
  },
  badge: {
    type: "text",
    required: false
  },
  description: {
    type: "text",
    required: true
  },
  location: {
    type: "text",
    required: false
  },
  website: {
    type: "text",
    required: false
  },
  services: {
    type: "text",
    required: false
  },
  domains: {
    type: "text",
    required: false
  },
  details: {
    type: "text",
    required: false
  },
  contact_email: {
    type: "email",
    required: false
  },
  contact_phone: {
    type: "text",
    required: false
  },
  address: {
    type: "text",
    required: false
  },
  active: {
    type: "bool",
    defaultValue: true
  },
  logo_file: {
    type: "file",
    required: false,
    maxSelect: 1,
    maxSize: 5242880,
    mimeTypes: ["image/png", "image/jpeg", "image/webp"]
  },
  created: {
    type: "datetime",
    autoNow: true
  },
  updated: {
    type: "datetime",
    autoNowUpdate: true
  }
};

// ============================================
// OPTIONAL: Collection pour les paramètres du site
// ============================================

const siteSettingsSchema = {
  id: "string",
  siteName: {
    type: "text",
    defaultValue: "INTERSEC Group"
  },
  tagline: {
    type: "text",
    defaultValue: "Groupe multiservices au service du développement"
  },
  email: {
    type: "email",
    defaultValue: "intersec@interimsecurite.com"
  },
  phone: {
    type: "text"
  },
  address: {
    type: "text"
  },
  openingHours: {
    type: "text"
  },
  facebookUrl: {
    type: "text"
  },
  twitterUrl: {
    type: "text"
  },
  linkedinUrl: {
    type: "text"
  }
};

// ============================================
// INSTRUCTIONS PocketBase UI
// ============================================

/*

COMMENT CRÉER LES COLLECTIONS DANS LE ADMIN UI:

1. Accéder à http://localhost:8090/_/

2. Pour chaque collection:
   a. Cliquer sur "New collection"
   b. Entrer le nom (contacts, partnership_requests)
   c. Cliquer "Create"
   d. Ajouter les champs (voir schémas ci-dessus)

3. Pour les champs:
   - Cliquer "Add field"
   - Sélectionner le type
   - Configurer les paramètres
   - Cliquer "Save field"

4. IMPORTANT: Laisser les champs id, created, updated (auto-generated)

5. Pour "partnership_type" (select), ajouter les options:
   - investor
   - supplier
   - distributor
   - collaborator
   - other

6. Cliquer "Save" pour sauvegarder la collection

*/

// ============================================
// REQUÊTES API EXEMPLES
// ============================================

// Récupérer les contacts
async function getContacts() {
  const records = await pb
    .collection('contacts')
    .getFullList();
  console.log(records);
}

// Créer un contact
async function createContact() {
  const data = {
    name: "Jean Dupont",
    email: "jean@example.com",
    subject: "Demande de renseignements",
    message: "J'aimerais en savoir plus sur vos services..."
  };

  const record = await pb
    .collection('contacts')
    .create(data);
  console.log(record);
}

// Récupérer les demandes de partenariat
async function getPartnershipRequests() {
  const records = await pb
    .collection('partnership_requests')
    .getFullList();
  console.log(records);
}

// Créer une demande de partenariat
async function createPartnershipRequest() {
  const data = {
    name: "Alice Martin",
    company: "Tech Solutions",
    email: "alice@techsolutions.com",
    phone: "+223 78 123 456",
    partnership_type: "investor",
    message: "Nous sommes intéressés par une partnership..."
  };

  const record = await pb
    .collection('partnership_requests')
    .create(data);
  console.log(record);
}

// ============================================
// PERMISSIONS ET SÉCURITÉ
// ============================================

/*

PARAMÈTRES RECOMMANDÉS POUR CHAQUE COLLECTION:

Collections:
- contacts: PUBLIC (créer seulement) - Les utilisateurs publics peuvent créer
- partnership_requests: PUBLIC (créer seulement)

Rules pour "List":
- Pour contacts: Pour créer uniquement
  Entrer: '@request.method = "POST"'

Actuellement les collections reçoivent les données publiquement,
ce qui est correct pour un formulaire de contact publique.

Pour un environnement production, considérer:
1. Rate limiting
2. CAPTCHA
3. Email verification
4. Admin-only viewing of records

*/

// ============================================
// BACKUP ET EXPORT
// ============================================

/*

EXPORTER LES DONNÉES:

1. Dans Admin UI, aller à la collection
2. Cliquer sur "Export records"
3. Sélectionner JSON ou CSV
4. Télécharger le fichier

RESTAURER LES DONNÉES:

1. Via PocketBase CLI:
   pocketbase restore /path/to/backup

2. Via Admin UI:
   - Créer manuellement ou importer via script

*/

// ============================================
// NOTES IMPORTANTES
// ============================================

/*

✓ PocketBase crée automatiquement id, created, updated
✓ Les emails sont validés automatiquement (type: email)
✓ Les textes ont maxLength pour limiter les données
✓ Tous les champs requis doivent être remplis
✓ La DB PocketBase est dans le dossier pb_data/

Pour la production:
- Utiliser HTTPS
- Configurer une authentification pour l'admin
- Backup réguliers
- Monitoring des requêtes
- Rate limiting

*/

export { contactsSchema, partnershipSchema, servicesSchema, siteSettingsSchema };
