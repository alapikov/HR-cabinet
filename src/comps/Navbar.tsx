import React from 'react';
import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';
import logoMain from '../imgs/logoMain.png';
import '../styles/styles.styl';

export const Navbar: React.FC = () => {
    const customTabMargins = {paddingX: '0', marginX: '16px', className: 'defHover'};
    return (
        <Tabs variant='line' size='lg'>
            <TabList borderBottom='none'>
                <a href='https://niisva.dev'>
                    <img src={logoMain} className='logoMain' alt=''></img>
                </a>

                <Tab {...customTabMargins}>Статистика</Tab>
                <Tab {...customTabMargins}>Вакансии</Tab>
                <Tab {...customTabMargins}>Сотрудники</Tab>
                <Tab {...customTabMargins}>Мероприятия</Tab>
                <Tab {...customTabMargins}>Резюме</Tab>
                <Tab {...customTabMargins}>Чат</Tab>
                <Tab {...customTabMargins}>Календарь</Tab>
            </TabList>

            <TabPanels>
                <TabPanel id='tab1-stats'><p>tab1-stats!</p></TabPanel>
                <TabPanel id='tab2-vacancies'><p>tab2-vacancies!</p></TabPanel>
                <TabPanel id='tab3-employees'><p>tab3-employees!</p></TabPanel>
                <TabPanel id='tab4-events'>tab4-events</TabPanel>
                <TabPanel id='tab5-resume'><p>tab5-resume!</p></TabPanel>
                <TabPanel id='tab6-chat'><p>tab6-chat</p></TabPanel>
                <TabPanel id='tab6-calendar'><p>tab6-calendar!</p></TabPanel>
            </TabPanels>
        </Tabs>
    );
};
