import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Mission() {
  return (
    <div id="mission" class="section-cotent">
      <div class="container">
        <div class="title-section text-center mission1">
          <h2 style={{ color: 'black'}}>Word from H.O.D.</h2>
          <span></span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div style={{ flex: '1 1 300px', margin: '1rem' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                padding: '2rem',
                borderRadius: '0.5rem',
              }}
            >
              <img
                src="https://i.postimg.cc/fVdbRHgW/img1.png"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                }}
                alt="Responsive Image"
              />
              <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>
                Dr. Dilip Singh Sisodia is Working as Associate Professor at the
                Department of Computer Science and Engineering, National
                Institute of Technology Raipur, Raipur, India.Dr. Sisodia have
                expertise in various fields of computer science including
                Artificial Intelligence, Machine Learning, Soft Computing,
                Computation intelligence, Theoretical computer science and many
                more. Dr. Sisodia has contributed to more than 100 refereed
                articles, including 78 papers in Web of Science/Scopus indexed
                journals, his conference proceedings and book chapters have been
                published by reputed international publishers.Some notable
                publication destinations of Dr. Sisodia are IEEE Transactions on
                Systems: Man, and Cybernetics Systems, Knowledge base systems,
                Expert system, and applications, Information Sciences and more.
                He has also shared his work at various international conferences
                in countries like Israel, Spain, Singapore, Thailand, and more.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              width: '100%',
              maxWidth: '1000px',
            }}
          >
            <div
              style={{
                flex: '1 1 300px',
                padding: '1rem',
                borderRadius: '0.5rem',
              }}
            >
              <h2 style={{ textAlign: 'center', color: 'black',}}>MISSION</h2>
              <p>
                To impart effective education at undergraduate levels in the
                field of Computer Science and Engineering. To strive steadily
                for the overall growth and development of intellect and
                personality of the students who, as professionals, would be
                confident to face the challenges of the world of work. To
                conduct Research and Development and offer consultancy services.
                To improve continuously the quality of teaching-learning
                process.
              </p>
            </div>
            <div
              style={{
                flex: '1 1 300px',
                padding: '1rem',
                borderRadius: '0.5rem',
              }}
            >
              <h2 style={{ textAlign: 'center', color: 'black', }}>VISION</h2>
              <p>
                To promote Research and Development in the frontier areas of
                Computer Science & Engineering. To generate Competent
                Professionals to become part of the industry and Research
                Organizations at the National and International levels. To
                provide necessary strengths to enable the students to Innovate
                and to become Entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
