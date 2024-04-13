import React from 'react';
import {Comp1} from './comps/Comp1';
import {Comp2} from './comps/Comp2';
import {Comp3} from './comps/Comp3';
import './styles.styl';

export const App: React.FC = () => {
    return (
        <>
            <div>Раз раз раз</div>
            <Comp1 />
            <Comp2 />
            <Comp3 />
        </>
    );
};
