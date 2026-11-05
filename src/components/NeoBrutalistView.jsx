import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faBriefcase,
  faGraduationCap,
  faCode,
  faMapMarkerAlt,
  faEnvelope,
  faMobileAlt,
  faExternalLinkAlt,
  faStar,
  faSun,
  faMoon,
  faPrint
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { parseSkillRow, parseJobDates, parseCourseTitle } from '../utils/dataParser';

const NeoBrutalistView = ({
  infoRows,
  experienceRows,
  educationRows,
  skillsRows,
  isDark,
  onToggleDark,
  onPrint
}) => {
  const parsedSkills = skillsRows.map(parseSkillRow);

  return (
    <div className="neo-layout" id="mainContent">
      {/* Accessibility jump link */}
      <a href="#mainContent" className="neo-skip-link">Skip to main content</a>

      {/* Top Floating / Header Controls */}
      <div className="neo-controls-bar">
        <button
          type="button"
          className="neo-control-btn theme-toggle"
          onClick={onToggleDark}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          <span className="control-label">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        <button
          type="button"
          className="neo-control-btn print-btn"
          onClick={onPrint}
          aria-label="Print or save as PDF"
          title="Print or save as PDF"
        >
          <FontAwesomeIcon icon={faPrint} />
          <span className="control-label">Print / PDF</span>
        </button>
      </div>

      {/* Hero Header */}
      <header className="neo-hero">
        <div className="neo-sticker-row">
          <span className="neo-sticker yellow">
            <FontAwesomeIcon icon={faStar} /> 10+ YEARS DEV
          </span>
          <span className="neo-sticker cyan">
            <FontAwesomeIcon icon={faBolt} /> FRONT-END FOCUS
          </span>
          <span className="neo-sticker mint">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> TIRAT CARMEL
          </span>
        </div>

        <h1 className="neo-name">Daniel Kalaora</h1>
        <h2 className="neo-subhead">Full-Stack Web Developer</h2>

        <div className="neo-links-bar">
          <a href="mailto:dkalaora@gmail.com" className="neo-btn link-mail">
            <FontAwesomeIcon icon={faEnvelope} /> dkalaora@gmail.com
          </a>
          <a href="tel:+972544697419" className="neo-btn link-phone">
            <FontAwesomeIcon icon={faMobileAlt} /> +972 54-469-7419
          </a>
          <a
            href="https://linkedin.com/in/KalaoraDaniel"
            target="_blank"
            rel="noreferrer"
            className="neo-btn link-in"
          >
            <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ext" />
          </a>
          <a
            href="https://github.com/cHidoriPunk"
            target="_blank"
            rel="noreferrer"
            className="neo-btn link-gh"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ext" />
          </a>
        </div>
      </header>

      {/* Summary Box */}
      <section className="neo-box neo-summary">
        <div className="neo-box-label pink">EXECUTIVE SUMMARY</div>
        <p className="neo-lead">
          Full-stack web developer with <strong>10+ years of experience</strong> building high-traffic, regulated, and multilingual sites. I work across <strong>C#/Razor</strong>, <strong>SCSS</strong> and <strong>vanilla JS (ES6+)</strong>, with a focus on performance, analytics and reusable component architecture.
        </p>
        <div className="neo-pill-strip">
          <span className="neo-tag yellow">⚡ Core Web Vitals</span>
          <span className="neo-tag cyan">🧱 Scalable UI Libraries</span>
          <span className="neo-tag mint">♿ WCAG AA Standards</span>
          <span className="neo-tag lavender">🤖 AI Tooling (AntiGravity/Claude/Copilot)</span>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="neo-section skills-section">
        <div className="neo-section-header">
          <div className="neo-icon-box orange">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <h3 className="neo-section-title">SKILLS & TECH STACK</h3>
        </div>

        <div className="neo-skills-grid">
          {parsedSkills.map((cat, i) => {
            const colors = ['yellow', 'cyan', 'mint', 'pink', 'lavender', 'orange'];
            const colorClass = colors[i % colors.length];
            return (
              <div className="neo-box neo-skill-card" key={cat.key}>
                <div className={`neo-box-label ${colorClass}`}>{cat.category}</div>
                <div className="neo-chips">
                  {cat.items.map((skill, idx) => (
                    <span className="neo-chip" key={idx}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Work Experience */}
      <section className="neo-section experience-section print-break-before">
        <div className="neo-section-header">
          <div className="neo-icon-box cyan">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <h3 className="neo-section-title">WORK EXPERIENCE</h3>
        </div>

        <div className="neo-exp-list">
          {experienceRows.map((job) => {
            const d = parseJobDates(job.jobDates);
            return (
              <article className={`neo-box neo-exp-item ${job.key === 3 && 'print-margin-top'}`} key={job.key}>
                <div className="neo-exp-top">
                  <div>
                    <h4
                      className="neo-job-title"
                      dangerouslySetInnerHTML={{ __html: job.jobTitle }}
                    />
                    <div className="neo-company-row">
                      <span className="neo-company-badge">{d.company || 'Company'}</span>
                      <span className="neo-date-stamp">{d.period}</span>
                    </div>
                  </div>
                </div>
                <div
                  className="neo-job-desc"
                  dangerouslySetInnerHTML={{ __html: job.jobDescription }}
                />
              </article>
            );
          })}
        </div>
      </section>

      {/* Education */}
      <section className="neo-section education-section">
        <div className="neo-section-header">
          <div className="neo-icon-box mint">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <h3 className="neo-section-title">EDUCATION & DIPLOMAS</h3>
        </div>

        <div className="neo-edu-grid">
          {educationRows.map((edu) => {
            const parsed = parseCourseTitle(edu.courseTitle);
            return (
              <div className="neo-box neo-edu-card" key={edu.key}>
                <div className="neo-box-label lavender">{parsed.credential}</div>
                <span className="neo-inst-name">{parsed.institution}</span>
                <h4 className="neo-edu-subject">{parsed.subject || edu.courseTitle}</h4>
                <div
                  className="neo-edu-desc"
                  dangerouslySetInnerHTML={{ __html: edu.courseDescription }}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

NeoBrutalistView.propTypes = {
  infoRows: PropTypes.array.isRequired,
  experienceRows: PropTypes.array.isRequired,
  educationRows: PropTypes.array.isRequired,
  skillsRows: PropTypes.array.isRequired,
  isDark: PropTypes.bool.isRequired,
  onToggleDark: PropTypes.func.isRequired,
  onPrint: PropTypes.func.isRequired
};

export default NeoBrutalistView;
