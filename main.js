(function(){
    
    function showModalWindow(titleModal, contentModal, buttons){

    const modal = document.createElement("div");
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal_inner">
        <div class="modal_top">
            <div class="modal_title">
                <p>${titleModal}</p>
                <button class="modal_close"><i class="fa-solid fa-circle-xmark"></i></button>
            </div>
            <div class="modal_content">${contentModal}</div>
            <div class="modal_bottom"></div>
        </div>
    </div>
    `;
    document.body.appendChild(modal);
    }
   

    showModalWindow( "Some modal title",'<div class="modal_title"></div>' , console.log('function button')
        // [{
        //     label: "order",
        //     onClick: () => {
        //         console.log("button clicked");
        //     }
        // }]
    )

});