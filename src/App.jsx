import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBeer, faBriefcase, faPrint } from '@fortawesome/free-solid-svg-icons';
import infoRowsData from './data/info-rows.json';
import experienceRowsData from './data/experience-rows.json';
import educationRowsData from './data/education-rows.json';
import skillsRowsData from './data/skills-rows.json';
import InfoRowComponent from './components/InfoRowComponent'
import ExperienceRowComponent from './components/ExperienceRowComponent'
import EducationRowComponent from './components/EducationRowComponent'
import SkillsRowComponent from './components/SkillsRowComponent'

const printCVPage = () => { window.print(); }
const darkModeSwitch = () => { document.querySelector("html").classList.toggle("dark-mode"); }

function App() {
  return (
    <div className="page-wrapper">
      <div className="accessibility-features">
        <a href="#mainContent" className="jump-to-content">Main Content</a>
      </div>
      <button className="dark-mode-switch" type="button" onClick={darkModeSwitch} aria-label="toggle dark / light mode">
        <span className="icon">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-half-stroke" className="svg-inline--fa fa-circle-half-stroke fa-lg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 448V64c105.9 0 192 86.13 192 192S361.9 448 256 448z"></path></svg>
        </span>
      </button>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <header className="main-header">
            <h1>Daniel Kalaora</h1>
            <h2>Full-Stack Web Developer · Front-End Focus</h2>
          </header>
          <main className="main-section">
            <section className="info">
              {infoRowsData.map((infoRow) => (
                <InfoRowComponent infoRow={infoRow} key={infoRow.key} />
              ))}
              <p className="lead">Full-stack web developer with 10+ years of experience building high-traffic, regulated, multilingual sites. I work across C#/Razor, SCSS and vanilla JS, with a focus on performance, analytics and reusable components.</p>
            </section>
            <div id="mainContent"></div>
            <section className="timeline">
              <section className="timeline-segment experience">
                <header>
                  <div className="timeline-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <h1 className="timeline-title">Experience</h1>
                </header>
                {experienceRowsData.map((experienceRow) => (
                  <ExperienceRowComponent experienceRow={experienceRow} key={experienceRow.key} />
                ))}
              </section>
              <section className="timeline-segment education">
                <header>
                  <div className="timeline-icon">
                    <FontAwesomeIcon icon={faAward} className="fa-award" />
                  </div>
                  <h2 className="timeline-title">Education</h2>
                </header>
                {educationRowsData.map((educationRow) => (
                  <EducationRowComponent educationRow={educationRow} key={educationRow.key} />
                ))}
              </section>
              <section className="timeline-segment skills">
                <header>
                  <div className="timeline-icon">
                    <FontAwesomeIcon icon={faBeer} className="fa-beer" />
                  </div>
                  <h4 className="timeline-title">Skills</h4>
                </header>
                {skillsRowsData.map((skillsRow) => (
                  <SkillsRowComponent skillsRow={skillsRow} key={skillsRow.key} />
                ))}
              </section>
            </section>
          </main>
        </div>
      </div>
      <button className="printBtn hide-for-print" onClick={printCVPage} aria-label="print page / save as pdf">
        <FontAwesomeIcon icon={faPrint} className="fa-print" />
      </button>
    </div>
  );
}

export default App;