'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './SignUpForm.module.scss';
import { createUserWithEmailAndPassword } from 'app/services/firebase/methods';

const SignUpForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string()
      .email('Correo electrónico inválido')
      .required('El correo electrónico es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
      .required('Debes confirmar tu contraseña'),
  });

  const handleSubmit = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      await createUserWithEmailAndPassword(
        values.email,
        values.password,
        values.name
      );
      window.location.href = '/animals';
    } catch (error) {
      console.error('Error al crear la cuenta:', error);
    }
  };
  return (
    <div className={s.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.animalForm}>
          <h2>Registro</h2>
          <div className={s.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <Field type="text" id="name" name="name" className={s.formInput} />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>
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
          <div className={s.formGroup}>
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={s.formInput}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={s.error}
            />
          </div>
          <button type="submit" className={s.submitButton}>
            Registrarse
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
