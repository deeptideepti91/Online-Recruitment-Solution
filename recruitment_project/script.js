const candidatesData = [
    { name: 'Suchitra', location: 'Himachal', jobRole: 'Software Engineer' },
    { name: 'Anjali', location: 'Punjab', jobRole: 'Cyber Security' },
    { name: 'Arpita', location: 'Australia', jobRole: 'Data Scientist' },
    { name: 'Babli', location: 'Mumbai', jobRole: 'UI/UX Designer' },
    { name: 'Vikas', location: 'Pune', jobRole: 'Product Manager' },
    { name: 'Mayank', location: 'Haryana', jobRole: 'Hacker' },
    { name: 'Sumit', location: 'Rohtak', jobRole: 'Bussiness-man' },
    { name: 'Smith Jon', location: 'USA', jobRole: 'Web Developer' },
];

function searchCandidates() {
    // Clear previous search results
    document.getElementById('candidates').innerHTML = '';

    // Get search criteria values
    const location = document.getElementById('location').value.toLowerCase();
    const jobRole = document.getElementById('job-role').value.toLowerCase();

    // Filter candidates based on search criteria
    const filteredCandidates = candidatesData.filter(candidate =>
        candidate.location.toLowerCase().includes(location) &&
        candidate.jobRole.toLowerCase().includes(jobRole)
    );

    // Display search results
    filteredCandidates.forEach(candidate => {
        const listItem = document.createElement('li');
        listItem.textContent = `${candidate.name} - ${candidate.location} - ${candidate.jobRole}`;
        document.getElementById('candidates').appendChild(listItem);
    });
}
