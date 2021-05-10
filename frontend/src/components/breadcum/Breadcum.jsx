import React from 'react';
import { useSelector } from 'react-redux';
import { ContentColumn } from '../../layouts/MainLayout/styles';
import { getCategories } from '../../store/search/selectors';
import CategoryLink from './CategoryLink';
import { BreadcumContainer } from './styles';

const Breadcum = () => {
  const categories = useSelector(getCategories);

  return (
    <ContentColumn>
      <BreadcumContainer>
        {
          categories && categories.map((category, i) => (
            <CategoryLink
              key={`categoryBreadcum.${category}`}
              name={category}
              printArrowhead={i < categories.length - 1}
            />
          ))
        }
      </BreadcumContainer>
    </ContentColumn>
  );
};

export default Breadcum;
