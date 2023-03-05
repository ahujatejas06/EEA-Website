import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section bg-theme-light pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {footer.map((col) => {
            return (
              <div className="mb-6 sm:col-6 lg:col-6" key={col.name}>
                <div style={{alignItems:"center"}}>
                {markdownify(col.name, "h2", "h4")}
                <ul className="mt-12">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-6 sm:col-6 lg:col-6">
            <h5 className="mb-3">ACES Building</h5>
            <p>Academic Area</p>
            <p>IIT Kanpur, Kanpur-208016 </p>
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6">
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
