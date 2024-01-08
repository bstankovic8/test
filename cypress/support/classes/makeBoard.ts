import boardElements from "../elements/boardElements";

export default class  makeBoard {

    board(

    ):
        void {
            cy

                .get(boardElements.createBoard)
                .click();

            cy

                .get(boardElements.newBoard)
                .click()
                .type('test board')

            cy

                .get(boardElements.createNew)
                .click();

            cy

                .get(boardElements.myBoard)
                .click();
        }
        /**
     * @param {string} message
     */

    assertMessage(message: string) {
        cy.contains(message).should('be.visible');
    }
}