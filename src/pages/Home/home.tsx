import './home.css';
import NavBar from './../../components/NavBar/NavBar';
import Inicio from './../../components/inicio/inicio';
import Card from './../../components/cards/card';
import Sobre from './../../components/sobre/Sobre';
import Carrosel from './../../components/carrosel/Carrosel';
import Caixa from './../../components/caixa/Caixa';
import Rodape from './../../components/rodape/Rodape';
 function Home() {
  return (
    <div>
        <NavBar />
        <Inicio />
        <Card />
        <Sobre />
        <Carrosel />
        <Caixa />
        <Rodape />
    </div>
  );
}
export default Home;