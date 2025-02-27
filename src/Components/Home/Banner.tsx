import { Container, Section } from "@radix-ui/themes";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
    const [name, setName] = useState("")
  const handleShare = () => {
    const phoneNumber = "2348127064038"; // Replace with the recipient's phone number (with country code, e.g., "234XXXXXXXXXX")
    const message = `Hey Ray, I’m _${name.trim()}_! 😊\n\nI came across Mevolve and would love to learn more about it. Could you share some details with me?🥺💘\n\n _message from ${window.location.origin}_`;
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
              <h1 className="text-3xl md:text-5xl font-mont font-semibold">
                Get In Touch
              </h1>
              <p>
                For any questions or inquiries about <span>Mevolve</span>, feel
                free to reach out to an acquaintance on WhatsApp.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-2 md:w-[480px] w-full mx-auto">
                <input type="text" name="name" id="name" placeholder="Enter your name..." value={name} onChange={(e)=> setName(e.target.value)} className="text-white placeholder:text-white border border-white p-2 rounded-lg text-center font-mont text-sm capitalize" />
                <button
                  onClick={handleShare}
                  className=" mx-auto center bg-white px-4 w-full h-10 rounded-full gap-2 text-green-600 font-semibold font-mont"
                >
                  <FaWhatsapp size={20} />
                  <span className="text-[#444]">
                    Ray from{" "}
                    <span className="font-pac text-green-600 tracking-wide">
                      Mevolve
                    </span>
                  </span>
                </button>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
};

export default Banner;
