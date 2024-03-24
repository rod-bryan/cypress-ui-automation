/// <reference types="cypress" />

const objectLocators = require("../../object-repository/locators.json");

export default class MakeAppointmentElements {


    // Login Page
    makeAppointment(){
        return cy.get(objectLocators.login.makeAppointmentButton);
    }
    loginUsername() {
        return cy.get(objectLocators.login.username);
    }
    loginPassword() {
        return cy.get(objectLocators.login.password);
    }
    loginButton() {
        return cy.get(objectLocators.login.loginButton);
    }

    // Make Appointment Page
    appointmentComboFacilityDropdown() {
        return cy.get(objectLocators.makeAppointment.comboFacilityDropdown);
    }
    appointmentMedicAidRadioButton() {
        return cy.get(objectLocators.makeAppointment.medicAidRadioButton);
    }
    appointmentVisitDate() {
        return cy.get(objectLocators.makeAppointment.visitDate);
    }
    appointmentTextComment() {
        return cy.get(objectLocators.makeAppointment.textComment);
    }
    appointmentBookAppointmentButton() {
        return cy.get(objectLocators.makeAppointment.bookAppointmentButton);
    }

}