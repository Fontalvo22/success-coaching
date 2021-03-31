import React from 'react';
import NavSections from '../NavSections/NavSections';
import LateralMenu from '../LateralMenu/LateralMenu';
import './Support.scss';
import { Accordion, Button } from 'react-bootstrap';

const Support = () => {

  return (
    <div className="Support container">
      <NavSections />
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-6 app-bg text-white mb-5 p-1">Soporte</div>
      </div>


      <div className="row">
        <LateralMenu />
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <section className="resumen-lection app-frame px-4 py-3">
            <div className="row text-center justify-content-center">
              <div className="col-12 app-bg text-white mb-4 p-1">Preguntas frecuentes</div>
            </div>

            <div>
              <div className="form-group text-center">
                <Accordion defaultActiveKey={false} className="text-start">

                  <Accordion.Toggle as={Button} variant="link" eventKey="0" className="d-block w-100 app-bg text-white d-flex justify-content-between question">

                    <p className="m-0">
                      Preguntas Frecuentes
                    </p>
                    <span>---</span>

                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <div className="navbar-collapse app-bg mt-2 question">
                      <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                    </div>
                  </Accordion.Collapse>
                </Accordion>
              </div>
            </div>


          </section>


        </div>
      </div>



    </div>
  )

}
Support.propTypes = {
}

export default Support;