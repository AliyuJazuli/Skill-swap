const defaultStorageKeys = {
  theme: "skillswap-theme",
  users: "skillswap-users",
  currentUser: "skillswap-current-user",
  savedSkills: "skillswap-saved-skills",
  progress: "skillswap-progress",
  recentSkills: "skillswap-recent-skills",
  savedLessons: "skillswap-saved-lessons",
  timeSpent: "skillswap-time-spent",
  swapRequests: "skillswap-swap-requests",
  communities: "skillswap-communities",
  discussions: "skillswap-discussions"
};

export function createSkillCatalogEngine(skillCatalog, storageKeys = defaultStorageKeys) {
  const STORAGE_KEYS = storageKeys;

  function buildSkillLearningPath(skill) {
    const title = skill.title || "this skill";
    const lessonTitles = [
      `Start with ${title}`,
      `Practice ${title}`,
      `Build a mini project with ${title}`,
      `Review and improve your work`
    ];

    const lessonDetails = lessonTitles.map((lessonTitle, index) => ({
      title: lessonTitle,
      description: index === 0
        ? `Learn the basics of ${title} in a simple, guided way.`
        : index === 1
          ? `Try a quick exercise so the idea feels practical.`
          : index === 2
            ? `Apply what you learned in a small project.`
            : `Reflect on your progress and prepare for the next step.`,
      introduction: `This shortcut lesson introduces the core idea behind ${title}.`,
      why: `Learning ${title} in small steps makes it easier to understand and remember.`,
      simpleExplanation: `Focus on one concept at a time and practice it until it feels natural.`,
      analogy: `Think of it as building a strong base before adding more advanced ideas.`,
      visual: `Learn -> Practice -> Build -> Improve`,
      explanation: `You can follow this guided path from the first idea to a mini project without needing a long manual.`,
      examples: `Try one small example connected to ${title} and write down what you learned.`,
      interactive: `Complete one short task and keep your notes nearby so you can revisit them later.`,
      commonMistakes: ["Trying to learn everything at once", "Skipping practice", "Forgetting to review your notes"],
      memoryAid: "Small steps every day help you build momentum faster.",
      exercises: ["Write a short summary", "Try one exercise", "Create one tiny result"],
      quiz: {
        q: `What is the best first step when learning ${title}?`,
        options: ["Skip the basics", "Learn the foundation", "Wait for motivation", "Ignore practice"],
        answer: 1
      },
      miniProject: `Create a tiny project around ${title} that you can finish in one session.`,
      summary: `A guided shortcut path helps you learn ${title} from the beginning to a practical finish.`,
      revision: "Review the main idea, practice once more, and keep going.",
      nextLesson: index < lessonTitles.length - 1 ? lessonTitles[index + 1] : ""
    }));

    return {
      curriculum: {
        beginner: lessonDetails.slice(0, 2),
        intermediate: lessonDetails.slice(2, 4)
      },
      lessonDetails,
      lessons: lessonDetails.map((lesson) => lesson.title)
    };
  }

  function getSkillLessonEntries(skill) {
    if (Array.isArray(skill?.lessonDetails) && skill.lessonDetails.length) return skill.lessonDetails;
    if (skill?.curriculum && typeof skill.curriculum === "object") {
      return Object.values(skill.curriculum).flat().filter(Boolean);
    }

    const generated = buildSkillLearningPath(skill);
    skill.lessonDetails = generated.lessonDetails;
    skill.curriculum = generated.curriculum;
    skill.lessons = generated.lessons;
    return generated.lessonDetails;
  }

  function getSkillCurriculumSections(skill) {
    const lessonEntries = getSkillLessonEntries(skill);
    if (skill.curriculum && typeof skill.curriculum === "object" && !Array.isArray(skill.curriculum)) {
      return Object.entries(skill.curriculum);
    }

    const generated = buildSkillLearningPath(skill);
    skill.curriculum = generated.curriculum;
    skill.lessons = generated.lessons;
    return Object.entries(generated.curriculum);
  }

  function normalizeSkill(skill) {
    if (!skill) return skill;
    if (!skill.lessonDetails || !skill.lessonDetails.length) {
      const generated = buildSkillLearningPath(skill);
      skill.lessonDetails = generated.lessonDetails;
      skill.curriculum = generated.curriculum;
      skill.lessons = generated.lessons;
    }
    return skill;
  }

  function getSkillById(skillId) {
    const skill = skillCatalog.find((entry) => entry.id === skillId) || null;
    return skill ? normalizeSkill(skill) : null;
  }

  return {
    STORAGE_KEYS,
    skillCatalog,
    buildSkillLearningPath,
    getSkillLessonEntries,
    getSkillCurriculumSections,
    normalizeSkill,
    getSkillById,
    getAllSkills: () => skillCatalog
  };
}

export { defaultStorageKeys as STORAGE_KEYS };
