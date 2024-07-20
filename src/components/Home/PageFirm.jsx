import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: right;
  color: #0080ff;
  font-size: 24px;
  margin-bottom: 20px;
`;

const WhoAreWeSection = styled.section`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid #0080ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CircleText = styled.h2`
  color: #666;
  font-size: 18px;
`;

const MainContent = styled.main`
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.5;
`;

const LogosSection = styled.aside`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const LogoContainer = styled.div`
  text-align: center;
  width: 45%;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const LogoText = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

const ArabicText = styled(LogoText)`
  font-family: 'Arial Unicode MS', sans-serif;
  direction: rtl;
`;

const Footer = styled.footer`
  text-align: right;
  margin-top: 20px;
  font-size: 12px;
`;

const PACFirmPage = () => {
  return (
    <Page>
      <Header>PAC FIRM</Header>
      
      <WhoAreWeSection>
        <Circle>
          <CircleText>Who are we ?</CircleText>
        </Circle>
      </WhoAreWeSection>
      
      <MainContent>
        <Paragraph>
          PAC Firm, a professional accountant and consulting firm,
          was established in 2010 by Mr. Fayed. Initially focused on
          audit services, we have since expanded our offerings to
          include audit and assurance services, tax services, and the
          establishment of new companies.
        </Paragraph>
        
        <Paragraph>
          Recognizing the needs of newly established companies,
          particularly those owned by foreign entities specializing in
          service activities, we identified a demand for outsourced
          financial functions to reduce costs during the startup phase.
          In line with our vision to become trusted financial advisors,
          ensuring compliance with applicable Egyptian laws, we
          launched PAC Firm for Financial Services L.L.C. in 2023 to
          provide comprehensive CFO services.
        </Paragraph>
      </MainContent>
      
      <LogosSection>
        <LogoContainer>
          <Logo src="pacfirm-accountant-logo.png" alt="PAC FIRM Accountant Logo" />
          
        </LogoContainer>
        
        <LogoContainer>
          <Logo src="pacfirm-financial-services-logo.png" alt="PAC FIRM Financial Services Logo" />
        </LogoContainer>
      </LogosSection>
      
    </Page>
  );
};

export default PACFirmPage;