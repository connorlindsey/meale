import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-content: center;
	margin: 0 auto;
	max-width: 600px;
`

export const Label = styled.label`
	width: 100%;
	margin: 0 auto 1rem;
`

export const Input = styled.input`
	width: ${props => props.width || "100%"};
	border: 1px solid ${props => props.theme.grey["300"]};
	border-radius: ${props => props.theme.borderRadius};
	height: 2.25rem;
	background: ${props => props.theme.grey["100"]};
	outline: none;
	padding-left: 10px;
	margin: 0 auto;
	box-shadow: inset 0 -2px 0px hsla(0, 0%, 100%, 0.15), inset 0 1px 1px hsla(0, 0%, 0%, 0.15);

	&::placeholder {
		font-size: 16px;
		${props => props.theme.grey["700"]};
	}
`

export const Textarea = styled.textarea`
	width: 100%;
	border: 1px solid ${props => props.theme.grey["300"]};
	border-radius: ${props => props.theme.borderRadius};
	background: ${props => props.theme.grey["100"]};
	box-shadow: inset 0 -2px 0px hsla(0, 0%, 100%, 0.15), inset 0 1px 1px hsla(0, 0%, 0%, 0.15);
	resize: vertical;
	height: 4rem;
	padding: 4px 10px;
	outline: none;

	&::placeholder {
		font-size: 16px;
		${props => props.theme.grey["700"]};
	}
`
