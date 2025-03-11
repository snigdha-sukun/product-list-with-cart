import { StyledButton } from "./Button.styled";

const Button = ({
	text,
	handleClick,
}: { text: string; handleClick: () => void }) => {
	return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Button;
