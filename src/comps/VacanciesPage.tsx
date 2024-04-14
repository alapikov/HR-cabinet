import React from 'react';
import '../styles/styles.styl';


export const VacanciesPage: React.FC = () => {

    

    return (
        <div>
            Это страница вакансий
            <script className="hh-script" src="https://api.hh.ru/widgets/vacancies/search?count=3&locale=RU&text="></script>
        </div>
    )
}