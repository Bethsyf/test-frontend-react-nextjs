'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './AnimalForm.module.scss';

const AnimalForm = ({
  handleSubmit,
  initialValues, // Nuevamente prop para los valores iniciales
  isUpdating = false, // Nuevo prop para indicar si se está actualizando
}: {
  handleSubmit: (data: any) => void;
  initialValues: any;
  isUpdating?: boolean; // Por defecto, asumimos que no se está actualizando
}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
    origin: Yup.string().required('El origen es obligatorio'),
    image: Yup.string().required('La imagen es obligatoria'),
    diet: Yup.string().required('La dieta es obligatoria'),
    skills: Yup.string().required('Las habilidades son obligatorias'),
  });

  const onSubmit = (values: any, { setSubmitting }: any) => {
    handleSubmit(values);
    setSubmitting(false);
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.animalForm}>
            <h2>{isUpdating ? 'Modificar' : 'Crear'} Animal</h2>{' '}
            {/* Cambio en el título */}
            <div className={s.formGroup}>
              <label htmlFor="name">Nombre:</label>
              <Field
                type="text"
                id="name"
                name="name"
                className={s.formInput}
              />
              <ErrorMessage name="name" component="div" className={s.error} />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="origin">Origen:</label>
              <Field
                type="text"
                id="origin"
                name="origin"
                className={s.formInput}
              />
              <ErrorMessage name="origin" component="div" className={s.error} />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="image">Imagen:</label>
              <Field
                type="text"
                id="image"
                name="image"
                className={s.formInput}
              />
              <ErrorMessage name="image" component="div" className={s.error} />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="diet">Dieta:</label>
              <Field
                type="text"
                id="diet"
                name="diet"
                className={s.formInput}
              />
              <ErrorMessage name="diet" component="div" className={s.error} />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="skills">Habilidades:</label>
              <Field
                as="textarea"
                id="skills"
                name="skills"
                className={s.formInput}
              />
              <ErrorMessage name="skills" component="div" className={s.error} />
            </div>
            <button
              type="submit"
              className={s.submitButton}
              disabled={isSubmitting}
            >
              {isUpdating ? 'Actualizar' : 'Crear'}{' '}
              {/* Cambio en el texto del botón */}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AnimalForm;
