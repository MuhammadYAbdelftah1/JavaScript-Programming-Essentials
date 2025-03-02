document.addEventListener('DOMContentLoaded', () => {
    // Destination data
    const destinations = {
        beaches: [
            {
                name: "Bora Bora, French Polynesia",
                description: "Known for its crystal-clear waters, overwater bungalows, and stunning coral reefs. Perfect for honeymooners and luxury travelers seeking paradise.",
                image: "https://images.unsplash.com/photo-1589979481223-deb893043163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                highlights: ["Overwater bungalows", "Snorkeling in coral gardens", "Mount Otemanu views"]
            },
            {
                name: "Maldives",
                description: "A tropical paradise with white sandy beaches, turquoise lagoons, and vibrant marine life. The ultimate destination for beach lovers and diving enthusiasts.",
                image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                highlights: ["Private island resorts", "World-class diving spots", "Underwater restaurants"]
            },
            {
                name: "Tulum, Mexico",
                description: "A bohemian beach destination with ancient Mayan ruins overlooking the Caribbean Sea. Known for its eco-chic atmosphere and pristine beaches.",
                image: "https://images.unsplash.com/photo-1682553064441-b3ef3a769de7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                highlights: ["Mayan ruins", "Cenote swimming", "Eco-friendly resorts"]
            }
        ],
        temples: [
            {
                name: "Angkor Wat, Cambodia",
                description: "The largest religious monument in the world, built in the early 12th century. This ancient temple complex showcases the height of Khmer architecture.",
                image: "https://images.unsplash.com/photo-1564000631861-b1a7a9996211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                highlights: ["Sunrise viewing", "Intricate stone carvings", "Ancient history dating to 1113 AD"]
            },
            {
                name: "Kyoto Temples, Japan",
                description: "Home to over 1,600 Buddhist temples and 400 Shinto shrines, Kyoto offers a spiritual journey through Japan's ancient cultural heritage.",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                highlights: ["Fushimi Inari Shrine", "Kinkaku-ji (Golden Pavilion)", "Traditional tea ceremonies"]
            },
            {
                name: "Varanasi Temples, India",
                description: "One of the world's oldest continuously inhabited cities, Varanasi is a spiritual center with over 2,000 temples along the sacred Ganges River.",
                image: "https://images.unsplash.com/photo-1561361058-c24cecde1229?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                highlights: ["Kashi Vishwanath Temple", "Evening Ganga Aarti ceremony", "Spiritual bathing rituals"]
            }
        ],
        countries: [
            {
                name: "New Zealand",
                description: "A land of breathtaking landscapes, from dramatic mountains to pristine beaches. Perfect for adventure seekers and nature lovers alike.",
                image: "https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                highlights: ["Milford Sound", "Hobbiton Movie Set", "Queenstown adventure activities"]
            },
            {
                name: "Italy",
                description: "A cultural powerhouse with unparalleled art, architecture, and cuisine. From ancient ruins to Renaissance masterpieces, Italy offers endless exploration.",
                image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                highlights: ["Roman Colosseum", "Venice canals", "Tuscan countryside"]
            },
            {
                name: "Japan",
                description: "A fascinating blend of ancient traditions and cutting-edge technology. Experience unique culture, exquisite cuisine, and stunning natural beauty.",
                image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                highlights: ["Mount Fuji", "Cherry blossom season", "Tokyo's vibrant neighborhoods"]
            }
        ]
    };

    // Event listeners for category buttons
    const categoryButtons = document.querySelectorAll('.view-more');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            displayDestinations(category);
            
            // Scroll to recommendations section
            document.getElementById('recommendations').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to display destinations based on category
    function displayDestinations(category) {
        const recommendationContainer = document.querySelector('.recommendation-container');
        const categoryData = destinations[category];
        
        // Update section title
        const recommendationsTitle = document.querySelector('#recommendations h2');
        recommendationsTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Recommendations`;
        
        // Clear previous recommendations
        recommendationContainer.innerHTML = '';
        
        // Add new recommendations
        categoryData.forEach(destination => {
            const destinationCard = createDestinationCard(destination);
            recommendationContainer.appendChild(destinationCard);
        });
    }

    // Function to create destination card
    function createDestinationCard(destination) {
        const card = document.createElement('div');
        card.className = 'destination-card';
        
        // Create card content
        card.innerHTML = `
            <div class="destination-image">
                <img src="${destination.image}" alt="${destination.name}">
            </div>
            <div class="destination-info">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="destination-highlights">
                    <h4>Highlights:</h4>
                    <ul>
                        ${destination.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                </div>
                <button class="learn-more-btn">Learn More</button>
            </div>
        `;
        
        // Add event listener to the Learn More button
        const learnMoreBtn = card.querySelector('.learn-more-btn');
        learnMoreBtn.addEventListener('click', () => {
            showDestinationModal(destination);
        });
        
        return card;
    }

    // Function to show destination modal
    function showDestinationModal(destination) {
        // Create modal element
        const modal = document.createElement('div');
        modal.className = 'destination-modal';
        
        // Create modal content
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <h2>${destination.name}</h2>
                </div>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${destination.image}" alt="${destination.name}">
                    </div>
                    <div class="modal-description">
                        <p>${destination.description}</p>
                        <div class="modal-highlights">
                            <h3>Highlights:</h3>
                            <ul>
                                ${destination.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add modal to the body
        document.body.appendChild(modal);
        
        // Prevent scrolling on the body
        document.body.style.overflow = 'hidden';
        
        // Show modal with animation
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
        
        // Close modal when clicking the close button
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            closeModal(modal);
        });
        
        // Close modal when clicking outside the modal content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    }

    // Function to close modal
    function closeModal(modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // Display random recommendations on page load
    function displayRandomRecommendations() {
        const categories = Object.keys(destinations);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        displayDestinations(randomCategory);
    }

    // Initialize with random recommendations
    displayRandomRecommendations();
});