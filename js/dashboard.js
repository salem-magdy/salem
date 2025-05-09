// Dashboard JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Initialize counters
    initCounters();
    
    // Initialize charts
    initTechnicalSkillsChart();
    initSoftSkillsChart();
    initProjectTimelineChart();
    initProjectCategoriesChart();
    initTechnologiesChart();
    
    // Initialize growth bars
    initGrowthBars();
    
    // Initialize skills network
    initSkillsNetwork();
});

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 30); // Update every 30ms
        
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            counter.textContent = Math.round(current);
            
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 30);
    });
}

// Growth Bars Animation
function initGrowthBars() {
    const growthBars = document.querySelectorAll('.growth-progress');
    
    // Function to check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };
    
    // Initial check
    growthBars.forEach(bar => {
        if (isInViewport(bar)) {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress;
        }
    });
    
    // Check on scroll
    window.addEventListener('scroll', () => {
        growthBars.forEach(bar => {
            if (isInViewport(bar) && bar.style.width === '') {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress;
            }
        });
    });
}

// Technical Skills Chart
function initTechnicalSkillsChart() {
    const ctx = document.getElementById('technicalSkillsChart');
    
    if (!ctx) return;
    
    // Check if dark mode is active
    const isDarkMode = document.body.classList.contains('dark-mode');
    const textColor = isDarkMode ? '#f9fafb' : '#1f2937';
    const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX', 'Git'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 85, 80, 85, 70, 75],
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                borderColor: '#4f46e5',
                pointBackgroundColor: '#4f46e5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#4f46e5'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: gridColor
                    },
                    grid: {
                        color: gridColor
                    },
                    pointLabels: {
                        color: textColor
                    },
                    ticks: {
                        color: textColor,
                        backdropColor: 'transparent'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Soft Skills Chart
function initSoftSkillsChart() {
    const ctx = document.getElementById('softSkillsChart');
    
    if (!ctx) return;
    
    // Check if dark mode is active
    const isDarkMode = document.body.classList.contains('dark-mode');
    const textColor = isDarkMode ? '#f9fafb' : '#1f2937';
    
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Communication', 'Problem Solving', 'Teamwork', 'Creativity', 'Time Management'],
            datasets: [{
                data: [85, 90, 80, 88, 75],
                backgroundColor: [
                    'rgba(79, 70, 229, 0.7)',
                    'rgba(129, 140, 248, 0.7)',
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    ticks: {
                        color: textColor,
                        backdropColor: 'transparent'
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Project Timeline Chart
function initProjectTimelineChart() {
    const ctx = document.getElementById('projectTimelineChart');
    
    if (!ctx) return;
    
    // Check if dark mode is active
    const isDarkMode = document.body.classList.contains('dark-mode');
    const textColor = isDarkMode ? '#f9fafb' : '#1f2937';
    const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Projects Completed',
                data: [1, 0, 2, 1, 3, 2, 0, 1, 2, 1, 0, 2],
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        color: gridColor
                    },
                    ticks: {
                        color: textColor
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: gridColor
                    },
                    ticks: {
                        color: textColor,
                        precision: 0
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Project Categories Chart
function initProjectCategoriesChart() {
    const ctx = document.getElementById('projectCategoriesChart');
    
    if (!ctx) return;
    
    // Check if dark mode is active
    const isDarkMode = document.body.classList.contains('dark-mode');
    const textColor = isDarkMode ? '#f9fafb' : '#1f2937';
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Web Development', 'UI/UX Design', 'Mobile Apps', 'Other'],
            datasets: [{
                data: [8, 4, 2, 1],
                backgroundColor: [
                    '#4f46e5',
                    '#818cf8',
                    '#60a5fa',
                    '#93c5fd'
                ],
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: textColor
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%'
        }
    });
}

// Technologies Chart
function initTechnologiesChart() {
    const ctx = document.getElementById('technologiesChart');
    
    if (!ctx) return;
    
    // Check if dark mode is active
    const isDarkMode = document.body.classList.contains('dark-mode');
    const textColor = isDarkMode ? '#f9fafb' : '#1f2937';
    const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Vue.js', 'Angular'],
            datasets: [{
                label: 'Projects',
                data: [15, 12, 8, 6, 4, 3],
                backgroundColor: [
                    'rgba(79, 70, 229, 0.7)',
                    'rgba(129, 140, 248, 0.7)',
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(239, 68, 68, 0.7)'
                ],
                borderWidth: 0,
                borderRadius: 5
            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: textColor
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: gridColor
                    },
                    ticks: {
                        color: textColor,
                        precision: 0
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Skills Network
function initSkillsNetwork() {
    const container = document.getElementById('skillsNetwork');
    
    if (!container) return;
    
    // Skills data
    const skills = [
        { id: 1, name: 'HTML', level: 90, category: 'frontend', description: 'Markup language for creating web pages' },
        { id: 2, name: 'CSS', level: 85, category: 'frontend', description: 'Style sheet language for designing web pages' },
        { id: 3, name: 'JavaScript', level: 80, category: 'frontend', description: 'Programming language for web development' },
        { id: 4, name: 'UI/UX', level: 70, category: 'design', description: 'User interface and experience design' },
        { id: 5, name: 'Git', level: 75, category: 'tools', description: 'Version control system' },
        { id: 6, name: 'Responsive', level: 85, category: 'frontend', description: 'Responsive web design techniques' },
        { id: 7, name: 'React', level: 75, category: 'frontend', description: 'JavaScript library for building user interfaces' },
        { id: 8, name: 'Node.js', level: 65, category: 'backend', description: 'JavaScript runtime environment' },
        { id: 9, name: 'Figma', level: 60, category: 'design', description: 'Design tool for UI/UX' },
        { id: 10, name: 'SEO', level: 55, category: 'marketing', description: 'Search engine optimization techniques' }
    ];
    
    // Connections between skills
    const connections = [
        { source: 1, target: 2 },
        { source: 1, target: 3 },
        { source: 2, target: 3 },
        { source: 2, target: 6 },
        { source: 3, target: 7 },
        { source: 3, target: 8 },
        { source: 4, target: 9 },
        { source: 4, target: 6 },
        { source: 5, target: 7 },
        { source: 5, target: 8 },
        { source: 7, target: 8 },
        { source: 9, target: 10 }
    ];
    
    // Category colors
    const categoryColors = {
        frontend: '#4f46e5',
        backend: '#10b981',
        design: '#f59e0b',
        tools: '#6366f1',
        marketing: '#ef4444'
    };
    
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip';
    container.appendChild(tooltip);
    
    // Create nodes
    skills.forEach(skill => {
        const node = document.createElement('div');
        node.className = 'skill-node';
        node.textContent = skill.name;
        
        // Size based on skill level
        const size = 40 + (skill.level / 10);
        node.style.width = `${size}px`;
        node.style.height = `${size}px`;
        
        // Color based on category
        node.style.backgroundColor = categoryColors[skill.category];
        node.style.color = 'white';
        
        // Random position
        const containerWidth = container.clientWidth - size;
        const containerHeight = container.clientHeight - size;
        const left = Math.random() * containerWidth;
        const top = Math.random() * containerHeight;
        
        node.style.left = `${left}px`;
        node.style.top = `${top}px`;
        
        // Store position and skill data
        node.dataset.id = skill.id;
        node.dataset.x = left + (size / 2);
        node.dataset.y = top + (size / 2);
        
        // Tooltip functionality
        node.addEventListener('mouseenter', () => {
            tooltip.textContent = `${skill.name}: ${skill.description} (${skill.level}%)`;
            tooltip.style.opacity = '1';
            
            // Position tooltip
            const rect = node.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            tooltip.style.left = `${rect.left - containerRect.left + size/2}px`;
            tooltip.style.top = `${rect.top - containerRect.top - 40}px`;
            tooltip.style.transform = 'translateX(-50%)';
        });
        
        node.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
        
        container.appendChild(node);
    });
    
    // Create connections after all nodes are positioned
    setTimeout(() => {
        connections.forEach(conn => {
            const sourceNode = container.querySelector(`.skill-node[data-id="${conn.source}"]`);
            const targetNode = container.querySelector(`.skill-node[data-id="${conn.target}"]`);
            
            if (sourceNode && targetNode) {
                const sourceX = parseFloat(sourceNode.dataset.x);
                const sourceY = parseFloat(sourceNode.dataset.y);
                const targetX = parseFloat(targetNode.dataset.x);
                const targetY = parseFloat(targetNode.dataset.y);
                
                // Calculate length and angle
                const dx = targetX - sourceX;
                const dy = targetY - sourceY;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                
                // Create connection line
                const connection = document.createElement('div');
                connection.className = 'skill-connection';
                connection.style.width = `${length}px`;
                connection.style.left = `${sourceX}px`;
                connection.style.top = `${sourceY}px`;
                connection.style.transform = `rotate(${angle}deg)`;
                
                container.appendChild(connection);
            }
        });
    }, 100);
    
    // Add some interactivity - drag effect
    let isDragging = false;
    let selectedNode = null;
    let offsetX, offsetY;
    
    container.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('skill-node')) {
            isDragging = true;
            selectedNode = e.target;
            
            const rect = selectedNode.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            
            selectedNode.style.zIndex = '100';
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging && selectedNode) {
            e.preventDefault();
            
            const containerRect = container.getBoundingClientRect();
            const nodeSize = parseFloat(selectedNode.style.width);
            
            // Calculate new position
            let left = e.clientX - containerRect.left - offsetX;
            let top = e.clientY - containerRect.top - offsetY;
            
            // Constrain to container
            left = Math.max(0, Math.min(left, containerRect.width - nodeSize));
            top = Math.max(0, Math.min(top, containerRect.height - nodeSize));
            
            selectedNode.style.left = `${left}px`;
            selectedNode.style.top = `${top}px`;
            
            // Update data attributes
            selectedNode.dataset.x = left + (nodeSize / 2);
            selectedNode.dataset.y = top + (nodeSize / 2);
            
            // Update connections
            const nodeId = selectedNode.dataset.id;
            const connections = container.querySelectorAll('.skill-connection');
            
            connections.forEach(conn => {
                // Remove all connections
                conn.remove();
            });
            
            // Recreate connections
            initSkillsNetwork();
        }
    });
    
    document.addEventListener('mouseup', () => {
        if (isDragging && selectedNode) {
            selectedNode.style.zIndex = '';
            isDragging = false;
            selectedNode = null;
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        // Remove all connections
        const connections = container.querySelectorAll('.skill-connection');
        connections.forEach(conn => conn.remove());
        
        // Reposition nodes
        const nodes = container.querySelectorAll('.skill-node');
        nodes.forEach(node => {
            const nodeSize = parseFloat(node.style.width);
            const containerWidth = container.clientWidth - nodeSize;
            const containerHeight = container.clientHeight - nodeSize;
            
            // Get current position as percentage of container
            const currentLeft = parseFloat(node.style.left);
            const currentTop = parseFloat(node.style.top);
            const oldContainerWidth = containerWidth + nodeSize;
            const oldContainerHeight = containerHeight + nodeSize;
            
            const percentLeft = currentLeft / oldContainerWidth;
            const percentTop = currentTop / oldContainerHeight;
            
            // Apply new position
            const newLeft = percentLeft * containerWidth;
            const newTop = percentTop * containerHeight;
            
            node.style.left = `${newLeft}px`;
            node.style.top = `${newTop}px`;
            
            // Update data attributes
            node.dataset.x = newLeft + (nodeSize / 2);
            node.dataset.y = newTop + (nodeSize / 2);
        });
        
        // Recreate connections
        setTimeout(() => {
            initSkillsNetwork();
        }, 100);
    });
} 