import React from 'react';
import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';
import logoMain from '../imgs/logoMain.png';
import '../styles/styles.styl';

export const Navbar: React.FC = () => {
    return (
        <Tabs variant='line' size='lg'>
            <TabList>
        <img src={logoMain} className='logoMain' alt=''></img>
                <Tab>Статистика</Tab>
                <Tab>Вакансии</Tab>
                <Tab>Сотрудники</Tab>
                <Tab>Мероприятия</Tab>
                <Tab>Резюме</Tab>
                <Tab>Чат</Tab>
                <Tab>Календарь</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};
