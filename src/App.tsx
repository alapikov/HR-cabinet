import React from 'react';
import {Navbar} from './comps/Navbar';
import {ChakraProvider} from '@chakra-ui/react';
import './styles/styles.styl';

export const App: React.FC = () => {
    return (
        <ChakraProvider>
            <Navbar />
        </ChakraProvider>
    );
};
