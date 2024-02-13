'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './LoginForm.module.scss';

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Correo electrónico inválido')
      .required('El correo electrónico es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.animalForm}>
          <h2>Iniciar sesión</h2>
          <div className={s.formGroup}>
            <label htmlFor="email">Correo electrónico:</label>
            <Field
              type="email"
              id="email"
              name="email"
              className={s.formInput}
            />
            <ErrorMessage name="email" component="div" className={s.error} />
          </div>
          <div className={s.formGroup}>
            <label htmlFor="password">Contraseña:</label>
            <Field
              type="password"
              id="password"
              name="password"
              className={s.formInput}
            />
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>
          <button type="submit" className={s.submitButton}>
            Iniciar sesión
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
