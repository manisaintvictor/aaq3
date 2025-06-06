import React, { useState } from 'react';
import { Trophy, Share2, Download, PlayCircle, BarChart3, Lightbulb, Target, TrendingUp, Heart, AlertTriangle, Brain, MessageCircle } from 'lucide-react';
import { QuizResult } from '../types/quiz';
import { categories } from '../data/categories';

interface QuizResultsProps {
  result: QuizResult;
  onRestart: () => void;
}

export default function QuizResults({ result, onRestart }: QuizResultsProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'dimensions' | 'insights' | 'sabotage' | 'recommendations'>('overview');
  const categoryInfo = categories[result.category];
  const subCategoryInfo = categoryInfo.subCategories[result.subCategory];
  const maxDimensionScore = 16; // 4 questions × 4 points max each

  const handleShare = async (platform: 'twitter' | 'linkedin' | 'facebook') => {
    const text = `I just discovered I'm ${categoryInfo.name} (${subCategoryInfo.name})! Take this comprehensive authenticity & self-sabotage assessment to discover your type.`;
    const url = window.location.href;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const getDimensionLabel = (dimension: string) => {
    const labels = {
      selfAwareness: 'Self-Awareness',
      authenticity: 'Authenticity',
      resilience: 'Resilience',
      boundaries: 'Boundaries',
      growth: 'Growth Mindset',
      selfSabotage: 'Self-Sabotage Resistance',
      limitingBeliefs: 'Empowering Beliefs'
    };
    return labels[dimension as keyof typeof labels] || dimension;
  };

  const getDimensionColor = (dimension: string, score: number) => {
    if (dimension === 'selfSabotage' || dimension === 'limitingBeliefs') {
      // For these dimensions, higher scores are better
      if (score >= 13) return 'bg-gradient-to-r from-emerald-500 to-teal-600';
      if (score < 10) return 'bg-gradient-to-r from-red-500 to-orange-600';
      return 'bg-gradient-to-r from-amber-500 to-orange-600';
    } else {
      // For other dimensions, higher scores are better
      if (score >= 13) return 'bg-gradient-to-r from-emerald-500 to-teal-600';
      if (score < 10) return 'bg-gradient-to-r from-amber-500 to-orange-600';
      return 'bg-gradient-to-r from-indigo-500 to-purple-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Assessment Complete!
          </h1>
          <p className="text-xl text-gray-600">
            Discover your comprehensive authenticity & self-sabotage profile below
          </p>
        </div>

        {/* Category Result Card */}
        <div className={`${categoryInfo.color} rounded-2xl shadow-xl p-8 md:p-12 mb-8 text-white`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {categoryInfo.name}
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 opacity-90">
              {subCategoryInfo.name}
            </h3>
            <p className="text-xl opacity-95 leading-relaxed mb-4">
              {subCategoryInfo.description}
            </p>
            <div className="inline-flex items-center bg-white/20 rounded-lg px-4 py-2">
              <Heart className="w-5 h-5 mr-2" />
              <span className="font-semibold">Total Score: {result.totalScore}/112</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black/20 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Your Sabotage Pattern
              </h4>
              <p className="text-lg opacity-95 leading-relaxed">
                {subCategoryInfo.specificSabotagePattern}
              </p>
            </div>

            <div className="bg-black/20 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-3 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Core Limiting Belief
              </h4>
              <p className="text-lg opacity-95 leading-relaxed italic">
                "{subCategoryInfo.coreLimitingBelief}"
              </p>
            </div>
          </div>

          <div className="bg-black/20 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-bold mb-3 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Typical Inner Dialogue
            </h4>
            <div className="space-y-2">
              {subCategoryInfo.typicalInnerDialogue.map((dialogue, index) => (
                <p key={index} className="text-lg opacity-95 italic">
                  "{dialogue}"
                </p>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-black/20 rounded-xl p-6 mb-8">
            <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                <PlayCircle className="w-6 h-6 mr-2" />
                Watch Your Personal Video
              </button>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleShare('twitter')}
              className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors duration-200"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Twitter
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors duration-200"
            >
              <Share2 className="w-4 h-4 mr-2" />
              LinkedIn
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors duration-200"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Facebook
            </button>
          </div>
        </div>

        {/* Detailed Results Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'dimensions', label: 'Dimensions', icon: Target },
                { id: 'sabotage', label: 'Sabotage Profile', icon: AlertTriangle },
                { id: 'insights', label: 'Personal Insights', icon: Lightbulb },
                { id: 'recommendations', label: 'Next Steps', icon: TrendingUp }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 px-3 py-4 text-xs md:text-sm font-medium border-b-2 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-indigo-600 text-indigo-600 bg-indigo-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mx-auto mb-1" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Authenticity Profile</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Strengths</h4>
                    <div className="space-y-3">
                      {categoryInfo.coreStrengths.map((strength, index) => (
                        <div key={index} className="flex items-start p-3 bg-emerald-50 rounded-lg">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-800">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Common Challenges</h4>
                    <div className="space-y-3">
                      {categoryInfo.commonChallenges.map((challenge, index) => (
                        <div key={index} className="flex items-start p-3 bg-amber-50 rounded-lg">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-800">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Breakthrough Strategy</h4>
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <p className="text-indigo-900 font-medium text-lg">
                      {subCategoryInfo.breakthroughStrategy}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'dimensions' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">7-Dimension Breakdown</h3>
                <div className="space-y-6">
                  {Object.entries(result.dimensionScores).map(([dimension, score]) => {
                    const percentage = (score / maxDimensionScore) * 100;
                    const isStrength = score >= 13;
                    const needsWork = score < 10;
                    const isSabotageOrBeliefs = dimension === 'selfSabotage' || dimension === 'limitingBeliefs';
                    
                    return (
                      <div key={dimension} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{getDimensionLabel(dimension)}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">{score}/{maxDimensionScore}</span>
                            {isStrength && <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">Strength</span>}
                            {needsWork && <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Critical Area</span>}
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div
                            className={`h-4 rounded-full transition-all duration-1000 ease-out ${getDimensionColor(dimension, score)}`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        {isSabotageOrBeliefs && needsWork && (
                          <p className="text-sm text-red-700 bg-red-50 p-3 rounded-lg">
                            <strong>Critical:</strong> This low score indicates significant {dimension === 'selfSabotage' ? 'self-sabotage patterns' : 'limiting beliefs'} that may be blocking your progress.
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'sabotage' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Self-Sabotage Profile</h3>
                <div className="space-y-8">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-red-900 mb-3">Primary Sabotage Pattern</h4>
                    <p className="text-red-800 font-medium">
                      {result.sabotageProfile.primaryPattern}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Trigger Situations</h4>
                    <div className="grid gap-3">
                      {result.sabotageProfile.triggerSituations.map((trigger, index) => (
                        <div key={index} className="flex items-start p-4 bg-amber-50 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-800">{trigger}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Common Sabotage Strategies</h4>
                    <div className="grid gap-3">
                      {result.sabotageProfile.sabotageStrategies.map((strategy, index) => (
                        <div key={index} className="flex items-start p-4 bg-red-50 rounded-lg">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-800">{strategy}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Limiting Beliefs</h4>
                    <div className="grid gap-3">
                      {result.sabotageProfile.coreBeliefs.map((belief, index) => (
                        <div key={index} className="p-4 bg-purple-50 rounded-lg">
                          <p className="text-purple-900 italic font-medium">"{belief}"</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Breakthrough Opportunities</h4>
                    <div className="grid gap-3">
                      {result.sabotageProfile.breakthroughOpportunities.map((opportunity, index) => (
                        <div key={index} className="flex items-start p-4 bg-emerald-50 rounded-lg">
                          <div className="w-6 h-6 bg-emerald-600 rounded-full flex-shrink-0 mr-3 mt-0.5">
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-2"></div>
                          </div>
                          <span className="text-gray-800 font-medium">{opportunity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'insights' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Insights</h3>
                <div className="space-y-8">
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-indigo-900 mb-3">Authenticity Level: {result.insights.authenticityLevel}</h4>
                    <p className="text-indigo-800">
                      Your primary challenge: {result.insights.primaryChallenge}
                    </p>
                  </div>

                  {result.insights.strengths.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Key Strengths</h4>
                      <div className="grid gap-3">
                        {result.insights.strengths.map((strength, index) => (
                          <div key={index} className="flex items-start p-4 bg-emerald-50 rounded-lg">
                            <div className="w-6 h-6 bg-emerald-600 rounded-full flex-shrink-0 mr-3 mt-0.5">
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-2"></div>
                            </div>
                            <span className="text-gray-800 font-medium">{strength}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {result.insights.sabotageWarnings.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Sabotage Warnings</h4>
                      <div className="grid gap-3">
                        {result.insights.sabotageWarnings.map((warning, index) => (
                          <div key={index} className="flex items-start p-4 bg-red-50 rounded-lg">
                            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-800 font-medium">{warning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {result.insights.beliefTransformations.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Belief Transformations</h4>
                      <div className="grid gap-3">
                        {result.insights.beliefTransformations.map((transformation, index) => (
                          <div key={index} className="p-4 bg-purple-50 rounded-lg">
                            <p className="text-purple-900 font-medium">{transformation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {result.insights.innerDialogueShifts.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Inner Dialogue Shifts</h4>
                      <div className="grid gap-3">
                        {result.insights.innerDialogueShifts.map((shift, index) => (
                          <div key={index} className="p-4 bg-blue-50 rounded-lg">
                            <p className="text-blue-900 font-medium">{shift}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'recommendations' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Next Steps</h3>
                <div className="space-y-6">
                  <div className="bg-emerald-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-emerald-900 mb-3">Next Level Challenge</h4>
                    <p className="text-emerald-800 font-medium">
                      {subCategoryInfo.nextLevelChallenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Immediate Actions</h4>
                    <div className="space-y-3">
                      {result.insights.nextSteps.map((step, index) => (
                        <div key={index} className="border-l-4 border-indigo-600 pl-4 py-2">
                          <p className="text-gray-800 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Long-term Recommendations</h4>
                    <div className="space-y-3">
                      {categoryInfo.recommendations.map((recommendation, index) => (
                        <div key={index} className="border-l-4 border-purple-600 pl-4 py-2">
                          <p className="text-gray-800 leading-relaxed">{recommendation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Take Assessment Again
          </button>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Results
          </button>
        </div>
      </div>
    </div>
  );
}