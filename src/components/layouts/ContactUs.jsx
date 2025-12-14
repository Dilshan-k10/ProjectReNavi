import ContactCard from "../ui/ContactCard";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="grid lg:grid-cols-2 lg:gap-[30px]">
        <div className="content">
          <h2 className="introStyle text-secondaryBlue">contact us</h2>
          <h1 className="headingStyle text-secondaryBlue">Get in Touch</h1>
        </div>
        <p className="headingDescriptionStyle">
          Together, these innovations redefine how students connect with
          opportunities and how universities build their next generation of
          talent.
        </p>
      </div>
      <img
        src="src/assets/images/contact-us.svg"
        alt="contact-us"
        className="mt-8 lg:mt-[50px]"
      />

      <div className="grid lg:grid-cols-4 mt-[20px] lg:mt-[40px] gap-12 lg:gap-[30px]">
        <ContactCard
          contact={{
            image: "src/assets/icons/streamline_send-email-remix.svg",
            title: "info@projectrenavi.com",
            description:
              "Send us a message and we'll respond within one business day.",
          }}
        />
        <ContactCard
          contact={{
            image: "src/assets/icons/flowbite_whatsapp-solid.svg",
            title: "Open WhatsApp",
            description: "Talk directly with our team right now.",
          }}
        />
        <ContactCard
          contact={{
            image: "src/assets/icons/mingcute_phone-line.svg",
            title: "+94 119900338",
            description:
              "Speak with an a specialist during business hours today.",
          }}
        />
        <ContactCard
          contact={{
            image: "src/assets/icons/grommet-icons_location.svg",
            title: "View Map",
            description: "Visit us to see our platform in action and discuss.",
          }}
        />
      </div>
    </div>
  );
};
export default ContactUs;
