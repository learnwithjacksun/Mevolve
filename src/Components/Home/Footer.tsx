import { Section } from "@radix-ui/themes"

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <>
    <Section>
        <div>
            <p className="text-center font-sans text-gray-500">All rights reserved &copy; {year} &bull; Mevolve</p>
        </div>
    </Section>
    </>
  )
}

export default Footer