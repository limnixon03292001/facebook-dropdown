import {   useState, cloneElement } from 'react'

export default function NavItem({ icon, children }: any) {
  
  const [open, setIsOpen] = useState(false);

  return (
    <div className='outer-navitem' >
        <div onClick={() => children && setIsOpen(prev => !prev)}>
          { icon }
        </div>

        {/* dropdown container */}
        { open && 
            cloneElement(children, { setIsOpen, open })  
        }

    </div>
  )
}
