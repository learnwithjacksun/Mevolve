import { Container, Section } from "@radix-ui/themes"
import { FaWhatsapp } from "react-icons/fa"

const Banner = () => {
    const handleShare = () => {
        const phoneNumber = "2348127064038"; // Replace with the recipient's phone number (with country code, e.g., "234XXXXXXXXXX")
        const message = `Hey Ray, I’m _"your name..."_! 😊\n\nI came across Mevolve and would love to learn more about it. Could you share some details with me?🥺💘\n\n _message from ${window.location.origin}_`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
      };
      
  return (
    <>
    <div data-aos="zoom-in" className="main">

    <Section className="bg-gradient-to-br from-green-900 to-green-600 px-6 rounded-2xl">
        
        <Container className="text-center">

        <div className="text-white font-sans space-y-2">
            <h1 className="text-3xl md:text-5xl font-mont font-semibold">Get In Touch</h1>
            <p>
  For any questions or inquiries about <span>Mevolve</span>, feel free to reach out to an acquaintance on WhatsApp.
</p>


        </div>
        <button onClick={handleShare} className="mt-10 mx-auto center bg-white px-4 py-2 rounded-full gap-2 text-green-600 font-semibold font-mont">
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