import React from 'react';

export interface EmptyPageProps {
    title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({title}) => {
    return (
      <div>
          <div>
            This is an empty page for {title} !
          </div>
      </div>
    );
};

export default EmptyPage;
