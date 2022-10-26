import Image from "next/image"
import { Container, SocialButton } from "./styles"

function SocialBar() {

    return(

    <Container>

        <SocialButton href="/" >
            <Image src="/whatsapp3.png" width={40} height={40} alt='image' />
            
        </SocialButton>

       <SocialButton href="/">
        <Image src="/icons8-facebook-240.png" width={40} height={40} alt='image' />
       </SocialButton>
        <SocialButton href="#" >
            <Image src="/icons8-instagram-240.png" width={40} height={40} alt='image' />
        </SocialButton>

        <SocialButton href="https://www.linkedin.com/company/tws-tecnologia/about/?viewAsMember=true">
            <Image src="/icons8-linkedin-circled-240.png" width={40} height={40} alt='image' />
        </SocialButton>

    </Container>

    )
}

export default SocialBar;