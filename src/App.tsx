import React from 'react';
import {Navbar} from './comps/Navbar';
import {ChakraProvider} from '@chakra-ui/react';
import './styles/styles.styl';

export const App: React.FC = () => {
    setTimeout(() => {
        const root = document.getElementById('root');
        root?.classList.add('appeared')
    }, 600);

    return (
        <ChakraProvider>
            <Navbar />
        </ChakraProvider>
    );
};
