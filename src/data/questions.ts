import { Question } from '../types/quiz';

export const questions: Question[] = [
  // Original 20 questions (Self-Awareness, Authenticity, Resilience, Boundaries, Growth)
  {
    id: 1,
    text: "When you look in the mirror, who do you see?",
    dimension: 'selfAwareness',
    options: [
      {
        id: "a",
        text: "My true self, unfiltered and confident",
        points: 4
      },
      {
        id: "b", 
        text: "Mostly my true self, occasionally I have doubts",
        points: 3
      },
      {
        id: "c",
        text: "A version of me that fits the situation",
        points: 2
      },
      {
        id: "d",
        text: "A stranger, shaped by what others want",
        points: 1
      }
    ]
  },
  {
    id: 2,
    text: "How often do you say 'yes' when you really want to say 'no'?",
    dimension: 'authenticity',
    options: [
      {
        id: "a",
        text: "Never, I always stand by my decisions",
        points: 4
      },
      {
        id: "b",
        text: "Rarely, I'm learning to prioritize my needs",
        points: 3
      },
      {
        id: "c",
        text: "Sometimes, especially in important situations",
        points: 2
      },
      {
        id: "d",
        text: "Often, I struggle to assert myself",
        points: 1
      }
    ]
  },
  {
    id: 3,
    text: "What happens in your mind when you mess up?",
    dimension: 'resilience',
    options: [
      {
        id: "a",
        text: "I view it as a learning opportunity",
        points: 4
      },
      {
        id: "b",
        text: "I feel disappointed but try to learn from it",
        points: 3
      },
      {
        id: "c",
        text: "I dwell on it more than I should",
        points: 2
      },
      {
        id: "d",
        text: "I criticize myself harshly",
        points: 1
      }
    ]
  },
  {
    id: 4,
    text: "When you share your true feelings, how do you feel?",
    dimension: 'authenticity',
    options: [
      {
        id: "a",
        text: "Empowered and genuine",
        points: 4
      },
      {
        id: "b",
        text: "Mostly comfortable, but somewhat cautious",
        points: 3
      },
      {
        id: "c",
        text: "Hesitant and unsure how others will react",
        points: 2
      },
      {
        id: "d",
        text: "Vulnerable and fearful of judgment",
        points: 1
      }
    ]
  },
  {
    id: 5,
    text: "How would you describe your journey towards your life's purpose?",
    dimension: 'growth',
    options: [
      {
        id: "a",
        text: "A clear and driven path",
        points: 4
      },
      {
        id: "b",
        text: "A journey with purpose, but some uncertainty",
        points: 3
      },
      {
        id: "c",
        text: "A road with twists and unexpected turns",
        points: 2
      },
      {
        id: "d",
        text: "Uncertain and often confusing",
        points: 1
      }
    ]
  },
  {
    id: 6,
    text: "What's your relationship with societal norms?",
    dimension: 'authenticity',
    options: [
      {
        id: "a",
        text: "I actively challenge them, forging my own path",
        points: 4
      },
      {
        id: "b",
        text: "I question them but often conform for simplicity",
        points: 3
      },
      {
        id: "c",
        text: "I balance between fitting in and standing out",
        points: 2
      },
      {
        id: "d",
        text: "I follow them, they provide structure and guidance",
        points: 1
      }
    ]
  },
  {
    id: 7,
    text: "When you think about setting boundaries, what comes to mind?",
    dimension: 'boundaries',
    options: [
      {
        id: "a",
        text: "A vital part of my self-care and respect",
        points: 4
      },
      {
        id: "b",
        text: "Necessary but sometimes difficult to enforce",
        points: 3
      },
      {
        id: "c",
        text: "A challenging but needed task",
        points: 2
      },
      {
        id: "d",
        text: "Something I find uncomfortable and often avoid",
        points: 1
      }
    ]
  },
  {
    id: 8,
    text: "How do you feel about showing your weaknesses?",
    dimension: 'authenticity',
    options: [
      {
        id: "a",
        text: "It's a strength that fosters genuine connections",
        points: 4
      },
      {
        id: "b",
        text: "I'm selective but see its value in building trust",
        points: 3
      },
      {
        id: "c",
        text: "It's a selective process, based on trust",
        points: 2
      },
      {
        id: "d",
        text: "It's risky, best kept to myself",
        points: 1
      }
    ]
  },
  {
    id: 9,
    text: "When you think about being real, what's the first word that comes to mind?",
    dimension: 'selfAwareness',
    options: [
      {
        id: "a",
        text: "Empowerment - being true to myself",
        points: 4
      },
      {
        id: "b",
        text: "Growth - constantly evolving towards authenticity",
        points: 3
      },
      {
        id: "c",
        text: "Aspiration - it's a work in progress",
        points: 2
      },
      {
        id: "d",
        text: "Challenge - it feels difficult to achieve",
        points: 1
      }
    ]
  },
  {
    id: 10,
    text: "What's the narrative in your head when you're alone with your thoughts?",
    dimension: 'selfAwareness',
    options: [
      {
        id: "a",
        text: "Positive and forward-thinking",
        points: 4
      },
      {
        id: "b",
        text: "A mix of constructive planning and self-reflection",
        points: 3
      },
      {
        id: "c",
        text: "A mix of self-reflection and self-doubt",
        points: 2
      },
      {
        id: "d",
        text: "Dominated by self-criticism and doubt",
        points: 1
      }
    ]
  },
  {
    id: 11,
    text: "What do you do if someone doesn't agree with you?",
    dimension: 'boundaries',
    options: [
      {
        id: "a",
        text: "Embrace it; different views are enriching",
        points: 4
      },
      {
        id: "b",
        text: "Open to discussion, seeing it as an opportunity for growth",
        points: 3
      },
      {
        id: "c",
        text: "I'm careful but willing to talk",
        points: 2
      },
      {
        id: "d",
        text: "I get defensive or avoid confrontation",
        points: 1
      }
    ]
  },
  {
    id: 12,
    text: "How do you try to make yourself better?",
    dimension: 'growth',
    options: [
      {
        id: "a",
        text: "Constant self-improvement is a key focus for me",
        points: 4
      },
      {
        id: "b",
        text: "I seek growth, but balance it with self-acceptance",
        points: 3
      },
      {
        id: "c",
        text: "I try sometimes when I see a clear need",
        points: 2
      },
      {
        id: "d",
        text: "I don't often focus on self-improvement",
        points: 1
      }
    ]
  },
  {
    id: 13,
    text: "When you're praised for something, how do you feel inside?",
    dimension: 'selfAwareness',
    options: [
      {
        id: "a",
        text: "Grateful, but my self-worth isn't tied to it",
        points: 4
      },
      {
        id: "b",
        text: "Pleased, it's affirming but not essential",
        points: 3
      },
      {
        id: "c",
        text: "Happy, it's a nice boost",
        points: 2
      },
      {
        id: "d",
        text: "Relieved, as it often reassures my self-worth",
        points: 1
      }
    ]
  },
  {
    id: 14,
    text: "How do you handle conflicts in relationships?",
    dimension: 'boundaries',
    options: [
      {
        id: "a",
        text: "Directly address them for a healthy resolution",
        points: 4
      },
      {
        id: "b",
        text: "Cautiously, aiming for understanding but sometimes anxious",
        points: 3
      },
      {
        id: "c",
        text: "I'm careful, trying to see both sides",
        points: 2
      },
      {
        id: "d",
        text: "I avoid them to keep the peace",
        points: 1
      }
    ]
  },
  {
    id: 15,
    text: "What's your relationship with failure?",
    dimension: 'resilience',
    options: [
      {
        id: "a",
        text: "A valuable teacher and opportunity for growth",
        points: 4
      },
      {
        id: "b",
        text: "Disappointing, but I try to learn from it",
        points: 3
      },
      {
        id: "c",
        text: "A setback, but not the end",
        points: 2
      },
      {
        id: "d",
        text: "A significant source of stress and self-doubt",
        points: 1
      }
    ]
  },
  {
    id: 16,
    text: "How often do you compare yourself to others?",
    dimension: 'boundaries',
    options: [
      {
        id: "a",
        text: "Rarely, as I'm focused on my personal journey",
        points: 4
      },
      {
        id: "b",
        text: "Occasionally, but try to keep perspective",
        points: 3
      },
      {
        id: "c",
        text: "Sometimes, it's hard not to",
        points: 2
      },
      {
        id: "d",
        text: "Frequently, it's how I gauge my progress",
        points: 1
      }
    ]
  },
  {
    id: 17,
    text: "When you have free time, what do you usually do?",
    dimension: 'growth',
    options: [
      {
        id: "a",
        text: "Engage in activities that fulfill and rejuvenate me",
        points: 4
      },
      {
        id: "b",
        text: "Try to balance enjoyable activities with rest",
        points: 3
      },
      {
        id: "c",
        text: "Balance between what I love and what's easy",
        points: 2
      },
      {
        id: "d",
        text: "Do what's convenient or expected",
        points: 1
      }
    ]
  },
  {
    id: 18,
    text: "How do you approach challenges or obstacles?",
    dimension: 'resilience',
    options: [
      {
        id: "a",
        text: "As opportunities for growth and learning",
        points: 4
      },
      {
        id: "b",
        text: "With a mix of determination and caution",
        points: 3
      },
      {
        id: "c",
        text: "With caution, weighing pros and cons",
        points: 2
      },
      {
        id: "d",
        text: "As threats to my comfort zone",
        points: 1
      }
    ]
  },
  {
    id: 19,
    text: "What role does fear play in your choices?",
    dimension: 'resilience',
    options: [
      {
        id: "a",
        text: "Minimal, I focus on goals and growth",
        points: 4
      },
      {
        id: "b",
        text: "It's present but doesn't dominate my decisions",
        points: 3
      },
      {
        id: "c",
        text: "Moderate, it's a factor but not the main one",
        points: 2
      },
      {
        id: "d",
        text: "Significant, it often holds me back",
        points: 1
      }
    ]
  },
  {
    id: 20,
    text: "How often do you practice self-compassion?",
    dimension: 'growth',
    options: [
      {
        id: "a",
        text: "Regularly, it's integral to my well-being",
        points: 4
      },
      {
        id: "b",
        text: "Often, I recognize its importance for mental health",
        points: 3
      },
      {
        id: "c",
        text: "Occasionally, when I remember to",
        points: 2
      },
      {
        id: "d",
        text: "Rarely, I'm very critical of myself",
        points: 1
      }
    ]
  },

  // NEW QUESTIONS: Self-Sabotage Assessment (21-24)
  {
    id: 21,
    text: "When you're close to achieving something important, what typically happens?",
    dimension: 'selfSabotage',
    options: [
      {
        id: "a",
        text: "I push through and celebrate my progress",
        points: 4
      },
      {
        id: "b",
        text: "I feel nervous but continue moving forward",
        points: 3
      },
      {
        id: "c",
        text: "I sometimes create unnecessary obstacles or delays",
        points: 2
      },
      {
        id: "d",
        text: "I often find ways to sabotage my success",
        points: 1
      }
    ]
  },
  {
    id: 22,
    text: "How do you respond when opportunities for growth or advancement arise?",
    dimension: 'selfSabotage',
    options: [
      {
        id: "a",
        text: "I embrace them with excitement and confidence",
        points: 4
      },
      {
        id: "b",
        text: "I feel excited but also somewhat anxious",
        points: 3
      },
      {
        id: "c",
        text: "I hesitate and often talk myself out of them",
        points: 2
      },
      {
        id: "d",
        text: "I avoid them or find reasons why I'm not ready",
        points: 1
      }
    ]
  },
  {
    id: 23,
    text: "When you start making positive changes in your life, what happens next?",
    dimension: 'selfSabotage',
    options: [
      {
        id: "a",
        text: "I maintain momentum and build on the changes",
        points: 4
      },
      {
        id: "b",
        text: "I continue but sometimes struggle with consistency",
        points: 3
      },
      {
        id: "c",
        text: "I often revert to old patterns after initial progress",
        points: 2
      },
      {
        id: "d",
        text: "I typically abandon the changes and return to familiar habits",
        points: 1
      }
    ]
  },
  {
    id: 24,
    text: "How do you handle compliments or recognition for your achievements?",
    dimension: 'selfSabotage',
    options: [
      {
        id: "a",
        text: "I accept them gracefully and feel deserving",
        points: 4
      },
      {
        id: "b",
        text: "I appreciate them but sometimes feel uncomfortable",
        points: 3
      },
      {
        id: "c",
        text: "I deflect them or minimize my accomplishments",
        points: 2
      },
      {
        id: "d",
        text: "I reject them and often prove why I don't deserve them",
        points: 1
      }
    ]
  },

  // NEW QUESTIONS: Limiting Beliefs Assessment (25-28)
  {
    id: 25,
    text: "What's your first thought when considering a big dream or goal?",
    dimension: 'limitingBeliefs',
    options: [
      {
        id: "a",
        text: "How can I make this happen?",
        points: 4
      },
      {
        id: "b",
        text: "This could be possible with the right plan",
        points: 3
      },
      {
        id: "c",
        text: "This seems difficult but maybe achievable",
        points: 2
      },
      {
        id: "d",
        text: "People like me don't achieve things like this",
        points: 1
      }
    ]
  },
  {
    id: 26,
    text: "How do you view your past mistakes and failures?",
    dimension: 'limitingBeliefs',
    options: [
      {
        id: "a",
        text: "As valuable learning experiences that made me stronger",
        points: 4
      },
      {
        id: "b",
        text: "As lessons learned, though sometimes painful",
        points: 3
      },
      {
        id: "c",
        text: "As evidence that I need to be more careful",
        points: 2
      },
      {
        id: "d",
        text: "As proof that I'm not capable of success",
        points: 1
      }
    ]
  },
  {
    id: 27,
    text: "When you think about your potential, what comes to mind?",
    dimension: 'limitingBeliefs',
    options: [
      {
        id: "a",
        text: "I have unlimited potential to grow and achieve",
        points: 4
      },
      {
        id: "b",
        text: "I have good potential in certain areas",
        points: 3
      },
      {
        id: "c",
        text: "I have some potential but also significant limitations",
        points: 2
      },
      {
        id: "d",
        text: "I'm limited by my circumstances, background, or abilities",
        points: 1
      }
    ]
  },
  {
    id: 28,
    text: "How do you respond to the idea that you deserve success and happiness?",
    dimension: 'limitingBeliefs',
    options: [
      {
        id: "a",
        text: "Absolutely, everyone deserves success and happiness",
        points: 4
      },
      {
        id: "b",
        text: "I believe this intellectually, though sometimes doubt it personally",
        points: 3
      },
      {
        id: "c",
        text: "I think some people deserve it more than others",
        points: 2
      },
      {
        id: "d",
        text: "I need to earn or prove my worthiness first",
        points: 1
      }
    ]
  }
];