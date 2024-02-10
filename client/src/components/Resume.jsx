import React from 'react'

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Nazim Saifi</h4>
              <p><em>MERN & MEAN Developer  with 1 Year of experience</em></p>
              <ul>
                <li>Ghaziabad</li>
                <li><a href="tel:+919205700614" style={{ textDecoration: "none", color: "inherit" }}>+91 9205700614</a></li>
                <li><a href="mailto:sahilkhan082011@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>sahilkhan082011@gmail.com</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
        
            <div className="resume-item">
              <h4>Bachelors's in Computer Application(BCA)</h4>
              <h5>2019 - 2022</h5>
              <p><em>Chaudhary Charan Singh University</em></p>
              <p>I completed my BCA from IPEM college in 2022, Here I learned  About Web Development, How frontend and backend work Api intregration And many thing that help me in present</p>
            </div>
            {/* <div className="resume-item">
              <h4> Masters in Computer Application(MCA)</h4>
              <h5>2023 - 2025</h5>
              <p><em>HI-TECH INSTITUTE OF ENGINEERING AND TECHNOLOGY, GHAZIABAD</em></p>
              <p>Pursuing...</p>
            </div> */}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {/* <div className="resume-item">
              <h4>FullStack Developer(MERN)</h4>
              <h5>Mer 2023 - Present</h5>
              <p><em>Akonto Payment Solution pvt ltd. </em></p>
              <ul>
                <li>My role is FullStack Developer and My responsibilities are to maintain and Develop Frontend and backend both... The complete UI is based on React and Backend on Nodejs, ExpressJs and MySql.</li>
                
              </ul>
            </div> */}
            <div className="resume-item">
              <h4>MERN & MEAN Developer</h4>
              <h5>MAY 2023 - Currently working</h5>
              <p><em> PrimaFelicitas Pvt. Ltd., Noida Sec-63, India (AI & Web3 Development Company)</em></p>
              <ul>
                <li><b> Responsibilities</b>
                  <ul>
                    <li>Developed and integrated 1000+ APIs using Node.js, Express, and Redux Saga.</li>
                    <li>Worked extensively on creating and maintaining 1000+ dynamic components.</li>
                    <li>Developed various functionalities using JavaScript.</li>
                    <li>Responsiblefor building and maintaining scalable web applications using MERN stack.</li>
                    <li>Implemented and integrated RESTful and third-party APIs.</li>
                    <li>Focused on optimizing application performance and conducting codereviews.</li>
                    <li>Collaborated with QA team for bug identification and resolution.</li>
                    <li>Involved in design and architectural discussions,enhancing system scalability and ef iciency.</li>
                    <li>Developed APIs with advanced features like aggregation, and search, sort, and filter functions.</li>
                  </ul>
                </li>

              </ul>
            </div>
            {/* <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>Jan 2022 -  Jun 2022</h5>
              <p><em>Delberto PVT.LTD</em></p>
              <ul>
                <li>My Role was Frontend  Developer and my responsibility are to develop Website  Using HTML, CSS, JavaScript, Jquery and Bootstrap. andalso make responsive layout and here I done some work on figma</li>

              </ul>
            </div> */}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume