# ✅ CHECKLIST - Mise en Place du Système Admin

## Phase 1: Configuration PocketBase (À Faire MAINTENANT)

### Accès PocketBase
- [ ] Ouvrir: `http://localhost:8090/_/`
- [ ] Si PocketBase n'est pas lancé: 
  - Lancer depuis `pocketbase/` avec `./pocketbase serve` (Windows) ou `./pocketbase serve` (Mac/Linux)

### Collections (À créer dans PocketBase)

#### Collection 1: `admins`
- [ ] Créer la collection `admins`
- [ ] Ajouter champs:
  - [ ] `email` (email, unique, required)
  - [ ] `password` (password)
  - [ ] `entity` (text, required)
  - [ ] `full_name` (text, required)
- [ ] Ajouter 3 enregistrements:
  - [ ] `admin@intersec.ml` | `Intersec123!` | `intersec` | `Admin Intersec`
  - [ ] `admin@ab-ynnov.ml` | `ABYnnov123!` | `ab_ynnov` | `Admin AB'Ynnov`
  - [ ] `admin@h2i.ml` | `H2I123!` | `h2i` | `Admin H2I`

#### Collection 2: `intersec_contacts`
- [ ] Créer la collection
- [ ] Ajouter champs:
  - [ ] `name` (text, required)
  - [ ] `email` (email, required)
  - [ ] `phone` (text)
  - [ ] `company` (text)
  - [ ] `partnership_type` (text)
  - [ ] `message` (text, required)
  - [ ] `status` (text) → Default: "Draft"
  - [ ] `admin_response` (text)
  - [ ] `response_date` (datetime)

#### Collection 3: `ab_ynnov_contacts`
- [ ] Dupliquer le schéma de `intersec_contacts`

#### Collection 4: `h2i_contacts`
- [ ] Dupliquer le schéma de `intersec_contacts`

---

## Phase 2: Test Rapide du Front-End

### Vérifier les Routes
- [ ] Aller sur `/admin` → Voir la page de login
- [ ] Aller sur `/filiales/ab-ynnov/admin` → Voir la page de login AB'Ynnov
- [ ] Aller sur `/filiales/h2i/admin` → Voir la page de login H2I

### Tester le Login
- [ ] `/admin`:
  - [ ] Essayer login avec `admin@intersec.ml` / `Intersec123!`
  - [ ] Vérifier que le dashboard s'affiche
- [ ] `/filiales/ab-ynnov/admin`:
  - [ ] Essayer login avec `admin@ab-ynnov.ml` / `ABYnnov123!`
  - [ ] Vérifier que le dashboard AB'Ynnov s'affiche

---

## Phase 3: Tester les Formulaires

### Intersec - Partenariat
- [ ] Aller sur `/partnership`
- [ ] Remplir et envoyer le formulaire:
  ```
  Nom: Test User
  Email: test@example.com
  Téléphone: +223 60000000
  Entreprise: Test Company
  Type: Investisseur
  Message: Test message
  ```
- [ ] Voir la confirmation "Succès"
- [ ] Vérifier dans PocketBase que le message est enregistré

### AB'Ynnov - Contact
- [ ] Aller sur `/filiales/ab-ynnov/contact`
- [ ] Remplir et envoyer
- [ ] Vérifier dans collection `ab_ynnov_contacts`

### H2I - Contact
- [ ] Aller sur `/filiales/h2i/contact`
- [ ] Remplir et envoyer
- [ ] Vérifier dans collection `h2i_contacts`

---

## Phase 4: Dashboard Admin

### Intersec Admin
- [ ] Login sur `/admin`
- [ ] Voir le message dans la liste
- [ ] Cliquer dessus pour voir les détails
- [ ] Cliquer "Répondre"
- [ ] Écrire une réponse
- [ ] Cliquer "Envoyer"

### Vérifier dans PocketBase
- [ ] `status` change à "Replied"
- [ ] `admin_response` fait avec le texte
- [ ] `response_date` a la date/heure

---

## Phase 5: Configuration Email (IMPORTANT!)

Choisir UNE solution:

### Option A: Resend (Recommandé)
- [ ] S'inscrire sur https://resend.com/
- [ ] Copier la clé API
- [ ] Créer fichier `.env.local`:
  ```
  VITE_RESEND_API_KEY=your_key_here
  ```
- [ ] Modifier `emailService` dans `src/services/pocketbase.js`

### Option B: Vercel Functions
- [ ] Créer dossier `api/`
- [ ] Ajouter fichier `api/send-email.js`
- [ ] Implémenter avec nodemailer ou SendGrid
- [ ] Déployer sur Vercel

### Option C: Backend Node Express
- [ ] Créer serveur Express
- [ ] Endpoint POST `/api/send-email`
- [ ] Mettre URL dans `emailService`

---

## Phase 6: Liens & Routes Finales

### Intersec
- [ ] Formulaire contact: `http://localhost:5173/contact`
- [ ] Partenariat: `http://localhost:5173/partnership`
- [ ] Admin: `http://localhost:5173/admin`

### AB'Ynnov
- [ ] Contact: `http://localhost:5173/filiales/ab-ynnov/contact`
- [ ] Admin: `http://localhost:5173/filiales/ab-ynnov/admin`

### H2I
- [ ] Contact: `http://localhost:5173/filiales/h2i/contact`
- [ ] Admin: `http://localhost:5173/filiales/h2i/admin`

---

## 🐛 Si Quelque Chose Ne Marche Pas

**Problème: "Connexion BDD échouée"**
- [ ] Vérifier que PocketBase est lancé
- [ ] Vérifier port `8090`

**Problème: "Collection not found"**
- [ ] Vérifier les noms de collection (exact case-sensitive)
- [ ] Rafraîchir la page

**Problème: "Login échoue"**
- [ ] Vérifier email/password dans admins
- [ ] Vérifier que `entity` correspond à la bonne page

**Problème: Messages ne s'enregistrent pas**
- [ ] Ouvrir Console (F12) et vérifier erreurs
- [ ] Vérifier que PocketBase a les bonnes permissions

---

## 📊 Vue d'Ensemble

```
Visiteur
├─ Formulaire Intersec → intersec_contacts ✓
├─ Formulaire AB'Ynnov → ab_ynnov_contacts ✓
├─ Formulaire H2I → h2i_contacts ✓

Admin
├─ Login Intersec → Dashboard Intersec
│  ├─ Voir messages
│  ├─ Répondre
│  └─ Envoyer email
│
├─ Login AB'Ynnov → Dashboard AB'Ynnov
│  └─ (même fonctionnement)
│
└─ Login H2I → Dashboard H2I
   └─ (même fonctionnement)
```

---

## ✨ Vous êtes Prêt!

**Commencez par:**
1. Créer les 4 collections PocketBase
2. Ajouter les 3 admins
3. Tester un formulaire
4. Tester le login admin
5. Configurer l'email

**Questions?** Consultez `ADMIN_SYSTEM_SETUP.md`

---

**Status:** ✅ SYSTÈME COMPLET - Prêt pour le deployment
