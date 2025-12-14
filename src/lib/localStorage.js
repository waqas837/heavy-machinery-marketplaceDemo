// LocalStorage utilities for saving equipment data

const STORAGE_KEYS = {
  SAVED_EQUIPMENT: 'saved_equipment',
  SAVED_SEARCHES: 'saved_searches',
  USER_PREFERENCES: 'user_preferences',
};

export const saveEquipment = (equipment) => {
  try {
    const saved = getSavedEquipment();
    const exists = saved.find((item) => item.id === equipment.id);
    
    if (!exists) {
      const updated = [...saved, { ...equipment, savedAt: new Date().toISOString() }];
      localStorage.setItem(STORAGE_KEYS.SAVED_EQUIPMENT, JSON.stringify(updated));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error saving equipment:', error);
    return false;
  }
};

export const removeEquipment = (equipmentId) => {
  try {
    const saved = getSavedEquipment();
    const updated = saved.filter((item) => item.id !== equipmentId);
    localStorage.setItem(STORAGE_KEYS.SAVED_EQUIPMENT, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error('Error removing equipment:', error);
    return false;
  }
};

export const getSavedEquipment = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SAVED_EQUIPMENT);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting saved equipment:', error);
    return [];
  }
};

export const isEquipmentSaved = (equipmentId) => {
  const saved = getSavedEquipment();
  return saved.some((item) => item.id === equipmentId);
};

export const saveSearch = (searchQuery) => {
  try {
    const searches = getSavedSearches();
    const newSearch = {
      query: searchQuery,
      timestamp: new Date().toISOString(),
    };
    const updated = [newSearch, ...searches].slice(0, 10); // Keep last 10 searches
    localStorage.setItem(STORAGE_KEYS.SAVED_SEARCHES, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving search:', error);
  }
};

export const getSavedSearches = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SAVED_SEARCHES);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting saved searches:', error);
    return [];
  }
};

export const saveUserPreferences = (preferences) => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
  } catch (error) {
    console.error('Error saving preferences:', error);
  }
};

export const getUserPreferences = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error getting preferences:', error);
    return {};
  }
};

