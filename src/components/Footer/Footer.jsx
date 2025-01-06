import { Container } from "../Container/Container"
import { FooterStyled } from "./Footer.styled"
import UndpLogo from '../../assets/images/logo-undp.svg'
import MS from '../../assets/images/logo-ms-verdensklasse.svg'
import GlobalGym from '../../assets/images/logo-globale-gymnasier.svg'
import Danida from '../../assets/images/logo-danida.svg'
import { Timer } from "../Timer/Timer"


export const Footer = () => {
  return (
    <FooterStyled>
      <Container className="center" height="600px">
        <div>
          <h4>Om hjemmesiden</h4>
          <p>Dette digitale læringssite er udviklet af UNDP's nordiske kontor i Danmark, Globale Gymnasier og Mellemfolkeligt Samvirke/VerdensKlasse med støtte fra Danidas Oplysningsbevilling. </p>
          <p>Vores mål med dette site er at give lærere og elever på landets ungdomsuddannelser mulighed for at opnå viden, holdninger og handlingskompetence i forhold til FN's verdensmål for bæredygtig udvikling. Sitet opdateres løbende med nyeste statistik, viden og nye undervisningsforløb.</p>
          <Timer />
        </div>
        <div>
          <h4>Organisationerne bag</h4>
          <img alt="UNDP" src={UndpLogo} />
          <img alt="Verdensklasse" src={MS} />
          <img alt="Globale Gymnasier" src={GlobalGym} />

          <h4>Udviklet med støtte fra Danidas oplysningsbevilling</h4>            
          <img alt="Danida" src={Danida} />
        </div>
      </Container>
    </FooterStyled>
  )
}
