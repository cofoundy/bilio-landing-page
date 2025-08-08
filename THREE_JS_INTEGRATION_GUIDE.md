# Three.js Integration Guide for Bilio Landing Page

## 🎯 Overview

This guide provides a comprehensive plan for integrating Three.js into the Bilio landing page to enhance the 3D elements beyond the current Cobe + Framer Motion implementation.

## 📦 Installation

### Required Dependencies

```bash
# Core Three.js
npm install three @types/three

# React Three Fiber (React integration)
npm install @react-three/fiber @react-three/drei

# Post-processing effects
npm install @react-three/postprocessing

# Additional utilities
npm install @react-three/cannon  # Physics engine
npm install zustand  # State management for 3D scenes
npm install leva  # Development controls (optional)
```

### Development Dependencies

```bash
# Enhanced TypeScript support
npm install --save-dev @types/three

# Webpack/Vite plugins for Three.js optimization
npm install --save-dev vite-plugin-glsl  # For shader files
```

## 🏗️ Architecture Strategy

### Progressive Enhancement Approach

```typescript
// utils/webgl-detection.ts
export const getWebGLCapabilities = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  
  if (!gl) return { support: 'none', tier: 0 };
  
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  const renderer = debugInfo ? 
    gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
  
  // Device tier classification
  if (renderer.includes('Mali-G')) return { support: 'mobile', tier: 2 };
  if (renderer.includes('Mali') || renderer.includes('Adreno')) {
    return { support: 'mobile', tier: 1 };
  }
  if (renderer.includes('Intel')) return { support: 'desktop', tier: 2 };
  if (renderer.includes('NVIDIA') || renderer.includes('Radeon')) {
    return { support: 'desktop', tier: 3 };
  }
  
  return { support: 'desktop', tier: 2 };
};

// Performance-based component selection
export const useOptimal3DComponent = (fallback: React.ComponentType) => {
  const [capabilities, setCapabilities] = useState({ support: 'checking', tier: 0 });
  
  useEffect(() => {
    setCapabilities(getWebGLCapabilities());
  }, []);
  
  return capabilities;
};
```

### Component Structure

```
/components/3d/
├── core/
│   ├── Scene.tsx              # Main Three.js scene wrapper
│   ├── Camera.tsx             # Camera controls and positioning
│   ├── Lighting.tsx           # Scene lighting setup
│   └── PostProcessing.tsx     # Effects and filters
├── objects/
│   ├── Globe3D.tsx            # Advanced globe with Three.js
│   ├── CurrencyParticles.tsx  # 3D currency particle system
│   ├── Dashboard3D.tsx        # 3D dashboard visualization
│   └── FinancialFlow.tsx      # Data flow animations
├── materials/
│   ├── BilioMaterial.tsx      # Brand-specific materials
│   ├── shaders/               # Custom GLSL shaders
│   │   ├── globe.vert
│   │   ├── globe.frag
│   │   ├── currency.vert
│   │   └── currency.frag
└── hooks/
    ├── useOptimizedRender.tsx # Performance optimization
    ├── useBilioTheme.tsx      # 3D theme integration
    └── useDeviceAdaptation.tsx # Device-specific settings
```

## 🌍 Enhanced Globe Component

### Advanced Globe Implementation

```typescript
// components/3d/objects/Globe3D.tsx
import { useRef, useMemo } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { Sphere, Float, Text3D, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Custom shader material for the globe
const GlobeMaterial = shaderMaterial(
  {
    time: 0,
    primaryColor: new THREE.Color('#FFC700'),
    secondaryColor: new THREE.Color('#002F6C'),
    accentColor: new THREE.Color('#0AAD6E'),
    texture: null,
  },
  // Vertex shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    
    void main() {
      vUv = uv;
      vPosition = position;
      
      // Subtle vertex animation for living globe effect
      vec3 pos = position;
      pos += normal * sin(position.x * 10.0 + time) * 0.01;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform vec3 primaryColor;
    uniform vec3 secondaryColor;
    uniform vec3 accentColor;
    uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      // Create continents pattern
      float continents = sin(vUv.x * 12.0) * cos(vUv.y * 6.0);
      continents = smoothstep(0.3, 0.7, continents + 0.5);
      
      // Animated glow effect
      float glow = sin(time * 2.0 + vPosition.x * 5.0) * 0.1 + 0.9;
      
      // Mix colors based on continents and glow
      vec3 baseColor = mix(secondaryColor, primaryColor, continents);
      vec3 finalColor = baseColor * glow;
      
      // Add accent highlights for LATAM regions
      if (vUv.x > 0.2 && vUv.x < 0.4 && vUv.y > 0.3 && vUv.y < 0.7) {
        finalColor = mix(finalColor, accentColor, 0.3);
      }
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ GlobeMaterial });

interface Globe3DProps {
  size?: number;
  rotationSpeed?: number;
  currencies?: Array<{
    symbol: string;
    position: [number, number, number];
    color: string;
  }>;
}

export const Globe3D: React.FC<Globe3DProps> = ({
  size = 1,
  rotationSpeed = 1,
  currencies = []
}) => {
  const globeRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  
  // Animation loop
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.003 * rotationSpeed;
    }
    if (materialRef.current) {
      materialRef.current.time = state.clock.elapsedTime;
    }
  });
  
  return (
    <group>
      {/* Main Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[size, 64, 32]} />
        <globeMaterial
          ref={materialRef}
          primaryColor="#FFC700"
          secondaryColor="#002F6C"
          accentColor="#0AAD6E"
        />
      </mesh>
      
      {/* Orbiting Currencies */}
      {currencies.map((currency, index) => (
        <Float
          key={currency.symbol}
          speed={2 + Math.random()}
          rotationIntensity={0.5}
          floatIntensity={0.2}
        >
          <Text3D
            position={currency.position}
            font="/fonts/bilio-font.json"
            size={0.2}
            height={0.05}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.01}
            bevelOffset={0}
            bevelSegments={5}
          >
            {currency.symbol}
            <meshStandardMaterial 
              color={currency.color}
              metalness={0.3}
              roughness={0.4}
              emissive={currency.color}
              emissiveIntensity={0.2}
            />
          </Text3D>
        </Float>
      ))}
      
      {/* Atmospheric glow */}
      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[size, 32, 16]} />
        <meshBasicMaterial
          color="#FFC700"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};
```

## 📊 3D Dashboard Visualization

### Interactive 3D Charts

```typescript
// components/3d/objects/Dashboard3D.tsx
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface DashboardData {
  categories: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  balance: number;
  trend: number[];
}

export const Dashboard3D: React.FC<{ data: DashboardData }> = ({ data }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });
  
  // Calculate pie chart segments
  const total = data.categories.reduce((sum, cat) => sum + cat.value, 0);
  let currentAngle = 0;
  
  const segments = data.categories.map((category, index) => {
    const angle = (category.value / total) * Math.PI * 2;
    const segment = {
      ...category,
      startAngle: currentAngle,
      angle: angle,
      midAngle: currentAngle + angle / 2,
    };
    currentAngle += angle;
    return segment;
  });
  
  return (
    <group ref={groupRef} scale={[0.8, 0.8, 0.8]}>
      {/* 3D Pie Chart */}
      <group position={[0, 0, 0]}>
        {segments.map((segment, index) => {
          const radius = hoveredSegment === index ? 1.2 : 1.0;
          const height = 0.2;
          
          return (
            <mesh
              key={segment.name}
              position={[
                Math.cos(segment.midAngle) * (radius - 1) * 0.1,
                0,
                Math.sin(segment.midAngle) * (radius - 1) * 0.1,
              ]}
              onPointerEnter={() => setHoveredSegment(index)}
              onPointerLeave={() => setHoveredSegment(null)}
            >
              <cylinderGeometry
                args={[
                  radius, radius, height, 32, 1, false,
                  segment.startAngle, segment.angle
                ]}
              />
              <meshStandardMaterial
                color={segment.color}
                metalness={0.2}
                roughness={0.3}
                emissive={segment.color}
                emissiveIntensity={hoveredSegment === index ? 0.3 : 0.1}
              />
            </mesh>
          );
        })}
      </group>
      
      {/* Floating Balance Display */}
      <group position={[0, 2, 0]}>
        <RoundedBox args={[2, 0.5, 0.1]} radius={0.05}>
          <meshStandardMaterial
            color="#FFFFFF"
            transparent
            opacity={0.9}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.2}
          color="#002F6C"
          anchorX="center"
          anchorY="middle"
          font="/fonts/bilio-font-bold.woff"
        >
          ${data.balance.toLocaleString()}
        </Text>
      </group>
      
      {/* Trend Line */}
      <group position={[0, -1.5, 0]}>
        {data.trend.map((value, index) => {
          const x = (index / (data.trend.length - 1)) * 4 - 2;
          const y = value * 0.5;
          
          return (
            <mesh key={index} position={[x, y, 0]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial
                color={value > 0 ? '#0AAD6E' : '#EF4444'}
                emissive={value > 0 ? '#0AAD6E' : '#EF4444'}
                emissiveIntensity={0.2}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};
```

## 🎮 Interactive Features

### Advanced Interactions

```typescript
// hooks/use3DInteractions.ts
import { useState, useCallback } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const use3DInteractions = () => {
  const { camera, gl } = useThree();
  const [interactions, setInteractions] = useState({
    hoveredObject: null,
    selectedObject: null,
    isDragging: false,
  });
  
  const handleHover = useCallback((object: THREE.Object3D | null) => {
    setInteractions(prev => ({ ...prev, hoveredObject: object }));
    gl.domElement.style.cursor = object ? 'pointer' : 'auto';
  }, [gl]);
  
  const handleClick = useCallback((object: THREE.Object3D | null) => {
    setInteractions(prev => ({ ...prev, selectedObject: object }));
  }, []);
  
  const animateToObject = useCallback((object: THREE.Object3D) => {
    // Smooth camera animation to focus on object
    const targetPosition = object.position.clone().add(new THREE.Vector3(0, 0, 5));
    
    // Use tween or framer motion for smooth camera movement
    // Implementation depends on chosen animation library
  }, [camera]);
  
  return {
    interactions,
    handleHover,
    handleClick,
    animateToObject,
  };
};
```

## 🎨 Custom Shaders

### Bilio Brand Shaders

```glsl
// shaders/currency-particle.vert
uniform float time;
uniform float size;
attribute vec3 color;
attribute float speed;
attribute float phase;

varying vec3 vColor;
varying float vOpacity;

void main() {
  vColor = color;
  
  // Orbital motion
  float angle = time * speed + phase;
  vec3 pos = position;
  pos.x += sin(angle) * 0.5;
  pos.y += cos(angle * 0.7) * 0.3;
  pos.z += sin(angle * 0.5) * 0.4;
  
  // Distance-based opacity
  float distance = length(pos);
  vOpacity = 1.0 - smoothstep(2.0, 5.0, distance);
  
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = size * (300.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
```

```glsl
// shaders/currency-particle.frag
uniform sampler2D texture;
varying vec3 vColor;
varying float vOpacity;

void main() {
  vec2 uv = gl_PointCoord;
  
  // Circular particle shape
  float distance = length(uv - 0.5);
  if (distance > 0.5) discard;
  
  // Soft edge
  float alpha = 1.0 - smoothstep(0.3, 0.5, distance);
  alpha *= vOpacity;
  
  // Bilio brand glow effect
  vec3 finalColor = vColor;
  finalColor += vColor * 0.5 * (1.0 - distance * 2.0);
  
  gl_FragColor = vec4(finalColor, alpha);
}
```

## ⚡ Performance Optimization

### Adaptive Quality System

```typescript
// utils/performance-manager.ts
export class Performance3DManager {
  private qualityLevel: number = 3;
  private fps: number[] = [];
  private frameTimeTarget: number = 16.67; // 60fps
  
  updateFPS(deltaTime: number) {
    this.fps.push(1000 / deltaTime);
    if (this.fps.length > 60) this.fps.shift();
    
    const avgFPS = this.fps.reduce((a, b) => a + b, 0) / this.fps.length;
    
    // Adaptive quality based on performance
    if (avgFPS < 30 && this.qualityLevel > 1) {
      this.qualityLevel--;
      this.applyQualitySettings();
    } else if (avgFPS > 55 && this.qualityLevel < 3) {
      this.qualityLevel++;
      this.applyQualitySettings();
    }
  }
  
  private applyQualitySettings() {
    const settings = {
      1: { // Low quality
        particleCount: 50,
        globeSegments: 32,
        shadowMapSize: 512,
        antialias: false,
      },
      2: { // Medium quality
        particleCount: 100,
        globeSegments: 64,
        shadowMapSize: 1024,
        antialias: true,
      },
      3: { // High quality
        particleCount: 200,
        globeSegments: 128,
        shadowMapSize: 2048,
        antialias: true,
      }
    };
    
    return settings[this.qualityLevel];
  }
  
  getQualitySettings() {
    return this.applyQualitySettings();
  }
}
```

### Memory Management

```typescript
// hooks/useMemoryOptimization.ts
export const useMemoryOptimization = () => {
  useEffect(() => {
    const cleanup = () => {
      // Dispose of Three.js resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
    };
    
    return cleanup;
  }, []);
};
```

## 🚀 Implementation Timeline

### Phase 1: Foundation (Week 1)
- [ ] Install Three.js dependencies
- [ ] Set up React Three Fiber wrapper
- [ ] Create basic scene with Bilio branding
- [ ] Implement device detection and fallbacks

### Phase 2: Core 3D Components (Week 2)
- [ ] Advanced Globe3D component with custom shaders
- [ ] 3D Dashboard visualization
- [ ] Currency particle system
- [ ] Interactive hover/click system

### Phase 3: Advanced Features (Week 3)
- [ ] Custom shader materials
- [ ] Post-processing effects
- [ ] Physics integration (optional)
- [ ] Advanced animations and transitions

### Phase 4: Optimization & Polish (Week 4)
- [ ] Performance monitoring and adaptive quality
- [ ] Mobile optimization and testing
- [ ] Accessibility features for 3D elements
- [ ] Final integration with existing components

## 📱 Mobile Considerations

### Responsive 3D Strategy

```typescript
// components/ResponsiveThreeCanvas.tsx
const ResponsiveThreeCanvas = ({ children, ...props }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 
                 /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  if (isMobile) {
    return (
      <Canvas
        dpr={[1, 1.5]} // Lower pixel ratio for mobile
        performance={{ min: 0.5 }} // Allow lower framerates
        camera={{ fov: 75 }} // Wider FOV for smaller screens
        {...props}
      >
        <Suspense fallback={<MiniGlobe />}>
          {children}
        </Suspense>
      </Canvas>
    );
  }
  
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 50 }}
      {...props}
    >
      <Suspense fallback={<LoadingSpinner />}>
        {children}
      </Suspense>
    </Canvas>
  );
};
```

## 🎯 Success Metrics

### Performance Targets
- **Desktop**: 60fps with full features
- **Tablet**: 45fps with medium quality
- **Mobile**: 30fps with simplified geometry
- **Bundle Size**: <200KB additional for Three.js features

### User Experience Goals
- Smooth interactions without lag
- Intuitive 3D navigation
- Accessible fallbacks for all devices
- Progressive enhancement that feels natural

---

This comprehensive guide provides the foundation for implementing advanced Three.js features in the Bilio landing page while maintaining excellent performance and accessibility across all devices.