"use client";

import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      addAnimation();
    }
  }, [items]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Clear existing duplicated nodes to prevent duplicates on re-renders
      while (scrollerRef.current.children.length > items.length) {
        scrollerRef.current.removeChild(scrollerRef.current.lastChild!);
      }

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "40s" : speed === "normal" ? "80s" : "120s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller ${className || ""}`}
    >
      <ul
        ref={scrollerRef}
        className={`scroller-inner ${start ? "animate-scroll" : ""} ${
          pauseOnHover ? "pause-hover" : ""
        }`}
      >
        {items.map((item, idx) => (
          <li
            className="testimonial-card"
            key={`${item.name}-${idx}`}
          >
            <blockquote className="h-full flex flex-col justify-between" style={{ margin: 0 }}>
              <span className="testimonial-quote">
                "{item.quote}"
              </span>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {item.name.charAt(0)}
                </div>
                <div className="author-info">
                  <span className="author-name">
                    {item.name}
                  </span>
                  <span className="author-title">
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
