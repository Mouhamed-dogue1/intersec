# 📱 Guide : Tester l'application sur votre téléphone

Ce guide vous permet de tester votre application React depuis votre téléphone (ou tout autre appareil) sur le même réseau Wi-Fi.

## 🎯 Objectif

Accéder à votre application depuis votre téléphone en modifiant temporairement la configuration PocketBase pour utiliser votre adresse IP locale au lieu de `localhost`.

---

## 🔧 Étape 1 : Trouver votre adresse IP locale

### Sur Windows :
1. Ouvrez `Invite de commande` (Cmd)
2. Tapez : `ipconfig`
3. Cherchez la ligne : **`IPv4 Address`** sous "Connexion réseau active"
4. Notez cette adresse (ex: `192.168.1.9`)

### Sur Mac :
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

### Sur Linux :
```bash
hostname -I
```

---

## 🔑 Étape 2 : Modifier la configuration PocketBase

### Fichier à modifier :
```
src/services/pocketbase.js
```

### Localiser cette ligne :
```javascript
const pb = new PocketBase('http://localhost:8090');
```

### Remplacer par (exemple avec IP `192.168.1.9`) :
```javascript
const pb = new PocketBase('http://192.168.1.9:8090');
```

⚠️ **IMPORTANT** : Remplacez `192.168.1.9` par VOTRE adresse IP trouvée à l'étape 1

---

## 🚀 Étape 3 : Configuration PocketBase

1. **Démarrer PocketBase** sur votre ordinateur (il doit être accessible sur votre réseau)

2. **Vérifier l'accès** en ouvrant dans votre navigateur :
   ```
   http://192.168.1.9:8090
   ```
   (remplacez l'IP par la vôtre)

3. Si ça fonctionne → vous verrez l'interface PocketBase ✅

---

## 📱 Étape 4 : Accéder depuis votre téléphone

1. **Assurez-vous** que votre téléphone est connecté au **même Wi-Fi** que votre ordinateur

2. **Redémarrez** votre application React (Vite) sur votre ordinateur

3. **Accédez** à votre app depuis votre téléphone :
   ```
   http://192.168.1.9:5173
   ```
   (ou le port que Vite affiche, ex: 5174, 5175, etc.)

4. L'app devrait fonctionner : ✅ Formulaires de contact ✅ Admin dashboard

---

## ✅ Vérifications

- [ ] Vous pouvez soummettre un formulaire de contact depuis votre téléphone
- [ ] Les demandes s'affichent dans le dashboard admin
- [ ] Vous pouvez vous connecter au panel admin depuis votre téléphone
- [ ] Les notifications et boutons fonctionnent normalement

---

## 🔄 Étape 5 : Revenir à l'état initial

Quand vous avez fini de tester, **modifiez le fichier à nouveau** :

### Fichier :
```
src/services/pocketbase.js
```

### Remplacer :
```javascript
const pb = new PocketBase('http://192.168.1.9:8090');
```

### Par :
```javascript
const pb = new PocketBase('http://localhost:8090');
```

Puis **redémarrez** votre application React.

---

## 🆘 Dépannage

### "Impossible de se connecter au serveur"

**Causes possibles :**
1. ❌ Votre ordinateur et téléphone ne sont pas sur le **même Wi-Fi**
   → Connectez-les au même réseau

2. ❌ L'adresse IP est **différente**
   → Vérifiez l'IP de votre ordinateur (`ipconfig` sur Windows)

3. ❌ PocketBase ne tourne **pas**
   → Lancez PocketBase sur votre ordinateur

4. ❌ Le port **8090 est bloqué** par le pare-feu
   → Autorisez le port 8090 dans votre pare-feu Windows

### "Le port 5173 est bloqué"

Si Vite tourne sur un autre port (5174, etc.), utilisez ce port dans l'URL :
```
http://192.168.1.9:5174
```

---

## 📋 Résumé des fichiers importants

| Fichier | Modification |
|---------|--------------|
| `src/services/pocketbase.js` | Changer `localhost:8090` en `192.168.1.9:8090` |
| `.env` (optionnel) | Peut contenir `VITE_APP_POCKETBASE_URL` |

---

## 🎓 Exemple complet

**Avant les tests :**
```javascript
// src/services/pocketbase.js
const pb = new PocketBase('http://localhost:8090');
```

**Pendant les tests (avec IP 192.168.1.9) :**
```javascript
// src/services/pocketbase.js
const pb = new PocketBase('http://192.168.1.9:8090');
```

**Après les tests :**
```javascript
// src/services/pocketbase.js
const pb = new PocketBase('http://localhost:8090');
```

---

## 💡 Conseil : Utiliser les variables d'environnement

Pour éviter de modifier manuellement à chaque fois, vous pouvez utiliser un fichier `.env` :

**`.env.local` :**
```
VITE_APP_POCKETBASE_URL=http://192.168.1.9:8090
```

**`src/services/pocketbase.js` :**
```javascript
const pb = new PocketBase(
  import.meta.env.VITE_APP_POCKETBASE_URL || 'http://localhost:8090'
);
```

Puis créez `.env.local` uniquement pour les tests et ignorez-le dans `.gitignore`.

---

**Besoin d'aide ?** Gardez ce guide à proximité pour les futurs tests ! 🚀
