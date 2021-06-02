import React from 'react';
import StandaloneCard from '../../components/PokemonCard/StandaloneCard';
import {useQueryParams } from 'hookrouter';

export interface PokemonProps {
    id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({id}) => {
    const [queryParams] = useQueryParams();
    const q = queryParams[0];
    return (
      <div>
          <div>
              This is pokemon {id}
          </div>
          <StandaloneCard index={q.index} name={q.name} url={q.url}/>
      </div>
    );
};

export default Pokemon;
