/// <reference types="cypress" />

import MakeAnAppointmentPage from "../../pageobjects/pageactions/MakeAppointment";

describe('My First Test', () => {
    const makeAppointmentTest = new MakeAnAppointmentPage ();
 before(() => {
    makeAppointmentTest.navigateToURL();
 })

      it('Login Page', () => {
        makeAppointmentTest.loginPage();
        makeAppointmentTest.makeAppointmentPage();

      })


    })