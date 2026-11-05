import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const contactInfoIcons = [faFacebook, faGithub, faLinkedinIn, faTwitter, faEnvelope, faMapMarkerAlt, faMobileAlt]

const fontIcon = (infoRow) => {
  return contactInfoIcons.find(icon => infoRow.icon === icon.iconName);
}

const InfoRowComponent = ({infoRow}) => (
    <div className={`info-row ${infoRow.classes}`}>
      <span className="icon">
        <FontAwesomeIcon icon={fontIcon(infoRow)} className="fa-lg" />
      </span>
      <div dangerouslySetInnerHTML={{ __html: infoRow.content }} />
    </div>
);

InfoRowComponent.propTypes = {
  infoRow: PropTypes.shape({
    key: PropTypes.number,
    classes: PropTypes.string,
    icon: PropTypes.string,
    content: PropTypes.string
  })
}

export default InfoRowComponent;