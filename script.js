// console.log('Working');


let orderNumber = 0;
let orderBlocks = document.getElementsByClassName('order-block');
let cardHeaders = document.getElementsByClassName('card-header');
let parentDiv = document.getElementById('parent-div');

// const executeOrder = () => {
//     let orderInput = document.getElementById('order-id-input').value;
//     cardHeaders[orderNumber].innerText = 'Order ID : ' + orderInput;
//     orderBlocks[orderNumber].style.display = 'block';
//     orderNumber++;
// }

const createNewOrderColumn = (orderIdInput) => {

    let coldiv = document.createElement('div');
    let cardDiv = document.createElement('div');
    let cardHeaderDiv = document.createElement('div');
    let cardBodyDiv = document.createElement('div');
    let cardTitleH5 = document.createElement('h5');
    let cardTextP = document.createElement('p');
    let cardButtonA = document.createElement('a');
    let cardFooter = document.createElement('div');
    let cardHeaderDivText = document.createTextNode('Order id: ' + orderIdInput);
    let cardTitleH5Text = document.createTextNode('Bill Amount: ');
    let cardTextPText = document.createTextNode('Items: XYZ, ABC, ASD');
    let cardButtonAText = document.createTextNode('cancel Order');
    let cardFooterText = document.createTextNode('PIZZA BAKED!');

    /*----------------------appendChild------------------------- */

    parentDiv.appendChild(coldiv);
    coldiv.appendChild(cardDiv);
    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);
    cardDiv.appendChild(cardFooter);
    cardBodyDiv.appendChild(cardTitleH5);
    cardBodyDiv.appendChild(cardTextP);
    cardBodyDiv.appendChild(cardButtonA);
    cardTitleH5.appendChild(cardTitleH5Text);
    cardTextP.appendChild(cardTextPText);
    cardButtonA.appendChild(cardButtonAText);
    cardHeaderDiv.appendChild(cardHeaderDivText);
    cardFooter.appendChild(cardFooterText);

    /*----------------------adding class------------------------- */

    coldiv.classList = 'col-md-4 col-xs-12 order-block';
    cardDiv.classList = 'card text-center';
    cardHeaderDiv.classList = 'card-header';
    cardBodyDiv.classList = 'card-body';
    cardTitleH5.classList = 'card-title';
    cardTextP.classList = 'card-text';
    cardButtonA.classList = 'btn btn-danger';
    cardFooter.classList = 'card-footer';

    cardHeaderDiv.id = 'order-id-display-1';
    cardButtonA.href = '#';

}

const executeOrder = () => {
    let orderIdInput = document.getElementById('order-id-input').value;
    createNewOrderColumn(orderIdInput);
}


// <div class="col-md-4 col-xs-12 order-block">
//     <div class="card text-center">
//         <div class="card-header" id="order-id-display-1"></div>
//         <div class="card-body">
//             <h5 class="card-title"></h5>
//             <p class="card-text"></p>
//             <a href="#" class="btn btn-danger"></a>
//         </div>
//         <div class="card-footer"></div>
//     </div>
// </div>


/*--------------------Example------------------------- */

// let newDiv = document.createElement('div');
// let newH5 = document.createElement('h5');
// let newH5Text = document.createTextNode('we created this HTML part using JS');

// newH5.appendChild(newH5Text);
// newDiv.appendChild(newH5);
// parentDiv.appendChild(newDiv);

// <div>
//     <h5>we created this HTML part using JS</h5>
// </div>
