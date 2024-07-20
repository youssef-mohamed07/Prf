import React from 'react';
import styled from 'styled-components';

const CredentialsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #0066cc;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LogoBox = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #f9f9f9;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const logos = [
  { name: 'MasrPay', src: 'MaserPay.png' },
  { name: 'Cargill', src: 'Cargill.png' },
  { name: 'Autoroutes', src: 'Autoroutes.jpg' },
  { name: 'Applogica', src: 'Applogica.jpg' },
  { name: 'Medsol', src: 'Medsol.jpg' },
  { name: 'AL-HAKEEMA', src: 'Al-HAKEEMA.png' },
  { name: 'LRC', src: 'LRC.png' },
  { name: 'UnlimitedPass', src: 'UnlimitedPass.png' },
  { name: 'AHK', src: 'AHK.png' },
  { name: 'NILE EGYPT', src: 'NILE EGYPT.png' },
  { name: '2A TECH', src: '2A TECH.png' },
  { name: 'BARRIERE', src: '2A TECHBARRIERE.png' },
  { name: 'EHC', src: 'EHC.png' },
  { name: 'OPC', src: 'OPC.png' },
  { name: 'TAHRIR', src: 'TAHRIR.png' },
  { name: 'KHEDMA', src: 'KHEDMA.png' },
  { name: 'UBUNTU', src: 'UBUNTU.png' },
  { name: 'THE BRITISH UNIVERSITY IN EGYPT', src: 'THE BRITISH UNIVERSITY IN EGYPT.png' },
  { name: 'telecomax', src: 'telecomax.jpg' },
  { name: 'MTS', src: 'MTS.png' },
  { name: 'UECC', src: 'UECC.png' },
  { name: 'BLUE RHINE', src: 'BLUE RHINE.png' },
  { name: 'RIJK ZWAAN', src: 'RIJK ZWAAN.png' },
  { name: 'RZ', src: 'RZ.png' },
  { name: 'CARBON', src: 'CARBON.png' },
  { name: 'THEBES CONSULTING', src: 'THEBES CONSULTING.png' },
  { name: 'CONSULTING', src: 'CONSULTING.png' },
  { name: 'MEDITERRA', src: 'MEDITERRA.png' },
  { name: 'DIWAN', src: 'DIWAN.png' },
  { name: 'ChampionX', src: 'ChampionX.png' }
];

const PacFirmCredentials = () => {
  return (
    <CredentialsContainer>
      <Header>
        <Title>PAC FIRM CREDENTIALS</Title>
      </Header>
      <LogoGrid>
        {logos.map((logo, index) => (
          <LogoBox key={index}>
            <Logo src={`${logo.src}`} alt={logo.name} />
          </LogoBox>
        ))}
      </LogoGrid>
    </CredentialsContainer>
  );
};

export default PacFirmCredentials;
