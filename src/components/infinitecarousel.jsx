"use client";

import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from 'prop-types';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const InfiniteCarousel = ({ items }) => {
  // Ref for the carousel container
  const carouselRef = useRef(null);
  // Ref for the wrapper that will hold duplicated items for infinite scrolling
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Access the carousel DOM element
    const carousel = carouselRef.current;
    // Access the wrapper DOM element
    const wrapper = wrapperRef.current;

    // Clone the carousel items to create an infinite loop effect
    const itemsClone = carousel.innerHTML;
    // Append the cloned items to the wrapper
    wrapper.innerHTML = itemsClone + itemsClone;

    // Calculate the total width of the carousel content (original items only)
    const totalWidth = carousel.scrollWidth / 2;

    // Create a GSAP timeline that repeats indefinitely (-1 means infinite)
    const tl = gsap.timeline({
      repeat: -1, // Repeat forever
      defaults: { ease: "none", duration: 200 }, // Set default ease and duration for animations
    });

    // Animate the wrapper to scroll horizontally
    tl.to(wrapper, {
      x: -totalWidth, // Move the wrapper to the left by the total width of the original items
      modifiers: {
        // Ensure the animation loops seamlessly by resetting `x` when it exceeds the total width
        x: (x) => (parseFloat(x) % totalWidth) + "px",
      },
    });

    // Cleanup: Kill the timeline when the component is unmounted
    return () => {
      tl.kill();
    };
  }, [items]); // Re-run the effect when the `items` prop changes

  return (
    <div className="carousel-container overflow-hidden w-full">
      {/* The outer carousel container (hidden overflow to restrict visible area) */}
      <div ref={carouselRef} className="carousel w-full">
        {/* The wrapper that contains both the original and cloned items */}
        <div ref={wrapperRef} className="carousel-wrapper flex items-center">
          {/* Render the items passed as props */}
          {items}
        </div>
      </div>
    </div>
  );
};
InfiniteCarousel.propTypes = {
  items: PropTypes.node.isRequired
};

export default InfiniteCarousel;

