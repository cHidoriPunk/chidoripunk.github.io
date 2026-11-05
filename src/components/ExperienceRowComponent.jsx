import PropTypes from 'prop-types';

const ExperienceRowComponent = ({experienceRow}) => (
  <article className="timeline-item">
    <div className="timeline-content">
      <span className="timeline-dot"></span>
      <h2 dangerouslySetInnerHTML={{ __html: experienceRow.jobTitle }} />
      <h3 dangerouslySetInnerHTML={{ __html: experienceRow.jobDates }} />
      <div dangerouslySetInnerHTML={{ __html: experienceRow.jobDescription }} />
    </div>
  </article>
);

ExperienceRowComponent.propTypes = {
  experienceRow: PropTypes.shape({
    key: PropTypes.number,
    jobTitle: PropTypes.string,
    jobDates: PropTypes.string,
    jobDescription: PropTypes.string
  })
}

export default ExperienceRowComponent;