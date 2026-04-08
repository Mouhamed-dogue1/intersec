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
      
      // Vérifier que l'admin appartient à la bonne entité ou est général
      if (user.record.entity !== entity && user.record.entity !== 'general') {
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
      console.log(`📝 Création de contact dans ${collectionName}:`, data);
      const result = await pb.collection(collectionName).create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        partnership_type: data.partnership_type,
        message: data.message,
        status: 'Draft',
        is_read: false
      });
      console.log(`✅ Contact créé in ${collectionName}:`, result.id);
      return result;
    } catch (error) {
      console.error(`❌ Error creating contact in ${collectionName}:`, error);
      throw error;
    }
  },

  // Récupérer tous les contacts
  getAll: async (sortBy = '-created') => {
    try {
      console.log(`🔍 Récupération de ${collectionName}...`);
      const contacts = await pb.collection(collectionName).getFullList({
        sort: sortBy,
        requestKey: null  // Désactiver l'auto-cancellation
      });
      console.log(`✅ ${collectionName}: ${contacts.length} contacts trouvés`, contacts);
      return contacts;
    } catch (error) {
      console.error(`❌ Erreur pour ${collectionName}:`, error);
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
// EVENTS SERVICE
// ================================================
export const getFileUrl = (record, fieldName) => {
  if (!record || !fieldName) return '';
  try {
    const fileValue = record[fieldName];
    if (Array.isArray(fileValue) && fileValue.length > 0) {
      return pb.getFileUrl(record, fileValue[0]);
    } else if (typeof fileValue === 'string' && fileValue) {
      return pb.getFileUrl(record, fileValue);
    }
    return '';
  } catch (error) {
    console.error('Error getting file URL:', error);
    return '';
  }
};

export const eventsService = {
  // Créer un événement
  create: async (data) => {
    try {
      console.log('Creating event with data:', {
        title: data.title,
        description: data.description,
        event_date: data.event_date,
        location: data.location,
        hasImage: !!data.imageFile,
        imageFileName: data.imageFile?.name
      });

      // Pour PocketBase, créer un FormData proprement
      const formData = new FormData();
      
      // Ajouter les champs texte
      formData.append('title', data.title || '');
      formData.append('description', data.description || '');
      formData.append('event_date', data.event_date || '');
      formData.append('location', data.location || '');
      formData.append('published', data.published ? true : false);

      // Ajouter l'image si présente
      if (data.imageFile) {
        console.log('📸 Adding image file:', data.imageFile.name);
        formData.append('image_file', data.imageFile);
      } else if (data.imageUrl && data.imageUrl !== '') {
        console.log('🔗 Adding image URL:', data.imageUrl);
        formData.append('image', data.imageUrl);
      }

      console.log('Making POST request to create event...');
      const result = await pb.collection('events').create(formData);
      console.log('✅ Event created successfully:', result.id);
      return result;
    } catch (error) {
      console.error('❌ Error creating event:', error);
      console.error('Error details:', {
        status: error.status,
        message: error.message,
        response: error.response
      });
      throw error;
    }
  },

  // Récupérer tous les événements
  getAll: async (sortBy = '-event_date') => {
    try {
      return await pb.collection('events').getFullList({
        sort: sortBy,
        requestKey: null
      });
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  // Récupérer les événements publiés
  getPublished: async () => {
    try {
      return await pb.collection('events').getFullList({
        filter: 'published = true',
        sort: '-event_date',
        requestKey: null
      });
    } catch (error) {
      console.error('Error fetching published events:', error);
      throw error;
    }
  },

  // Récupérer un événement par ID
  getById: async (id) => {
    try {
      return await pb.collection('events').getOne(id);
    } catch (error) {
      console.error('Error fetching event:', error);
      throw error;
    }
  },

  // Mettre à jour un événement
  update: async (id, data) => {
    try {
      console.log('Updating event:', id, {
        title: data.title,
        hasImage: !!data.imageFile,
        imageFileName: data.imageFile?.name
      });

      const formData = new FormData();
      formData.append('title', data.title || '');
      formData.append('description', data.description || '');
      formData.append('event_date', data.event_date || '');
      formData.append('location', data.location || '');
      formData.append('published', data.published ? true : false);

      // Gestion de l'image avec priorité bien définie
      if (data.imageFile) {
        console.log('📸 Replacing image with:', data.imageFile.name);
        formData.append('image_file', data.imageFile);
      } else if (data.imageUrl && data.imageUrl !== '') {
        console.log('🔗 Setting image URL:', data.imageUrl);
        formData.append('image', data.imageUrl);
      }
      // Sinon on ne touche pas à image_file - PocketBase conserve ce qui était là

      console.log('Making PATCH request to update event...');
      const result = await pb.collection('events').update(id, formData);
      console.log('✅ Event updated successfully');
      return result;
    } catch (error) {
      console.error('❌ Error updating event:', error);
      console.error('Error details:', {
        status: error.status,
        message: error.message,
        response: error.response
      });
      throw error;
    }
  },

  // Supprimer un événement
  delete: async (id) => {
    try {
      return await pb.collection('events').delete(id);
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  }
};

const blogCollectionCandidates = ['blog_posts', 'posts', 'blogs', 'articles', 'actualites'];
let cachedBlogCollectionName = null;

const getBlogCollectionName = async () => {
  if (cachedBlogCollectionName) {
    return cachedBlogCollectionName;
  }

  for (const collectionName of blogCollectionCandidates) {
    try {
      await pb.collection(collectionName).getList(1, 1, {
        sort: '-created',
        requestKey: null
      });
      cachedBlogCollectionName = collectionName;
      return collectionName;
    } catch (error) {
      // Continue looking for another candidate collection
    }
  }

  return null;
};

export const postsService = {
  getPublished: async () => {
    try {
      const collectionName = await getBlogCollectionName();
      if (!collectionName) {
        console.warn('No blog collection found in PocketBase.');
        return [];
      }

      return await pb.collection(collectionName).getFullList({
        filter: 'published = true',
        sort: '-created',
        requestKey: null
      });
    } catch (error) {
      console.warn('Error fetching published blog posts:', error.message || error);
      return [];
    }
  },

  create: async (data) => {
    try {
      const collectionName = (await getBlogCollectionName()) || 'blog_posts';
      const formData = new FormData();
      formData.append('title', data.title || '');
      formData.append('excerpt', data.excerpt || '');
      formData.append('content', data.content || '');
      formData.append('author', data.author || 'Équipe Intersec');
      formData.append('published', String(data.published ? true : false));
      formData.append('tags', data.tags || '');
      if (data.imageFile) {
        formData.append('image_file', data.imageFile, data.imageFile.name);
      }
      return await pb.collection(collectionName).create(formData);
    } catch (error) {
      console.error('Error creating blog post:', error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const collectionName = (await getBlogCollectionName()) || 'blog_posts';
      const formData = new FormData();
      formData.append('title', data.title || '');
      formData.append('excerpt', data.excerpt || '');
      formData.append('content', data.content || '');
      formData.append('author', data.author || 'Équipe Intersec');
      formData.append('published', String(data.published ? true : false));
      formData.append('tags', data.tags || '');
      if (data.imageFile) {
        formData.append('image_file', data.imageFile, data.imageFile.name);
      }
      return await pb.collection(collectionName).update(id, formData);
    } catch (error) {
      console.error('Error updating blog post:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const collectionName = await getBlogCollectionName();
      if (!collectionName) {
        throw new Error('No blog collection found to delete post.');
      }
      return await pb.collection(collectionName).delete(id);
    } catch (error) {
      console.error('Error deleting blog post:', error);
      throw error;
    }
  },

  incrementViews: async (id) => {
    try {
      const collectionName = await getBlogCollectionName();
      if (!collectionName) {
        console.warn('No blog collection found to increment views.');
        return null;
      }

      const post = await pb.collection(collectionName).getOne(id);
      const currentViews = post.views || 0;
      const updatedPost = await pb.collection(collectionName).update(id, {
        views: currentViews + 1
      });
      return updatedPost;
    } catch (error) {
      console.error('Error incrementing views for post:', error);
      // Don't throw - this is a non-critical operation
      return null;
    }
  }
};

export const partnersService = {
  create: async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name || '');
      formData.append('description', data.description || '');
      formData.append('website', data.website || '');
      formData.append('category', data.category || '');
      formData.append('active', String(data.active ? true : false));
      if (data.logoFile) {
        formData.append('logo_file', data.logoFile, data.logoFile.name);
      }
      console.debug('Creating partner with FormData:', {
        name: data.name,
        description: data.description,
        website: data.website,
        category: data.category,
        active: data.active,
        hasLogo: !!data.logoFile
      });
      return await pb.collection('partners').create(formData);
    } catch (error) {
      console.error('Error creating partner:', error);
      if (error.response) {
        console.error('PocketBase response body:', error.response);
      }
      throw error;
    }
  },

  getAll: async (sortBy = '-created') => {
    try {
      return await pb.collection('partners').getFullList({
        sort: sortBy,
        requestKey: null
      });
    } catch (error) {
      console.warn('⚠️ Partners collection not found or error fetching partners:', error.message);
      console.info('💡 Make sure the "partners" collection exists in PocketBase with fields: name, description, website, category, active, logo_file');
      // Return empty array instead of throwing to allow UI to function
      return [];
    }
  },

  getActive: async () => {
    try {
      return await pb.collection('partners').getFullList({
        filter: 'active = true',
        sort: '-created',
        requestKey: null
      });
    } catch (error) {
      console.warn('⚠️ Error fetching active partners:', error.message);
      return [];
    }
  },

  getById: async (id) => {
    try {
      return await pb.collection('partners').getOne(id);
    } catch (error) {
      console.error('Error fetching partner with ID:', id, error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name || '');
      formData.append('description', data.description || '');
      formData.append('website', data.website || '');
      formData.append('category', data.category || '');
      formData.append('active', String(data.active ? true : false));
      if (data.logoFile) {
        formData.append('logo_file', data.logoFile, data.logoFile.name);
      }
      return await pb.collection('partners').update(id, formData);
    } catch (error) {
      console.error('Error updating partner:', error);
      if (error.response) {
        console.error('PocketBase response body:', error.response);
      }
      throw error;
    }
  },

  delete: async (id) => {
    try {
      return await pb.collection('partners').delete(id);
    } catch (error) {
      console.error('Error deleting partner:', error);
      throw error;
    }
  }
};

export const filialesService = {
  create: async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name || '');
      formData.append('description', data.description || '');
      formData.append('website', data.website || '');
      formData.append('location', data.location || '');
      formData.append('badge', data.badge || '');
      formData.append('services', data.services || '');
      formData.append('domains', data.domains || '');
      formData.append('details', data.details || '');
      formData.append('contact_email', data.contact_email || '');
      formData.append('contact_phone', data.contact_phone || '');
      formData.append('address', data.address || '');
      formData.append('active', String(data.active ? true : false));
      if (data.logoFile) {
        formData.append('logo_file', data.logoFile, data.logoFile.name);
      }
      console.debug('Creating filiale with FormData:', {
        name: data.name,
        location: data.location,
        active: data.active,
        hasLogo: !!data.logoFile
      });
      return await pb.collection('filiales').create(formData);
    } catch (error) {
      console.error('Error creating filiale:', error);
      if (error.response) {
        console.error('PocketBase response body:', error.response);
      }
      throw error;
    }
  },

  getAll: async (sortBy = '-created') => {
    try {
      return await pb.collection('filiales').getFullList({
        sort: sortBy,
        requestKey: null
      });
    } catch (error) {
      console.warn('⚠️ Filiales collection not found or error fetching filiales:', error.message);
      console.info('💡 Make sure the "filiales" collection exists in PocketBase with fields: name, description, website, location, badge, services, domains, details, contact_email, contact_phone, address, active, logo_file');
      // Return empty array instead of throwing to allow UI to function
      return [];
    }
  },

  getActive: async () => {
    try {
      console.log('🔍 Fetching active filiales with filter: active = true');
      const result = await pb.collection('filiales').getFullList({
        filter: 'active = true',
        sort: '-created',
        requestKey: null
      });
      console.log('✅ Active filiales fetched:', result);
      return result;
    } catch (error) {
      console.warn('⚠️ Error with filter, trying to fetch all filiales:', error.message);
      try {
        const allFiliales = await pb.collection('filiales').getFullList({
          sort: '-created',
          requestKey: null
        });
        console.log('📋 All filiales:', allFiliales);
        const activeOnly = allFiliales.filter(f => f.active === true || f.active === 'true' || f.active);
        console.log('🔄 Filtered active:', activeOnly);
        return activeOnly;
      } catch (e) {
        console.warn('⚠️ Error fetching all filiales:', e.message);
        return [];
      }
    }
  },

  getById: async (id) => {
    try {
      return await pb.collection('filiales').getOne(id);
    } catch (error) {
      console.error('Error fetching filiale with ID:', id, error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name || '');
      formData.append('description', data.description || '');
      formData.append('website', data.website || '');
      formData.append('location', data.location || '');
      formData.append('badge', data.badge || '');
      formData.append('services', data.services || '');
      formData.append('domains', data.domains || '');
      formData.append('details', data.details || '');
      formData.append('contact_email', data.contact_email || '');
      formData.append('contact_phone', data.contact_phone || '');
      formData.append('address', data.address || '');
      formData.append('active', String(data.active ? true : false));
      if (data.logoFile) {
        formData.append('logo_file', data.logoFile, data.logoFile.name);
      }
      return await pb.collection('filiales').update(id, formData);
    } catch (error) {
      console.error('Error updating filiale:', error);
      if (error.response) {
        console.error('PocketBase response body:', error.response);
      }
      throw error;
    }
  },

  delete: async (id) => {
    try {
      return await pb.collection('filiales').delete(id);
    } catch (error) {
      console.error('Error deleting filiale:', error);
      throw error;
    }
  }
};

export const generalAdminService = {
  // Récupérer tous les contacts de toutes les entités
  getAllContacts: async () => {
    try {
      console.log('📡 Récupération des contacts de toutes les entités...');
      
      // Récupérer les contacts individuellement avec gestion des erreurs
      let intersecContacts = [];
      let abYnnovContacts = [];
      let h2iContacts = [];

      try {
        intersecContacts = await intersecContactService.getAll();
        console.log('✅ Intersec contacts:', intersecContacts.length, intersecContacts);
      } catch (err) {
        console.error('❌ Erreur Intersec:', err);
      }

      try {
        abYnnovContacts = await abYnnovContactService.getAll();
        console.log('✅ AB\'Ynnov contacts:', abYnnovContacts.length, abYnnovContacts);
      } catch (err) {
        console.error('❌ Erreur AB\'Ynnov:', err);
      }

      try {
        h2iContacts = await h2iContactService.getAll();
        console.log('✅ H2I contacts:', h2iContacts.length, h2iContacts);
      } catch (err) {
        console.error('❌ Erreur H2I:', err);
      }

      // Ajouter l'entité à chaque contact
      const allContacts = [
        ...intersecContacts.map(c => ({ ...c, entity: 'intersec' })),
        ...abYnnovContacts.map(c => ({ ...c, entity: 'ab-ynnov' })),
        ...h2iContacts.map(c => ({ ...c, entity: 'h2i' }))
      ];

      console.log('📊 Total contacts agrégés:', allContacts.length);

      // Trier par date de création (plus récent en premier)
      return allContacts.sort((a, b) => new Date(b.created) - new Date(a.created));
    } catch (error) {
      console.error('Error fetching all contacts:', error);
      throw error;
    }
  },

  // Mettre à jour le statut d'un contact
  updateContactStatus: async (contactId, entity, status, response = null) => {
    try {
      const service = entity === 'intersec' ? intersecContactService :
                     entity === 'ab-ynnov' ? abYnnovContactService :
                     h2iContactService;

      // Utiliser updateStatus pour changer le statut
      let result = await service.updateStatus(contactId, status);
      
      // Ajouter une réponse admin si fournie
      if (response) {
        result = await service.addResponse(contactId, response);
      }

      return result;
    } catch (error) {
      console.error('Error updating contact status:', error);
      throw error;
    }
  },

  // Marquer un contact comme lu/non lu
  markContactAsRead: async (contactId, entity, isRead) => {
    try {
      const service = entity === 'intersec' ? intersecContactService :
                     entity === 'ab-ynnov' ? abYnnovContactService :
                     h2iContactService;

      // Utiliser markAsRead pour marquer comme lu (isRead = true)
      // Pour marquer comme non lu (isRead = false), appel direct à PocketBase
      if (isRead) {
        return await service.markAsRead(contactId);
      } else {
        // Appel direct pour marquer comme non lu
        const collectionName = entity === 'intersec' ? 'intersec_contacts' :
                              entity === 'ab-ynnov' ? 'ab_ynnov_contacts' :
                              'h2i_contacts';
        return await pb.collection(collectionName).update(contactId, { is_read: false });
      }
    } catch (error) {
      console.error('Error marking contact as read:', error);
      throw error;
    }
  }
};
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
