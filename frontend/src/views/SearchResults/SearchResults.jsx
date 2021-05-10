import React from 'react';
import { useSelector } from 'react-redux';
import { ResultsContainerCard } from './styles';
import { ContentColumn } from '../../layouts/MainLayout/styles';
import { getSearchResults } from '../../store/search/selectors';
import ItemSummary from './components/ItemRow';

const SearchResults = () => {
  const results = useSelector(getSearchResults);

  return (
    <ContentColumn>
      <ResultsContainerCard>
        {
          results.map((item) => (
            <ItemSummary
              data={item}
              key={`searchItem.${item.id}`}
            />
          ))
        }
      </ResultsContainerCard>
    </ContentColumn>
  );
};

export default SearchResults;
