import styled from "styled-components";
import Background from "/img/business-offer.png";
export const Features = styled.section`
  display: flex;
  gap: 64px;
  flex-direction: column;
  padding: 100px 200px 64px 200px;
  background: rgba(255, 255, 255, 1);

  @media screen and (max-width: 1270px) {
    padding: 100px 60px 100px 60px;
  }
  @media screen and (max-width: 990px) {
    padding: 40px 16px;
  }
`;

const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 32px;
  gap: 12px;
`;

const Container = styled.div`
  gap: 48px;
  padding: 0;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(47%, 1fr));
`;

const BackgroundContent = styled.div`
  border-radius: 16px;
  flex-grow: 1;
  img {
    border-radius: 16px;
    height: 100%;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  //flex-grow: 1;
  place-self: center;
`;

export const Feature = styled(Content)`
  gap: 20px;
  width: auto;
`;

export const Number = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  text-align: center;
  color: rgba(2, 44, 34, 1);
  background: rgba(207, 220, 255, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
`;

export const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.01em;
  text-align: left;
  color: rgba(2, 44, 34, 1);
  @media screen and (max-width: 468px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

export const SupportingText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(2, 44, 34, 1);
  @media screen and (max-width: 468px) {
    font-size: 1.6rem;
    letter-spacing: -0.004em;
  }
`;
const BusinessOffer = () => {
  return (
    <Features>
      <BlockHeader>
        <Heading>What we offer</Heading>
      </BlockHeader>
      <Container>
        <BackgroundContent>
          <img src={Background} alt="Business Offer Background" />
        </BackgroundContent>
        {/* <Content> */}
        <Content>
          <Feature>
            <Number>1</Number>
            <Feature>
              <Heading>Matching with the Perfect Therapist</Heading>
              <SupportingText>
                Employees connect with licensed therapists who specialize in
                their specific needs and preferences. Betterspace&#39;s diverse
                therapist network ensures a comfortable and effective
                therapeutic experience for everyone.
              </SupportingText>
            </Feature>
          </Feature>
          <Feature>
            <Number>2</Number>
            <Feature>
              <Heading>The Flexibility of Teletherapy</Heading>
              <SupportingText>
                Sessions are conducted securely online via video, voice call or
                chat offering employees the flexibility to schedule appointments
                around their busy schedules, making therapy more accessible than
                ever.
              </SupportingText>
            </Feature>
          </Feature>
          <Feature>
            <Number>3</Number>
            <Feature>
              <Heading>Unwavering Confidentiality and Privacy</Heading>
              <SupportingText>
                Employees can access therapy without any fear of it impacting
                their job security or personal privacy. Betterspace prioritizes
                complete confidentiality and adheres to the highest ethical
                standards.
              </SupportingText>
            </Feature>
          </Feature>
        </Content>
        {/* </Content> */}
      </Container>
    </Features>
  );
};
export default BusinessOffer;
