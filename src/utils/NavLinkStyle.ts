export const NavLinkStyle = ({ isActive }) => {
    return {
        color: isActive ? "#00a968" : "#7d8790",
        fontWeight: isActive ? "bold" : "normal",
    };
};
