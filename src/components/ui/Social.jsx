import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Alihusnain1489"},
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/ali-husnain-790929252/"},
  { icon: <FaEnvelope />, path: "mailto:mr.alihusnain.11@gmail.com"}
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  )
}

export default Social