import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SideBtnWrap,SidebarLink,SidebarRoute,SidebarWrapper,SidebarMenu } from './sidebarElements'
const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link1' onClick={toggle}>Riders</SidebarLink>
                <SidebarLink smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link2' onClick={toggle}>Trainers</SidebarLink>
                <SidebarLink smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link3' onClick={toggle}>Owners</SidebarLink>
                <SidebarLink smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link4' onClick={toggle}>Kids</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/anotherpage'>
                Start Owning
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar