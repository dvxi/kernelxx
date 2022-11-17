import { React, useState} from 'react';
import { Container, Col, Row, Image, Carousel } from 'react-bootstrap';

import NavbarComponent from './components/NavbarComponent';
import WelcomeSection from './components/WelcomeSection';
import InfoSection from './components/InfoSection';
import AgendaSection from './components/AgendaSection';
import InfoModal from './components/InfoModal';

function App() {

  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const handleModal = (modalInfo) => {
    setModalInfo(modalInfo);
    console.log(modalInfo);
    setModalShow(true);
  }

  return (
    <div>
      <NavbarComponent />
      <WelcomeSection />
      <InfoSection />
      <AgendaSection handleModal={handleModal}/>
      <InfoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        info={modalInfo}
      />
      {/* <img 
      src="./kernel.svg"
      style={{
        position: 'absolute',
        top: 0,
        right: '-10%',
        zIndex: -1
      }}
      className="opacity-25"/> */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        borderRadius: '50%',
        background: "radial-gradient('#e66465', '#9198e5')",
        width: '80vw',
        height: '80vw'
      }}></div>
    </div>
  );
}

export default App;
