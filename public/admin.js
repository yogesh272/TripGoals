// Admin Panel JavaScript

// Admin Authentication Check
function checkAdminAccess() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser.isAdmin) {
        alert('Access denied. Admin privileges required.');
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// Initialize Admin Panel
function loadAdminData() {
    if (!checkAdminAccess()) return;
    
    loadAdminPackages();
    loadAdminPosters();
    loadAdminPolls();
    updateAnalytics();
    showSection('packages');
}

// Admin Navigation
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.admin-nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Show selected section
    const activeSection = document.getElementById(sectionName + 'Section');
    if (activeSection) {
        activeSection.classList.add('active');
    }
    
    // Add active class to clicked nav link
    const activeNavLink = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }
}

// Package Management
function loadAdminPackages() {
    loadPackageTab('main');
}

function showPackageTab(tabType) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    const activeTab = document.getElementById(tabType + 'PackagesTab');
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Load packages for the selected tab
    loadPackageTab(tabType);
}

function loadPackageTab(tabType) {
    let packages = [];
    let containerId = '';
    
    switch(tabType) {
        case 'main':
            packages = mainPackages;
            containerId = 'adminMainPackages';
            break;
        case 'special':
            packages = specialPackages;
            containerId = 'adminSpecialPackages';
            break;
        case 'adventure':
            packages = adventureActivities;
            containerId = 'adminAdventurePackages';
            break;
    }
    
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = packages.map(pkg => createAdminPackageCard(pkg)).join('');
    }
}

function createAdminPackageCard(pkg) {
    return `
        <div class="admin-package-card">
            <div class="admin-package-image">
                <img src="${pkg.image}" alt="${pkg.title}">
            </div>
            <div class="admin-package-content">
                <h3>${pkg.title}</h3>
                <p>${pkg.subtitle}</p>
                <div class="admin-package-meta">
                    <span>₹${pkg.price.toLocaleString()}</span>
                    <span>${pkg.duration} days</span>
                </div>
                <div class="admin-package-actions">
                    <button class="edit-btn" onclick="editPackage(${pkg.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="delete-btn" onclick="deletePackage(${pkg.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    `;
}

function showAddPackageModal() {
    document.getElementById('packageModalTitle').textContent = 'Add New Package';
    document.getElementById('packageId').value = '';
    document.getElementById('packageForm').reset();
    document.getElementById('packageModal').style.display = 'block';
}

function editPackage(packageId) {
    const allPackages = [...mainPackages, ...specialPackages, ...adventureActivities];
    const pkg = allPackages.find(p => p.id === packageId);
    
    if (pkg) {
        document.getElementById('packageModalTitle').textContent = 'Edit Package';
        document.getElementById('packageId').value = pkg.id;
        document.getElementById('packageTitle').value = pkg.title;
        document.getElementById('packageSubtitle').value = pkg.subtitle;
        document.getElementById('packageCategory').value = pkg.category;
        document.getElementById('packagePrice').value = pkg.price;
        document.getElementById('packageImage').value = pkg.image;
        document.getElementById('packageDescription').value = pkg.description;
        document.getElementById('packageDuration').value = pkg.duration;
        document.getElementById('packageInclusions').value = pkg.inclusions.join(', ');
        document.getElementById('packageModal').style.display = 'block';
    }
}

function deletePackage(packageId) {
    if (confirm('Are you sure you want to delete this package?')) {
        // Remove from appropriate array
        mainPackages = mainPackages.filter(p => p.id !== packageId);
        specialPackages = specialPackages.filter(p => p.id !== packageId);
        adventureActivities = adventureActivities.filter(p => p.id !== packageId);
        
        // Reload the current tab
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) {
            const tabType = activeTab.textContent.toLowerCase().includes('main') ? 'main' :
                           activeTab.textContent.toLowerCase().includes('special') ? 'special' : 'adventure';
            loadPackageTab(tabType);
        }
        
        updateAnalytics();
        alert('Package deleted successfully!');
    }
}

function savePackage(event) {
    event.preventDefault();
    
    const packageId = document.getElementById('packageId').value;
    const packageData = {
        id: packageId ? parseInt(packageId) : Date.now(),
        title: document.getElementById('packageTitle').value,
        subtitle: document.getElementById('packageSubtitle').value,
        category: document.getElementById('packageCategory').value,
        price: parseInt(document.getElementById('packagePrice').value),
        image: document.getElementById('packageImage').value,
        description: document.getElementById('packageDescription').value,
        duration: parseInt(document.getElementById('packageDuration').value),
        inclusions: document.getElementById('packageInclusions').value.split(',').map(s => s.trim()).filter(s => s)
    };
    
    if (packageId) {
        // Edit existing package
        const allArrays = [mainPackages, specialPackages, adventureActivities];
        for (let arr of allArrays) {
            const index = arr.findIndex(p => p.id === parseInt(packageId));
            if (index !== -1) {
                arr[index] = packageData;
                break;
            }
        }
    } else {
        // Add new package
        switch(packageData.category) {
            case 'main':
                mainPackages.push(packageData);
                break;
            case 'special':
                specialPackages.push(packageData);
                break;
            case 'adventure':
                adventureActivities.push(packageData);
                break;
        }
    }
    
    closeModal('packageModal');
    loadAdminPackages();
    updateAnalytics();
    alert(packageId ? 'Package updated successfully!' : 'Package added successfully!');
}

// Poster Management
function loadAdminPosters() {
    const container = document.getElementById('adminPosters');
    if (container) {
        container.innerHTML = posters.map(poster => createAdminPosterCard(poster)).join('');
    }
}

function createAdminPosterCard(poster) {
    return `
        <div class="admin-poster-card">
            <div class="admin-poster-image">
                <img src="${poster.image}" alt="${poster.title}">
            </div>
            <div class="admin-poster-content">
                <h3>${poster.title}</h3>
                <p>${poster.description}</p>
                <span class="poster-position">${poster.position}</span>
                <div class="admin-poster-actions">
                    <button class="edit-btn" onclick="editPoster(${poster.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="delete-btn" onclick="deletePoster(${poster.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    `;
}

function showAddPosterModal() {
    document.getElementById('posterModalTitle').textContent = 'Add New Poster';
    document.getElementById('posterId').value = '';
    document.getElementById('posterForm').reset();
    document.getElementById('posterModal').style.display = 'block';
}

function editPoster(posterId) {
    const poster = posters.find(p => p.id === posterId);
    
    if (poster) {
        document.getElementById('posterModalTitle').textContent = 'Edit Poster';
        document.getElementById('posterId').value = poster.id;
        document.getElementById('posterTitle').value = poster.title;
        document.getElementById('posterDescription').value = poster.description;
        document.getElementById('posterImage').value = poster.image;
        document.getElementById('posterLink').value = poster.link || '';
        document.getElementById('posterPosition').value = poster.position;
        document.getElementById('posterModal').style.display = 'block';
    }
}

function deletePoster(posterId) {
    if (confirm('Are you sure you want to delete this poster?')) {
        posters = posters.filter(p => p.id !== posterId);
        loadAdminPosters();
        updateAnalytics();
        alert('Poster deleted successfully!');
    }
}

function savePoster(event) {
    event.preventDefault();
    
    const posterId = document.getElementById('posterId').value;
    const posterData = {
        id: posterId ? parseInt(posterId) : Date.now(),
        title: document.getElementById('posterTitle').value,
        description: document.getElementById('posterDescription').value,
        image: document.getElementById('posterImage').value,
        link: document.getElementById('posterLink').value,
        position: document.getElementById('posterPosition').value
    };
    
    if (posterId) {
        // Edit existing poster
        const index = posters.findIndex(p => p.id === parseInt(posterId));
        if (index !== -1) {
            posters[index] = posterData;
        }
    } else {
        // Add new poster
        posters.push(posterData);
    }
    
    closeModal('posterModal');
    loadAdminPosters();
    updateAnalytics();
    alert(posterId ? 'Poster updated successfully!' : 'Poster added successfully!');
}

// Poll Management
function loadAdminPolls() {
    const container = document.getElementById('adminPolls');
    if (container) {
        container.innerHTML = polls.map(poll => createAdminPollCard(poll)).join('');
    }
}

function createAdminPollCard(poll) {
    const totalVotes = poll.votes.reduce((sum, votes) => sum + votes, 0);
    
    return `
        <div class="admin-poll-card">
            <div class="admin-poll-content">
                <h3>${poll.question}</h3>
                <div class="poll-options-admin">
                    ${poll.options.map((option, index) => `
                        <div class="poll-option-admin">
                            <span>${option}</span>
                            <span>${poll.votes[index]} votes</span>
                        </div>
                    `).join('')}
                </div>
                <div class="poll-stats-admin">
                    <span>Total votes: ${totalVotes}</span>
                    <span>Status: ${poll.isActive ? 'Active' : 'Inactive'}</span>
                </div>
                <div class="admin-poll-actions">
                    <button class="edit-btn" onclick="editPoll(${poll.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="toggle-btn" onclick="togglePoll(${poll.id})">
                        <i class="fas fa-toggle-${poll.isActive ? 'on' : 'off'}"></i> 
                        ${poll.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                    <button class="delete-btn" onclick="deletePoll(${poll.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    `;
}

function showAddPollModal() {
    document.getElementById('pollModalTitle').textContent = 'Create New Poll';
    document.getElementById('pollId').value = '';
    document.getElementById('pollForm').reset();
    
    // Reset poll options to default 2
    const pollOptionsContainer = document.getElementById('pollOptions');
    pollOptionsContainer.innerHTML = `
        <input type="text" class="poll-option" placeholder="Option 1" required>
        <input type="text" class="poll-option" placeholder="Option 2" required>
    `;
    
    document.getElementById('pollModal').style.display = 'block';
}

function editPoll(pollId) {
    const poll = polls.find(p => p.id === pollId);
    
    if (poll) {
        document.getElementById('pollModalTitle').textContent = 'Edit Poll';
        document.getElementById('pollId').value = poll.id;
        document.getElementById('pollQuestion').value = poll.question;
        document.getElementById('pollMultiple').checked = poll.allowMultiple;
        
        // Populate poll options
        const pollOptionsContainer = document.getElementById('pollOptions');
        pollOptionsContainer.innerHTML = poll.options.map((option, index) => 
            `<input type="text" class="poll-option" placeholder="Option ${index + 1}" value="${option}" required>`
        ).join('');
        
        document.getElementById('pollModal').style.display = 'block';
    }
}

function addPollOption() {
    const pollOptionsContainer = document.getElementById('pollOptions');
    const optionCount = pollOptionsContainer.children.length + 1;
    
    const newOption = document.createElement('input');
    newOption.type = 'text';
    newOption.className = 'poll-option';
    newOption.placeholder = `Option ${optionCount}`;
    newOption.required = true;
    
    pollOptionsContainer.appendChild(newOption);
}

function togglePoll(pollId) {
    const poll = polls.find(p => p.id === pollId);
    if (poll) {
        poll.isActive = !poll.isActive;
        loadAdminPolls();
        alert(`Poll ${poll.isActive ? 'activated' : 'deactivated'} successfully!`);
    }
}

function deletePoll(pollId) {
    if (confirm('Are you sure you want to delete this poll?')) {
        polls = polls.filter(p => p.id !== pollId);
        loadAdminPolls();
        updateAnalytics();
        alert('Poll deleted successfully!');
    }
}

function savePoll(event) {
    event.preventDefault();
    
    const pollId = document.getElementById('pollId').value;
    const pollOptions = Array.from(document.querySelectorAll('.poll-option')).map(input => input.value.trim()).filter(value => value);
    
    if (pollOptions.length < 2) {
        alert('Please provide at least 2 options for the poll.');
        return;
    }
    
    const pollData = {
        id: pollId ? parseInt(pollId) : Date.now(),
        question: document.getElementById('pollQuestion').value,
        options: pollOptions,
        votes: pollId ? polls.find(p => p.id === parseInt(pollId)).votes : new Array(pollOptions.length).fill(0),
        isActive: true,
        allowMultiple: document.getElementById('pollMultiple').checked
    };
    
    if (pollId) {
        // Edit existing poll
        const index = polls.findIndex(p => p.id === parseInt(pollId));
        if (index !== -1) {
            // Preserve existing votes, adjust array if options changed
            const existingPoll = polls[index];
            if (existingPoll.votes.length !== pollOptions.length) {
                pollData.votes = new Array(pollOptions.length).fill(0);
            } else {
                pollData.votes = existingPoll.votes;
            }
            polls[index] = pollData;
        }
    } else {
        // Add new poll
        polls.push(pollData);
    }
    
    closeModal('pollModal');
    loadAdminPolls();
    updateAnalytics();
    alert(pollId ? 'Poll updated successfully!' : 'Poll created successfully!');
}

// Analytics
function updateAnalytics() {
    const totalPackagesElement = document.getElementById('totalPackages');
    const totalPostersElement = document.getElementById('totalPosters');
    const totalPollsElement = document.getElementById('totalPolls');
    
    if (totalPackagesElement) {
        const totalPackages = mainPackages.length + specialPackages.length + adventureActivities.length;
        totalPackagesElement.textContent = totalPackages;
    }
    
    if (totalPostersElement) {
        totalPostersElement.textContent = posters.length;
    }
    
    if (totalPollsElement) {
        const activePolls = polls.filter(poll => poll.isActive).length;
        totalPollsElement.textContent = activePolls;
    }
}

// Initialize admin panel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('admin.html')) {
        loadAdminData();
    }
});