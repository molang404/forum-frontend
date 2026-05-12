import styled from "styled-components";
import { Link } from "react-router";
import { IoChatbubbles, IoMoon } from "react-icons/io5";
import Button from "../common/button/Button.tsx";

const HeaderContainer = styled.div`
    height: 64px;
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: ${props => props.theme.colors.background.paper};
    width: 100%;
    border-bottom: ${props => props.theme.colors.divider};
`;

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    height: 64px;
`;

const Logo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 24px;
    font-weight: 800;
    color: ${props => props.theme.colors.primary};
`;

const NavGroup = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

function MainHeader() {
    return <HeaderContainer>
        <HeaderInner>
            <Logo to={"/"}>
                <IoChatbubbles size={28} />
                <span>토론대난투</span>
            </Logo>
            <NavGroup>
                <Button color={"primary"} variant={"icon"}>
                    <IoMoon size={20} />
                </Button>
                <Button color={"primary"} variant={"text"}>로그인</Button>
                <Button color={"primary"} variant={"contained"}>회원가입</Button>
            </NavGroup>
        </HeaderInner>
    </HeaderContainer>;
}

export default MainHeader;