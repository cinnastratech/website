'use client';

import { useEffect, useRef } from 'react';

interface PixelBlastProps {
  variant?: 'square' | 'circle' | 'diamond';
  pixelSize?: number;
  color?: string;
  patternScale?: number;
  patternDensity?: number;
  enableRipples?: boolean;
  rippleSpeed?: number;
  rippleThickness?: number;
  rippleIntensityScale?: number;
  speed?: number;
  transparent?: boolean;
  edgeFade?: number;
  className?: string;
  style?: React.CSSProperties;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 6, g: 254, b: 180 };
}

// Simple 2D noise (value noise)
function noise2d(x: number, y: number, seed: number): number {
  const n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.3) * 43758.5453;
  return n - Math.floor(n);
}

function smoothNoise(x: number, y: number, seed: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const a = noise2d(ix, iy, seed);
  const b = noise2d(ix + 1, iy, seed);
  const c = noise2d(ix, iy + 1, seed);
  const d = noise2d(ix + 1, iy + 1, seed);
  return a + (b - a) * ux + (c - a) * uy + (d - a - c + a) * ux * uy;
}

function fractalNoise(x: number, y: number, seed: number, octaves = 3): number {
  let val = 0;
  let amp = 0.5;
  let freq = 1;
  let max = 0;
  for (let i = 0; i < octaves; i++) {
    val += smoothNoise(x * freq, y * freq, seed + i) * amp;
    max += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return val / max;
}

export default function PixelBlast({
  variant = 'square',
  pixelSize = 7,
  color = '#06feb4',
  patternScale = 2.5,
  patternDensity = 1.2,
  enableRipples = true,
  rippleSpeed = 0.55,
  rippleThickness = 0.13,
  rippleIntensityScale = 0.7,
  speed = 0.6,
  transparent = true,
  edgeFade = 0.3,
  className,
  style,
}: PixelBlastProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rgb = hexToRgb(color);

    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement!);

    const drawPixel = (
      cx: number,
      cy: number,
      size: number,
      alpha: number
    ) => {
      if (alpha <= 0) return;
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
      const half = size / 2;
      if (variant === 'square') {
        ctx.fillRect(cx - half, cy - half, size, size);
      } else if (variant === 'circle') {
        ctx.beginPath();
        ctx.arc(cx, cy, half, 0, Math.PI * 2);
        ctx.fill();
      } else if (variant === 'diamond') {
        ctx.beginPath();
        ctx.moveTo(cx, cy - half);
        ctx.lineTo(cx + half, cy);
        ctx.lineTo(cx, cy + half);
        ctx.lineTo(cx - half, cy);
        ctx.closePath();
        ctx.fill();
      }
    };

    const render = (timestamp: number) => {
      timeRef.current = timestamp * 0.001 * speed;

      if (!transparent) {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.clearRect(0, 0, width, height);
      }

      const cellSize = pixelSize * 1.5;
      const offsetX = 0;
      const offsetY = 0;

      const cols = Math.ceil(width / cellSize) + 2;
      const rows = Math.ceil(height / cellSize) + 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cx = offsetX + col * cellSize;
          const cy = offsetY + row * cellSize;

          // Noise-based pattern
          const nx = (cx / width) * patternScale;
          const ny = (cy / height) * patternScale;
          const noiseVal = fractalNoise(
            nx + timeRef.current * 0.1,
            ny + timeRef.current * 0.05,
            42
          );

          // Threshold to create dot pattern
          const threshold = 1 - patternDensity * 0.5;
          if (noiseVal < threshold) continue;

          let alpha = (noiseVal - threshold) / (1 - threshold);
          alpha = Math.min(1, alpha * 2.5);

          // Ripple effect
          if (enableRipples) {
            const distFromCenter = Math.sqrt(
              Math.pow((cx - width / 2) / width, 2) +
              Math.pow((cy - height / 2) / height, 2)
            ) * 2;

            const ripplePhase = distFromCenter * 8 - timeRef.current * rippleSpeed * 4;
            const rippleWave = Math.sin(ripplePhase * Math.PI * 2);
            const rippleAlpha = Math.abs(rippleWave);
            const rippleGate = rippleAlpha > (1 - rippleThickness * 2) ? 1 : 0;
            const rippleContrib = rippleGate * rippleIntensityScale;
            alpha = Math.min(1, alpha + rippleContrib * 0.5);
          }

          // Edge fade
          if (edgeFade > 0) {
            const ex = Math.min(cx / (width * edgeFade), 1, (width - cx) / (width * edgeFade));
            const ey = Math.min(cy / (height * edgeFade), 1, (height - cy) / (height * edgeFade));
            const edgeAlpha = Math.min(ex, ey);
            alpha *= edgeAlpha;
          }

          drawPixel(cx, cy, pixelSize, alpha * 0.85);
        }
      }

      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animRef.current);
      resizeObserver.disconnect();
    };
  }, [variant, pixelSize, color, patternScale, patternDensity, enableRipples, rippleSpeed, rippleThickness, rippleIntensityScale, speed, transparent, edgeFade]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}
