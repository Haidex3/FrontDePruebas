const apiUrl = 'http://localhost:8081';

async function registerStudent() {
    const student = {
        id: document.getElementById('studentId').value,
        name: document.getElementById('studentName').value,
        course: document.getElementById('course').value,
        academicYear: parseInt(document.getElementById('academicYear').value),
        responsible: null, // Placeholder, set null if no responsible
        relationWhitResponsible: document.getElementById('relationWithResponsible').value
    };

    try {
        const response = await fetch(``, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        });

        const result = await response.json();
        document.getElementById('responseMessage').innerText = result.message;
    } catch (error) {
        console.error('Error:', error);
    }
}


async function registerResponsible() {
    const responsible = {
        name: document.getElementById('responsibleName').value,
        email: document.getElementById('responsibleEmail').value,
        phoneNumber: document.getElementById('responsiblePhone').value,
        address: document.getElementById('responsibleAddress').value,
        document: document.getElementById('responsibleDocument').value,
        typeDocument: document.getElementById('typeDocument').value
    };

    try {
        const response = await fetch(``, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(responsible)
        });

        const result = await response.json();
        document.getElementById('responseMessage').innerText = result.message;
    } catch (error) {
        console.error('Error:', error);
    }
}




