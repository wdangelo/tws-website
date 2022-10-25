import Link from 'next/link'
import Image from 'next/image'
import { NavContainer, NavUl, NavLi, NavImg } from "./style";

import logo from '../../../public/logo.png'

export default function NavBar() {
    return(
        <>  
            <NavContainer>
            <NavImg>
            <NavLi>
            <Image 
                src={logo}
                alt="TWS Logo"
                width={50}
                height={50}
                
                />
            </NavLi>    

                
            </NavImg>

                <NavUl>

                        <NavLi><Link href="/">Home</Link></NavLi>
                        <NavLi><Link href="/quem-somos">Quem somos</Link></NavLi>
                        <NavLi><Link href="/">Contato</Link></NavLi>

                        
                    </NavUl>
            </NavContainer>
            <div >

            </div>
        </>
    )
}