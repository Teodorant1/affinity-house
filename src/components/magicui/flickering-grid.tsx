"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";

interface FlickeringGridProps {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
  height?: number;
  width?: number;
}

export default function FlickeringGrid({
  className,
  squareSize = 4,
  gridGap = 6,
  color = "#60A5FA",
  maxOpacity = 0.5,
  flickerChance = 0.1,
  height = 800,
  width = 800,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cols = Math.floor(width / (squareSize + gridGap));
    const rows = Math.floor(height / (squareSize + gridGap));

    const drawSquare = (x: number, y: number, opacity: number) => {
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.fillRect(
        x * (squareSize + gridGap),
        y * (squareSize + gridGap),
        squareSize,
        squareSize,
      );
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const opacity =
            Math.random() < flickerChance ? Math.random() * maxOpacity : 0;
          drawSquare(i, j, opacity);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [squareSize, gridGap, color, maxOpacity, flickerChance, height, width]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("", className)}
      height={height}
      width={width}
    />
  );
}
