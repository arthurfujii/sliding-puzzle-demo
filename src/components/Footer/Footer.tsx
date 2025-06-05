import Link from "next/link";
import { PageSection } from "../PageSection";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import ClassNames from "@/styles/styles";

const Footer = () => {
  const socialMedias = [
    {
      label: "LinkedIn",
      url: "https://...",

      logo: <LinkedInLogoIcon />,
    },
  ];

  return (
    <footer className={ClassNames.darkBackground}>
      <PageSection>
        <div className={ClassNames.footerInnerContainer}>
          <div className={ClassNames.footerCopyright}>© 2023 Dev</div>
          <div className={ClassNames.deviceMobileOnly}>
            <hr />
          </div>
          <div>
            <ul className={"footer-social-medias-container"}>
              {socialMedias.map((media, idx) => (
                <li key={idx}>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={media.url}
                    className={ClassNames.footerSocialMediasLinks}
                  >
                    {media.logo} {media.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>
    </footer>
  );
};

export default Footer;
