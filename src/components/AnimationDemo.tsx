import React, { useState } from 'react';
import { FloatingCurrency, AnimatedBrain, AudioWaveform } from './animations';

const AnimationDemo: React.FC = () => {
  const [brainState, setBrainState] = useState<'idle' | 'thinking' | 'success'>('idle');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-Bilio-blue">
        Bilio Animation Components Demo
      </h1>
      
      {/* FloatingCurrency Demo */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-Bilio-gray-800">
          LATAM Currency Orbital System
        </h2>
        <div className="relative h-96 bg-gradient-to-br from-white to-gray-50 rounded-lg overflow-hidden border-2 border-Bilio-gray-200">
          <FloatingCurrency 
            density="high"
            speed="medium"
            area="section"
            globeCenter={{ x: 50, y: 50 }} // Center of the demo area
            showFlags={true}
          />
          
          {/* Mock globe/center point */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-16 h-16 bg-gradient-to-br from-Bilio-blue to-Bilio-green rounded-full shadow-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white/30 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="relative z-10 flex items-end justify-center h-full p-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-md text-center">
              <p className="text-sm text-Bilio-gray-700 font-medium">
                🌎 <strong>Pan-American Focus:</strong> 15 LATAM currencies orbiting in 4 layers
              </p>
              <p className="text-xs text-Bilio-gray-600 mt-2">
                USD, CAD, MXN, GTQ, CRC, PAB, COP, VES, BRL, PEN, BOB, CLP, ARS, PYG, UYU
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-Bilio-yellow-soft/20 p-4 rounded-lg">
          <h4 className="font-semibold text-Bilio-gray-800 mb-2">New Features:</h4>
          <ul className="text-sm text-Bilio-gray-700 space-y-1">
            <li>• <strong>4 Orbital Layers:</strong> Different distances and speeds for depth</li>
            <li>• <strong>30+ Symbols:</strong> Increased density with LATAM currencies</li>
            <li>• <strong>Flag Integration:</strong> Mix of currency symbols and country flags</li>
            <li>• <strong>Hypnotic Motion:</strong> Smooth elliptical orbits around gravity center</li>
            <li>• <strong>Depth Effects:</strong> Size, opacity, and glow based on distance</li>
          </ul>
        </div>
      </div>

      {/* AnimatedBrain Demo */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-Bilio-gray-800">
          AI Processing Brain
        </h2>
        <div className="bg-white p-8 rounded-lg border-2 border-Bilio-gray-200">
          <div className="flex flex-wrap gap-8 items-center justify-center mb-6">
            <div className="text-center">
              <p className="text-sm text-Bilio-gray-600 mb-2">Idle State</p>
              <AnimatedBrain state="idle" size="lg" particles={true} />
            </div>
            <div className="text-center">
              <p className="text-sm text-Bilio-gray-600 mb-2">Thinking State</p>
              <AnimatedBrain state="thinking" size="lg" particles={true} />
            </div>
            <div className="text-center">
              <p className="text-sm text-Bilio-gray-600 mb-2">Success State</p>
              <AnimatedBrain state="success" size="lg" particles={true} />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-Bilio-gray-600 mb-4">Interactive Demo:</p>
            <div className="flex gap-4 justify-center mb-4">
              <button
                onClick={() => setBrainState('idle')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  brainState === 'idle' 
                    ? 'bg-Bilio-blue text-white' 
                    : 'bg-Bilio-gray-200 text-Bilio-gray-700'
                }`}
              >
                Idle
              </button>
              <button
                onClick={() => setBrainState('thinking')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  brainState === 'thinking' 
                    ? 'bg-Bilio-yellow text-Bilio-gray-900' 
                    : 'bg-Bilio-gray-200 text-Bilio-gray-700'
                }`}
              >
                Thinking
              </button>
              <button
                onClick={() => setBrainState('success')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  brainState === 'success' 
                    ? 'bg-Bilio-green text-white' 
                    : 'bg-Bilio-gray-200 text-Bilio-gray-700'
                }`}
              >
                Success
              </button>
            </div>
            <AnimatedBrain state={brainState} size="xl" particles={true} />
          </div>
        </div>
      </div>

      {/* AudioWaveform Demo */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-Bilio-gray-800">
          Voice Message Waveform
        </h2>
        <div className="bg-white p-8 rounded-lg border-2 border-Bilio-gray-200">
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-sm text-Bilio-gray-600 mb-4">Different States & Colors:</p>
              <div className="flex flex-wrap gap-8 justify-center mb-6">
                <div className="text-center">
                  <p className="text-xs text-Bilio-gray-500 mb-2">Idle - Blue</p>
                  <AudioWaveform isPlaying={false} color="blue" size="md" />
                </div>
                <div className="text-center">
                  <p className="text-xs text-Bilio-gray-500 mb-2">Playing - Yellow</p>
                  <AudioWaveform isPlaying={true} color="yellow" size="md" />
                </div>
                <div className="text-center">
                  <p className="text-xs text-Bilio-gray-500 mb-2">Success - Green</p>
                  <AudioWaveform isPlaying={true} color="green" size="md" />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-Bilio-gray-600 mb-4">Interactive Demo:</p>
              <button
                onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors mb-4 ${
                  isAudioPlaying 
                    ? 'bg-Bilio-green text-white' 
                    : 'bg-Bilio-blue text-white'
                }`}
              >
                {isAudioPlaying ? 'Stop Recording' : 'Start Recording'}
              </button>
              <div className="flex justify-center">
                <AudioWaveform 
                  isPlaying={isAudioPlaying} 
                  color="blue" 
                  size="lg" 
                  amplitude="high"
                  transcribedText="Gasté 50 dólares en comida hoy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Info */}
      <div className="bg-Bilio-blue-soft p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-Bilio-blue mb-3">
          Performance Features
        </h3>
        <ul className="text-sm text-Bilio-gray-700 space-y-2">
          <li>• <strong>Reduced Motion Support:</strong> Automatic fallback for accessibility</li>
          <li>• <strong>Device Performance:</strong> Adaptive particle counts based on hardware</li>
          <li>• <strong>Optimized Rendering:</strong> GPU-accelerated transforms with Framer Motion</li>
          <li>• <strong>Brand Consistency:</strong> Uses Bilio color system throughout</li>
          <li>• <strong>Smooth Interactions:</strong> 60fps animations with efficient re-renders</li>
        </ul>
      </div>
    </div>
  );
};

export default AnimationDemo;