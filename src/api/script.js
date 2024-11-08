const apiUrl = 'http://localhost:8081';

export async function registerStudent(student) {
    try {
        const response = await fetch(`${apiUrl}/registerStudent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });

        if (!response.ok) {
            throw new Error('Failed to register student for back');
        }

        return await response.json();
    } catch (error) {
        console.error('Error registering student:', error);
        throw error;
    }
}

export async function registerResponsible(responsible) {
    try {
        const response = await fetch(`${apiUrl}/registerResponsible`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(responsible),
        });

        if (!response.ok) {
            throw new Error('Failed to register responsible for back');
        }

        return await response.json();
    } catch (error) {
        console.error('Error registering responsible:', error);
        throw error;
    }
}
