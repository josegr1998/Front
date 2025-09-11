import { DictionaryProvider } from '../DictionaryProvider/DictionaryProvider';
import { UiGuidesListProps } from './UiGuidesList.types';
import { GuideList } from './components/GuideList/GuideList';
import { GuideListHeader } from './components/GuideListHeader/GuideListHeader';
import { NoCardsAvailable } from './components/NoCardsAvailable/NoCardsAvailable';

export const UiGuidesList = ({
  title,
  guides,
  itemsPerPage,
  dictionary,
}: UiGuidesListProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <DictionaryProvider dictionary={dictionary}>
        {/* Header */}
        <GuideListHeader title={title} />

        {/* Guides Grid */}
        <GuideList guides={guides} itemsPerPage={itemsPerPage} />

        {/* Empty State */}
        {guides.length === 0 && <NoCardsAvailable />}
      </DictionaryProvider>
    </section>
  );
};
