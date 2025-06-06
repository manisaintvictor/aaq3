import { CategoryInfo, CategoryType } from '../types/quiz';

export const categories: Record<CategoryType, CategoryInfo> = {
  awareAuthentic: {
    name: "The Aware Authentic",
    description: "You have achieved a remarkable level of self-awareness and authenticity. You know who you are, stand confidently in your truth, and navigate life with genuine self-expression. Your inner compass is strong, and you're not easily swayed by external pressures.",
    authenticityJourney: "You've reached a mature stage of authenticity where being true to yourself feels natural and empowering. You've likely done significant inner work and have developed the courage to live according to your values.",
    traits: [
      "Strong sense of self and personal identity",
      "Comfortable expressing authentic emotions and thoughts", 
      "Excellent boundary-setting abilities",
      "Views challenges as growth opportunities",
      "Practices regular self-compassion and self-care"
    ],
    coreStrengths: [
      "Unwavering self-confidence and self-trust",
      "Ability to inspire authenticity in others",
      "Resilient in face of criticism or setbacks",
      "Clear communication of needs and boundaries"
    ],
    commonChallenges: [
      "May sometimes appear too direct or uncompromising",
      "Could benefit from patience with others on their authenticity journey",
      "Might need to balance confidence with humility"
    ],
    sabotagePatterns: [
      "Success guilt - feeling unworthy of achievements",
      "Perfectionism that delays action or completion",
      "Impostor syndrome despite evident competence"
    ],
    limitingBeliefs: [
      "\"I must be perfect to be worthy of success\"",
      "\"If I'm too successful, I'll lose connection with others\"",
      "\"I don't deserve this level of happiness/success\""
    ],
    innerDialogue: [
      "\"Am I being too much for others?\"",
      "\"Maybe I should tone it down\"",
      "\"I need to make sure everyone else is comfortable first\""
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    color: "bg-gradient-to-br from-emerald-600 to-teal-700",
    recommendations: [
      "Use your authenticity to mentor others on their journey",
      "Continue challenging yourself with new growth opportunities",
      "Practice patience and empathy with those still finding their voice",
      "Consider leadership roles where your authenticity can create positive change",
      "Maintain your self-care practices to sustain your authentic energy"
    ],
    subCategories: {
      empoweredLeader: {
        name: "The Empowered Leader",
        description: "You've mastered authenticity and naturally inspire others through your genuine leadership style.",
        specificSabotagePattern: "Success guilt and fear of outshining others",
        coreLimitingBelief: "\"If I'm too successful, I'll lose my connections with others\"",
        typicalInnerDialogue: ["\"Maybe I should hold back so others feel comfortable\"", "\"Am I being too much?\""],
        breakthroughStrategy: "Embrace your role as an authentic leader who elevates others",
        nextLevelChallenge: "Leading with vulnerability while maintaining strength"
      },
      wiseMentor: {
        name: "The Wise Mentor",
        description: "Your authenticity journey has given you deep wisdom that you naturally share with others.",
        specificSabotagePattern: "Perfectionism in teaching/mentoring others",
        coreLimitingBelief: "\"I must have all the answers to help others\"",
        typicalInnerDialogue: ["\"What if I give the wrong advice?\"", "\"I should know better by now\""],
        breakthroughStrategy: "Share your journey, including mistakes and ongoing growth",
        nextLevelChallenge: "Balancing wisdom-sharing with continued personal learning"
      },
      authenticInfluencer: {
        name: "The Authentic Influencer",
        description: "You influence others through your genuine way of being rather than trying to impress.",
        specificSabotagePattern: "Fear of being seen as inauthentic or 'fake'",
        coreLimitingBelief: "\"If I have influence, I must be manipulating people\"",
        typicalInnerDialogue: ["\"Am I being genuine enough?\"", "\"People might think I'm fake\""],
        breakthroughStrategy: "Trust that your authentic influence creates positive change",
        nextLevelChallenge: "Scaling authentic influence without losing personal connection"
      }
    }
  },
  cautiousExplorer: {
    name: "The Cautious Explorer",
    description: "You're on a thoughtful journey toward greater authenticity. You have good self-awareness and are actively working to align your actions with your values, though you sometimes proceed with careful consideration of the consequences.",
    authenticityJourney: "You're in an active growth phase, consciously developing your authentic self while being mindful of relationships and responsibilities. You're learning to balance being true to yourself with being considerate of others.",
    traits: [
      "Growing self-awareness with occasional self-doubt",
      "Thoughtful approach to personal growth and change",
      "Developing stronger boundaries and self-advocacy",
      "Balanced perspective on challenges and opportunities",
      "Increasing practice of self-compassion"
    ],
    coreStrengths: [
      "Thoughtful and reflective approach to personal development",
      "Good balance between self-care and care for others",
      "Ability to learn from both successes and setbacks",
      "Growing confidence in expressing authentic self"
    ],
    commonChallenges: [
      "Sometimes overthinks decisions or second-guesses authentic impulses",
      "May struggle with perfectionism in the authenticity journey",
      "Could benefit from trusting intuition more readily"
    ],
    sabotagePatterns: [
      "Analysis paralysis - overthinking prevents action",
      "Seeking permission from others before making authentic choices",
      "Reverting to old patterns when stressed or uncertain"
    ],
    limitingBeliefs: [
      "\"I need to have it all figured out before I can act\"",
      "\"I might hurt others if I'm too authentic\"",
      "\"I'm not ready yet - I need more preparation\""
    ],
    innerDialogue: [
      "\"What if I make the wrong choice?\"",
      "\"Maybe I should wait until I'm more certain\"",
      "\"I don't want to upset anyone\""
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    color: "bg-gradient-to-br from-blue-600 to-indigo-700",
    recommendations: [
      "Trust your growing intuition and authentic impulses more readily",
      "Practice small acts of authenticity daily to build confidence",
      "Celebrate your progress rather than focusing on perfection",
      "Seek supportive communities that encourage authentic expression",
      "Continue your self-reflection practices while taking more authentic action"
    ],
    subCategories: {
      thoughtfulGrower: {
        name: "The Thoughtful Grower",
        description: "You approach authenticity with careful consideration and steady progress.",
        specificSabotagePattern: "Analysis paralysis and perfectionism",
        coreLimitingBelief: "\"I need to have it all figured out before I can act authentically\"",
        typicalInnerDialogue: ["\"What if I'm not ready?\"", "\"I need more information first\""],
        breakthroughStrategy: "Take imperfect action and learn through experience",
        nextLevelChallenge: "Trusting your intuition over endless analysis"
      },
      strategicAuthenticator: {
        name: "The Strategic Authenticator",
        description: "You're building authenticity systematically while considering all stakeholders.",
        specificSabotagePattern: "Over-consideration of others' reactions",
        coreLimitingBelief: "\"I can't be authentic if it might hurt or disappoint others\"",
        typicalInnerDialogue: ["\"How will this affect everyone else?\"", "\"Maybe I should compromise\""],
        breakthroughStrategy: "Recognize that authentic relationships require your genuine self",
        nextLevelChallenge: "Balancing consideration for others with self-honoring"
      },
      balancedEvolver: {
        name: "The Balanced Evolver",
        description: "You're evolving authentically while maintaining stability in your life.",
        specificSabotagePattern: "Fear of disrupting current stability",
        coreLimitingBelief: "\"If I change too much, I'll lose what I have\"",
        typicalInnerDialogue: ["\"Is this change worth the risk?\"", "\"Maybe I should stay where I am\""],
        breakthroughStrategy: "Embrace gradual authentic evolution as a path to greater fulfillment",
        nextLevelChallenge: "Taking bigger authentic risks while maintaining core stability"
      }
    }
  },
  sensitiveConnector: {
    name: "The Sensitive Connector",
    description: "You have a beautiful awareness of yourself and others, but sometimes struggle to maintain your authentic voice in relationships. You deeply value connection and harmony, which can sometimes lead to compromising your own needs.",
    authenticityJourney: "You're learning to honor both your sensitive nature and your authentic self. Your challenge is finding ways to maintain genuine connections while staying true to your own values and needs.",
    traits: [
      "High emotional intelligence and empathy",
      "Strong desire for meaningful connections",
      "Developing awareness of personal boundaries",
      "Tendency to consider others' feelings in decision-making",
      "Growing understanding of self-compassion"
    ],
    coreStrengths: [
      "Exceptional ability to understand and connect with others",
      "Natural talent for creating harmony and understanding",
      "Deep capacity for empathy and emotional support",
      "Intuitive understanding of relationship dynamics"
    ],
    commonChallenges: [
      "May prioritize others' needs over their own authentic expression",
      "Sometimes struggles with setting and maintaining boundaries",
      "Can be overly sensitive to criticism or conflict"
    ],
    sabotagePatterns: [
      "People-pleasing at the expense of authentic self-expression",
      "Avoiding conflict even when boundaries are crossed",
      "Taking on others' emotions and problems as their own"
    ],
    limitingBeliefs: [
      "\"I'm responsible for everyone else's happiness\"",
      "\"If I set boundaries, people won't love me\"",
      "\"My needs are less important than others' needs\""
    ],
    innerDialogue: [
      "\"I don't want to hurt their feelings\"",
      "\"Maybe I'm being too sensitive\"",
      "\"I should just go along with what they want\""
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    color: "bg-gradient-to-br from-pink-600 to-rose-700",
    recommendations: [
      "Practice expressing your authentic thoughts and feelings in safe relationships",
      "Set small, manageable boundaries to build your confidence",
      "Remember that authentic relationships require your genuine self",
      "Develop self-care practices that honor your sensitive nature",
      "Learn that saying 'no' to others can mean saying 'yes' to yourself"
    ],
    subCategories: {
      empathicPleaser: {
        name: "The Empathic Pleaser",
        description: "Your deep empathy sometimes leads to losing yourself in others' needs and emotions.",
        specificSabotagePattern: "Chronic people-pleasing and boundary dissolution",
        coreLimitingBelief: "\"I'm only valuable when I'm helping others\"",
        typicalInnerDialogue: ["\"What do they need from me?\"", "\"I can't let them down\""],
        breakthroughStrategy: "Recognize that your authentic self is your greatest gift to others",
        nextLevelChallenge: "Maintaining empathy while honoring your own needs"
      },
      harmonySeeker: {
        name: "The Harmony Seeker",
        description: "You prioritize peace and connection, sometimes at the cost of authentic expression.",
        specificSabotagePattern: "Conflict avoidance and emotional suppression",
        coreLimitingBelief: "\"Conflict means the relationship is damaged\"",
        typicalInnerDialogue: ["\"I should just keep the peace\"", "\"It's not worth the argument\""],
        breakthroughStrategy: "Learn that healthy conflict can deepen authentic relationships",
        nextLevelChallenge: "Expressing disagreement while maintaining connection"
      },
      relationshipFocused: {
        name: "The Relationship-Focused",
        description: "Your identity is deeply tied to your relationships and how others perceive you.",
        specificSabotagePattern: "Identity fusion with others' expectations",
        coreLimitingBelief: "\"I am who others need me to be\"",
        typicalInnerDialogue: ["\"Who do they want me to be?\"", "\"I don't know who I am without them\""],
        breakthroughStrategy: "Develop a strong sense of self that enhances rather than diminishes relationships",
        nextLevelChallenge: "Maintaining individual identity within close relationships"
      }
    }
  },
  aspiringTrailblazer: {
    name: "The Aspiring Trailblazer",
    description: "You're beginning to recognize the importance of authenticity and are taking initial steps toward living more genuinely. You have moments of clarity about who you are, but external pressures and self-doubt sometimes pull you away from your authentic path.",
    authenticityJourney: "You're in the early stages of your authenticity journey, beginning to question patterns and choices that don't align with your true self. You're developing the courage to make changes, even if they feel uncertain.",
    traits: [
      "Emerging self-awareness and desire for authenticity",
      "Beginning to question external expectations and pressures",
      "Developing resilience and growth mindset",
      "Starting to practice boundary-setting",
      "Learning the value of self-compassion"
    ],
    coreStrengths: [
      "Courage to begin the authenticity journey",
      "Openness to growth and self-discovery",
      "Increasing awareness of personal values and desires",
      "Willingness to challenge comfortable but inauthentic patterns"
    ],
    commonChallenges: [
      "May feel uncertain about authentic identity and direction",
      "Sometimes reverts to people-pleasing or conforming behaviors",
      "Can be hard on themselves during the learning process"
    ],
    sabotagePatterns: [
      "Reverting to old patterns when facing uncertainty or pressure",
      "Self-criticism when authentic choices don't immediately work out",
      "Seeking external validation for authentic choices"
    ],
    limitingBeliefs: [
      "\"I don't know who I really am\"",
      "\"It's safer to go along with what others expect\"",
      "\"I'm not strong enough to be truly authentic\""
    ],
    innerDialogue: [
      "\"What if I'm making a mistake?\"",
      "\"Maybe I should just stick with what's familiar\"",
      "\"I don't know if I can handle the consequences\""
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    color: "bg-gradient-to-br from-orange-600 to-amber-700",
    recommendations: [
      "Start with small, low-risk authentic choices to build confidence",
      "Explore your values and interests without judgment",
      "Find supportive people who encourage your authentic expression",
      "Practice self-compassion as you navigate this learning process",
      "Celebrate every step toward greater authenticity, no matter how small"
    ],
    subCategories: {
      courageousBeginning: {
        name: "The Courageous Beginning",
        description: "You're taking brave first steps toward authenticity despite uncertainty and fear.",
        specificSabotagePattern: "Reverting to familiar patterns when courage wavers",
        coreLimitingBelief: "\"I'm not brave enough to be truly authentic\"",
        typicalInnerDialogue: ["\"What if I can't handle this?\"", "\"Maybe I should go back to the old way\""],
        breakthroughStrategy: "Recognize that courage grows through practice, not perfection",
        nextLevelChallenge: "Building consistency in authentic choices"
      },
      determinedChanger: {
        name: "The Determined Changer",
        description: "You're committed to change but sometimes struggle with the pace and process.",
        specificSabotagePattern: "Impatience leading to abandonment of authentic path",
        coreLimitingBelief: "\"If it's not working quickly, I must be doing it wrong\"",
        typicalInnerDialogue: ["\"This is taking too long\"", "\"Maybe I'm not cut out for this\""],
        breakthroughStrategy: "Embrace authenticity as a lifelong journey, not a destination",
        nextLevelChallenge: "Maintaining commitment through slow periods of growth"
      },
      hopefulExplorer: {
        name: "The Hopeful Explorer",
        description: "You're exploring authenticity with optimism while navigating uncertainty.",
        specificSabotagePattern: "Overwhelm from too many possibilities and directions",
        coreLimitingBelief: "\"I need to figure out everything before I can move forward\"",
        typicalInnerDialogue: ["\"There are so many options\"", "\"What if I choose wrong?\""],
        breakthroughStrategy: "Take one authentic step at a time without needing the full map",
        nextLevelChallenge: "Making decisions with incomplete information"
      }
    }
  },
  tentativeOptimist: {
    name: "The Tentative Optimist",
    description: "You're at the beginning of your authenticity journey, often feeling uncertain about who you truly are beneath external expectations. While you may struggle with self-doubt and people-pleasing, you have an underlying optimism and desire for something more genuine.",
    authenticityJourney: "You're recognizing that there might be more to you than what you've been showing the world. This is the crucial first step - the awareness that authenticity is possible and valuable, even if it feels challenging right now.",
    traits: [
      "Growing awareness that change is possible",
      "Beginning to question automatic responses and behaviors",
      "Developing interest in self-discovery and growth",
      "Starting to recognize the cost of inauthentic living",
      "Hopeful about the possibility of positive change"
    ],
    coreStrengths: [
      "Openness to the possibility of growth and change",
      "Underlying resilience and hope for the future",
      "Capacity for self-reflection and honest self-assessment",
      "Willingness to consider new perspectives and approaches"
    ],
    commonChallenges: [
      "May feel overwhelmed by the prospect of change",
      "Often struggles with self-criticism and doubt",
      "Tends to prioritize others' approval over authentic expression"
    ],
    sabotagePatterns: [
      "Overwhelming self-criticism that prevents action",
      "Seeking permission or approval before making any changes",
      "Abandoning authentic impulses at the first sign of resistance"
    ],
    limitingBeliefs: [
      "\"I don't deserve to be happy or successful\"",
      "\"People like me don't get to live authentically\"",
      "\"I'm too damaged/flawed to change\""
    ],
    innerDialogue: [
      "\"Who am I to want more?\"",
      "\"I should be grateful for what I have\"",
      "\"I'm probably just being selfish\""
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    color: "bg-gradient-to-br from-purple-600 to-violet-700",
    recommendations: [
      "Begin with gentle self-exploration through journaling or reflection",
      "Practice one small act of authenticity each day",
      "Seek supportive resources like books, podcasts, or counseling",
      "Be patient and compassionate with yourself during this process",
      "Remember that every authentic person started exactly where you are now"
    ],
    subCategories: {
      overwhelmedSeeker: {
        name: "The Overwhelmed Seeker",
        description: "You want authenticity but feel overwhelmed by where to start and what it might require.",
        specificSabotagePattern: "Paralysis from overwhelm and perfectionism",
        coreLimitingBelief: "\"I need to change everything at once or it won't work\"",
        typicalInnerDialogue: ["\"This is too much\"", "\"I don't know where to start\""],
        breakthroughStrategy: "Focus on one tiny authentic choice at a time",
        nextLevelChallenge: "Building momentum through small consistent actions"
      },
      fearfulHoper: {
        name: "The Fearful Hoper",
        description: "You hope for authenticity but fear the potential consequences of being your true self.",
        specificSabotagePattern: "Fear-based retreat from authentic impulses",
        coreLimitingBelief: "\"If people see the real me, they'll reject me\"",
        typicalInnerDialogue: ["\"What if they don't like who I really am?\"", "\"It's safer to stay hidden\""],
        breakthroughStrategy: "Start with safe people and low-risk authentic expressions",
        nextLevelChallenge: "Gradually expanding your circle of authentic expression"
      },
      stuckDreamer: {
        name: "The Stuck Dreamer",
        description: "You dream of authenticity but feel stuck in patterns that keep you from your true self.",
        specificSabotagePattern: "Chronic procrastination and excuse-making",
        coreLimitingBelief: "\"I'm stuck and can't change\"",
        typicalInnerDialogue: ["\"I'll start tomorrow\"", "\"I'm just not the type of person who can change\""],
        breakthroughStrategy: "Recognize that you have more power than you realize",
        nextLevelChallenge: "Taking the first small step despite feeling stuck"
      }
    }
  }
};