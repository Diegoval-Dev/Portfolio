import PropTypes from "prop-types";
import useNavigate from '@hooks/useNavigate';


function NavButton({text, navigateTo}) {
	const { navigate} = useNavigate();
  return (
    <button className="px-4 py-2 h-16 shadow-md hover:bg-slate-900 flex items-center" onClick={() => navigate(navigateTo)}>
			{text}
    </button>
  );
}

NavButton.propTypes = {
	href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavButton;
