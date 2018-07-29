// Core
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { PlayIcon, SpinnerContainer, Spinner } from '../styles';

export const SvgPlayPause = ({ isTransactionsSocketOn, toggleTransactionsSocketOn }) =>
  isTransactionsSocketOn ? (
    <PlayIcon viewBox="0 0 535.578 535.578" onClick={() => toggleTransactionsSocketOn()}>
      <path d="M231.6,516.278c0,10.658-8.641,19.3-19.3,19.3H106.15c-10.659,0-19.3-8.641-19.3-19.3V19.3     c0-10.659,8.641-19.3,19.3-19.3h106.15c10.659,0,19.3,8.641,19.3,19.3V516.278z" />
      <path d="M448.728,516.278c0,10.658-8.641,19.3-19.3,19.3h-106.15c-10.659,0-19.3-8.641-19.3-19.3V19.3     c0-10.659,8.641-19.3,19.3-19.3h106.15c10.659,0,19.3,8.641,19.3,19.3V516.278z" />
    </PlayIcon>
  ) : (
    <PlayIcon viewBox="0 0 41.999 41.999" onClick={() => toggleTransactionsSocketOn()}>
      <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40  c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20  c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z" />
    </PlayIcon>
  );

SvgPlayPause.propTypes = {
  isTransactionsSocketOn: PropTypes.bool,
  toggleTransactionsSocketOn: PropTypes.func,
};

export const SvgSpinner = () => (
  <SpinnerContainer>
    <Spinner viewBox="0 0 516.727 516.727">
      <path
        d="M516.727,266.696c-0.665-34.825-8.221-69.54-22.175-101.283c-13.908-31.771-34.094-60.551-58.876-84.333
      		c-24.767-23.8-54.139-42.615-85.929-55.027c-31.773-12.46-65.937-18.412-99.687-17.69c-33.755,0.668-67.36,8.007-98.091,21.539
      		c-30.754,13.488-58.615,33.058-81.632,57.071c-23.033,24.001-41.229,52.452-53.222,83.229C5.077,200.962-0.66,234.013,0.06,266.696
      		c0.67,32.688,7.793,65.182,20.903,94.899c13.067,29.738,32.019,56.681,55.266,78.931c23.234,22.268,50.766,39.846,80.528,51.417
      		c29.749,11.616,61.69,17.136,93.303,16.419c31.62-0.671,63.001-7.58,91.707-20.268c28.724-12.646,54.747-30.979,76.231-53.461
      		c21.503-22.469,38.461-49.08,49.611-77.827c6.79-17.427,11.396-35.624,13.824-54.062c0.649,0.037,1.302,0.063,1.96,0.063
      		c18.409,0,33.333-14.923,33.333-33.333c0-0.936-0.049-1.861-0.124-2.777L516.727,266.696L516.727,266.696z M463.762,355.21
      		c-12.226,27.71-29.94,52.812-51.655,73.532c-21.703,20.732-47.396,37.076-75.127,47.807c-27.724,10.77-57.443,15.859-86.919,15.146
      		c-29.481-0.677-58.644-7.154-85.323-18.997c-26.692-11.806-50.877-28.901-70.83-49.849c-19.968-20.938-35.691-45.711-46.001-72.427
      		c-10.349-26.712-15.223-55.321-14.512-83.728c0.678-28.413,6.941-56.465,18.361-82.131c11.384-25.677,27.863-48.943,48.045-68.13
      		c20.172-19.202,44.026-34.307,69.726-44.195c25.697-9.928,53.195-14.587,80.534-13.877c27.343,0.68,54.286,6.728,78.939,17.726
      		c24.662,10.963,47.008,26.824,65.429,46.241c18.436,19.405,32.922,42.341,42.391,67.025c9.504,24.684,13.948,51.072,13.241,77.342
      		h0.125c-0.076,0.916-0.125,1.841-0.125,2.777c0,17.193,13.018,31.34,29.732,33.137C476.551,320.747,471.184,338.453,463.762,355.21
      		z"
      />
    </Spinner>
  </SpinnerContainer>
);