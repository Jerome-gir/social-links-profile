import Image from "next/image"
import Link from "next/link" // Import de Link

export default function Home() {
  type Links = {
    name: string
    link?: string
  }

  const socialLinks: Links[] = [
    {
      name: "Github",
      link: "https://github.com/Jerome-gir",
    },
    {
      name: "Frontend Mentor",
      link: "https://www.frontendmentor.io/profile/Jerome-gir",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/jerome-girard-21838783/",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/jeromegir",
    },
    {
      name: "Instagram",
    },
  ]

  return (
    <main className="bg-grey900 min-h-screen flex items-center justify-center">
      <div className="w-[350px] sm:w-[400px] h-[590px] sm:h-[610px] bg-grey800 rounded-xl p-10">
        <div className="flex items-center flex-col">
          <Image
            className="rounded-full mb-6"
            src="/avatar-jessica.jpeg"
            alt="profile-photo"
            width={90}
            height={90}
          />
          <h1 className="text-white font-interBold text-2xl tracking-wide mb-2">
            Jessica Randall
          </h1>
          <p className="text-green font-interBold text-sm tracking-wide mb-6">
            London, United Kingdom
          </p>
          <p className="text-sm sm:text-base text-white font-inter mb-6">
            &quot;Front-end developer and avid reader.&quot;
          </p>
          <ul className=" flex flex-col gap-4 cursor-pointer">
            {socialLinks.map((link, index) => (
              <li
                key={index}
                className=" w-72 sm:w-80 h-11 rounded-lg bg-grey700 text-sm sm:text-base text-white flex items-center justify-center font-interSemiBold sm:font-interBold sm:hover:bg-green sm:hover:text-grey900"
              >
                {link.link ? (
                  <Link href={link.link}>{link.name}</Link>
                ) : (
                  link.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
