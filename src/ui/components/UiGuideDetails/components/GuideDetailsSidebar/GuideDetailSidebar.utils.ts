export const scrollToChapter = ({ chapterIndex }: { chapterIndex: number }) => {
  const element = document.getElementById(`chapter-${chapterIndex + 1}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
