import { Link } from "react-router-dom";
import styled from "styled-components";
import bannerImage from "../../assets/banner3.png";
import logo from "../../assets/logo.png";

const Header = styled.header`
  background-color: #133125;
  padding: 10px;
`;

const Logo = styled.img`
  width: 10%;
  min-width: 100px;
  margin-left: 20px;
`;

const Banner = styled.div`
  width: 100%;
  background-color: black;
  text-align: center;
`;

const BannerImage = styled.img`
  width: 50%;
  min-width: 330px;
`;

const Menu = styled.nav`
  text-align: center;
  background-color: #16adc4;
  padding: 15px 0px;
`;

const MenuItem = styled(Link)`
  color: #133125;
  margin-right: 40px;
  font-family: "Creepster", cursive;
  text-decoration: none;
  font-size: 20px;
`;

const Content = styled.div`
  background-color: black;
`;

const Footer = styled.footer`
  background-color: blue;
`;

export default function BaseLayout({ children }) {
  return (
    <>
      <Header>
        <Logo src={logo} />
      </Header>
      <Banner>
        <BannerImage src={bannerImage} />
      </Banner>
      <Menu>
        <MenuItem to="/" role="link">
          Characters
        </MenuItem>
        <MenuItem to="/episodes" role="link">
          Episodes
        </MenuItem>
      </Menu>
      <Content>{children}</Content>
      <Footer>teste</Footer>
    </>
  );
}
