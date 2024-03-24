/// <reference types="cypress" />

import MakeAppointmentPage from "../pageelements/MakeAppointment";

export default class MakeAnAppointment {
  constructor() {
    globalThis.MakeAppointmentElement = new MakeAppointmentPage();
  }

  navigateToURL() {
    cy.visit("/");
  }
  loginPage() {
    MakeAppointmentElement.makeAppointment().click();
    MakeAppointmentElement.loginUsername().type(Cypress.env('email'));
    MakeAppointmentElement.loginPassword().type(Cypress.env('password'));
    MakeAppointmentElement.loginButton().click();
  }
  makeAppointmentPage() {
    MakeAppointmentElement.appointmentComboFacilityDropdown().select("Seoul CURA Healthcare Center").should('have.value', "Seoul CURA Healthcare Center");
   // 
    MakeAppointmentElement.appointmentMedicAidRadioButton().click();
    MakeAppointmentElement.appointmentVisitDate().type("24/04/2023");
    MakeAppointmentElement.appointmentTextComment().type("test", {force: true});
    MakeAppointmentElement.appointmentBookAppointmentButton().click();
  }
}
