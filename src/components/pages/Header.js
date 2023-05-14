import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <div className="hero-logo"></div>
          <svg viewBox="0 0 1320 300">
	<text x="50%" y="50%" dy=".35em" text-anchor="middle">
		Association of Computer Science and Engineering
	</text>
</svg>	
          <h2>Welcomes You</h2>
          <div class="actions">
            <a href="/login" class="main-1">
              LEARN MORE
            </a>
            <a href="/" class="main-2">
              OFFICIAL COLLEGE SITE
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
