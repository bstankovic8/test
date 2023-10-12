import deleteBoardElements from "../elements/deleteBoardElements";

export default class deleteBoard {

    delete():
        void {
            cy
            
                .get(deleteBoardElements.board)
                .click();

            cy
            
                .get(deleteBoardElements.boardOption)
                .click();

            cy
            
                .get(deleteBoardElements.deleteBoard)
                .click();

            cy
                .contains('Create a board...')
                .should('be.visible');
    }
}