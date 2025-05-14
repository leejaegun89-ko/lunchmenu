// Menu database with images and descriptions
const menuDatabase = {
    "Hot Pot Set": {
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        getDescription: (mood, weather, time) => {
            let baseDesc = "A delightful meal where you can choose from various ingredients to your liking. ";
            
            let moodDesc = {
                happy: "A feast of diverse flavors that will lift your spirits even higher!",
                stressed: "Let the warm broth melt away your stress.",
                tired: "The nutritious broth will help you regain your energy.",
                hungry: "Perfect for satisfying your hunger with plenty of ingredients."
            }[mood] || "";

            let weatherDesc = {
                cold: "The best choice to warm both your body and soul on a cold day.",
                hot: "A flavorful option that you can enjoy even in hot weather.",
                rainy: "A comforting warm broth that's perfect for rainy days.",
                sunny: "Great for sharing with friends or family on a sunny day."
            }[weather] || "";

            let timeDesc = {
                quick: "Prepared as a set for quick and easy enjoyment.",
                moderate: "Perfect for a relaxed lunch break.",
                relaxed: "Ideal for savoring at your own pace.",
                desk: "Neatly prepared for comfortable dining at your desk."
            }[time] || "";

            return `${baseDesc} ${moodDesc} ${weatherDesc} ${timeDesc}`;
        },
        calories: "600-800kcal"
    },
    "Fresh Poke Bowl": {
        image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        getDescription: (mood, weather, time) => {
            let baseDesc = "A healthy bowl featuring fresh salmon and various vegetables. ";
            
            let moodDesc = {
                happy: "Fresh flavors that will make your happy mood even brighter!",
                stressed: "Let the light, refreshing taste help clear your mind.",
                tired: "Recharge with fresh, energizing ingredients.",
                hungry: "A filling combination that satisfies your appetite."
            }[mood] || "";

            let weatherDesc = {
                cold: "A refreshing taste that's enjoyable even in cold weather.",
                hot: "Perfect light meal for hot weather.",
                rainy: "A mood-lifting choice for gloomy weather.",
                sunny: "Perfectly matches the bright sunny weather."
            }[weather] || "";

            let timeDesc = {
                quick: "Quick to eat yet packed with nutrition.",
                moderate: "Great for a leisurely lunch.",
                relaxed: "Perfect for mindful eating.",
                desk: "Clean and easy to enjoy at your desk."
            }[time] || "";

            return `${baseDesc} ${moodDesc} ${weatherDesc} ${timeDesc}`;
        },
        calories: "450kcal"
    },
    "Greek Quinoa Salad": {
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        description: "A Greek-style salad with nutritious quinoa and fresh vegetables. A refreshing choice perfect for clear weather.",
        calories: "380kcal"
    },
    "Bibimbap with Bulgogi": {
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        description: (mood, weather, time) => {
            let desc = "A nutritious bowl of rice topped with sweet bulgogi and fresh vegetables. ";
            
            if (mood === 'tired') desc += "The perfect meal to replenish your energy. ";
            if (weather === 'cold') desc += "The warm rice and bulgogi make an unbeatable combination on a cold day! ";
            if (time === 'desk') desc += "Neatly arranged for easy eating at your desk.";
            
            return desc;
        },
        calories: "650kcal"
    },
    "Chicken Noodle Soup": {
        image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        description: (mood, weather, time) => {
            let desc = "A bowl of warm chicken soup that comforts both body and soul. ";
            
            if (mood === 'stressed') desc += "Let this comforting soup soothe your stressful day. ";
            if (weather === 'rainy') desc += "Nothing beats a warm soup on a rainy day. ";
            if (time === 'relaxed') desc += "Take your time to enjoy and find peace in every spoonful.";
            
            return desc;
        },
        calories: "320kcal"
    },
    "Hot Beef Soup": {
        image: "https://images.unsplash.com/photo-1626123552399-8b06288f0731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        description: "A hearty beef soup to help you unwind. A warming bowl that helps restore energy on cold days.",
        calories: "480kcal"
    },
    "Double Protein Bowl": {
        image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        description: (mood, weather, time) => {
            let desc = "A healthy bowl packed with protein. ";
            
            if (mood === 'hungry') desc += "The perfect meal to satisfy your intense hunger. ";
            if (weather === 'sunny') desc += "An energizing choice for a sunny day. ";
            if (time === 'moderate') desc += "Take your time to recharge while enjoying this nutritious meal.";
            
            return desc;
        },
        calories: "720kcal"
    },
    "Tomato Soup & Grilled Cheese": {
        image: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        description: (mood, weather, time) => {
            let desc = "A classic combination of warm tomato soup and crispy grilled cheese. ";
            
            if (mood === 'stressed') desc += "Find comfort in this nostalgic taste on a tough day. ";
            if (weather === 'rainy') desc += "The perfect cozy meal for a rainy day. ";
            if (time === 'desk') desc += "Easy to enjoy at your desk without any mess.";
            
            return desc;
        },
        calories: "550kcal"
    },
    "Cold Soba Noodles": {
        image: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        getDescription: (mood, weather, time) => {
            let desc = "Refreshing buckwheat noodles with a clean, flavorful broth. ";
            
            if (mood === 'stressed') desc += "Let the clean flavors help clear your mind. ";
            if (weather === 'hot') desc += "The perfect choice to beat the heat. ";
            if (time === 'quick') desc += "Quick to eat, perfect for a busy lunch break!";
            
            return desc;
        },
        calories: "400kcal"
    },
    "Double Portion Stew": {
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        getDescription: (mood, weather, time) => {
            let baseDesc = "A hearty stew packed with fresh ingredients.";
            
            let moodDesc = {
                happy: "Make your happy mood even better with this delicious stew!",
                stressed: "Let this comforting meal soothe your stressful day.",
                tired: "A nourishing stew to help restore your energy.",
                hungry: "A generous portion that guarantees satisfaction."
            }[mood];

            let weatherDesc = {
                cold: "A warming stew that's perfect for cold weather.",
                hot: "Prepared to be enjoyable even in hot weather.",
                rainy: "A heartening meal to brighten up a rainy day.",
                sunny: "As cheerful as the sunny weather outside."
            }[weather];

            let timeDesc = {
                quick: "Quick to eat while still feeling satisfying.",
                moderate: "Perfect for a relaxed, filling meal.",
                relaxed: "Ideal for savoring at a leisurely pace.",
                desk: "Prepared for neat and easy desk dining."
            }[time];

            return `${baseDesc}\n\n${moodDesc}\n${weatherDesc}\n${timeDesc}`;
        },
        calories: "800kcal"
    }
};

// Lunch menu database with categories based on mood, weather, and time
const lunchOptions = {
    happy: {
        sunny: {
            quick: ["Fresh Poke Bowl", "Greek Quinoa Salad"],
            moderate: ["Bibimbap with Bulgogi", "Fresh Poke Bowl"],
            relaxed: ["Hot Pot Set", "Double Portion Stew"],
            desk: ["Fresh Poke Bowl", "Greek Quinoa Salad"]
        },
        rainy: {
            quick: ["Chicken Noodle Soup", "Tomato Soup & Grilled Cheese"],
            moderate: ["Hot Pot Set", "Double Portion Stew"],
            relaxed: ["Hot Pot Set", "Chicken Noodle Soup"],
            desk: ["Tomato Soup & Grilled Cheese", "Chicken Noodle Soup"]
        },
        cold: {
            quick: ["Hot Beef Soup", "Chicken Noodle Soup"],
            moderate: ["Hot Pot Set", "Double Portion Stew"],
            relaxed: ["Hot Pot Set", "Hot Beef Soup"],
            desk: ["Hot Beef Soup", "Chicken Noodle Soup"]
        },
        hot: {
            quick: ["Cold Soba Noodles", "Fresh Poke Bowl"],
            moderate: ["Fresh Poke Bowl", "Cold Soba Noodles"],
            relaxed: ["Cold Soba Noodles", "Greek Quinoa Salad"],
            desk: ["Cold Soba Noodles", "Fresh Poke Bowl"]
        }
    },
    stressed: {
        sunny: {
            quick: ["Fresh Poke Bowl", "Greek Quinoa Salad"],
            moderate: ["Fresh Poke Bowl", "Bibimbap with Bulgogi"],
            relaxed: ["Hot Pot Set", "Double Portion Stew"],
            desk: ["Fresh Poke Bowl", "Greek Quinoa Salad"]
        },
        rainy: {
            quick: ["Chicken Noodle Soup", "Tomato Soup & Grilled Cheese"],
            moderate: ["Hot Pot Set", "Tomato Soup & Grilled Cheese"],
            relaxed: ["Hot Pot Set", "Chicken Noodle Soup"],
            desk: ["Tomato Soup & Grilled Cheese", "Chicken Noodle Soup"]
        },
        cold: {
            quick: ["Hot Beef Soup", "Chicken Noodle Soup"],
            moderate: ["Hot Pot Set", "Hot Beef Soup"],
            relaxed: ["Hot Pot Set", "Double Portion Stew"],
            desk: ["Hot Beef Soup", "Tomato Soup & Grilled Cheese"]
        },
        hot: {
            quick: ["Cold Soba Noodles", "Fresh Poke Bowl"],
            moderate: ["Fresh Poke Bowl", "Greek Quinoa Salad"],
            relaxed: ["Cold Soba Noodles", "Fresh Poke Bowl"],
            desk: ["Cold Soba Noodles", "Fresh Poke Bowl"]
        }
    },
    tired: {
        sunny: {
            quick: ["Fresh Poke Bowl", "Double Protein Bowl"],
            moderate: ["Bibimbap with Bulgogi", "Double Protein Bowl"],
            relaxed: ["Hot Pot Set", "Double Portion Stew"],
            desk: ["Double Protein Bowl", "Bibimbap with Bulgogi"]
        },
        rainy: {
            quick: ["Hot Beef Soup", "Chicken Noodle Soup"],
            moderate: ["Hot Pot Set", "Double Portion Stew"],
            relaxed: ["Hot Pot Set", "Double Portion Stew"],
            desk: ["Chicken Noodle Soup", "Tomato Soup & Grilled Cheese"]
        },
        cold: {
            quick: ["Hot Beef Soup", "Chicken Noodle Soup"],
            moderate: ["Hot Pot Set", "Double Portion Stew"],
            relaxed: ["Hot Pot Set", "Double Portion Stew"],
            desk: ["Hot Beef Soup", "Chicken Noodle Soup"]
        },
        hot: {
            quick: ["Cold Soba Noodles", "Fresh Poke Bowl"],
            moderate: ["Fresh Poke Bowl", "Double Protein Bowl"],
            relaxed: ["Cold Soba Noodles", "Fresh Poke Bowl"],
            desk: ["Cold Soba Noodles", "Fresh Poke Bowl"]
        }
    },
    hungry: {
        sunny: {
            quick: ["Double Protein Bowl", "Bibimbap with Bulgogi"],
            moderate: ["Double Portion Stew", "Hot Pot Set"],
            relaxed: ["Hot Pot Set", "Double Portion Stew"],
            desk: ["Double Protein Bowl", "Bibimbap with Bulgogi"]
        },
        rainy: {
            quick: ["Double Portion Stew", "Hot Beef Soup"],
            moderate: ["Hot Pot Set", "Double Portion Stew"],
            relaxed: ["Hot Pot Set", "Double Portion Stew"],
            desk: ["Double Protein Bowl", "Bibimbap with Bulgogi"]
        },
        cold: {
            quick: ["Hot Beef Soup", "Double Portion Stew"],
            moderate: ["Hot Pot Set", "Double Portion Stew"],
            relaxed: ["Hot Pot Set", "Double Portion Stew"],
            desk: ["Hot Beef Soup", "Double Portion Stew"]
        },
        hot: {
            quick: ["Double Protein Bowl", "Fresh Poke Bowl"],
            moderate: ["Fresh Poke Bowl", "Double Protein Bowl"],
            relaxed: ["Double Protein Bowl", "Cold Soba Noodles"],
            desk: ["Double Protein Bowl", "Fresh Poke Bowl"]
        }
    }
};

// Get DOM elements
const allButtons = document.querySelectorAll('.preference-button');
const findLunchBtn = document.getElementById('findLunchBtn');
const resultContainer = document.getElementById('resultContainer');
const foodName = document.getElementById('foodName');
const foodImage = document.getElementById('foodImage');
const foodDescription = document.getElementById('foodDescription');
const foodCalories = document.getElementById('foodCalories');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const backButton = document.querySelector('.back-button');
const favoriteButton = document.querySelector('.favorite-button');
const mealNavButtons = document.querySelectorAll('.meal-nav button');

// Store user selections
let selectedMood = null;
let selectedWeather = null;
let selectedTime = null;

// Add click event listeners to meal navigation
mealNavButtons.forEach(button => {
    button.addEventListener('click', function() {
        mealNavButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Add click event listeners to all option buttons
allButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove selected class from siblings
        const parent = this.parentElement;
        parent.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
        
        // Add selected class to clicked button
        this.classList.add('selected');
        
        // Store selection
        if (this.dataset.mood) selectedMood = this.dataset.mood;
        if (this.dataset.weather) selectedWeather = this.dataset.weather;
        if (this.dataset.time) selectedTime = this.dataset.time;
        
        // Enable find lunch button if all selections are made
        findLunchBtn.disabled = !(selectedMood && selectedWeather && selectedTime);
    });
});

// Add error handling for images
foodImage.onerror = function() {
    this.src = "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80";
    this.alt = "Default food image";
};

// Find lunch button click handler
findLunchBtn.addEventListener('click', function() {
    if (selectedMood && selectedWeather && selectedTime) {
        const options = lunchOptions[selectedMood][selectedWeather][selectedTime];
        const recommendation = options[Math.floor(Math.random() * options.length)];
        
        // Update recommendation display
        foodName.textContent = recommendation;
        
        // Add image and description if available in database
        if (menuDatabase[recommendation]) {
            const menu = menuDatabase[recommendation];
            foodImage.src = menu.image;
            foodImage.alt = recommendation;
            
            // Get contextual description based on current selections
            let description;
            if (typeof menu.getDescription === 'function') {
                description = menu.getDescription(selectedMood, selectedWeather, selectedTime);
            } else if (typeof menu.description === 'function') {
                description = menu.description(selectedMood, selectedWeather, selectedTime);
            } else {
                description = menu.description;
            }
            
            foodDescription.textContent = description;
            foodCalories.textContent = `Calories: ${menu.calories}`;
        } else {
            // Default image and description if not found in database
            foodImage.src = "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80";
            foodImage.alt = "Food image";
            foodDescription.textContent = "A perfect menu for your mood and weather today!";
            foodCalories.textContent = "";
        }
        
        resultContainer.classList.remove('hidden');
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
});

// Back button click handler
backButton.addEventListener('click', function() {
    resultContainer.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Favorite button click handler
favoriteButton.addEventListener('click', function() {
    this.classList.toggle('active');
    const path = this.querySelector('path');
    if (this.classList.contains('active')) {
        path.setAttribute('fill', 'currentColor');
    } else {
        path.setAttribute('fill', 'none');
    }
});

// Try again button click handler
tryAgainBtn.addEventListener('click', function() {
    // Reset selections
    selectedMood = null;
    selectedWeather = null;
    selectedTime = null;
    
    // Remove selected class from all buttons
    allButtons.forEach(button => button.classList.remove('selected'));
    
    // Hide result container
    resultContainer.classList.add('hidden');
    
    // Disable find lunch button
    findLunchBtn.disabled = true;
    
    // Reset favorite button
    favoriteButton.classList.remove('active');
    favoriteButton.querySelector('path').setAttribute('fill', 'none');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}); 