import { BasePage } from "../../pages/base.page"
import { AppPagesEnum } from "../../src/shared/app-pages.enum";
import { ButtonTextEnum } from "../../src/shared/button-text.enum";
import { LoginApi } from "../../services/api-login";

const loginApi = new LoginApi();

export class BaseActions extends BasePage{
   generateTokenAndAuthentication(){
    loginApi.login();
    loginApi.visitAuthenticated(Cypress.env('auth_base_url'))  
    }
    
    goToThePage(option: string){
        cy.wait(1000);
        switch (option){
            case AppPagesEnum.HOME:
                cy.get(this.menuOptions).contains('Home').click();
                break;
            case AppPagesEnum.MYACCOUNT:
                cy.get(this.menuOptions).contains('My Account').click();;
                break;
            case AppPagesEnum.BANKACCOUNTS:
                cy.get(this.menuOptions).contains('Bank Accounts').click();;
                break;
            case AppPagesEnum.NOTIFICATIONS:
                cy.get(this.menuOptions).contains('Notifications').click();;
                break;
            default:
                throw Error(`Wrong page option: ${option}`);

        }
    }
    
    clickOnButton(option: string){
      cy.wait(1000)
      switch(option){
        case ButtonTextEnum.CREATE:
            cy.get(this.buttonOptions).should('be.visible').contains('Create').click();
            break;
        case ButtonTextEnum.DELETE:
            cy.get(this.buttonOptions).should('be.visible').contains('Delete').click();
            break;
        case ButtonTextEnum.SAVE:
            cy.get(this.buttonOptions).should('be.visible').contains('Save').click();
            break; 
        case ButtonTextEnum.DISMISS:
            cy.get(this.buttonOptions).should('be.visible').contains('Dismiss').click();
            break; 
        default:
            throw Error(`Wrong botton option: ${option}`);
      }
    }
}