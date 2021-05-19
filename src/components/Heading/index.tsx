import React from 'react';

interface IHeading {
    scale: string;
}

function renderSwitch(scale: string, text: any) {
    switch (scale) {
        case 'h1':
            return <h1>{text}</h1>;
            break;
        case 'h2':
            return <h2>{text}</h2>;
            break;
        case 'h3':
            return <h3>{text}</h3>;
            break;
        case 'h4':
            return <h4>{text}</h4>;
            break;
        case 'h5':
            return <h5>{text}</h5>;
            break;
        case 'h6':
            return <h6>{text}</h6>;
            break;
    }
}



const Heading: React.FC<IHeading> = ({children, scale}) => {
    const Tag = `${scale}` as keyof JSX.IntrinsicElements;
    return <Tag>{children}</Tag>
};

export default Heading;
