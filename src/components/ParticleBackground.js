import React from 'react';
import Particles from 'react-particles-js';

export default function ParticleBackground() {
  return (
    <Particles
        className="fixed h-screen w-screen -z-10"
        params={{
          "particles": {
              "number": {
                  "value": 50,
                  "density": {
                      "enable": true,
                      "value_area": 1500
                  }
              },
              "line_linked": {
                  "enable": true,
                  "opacity": 0.1
              },
              "move": {
                  "direction": "down",
                  "speed": 0.2
              },
              "size": {
                  "value": 1
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.4
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  }
              },
              "modes": {
                  "push": {
                      "particles_nb": 1
                  }
              }
          },
          "retina_detect": true
    }} />
  )
}