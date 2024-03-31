import PropTypes from 'prop-types';

function NavButton(props){
    return(
        <li className="px-4 py-2 shadow-md hover:bg-slate-900">
            <a href={props.href}>
                {props.children}
            </a>
        </li>
    )
}

NavButton.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default NavButton;