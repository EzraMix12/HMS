// Default initial mock data if empty
if (!localStorage.getItem('pulse_patients')) {
    localStorage.setItem('pulse_patients', JSON.stringify([
        { id: 1, name: 'Juan Dela Cruz', age: 32, gender: 'Male', contact: '09171234567', history: 'None' },
        { id: 2, name: 'Maria Santos', age: 28, gender: 'Female', contact: '09189876543', history: 'Penicillin Allergy' }
    ]));
}

if (!localStorage.getItem('pulse_queue')) {
    localStorage.setItem('pulse_queue', JSON.stringify([
        { qNo: 101, patientId: 1, name: 'Juan Dela Cruz', doctor: 'Dr. Sarah Jenkins', purpose: 'General Checkup', status: 'Waiting' },
        { qNo: 102, patientId: 2, name: 'Maria Santos', doctor: 'Dr. Sarah Jenkins', purpose: 'Fever', status: 'Consultation' }
    ]));
}

function getPatients() {
    return JSON.parse(localStorage.getItem('pulse_patients')) || [];
}

function savePatients(patients) {
    localStorage.setItem('pulse_patients', JSON.stringify(patients));
}

function getQueue() {
    return JSON.parse(localStorage.getItem('pulse_queue')) || [];
}

function saveQueue(queue) {
    localStorage.setItem('pulse_queue', JSON.stringify(queue));
}