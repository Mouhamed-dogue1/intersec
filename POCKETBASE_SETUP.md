# Configuration PocketBase - Guide Complet

## Collections à Créer

### 1. Collection: `admins`
**Description**: Gestionnaires de chaque entité

**Fields**:
| Field | Type | Requis | Notes |
|-------|------|--------|-------|
| id | text (auto) | ✓ | Auto-généré |
| email | email | ✓ | Email unique |
| password | password | ✓ | Chiffré par PB |
| entity | text | ✓ | intersec, ab_ynnov, ou h2i |
| full_name | text | ✓ | Nom complet |
| created | datetime | ✓ | Auto |
| updated | datetime | ✓ | Auto |

**Données à Ajouter**:
```
1. Email: admin@intersec.ml | Password: Intersec123! | Entity: intersec | Name: Admin Intersec
2. Email: admin@ab-ynnov.ml | Password: ABYnnov123! | Entity: ab_ynnov | Name: Admin AB'Ynnov
3. Email: admin@h2i.ml | Password: H2I123! | Entity: h2i | Name: Admin H2I
```

---

### 2. Collection: `intersec_contacts`
**Description**: Messages/requêtes de partenariat pour Intersec

**Fields**:
| Field | Type | Requis | Notes |
|-------|------|--------|-------|
| id | text (auto) | ✓ | Auto-généré |
| name | text | ✓ | Nom du visiteur |
| email | email | ✓ | Email du visiteur |
| phone | text | ✓ | Téléphone |
| company | text | ✓ | Nom de l'entreprise |
| partnership_type | text | ✓ | Type de partenariat |
| message | text | ✓ | Message |
| status | text | × | Draft, Replied, Closed (par défaut: Draft) |
| admin_response | text | × | Réponse de l'admin |
| response_date | datetime | × | Date de réponse |
| created | datetime | ✓ | Auto |
| updated | datetime | ✓ | Auto |

**Index**: Créer un index sur `status` et `created`

---

### 3. Collection: `ab_ynnov_contacts`
**Description**: Messages pour AB'Ynnov

**Fields**: Identiques à `intersec_contacts`

---

### 4. Collection: `h2i_contacts`
**Description**: Messages pour H2I

**Fields**: Identiques à `intersec_contacts`

---

### 5. Collection: `contact_responses` (Optionnel mais recommandé)
**Description**: Log de toutes les réponses par email

**Fields**:
| Field | Type | Requis | Notes |
|-------|------|--------|-------|
| id | text (auto) | ✓ | Auto-généré |
| contact_id | text | ✓ | ID du contact original |
| entity | text | ✓ | intersec, ab_ynnov, h2i |
| admin_email | email | ✓ | Email de l'admin |
| recipient_email | email | ✓ | Email du destinataire |
| subject | text | ✓ | Sujet du mail |
| body | text | ✓ | Corps du mail |
| sent | boolean | ✓ | True/False |
| error_message | text | × | Si erreur |
| created | datetime | ✓ | Auto |

---

## Règles de Sécurité (Rules)

Pour chaque collection de contacts, ajouter:

**Create**: Publique (n'importe qui peut créer) - Pas de restriction

**Read**: 
```
@request.auth.id != "" && @request.headers.x_admin_token != ""
```
(Ou: Admin seulement - voir via le service Node)

**Update/Delete**: 
```
@request.auth.collection == 'admins'
```
(Admin uniquement)

---

## Configuration Complète via SQL/CLI

Si tu accèdes à PocketBase via SQL directement, voici les commandes:

### 1. Créer collection admins
```sql
CREATE TABLE admins (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    entity TEXT NOT NULL,
    full_name TEXT NOT NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Créer collection intersec_contacts
```sql
CREATE TABLE intersec_contacts (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT NOT NULL,
    partnership_type TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'Draft',
    admin_response TEXT,
    response_date DATETIME,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Dupliquer pour ab_ynnov_contacts et h2i_contacts

---

## Prochaines Étapes

1. **Ouvrir PocketBase Admin** (`http://localhost:8090/_/`)
2. **Créer les collections** selon le schéma ci-dessus
3. **Ajouter les 3 admins** avec leurs credentials
4. **Configurer les règles de sécurité** si nécessaire
5. **Tester les connexions** via l'API

---

## Notes Importantes

- **Passwords**: PocketBase chiffre automatiquement les passwords
- **Email**: Utilise un service comme **Resend** ou **Nodemailer** pour l'envoi d'emails
- **Timestamps**: PocketBase gère automatiquement `created` et `updated`
- **Backups**: Sauvegarde régulièrement ta base de données
