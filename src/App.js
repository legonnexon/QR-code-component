import './App.css';
import styled from 'styled-components'
import qr_code from './images/image-qr-code.png'

const Title = styled.span`
font-family: 'Outfit', sans-serif;
font-size: 22px;
font-weight: 700;
color: hsl(218, 44%, 22%);
margin: 20px;
`;

const SubText = styled.span`
font-family: 'Outfit', sans-serif;
font-size: 15px;
font-weight: 400;
color: hsl(220, 15%, 55%);
margin: 0 25px;
`;

const Imagen = styled.img`
margin: 0 auto;
border-radius: 15px;
`;

const Figure = styled.figure`
display: flex;
flex-direction: column;
text-align: center;
margin: 15px auto;
`;

const Container = styled.div`
display: flex;
vertical-align: middle;
width: 330px;
height: 500px;
margin: 0 auto;
background-color: hsl(0, 0%, 100%);
border-radius: 25px;
`;

function App() {
  return (
    <Container>
      <Figure>
        <Imagen 
          src={qr_code}
          alt='Qr code for Front End Mentor website'
          width={'300px'}
        />
        <Title>Improve your front-end skills by building projects</Title>
        <SubText>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</SubText>
      </Figure>
      
    </Container>
  );
}

export default App;
