import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from "../assets/icons/spot.svg"; // Adjust this import to your logo path

const TransitionLink = ({ children, to, className, onClick, ...props }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  // Helper function to create a delay
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // Handle the transition effect
  const handleTransition = async (e) => {
    e.preventDefault();
    
    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
    
    // Start transition
    setIsTransitioning(true);
    
    // Wait for animation to play before navigation
    await sleep(1500);
    
    // Navigate to the new page
    navigate(to);
    
    // Delay before removing the transition overlay
    await sleep(1000);
    
    // End transition
    setIsTransitioning(false);
  };

  // Clean up transition state if component unmounts during transition
  useEffect(() => {
    return () => {
      if (isTransitioning) {
        setIsTransitioning(false);
      }
    };
  }, [isTransitioning]);

  return (
    <>
      {/* Transition overlay */}
      {isTransitioning && (
        <div className="fixed top-0 left-0 h-screen w-full flex flex-col justify-center bg-black/70 items-center z-[100]">
          <div className="animate-pulse transition-all duration-1000">
            <img src={Logo} alt="Logo" className="h-24 md:h-32" />
          </div>
        </div>
      )}

      {/* Link with transition effect */}
      <Link onClick={handleTransition} to={to} className={className} {...props}>
        {children}
      </Link>
    </>
  );
};
TransitionLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};


export default TransitionLink;