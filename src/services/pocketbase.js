import PocketBase from 'pocketbase';

const pb = new PocketBase('http://localhost:8090');

// ================================================
// ADMIN AUTHENTICATION SERVICE
// ================================================
export const adminAuthService = {
  // Login admin
  login: async (email, password, entity) => {
    try {
      const user = await pb.collection('users').authWithPassword(email, password);
      
      // Vérifier que l'admin appartient à la bonne entité
      if (user.record.entity !== entity) {
        throw new Error('Admin credentials do not match this entity');
      }
      
      return {
        success: true,
        admin: user.record,
        token: pb.authStore.token
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  },

  // Logout admin
  logout: () => {
    pb.authStore.clear();
  },

  // Get current admin
  getCurrentAdmin: () => {
    return pb.authStore.model;
  },

  // Check if admin is logged in
  isAuthenticated: () => {
    return pb.authStore.isValid;
  }
};

// ================================================
// ENTITY-SPECIFIC CONTACT SERVICES
// ================================================

// Factory function pour créer un service de contacts par entité
const createEntityContactService = (collectionName) => ({
  // Créer un nouveau contact/requête
  create: async (data) => {
    try {
      return await pb.collection(collectionName).create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        partnership_type: data.partnership_type,
        message: data.message,
        status: 'Draft'
      });
    } catch (error) {
      console.error(`Error creating contact in ${collectionName}:`, error);
      throw error;
    }
  },

  // Récupérer tous les contacts
  getAll: async (sortBy = '-created') => {
    try {
      return await pb.collection(collectionName).getFullList({
        sort: sortBy,
        requestKey: null  // Désactiver l'auto-cancellation
      });
    } catch (error) {
      console.error(`Error fetching contacts from ${collectionName}:`, error);
      throw error;
    }
  },

  // Récupérer un contact par ID
  getById: async (id) => {
    try {
      return await pb.collection(collectionName).getOne(id);
    } catch (error) {
      console.error(`Error fetching contact ${id}:`, error);
      throw error;
    }
  },

  // Obtenir les contacts par statut
  getByStatus: async (status) => {
    try {
      return await pb.collection(collectionName).getFullList({
        filter: `status = '${status}'`,
        sort: '-created',
        requestKey: null  // Désactiver l'auto-cancellation
      });
    } catch (error) {
      console.error(`Error fetching contacts with status ${status}:`, error);
      throw error;
    }
  },

  // Mettre à jour le statut
  updateStatus: async (id, status) => {
    try {
      return await pb.collection(collectionName).update(id, {
        status: status
      });
    } catch (error) {
      console.error(`Error updating status for ${id}:`, error);
      throw error;
    }
  },

  // Ajouter une réponse d'admin
  addResponse: async (id, adminResponse) => {
    try {
      return await pb.collection(collectionName).update(id, {
        admin_response: adminResponse,
        status: 'Replied',
        response_date: new Date().toISOString()
      });
    } catch (error) {
      console.error(`Error adding response to ${id}:`, error);
      throw error;
    }
  },

  // Marquer une requête comme lue
  markAsRead: async (id) => {
    try {
      return await pb.collection(collectionName).update(id, {
        is_read: true
      });
    } catch (error) {
      console.error(`Error marking ${id} as read:`, error);
      throw error;
    }
  },

  // Marquer une requête comme fermée
  closeRequest: async (id) => {
    try {
      return await pb.collection(collectionName).update(id, {
        status: 'Closed'
      });
    } catch (error) {
      console.error(`Error closing request ${id}:`, error);
      throw error;
    }
  }
});

// Services pour chaque entité
export const intersecContactService = createEntityContactService('intersec_contacts');
export const abYnnovContactService = createEntityContactService('ab_ynnov_contacts');
export const h2iContactService = createEntityContactService('h2i_contacts');

// ================================================
// EMAIL SERVICE
// ================================================
export const emailService = {
  // Envoyer une réponse par email
  sendResponse: async (recipientEmail, subject, message, senderName) => {
    try {
      // Appel à une fonction backend (à créer)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: recipientEmail,
          subject: subject,
          message: message,
          senderName: senderName
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return {
        success: true,
        message: 'Email sent successfully'
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
};

// ================================================
// LEGACY SERVICES (BACKWARD COMPATIBILITY)
// ================================================

// Authentification utilisateur (legacy)
export const authService = {
  register: async (email, password, passwordConfirm, data) => {
    return await pb.collection('users').create({
      email,
      password,
      passwordConfirm,
      ...data
    });
  },

  login: async (email, password) => {
    return await pb.collection('users').authWithPassword(email, password);
  },

  logout: () => {
    pb.authStore.clear();
  },

  getCurrentUser: () => {
    return pb.authStore.model;
  }
};

// Contacts legacy
export const contactService = {
  create: async (data) => {
    return await pb.collection('contacts').create({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      created: new Date().toISOString()
    });
  },

  getAll: async () => {
    return await pb.collection('contacts').getFullList();
  }
};

// Partnership Requests legacy
export const partnershipService = {
  create: async (data) => {
    return await pb.collection('partnership_requests').create({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      partnership_type: data.partnership_type,
      message: data.message,
      created: new Date().toISOString()
    });
  },

  getAll: async () => {
    return await pb.collection('partnership_requests').getFullList();
  }
};

// Content (dynamic content from PocketBase)
export const contentService = {
  getSettings: async () => {
    try {
      return await pb.collection('site_settings').getFirstListItem('');
    } catch (error) {
      return null;
    }
  },

  getServices: async () => {
    try {
      return await pb.collection('services').getFullList();
    } catch (error) {
      return [];
    }
  }
};

export default pb;
