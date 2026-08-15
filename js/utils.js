import { STORAGE_KEYS } from './data.js';

export function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

export function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getCurrentUser() {
  return readStorage(STORAGE_KEYS.currentUser, null);
}

export function saveCurrentUser(user) {
  writeStorage(STORAGE_KEYS.currentUser, user);
}

export function getUsers() {
  return readStorage(STORAGE_KEYS.users, []);
}

export function saveUsers(users) {
  writeStorage(STORAGE_KEYS.users, users);
}

export function getSavedSkills() {
  return readStorage(STORAGE_KEYS.savedSkills, []);
}

export function saveSavedSkills(skills) {
  writeStorage(STORAGE_KEYS.savedSkills, skills);
}

export function getSkillProgressMap() {
  return readStorage(STORAGE_KEYS.progress, {});
}

export function saveSkillProgressMap(value) {
  writeStorage(STORAGE_KEYS.progress, value);
}

export function getSkillProgress(skillId) {
  const progressMap = getSkillProgressMap();
  return progressMap[skillId] || { completedLessons: [], activeLesson: "", notes: "" };
}

export function saveSkillProgress(skillId, updates) {
  const progressMap = getSkillProgressMap();
  const current = getSkillProgress(skillId);
  const timestamp = Date.now();
  progressMap[skillId] = { ...current, ...updates, lastUpdated: timestamp };
  saveSkillProgressMap(progressMap);
  return progressMap[skillId];
}

export function addTimeSpent(skillId, seconds) {
  const map = readStorage(STORAGE_KEYS.timeSpent, {});
  map[skillId] = (map[skillId] || 0) + seconds;
  writeStorage(STORAGE_KEYS.timeSpent, map);
}

export function getLearningStreak() {
  const progressMap = getSkillProgressMap();
  const days = new Set();
  Object.values(progressMap).forEach((entry) => {
    if (entry.lastUpdated) days.add(formatDateKey(entry.lastUpdated));
  });
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const check = new Date(today);
    check.setDate(today.getDate() - i);
    const key = formatDateKey(check.getTime());
    if (days.has(key)) streak++; else break;
  }
  return streak;
}

function formatDateKey(ms) {
  const d = new Date(ms);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getSavedLessons() {
  return readStorage(STORAGE_KEYS.savedLessons, []);
}

export function saveSavedLessons(list) {
  writeStorage(STORAGE_KEYS.savedLessons, list);
}

export function toggleLessonBookmark(skillId, lessonTitle) {
  const key = `${skillId}::${lessonTitle}`;
  const saved = getSavedLessons();
  const idx = saved.indexOf(key);
  if (idx >= 0) {
    saved.splice(idx, 1);
  } else {
    saved.push(key);
  }
  saveSavedLessons(saved);
  return idx < 0;
}

export function isLessonBookmarked(skillId, lessonTitle) {
  const key = `${skillId}::${lessonTitle}`;
  return getSavedLessons().includes(key);
}

export function getRecentlyViewed() {
  return readStorage(STORAGE_KEYS.recentSkills, []);
}

export function saveRecentlyViewed(skills) {
  writeStorage(STORAGE_KEYS.recentSkills, skills);
}

export function addRecentlyViewed(skillId) {
  const recent = getRecentlyViewed().filter((id) => id !== skillId);
  recent.unshift(skillId);
  saveRecentlyViewed(recent.slice(0, 4));
}
