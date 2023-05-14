import React from 'react';

export default function About() {
  return (
    <div
      id="about"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        borderRadius: '0.5rem',
        '@media (min-width: 768px)': {
          textAlign: 'left',
          justifyContent: 'flex-start',
          paddingLeft: '2rem',
          paddingRight: '2rem',
        },
      }}
    >
      <div>
        <div>
          <h2>About CSE Department</h2>
          <span></span>
        </div>
        <h4 class="widget-title">National Institute Of Technology</h4>
        <p className="p2">
          The institute is committed to the challenging task of development of
          technical education by preparing seasoned graduates in highly
          sophisticated field of engineering and technology. Development of
          India as an emerging industrial power is a demanding exercise as it
          involves the combination of cost effectiveness and efficiency along
          with producing world-class technology at the cutting edge. For about
          five decades we have been doing it with sincerity and commitment at
          NIT Raipur. At present the institute offers graduate level courses in
          twelve disciplines.
        </p>
      </div>
    </div>
  );
}
