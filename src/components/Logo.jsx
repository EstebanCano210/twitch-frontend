import logo from '../assets/img/ps1-playstation-1.png';

export const Logo = ({text}) => {
    return (
        <div className="auth-form-logo-container">
            <img src={logo} alt='PS1 Logo' style={{ width: '100px', height: 'auto' }} />
            <span>{text}</span>
        </div>
    )
}