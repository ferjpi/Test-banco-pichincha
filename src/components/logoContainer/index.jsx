import PropTypes from 'prop-types';
import './index.css';

const LogoContainer = ({ children }) => {
	return (
		<div className="home_table__logo_container">
			<span className="home_table__logo">
				{children}
			</span>
		</div>
	)
}

LogoContainer.propTypes = {
	children: PropTypes.node
}
export default LogoContainer;
