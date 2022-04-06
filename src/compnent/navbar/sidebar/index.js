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
                <SidebarLink smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link1' onClick={toggle}>link1</SidebarLink>
                <SidebarLink smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link2' onClick={toggle}>link2</SidebarLink>
                <SidebarLink smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link3' onClick={toggle}>link3</SidebarLink>
                <SidebarLink smooth={true} duration={500}spy={true} exact='true'offset={-80} to='link4' onClick={toggle}>link4</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/anotherpage'>
                another page
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar