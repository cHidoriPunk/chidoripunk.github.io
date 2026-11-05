import PropTypes from 'prop-types';

const SkillsRowComponent = ({skillsRow}) => (
  <article className="timeline-item">
    <div className="timeline-content">
      <p dangerouslySetInnerHTML={{ __html: skillsRow.name }} />
    </div>
  </article>
);

SkillsRowComponent.propTypes = {
  skillsRow: PropTypes.shape({
    key: PropTypes.number,
    name: PropTypes.string
  })
}

export default SkillsRowComponent;