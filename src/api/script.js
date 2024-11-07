const apiUrl = 'http://localhost:8081';

export async function registerStudent(student) {
    try {
        const response = await fetch(`registerStudent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });

        if (!response.ok) {
            throw new Error('Failed to register student');
        }

        return await response.json();
    } catch (error) {
        console.error('Error registering student:', error);
        throw error;
    }
}

export async function registerResponsible(responsible) {
    try {
        const response = await fetch(`registerResponsible`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(responsible),
        });

        if (!response.ok) {
            throw new Error('Failed to register responsible');
        }

        return await response.json();
    } catch (error) {
        console.error('Error registering responsible:', error);
        throw error;
    }
}
