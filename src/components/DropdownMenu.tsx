import { useState, useRef, useEffect } from 'react'
import { FaGear, FaArrowLeft } from 'react-icons/fa6'
import { CSSTransition } from 'react-transition-group';
//Dropdown menu
export default function DropdownMenu({ setIsOpen }: any) {

    const [ activeMenu, setActiveMenu ] = useState('main')
    const nodeRefPrimary = useRef(null)
    const nodeRefSecondary = useRef(null)
    const nodeRefThird = useRef(null)
    // const [menuHeight, setMenuHeight] = useState(null)
    const dropRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        let handle = (el: any) => {
            if(dropRef.current) {
                if(!dropRef?.current.contains(el.target)) {
                    setIsOpen(false)
                  }
            }
        }
        document.addEventListener("mousedown", handle)

        return () => { document.removeEventListener("mousedown", handle) }
      },[dropRef])

    // function calcHeight(el: any) {
    //     const height = el.offsetHeight;
    //     console.log(height)
    //     setMenuHeight(height)
    // }

    function DropdownItem({ leftIcon, rightIcon, children, goTo}: any) {
        return (
            <div className="outer-dropdownItem"
            onClick={() => goTo && setActiveMenu(goTo)}>
                <div>{leftIcon}</div>
                <p style={{marginLeft: "0.3em"}}>{children}</p>
                <div>{rightIcon}</div>
            </div>
        )
    }

  return (
    //fix animation & height animation - height animate
    <div className="outer-dropdown" ref={dropRef}>
        <div style={{ position: "relative" }}>
            {/* Main Dropdown */}
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={400} 
                classNames="menu-primary"
                nodeRef={nodeRefPrimary}
                // onEnter={calcHeight}
            >
                <div className='menu' ref={nodeRefPrimary}>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button" />} goTo="settings">Settings & Privacy</DropdownItem>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button"/>}>Help & support</DropdownItem>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button"/>}>Display & accessibility</DropdownItem>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button"/>}>Give Feedback</DropdownItem>

                    <div style={{
                        padding: "0.4em 0.7em",
                        fontSize: "0.7em",
                        fontWeight: 200,
                        color: "#aeb0b1"
                    }}>
                        <p>Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2023</p>
                    </div>
                </div>
            </CSSTransition>

            {/* settings dropdown */}
            <CSSTransition 
                in={activeMenu === 'settings'} 
                unmountOnExit 
                timeout={400} 
                classNames="menu-secondary"
                nodeRef={nodeRefSecondary}
                // onEnter={calcHeight}
            >
                <div className='menu' ref={nodeRefSecondary}>
                    <DropdownItem leftIcon={<FaArrowLeft size="1.3em" color="white" className="nav-button"/>} goTo="main"/>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button"/>} goTo="helpSupp">Help</DropdownItem>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button"/>}>Dark Mode</DropdownItem>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button"/>}>Compact Mode</DropdownItem>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button"/>}>Show previews of links</DropdownItem>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button"/>}>Keyboard</DropdownItem>
                </div>
            </CSSTransition>

            {/* help dropdown */}
            <CSSTransition 
                in={activeMenu === 'helpSupp'} 
                unmountOnExit 
                timeout={400} 
                classNames="menu-third"
                nodeRef={nodeRefThird}
                // onEnter={calcHeight}
            >
                <div className='menu' ref={nodeRefThird}>
                    <DropdownItem leftIcon={<FaArrowLeft size="1.3em" color="white" className="nav-button"/>} goTo="settings"/>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button"/>}>Help Center</DropdownItem>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button"/>}>Support Inbox</DropdownItem>
                    <DropdownItem leftIcon={<FaGear size="1.3em" color="white" className="nav-button"/>}>Report a problem</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    </div>
  )
}
