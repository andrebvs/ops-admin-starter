export type ShellNavigationItem = {
  href: string;
  label: string;
  description: string;
};

export type ShellNavigationSection = {
  title: string;
  items: ShellNavigationItem[];
};
