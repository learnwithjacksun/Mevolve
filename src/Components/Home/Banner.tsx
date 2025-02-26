import { Container, Section } from "@radix-ui/themes"
import { FaWhatsapp } from "react-icons/fa"

const Banner = () => {
  return (
    <>
    <div className="main">

    <Section className="bg-gradient-to-br from-green-800 to-green-500 px-6 rounded-2xl">
        
        <Container className="text-center">

        <div className="text-white font-sans space-y-2">
            <h1 className="text-3xl md:text-5xl font-mont font-semibold">Get In Touch</h1>
            <p>For further questions and enquiries about <span>Mevolve</span>, <br /> meet an acquaintance on WhatsApp.</p>

        </div>
        <button className="mt-10 mx-auto center bg-white px-4 py-2 rounded-full gap-2 text-green-600 font-semibold font-mont">
            <FaWhatsapp size={20}/>
            <span className="text-[#444]">Ray from <span className="font-pac text-green-600 tracking-wide">Mevolve</span></span>
        </button>
        </Container>
    </Section>
    </div>
    </>
  )
}

export default Banner