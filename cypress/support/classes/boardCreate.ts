import boardElements from "../elements/boardElements";

export default class boardCreate  {

    board (): 
        void {
            cy
            
                .get(boardElements.createBoard)
                .click();

            cy
        
                .get(boardElements.newBoard)
                .click()
                .type('testabilna aplikacija');

            cy
            
                .get(boardElements.createNew)
                .click();
}}