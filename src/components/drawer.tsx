"use client";
import { useState, useRef, useEffect } from "react";

type DrawerProps = {
  children: React.ReactNode;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  isFullyExpanded?: boolean;
  setIsFullyExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Drawer({
  children,
  isExpanded,
  setIsExpanded,
  isFullyExpanded = false,
  setIsFullyExpanded = () => {},
}: DrawerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [startY, setStartY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const drawerRef = useRef<HTMLDivElement>(null);

  const collapsedHeight = 64; // Initial collapsed height
  const autoExpandHeight = 200; // Auto-expanded height when scrolling
  const fullExpandHeight = 480; // Maximum height when dragged fully open
  const autoExpandThreshold = 100; // Pixels to scroll before auto-expanding

  const handleStart = (clientY: number) => {
    setIsDragging(true);
    setStartY(clientY);
    setDragOffset(0);
  };

  const handleMove = (clientY: number) => {
    if (!isDragging) return;
    
    const deltaY = startY - clientY; // Positive when dragging up
    const maxDragUp = isExpanded ? fullExpandHeight - autoExpandHeight : autoExpandHeight - collapsedHeight;
    const maxDragDown = isFullyExpanded ? fullExpandHeight - collapsedHeight : 
                        isExpanded ? autoExpandHeight - collapsedHeight : 0;
    
    const newOffset = Math.max(-maxDragUp, Math.min(maxDragDown, deltaY));
    setDragOffset(newOffset);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    const currentHeight = isFullyExpanded ? fullExpandHeight : 
                         isExpanded ? autoExpandHeight : collapsedHeight;
    
    // Determine new state based on drag distance and direction
    if (dragOffset > 50) {
      // Dragged down significantly - collapse
      if (isFullyExpanded) {
        setIsFullyExpanded(false);
      } else if (isExpanded) {
        setIsExpanded(false);
      }
    } else if (dragOffset < -50) {
      // Dragged up significantly - expand to next level
      if (!isExpanded) {
        setIsExpanded(true);
      } else if (!isFullyExpanded) {
        setIsFullyExpanded(true);
      }
    }
    // If drag distance is small (< 50px), stay in current state
    
    setDragOffset(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientY);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };



  const currentHeight = isFullyExpanded ? fullExpandHeight : 
                     isExpanded ? autoExpandHeight : collapsedHeight;
  const displayHeight = currentHeight + dragOffset;

  return (
    <div 
      ref={drawerRef}
      className="fixed bottom-0 left-0 w-full bg-gray-800 text-white transition-all duration-500 ease-in-out z-50"
      style={{
        height: `${displayHeight}px`,
        transition: isDragging ? 'none' : 'height 0.5s ease-in-out'
      }}
    >
      {/* Drag Handle - Always visible at top of drawer */}
      <div 
        className="absolute top-0 left-0 right-0 p-3 border-b border-gray-600 bg-gray-800 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Drag indicator */}
        <div className="w-12 h-1 bg-gray-400 rounded-full mx-auto"></div>
      </div>

      {/* Content - Shows based on expansion state */}
      <div className={`p-4 pt-16 transition-opacity duration-500 overflow-y-auto ${
        isExpanded || isFullyExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        {children}
      </div>
    </div>
  );
}