export type HomeChecklistItem = {
  id: string;
  title: string;
  description: string;
};

export type HomeContent = {
  eyebrow: string;
  title: string;
  description: string;
  checklist: HomeChecklistItem[];
};
