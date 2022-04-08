import "./Footer.css";
import Texto from "../../shared/Texto/Texto";
import Icones from "../../shared/Icones/Icones";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const mobile = useMediaQuery({
    query: "(max-width:480px)",
  });

  return (
    <footer>
      <div className="footer-texto">
        {!mobile ? (
          <Texto tipo="paragrafo" class="cinza-claro">
            São Paulo, SP - 89251-000 | Mee Company, all rights reserved.
          </Texto>
        ) : (
          <Texto tipo="paragrafo" class="cinza-claro">
            Mee Company, all rights reserved.
          </Texto>
        )}
      </div>
      <div className="redes">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://br.pinterest.com/meeplantas/"
        >
          <Icones
            icone="pinterest"
            className="hover-verde-claro icone-footer-social"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/meeplantas/"
        >
          <Icones
            icone="instagram"
            className="hover-verde-claro icone-footer-social"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
