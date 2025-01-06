import styled from 'styled-components';

const googleColors = {
    blue: "#4285F4",
    red: "#EA4335",
    yellow: "#FBBC05",
    green: "#34A853"
};

const ExampleDiv = styled.div`
    background-color: ${googleColors.blue};
    color: ${googleColors.red};
`;

const ExampleComponent = () => (
    <ExampleDiv>
        Hello, World!
    </ExampleDiv>
);

export default ExampleComponent;
