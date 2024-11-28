// Handle job search form submission
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById('job-search').value.trim();
    if (searchTerm) {
        alert(`Searching for jobs related to: "${searchTerm}"`);
    } else {
        alert("Please enter a keyword to search.");
    }
});

// Handle "Apply Now" button click
function applyNow(jobId) {
    alert(`You have applied for the job with ID: ${jobId}`);
}
