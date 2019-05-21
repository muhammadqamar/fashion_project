

const initialState = {
    count_item:0,
    checkoutitem :[],
    color_logo_class:"color_logo_class_white"
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'add_item':

  //alert()
            var uniqu_img = Array.from(new Set(action.value.map(x=>x.img_s)))
          //  console.log(uniqu_img)
            newState.checkoutitem = []
            for (var x=0;x<uniqu_img.length;x++){

                for (var x1=0;x1<action.value.length;x1++){
                          if(action.value[x1].img_s == uniqu_img[x] ){
                            newState.checkoutitem.push(action.value[x1])
                            break
                          }

                }

            }



            newState.count_item =  newState.checkoutitem.length
          //  console.log(newState.checkoutitem)
            break;

        case 'update_logo':
            newState.color_logo_class= action.value;
            break;
    }
    return newState;
};

export default reducer;
