import React from 'react'


import { NavLink } from 'react-router-dom';
import NavSections from '../NavSections/NavSections';
import Dropzone from 'react-dropzone'
import LateralMenu from '../LateralMenu/LateralMenu';
import './MyConfig.scss';
const MyConfig = () => {

  return (
    <div className="MyConfig container">
      <NavSections />
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-6 app-bg text-white mb-5 p-1">Configuración</div>
      </div>

      <div className="row">

        <LateralMenu />

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

          <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section className="dropzone text-center">
                <div className="h-100 container-drop d-flex align-items-center justify-content-center" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p className="app-title text center">Drop files here...</p>
                </div>
              </section>
            )}
          </Dropzone>

          <section className="next-lection text-right">
            <button className="btn app-btn mt-3 mb-4 px-4">Agregar</button>
          </section>

          <section className="files-loaded app-frame p-4">
            <div className="row text-center justify-content-center">
              <div className="col-12 app-bg text-white p-1">Documentos cargados</div>
            </div>

            <ol className="files-list">
              <li className="file-title app-title my-4">Lorem Ipsum</li>
              <li className="file-title app-title my-4">Lorem Ipsum</li>
              <li className="file-title app-title my-4">Lorem Ipsum</li>
              <li className="file-title app-title my-4">Lorem Ipsum</li>
              <li className="file-title app-title my-4">Lorem Ipsum</li>
            </ol>

          </section>




        </div>


      </div>
    </div>
  )

}

export default MyConfig;