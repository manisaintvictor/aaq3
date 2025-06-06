import React from 'react';
import { Play, RotateCcw, Heart, Target, Compass, Shield, TrendingUp, AlertTriangle, Brain } from 'lucide-react';

interface QuizStartProps {
  onStart: () => void;
  onResume?: () => void;
  hasProgress?: boolean;
}

export default function QuizStart({ onStart, onResume, hasProgress }: QuizStartProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Your
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Authentic Self</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Take our comprehensive authenticity & self-sabotage assessment to understand where you are on your journey toward living as your true self. Get personalized insights and actionable steps for breakthrough.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Discover:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Your Authenticity Type & Subtype</h4>
                    <p className="text-gray-600">One of five distinct profiles with specific subcategories based on your unique patterns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Your Self-Sabotage Profile</h4>
                    <p className="text-gray-600">Identify specific patterns, triggers, and strategies that keep you stuck</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Brain className="w-6 h-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Limiting Beliefs Analysis</h4>
                    <p className="text-gray-600">Uncover the core beliefs that block your potential and learn how to transform them</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Compass className="w-6 h-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">7-Dimensional Analysis</h4>
                    <p className="text-gray-600">Deep insights across authenticity, self-sabotage, limiting beliefs, boundaries, and more</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Inner Dialogue Patterns</h4>
                    <p className="text-gray-600">Understand your mental patterns and learn how to shift them for breakthrough</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Breakthrough Strategy</h4>
                    <p className="text-gray-600">Personalized roadmap for overcoming your specific blocks and achieving authenticity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessment Details:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">28 scientifically-designed questions</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Takes 8-10 minutes to complete</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Auto-save with pause & resume capability</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Comprehensive multi-dimensional analysis</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Personalized video insights for your type</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Shareable results for social media</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-indigo-900 mb-3">Perfect Follow-Up to Your Self-Sabotage Toolkit</h4>
                <p className="text-sm text-indigo-800 mb-3">
                  This assessment builds on your toolkit knowledge to provide:
                </p>
                <div className="text-sm text-indigo-800 space-y-1">
                  <div>• Specific sabotage patterns unique to your type</div>
                  <div>• Targeted breakthrough strategies</div>
                  <div>• Advanced authenticity development roadmap</div>
                  <div>• Personalized inner dialogue transformation</div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-red-900 mb-2">The Five Authenticity Types:</h4>
                <div className="text-sm text-red-800 space-y-1">
                  <div>• The Aware Authentic (3 subtypes)</div>
                  <div>• The Cautious Explorer (3 subtypes)</div>
                  <div>• The Sensitive Connector (3 subtypes)</div>
                  <div>• The Aspiring Trailblazer (3 subtypes)</div>
                  <div>• The Tentative Optimist (3 subtypes)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {hasProgress && onResume && (
              <button
                onClick={onResume}
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Resume Assessment
              </button>
            )}
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Play className="w-5 h-5 mr-2 ml-1" />
              {hasProgress ? 'Start Over' : 'Begin Assessment'}
            </button>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Your responses are saved locally and never shared without your permission.</p>
        </div>
      </div>
    </div>
  );
}