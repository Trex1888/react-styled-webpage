import Icon1 from "../../images/main4.svg";
import Icon2 from "../../images/main5.svg";
import Icon3 from "../../images/main6.svg";

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Money Savings</ServicesH2>
          <ServicesP>
            Great APR rates and high returns on your investments.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Vitual Banking</ServicesH2>
          <ServicesP>
            Access your account through our platforms anywhere.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>Members earn annual loyalty cash and rewards.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
