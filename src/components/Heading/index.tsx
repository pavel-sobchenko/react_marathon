import React from 'react';

interface IHeading {
    scale: string;
    className?: string;
}

const Heading: React.FC<IHeading> = ({children, scale, className}) => {
    const Tag = `${scale}` as keyof JSX.IntrinsicElements;
    return <div className={className}><Tag>{children}</Tag></div>
};

export default Heading;
