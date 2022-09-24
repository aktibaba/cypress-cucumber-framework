const {
    Given,
    When,
    Then,

} = require("@badeball/cypress-cucumber-preprocessor");
import formiobasicform from "./formio-basic-form-object";

//Scenario: verifying filling simple formio form 
Given("user navigate formio", () => {
    formiobasicform.navigatingFormioAngularDemoApp()
})
When("user fill the form", () => {
    formiobasicform.fillingBasicForm()
})
Then("user verify form submission", () => {
    formiobasicform.verifyingSubmission()

})