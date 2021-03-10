
import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import api from '../../lib/api'

const ModalMeesage = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
      setModal(!modal)
      setTimeout( function() {setModal(false)}, 1800)
    };

  return (
      <div>
          <button className="plus-icon d-none d-lg-block" type="button" onClick={async () => await api.addActivityToMyContentHandler(props.token, props._id, toggle)}>
              <FontAwesomeIcon icon={faPlus} size="1x" color="#FE8D03"></FontAwesomeIcon>
          </button>
          <button className="add-act-button d-lg-none mt-3" type="button" onClick={async () => await api.addActivityToMyContentHandler(props.token, props._id, toggle)}>
              Agregar a mis actividades <FontAwesomeIcon icon={faPlus} size="1x" color="#FE8D03"></FontAwesomeIcon>
          </button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalBody>
                  ¡Listo, se ha guardado en tu contenido!
              </ModalBody>
          </Modal>
      </div>
  );
}

export default ModalMeesage;