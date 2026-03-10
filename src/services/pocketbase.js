import PocketBase from 'pocketbase';

const pb = new PocketBase('http://localhost:8090');

// Authentification
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

// Contacts
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

// Partnership Requests
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
