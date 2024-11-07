import React from 'react';
import './styles/App.css';
import StudentForm from './components/StudentForm';
import ResponsibleForm from './components/ResponsibleForm';

function App() {
    return (
        <div>
            <div className="content-form">
                <StudentForm />  {/* No es necesario pasar registerStudent */}
                <ResponsibleForm />  {/* No es necesario pasar registerResponsible */}
            </div>
        </div>
    );
}

export default App;
