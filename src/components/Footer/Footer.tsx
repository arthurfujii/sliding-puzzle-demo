import classNames from "classnames";
import Link from "next/link";
import { PageSection } from "../PageSection";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

const Footer = () => {
  const socialMedias = [
    {
      label: "LinkedIn",
      url: "https://...",
      logo: <LinkedInLogoIcon />,
    },
  ];

  return (
    <footer className="footer-container dark-background">
      <PageSection>
        <div className={css({ padding: "24px 0" })}>
          <div className={css({ color: "#fff" })}>© 2023 Dev</div>
          <div className="device-mobile-only">
            <hr />
          </div>
          <div>
            <ul
              className={css({
                alignItems: { md: "center" },
                display: { md: "flex" },
                justifyContent: { md: "space-between" },
                padding: "24px 0",
              })}
            >
              {socialMedias.map((media, idx) => (
                <li key={idx}>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={media.url}
                    className={css({ color: "#fff" })}
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
