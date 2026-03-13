# 🎯 Guide de Mise en Place - Système de Gestion Admin

## ✅ Implémentation Complète

Ce système permet à chaque entité (Intersec, AB'Ynnov, H2I) d'avoir:
- ✨ Un **dashboard admin** privé pour gérer les messages
- 🔐 Un **système de login** sécurisé avec identifiants uniques
- 💬 Une **interface complète** pour voir et répondre aux messages
- 📧 Un **système de réponse par email**

---

## 📋 Ce Qui A Été Créé

### 1. **Services Backend** (`src/services/pocketbase.js`)
- `adminAuthService`: Authentification des admins
- `intersecContactService`: Gestion des messages Intersec
- `abYnnovContactService`: Gestion des messages AB'Ynnov
- `h2iContactService`: Gestion des messages H2I
- `emailService`: Envoi de réponses par email

### 2. **Composants Réutilisables**
- `AdminLogin.jsx`: Formulaire de connexion avec validation
- `AdminDashboard.jsx`: Interface complète de gestion

### 3. **Pages Admin** (Une par entité)
- `src/pages/AdminPanel.jsx` → `/admin` (Intersec)
- `src/filiales/ab-ynnov/pages/AdminPanel.jsx` → `/filiales/ab-ynnov/admin` (AB'Ynnov)
- `src/filiales/h2i/pages/AdminPanel.jsx` → `/filiales/h2i/admin` (H2I)

### 4. **Formulaires Intégrés**
- Intersec: `Partnership.jsx` (page partenariat)
- AB'Ynnov: `Contact.jsx` → Envoie vers `ab_ynnov_contacts`
- H2I: `Contact.jsx` → Envoie vers `h2i_contacts`

---

## 🚀 Configuration PocketBase (ÉTAPE IMPORTANTE!)

### Accès à PocketBase:
```
http://localhost:8090/_/
```

### Collections à Créer:

#### 1. **Collection: `admins`**
```
- id (text, auto)
- email (email, unique)
- password (password)
- entity (text) → "intersec", "ab_ynnov", ou "h2i"
- full_name (text)
- created (datetime)
- updated (datetime)
```

**Ajouter ces 3 admins:**
| Email | Password | Entity | Name |
|-------|----------|--------|------|
| admin@intersec.ml | Intersec123! | intersec | Admin Intersec |
| admin@ab-ynnov.ml | ABYnnov123! | ab_ynnov | Admin AB'Ynnov |
| admin@h2i.ml | H2I123! | h2i | Admin H2I |

#### 2. **Collection: `intersec_contacts`**
```
- id (text, auto)
- name (text, required)
- email (email, required)
- phone (text)
- company (text)
- partnership_type (text)
- message (text, required)
- status (text) → "Draft", "Replied", "Closed"
- admin_response (text)
- response_date (datetime)
- created (datetime, auto)
- updated (datetime, auto)
```

#### 3. **Collection: `ab_ynnov_contacts`**
*Même schéma que `intersec_contacts`*

#### 4. **Collection: `h2i_contacts`**
*Même schéma que `intersec_contacts`*

---

## 🔗 Routes Disponibles

### Intersec
- 📧 Formulaire contact: `/contact`
- 🤝 Partenariat: `/partnership`
- 🔑 Admin: `/admin`

### AB'Ynnov
- 📧 Contact: `/filiales/ab-ynnov/contact`
- 🔑 Admin: `/filiales/ab-ynnov/admin`

### H2I
- 📧 Contact: `/filiales/h2i/contact`
- 🔑 Admin: `/filiales/h2i/admin`

---

## 🧪 Test du Système

### Étape 1: Envoyer un message
1. Aller sur `/partnership` (Intersec)
2. Remplir le formulaire:
   - Nom: "Jean Dupont"
   - Email: "jean@example.com"
   - Téléphone: "+223 XX XX XX XX"
   - Entreprise: "Tech Corp"
   - Type: "Investisseur"
   - Message: "Intéressé par vos services"
3. Cliquer "Envoyer"
4. ✅ Message sauvegardé dans `intersec_contacts`

### Étape 2: Admin voit le message
1. Aller sur `/admin`
2. Login: `admin@intersec.ml` / `Intersec123!`
3. 🎉 Dashboard s'affiche avec le message reçu

### Étape 3: Admin répond
1. Cliquer sur le message dans la liste
2. Cliquer "Répondre"
3. Écrire la réponse
4. Cliquer "Envoyer"

---

## 📧 Configuration de l'Email (IMPORTANT!)

### Option 1: Avec **Resend** (Recommandé)
```bash
npm install resend
```

Créer `src/services/email.js`:
```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(to, subject, html) {
  return await resend.emails.send({
    from: 'noreply@intersec-group.com',
    to,
    subject,
    html
  });
}
```

### Option 2: Avec **Nodemailer**
```bash
npm install nodemailer
```

### Option 3: Service Backend (Vercel, Netlify)
Créer un endpoint: `/api/send-email`

Exemple Vercel Function (`api/send-email.js`):
```javascript
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { to, subject, message, senderName } = req.body;

  try {
    // Implémenter l'envoi d'email ici
    // Utiliser nodemailer, sendgrid, ou tout autre service
    
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

---

## 🔒 Authentification & Sécurité

### Stockage des Identifiants
- ✅ Les credentials sont stockés localement dans `localStorage`
- ✅ Le token est conservé per session
- ✅ Logout efface tout

**À améliorer pour production:**
- Utiliser `httpOnly` cookies au lieu de `localStorage`
- Implémenter JWT tokens
- Ajouter rate limiting pour les tentatives de login

### Contrôle d'Accès
- Chaque admin ne peut accéder qu'à ses propres messages
- Vérification: `adminEntity === entity`

---

## 📦 Fichiers Modifiés & Créés

### Créés:
```
✨ src/components/AdminLogin.jsx (124 lignes)
✨ src/components/AdminDashboard.jsx (380 lignes)
✨ src/pages/AdminPanel.jsx (Intersec)
✨ src/filiales/ab-ynnov/pages/AdminPanel.jsx
✨ src/filiales/h2i/pages/AdminPanel.jsx
✨ POCKETBASE_SETUP.md
```

### Modifiés:
```
📝 src/services/pocketbase.js (+280 lignes)
📝 src/App.jsx (routes admin ajoutées)
📝 src/components/ContactForm.jsx (intégration PocketBase)
📝 src/filiales/ab-ynnov/pages/Contact.jsx (intégration)
📝 src/filiales/h2i/pages/Contact.jsx (intégration)
```

---

## 🎨 Flux Utilisateur Complet

### Client envoie un message
```
Visiteur → Remplit formulaire → "Envoyer"
           ↓
      Validation client
           ↓
      Sauvegarde dans PocketBase
           ↓
      Message confirmé ✓
```

### Admin gère le message
```
Admin → /admin → Login → Dashboard
           ↓
      Voit tous les messages (Draft, Replied, Closed)
           ↓
      Clique sur un message
           ↓
      Lit le contenu
           ↓
      Écrit une réponse
           ↓
      Clique "Envoyer"
           ↓
      Statut change à "Replied"
      Email envoyé au visiteur ✏️
      ↓
      Admin peut fermer la requête
```

---

## 🐛 Troubleshooting

### Problème: Login Admin échoue
**Solution:**
1. Vérifier que la collection `admins` existe
2. Vérifier que l'email/password existent
3. Vérifier que `entity` correspond

### Problème: Messages ne s'enregistrent pas
**Solution:**
1. Vérifier que PocketBase tourne (`http://localhost:8090`)
2. Vérifier que la collection `[entity]_contacts` existe
3. Vérifier les erreurs en console (F12)

### Problème: Email ne s'envoie pas
**Solution:**
1. Endpoint `/api/send-email` n'existe pas → à créer
2. Clé API non configurée (RESEND_API_KEY, etc.)
3. Vérifier les variables d'environnement

---

## 🚀 Prochaines Étapes

1. **Créer les 4 collections PocketBase** (PRIORITY!)
2. **Ajouter les 3 admins** dans la collection `admins`
3. **Configurer le service d'email** (Resend, Nodemailer, etc.)
4. **Tester end-to-end** les 3 formulaires
5. **Mettre en production** avec les vraies credentials
6. **Ajouter logs** pour tracker les actions

---

## 📞 Détails des Entités

### Intersec (Groupe Parent)
- Access: `/admin`
- Login: `admin@intersec.ml`
- Collection: `intersec_contacts`
- Colors: Green/Dark

### AB'Ynnov (Filiale 1)
- Access: `/filiales/ab-ynnov/admin`
- Login: `admin@ab-ynnov.ml`
- Collection: `ab_ynnov_contacts`
- Colors: Blue

### H2I (Filiale 2)
- Access: `/filiales/h2i/admin`
- Login: `admin@h2i.ml`
- Collection: `h2i_contacts`
- Colors: Purple/Green

---

## 📚 Documentation Référence

- [PocketBase Docs](https://pocketbase.io/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Resend Email](https://resend.com/)

---

**✅ Implémentation terminée!** 
Passe à l'étape 1 du setup: Configuration PocketBase
