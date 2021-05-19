import React from 'react';
import Header from '../Header';

export interface EmptyPageProps {
    title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({title}) => {
    return (
      <div>
          <Header />
          <div>
            This is an empty page for {title} !
          </div>
      </div>
    );
};

export default EmptyPage;
