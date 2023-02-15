import "./Ayuda.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const dataCollection = [
    {
        question: '¿Qué es un banco de germoplasma y cómo funciona esta aplicación web?',
        answer: 'Un banco de germoplasma es una colección de muestras de material genético de plantas, animales u otros organismos. Estas muestras se almacenan en condiciones especiales para mantener su viabilidad y diversidad genética a largo plazo. El objetivo principal de los bancos de germoplasma es conservar la diversidad genética de las especies y proporcionar material genético para la investigación y la mejora genética de los cultivos.'
    },
    {
        question: '¿Cómo puedo obtener soporte técnico si tengo problemas con la aplicación?',
        answer: 'Comuníquese con el soporte técnico al número 0994671893 o al número 0967559852. La línea será atendida en las horas de 9:00 am a 2:00 pm.'
    },
    {
        question: '¿Cómo puedo garantizar la privacidad y seguridad de mis datos en la aplicación?',
        answer: 'La aplicación cuenta con un sistema de autenticación y autorización seguro que permite controlar el acceso a los datos y funcionalidades de la aplicación. Esto asegura que solo los usuarios autorizados puedan acceder a la información y realizar acciones en la aplicación.'
    },
    {
        question: '¿Qué puedo hacer cuando existen inconsistencias en los datos?',
        answer: 'Se establecen procedimientos y políticas claras para la entrada de datos: Incorporando procedimientos y políticas claras para la entrada de datos en la aplicación. Esto puede incluir la definición de campos obligatorios, la restricción de caracteres permitidos y la validación de formatos.'
    },
    {
        question: '¿Cómo puedo agregar o actualizar información en el banco de germoplasma?',
        answer: 'La aplicación incorpora una interfaz amigable e intuitiva. Esta le proporciona por medio de una barra lateral el apartado de Accesiones donde se desplegará un menú de opciones y podrá seleccionar registrar acceso y agregar o actualizar datos.'
    },
    {
        question: '¿Hay algún costo asociado con el uso de la aplicación y el acceso al banco de germoplasma?',
        answer: 'La aplicación será limitada por medio de permisos de administración. Por favor comuníquese con el soporte técnico para su uso a los números 0994671893 o 0967559852.'
    },
    {
        question: '¿Qué límite de registros diarios maneja esta aplicación web?',
        answer: 'La aplicación tiene la capacidad de almacenar más de 100 registros diarios XD.'
    }
];

function Ayuda() {
    const [accordion, setActiveAccordion] = useState(-1);
    function toggleAccordion(index) {
        if (index == accordion) {
            setActiveAccordion(-1);
            return
        }
        setActiveAccordion(index);
    };
    return (
        <>
            <div className="help_container">
                <div className="help_container__title_content">
                    <span className="accordion__title">Preguntas Frecuentes</span>
                    <h1>Algunas de las preguntas habituales</h1>
                </div>

                <div className="accordion__faq">
                    {dataCollection.map((item, index) =>
                        <div className="accordion__faq__content" key={index} onClick={() => toggleAccordion(index)}>
                            <div className="accordion__faq-heading">
                                <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                            </div>
                            <div>
                                {accordion === index ? (<>
                                    <span className="verticle">
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </span></>) : (<>
                                        <span className="verticle">
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </span>
                                    </>)}
                            </div>
                            <div>
                                <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Ayuda;