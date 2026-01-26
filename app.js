/* =====================================================
   WOMB-INARY.COM - JavaScript
   Harry Potter Library Aesthetic
   ===================================================== */

// ==================== Lexicon Data ====================
const lexiconTerms = [
    {
        term: "Loopspiraling",
        definition: "Replaying a moment until it grows larger than the moment itself.",
        category: "emotion",
        keywords: ["overthinking", "anxiety", "worry", "rumination", "stuck", "thoughts"]
    },
    {
        term: "Carewashing",
        definition: "Performing care language without meaningful support or follow-through.",
        category: "culture",
        keywords: ["fake", "empty", "promises", "support", "disappointment"]
    },
    {
        term: "Birthgiver",
        definition: "Gender-neutral term for someone who gives birth, inclusive of all identities.",
        category: "identity",
        keywords: ["parent", "mother", "birth", "pregnancy", "inclusive"]
    },
    {
        term: "Scrollfreezing",
        definition: "Getting stuck in a feed even when you want to step away.",
        category: "emotion",
        keywords: ["phone", "social media", "stuck", "distraction", "attention"]
    },
    {
        term: "Meetinglag",
        definition: "The cognitive fog that lingers after too many back-to-back calls.",
        category: "emotion",
        keywords: ["tired", "work", "exhausted", "zoom", "meetings", "fog"]
    },
    {
        term: "Wombinary",
        definition: "An inclusive dictionary for reproductive and emotional experiences, centering diverse voices.",
        category: "health",
        keywords: ["dictionary", "words", "language", "inclusive"]
    },
    {
        term: "Moon-cycle",
        definition: "Menstruation reframed with natural imagery, honoring the body's rhythms.",
        category: "identity",
        keywords: ["period", "menstruation", "cycle", "body", "natural"]
    },
    {
        term: "Bodily Autonomy",
        definition: "The fundamental right to make decisions about one's own body without external control.",
        category: "health",
        keywords: ["rights", "choice", "body", "freedom", "control"]
    },
    {
        term: "Doomscrolling",
        definition: "Compulsively consuming negative news despite the emotional toll.",
        category: "emotion",
        keywords: ["news", "anxiety", "phone", "negative", "compulsive"]
    },
    {
        term: "Emotional Labor",
        definition: "The invisible work of managing feelings and relationships, often unrecognized.",
        category: "culture",
        keywords: ["work", "feelings", "invisible", "relationships", "exhausting"]
    },
    {
        term: "Burnout",
        definition: "Complete physical, emotional, and mental exhaustion from prolonged stress.",
        category: "emotion",
        keywords: ["tired", "exhausted", "stress", "overwhelmed", "done"]
    },
    {
        term: "Chest-feeder",
        definition: "Gender-inclusive term for someone who nurses an infant, regardless of identity.",
        category: "identity",
        keywords: ["nursing", "breastfeeding", "baby", "inclusive", "parent"]
    },
    {
        term: "Anxiety Spiral",
        definition: "Escalating worry that feeds on itself, growing more intense with each thought.",
        category: "emotion",
        keywords: ["worry", "panic", "fear", "thoughts", "escalating"]
    },
    {
        term: "Gaslighting",
        definition: "Manipulating someone into questioning their own reality and perceptions.",
        category: "culture",
        keywords: ["manipulation", "doubt", "crazy", "reality", "abuse"]
    },
    {
        term: "Reproductive Justice",
        definition: "The human right to have children, not have children, and parent in safe environments.",
        category: "health",
        keywords: ["rights", "children", "parenting", "choice", "justice"]
    }
];

// ==================== AI Responses ====================
const aiResponses = [
    {
        keywords: ["anxious", "anxiety", "worried", "worry", "nervous", "panic"],
        response: "It sounds like you're experiencing anxiety. That tightness in your chest, the racing thoughts - they're real and valid. Would you like to explore some terms that might help name what you're going through?",
        suggestedTerms: ["Loopspiraling", "Anxiety Spiral", "Doomscrolling"]
    },
    {
        keywords: ["tired", "exhausted", "burned out", "overwhelmed", "drained"],
        response: "Exhaustion runs deeper than just needing sleep. It sounds like you might be carrying a lot. Let me share some words that might resonate with what you're feeling.",
        suggestedTerms: ["Burnout", "Emotional Labor", "Meetinglag"]
    },
    {
        keywords: ["sad", "depressed", "down", "hopeless", "empty"],
        response: "I hear you. Feeling low can be isolating, but you're not alone in this. Sometimes finding the right words helps us feel less alone. Here are some terms that might speak to your experience.",
        suggestedTerms: ["Emotional Labor", "Burnout", "Loopspiraling"]
    },
    {
        keywords: ["angry", "frustrated", "mad", "upset", "annoyed"],
        response: "Your frustration is valid. Sometimes anger is our mind's way of protecting us from deeper hurts. Let me offer some language that might help process these feelings.",
        suggestedTerms: ["Gaslighting", "Carewashing", "Emotional Labor"]
    },
    {
        keywords: ["confused", "lost", "stuck", "uncertain", "unsure"],
        response: "Feeling uncertain can be disorienting. It's okay not to have all the answers right now. Here are some terms that might help clarify what you're experiencing.",
        suggestedTerms: ["Scrollfreezing", "Loopspiraling", "Anxiety Spiral"]
    },
    {
        keywords: ["pregnancy", "pregnant", "baby", "birth", "mother", "parent"],
        response: "Reproductive experiences are deeply personal. The Wombinary exists to provide inclusive language for these journeys. Here are some terms you might find meaningful.",
        suggestedTerms: ["Birthgiver", "Chest-feeder", "Bodily Autonomy", "Reproductive Justice"]
    },
    {
        keywords: ["rights", "choice", "freedom", "body", "autonomy"],
        response: "Bodily autonomy is a fundamental right. Understanding the language around reproductive justice can be empowering. Let me share some relevant terms.",
        suggestedTerms: ["Bodily Autonomy", "Reproductive Justice", "Birthgiver"]
    },
    {
        keywords: ["period", "menstrual", "cycle", "menstruation"],
        response: "Your body's natural rhythms deserve language that honors them. Here are some inclusive terms for menstrual experiences.",
        suggestedTerms: ["Moon-cycle", "Bodily Autonomy", "Wombinary"]
    },
    {
        keywords: ["hello", "hi", "hey", "help", "start"],
        response: "Welcome to Womb-inary. I'm here to help you find the right words for what you're experiencing. Tell me how you're feeling - even if it's messy or complicated. There's no wrong way to start.",
        suggestedTerms: []
    }
];

const defaultResponse = "Thank you for sharing. Every feeling is valid, even when it's hard to put into words. That's what the Wombinary is here for - to help you find language that fits. Tell me more about what you're experiencing, or explore the terms I've suggested.";

// ==================== Main Initialization ====================
document.addEventListener('DOMContentLoaded', function() {

    // ==================== Chat Functionality ====================
    const chatForm = document.getElementById('chatForm');
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const termSuggestions = document.getElementById('termSuggestions');
    const termCountEl = document.getElementById('termCount');

    if (chatForm && userInput && chatMessages) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const message = userInput.value.trim();
            if (!message) return;

            // Add user message
            addMessage(message, 'user');
            userInput.value = '';

            // Process and respond
            setTimeout(() => {
                const response = generateResponse(message);
                addMessage(response.text, 'ai');

                if (response.terms.length > 0) {
                    updateTermSuggestions(response.terms);
                }
            }, 800);
        });
    }

    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = type === 'ai' ? 'W' : 'Y';

        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = `<p>${text}</p>`;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        chatMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        let matchedResponse = null;
        let matchScore = 0;

        // Find best matching response
        for (const response of aiResponses) {
            let score = 0;
            for (const keyword of response.keywords) {
                if (lowerMessage.includes(keyword)) {
                    score++;
                }
            }
            if (score > matchScore) {
                matchScore = score;
                matchedResponse = response;
            }
        }

        if (matchedResponse && matchScore > 0) {
            return {
                text: matchedResponse.response,
                terms: matchedResponse.suggestedTerms
            };
        }

        // Search lexicon for matching terms
        const matchedTerms = [];
        for (const term of lexiconTerms) {
            for (const keyword of term.keywords) {
                if (lowerMessage.includes(keyword)) {
                    if (!matchedTerms.includes(term.term)) {
                        matchedTerms.push(term.term);
                    }
                    break;
                }
            }
        }

        return {
            text: defaultResponse,
            terms: matchedTerms.slice(0, 3)
        };
    }

    function updateTermSuggestions(termNames) {
        if (!termSuggestions || !termCountEl) return;

        termSuggestions.innerHTML = '';

        for (const termName of termNames) {
            const term = lexiconTerms.find(t => t.term === termName);
            if (term) {
                const suggestionDiv = document.createElement('div');
                suggestionDiv.className = 'term-suggestion';
                suggestionDiv.innerHTML = `
                    <h4>${term.term}</h4>
                    <p>${term.definition}</p>
                `;
                termSuggestions.appendChild(suggestionDiv);
            }
        }

        termCountEl.textContent = `${termNames.length} match${termNames.length === 1 ? '' : 'es'}`;
    }

    // ==================== Dictionary Filtering ====================
    const searchInput = document.getElementById('searchInput');
    const dictionaryGrid = document.getElementById('dictionaryGrid');
    const resultCountEl = document.getElementById('resultCount');
    const filterChips = document.querySelectorAll('.filter-chip');

    if (searchInput && dictionaryGrid) {
        let currentFilter = 'all';

        // Search functionality
        searchInput.addEventListener('input', function() {
            filterDictionary();
        });

        // Filter chips
        filterChips.forEach(chip => {
            chip.addEventListener('click', function() {
                filterChips.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.dataset.filter;
                filterDictionary();
            });
        });

        function filterDictionary() {
            const searchTerm = searchInput.value.toLowerCase();
            const cards = dictionaryGrid.querySelectorAll('.word-card');
            let visibleCount = 0;

            cards.forEach(card => {
                const term = card.querySelector('h3').textContent.toLowerCase();
                const definition = card.querySelector('.definition').textContent.toLowerCase();
                const category = card.dataset.category;

                const matchesSearch = term.includes(searchTerm) || definition.includes(searchTerm);
                const matchesFilter = currentFilter === 'all' || category === currentFilter;

                if (matchesSearch && matchesFilter) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (resultCountEl) {
                resultCountEl.textContent = `Showing ${visibleCount} term${visibleCount === 1 ? '' : 's'}`;
            }
        }
    }

    // ==================== Scroll Reveal Animation ====================
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReduced) {
            revealElements.forEach(el => el.classList.add('visible'));
        } else {
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            revealElements.forEach(el => revealObserver.observe(el));
        }
    }

    // ==================== Smooth Scroll ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==================== Header Scroll Effect ====================
    const siteHeader = document.querySelector('.site-header');

    if (siteHeader) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                siteHeader.style.background = 'rgba(26, 15, 10, 0.98)';
                siteHeader.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                siteHeader.style.background = 'rgba(26, 15, 10, 0.95)';
                siteHeader.style.boxShadow = 'none';
            }
        });
    }

    // ==================== Candle Particle Enhancement ====================
    const particleContainer = document.querySelector('.candle-particles');

    if (particleContainer) {
        // Add more particles dynamically for richer effect
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 8}s`;
            particle.style.animationDuration = `${6 + Math.random() * 4}s`;
            particleContainer.appendChild(particle);
        }
    }

    // ==================== Event Grid Styling ====================
    const eventGrid = document.querySelector('.event-grid');
    if (eventGrid) {
        eventGrid.style.display = 'flex';
        eventGrid.style.flexDirection = 'column';
        eventGrid.style.gap = 'var(--space-md)';
    }

    // ==================== Active Navigation ====================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.site-nav a, .footer-nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ==================== Card Hover Effects ====================
    const cards = document.querySelectorAll('.word-card, .event-card, .product-card, .card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ==================== Accessibility: Focus Management ====================
    const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    // Add focus ring styling
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--gold-primary)';
            this.style.outlineOffset = '2px';
        });

        el.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    console.log('✨ Womb-Inary.com loaded successfully');
});
