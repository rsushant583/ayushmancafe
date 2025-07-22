import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline();

    return () => {
      timelineRef.current?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const animateOnScroll = (
    selector: string,
    animation: gsap.TweenVars,
    triggerOptions: ScrollTrigger.Vars = {}
  ) => {
    return gsap.fromTo(selector, 
      { opacity: 0, y: 50, ...animation.from },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        ...animation.to,
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          ...triggerOptions
        }
      }
    );
  };

  const staggerOnScroll = (
    selector: string,
    stagger: number = 0.1,
    triggerOptions: ScrollTrigger.Vars = {}
  ) => {
    return gsap.fromTo(selector, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger,
        scrollTrigger: {
          trigger: selector,
          start: "top 85%",
          toggleActions: "play none none reverse",
          ...triggerOptions
        }
      }
    );
  };

  const parallaxEffect = (
    selector: string,
    speed: number = 0.5
  ) => {
    return gsap.fromTo(selector,
      { yPercent: -50 },
      {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: selector,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
  };

  return {
    timeline: timelineRef.current,
    animateOnScroll,
    staggerOnScroll,
    parallaxEffect,
    gsap,
    ScrollTrigger
  };
};