'use client';

import { Pagination } from '../Pagination/Pagination';
import { GuideCard } from '../GuideCard/GuideCard';
import { DictionaryKeys, Guide } from '../../UiGuidesList.types';
import { useGuideList } from './GuideList.hooks';
import { useDictionaryContext } from '../../../DictionaryProvider/DictionaryProvider';

type Props = {
  guides: Guide[];
  itemsPerPage: number;
};

export const GuideList = ({ guides, itemsPerPage }: Props) => {
  const {
    paginatedGuides,
    totalPages,
    currentPage,
    visiblePages,
    handlePageChange,
  } = useGuideList({ guides, itemsPerPage });

  const getDictionaryText = useDictionaryContext<DictionaryKeys>();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedGuides.map((guide, index) => (
          <GuideCard
            key={index}
            {...guide}
            labels={{
              guideLabel: getDictionaryText('dictionary_item__guide'),
              availableLabel: getDictionaryText('dictionary_item___available'),
              readGuideLabel: getDictionaryText('dictionary_item___read_guide'),
            }}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="w-full max-w-7xl mx-auto px-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            visiblePages={visiblePages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};
