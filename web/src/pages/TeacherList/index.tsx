import React from 'react';


import './styles.css';
import PageHeader from '../../components/PageHeader';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers"></form>
            </PageHeader>
        </div>
    )
}

export default TeacherList;