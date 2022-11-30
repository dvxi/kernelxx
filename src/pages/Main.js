import { React, useState } from 'react';

import WelcomeSection from '../components/WelcomeSection';
import InfoSection from '../components/InfoSection';
import AgendaSection from '../components/AgendaSection';
import InfoModal from '../components/InfoModal';
import SecondInfoSection from '../components/SecondInfoSection';

export default function Main() {

    const [modalShow, setModalShow] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    const handleModal = (modalInfo) => {
        setModalInfo(modalInfo);
        console.log(modalInfo);
        setModalShow(true);
    }

  return (
    <>
    <WelcomeSection />
    <InfoSection />
    <AgendaSection handleModal={handleModal}/>
    <InfoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        info={modalInfo}
    />
    <SecondInfoSection />
    <div style={{
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: '50%',
    background: "radial-gradient('#e66465', '#9198e5')",
    width: '80vw',
    height: '80vw'
    }}></div>
    </>
  )
}
