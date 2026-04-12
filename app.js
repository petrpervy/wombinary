/* =====================================================
   WOMB-INARY.COM - JavaScript
   Harry Potter Library Aesthetic
   ===================================================== */

// ==================== Lexicon Data ====================
const lexiconTerms = [
    {
        term: "Ghostgrief",
        definition: "Mourning someone who is still alive but has chosen distance.",
        category: "loss",
        keywords: ["miss", "missing", "gone", "distant", "apart", "estranged", "separated", "pulled away", "left", "friend", "family", "lost someone", "drifted"]
    },
    {
        term: "Witnesshunger",
        definition: "The longing to be truly seen in pain — not fixed, not advised, just seen.",
        category: "connection",
        keywords: ["alone", "lonely", "no one understands", "just listen", "seen", "heard", "invisible", "unheard", "nobody gets it", "want someone to understand"]
    },
    {
        term: "Carryquiet",
        definition: "The exhaustion of appearing fine while holding something enormous alone.",
        category: "silence",
        keywords: ["fine", "okay", "pretending", "hiding", "mask", "holding it together", "strong", "can't tell anyone", "no one knows", "silent", "carrying"]
    },
    {
        term: "Mirrorfear",
        definition: "Dreading that you've slowly become the person who once hurt you.",
        category: "identity",
        keywords: ["like my mother", "like my father", "turning into", "becoming", "same mistakes", "repeat", "cycle", "pattern", "afraid of myself", "hurting others"]
    },
    {
        term: "Blankwanting",
        definition: "Wanting something deeply without being able to name what it is.",
        category: "longing",
        keywords: ["don't know what I want", "something missing", "empty", "ache", "longing", "restless", "unfulfilled", "vague", "can't explain", "something wrong"]
    },
    {
        term: "Holdthin",
        definition: "Being depended on by others while having nothing left for yourself.",
        category: "depletion",
        keywords: ["nothing left", "empty", "everyone needs me", "drained", "depleted", "giving too much", "caregiver", "no energy", "exhausted", "for everyone else"]
    },
    {
        term: "Loopspiraling",
        definition: "Replaying a moment until it grows larger than the moment itself.",
        category: "rumination",
        keywords: ["replaying", "can't stop thinking", "over and over", "replay", "loop", "argument", "conversation", "what I said", "what they said", "keep thinking about", "obsessing", "spiral", "stuck in my head"]
    },
    {
        term: "Dimseason",
        definition: "The stretch after a loss when ordinary things lose their color for a while.",
        category: "grief",
        keywords: ["grief", "loss", "nothing feels good", "flat", "grey", "muted", "after", "death", "ended", "broke up", "over", "numb", "color gone", "joyless"]
    },
    {
        term: "Softexit",
        definition: "Leaving a conversation before saying what you actually needed to say.",
        category: "avoidance",
        keywords: ["didn't say", "held back", "bit my tongue", "couldn't say it", "walked away", "left", "avoided", "didn't bring it up", "should have said", "conflict"]
    },
    {
        term: "Kindtrap",
        definition: "The difficulty of holding a limit with someone you deeply love.",
        category: "relationships",
        keywords: ["boundary", "can't say no", "feel guilty", "hate saying no", "people pleasing", "love them", "hurt them", "limit", "family", "don't want to disappoint"]
    },
    {
        term: "Replydebt",
        definition: "The guilt that grows around messages you've left unanswered too long.",
        category: "connection",
        keywords: ["haven't replied", "ghosted", "messages", "texts", "unanswered", "behind", "guilt", "avoiding", "inbox", "bad friend", "owe someone a call"]
    },
    {
        term: "Wombmemory",
        definition: "The body's residual awareness of a pregnancy that is no longer present.",
        category: "body",
        keywords: ["miscarriage", "pregnancy loss", "body remembers", "after pregnancy", "grief", "body", "postpartum", "loss", "child", "empty"]
    },
    {
        term: "Cyclegrief",
        definition: "The specific sadness that arrives on schedule, tied to the body's rhythm.",
        category: "body",
        keywords: ["period", "cycle", "PMS", "PMDD", "monthly", "hormones", "sad every month", "predictable", "menstrual", "before my period"]
    },
    {
        term: "Carewashing",
        definition: "Performing care language without meaningful follow-through.",
        category: "culture",
        keywords: ["fake", "hollow", "empty words", "thoughts and prayers", "performative", "doesn't really care", "just saying it", "lip service", "support that isn't", "disappointed"]
    },
    {
        term: "Scrollfreezing",
        definition: "Getting stuck in a feed even when you want to step away.",
        category: "attention",
        keywords: ["phone", "social media", "scrolling", "can't stop", "stuck", "instagram", "tiktok", "twitter", "doom", "wasting time", "distracted"]
    },
    {
        term: "Meetinglag",
        definition: "The cognitive fog that lingers after too many back-to-back calls.",
        category: "depletion",
        keywords: ["zoom", "calls", "meetings", "back to back", "fog", "can't think", "drained", "work", "tired", "exhausted after calls"]
    },
    {
        term: "Proximaburn",
        definition: "The specific exhaustion of caring for someone whose pain you cannot fix.",
        category: "depletion",
        keywords: ["watching someone suffer", "can't help", "sick loved one", "caregiver", "powerless", "watching them struggle", "nothing I can do", "helpless", "their pain"]
    },
    {
        term: "Feedhaze",
        definition: "The dreamlike blurring of time spent in passive, joyless scrolling.",
        category: "attention",
        keywords: ["lost track of time", "hours passed", "scrolled", "dissociated", "zoned out", "on my phone", "time disappeared", "numbing", "mindless"]
    },
    {
        term: "Birthgiver",
        definition: "Gender-neutral term for one who gives birth, honoring all identities.",
        category: "identity",
        keywords: ["parent", "mother", "birth", "pregnancy", "gave birth", "inclusive", "non-binary parent"]
    },
    {
        term: "Notifyjolt",
        definition: "The spike of dread before opening a message you're not ready to receive.",
        category: "anxiety",
        keywords: ["scared to open", "afraid to check", "message waiting", "text", "email", "notification", "dreading", "bad news", "anxious about"]
    }
];

// ==================== AI Responses ====================
const aiResponses = [
    {
        keywords: ["replay", "replaying", "loop", "overthink", "can't stop thinking", "argument", "over and over"],
        response: "That sounds exhausting to carry.",
        suggestedTerms: ["Loopspiraling"]
    },
    {
        keywords: ["tired", "exhausted", "drained", "depleted", "nothing left", "everyone needs me"],
        response: "Being needed and being supported are not the same thing.",
        suggestedTerms: ["Holdthin", "Meetinglag"]
    },
    {
        keywords: ["sad", "grief", "loss", "numb", "flat", "joyless", "after", "broke up"],
        response: "Grief changes the texture of everything around it.",
        suggestedTerms: ["Dimseason", "Ghostgrief"]
    },
    {
        keywords: ["missing", "miss", "gone", "distant", "drifted", "grew apart"],
        response: "Grief doesn't always need a death to be real.",
        suggestedTerms: ["Ghostgrief"]
    },
    {
        keywords: ["alone", "lonely", "no one understands", "invisible", "unheard"],
        response: "You want presence, not a solution.",
        suggestedTerms: ["Witnesshunger", "Carryquiet"]
    },
    {
        keywords: ["pretending", "fine", "hiding", "holding it together", "can't tell anyone"],
        response: "There's a particular weight to being fine.",
        suggestedTerms: ["Carryquiet"]
    },
    {
        keywords: ["scroll", "scrolling", "phone", "feed", "social media", "instagram", "tiktok"],
        response: "You know you want to stop, and yet.",
        suggestedTerms: ["Scrollfreezing", "Feedhaze"]
    },
    {
        keywords: ["guilt", "shame", "ashamed", "regret", "should have", "my fault"],
        response: "Shame tends to outlast the moment that made it.",
        suggestedTerms: ["Echoshame"]
    },
    {
        keywords: ["period", "cycle", "pms", "pmdd", "hormones", "menstrual"],
        response: "The body keeps its own calendar.",
        suggestedTerms: ["Cyclegrief"]
    },
    {
        keywords: ["pregnancy", "pregnant", "miscarriage", "baby", "birth", "postpartum"],
        response: "The body holds what the mind is still trying to understand.",
        suggestedTerms: ["Wombmemory", "Birthgiver"]
    },
    {
        keywords: ["hello", "hi", "hey", "help", "start"],
        response: "Welcome to Womb-inary. Tell me what's been on your mind — even if it's messy or hard to describe. That's exactly where we start.",
        suggestedTerms: []
    }
];

const defaultResponse = "Something's there, even if the shape isn't clear yet. Tell me more — we'll find the word together.";

// ==================== Main Initialization ====================
document.addEventListener('DOMContentLoaded', function() {

    // ==================== Chat Functionality ====================
    const chatForm = document.getElementById('chatForm');
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const termSuggestions = document.getElementById('termSuggestions');
    const termCountEl = document.getElementById('termCount');

    if (chatForm && userInput && chatMessages) {
        chatForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const message = userInput.value.trim();
            if (!message) return;

            // Add user message
            addMessage(message, 'user');
            userInput.value = '';

            // Show loading state
            addMessage('Searching for the word that fits...', 'ai', 'loading');

            // Call OpenAI API
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message })
                });

                // Remove loading message
                const loadingMsg = chatMessages.querySelector('.message.loading');
                if (loadingMsg) loadingMsg.remove();

                if (!response.ok) {
                    throw new Error('API request failed');
                }

                const data = await response.json();
                addMessage(data.message, 'ai');

                // Parse coined words from AI response and populate sidebar
                const coinedWords = parseAIWords(data.message);
                if (coinedWords.length > 0) {
                    updateTermSuggestionsFromAI(coinedWords);
                    updateSubmitPanel(coinedWords[0]);
                } else {
                    // Fallback: match against existing lexicon
                    const matchedTerms = searchLexiconTerms(message);
                    if (matchedTerms.length > 0) {
                        updateTermSuggestions(matchedTerms);
                    }
                }

            } catch (error) {
                console.error('Chat error:', error);

                // Remove loading message
                const loadingMsg = chatMessages.querySelector('.message.loading');
                if (loadingMsg) loadingMsg.remove();

                // Fallback to keyword matching
                const response = generateResponse(message);
                addMessage(response.text, 'ai');

                if (response.terms.length > 0) {
                    updateTermSuggestions(response.terms);
                }
            }
        });
    }

    function addMessage(text, type, className = '') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type} ${className}`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = type === 'ai' ? 'W' : 'Y';

        const content = document.createElement('div');
        content.className = 'message-content';
        // Parse markdown: **Word** — Definition → highlighted word with tooltip
        // Captures definition after the dash so it can show on hover
        const formatted = text
            .replace(/\*\*([^*]+)\*\*\s*[—\-]\s*([^\n<]+)/g, (match, word, definition) => {
                const safedef = definition.trim().replace(/"/g, '&quot;');
                return `<span class="coined-word" data-definition="${safedef}">${word}</span> — ${definition.trim()}`;
            })
            // Handle any remaining **word** without a definition
            .replace(/\*\*([^*]+)\*\*/g, '<span class="coined-word">$1</span>')
            .replace(/\n/g, '<br>');
        content.innerHTML = `<p>${formatted}</p>`;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        chatMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function searchLexiconTerms(message) {
        const lowerMessage = message.toLowerCase();
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

        return matchedTerms.slice(0, 3);
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

    // ==================== Parse AI Coined Words ====================
    // Extracts **Word** — Definition patterns from AI response
    function parseAIWords(text) {
        const words = [];
        // Match **Word** — Definition (supports both — and -)
        const regex = /\*\*([^*]+)\*\*\s*[—\-]\s*([^\n]+)/g;
        let match;
        while ((match = regex.exec(text)) !== null) {
            words.push({
                term: match[1].trim(),
                definition: match[2].trim()
            });
        }
        return words;
    }

    // ==================== Update Sidebar with AI Words ====================
    function updateTermSuggestionsFromAI(words) {
        if (!termSuggestions || !termCountEl) return;

        termSuggestions.innerHTML = '';

        words.forEach(word => {
            const div = document.createElement('div');
            div.className = 'term-suggestion ai-coined';
            div.innerHTML = `
                <h4>${word.term}</h4>
                <p>${word.definition}</p>
            `;
            termSuggestions.appendChild(div);
        });

        termCountEl.textContent = `${words.length} coined`;
    }

    // ==================== Submit Panel ====================
    function updateSubmitPanel(word) {
        const panel = document.getElementById('submitPanelBody');
        if (!panel) return;

        panel.innerHTML = `
            <div class="submit-word-preview">
                <strong>${word.term}</strong>
                <p>${word.definition}</p>
            </div>
            <button class="btn-submit-word" id="submitWordBtn">
                Submit to Wombinary →
            </button>
            <p class="submit-note">Submitted words are reviewed before being added to the dictionary.</p>
        `;

        document.getElementById('submitWordBtn').addEventListener('click', () => {
            handleWordSubmission(word);
        });
    }

    function handleWordSubmission(word) {
        const btn = document.getElementById('submitWordBtn');
        if (!btn) return;

        btn.textContent = 'Submitted ✓';
        btn.disabled = true;
        btn.classList.add('submitted');

        // Log to console (replace with real API endpoint when ready)
        console.log('[Wombinary Submission]', { term: word.term, definition: word.definition, timestamp: new Date().toISOString() });

        // TODO: Replace with real submission endpoint
        // fetch('/api/submit-word', { method: 'POST', body: JSON.stringify(word), headers: {'Content-Type':'application/json'} });
    }

    console.log('✨ Womb-Inary.com loaded successfully');
});
