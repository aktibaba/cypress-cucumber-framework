Feature: Simple Formio Form
  Testing Simple Formio Form
    
    #can be added if repeated  test scnerios exist
     # Background: user on login page
        
      Scenario: verifying filling simple formio form 
        Given user navigate formio
        Then user fill the form 
        Then user verify form submission
