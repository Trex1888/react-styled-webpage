import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Our Offices</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Investments</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">FAQS</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Connect</FooterLinkTitle>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">LinkedIn</FooterLink>
              <FooterLink to="/signin">WhatsApp</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Services</FooterLinkTitle>
              <FooterLink to="/signin">Banking</FooterLink>
              <FooterLink to="/signin">Loans</FooterLink>
              <FooterLink to="/signin">Education</FooterLink>
              <FooterLink to="/signin">Stock Investments</FooterLink>
              <FooterLink to="/signin">Digital Marketing</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Contact </FooterLinkTitle>
              <FooterLink to="/signin">555-555-5555</FooterLink>
              <FooterLink to="/signin">eaglebank1.com</FooterLink>
              <FooterLink to="/signin">eagle1@yahoo.com</FooterLink>
              <FooterLink to="/signin">ebank1@Twiiter</FooterLink>
              <FooterLink to="/signin">ebank1@Facebook</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Eagle Bank
            </SocialLogo>
            <WebsiteRights>
              Fluffhead LLC. All Rights Reserved © {new Date().getFullYear()}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink to="/" onClick={toggleHome}>
                <FaFacebook />{" "}
              </SocialIconLink>
              <SocialIconLink to="/">
                <FaTwitter />{" "}
              </SocialIconLink>
              <SocialIconLink to="/">
                <FaInstagram />{" "}
              </SocialIconLink>
              <SocialIconLink to="/">
                <FaLinkedin />{" "}
              </SocialIconLink>
              <SocialIconLink to="/">
                <FaWhatsapp />{" "}
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
