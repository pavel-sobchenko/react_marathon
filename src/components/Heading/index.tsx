import React from 'react';

interface IHeading {
    scale: string;
}

const Heading: React.FC<IHeading> = ({children, scale}) => {
    const Tag = `${scale}` as keyof JSX.IntrinsicElements;
    return <Tag>{children}</Tag>
};

export default Heading;
