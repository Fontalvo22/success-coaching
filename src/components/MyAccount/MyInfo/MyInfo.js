import React, { useState, useRef } from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';

import './MyInfo.scss';

const MyInfo = () => {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content className="tootltip-body-social-media">
        <span>Ins</span>
        <span>FB</span>
        <span>Twit</span>
        <span>Ws</span>
        <span>Gm</span>


      </Popover.Content>
    </Popover>
  );


  return (
    <div className="MyInfo">
      <div className="row mt-5 mb-5">
        <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 px-1">
          <section className="info bg-simple">
            <article className="my-plan-img p-2 frame-container">
              <div className="into-frame">
                <p className="mb-1 text-center my-actual-plan">Mi Plan actual</p>
                <img src="https://picsum.photos/100/200" className="img-fluid plan-img" alt="" />
                <button className="app-btn update-plan">Actualizar plan</button>
              </div>
            </article>
          </section>
        </div>

        <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 px-1">
          <section className="info info-second bg-simple">
            <article className="my-plan-img p-2 text-center frame-container">

              <div className="into-frame">

                <div className="progress">
                  <div className="progress-bar app-bg" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70%</div>
                </div>
                <button className="app-btn update-plan mt-4">Siguiente nivel</button>
              </div>
            </article>
          </section>
        </div>

        <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 px-1">
          <section className="info bg-simple p-3 frame-container">
            <div className="into-frame">
              <article className="refer-frame py-2 d-flex justify-content-center">
                <p className="mb-0 text-center"> Success.com / Username </p>
              </article>
              <div className="text-center my-5 invite-frame">
                <p className="invite">Invita a tu equipo a compartir tu código de referido</p>
              </div>
              <div className="text-center">
                <a href="#" className="click-here">Click aquí</a>
              </div>
            </div>
          </section>
        </div>


        <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 px-1">
          <section className="info bg-simple">
            <article className="p-2 frame-container">
              <div>
                <p className="app-title text-center">Mi Código de referidos</p>
                <p className="refer-frame app-title p-1 text-center">as45fc1 sac59sa</p>

                <div className="copy-share text-center">
                  <span className="mr-4">Icon C</span>

                  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <Button className="share-social-media-btn">Share</Button>
                  </OverlayTrigger>
                </div>



              </div>
            </article>

          </section>
        </div>

      </div>
    </div>
  )

}


export default MyInfo;