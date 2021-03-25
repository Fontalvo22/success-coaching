import React from 'react';
import './Courses.scss';
const Courses = () => {

  return (
    <div className="Courses">
      <div className="row justify-content-between">
        <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 px-1 mb-4">
          <img src="https://picsum.photos/500/400" className="img-fluid" alt="" />
          <section className="course-message bg-simple">
            <p className="m-0 documents-available">Documentos disponibles</p>
          </section>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 px-1 mb-4">
          <img src="https://picsum.photos/500/400" className="img-fluid" alt="" />
          <section className="course-message bg-simple">
            <p className="m-0 documents-available">Documentos disponibles</p>
          </section>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 px-1 mb-4">
          <img src="https://picsum.photos/500/400" className="img-fluid" alt="" />
          <section className="course-message bg-simple">
            <p className="m-0 documents-available">Documentos disponibles</p>
          </section>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 px-1 mb-4">
          <img src="https://picsum.photos/500/400" className="img-fluid" alt="" />
          <section className="course-message bg-simple">
            <p className="m-0 documents-available">Documentos disponibles</p>
          </section>
        </div>
      </div>
    </div>
  )

}

export default Courses;