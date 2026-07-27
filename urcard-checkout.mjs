//CLICK ABOVE CARD TXT
const clickAbove_card_txt = document.getElementById("clickAbove-card-txt-id");
const mediaQuery = window.matchMedia("(max-width: 650px)");

function handleTabletChange(e) {
    // 2. Check if the media query matches
    if (e.matches) {
        // Viewport is 768px wide or less (Mobile/Tablet view)
        clickAbove_card_txt.innerText = "tap the card above"
    } else {
        // Viewport is wider than 768px (Desktop view)
        clickAbove_card_txt.innerText = "click the card above"

    }
} 
// 3. Register the listener function for real-time changes
mediaQuery.addEventListener('change', handleTabletChange);

// 4. Initial check execution on page load
handleTabletChange(mediaQuery);
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

//MAIN CONTAINERS
//  //  //LOADING SCREEN VARIABLE
const loadingContainer = document.getElementById("loading-container-id");
//  //  //OVERLAY CONTAINER
const overlayContainer = document.getElementById("overlay-container-1-id");
//  //  //SERVICE ITEM ADDTIONAL INFO ALERT
const serviceItem_additional_info_alert = document.getElementById("serviceItem-additional-info-alert-id"); 
//  //  //SERVICE ITEM ADDITONAL INFO ALERT - OKAY BTN 
const additionalInfo_okayBtn = document.getElementById("additionalInfo-okayBtn-id");
//  //  //DELIVERY/SHIPPING INFO CONTAINER
const allAssets_deliveryCarryout_shippingInfo_container = document.getElementById("allAssets-delivery-carryout-shippingInfo-container-id");
//  //  //ALL ASSETS POS CONTAINER
const allAssets_pos_container = document.getElementById("allAssets-pos-container-id");
//  //  //USER ADDRESS TXT user-address-txt-id
const user_address_txt = document.getElementById("user-address-txt-id");


//PRIMARY BUTTONS
//  //  //UR SELECTIONS BTN
const urSelection_btn = document.getElementById("viewSelections-btn-id");
//  //  //UR CARD BTN - UR SELECTIONS BTN
const urCard_btn = document.getElementById("urcard-graphic-id");
//  //  //OVERLAY CONTAINER CLOSE BTN
const close_overlayContainer_btn = document.getElementById("overlay1-close-btn-id");
//  //  //OVERLAY CONTAINER BACK BTN 
const back_overlayContainer_btn = document.getElementById("overlay1-back-btn-id");

//GET URL STRING
const queryString = window.location.search; //PULL FROM BROSWER
// const queryString = "https://www.urcard.org/urmarket/checkout&&servid1=1&servid2=2&servcode1=1001171170&servcode2=1234&prodid1=1&prodcode1=122000111000112&urcardid=tm1v1000001a"; //TEST URL
//PARSE THE URL PARAMETERS
const urlParams = new URLSearchParams(queryString);
//EXTRACT SPECIFIC PARAMETER VALUES
//  //SERVICE ID 1
var serviceID_1 = urlParams.get('servid1');
//  //SERVICE ID 2
var serviceID_2 = urlParams.get('servid2');
//  //SERVICE CODE 1
var serviceCODE_1 = urlParams.get('servcode1');
//  //SERVICE CODE 2
var serviceCODE_2 = urlParams.get('servcode2');
//  //PRODUCT ID 1
var prodID1 = urlParams.get('prodid1');
//  //PRODUCT CODE 1
var productCODE_1 = urlParams.get('prodcode1');
//  //UR CARD ID
var urCardID = urlParams.get('urcardid'); 

//UR CARD SELECTION 'LOOK UP' TABLE
//  //VENDOR VARIABLE:
var serVendor1; 
var serVendor2;
var prdVendor1; 

//  //  //UR START BOOK PUBLISHING SERVICE VENDOR
var urStart_bookP_vendor = "urStart_bookP_vendor"; 
//  //  //CUSTOM SERVICE VENDOR
var customServ_vendor = "customServ_vendor"; 
//  //  //****ADD NEW SERVICE VENDOR HERE****

//  //  //NUBIAN REPUBLIC PRODUCT VENDOR 
var nubianRepublic_p_vendor = "nubianRepublic_p_vendor";
//  //  //****ADD NEW PRODUCT VENDOR HERE****

//VENDOR DATA TABLE VARIABLE/CONSTANTS
const serviceID1_table = document.getElementById("serviceID1-input-id");
const serviceID2_table = document.getElementById("serviceID2-input-id");
const serviceCODE1_table = document.getElementById("serviceCODE1-input-id");
const serviceCODE2_table = document.getElementById("serviceCODE2-input-id");
const productID1_table = document.getElementById("productID1-input-id");
const productCODE1_table = document.getElementById("productCode1-input-id"); 
const urCardID_table = document.getElementById("urCardID-DTslot-id"); 

//ASSIGN URL PARAMETERS TO DATA TABLE
async function urlParams_dateInput() {
    //LINK URL PARAMS to DATA TABLE
    //  //SERVICE DATA
    serviceID1_table.value = serviceID_1; 
    serviceID2_table.value = serviceID_2; 
    serviceCODE1_table.value = serviceCODE_1;
    serviceCODE2_table.value = serviceCODE_2; 
    //  //PRODUCT DATA 
    productID1_table.value = prodID1; 
    productCODE1_table.value = productCODE_1;
    //  //UR CARD ID DATA
    urCardID_table.value = urCardID; 
} urlParams_dateInput(); 


//  //BOTTOM BUTTONS CONTAINER 1
const bottomBtns_container1 = document.getElementById("selectedItems-bottomBtn-container-id"); 
//  //ORDER TOTAL TXT
const order_total_txt = document.getElementById("order-total-txt-id"); 
//  //ORDER TOTAL DATA TABLE ENTRY
const order_total_DTslot = document.getElementById("order-total-DTslot-id"); 
//  //BOTTON BUTTONS - NEXT BTN
const bottomOrderTotal_nextBtn = document.getElementById("bottomOrderTotal-nextBtn-id");
//  //SERVICE SLOT 1 - COST VARIABLE
var serviceSlot1_cost;
//  //SERVICE SLOT 2 - COST VARIABLE
var serviceSlot2_cost;
//  //SERVICE SLOT 3 - COST VARIABLE
var serviceSlot3_cost;
//  //SERVICE SLOT 4 - COST VARIABLE
var serviceSlot4_cost;
//  //SERVICE SLOT 5 - COST VARIABLE
var serviceSlot5_cost;
//  //PRODUCT SLOT 1 - COST VARIABLE
var productSlot1_cost;
//  //PRODUCT SLOT 2 - COST VARIABLE
var productSlot2_cost;
//  //PRODUCT SLOT 3 - COST VARIABLE
var productSlot3_cost;
//  //PRODUCT SLOT 4 - COST VARIABLE
var productSlot4_cost;
//  //PRODUCT SLOT 5 - COST VARIABLE
var productSlot5_cost;
//  //BOTTOM BTNS - ORDER TOTAL AMOUNT
var bottomBtn_orderTotal;
//ALL SLOT SUM VARIABLE
var all_slots_cost_sum;


//  //ASSIGN URCARD SERVICE VENDOR 1 DATA
async function getURCard_serviceVendor1() {
    //GET ALL SELECTED SERVICES 
     //SERVICE ID 1 - VENDOR 1 ASSIGNMENT
    if (serviceID1_table.value == 1) {
        // 1 = UR START BOOK PUBLISHING VENDOR
        serVendor1 = urStart_bookP_vendor;
    } 
    //SERVICE ID 1 - VENDOR 2 ASSIGNMENT
    else if (serviceID1_table.value == 2) {
        // 2 = CUSTOM SERVICE VENDOR
        serVendor1 = customServ_vendor;
    } 
    //****ADD NEW SERVICE VENDOR HERE - ELSE IF STATEMENT****
    else {
        serVendor1 = null;
    }
    console.log("Service Vendor 1 = " + serVendor1);
}

//  //ASSIGN URCARD SERVICE VENDOR 2 DATA
async function getURCard_serviceVendor2() {
    //SERVICE ID 1 - VENDOR 2 ASSIGNMENT
    if (serviceID2_table.value == 1) {
        // 1 = UR START BOOK PUBLISHING VENDOR
        serVendor2 = urStart_bookP_vendor;
    }
    //SERVICE ID 2 - VENDOR 2 ASSIGNMENT
    else if (serviceID2_table.value == 2) {
        // 2 = CUSTOM VENDOR
        serVendor2 = customServ_vendor;
    }
    //****ADD NEW SERVICE VENDOR HERE - ELSE IF STATEMENT****
    else {
        serVendor2 = null;
    }
    console.log("Service Vendor 2 = " + serVendor2);
}

//  //ASSIGN URCARD PRODUCT VENDOR 1 DATA 
async function getURCard_productVendor1() {
    //PRODUCT ID 1 - VENDOR 1 ASSIGNMENT
    if (productID1_table.value == 1) {
        // 1 = NUBIAN REPUB. VENDOR
        prdVendor1 = nubianRepublic_p_vendor;
    } 
    //****ADD NEW SERVICE VENDOR HERE - ELSE IF STATEMENT****
    else {
        prdVendor1 = null;
    }
    console.log("Product Vendor 1 = " + prdVendor1);
}

//  //  //URSTART BOOKP VENDOR DATA TABLE ASSETS
//DT SLOT 1 - URSTART BP
var urStart_DT_slot1 = document.getElementById("vendor-urstartBP-DTslot1-id");
//DT SLOT 2 - URSTART BP
var urStart_DT_slot2 = document.getElementById("vendor-urstartBP-DTslot2-id");
//DT SLOT 3 - URSTART BP
var urStart_DT_slot3 = document.getElementById("vendor-urstartBP-DTslot3-id");
//DT SLOT 4 - URSTART BP
var urStart_DT_slot4 = document.getElementById("vendor-urstartBP-DTslot4-id");
//DT SLOT 5 - URSTART BP
var urStart_DT_slot5 = document.getElementById("vendor-urstartBP-DTslot5-id");
//DT SLOT 6 - URSTART BP
var urStart_DT_slot6 = document.getElementById("vendor-urstartBP-DTslot6-id");
//DT SLOT 7 - URSTART BP
var urStart_DT_slot7 = document.getElementById("vendor-urstartBP-DTslot7-id");
//DT SLOT 8 - URSTART BP
var urStart_DT_slot8 = document.getElementById("vendor-urstartBP-DTslot8-id");
//DT SLOT 9 - URSTART BP
var urStart_DT_slot9 = document.getElementById("vendor-urstartBP-DTslot9-id");
//DT SLOT 10 - URSTART BP
var urStart_DT_slot10 = document.getElementById("vendor-urstartBP-DTslot10-id");
//URSTART BP SERVICE ITEM IMG
var urStart_serviceItem_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUggKvzMhwUb83NilWrEi9bROoti6sINZoDA&s"; 
//URSTART BP SERVICE NAME
var urStart_serviceItem_name = "Book Publishing Services"; 
//URSTART BP PROVIDER NAME
var urStart_providerName = "UR Start Book Publishing, Inc.";
//URSTART BP COST DETERMINATION 
var urStart_serviceItem_cost;
var urStart_serviceItem_cost_text; 
function urStart_cost_determination() {
    //COST DETERMINATION LOGIC HERE
    urStart_serviceItem_cost = Number(0);
    urStart_serviceItem_cost_text = "Pending"; 
}

//GET SERVICE CODE 1 DATA - FUNCTION 
function get_serviceCode1_assignment(serviceCode1_singleDig) {
    //IF VENDOR1/VENDOR2 = 1 [URSTART BOOKP VENDOR]
    if (serVendor1 == "urStart_bookP_vendor" || serVendor2 == "urStart_bookP_vendor") {
        // Convert the long string into an array of individual string digits
        const serviceCode1_singleDig = Array.from(String(serviceCODE_1), Number);
        
        // Select all individual target input elements from the DOM
        const inputs = document.querySelectorAll('.digit-input');
        
        // Loop through the inputs and assign each matching digit
        inputs.forEach((input, index) => {
            if (serviceCode1_singleDig[index] !== undefined) {
                // Convert the string character to a true number type and assign it
                input.value = Number(serviceCode1_singleDig[index]); 
                console.log("UR Start BP - Data Table Complete: " + serviceCode1_singleDig);
            } else {
                // Clear the input field if the provided string is shorter than the inputs available
                input.value = ''; 
            }
        });
        //GET DATA FROM DATA TABLE
        //  //GET SLOT 1 DATA - IF VALUE = 1 OR 0
        if (urStart_DT_slot1.value == 1) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 1: " + urStart_DT_slot1.value);
        } else if (urStart_DT_slot1.value == 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 1: " + urStart_DT_slot1.value);
        }
        //  //GET SLOT 2 DATA - IF VALUE = 1 OR 0
        if (urStart_DT_slot2.value == 1) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 2: " + urStart_DT_slot2.value);
        } else if (urStart_DT_slot2.value == 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 2: " + urStart_DT_slot2.value);
        }
        //  //GET SLOT 3 DATA - IF VALUE = 1 OR 0
        if (urStart_DT_slot3.value == 1) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 3: " + urStart_DT_slot3.value);
        } else if (urStart_DT_slot3.value == 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 3: " + urStart_DT_slot3.value);
        }
        //  //GET SLOT 4 DATA - IF VALUE = 1 OR 0
        if (urStart_DT_slot4.value == 1) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 4: " + urStart_DT_slot4.value);
        } else if (urStart_DT_slot4.value == 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 4: " + urStart_DT_slot4.value);
        }
        //  //GET SLOT 5 DATA - IF VALUE = 1 OR 0
        if (urStart_DT_slot5.value == 1) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 5: " + urStart_DT_slot5.value);
        } else if (urStart_DT_slot5.value == 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 5: " + urStart_DT_slot5.value);
        }
        //  //GET SLOT 6 DATA - IF ANY VALUE = VAUE > 0
        if (urStart_DT_slot6.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 6: " + urStart_DT_slot6.value);
        } else if (urStart_DT_slot6.value <= 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 6: " + "0, no value given");
        }
        //  //GET SLOT 7 DATA - IF VALUE = VAUE > 0
        if (urStart_DT_slot7.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 7: " + urStart_DT_slot7.value);
        } else if (urStart_DT_slot7.value <= 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 7: " + urStart_DT_slot7.value);
        }
        //  //GET SLOT 8 DATA - IF VALUE = VAUE > 0
        if (urStart_DT_slot8.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 8: " + urStart_DT_slot8.value);
        } else if (urStart_DT_slot8.value <= 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 8: " + urStart_DT_slot8.value);
        }
        //  //GET SLOT 9 DATA - IF ANY VALUE = VAUE > 0
        if (urStart_DT_slot9.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 9: " + urStart_DT_slot9.value);
        } else if (urStart_DT_slot9.value <= 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 9: " + "0, no value given");
        }
        //  //GET SLOT 10 DATA - IF VALUE = 1 OR 0
        if (urStart_DT_slot10.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 10: " + urStart_DT_slot10.value);
        } else if (urStart_DT_slot10.value <= 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("UR Start BP SELECTION 10: " + urStart_DT_slot10.value);
        }

        else {
            console.log("UR Start BP Table Data Error...");
        }
    }//END - IF VENDOR1/VENDOR2 = 1 [URSTART BOOKP VENDOR]
    
    else {
        console.log("Service Vendor 1 = " + serVendor1);
    }
}//END - GET SERVICE CODE 1 DATA - FUNCTION 


//  //  //CUSTOM SERVICE VENDOR - DATA TABLE ASSETS
//DT SLOT 1 - CUSTOM SERVICE VENDOR
var customServVendor_DTslot1 = document.getElementById("vendor-customServVendor-DTslot1-id");
//DT SLOT 2 - CUSTOM SERVICE VENDOR
var customServVendor_DTslot2 = document.getElementById("vendor-customServVendor-DTslot2-id");
//DT SLOT 3 - CUSTOM SERVICE VENDOR
var customServVendor_DTslot3 = document.getElementById("vendor-customServVendor-DTslot3-id");
//DT SLOT 4 - CUSTOM SERVICE VENDOR
var customServVendor_DTslot4 = document.getElementById("vendor-customServVendor-DTslot4-id");
//CUSTOM SERVICE VENDOR - SERVICE ITEM IMG
var customServ_serviceItem_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUetTlZHZY_1wRSmaYMi1aBbZh55hsUCxLwgdgcFEVg&s=10"; 
//CUSTOM SERVICE VENDOR - SERVICE NAME
var customServ_serviceItem_name = "Custom Service Vendor"; 
//CUSTOM SERVICE VENDOR - PROVIDER NAME
var customServ_providerName = "Custom Service Vendor, co.";
//CUSTOM SERVICE VENDOR - CUSTOM INFO TXT
customServ_vendor_customInfoTxt = "Customizable vendor text here."; 
//CUSTOM SERVICE VENDOR - COST DETERMINATION 
var customServ_serviceItem_cost;
var customServ_serviceItem_cost_text; 
function customServ_cost_determination() {
    //COST DETERMINATION LOGIC HERE
    customServ_serviceItem_cost = Number(20);
    customServ_serviceItem_cost_text = "$20"; 
}

//GET SERVICE CODE 1 DATA - FUNCTION 
function get_serviceCode2_assignment(serviceCode2_singleDig) {
    // IF VENDOR1/VENDOR2 = 1 [CUSTOM SERVICE VENDOR]
    if (serVendor1 == "customServ_vendor" || serVendor2 == "customServ_vendor") {
        // Convert the long string into an array of individual string digits
        const serviceCode2_singleDig = Array.from(String(serviceCODE_2), Number);
        
        // Select all individual target input elements from the DOM
        const inputs2 = document.querySelectorAll('.digit-input2');
        
        // Loop through the inputs and assign each matching digit
        inputs2.forEach((input, index) => {
            if (serviceCode2_singleDig[index] !== undefined) {
                // Convert the string character to a true number type and assign it
                input.value = Number(serviceCode2_singleDig[index]); 
                console.log("CUSTOM SERVICE VENDOR - Data Table Complete: " + serviceCode2_singleDig);
            } else {
                // Clear the input field if the provided string is shorter than the inputs available
                input.value = ''; 
            }
        });
        //GET DATA FROM DATA TABLE
        //  //GET SLOT 1 DATA - IF VALUE = 1 OR 0
        if (customServVendor_DTslot1.value == 1) {
            //DO SOMETHING WITH THIS DATA
            console.log("Custom SV SELECTION 1: " + customServVendor_DTslot1.value);
        } else if (customServVendor_DTslot1.value == 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Custom SV SELECTION 1: " + customServVendor_DTslot1.value);
        }
        //  //GET SLOT 2 DATA - IF VALUE = VAUE > 0
        if (customServVendor_DTslot2.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Custom SV SELECTION 2: " + customServVendor_DTslot2.value);
        } else if (customServVendor_DTslot2.value <= 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Custom SV SELECTION 2: " + customServVendor_DTslot2.value);
        }
        //  //GET SLOT 3 DATA - IF VALUE = VAUE > 0
        if (customServVendor_DTslot3.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Custom SV SELECTION 3: " + customServVendor_DTslot3.value);
        } else if (customServVendor_DTslot3.value <= 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Custom SV SELECTION 3: " + customServVendor_DTslot3.value);
        }
        //  //GET SLOT 4 DATA - IF VALUE = VAUE > 0
        if (customServVendor_DTslot4.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Custom SV SELECTION 4: " + customServVendor_DTslot4.value);
        } else if (customServVendor_DTslot4.value <= 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Custom SV SELECTION 4: " + customServVendor_DTslot4.value);
        }
        else {
            console.log("Custom Service V Table Data Error...");
        }
    }//END - IF VENDOR1/VENDOR2 = 1 [CUSTOM SERVICE VENDOR]
    else {
        console.log("Service Vendor 2 = " + serVendor2);
    }
}//END - GET SERVICE CODE 2 DATA - FUNCTION 


//****ADD NEW SERVICE VENDOR HERE - VARIABLES & GET SERVICE CODE 3****


//GET PRODUCT VENDOR CODE ASSIGNMENTS
//  //  //NUBIAN REPUB. VENDOR TABLE ASSETS
//DATA TABLE SLOT 1 - NUBIAN REPUB
var nubianR_DT_slot1 = document.getElementById("vendor-nubianR-DTslot1-id");
//DT SLOT 2 - NUBIAN REPUB
var nubianR_DT_slot2 = document.getElementById("vendor-nubianR-DTslot2-id");
//DT SLOT 3 - NUBIAN REPUB
var nubianR_DT_slot3 = document.getElementById("vendor-nubianR-DTslot3-id");
//DT SLOT 4 - NUBIAN REPUB
var nubianR_DT_slot4 = document.getElementById("vendor-nubianR-DTslot4-id");
//DT SLOT 5 - NUBIAN REPUB
var nubianR_DT_slot5 = document.getElementById("vendor-nubianR-DTslot5-id");
//DT SLOT 6 - NUBIAN REPUB
var nubianR_DT_slot6 = document.getElementById("vendor-nubianR-DTslot6-id");
//DT SLOT 7 - NUBIAN REPUB
var nubianR_DT_slot7 = document.getElementById("vendor-nubianR-DTslot7-id");
//DT SLOT 8 - NUBIAN REPUB
var nubianR_DT_slot8 = document.getElementById("vendor-nubianR-DTslot8-id");
//DT SLOT 9 - NUBIAN REPUB
var nubianR_DT_slot9 = document.getElementById("vendor-nubianR-DTslot9-id");
//DT SLOT 10 - NUBIAN REPUB
var nubianR_DT_slot10 = document.getElementById("vendor-nubianR-DTslot10-id");
//DT SLOT 11 - NUBIAN REPUB
var nubianR_DT_slot11 = document.getElementById("vendor-nubianR-DTslot11-id");
//DT SLOT 12 - NUBIAN REPUB
var nubianR_DT_slot12 = document.getElementById("vendor-nubianR-DTslot12-id");
//DT SLOT 13 - NUBIAN REPUB
var nubianR_DT_slot13 = document.getElementById("vendor-nubianR-DTslot13-id");
//DT SLOT 14 - NUBIAN REPUB
var nubianR_DT_slot14 = document.getElementById("vendor-nubianR-DTslot14-id");
//DT SLOT 15 - NUBIAN REPUB
var nubianR_DT_slot15 = document.getElementById("vendor-nubianR-DTslot15-id");
//NUBIAN REPUB - PRODUCT ITEM IMG - 5 TOTAL PRODUCTS
//  //IMG 1
var nubianR_productItem1_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJ1AE100kl_sIQapaKnO7GFnpPitDFSlBWvca_VgA8w&s=10";
//  //IMG 2
var nubianR_productItem2_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJ1AE100kl_sIQapaKnO7GFnpPitDFSlBWvca_VgA8w&s=10";
//  //IMG 3
var nubianR_productItem3_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJ1AE100kl_sIQapaKnO7GFnpPitDFSlBWvca_VgA8w&s=10";
//  //IMG 4
var nubianR_productItem4_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJ1AE100kl_sIQapaKnO7GFnpPitDFSlBWvca_VgA8w&s=10";
//  //IMG 5
var nubianR_productItem5_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJ1AE100kl_sIQapaKnO7GFnpPitDFSlBWvca_VgA8w&s=10"; 
//CUSTOM PRODUCT VENDOR - SERVICE NAME
var nubianR_productItem1_name = "Custom Product Vendor - Product 1"; 
var nubianR_productItem2_name = "Custom Product Vendor - Product 2";
var nubianR_productItem3_name = "Custom Product Vendor - Product 3";
var nubianR_productItem4_name = "Custom Product Vendor - Product 4";
var nubianR_productItem5_name = "Custom Product Vendor - Product 5";
//CUSTOM PRODUCT VENDOR - PROVIDER NAME
var nubianR_providerName = "Custom Product Vendor, co.";
//CUSTOM PRODUCT VENDOR - QUANTITY
// var nubianR_productItem1_quantity; 
// var nubianR_productItem2_quantity = nubianR_DT_slot6.value; 
// var nubianR_productItem3_quantity = nubianR_DT_slot9.value; 
// var nubianR_productItem4_quantity = nubianR_DT_slot12.value; 
// var nubianR_productItem5_quantity = nubianR_DT_slot15.value; 
//CUSTOM PRODUCT VENDOR - COST DETERMINATION 
var nubianR_productItem1_cost = Number(0);
var nubianR_productItem1_cost_text; 
var nubianR_productItem2_cost = Number(0);
var nubianR_productItem2_cost_text; 
var nubianR_productItem3_cost = Number(0);
var nubianR_productItem3_cost_text; 
var nubianR_productItem4_cost = Number(0);
var nubianR_productItem4_cost_text; 
var nubianR_productItem5_cost = Number(0);
var nubianR_productItem5_cost_text; 
// var nubianR_allProducts_cost; 
function nubianR_cost_determination() {
    //VENDOR PRODUCT 1
    //  //COST x QUANTITY
    nubianR_productItem1_cost = Number(10) * nubianR_DT_slot3.value; 
    nubianR_productItem1_cost_text = "10"; 
    //VENDOR PRODUCT 2 
    //  //COST x QUANTITY
    nubianR_productItem2_cost = Number(15.25) * nubianR_DT_slot6.value;
    nubianR_productItem2_cost_text = "15.25"
    //VENDOR PRODUCT 3 
    //  //COST x QUANTITY
    nubianR_productItem3_cost = Number(11) * nubianR_DT_slot9.value;
    nubianR_productItem3_cost_text = "11"; 
    //VENDOR PRODUCT 4 
    //  //COST x QUANTITY
    nubianR_productItem4_cost = Number(30.95) * nubianR_DT_slot12.value;
    nubianR_productItem4_cost_text = "30.95"; 
    //VENDOR PRODUCT 5 
    //  //COST x QUANTITY
    nubianR_productItem5_cost = Number(10.50) * nubianR_DT_slot15.value;
    nubianR_productItem5_cost_text = "10.50";
}


//GET PRODUCT CODE 1 DATA - FUNCTION 
function get_productCode1_assignment(productCode1_singleDig) {
    //IF PRODUCT VENDOR1 = 1 [NUBIAN R. VENDOR]
    if (prdVendor1 == "nubianRepublic_p_vendor" ) {
        // Convert the long string into an array of individual string digits
        const productCode1_singleDig = Array.from(String(productCODE_1), Number);
        
        // Select all individual target input elements from the DOM
        const inputs3 = document.querySelectorAll('.digit-input3');
        
        // Loop through the inputs and assign each matching digit
        inputs3.forEach((input, index) => {
            if (productCode1_singleDig[index] !== undefined) {
                // Convert the string character to a true number type and assign it
                input.value = Number(productCode1_singleDig[index]); 
                console.log("Nubian - Data Table Complete: " + productCode1_singleDig); 
            } else { 
                // Clear the input field if the provided string is shorter than the inputs available
                input.value = ''; 
            }
        });
        //GET DATA FROM DATA TABLE
        //  //GET SLOT 1 DATA - IF VALUE = 1 OR 0
        if (nubianR_DT_slot1.value == 1) {
            //DO SOMETHING WITH THIS DATA - PRODUCT NOT SELECTED VALUE
            console.log("Nubian Republic SELECTION 1: " + nubianR_DT_slot1.value);
        } else if (nubianR_DT_slot1.value == 0) {
            //DO SOMETHING WITH THIS DATA - PRODUCT NOT SELECTED VALUE
            console.log("Nubian Republic SELECTION 1: " + nubianR_DT_slot1.value);
        }
        //  //GET SLOT 2 DATA - IF VALUE = VAUE > 0 - PRODUCT DETAILS VALUE
        if (nubianR_DT_slot2.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 2: " + nubianR_DT_slot2.value);
        } else if (nubianR_DT_slot2.value == 0) {
            //DO SOMETHING WITH THIS DATA - PRODUCT DETAILS NOT SELECTED
            console.log("Nubian Republic SELECTION 2: " + nubianR_DT_slot2.value);
        }
        //  //GET SLOT 3 DATA - IF VALUE = VAUE > 0 - QUANTITY VALUE
        if (nubianR_DT_slot3.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 3: " + nubianR_DT_slot3.value);
        } else if (nubianR_DT_slot3.value == 0) {
            //DO SOMETHING WITH THIS DATA - QUANTITY NOT SELECTED
            console.log("Nubian Republic SELECTION 3: " + nubianR_DT_slot3.value);
        }

        //  //GET SLOT 4 DATA - IF VALUE = 1 OR 0 - PRODUCT SELECTED VALUE
        if (nubianR_DT_slot4.value == 1) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 4: " + nubianR_DT_slot4.value);
        } else if (nubianR_DT_slot4.value == 0) {
            //DO SOMETHING WITH THIS DATA - PRODUCT NOT SELECTED VALUE
            console.log("Nubian Republic SELECTION 4: " + nubianR_DT_slot4.value);
        }
        //  //GET SLOT 5 DATA - IF VALUE = VAUE > 0 - PRODUCT DETAILS VALUE
        if (nubianR_DT_slot5.value > 0) {
            //DO SOMETHING WITH THIS DATA 
            console.log("Nubian Republic SELECTION 5: " + nubianR_DT_slot5.value);
        } else if (nubianR_DT_slot5.value == 0) {
            //DO SOMETHING WITH THIS DATA - PRODUCT DETAILS NOT SELECTED
            console.log("Nubian Republic SELECTION 5: " + nubianR_DT_slot5.value);
        }
        //  //GET SLOT 6 DATA - IF ANY VALUE = VAUE > 0 - QUANTITY VALUE
        if (nubianR_DT_slot6.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 6: " + nubianR_DT_slot6.value);
        } else if (nubianR_DT_slot6.value == 0) {
            //DO SOMETHING WITH THIS DATA - QUANTITY NOT SELECTED
            console.log("Nubian Republic SELECTION 6: " + nubianR_DT_slot6.value);
        }

        //  //GET SLOT 7 DATA - IF VALUE = 1 OR 0 - PRODUCT SELECTED VALUE
        if (nubianR_DT_slot7.value == 1) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 7: " + nubianR_DT_slot7.value);
        } else if (nubianR_DT_slot7.value <= 0) {
            //DO SOMETHING WITH THIS DATA - PRODUCT NOT SELECTED VALUE
            console.log("Nubian Republic SELECTION 7: " + nubianR_DT_slot7.value);
        }
        //  //GET SLOT 8 DATA - IF VALUE = VAUE > 0 - PRODUCT DETAILS VALUE
        if (nubianR_DT_slot8.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 8: " + nubianR_DT_slot8.value);
        } else if (nubianR_DT_slot8.value == 0) {
            //DO SOMETHING WITH THIS DATA - PRODUCT DETAILS NOT SELECTED
            console.log("Nubian Republic SELECTION 8: " + nubianR_DT_slot8.value);
        }
        //  //GET SLOT 9 DATA - IF ANY VALUE = VAUE > 0 - QUANTITY VALUE
        if (nubianR_DT_slot9.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 9: " + nubianR_DT_slot9.value);
        } else if (nubianR_DT_slot9.value <= 0) {
            //DO SOMETHING WITH THIS DATA - QUANTITY NOT SELECTED
            console.log("Nubian Republic SELECTION 9: " + "0, no value given");
        }

        //  //GET SLOT 10 DATA - IF VALUE = 1 OR 0 - PRODUCT SELECTED VALUE
        if (nubianR_DT_slot10.value == 1) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 10: " + nubianR_DT_slot10.value);
        } else if (nubianR_DT_slot10.value == 0) {
            //DO SOMETHING WITH THIS DATA - PRODUCT NOT SELECTED
            console.log("Nubian Republic SELECTION 10: " + nubianR_DT_slot10.value);
        }
        //  //GET SLOT 11 DATA - IF VALUE = VAUE > 0 - PRODUCT DETAILS VALUE
        if (nubianR_DT_slot11.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 11: " + nubianR_DT_slot11.value);
        } else if (nubianR_DT_slot11.value == 0) {
            //DO SOMETHING WITH THIS DATA - PRODUCT DETAILS NOT SELECTED
            console.log("Nubian Republic SELECTION 11: " + nubianR_DT_slot11.value);
        }
        //  //GET SLOT 12 DATA - IF VALUE = VAUE > 0 - QUANTITY VALUE
        if (nubianR_DT_slot12.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 12: " + nubianR_DT_slot12.value);
        } else if (nubianR_DT_slot12.value == 0) {
            //DO SOMETHING WITH THIS DATA - QUANTITY NOT SELECTED
            console.log("Nubian Republic SELECTION 12: " + nubianR_DT_slot12.value);
        }

        //  //GET SLOT 13 DATA - IF VALUE = 1 OR 0 - PRODUCT SELECTED VALUE
        if (nubianR_DT_slot13.value == 1) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 13: " + nubianR_DT_slot13.value);
        } else if (nubianR_DT_slot13.value == 0) {
            //DO SOMETHING WITH THIS DATA - PRODUCT NOT SELECTED
            console.log("Nubian Republic SELECTION 13: " + nubianR_DT_slot13.value);
        }
        //  //GET SLOT 14 DATA - IF VALUE = VAUE > 0 - PRODUCT DETAILS VALUE
        if (nubianR_DT_slot14.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 14: " + nubianR_DT_slot14.value);
        } else if (nubianR_DT_slot14.value == 0) {
            //DO SOMETHING WITH THIS DATA - PRODUCT DETAILS NOT SELECTED
            console.log("Nubian Republic SELECTION 14: " + nubianR_DT_slot14.value);
        }
        //  //GET SLOT 15 DATA - IF VALUE = VAUE > 0 - QUANTITY VALUE
        if (nubianR_DT_slot15.value > 0) {
            //DO SOMETHING WITH THIS DATA
            console.log("Nubian Republic SELECTION 15: " + nubianR_DT_slot15.value);
        } else if (nubianR_DT_slot15.value == 0) {
            //DO SOMETHING WITH THIS DATA - QUANTITY NOT SELECTED
            console.log("Nubian Republic SELECTION 15: " + nubianR_DT_slot15.value);
        }
        else {
            console.log("Nubian Republic Table Data Error...");
        }
    }
}//

//****ADD NEW PRODUCT VENDOR HERE - VARIABLES & GET PRODUCT CODE 2****



//URCARD USER SELECTION ASSETS
//  //ALL SELECTIONS CONTAINER
const allURCARD_selections_container = document.getElementById("urcard-ALLselectedItems-container-id");
//  //MAIN HEADER TXT
var mainHeader_txt = document.getElementById("header-txt-1-id");
//  //ALL SELECTED SERVICES CONTAINER
const all_selectedService_container = document.getElementById("all-selectedServices-container-id");
//  //NO ITEMS SELECTED CONTAINER
const noItems_selected_container = document.getElementById("noItems-selected-container-id");


//  //SERVICE ITEM SLOTS
//  //  //SLOT 1 - SERVICE
const serviceItem_slot1 = document.getElementById("service-item1-id");
//  //  //  //SELECTED SERVICE ITEM IMG 1
const serviceItem1_img = document.getElementById("selectedService-item1-img-id"); 
//  //  //  //SERVICE ITEM 1 NAME
const selectedService_item1_name_txt = document.getElementById("selectedService-item1-name-txt-id");
//  //  //  //SERVICE ITEM 1 PROVIDER NAME
const providerName_serviceItem1_txt = document.getElementById("providerName-serviceItem1-txt-id");
//  //  //  //SERVICE ITEM 1 COST
var selectedService_item1_slot1_cost = document.getElementById("selectedService-item1-cost-txt-id");
//  //  //  //SERVICE ITEM 1 COST NUMBER
var selectedService_item1_slot1_cost_number = Number(0);
//  //  //  //SERVICE ITEM 1 - ADDITIONAL INFO TXT
const selectedService_item1_additionalInfoAlert_txt = document.getElementById("selectedService-item1-info-txt-id"); 
//  //  //  //SERVICE ITEM 1 - CUSTOM ADDITIONAL INFO TXT
const selectedService_item1_customInfoAlert_txt = document.getElementById("selectedService-item1-customInfo-txt-id");
//  //  //  //SERVICE ITEM 1 - ADDITIONAL INFO CONAINER
const additionalContent_servItem1_container_id = document.getElementById("additionalContent-servItem1-container-id"); 

//CLEAR SERVICE ITEM 1 SLOT 
async function clear_serviceItem1_slot() {
    //CLEAR ITEM IMG
    serviceItem1_img.src = ""; 
    //CLEAR ITEM NAME
    selectedService_item1_name_txt.innerHTML = "";
    //CLEAR PROVIDER NAME
    providerName_serviceItem1_txt.innerHTML = "";
    //CLEAR ITEM COST 
    selectedService_item1_slot1_cost.innerHTML = ""; 
    selectedService_item1_slot1_cost_number = Number(0); 
    //CLEAR ADDITIONAL INFO TEXT
    selectedService_item1_additionalInfoAlert_txt.style.display = "none";
    selectedService_item1_customInfoAlert_txt.style.display = "none"; 
    selectedService_item1_customInfoAlert_txt.innerHTML = "";
}

//  //  //SLOT 2 - SERVICE
const serviceItem_slot2 = document.getElementById("service-item2-id");
//  //  //  //SELECTED SERVICE ITEM IMG 2
const serviceItem2_img = document.getElementById("selectedService-item2-img-id"); 
//  //  //  //SERVICE ITEM 2 NAME
const selectedService_item2_name_txt = document.getElementById("selectedService-item2-name-txt-id");
//  //  //  //SERVICE ITEM 2 PROVIDER NAME
var providerName_serviceItem2_txt = document.getElementById("providerName-serviceItem2-txt-id");
//  //  //  //SERVICE ITEM 2 COST
var selectedService_item2_slot2_cost = document.getElementById("selectedService-item2-cost-txt-id");
//  //  //  //SERVICE ITEM 2 COST TEXT
var selectedService_item2_slot2_cost_number = Number(0); 
//  //  //  //SERVICE ITEM 2 - ADDITIONAL INFO TXT
const selectedService_item2_additionalInfoAlert_txt = document.getElementById("selectedService-item2-info-txt-id");
//  //  //  //SERVICE ITEM 2 - CUSTOM ADDITIONAL INFO TXT
const selectedService_item2_customInfoAlert_txt = document.getElementById("selectedService-item2-customInfo-txt-id");
//  //  //  //SERVICE ITEM 2 - ADDITIONAL INFO CONAINER
const additionalContent_servItem2_container_id = document.getElementById("additionalContent-servItem2-container-id");

//CLEAR SERVICE ITEM 2 SLOT 
async function clear_serviceItem2_slot() {
    //CLEAR ITEM IMG
    serviceItem2_img.src = ""; 
    //CLEAR ITEM NAME
    selectedService_item2_name_txt.innerHTML = "";
    //CLEAR PROVIDER NAME
    providerName_serviceItem2_txt.innerHTML = "";
    //CLEAR ITEM COST 
    selectedService_item2_slot2_cost.innerHTML = "0.00"; 
    selectedService_item2_slot2_cost_number = Number(0); 
    //CLEAR ADDITIONAL INFO TEXT
    selectedService_item2_additionalInfoAlert_txt.style.display = "none";
    selectedService_item2_customInfoAlert_txt.style.display = "none"; 
    selectedService_item2_customInfoAlert_txt.innerHTML = ""; 
}

//  //  //SLOT 3 - SERVICE
const serviceItem_slot3 = document.getElementById("service-item3-id");
//  //  //  //SELECTED SERVICE ITEM IMG 3
const serviceItem3_img = document.getElementById("selectedService-item3-img-id"); 
//  //  //  //SERVICE ITEM 3 NAME
const selectedService_item3_name_txt = document.getElementById("selectedService-item3-name-txt-id");
//  //  //  //SERVICE ITEM 3 PROVIDER NAME
var providerName_serviceItem3_txt = document.getElementById("providerName-serviceItem3-txt-id");
//  //  //  //SERVICE ITEM 3 COST
var selectedService_item3_slot3_cost = document.getElementById("selectedService-item3-cost-txt-id");
//  //  //  //SERVICE ITEM 3 COST TEXT
var selectedService_item3_slot3_cost_number = Number(0);
//  //  //  //SERVICE ITEM 3 - ADDITIONAL INFO TXT
const selectedService_item3_additionalInfoAlert_txt = document.getElementById("selectedService-item3-info-txt-id");
//  //  //  //SERVICE ITEM 3 - CUSTOM ADDITIONAL INFO TXT
const selectedService_item3_customInfoAlert_txt = document.getElementById("selectedService-item3-customInfo-txt-id");

//CLEAR SERVICE ITEM 3 SLOT 
async function clear_serviceItem3_slot() {
    //CLEAR ITEM IMG
    serviceItem3_img.src = ""; 
    //CLEAR ITEM NAME
    selectedService_item3_name_txt.innerHTML = "";
    //CLEAR PROVIDER NAME
    providerName_serviceItem3_txt.innerHTML = "";
    //CLEAR ITEM COST 
    selectedService_item3_slot3_cost.innerHTML = "0.00"; 
    selectedService_item3_slot3_cost_number = Number(0); 
    //CLEAR ADDITIONAL INFO TEXT
    selectedService_item3_additionalInfoAlert_txt.style.display = "none";
    selectedService_item3_customInfoAlert_txt.style.display = "none";
    selectedService_item3_customInfoAlert_txt.innerHTML = ""; 
}

//  //  //SLOT 4 - SERVICE
const serviceItem_slot4 = document.getElementById("service-item4-id");
//  //  //  //SELECTED SERVICE ITEM IMG 4
const serviceItem4_img = document.getElementById("selectedService-item4-img-id"); 
//  //  //  //SERVICE ITEM 4 NAME
const selectedService_item4_name_txt = document.getElementById("selectedService-item4-name-txt-id");
//  //  //  //SERVICE ITEM 4 PROVIDER NAME
var providerName_serviceItem4_txt = document.getElementById("providerName-serviceItem4-txt-id");
//  //  //  //SERVICE ITEM 4 COST
var selectedService_item4_slot4_cost = document.getElementById("selectedService-item4-cost-txt-id");
//  //  //  //SERVICE ITEM 4 COST TEXT
var selectedService_item4_slot4_cost_number = Number(0);
//  //  //  //SERVICE ITEM 4 - ADDITIONAL INFO TXT
const selectedService_item4_additionalInfoAlert_txt = document.getElementById("selectedService-item4-info-txt-id");
//  //  //  //SERVICE ITEM 4 - CUSTOM ADDITIONAL INFO TXT
const selectedService_item4_customInfoAlert_txt = document.getElementById("selectedService-item4-customInfo-txt-id");

//CLEAR SERVICE ITEM 4 SLOT 
async function clear_serviceItem4_slot() {
    //CLEAR ITEM IMG
    serviceItem4_img.src = ""; 
    //CLEAR ITEM NAME
    selectedService_item4_name_txt.innerHTML = "";
    //CLEAR PROVIDER NAME
    providerName_serviceItem4_txt.innerHTML = "";
    //CLEAR ITEM COST 
    selectedService_item4_slot4_cost.innerHTML = "0.00"; 
    selectedService_item4_slot4_cost_number = Number(0); 
    //CLEAR ADDITIONAL INFO TEXT
    selectedService_item4_additionalInfoAlert_txt.style.display = "none";
    selectedService_item4_customInfoAlert_txt.display = "none"; 
    selectedService_item4_customInfoAlert_txt.innerHTML = ""; 
}

//  //  //SLOT 5 - SERVICE
const serviceItem_slot5 = document.getElementById("service-item5-id");
//  //  //  //SELECTED SERVICE ITEM IMG 5
const serviceItem5_img = document.getElementById("selectedService-item5-img-id"); 
//  //  //  //SERVICE ITEM 5 NAME
const selectedService_item5_name_txt = document.getElementById("selectedService-item5-name-txt-id");
//  //  //  //SERVICE ITEM 5 PROVIDER NAME
var providerName_serviceItem5_txt = document.getElementById("providerName-serviceItem5-txt-id");
//  //  //  //SERVICE ITEM 5 COST
var selectedService_item5_slot5_cost = document.getElementById("selectedService-item5-cost-txt-id");
//  //  //  //SERVICE ITEM 5 COST TEXT
var selectedService_item5_slot5_cost_number = Number(0);
//  //  //  //SERVICE ITEM 5 - ADDITIONAL INFO TXT
const selectedService_item5_additionalInfoAlert_txt = document.getElementById("selectedService-item5-info-txt-id");
//  //  //  //SERVICE ITEM 5 - CUSTOM ADDITIONAL INFO TXT
const selectedService_item5_customInfoAlert_txt = document.getElementById("selectedService-item5-customInfo-txt-id");

//CLEAR SERVICE ITEM 5 SLOT 
async function clear_serviceItem5_slot() {
    //CLEAR ITEM IMG
    serviceItem5_img.src = ""; 
    //CLEAR ITEM NAME
    selectedService_item5_name_txt.innerHTML = "";
    //CLEAR PROVIDER NAME
    providerName_serviceItem5_txt.innerHTML = "";
    //CLEAR ITEM COST 
    selectedService_item5_slot5_cost.innerHTML = "0.00"; 
    selectedService_item5_slot5_cost_number = Number(0); 
    //CLEAR ADDITIONAL INFO TEXT
    selectedService_item5_additionalInfoAlert_txt.style.display = "none";
    selectedService_item5_customInfoAlert_txt.style.display = "none"; 
    selectedService_item5_customInfoAlert_txt.innerHTML = ""; 
}

//  //ALL SELECTED PRODUCTS CONTAINER
const all_selectedProduct_container = document.getElementById("all-selectedProducts-container-id");
//  //PRODUCT ITEMS SLOTS

//  //  //SLOT 1 - PRODUCT
const productItem_slot1 = document.getElementById("product-item1-id");
//  //  //  //SELECTED PRODUCT ITEM IMG 1
const productItem1_img = document.getElementById("selectedProduct-item1-img-id"); 
//  //  //  //PRODUCT ITEM 1 NAME
const selectedProduct_item1_name_txt = document.getElementById("selectedProduct-item1-providerName-txt-id");
//  //  //  //PRODUCT ITEM 1 PROVIDER NAME
var providerName_productItem1_txt = document.getElementById("providerName-productItem1-txt-id");
//  //  //  //PRODUCT ITEM 1 COST
var selectedProduct_item1_slot1_cost = document.getElementById("selectedProduct-item1-cost-txt-id");
//  //  //  //PRODUCT ITEM 1 COST TEXT
var selectedProduct_item1_slot1_cost_number = Number(0); 
//  //  //  //PRODUCT ITEM 1 - QUANTITY
const selectedProduct_item1_quantity_txt = document.getElementById("selectedProduct-item1-qty-txt-id");

//CLEAR PRODUCT ITEM 1 SLOT 
async function clear_productItem1_slot() {
    //CLEAR ITEM IMG
    productItem1_img.src = ""; 
    //CLEAR ITEM NAME
    selectedProduct_item1_name_txt.innerHTML = "";
    //CLEAR PROVIDER NAME
    providerName_productItem1_txt.innerHTML = "";
    //CLEAR ITEM COST 
    selectedProduct_item1_slot1_cost.innerHTML = "0.00"; 
    selectedProduct_item1_slot1_cost_number = Number(0); 
    //CLEAR ADDITIONAL INFO TEXT
    selectedProduct_item1_quantity_txt.style.display = "none";
}

//  //  //SLOT 2 - PRODUCT
const productItem_slot2 = document.getElementById("product-item2-id");
//  //  //  //SELECTED PRODUCT ITEM IMG 2
const productItem2_img = document.getElementById("selectedProduct-item2-img-id"); 
//  //  //  //PRODUCT ITEM 2 NAME
const selectedProduct_item2_name_txt = document.getElementById("selectedProduct-item2-providerName-txt-id");
//  //  //  //PRODUCT ITEM 2 PROVIDER NAME
var providerName_productItem2_txt = document.getElementById("providerName-productItem2-txt-id");
//  //  //  //PRODUCT ITEM 2 COST
var selectedProduct_item2_slot2_cost = document.getElementById("selectedProduct-item2-cost-txt-id");
//  //  //  //PRODUCT ITEM 2 COST TEXT
var selectedProduct_item2_slot2_cost_number = Number(0); 
//  //  //  //PRODUCT ITEM 2 - QUANTITY
const selectedProduct_item2_quantity_txt = document.getElementById("selectedProduct-item2-qty-txt-id");

//CLEAR PRODUCT ITEM 2 SLOT 
async function clear_productItem2_slot() {
    //CLEAR ITEM IMG
    productItem2_img.src = ""; 
    //CLEAR ITEM NAME
    selectedProduct_item2_name_txt.innerHTML = "";
    //CLEAR PROVIDER NAME
    providerName_productItem2_txt.innerHTML = "";
    //CLEAR ITEM COST 
    selectedProduct_item2_slot2_cost.innerHTML = "0.00"; 
    selectedProduct_item2_slot2_cost_number = Number(0); 
    //CLEAR ADDITIONAL INFO TEXT
    selectedProduct_item2_quantity_txt.style.display = "none";
}

//  //  //SLOT 3 - PRODUCT
const productItem_slot3 = document.getElementById("product-item3-id");
//  //  //  //SELECTED PRODUCT ITEM IMG 3
const productItem3_img = document.getElementById("selectedProduct-item3-img-id"); 
//  //  //  //PRODUCT ITEM 3 NAME
const selectedProduct_item3_name_txt = document.getElementById("selectedProduct-item3-providerName-txt-id");
//  //  //  //PRODUCT ITEM 2 PROVIDER NAME
var providerName_productItem3_txt = document.getElementById("providerName-productItem3-txt-id");
//  //  //  //PRODUCT ITEM 2 COST
var selectedProduct_item3_slot3_cost = document.getElementById("selectedProduct-item3-cost-txt-id");
//  //  //  //PRODUCT ITEM 3 COST TEXT
var selectedProduct_item3_slot3_cost_number = Number(0); 
//  //  //  //PRODUCT ITEM 3 - QUANTITY
const selectedProduct_item3_quantity_txt = document.getElementById("selectedProduct-item3-qty-txt-id");

//CLEAR PRODUCT ITEM 3 SLOT 
async function clear_productItem3_slot() {
    //CLEAR ITEM IMG
    productItem3_img.src = ""; 
    //CLEAR ITEM NAME
    selectedProduct_item3_name_txt.innerHTML = "";
    //CLEAR PROVIDER NAME
    providerName_productItem3_txt.innerHTML = "";
    //CLEAR ITEM COST 
    selectedProduct_item3_slot3_cost.innerHTML = "0.00"; 
    selectedProduct_item3_slot3_cost_number = Number(0); 
    //CLEAR ADDITIONAL INFO TEXT
    selectedProduct_item3_quantity_txt.style.display = "none";
}

//  //  //SLOT 4 - PRODUCT
const productItem_slot4 = document.getElementById("product-item4-id");
//  //  //  //SELECTED PRODUCT ITEM IMG 4
const productItem4_img = document.getElementById("selectedProduct-item4-img-id"); 
//  //  //  //PRODUCT ITEM 4 NAME
const selectedProduct_item4_name_txt = document.getElementById("selectedProduct-item4-providerName-txt-id");
//  //  //  //PRODUCT ITEM 4 PROVIDER NAME
var providerName_productItem4_txt = document.getElementById("providerName-productItem4-txt-id");
//  //  //  //PRODUCT ITEM 4 COST
var selectedProduct_item4_slot4_cost = document.getElementById("selectedProduct-item4-cost-txt-id");
//  //  //  //PRODUCT ITEM 4 COST TEXT
var selectedProduct_item4_slot4_cost_number = Number(0); 
//  //  //  //PRODUCT ITEM 4 - QUANTITY
const selectedProduct_item4_quantity_txt = document.getElementById("selectedProduct-item4-qty-txt-id");

//CLEAR PRODUCT ITEM 4 SLOT 
async function clear_productItem4_slot() {
    //CLEAR ITEM IMG
    productItem4_img.src = ""; 
    //CLEAR ITEM NAME
    selectedProduct_item4_name_txt.innerHTML = "";
    //CLEAR PROVIDER NAME
    providerName_productItem4_txt.innerHTML = "";
    //CLEAR ITEM COST 
    selectedProduct_item4_slot4_cost.innerHTML = "0.00"; 
    selectedProduct_item4_slot4_cost_text = Number(0); 
    //CLEAR ADDITIONAL INFO TEXT
    selectedProduct_item4_quantity_txt.innerHTML = "";
}

//  //  //SLOT 5 - PRODUCT
const productItem_slot5 = document.getElementById("product-item5-id");
//  //  //  //SELECTED PRODUCT ITEM IMG 5
const productItem5_img = document.getElementById("selectedProduct-item5-img-id"); 
//  //  //  //PRODUCT ITEM 5 NAME
const selectedProduct_item5_name_txt = document.getElementById("selectedProduct-item5-providerName-txt-id");
//  //  //  //PRODUCT ITEM 5 PROVIDER NAME
var providerName_productItem5_txt = document.getElementById("providerName-productItem5-txt-id");
//  //  //  //PRODUCT ITEM 5 COST
var selectedProduct_item5_slot5_cost = document.getElementById("selectedProduct-item5-cost-txt-id");
//  //  //  //PRODUCT ITEM 5 COST TEXT
var selectedProduct_item5_slot5_cost_number = Number(0); 
//  //  //  //PRODUCT ITEM 5 - QUANTITY
const selectedProduct_item5_quantity_txt = document.getElementById("selectedProduct-item5-qty-txt-id");

//CLEAR PRODUCT ITEM 5 SLOT 
async function clear_productItem5_slot() {
    //CLEAR ITEM IMG
    productItem5_img.src = ""; 
    //CLEAR ITEM NAME
    selectedProduct_item5_name_txt.innerHTML = "";
    //CLEAR PROVIDER NAME
    providerName_productItem5_txt.innerHTML = "";
    //CLEAR ITEM COST 
    selectedProduct_item5_slot5_cost.innerHTML = "0.00"; 
    selectedProduct_item5_slot5_cost_number = Number(0); 
    //CLEAR ADDITIONAL INFO TEXT
    selectedProduct_item5_quantity_txt.innerHTML = "";
}

//CLEAR ALL SERVICE & PRODUCT ITEM SLOTS
async function clear_allService_ProductItemSlots() {
    //CLEAR ALL SERVICE/PRODUCT SLOTS
    clear_serviceItem1_slot(); 
    clear_serviceItem2_slot();
    clear_serviceItem3_slot(); 
    clear_serviceItem4_slot(); 
    clear_serviceItem5_slot(); 
    clear_productItem1_slot(); 
    clear_productItem2_slot(); 
    clear_productItem3_slot(); 
    clear_productItem4_slot(); 
    clear_productItem5_slot(); 
}



//  //INNER OVERLAY CONTAINER 2
const inner_overlayContainer_2 = document.getElementById("inner-overlayContainer-2-id"); 
//  //SELECTED SERVICE ITEM DETAILS CONTAINER 
const selectedService_item_details_container = document.getElementById("selectedService-item-details-container-id"); 
//  //SELECTED SERVICE ITEM EDIT CONTAINER 
const selectedService_item_edit_container = document.getElementById("selectedService-item-edit-container-id"); 
//  //SELECTED SERVICE ITEM DELETE CONTAINER 
const selectedItem_delete_container = document.getElementById("selectedItem-delete-container-id"); 
//  //'NO' BTN - DELETE ITEM
const selectedItem_deleteNo_btn = document.getElementById("selectedService-final-noBtn-id");
//  //FINAL DELETE BTN 
const selectedItem_finalDelete_btn = document.getElementById("selectedService-final-deleteBtn-id");
//  //ITEM DELETION - ITEM NAME
const selectedItem_itemName_deleteTxt = document.getElementById("selectedItem-name-deleteTxt-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//  //SELECTED PRODUCT ITEM DETAILS CONTAINER
const selectedProduct_item_details_container = document.getElementById("selectedProduct-item-details-container-id"); 
//  //SELECTED PRODUCT ITEM EDIT CONTAINER
const selectedProduct_item_edit_container = document.getElementById("selectedProduct-item-edit-container-id"); 

//  //OPEN SERVICE ITEM - DETAILS BTN
//  //  //SERVICE SLOT 1 - DETAILS BTN
const selectedService_slot1_detailsBtn = document.getElementById("selectedService-slot1-detailsBtn-id");
//  //  //SERVICE SLOT 2 - DETAILS BTN
const selectedService_slot2_detailsBtn = document.getElementById("selectedService-slot2-detailsBtn-id");
//  //  //SERVICE SLOT 3 - DETAILS BTN
const selectedService_slot3_detailsBtn = document.getElementById("selectedService-slot3-detailsBtn-id");
//  //  //SERVICE SLOT 4 - DETAILS BTN
const selectedService_slot4_detailsBtn = document.getElementById("selectedService-slot4-detailsBtn-id");
//  //  //SERVICE SLOT 5 - DETAILS BTN
const selectedService_slot5_detailsBtn = document.getElementById("selectedService-slot5-detailsBtn-id");
//  //  //  //  //  //  //  //  //  //
//  //  //PRODUCT SLOT 1 - DETAILS BTN
const selectedProduct_slot1_detailsBtn = document.getElementById("selectedProduct-slot1-detailsBtn-id");
//  //  //PRODUCT SLOT 2 - DETAILS BTN
const selectedProduct_slot2_detailsBtn = document.getElementById("selectedProduct-slot2-detailsBtn-id");
//  //  //PRODUCT SLOT 3 - DETAILS 
const selectedProduct_slot3_detailsBtn = document.getElementById("selectedProduct-slot3-detailsBtn-id");
//  //  //PRODUCT SLOT 4 - DETAILS BTN
const selectedProduct_slot4_detailsBtn = document.getElementById("selectedProduct-slot4-detailsBtn-id");
//  //  //PRODUCT SLOT 5 - DETAILS BTN
const selectedProduct_slot5_detailsBtn = document.getElementById("selectedProduct-slot5-detailsBtn-id");

//  //OPEN SERVICE ITEM - EDIT BTN
//  //  //SERVICE SLOT 1 - EDIT BTN
const selectedService_slot1_editBtn = document.getElementById("selectedService-slot1-editBtn-id");
//  //  //SERVICE SLOT 2 - EDIT BTN
const selectedService_slot2_editBtn = document.getElementById("selectedService-slot2-editBtn-id");
//  //  //SERVICE SLOT 3 - EDIT BTN
const selectedService_slot3_editBtn = document.getElementById("selectedService-slot3-editBtn-id");
//  //  //SERVICE SLOT 4 - EDIT BTN
const selectedService_slot4_editBtn = document.getElementById("selectedService-slot4-editBtn-id");
//  //  //SERVICE SLOT 5 - EDIT BTN
const selectedService_slot5_editBtn = document.getElementById("selectedService-slot5-editBtn-id");
//  //  //  //  //  //  //  //  //  //
//  //  //PRODUCT SLOT 1 - EDIT BTN
const selectedProduct_slot1_editBtn = document.getElementById("selectedProduct-slot1-editBtn-id");
//  //  //PRODUCT SLOT 2 - EDIT BTN
const selectedProduct_slot2_editBtn = document.getElementById("selectedProduct-slot2-editBtn-id");
//  //  //PRODUCT SLOT 3 - EDIT BTN
const selectedProduct_slot3_editBtn = document.getElementById("selectedProduct-slot3-editBtn-id");
//  //  //PRODUCT SLOT 4 - EDIT BTN
const selectedProduct_slot4_editBtn = document.getElementById("selectedProduct-slot4-editBtn-id");
//  //  //PRODUCT SLOT 5 - EDIT BTN
const selectedProduct_slot5_editBtn = document.getElementById("selectedProduct-slot5-editBtn-id");

//  //OPEN SERVICE ITEM - DELETE BTN
//  //  //SERVICE SLOT 1 - DELETE BTN
const selectedService_slot1_deleteBtn = document.getElementById("selectedService-slot1-deleteBtn-id");
//  //  //SERVICE SLOT 2 - DELETE BTN
const selectedService_slot2_deleteBtn = document.getElementById("selectedService-slot2-deleteBtn-id");
//  //  //SERVICE SLOT 3 - DELETE BTN
const selectedService_slot3_deleteBtn = document.getElementById("selectedService-slot3-deleteBtn-id");
//  //  //SERVICE SLOT 4 - DELETE BTN
const selectedService_slot4_deleteBtn = document.getElementById("selectedService-slot4-deleteBtn-id");
//  //  //SERVICE SLOT 5 - DELETE BTN
const selectedService_slot5_deleteBtn = document.getElementById("selectedService-slot5-deleteBtn-id");
//  //  //  //  //  //  //  //  //  //
//  //  //PRODUCT SLOT 1 - DELETE BTN
const selectedProduct_slot1_deleteBtn = document.getElementById("selectedProduct-slot1-deleteBtn-id");
//  //  //PRODUCT SLOT 2 - DELETE BTN
const selectedProduct_slot2_deleteBtn = document.getElementById("selectedProduct-slot2-deleteBtn-id");
//  //  //PRODUCT SLOT 3 - DELETE BTN
const selectedProduct_slot3_deleteBtn = document.getElementById("selectedProduct-slot3-deleteBtn-id");
//  //  //PRODUCT SLOT 4 - DELETE BTN
const selectedProduct_slot4_deleteBtn = document.getElementById("selectedProduct-slot4-deleteBtn-id");
//  //  //PRODUCT SLOT 5 - DELETE BTN
const selectedProduct_slot5_deleteBtn = document.getElementById("selectedProduct-slot5-deleteBtn-id");

//ALL SERVICE SLOT DETAILS BTNS
//  //SERVICE SLOT 1 - DETAILS BTN
selectedService_slot1_detailsBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "UR Service Details";

    //OPEN - SERVICE VENDOR DETAILS CONTAINER
    selectedService_item_details_container.style.display = "block";
    //PLACE SLOT 1 VENDOR SERVICE CONTENT
    //  //ASSETS HERE
}); 
//  //SERVICE SLOT 2 - DETAILS BTN
selectedService_slot2_detailsBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "UR Service Details";

    //OPEN - SERVICE VENDOR DETAILS CONTAINER
    selectedService_item_details_container.style.display = "block";
    //PLACE SLOT 2 VENDOR SERVICE CONTENT
    //  //ASSETS HERE
}); 
//  //SERVICE SLOT 3 - DETAILS BTN
selectedService_slot3_detailsBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "UR Service Details";

    //OPEN - SERVICE VENDOR DETAILS CONTAINER
    selectedService_item_details_container.style.display = "block";
    //PLACE SLOT 3 VENDOR SERVICE CONTENT
    //  //ASSETS HERE
}); 
//  //SERVICE SLOT 4 - DETAILS BTN
selectedService_slot4_detailsBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "UR Service Details";

    //OPEN - SERVICE VENDOR DETAILS CONTAINER
    selectedService_item_details_container.style.display = "block";
    //PLACE SLOT 4 VENDOR SERVICE CONTENT
    //  //ASSETS HERE
}); 
//  //SERVICE SLOT 5 - DETAILS BTN
selectedService_slot5_detailsBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "UR Service Details";

    //OPEN - SERVICE VENDOR DETAILS CONTAINER
    selectedService_item_details_container.style.display = "block";
    //PLACE SLOT 5 VENDOR SERVICE CONTENT
    //  //ASSETS HERE
}); 
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//ALL SERVICE SLOT EDIT BTNS
//  //SERVICE SLOT 1 - EDIT BTN
selectedService_slot1_editBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "UR Service Details";

    //OPEN - SERVICE VENDOR DETAILS CONTAINER
    selectedService_item_details_container.style.display = "block";
    //PLACE SLOT 1 VENDOR SERVICE CONTENT
    //  //ASSETS HERE
}); 
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//ALL PRODUCT SLOT DETAILS BTNS
//  //PRODUCT SLOT 1 - DETAILS BTN
selectedProduct_slot1_detailsBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "UR Product Details";

    //OPEN - PRODUCT VENDOR DETAILS CONTAINER
    selectedProduct_item_details_container.style.display = "block";
    //PLACE SLOT 1 VENDOR PRODUCT CONTENT
    //  //ASSETS HERE
});
//  //PRODUCT SLOT 2 - DETAILS BTN
selectedProduct_slot2_detailsBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "UR Product Details";

    //OPEN - PRODUCT VENDOR DETAILS CONTAINER
    selectedProduct_item_details_container.style.display = "block";
    //PLACE SLOT 2 VENDOR PRODUCT CONTENT
    //  //ASSETS HERE
});
//  //PRODUCT SLOT 3 - DETAILS BTN
selectedProduct_slot3_detailsBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "UR Product Details";

    //OPEN - PRODUCT VENDOR DETAILS CONTAINER
    selectedProduct_item_details_container.style.display = "block";
    //PLACE SLOT 3 VENDOR PRODUCT CONTENT
    //  //ASSETS HERE
});
//  //PRODUCT SLOT 4 - DETAILS BTN
selectedProduct_slot4_detailsBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "UR Product Details";

    //OPEN - PRODUCT VENDOR DETAILS CONTAINER
    selectedProduct_item_details_container.style.display = "block";
    //PLACE SLOT 4 VENDOR PRODUCT CONTENT
    //  //ASSETS HERE
});
//  //PRODUCT SLOT 5 - DETAILS BTN
selectedProduct_slot5_detailsBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "UR Product Details";

    //OPEN - PRODUCT VENDOR DETAILS CONTAINER
    selectedProduct_item_details_container.style.display = "block";
    //PLACE SLOT 5 VENDOR PRODUCT CONTENT
    //  //ASSETS HERE
});


//ALL SERVICE SLOT EDIT BTNS - EVENT LISTENERS
//  //SERVICE SLOT 1 - EDIT BTN
selectedService_slot1_editBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //CLOSE - POS CONTAINER 

    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "Edit UR Selection";

    //OPEN - SERVICE VENDOR ITEM EDIT CONTAINER
    selectedService_item_edit_container.style.display = "block";
    //PLACE SLOT 1 VENDOR SERVICE CONTENT FOR EDITING
    //  //ASSETS HERE
});
//  //SERVICE SLOT 2 - EDIT BTN
selectedService_slot2_editBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //CLOSE - POS CONTAINER 

    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "Edit UR Selection";

    //OPEN - SERVICE VENDOR ITEM EDIT CONTAINER
    selectedService_item_edit_container.style.display = "block";
    //PLACE SLOT 2 VENDOR SERVICE CONTENT FOR EDITING
    //  //ASSETS HERE
}); 
//  //SERVICE SLOT 3 - EDIT BTN
selectedService_slot3_editBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //CLOSE - POS CONTAINER 

    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "Edit UR Selection";

    //OPEN - SERVICE VENDOR ITEM EDIT CONTAINER
    selectedService_item_edit_container.style.display = "block";
    //PLACE SLOT 3 VENDOR SERVICE CONTENT FOR EDITING
    //  //ASSETS HERE
});
//  //SERVICE SLOT 4 - EDIT BTN
selectedService_slot4_editBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //CLOSE - POS CONTAINER 

    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "Edit UR Selection";

    //OPEN - SERVICE VENDOR ITEM EDIT CONTAINER
    selectedService_item_edit_container.style.display = "block";
    //PLACE SLOT 4 VENDOR SERVICE CONTENT FOR EDITING
    //  //ASSETS HERE
});
//  //SERVICE SLOT 5 - EDIT BTN
selectedService_slot5_editBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //CLOSE - POS CONTAINER 

    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "Edit UR Selection";

    //OPEN - SERVICE VENDOR ITEM EDIT CONTAINER
    selectedService_item_edit_container.style.display = "block";
    //PLACE SLOT 5 VENDOR SERVICE CONTENT FOR EDITING
    //  //ASSETS HERE
});
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//ALL PRODUCT SLOT EDIT BTNS - EVENT LISTENERS
//  //PRODUCT SLOT 1 - EDIT BTN
selectedProduct_slot1_editBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //CLOSE - POS CONTAINER 

    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "Edit UR Selection";

    //OPEN - PRODUCT VENDOR ITEM EDIT CONTAINER
    selectedProduct_item_edit_container.style.display = "block";
    //PLACE SLOT 1 VENDOR PRODUCT CONTENT FOR EDITING
    //  //ASSETS HERE
});
//  //PRODUCT SLOT 2 - EDIT BTN
selectedProduct_slot2_editBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //CLOSE - POS CONTAINER 

    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "Edit UR Selection";

    //OPEN - PRODUCT VENDOR ITEM EDIT CONTAINER
    selectedProduct_item_edit_container.style.display = "block";
    //PLACE SLOT 2 VENDOR PRODUCT CONTENT FOR EDITING
    //  //ASSETS HERE
});
//  //PRODUCT SLOT 3 - EDIT BTN
selectedProduct_slot3_editBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //CLOSE - POS CONTAINER 

    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "Edit UR Selection";

    //OPEN - PRODUCT VENDOR ITEM EDIT CONTAINER
    selectedProduct_item_edit_container.style.display = "block";
    //PLACE SLOT 3 VENDOR PRODUCT CONTENT FOR EDITING
    //  //ASSETS HERE
});
//  //PRODUCT SLOT 4 - EDIT BTN
selectedProduct_slot4_editBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //CLOSE - POS CONTAINER 

    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "Edit UR Selection";

    //OPEN - PRODUCT VENDOR ITEM EDIT CONTAINER
    selectedProduct_item_edit_container.style.display = "block";
    //PLACE SLOT 4 VENDOR PRODUCT CONTENT FOR EDITING
    //  //ASSETS HERE
});
//  //PRODUCT SLOT 5 - EDIT BTN
selectedProduct_slot5_editBtn.addEventListener("click", () => {
    //CLOSE - ALL URCARD SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "none";
    //CLOSE - BOTTOM CONTAINER BTN CONTAINER
    bottomBtns_container1.style.display = "none";
    //CLOSE - POS CONTAINER 

    //REMOVE - OVERLAY CLOSE BTN
    close_overlayContainer_btn.style.display = "none";
    //ADD - OVERLAY BACK BTN
    back_overlayContainer_btn.style.display = "flex";
    //OPEN - OVERLAY INNER CONTAINER 2 
    inner_overlayContainer_2.style.display = "block"; 
    //UPDATE OVERLAY HEADER TXT
    mainHeader_txt.innerHTML = "Edit UR Selection";

    //OPEN - PRODUCT VENDOR ITEM EDIT CONTAINER
    selectedProduct_item_edit_container.style.display = "block";
    //PLACE SLOT 5 VENDOR PRODUCT CONTENT FOR EDITING
    //  //ASSETS HERE
});
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//ALL SERVICE SLOT EDIT BTNS - EVENT LISTENERS
//  //SERVICE SLOT 1 - EDIT BTN
selectedService_slot1_deleteBtn.addEventListener("click", () => {
    //OPEN - SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "flex";
    //PLACE SLOT 1 VENDOR SERVICE CONTENT FOR DELETION
    //  //MAKE DELETE TXT = SERVICE ITEM 1 NAME TXT
    selectedItem_itemName_deleteTxt.innerHTML = selectedService_item1_name_txt.innerHTML; 
});
//  //SERVICE SLOT 2 - EDIT BTN
selectedService_slot2_deleteBtn.addEventListener("click", () => {
    //OPEN - SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "flex";
    //PLACE SLOT 2 VENDOR SERVICE CONTENT FOR DELETION
    //  //MAKE DELETE TXT = SERVICE ITEM 2 NAME TXT
    selectedItem_itemName_deleteTxt.innerHTML = selectedService_item2_name_txt.innerHTML; 
});
//  //SERVICE SLOT 3 - EDIT BTN
selectedService_slot3_deleteBtn.addEventListener("click", () => {
    //OPEN - SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "flex";
    //PLACE SLOT 3 VENDOR SERVICE CONTENT FOR DELETION
    //  //MAKE DELETE TXT = SERVICE ITEM 3 NAME TXT
    selectedItem_itemName_deleteTxt.innerHTML = selectedService_item3_name_txt.innerHTML; 
});
//  //SERVICE SLOT 4 - EDIT BTN
selectedService_slot4_deleteBtn.addEventListener("click", () => {
    //OPEN - SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "flex";
    //PLACE SLOT 4 VENDOR SERVICE CONTENT FOR DELETION
    //  //MAKE DELETE TXT = SERVICE ITEM 4 NAME TXT
    selectedItem_itemName_deleteTxt.innerHTML = selectedService_item4_name_txt.innerHTML; 
});
//  //SERVICE SLOT 5 - EDIT BTN
selectedService_slot5_deleteBtn.addEventListener("click", () => {
    //OPEN - SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "flex";
    //PLACE SLOT 5 VENDOR SERVICE CONTENT FOR DELETION
    //  //MAKE DELETE TXT = SERVICE ITEM 5 NAME TXT
    selectedItem_itemName_deleteTxt.innerHTML = selectedService_item5_name_txt.innerHTML; 
});
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//ALL PRODUCT SLOT DELETE BTNS - EVENT LISTENERS
//  //PRODUCT SLOT 1 - EDIT BTN
selectedProduct_slot1_deleteBtn.addEventListener("click", () => {
    //OPEN - SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "flex";
    //PLACE SLOT 1 VENDOR PRODUCT CONTENT FOR DELETION
    //  //MAKE DELETE TXT = PRODUCT ITEM 1 NAME TXT
    selectedItem_itemName_deleteTxt.innerHTML = selectedProduct_item1_name_txt.innerHTML; 
});
//  //PRODUCT SLOT 2 - EDIT BTN
selectedProduct_slot2_deleteBtn.addEventListener("click", () => {
    //OPEN - SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "flex";
    //PLACE SLOT 2 VENDOR PRODUCT CONTENT FOR DELETION
    //  //MAKE DELETE TXT = PRODUCT ITEM 2 NAME TXT
    selectedItem_itemName_deleteTxt.innerHTML = selectedProduct_item2_name_txt.innerHTML; 
});
//  //PRODUCT SLOT 3 - EDIT BTN
selectedProduct_slot3_deleteBtn.addEventListener("click", () => {
    //OPEN - SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "flex";
    //PLACE SLOT 3 VENDOR PRODUCT CONTENT FOR DELETION
    //  //MAKE DELETE TXT = PRODUCT ITEM 3 NAME TXT
    selectedItem_itemName_deleteTxt.innerHTML = selectedProduct_item3_name_txt.innerHTML; 
});
//  //PRODUCT SLOT 4 - EDIT BTN
selectedProduct_slot4_deleteBtn.addEventListener("click", () => {
    //OPEN - SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "flex";
    //PLACE SLOT 4 VENDOR PRODUCT CONTENT FOR DELETION
    selectedItem_itemName_deleteTxt.innerHTML = selectedProduct_item4_name_txt.innerHTML; 
});
//  //PRODUCT SLOT 5 - EDIT BTN
selectedProduct_slot5_deleteBtn.addEventListener("click", () => {
    //OPEN - SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "flex";
    //PLACE SLOT 5 VENDOR PRODUCT CONTENT FOR DELETION
    selectedItem_itemName_deleteTxt.innerHTML = selectedProduct_item5_name_txt.innerHTML; 
});
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//NO BTN - DELETE SELECTED ITEM
selectedItem_deleteNo_btn.addEventListener("click", () => {
    //CLOSE SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "none";
});
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL DELETE BTN - DELETE SELECTED ITEM
selectedItem_finalDelete_btn.addEventListener("click", () => {
    //CLOSE SELECTED ITEM DELETE CONTAINER
    selectedItem_delete_container.style.display = "none";
    //ITEM REMOVAL ALGORITHM
    //  //IF DELETE TXT = SERVICE ITEM 1 NAME
    if (selectedItem_itemName_deleteTxt.innerHTML == selectedService_item1_name_txt.innerHTML) {
        //REMOVE - SERVICE ITEM SLOT 1
        serviceItem_slot1.style.display = "none";
        //RESET - SERVICE ITEM SLOT 1 CONTENT
        clear_serviceItem1_slot(); 
        //MAKE - SLOT 1 COST = 0 

        //RUN - BOTTOM BTN ORDER TOTAL
        get_bottomBtn_orderTotal(); 
        //CHECK FOR - EMPTY ITEM SLOTS
        checkFor_emptySelectedItems_allSlots(); 

        //RESET - SERVICE VENDOR 1 
        serVendor1 = Number(0); 

        // //RESET - URCARD SELECTION DATA TABLE
        // //  //RESET - SERVICE ID 1 = 0 serviceID_1
        // serviceID_1 = Number(0); 
        // //  //RESET - SERVICE VENDOR 1 = 0
        // serVendor1 = Number(0);
        // //  //RUN - URL PARAMS DATA INPUT FUNCTION 
        // urlParams_dateInput(); 
        // //  //RUN - GET SERVICE CODE 1  get_serviceCode1_assignment
        // get_serviceCode1_assignment(); 
        //  //
    } 
    //  //IF DELETE TXT = SERVICE ITEM 2 NAME
    else if (selectedItem_itemName_deleteTxt.innerHTML == selectedService_item2_name_txt.innerHTML) {
        //REMOVE - SERVICE ITEM SLOT 2
        serviceItem_slot2.style.display = "none";
        //RESET - SERVICE ITEM SLOT 2 CONTENT
        clear_serviceItem2_slot(); 
        //MAKE - SLOT 2 COST = 0 selectedService_item1_slot1_cost_number
        //RUN - BOTTOM BTN ORDER TOTAL
        get_bottomBtn_orderTotal(); 
        //CHECK FOR - EMPTY ITEM SLOTS
        checkFor_emptySelectedItems_allSlots(); 
    }
    //  //IF DELETE TXT = SERVICE ITEM 3 NAME
    else if (selectedItem_itemName_deleteTxt.innerHTML == selectedService_item3_name_txt.innerHTML) {
        //REMOVE - SERVICE ITEM SLOT 3
        serviceItem_slot3.style.display = "none";
        //RESET - SERVICE ITEM SLOT 3 CONTENT
        clear_serviceItem3_slot(); 
        //MAKE - SLOT 3 COST = 0 

        //RUN - BOTTOM BTN ORDER TOTAL
        get_bottomBtn_orderTotal(); 
        //CHECK FOR - EMPTY ITEM SLOTS
        checkFor_emptySelectedItems_allSlots(); 
    }
    //  //IF DELETE TXT = SERVICE ITEM 4 NAME
    else if (selectedItem_itemName_deleteTxt.innerHTML == selectedService_item4_name_txt.innerHTML) {
        //REMOVE - SERVICE ITEM SLOT 4
        serviceItem_slot4.style.display = "none";
        //RESET - SERVICE ITEM SLOT 4 CONTENT
        clear_serviceItem4_slot(); 
        //MAKE - SLOT 4 COST = 0 

        //RUN - BOTTOM BTN ORDER TOTAL
        get_bottomBtn_orderTotal(); 
        //CHECK FOR - EMPTY ITEM SLOTS
        checkFor_emptySelectedItems_allSlots(); 
    }
    //  //IF DELETE TXT = SERVICE ITEM 5 NAME
    else if (selectedItem_itemName_deleteTxt.innerHTML == selectedService_item5_name_txt.innerHTML) {
        //REMOVE - SERVICE ITEM SLOT 5
        serviceItem_slot5.style.display = "none";
        //RESET - SERVICE ITEM SLOT 5 CONTENT
        clear_serviceItem5_slot(); 
        //MAKE - SLOT 5 COST = 0 

        //RUN - BOTTOM BTN ORDER TOTAL
        get_bottomBtn_orderTotal(); 
        //CHECK FOR - EMPTY ITEM SLOTS
        checkFor_emptySelectedItems_allSlots(); 
    }

    //  //IF DELETE TXT = PRODUCT ITEM 1 NAME 
    else if (selectedItem_itemName_deleteTxt.innerHTML == selectedProduct_item1_name_txt.innerHTML) {
        //REMOVE - PRODUCT ITEM SLOT 1
        productItem_slot1.style.display = "none";
        //RESET - SERVICE ITEM SLOT 1 CONTENT
        clear_productItem1_slot(); 
        //MAKE - SLOT 1 COST = 0 

        //RUN - BOTTOM BTN ORDER TOTAL
        get_bottomBtn_orderTotal();
        //CHECK FOR - EMPTY ITEM SLOTS
        checkFor_emptySelectedItems_allSlots();  
    }
    //  //IF DELETE TXT = PRODUCT ITEM 2 NAME 
    else if (selectedItem_itemName_deleteTxt.innerHTML == selectedProduct_item2_name_txt.innerHTML) {
        //REMOVE - PRODUCT ITEM SLOT 2
        productItem_slot2.style.display = "none";
        //RESET - SERVICE ITEM SLOT 2 CONTENT
        clear_productItem2_slot(); 
        //MAKE - SLOT 2 COST = 0 

        //RUN - BOTTOM BTN ORDER TOTAL
        get_bottomBtn_orderTotal(); 
        //CHECK FOR - EMPTY ITEM SLOTS
        checkFor_emptySelectedItems_allSlots(); 
    }
    //  //IF DELETE TXT = PRODUCT ITEM 3 NAME 
    else if (selectedItem_itemName_deleteTxt.innerHTML == selectedProduct_item3_name_txt.innerHTML) {
        //REMOVE - PRODUCT ITEM SLOT 3
        productItem_slot3.style.display = "none";
        //RESET - SERVICE ITEM SLOT 3 CONTENT
        clear_productItem3_slot(); 
        //MAKE - SLOT 3 COST = 0 

        //RUN - BOTTOM BTN ORDER TOTAL
        get_bottomBtn_orderTotal(); 
        //CHECK FOR - EMPTY ITEM SLOTS
        checkFor_emptySelectedItems_allSlots(); 
    }
    //  //IF DELETE TXT = PRODUCT ITEM 4 NAME 
    else if (selectedItem_itemName_deleteTxt.innerHTML == selectedProduct_item4_name_txt.innerHTML) {
        //REMOVE - PRODUCT ITEM SLOT 4
        productItem_slot4.style.display = "none";
        //RESET - SERVICE ITEM SLOT 4 CONTENT
        clear_productItem4_slot(); 
        //MAKE - SLOT 4 COST = 0 

        //RUN - BOTTOM BTN ORDER TOTAL
        get_bottomBtn_orderTotal(); 
        //CHECK FOR - EMPTY ITEM SLOTS
        checkFor_emptySelectedItems_allSlots(); 
    }
    //  //IF DELETE TXT = PRODUCT ITEM 5 NAME 
    else if (selectedItem_itemName_deleteTxt.innerHTML == selectedProduct_item5_name_txt.innerHTML) {
        //REMOVE - PRODUCT ITEM SLOT 5
        productItem_slot5.style.display = "none";
        //RESET - SERVICE ITEM SLOT 5 CONTENT
        clear_productItem5_slot(); 
        //MAKE - SLOT 5 COST = 0 

        //RUN - BOTTOM BTN ORDER TOTAL
        get_bottomBtn_orderTotal(); 
        //CHECK FOR - EMPTY ITEM SLOTS
        checkFor_emptySelectedItems_allSlots(); 
    }
    //IF DELETE TXT NOT DEFINED
    else {
        alert("Function error: EventListener undetermined");
        console.log("Functional error: Service/Product name is not listed: " + "[" + selectedItem_itemName_deleteTxt.innerHTML + "]");
    }
});


//OPEN URCARD ALL USER SELECTIONS
async function open_allSelected_productItems_urcard() {
    //OPEN ALL SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "block";
    //UPDATE MAIN HEADER TXT
    mainHeader_txt.innerHTML = "View UR Selections";

    //VERIFY SELECTED PRODUCT VENDORS
    //  //  //IF PRODUCT VENDOR 1 SELECTED 
    if (prdVendor1 == "nubianRepublic_p_vendor") {
         //OPEN ALL SERVICE ITEMS CONTAINER
         all_selectedProduct_container.style.display = "block";

        //  //CHECK FOR VENDOR PRODUCT 1
        if (nubianR_DT_slot1.value == 1) {
            //  //IF PRODUCT SLOT 1 - IS EMPTY
            if (productItem_slot1.style.display == "none") {
            //OPEN PRODUCT SLOT 1
            productItem_slot1.style.display = "block";
                //PRODUCT ITEM 1 IMG  
                productItem1_img.src = nubianR_productItem1_img; 
                //PRODUCT ITEM 1 NAME
                selectedProduct_item1_name_txt.innerHTML = nubianR_productItem1_name; 
                //PRODUCT ITEM 1 PROVIDER NAME
                providerName_productItem1_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 1 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item1_quantity_txt.innerText = nubianR_DT_slot3.value; 
                //SET PRODUCT SLOT 1 COST
                nubianR_cost_determination();
                selectedProduct_item1_slot1_cost_number = nubianR_productItem1_cost;
                selectedProduct_item1_slot1_cost.innerText = "$" + nubianR_productItem1_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal(); 
            }
        }
        //  //CHECK FOR VENDOR PRODUCT 2
        if (nubianR_DT_slot4.value == 1) {
            //  //IF PRODUCT SLOT 1 - IS EMPTY
            if (productItem_slot1.style.display == "none") {
                //OPEN PRODUCT SLOT 1
                productItem_slot1.style.display = "block";
                //PRODUCT ITEM 1 IMG  
                productItem1_img.src = nubianR_productItem2_img; 
                //PRODUCT ITEM 1 NAME
                selectedProduct_item1_name_txt.innerHTML = nubianR_productItem2_name; 
                //PRODUCT ITEM 1 PROVIDER NAME
                providerName_productItem1_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 1 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item1_quantity_txt.innerText = nubianR_DT_slot6.value; 
                //SET PRODUCT SLOT 1 COST
                nubianR_cost_determination();
                selectedProduct_item1_slot1_cost_number = nubianR_productItem2_cost;
                selectedProduct_item1_slot1_cost.innerText = "$" + nubianR_productItem2_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 2 - IS EMPTY
            else if (productItem_slot2.style.display == "none") {
                //OPEN PRODUCT SLOT 2
                productItem_slot2.style.display = "block";
                //PRODUCT ITEM 2 IMG  
                productItem2_img.src = nubianR_productItem2_img; 
                //PRODUCT ITEM 2 NAME
                selectedProduct_item2_name_txt.innerHTML = nubianR_productItem2_name; 
                //PRODUCT ITEM 2 PROVIDER NAME
                providerName_productItem2_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 2 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item2_quantity_txt.innerText = nubianR_DT_slot6.value; 
                //SET PRODUCT SLOT 2 COST
                nubianR_cost_determination();
                selectedProduct_item2_slot2_cost_number = nubianR_productItem2_cost;
                selectedProduct_item2_slot2_cost.innerText = "$" + nubianR_productItem2_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
        }
        //  //CHECK FOR VENDOR PRODUCT 3
        if (nubianR_DT_slot7.value == 1) {
            //  //IF PRODUCT SLOT 1 - IS EMPTY
            if (productItem_slot1.style.display == "none") {
                //OPEN PRODUCT SLOT 1
                productItem_slot1.style.display = "block";
                //PRODUCT ITEM 1 IMG  
                productItem1_img.src = nubianR_productItem3_img; 
                //PRODUCT ITEM 1 NAME
                selectedProduct_item1_name_txt.innerHTML = nubianR_productItem3_name; 
                //PRODUCT ITEM 1 PROVIDER NAME
                providerName_productItem1_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 1 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item1_quantity_txt.innerText = nubianR_DT_slot9.value; 
                //SET PRODUCT SLOT 1 COST
                nubianR_cost_determination();
                selectedProduct_item1_slot1_cost_number = nubianR_productItem3_cost;
                selectedProduct_item1_slot1_cost.innerText = "$" + nubianR_productItem3_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 2 - IS EMPTY
            else if (productItem_slot2.style.display == "none") {
                //OPEN PRODUCT SLOT 2
                productItem_slot2.style.display = "block";
                //PRODUCT ITEM 2 IMG  
                productItem2_img.src = nubianR_productItem3_img; 
                //PRODUCT ITEM 2 NAME
                selectedProduct_item2_name_txt.innerHTML = nubianR_productItem3_name; 
                //PRODUCT ITEM 2 PROVIDER NAME
                providerName_productItem2_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 2 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item2_quantity_txt.innerText = nubianR_DT_slot9.value; 
                //SET PRODUCT SLOT 2 COST
                nubianR_cost_determination();
                selectedProduct_item2_slot2_cost_number = nubianR_productItem3_cost;
                selectedProduct_item2_slot2_cost.innerText = "$" + nubianR_productItem3_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 3 - IS EMPTY
            else if (productItem_slot3.style.display == "none") {
                //OPEN PRODUCT SLOT 3
                productItem_slot3.style.display = "block";
                //PRODUCT ITEM 3 IMG  
                productItem3_img.src = nubianR_productItem3_img; 
                //PRODUCT ITEM 3 NAME
                selectedProduct_item3_name_txt.innerHTML = nubianR_productItem3_name; 
                //PRODUCT ITEM 3 PROVIDER NAME
                providerName_productItem3_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 3 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item3_quantity_txt.innerText = nubianR_DT_slot9.value; 
                //SET PRODUCT SLOT 3 COST
                nubianR_cost_determination();
                selectedProduct_item3_slot3_cost_number = nubianR_productItem3_cost; //DEEZ NUTZ
                selectedProduct_item3_slot3_cost.innerText = "$" + nubianR_productItem3_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 4 - IS EMPTY
            else if (productItem_slot4.style.display == "none") {
            //OPEN PRODUCT SLOT 4
            productItem_slot4.style.display = "block";
                //PRODUCT ITEM 4 IMG  
                productItem4_img.src = nubianR_productItem3_img; 
                //PRODUCT ITEM 4 NAME
                selectedProduct_item4_name_txt.innerHTML = nubianR_productItem3_name; 
                //PRODUCT ITEM 4 PROVIDER NAME
                providerName_productItem4_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 4 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item4_quantity_txt.innerText = nubianR_DT_slot9.value; 
                //SET PRODUCT SLOT 4 COST
                nubianR_cost_determination();
                selectedProduct_item4_slot4_cost_number = nubianR_productItem3_cost;
                selectedProduct_item4_slot4_cost.innerText = "$" + nubianR_productItem3_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 5 - IS EMPTY
            else if (productItem_slot5.style.display == "none") {
            //OPEN PRODUCT SLOT 5
            productItem_slot5.style.display = "block";
                //PRODUCT ITEM 5 IMG  
                productItem5_img.src = nubianR_productItem3_img; 
                //PRODUCT ITEM 5 NAME
                selectedProduct_item5_name_txt.innerHTML = nubianR_productItem3_name; 
                //PRODUCT ITEM 5 PROVIDER NAME
                providerName_productItem5_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 5 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item5_quantity_txt.innerText = nubianR_DT_slot9.value; 
                //SET PRODUCT SLOT 5 COST
                nubianR_cost_determination();
                selectedProduct_item5_slot5_cost_number = nubianR_productItem3_cost;
                selectedProduct_item5_slot5_cost.innerText = "$" + nubianR_productItem3_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
        }
        //  //CHECK FOR VENDOR PRODUCT 4
        if (nubianR_DT_slot10.value == 1) {
            //  //IF PRODUCT SLOT 1 - IS EMPTY
            if (productItem_slot1.style.display == "none") {
            //OPEN PRODUCT SLOT 1
            productItem_slot1.style.display = "block";
                //PRODUCT ITEM 1 IMG  
                productItem1_img.src = nubianR_productItem4_img; 
                //PRODUCT ITEM 1 NAME
                selectedProduct_item1_name_txt.innerHTML = nubianR_productItem4_name; 
                //PRODUCT ITEM 1 PROVIDER NAME
                providerName_productItem1_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 1 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item1_quantity_txt.innerText = nubianR_DT_slot12.value; 
                //SET PRODUCT SLOT 1 COST
                nubianR_cost_determination();
                selectedProduct_item1_slot1_cost_number = nubianR_productItem4_cost;
                selectedProduct_item1_slot1_cost.innerText = "$" + nubianR_productItem4_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 2 - IS EMPTY
            else if (productItem_slot2.style.display == "none") {
                //OPEN PRODUCT SLOT 2
                productItem_slot2.style.display = "block";
                //PRODUCT ITEM 2 IMG  
                productItem2_img.src = nubianR_productItem4_img; 
                //PRODUCT ITEM 2 NAME
                selectedProduct_item2_name_txt.innerHTML = nubianR_productItem4_name; 
                //PRODUCT ITEM 2 PROVIDER NAME
                providerName_productItem2_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 2 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item2_quantity_txt.innerText = nubianR_DT_slot12.value; 
                //SET PRODUCT SLOT 2 COST
                nubianR_cost_determination();
                selectedProduct_item2_slot2_cost_number = nubianR_productItem4_cost;
                selectedProduct_item2_slot2_cost.innerText = "$" + nubianR_productItem4_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 3 - IS EMPTY
            else if (productItem_slot3.style.display == "none") {
                //OPEN PRODUCT SLOT 3
                productItem_slot3.style.display = "block";
                //PRODUCT ITEM 3 IMG  
                productItem3_img.src = nubianR_productItem4_img; 
                //PRODUCT ITEM 3 NAME
                selectedProduct_item3_name_txt.innerHTML = nubianR_productItem4_name; 
                //PRODUCT ITEM 3 PROVIDER NAME
                providerName_productItem3_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 3 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item3_quantity_txt.innerText = nubianR_DT_slot12.value; 
                //SET PRODUCT SLOT 3 COST
                nubianR_cost_determination();
                selectedProduct_item3_slot3_cost_number = nubianR_productItem4_cost;
                selectedProduct_item3_slot3_cost.innerText = "$" + nubianR_productItem4_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 4 - IS EMPTY
            else if (productItem_slot4.style.display == "none") {
                //OPEN PRODUCT SLOT 4
                productItem_slot4.style.display = "block";
                //PRODUCT ITEM 4 IMG  
                productItem4_img.src = nubianR_productItem4_img; 
                //PRODUCT ITEM 4 NAME
                selectedProduct_item4_name_txt.innerHTML = nubianR_productItem4_name; 
                //PRODUCT ITEM 4 PROVIDER NAME
                providerName_productItem4_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 4 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item4_quantity_txt.innerText = nubianR_DT_slot12.value; 
                //SET PRODUCT SLOT 4 COST
                nubianR_cost_determination();
                selectedProduct_item4_slot4_cost_number = nubianR_productItem4_cost;
                selectedProduct_item4_slot4_cost.innerText = "$" + nubianR_productItem4_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 5 - IS EMPTY
            else if (productItem_slot5.style.display == "none") {
            //OPEN PRODUCT SLOT 5
            productItem_slot5.style.display = "block";
                //PRODUCT ITEM 5 IMG  
                productItem5_img.src = nubianR_productItem4_img; 
                //PRODUCT ITEM 5 NAME
                selectedProduct_item5_name_txt.innerHTML = nubianR_productItem4_name; 
                //PRODUCT ITEM 5 PROVIDER NAME
                providerName_productItem5_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 5 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item5_quantity_txt.innerText = nubianR_DT_slot12.value; 
                //SET PRODUCT SLOT 5 COST
                nubianR_cost_determination();
                selectedProduct_item5_slot5_cost_number = nubianR_productItem4_cost;
                selectedProduct_item5_slot5_cost.innerText = "$" + nubianR_productItem4_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
        }
        //  //CHECK FOR VENDOR PRODUCT 5
        if (nubianR_DT_slot13.value == 1) {
            //  //IF PRODUCT SLOT 1 - IS EMPTY
            if (productItem_slot1.style.display == "none") {
            //OPEN PRODUCT SLOT 1
            productItem_slot1.style.display = "block";
                //PRODUCT ITEM 1 IMG  
                productItem1_img.src = nubianR_productItem5_img; 
                //PRODUCT ITEM 1 NAME
                selectedProduct_item1_name_txt.innerHTML = nubianR_productItem5_name; 
                //PRODUCT ITEM 1 PROVIDER NAME
                providerName_productItem1_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 1 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item1_quantity_txt.innerText = nubianR_DT_slot15.value; 
                //SET PRODUCT SLOT 1 COST
                nubianR_cost_determination();
                selectedProduct_item1_slot1_cost_number = nubianR_productItem5_cost;
                selectedProduct_item1_slot1_cost.innerText = "$" + nubianR_productItem5_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 2 - IS EMPTY
            else if (productItem_slot2.style.display == "none") {
                //OPEN PRODUCT SLOT 2
                productItem_slot2.style.display = "block";
                //PRODUCT ITEM 2 IMG  
                productItem2_img.src = nubianR_productItem5_img; 
                //PRODUCT ITEM 2 NAME
                selectedProduct_item2_name_txt.innerHTML = nubianR_productItem5_name; 
                //PRODUCT ITEM 2 PROVIDER NAME
                providerName_productItem2_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 2 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item2_quantity_txt.innerText = nubianR_DT_slot15.value; 
                //SET PRODUCT SLOT 2 COST
                nubianR_cost_determination();
                selectedProduct_item2_slot2_cost_number = nubianR_productItem5_cost;
                selectedProduct_item2_slot2_cost.innerText = "$" + nubianR_productItem5_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 3 - IS EMPTY
            else if (productItem_slot3.style.display == "none") {
                //OPEN PRODUCT SLOT 3
                productItem_slot3.style.display = "block";
                //PRODUCT ITEM 3 IMG  
                productItem3_img.src = nubianR_productItem5_img; 
                //PRODUCT ITEM 3 NAME
                selectedProduct_item3_name_txt.innerHTML = nubianR_productItem5_name; 
                //PRODUCT ITEM 3 PROVIDER NAME
                providerName_productItem3_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 3 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item3_quantity_txt.innerText = nubianR_DT_slot15.value; 
                //SET PRODUCT SLOT 3 COST
                nubianR_cost_determination();
                selectedProduct_item3_slot3_cost_number = nubianR_productItem5_cost;
                selectedProduct_item3_slot3_cost.innerText = "$" + nubianR_productItem5_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 4 - IS EMPTY
            else if (productItem_slot4.style.display == "none") {
                //OPEN PRODUCT SLOT 4
                productItem_slot4.style.display = "block";
                //PRODUCT ITEM 4 IMG  
                productItem4_img.src = nubianR_productItem5_img; 
                //PRODUCT ITEM 4 NAME
                selectedProduct_item4_name_txt.innerHTML = nubianR_productItem5_name; 
                //PRODUCT ITEM 4 PROVIDER NAME
                providerName_productItem4_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 4 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item4_quantity_txt.innerText = nubianR_DT_slot15.value; 
                //SET PRODUCT SLOT 4 COST
                nubianR_cost_determination();
                selectedProduct_item4_slot4_cost_number = nubianR_productItem5_cost;
                selectedProduct_item4_slot4_cost.innerText = "$" + nubianR_productItem5_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
            //  //IF PRODUCT SLOT 5 - IS EMPTY
            else if (productItem_slot5.style.display == "none") {
            //OPEN PRODUCT SLOT 5
            productItem_slot5.style.display = "block";
                //PRODUCT ITEM 5 IMG  
                productItem5_img.src = nubianR_productItem5_img; 
                //PRODUCT ITEM 5 NAME
                selectedProduct_item5_name_txt.innerHTML = nubianR_productItem5_name; 
                //PRODUCT ITEM 5 PROVIDER NAME
                providerName_productItem5_txt.innerHTML = nubianR_providerName; 
                //PRODUCT ITEM 5 QUANTITY
                //  //SLOT TEXT
                selectedProduct_item5_quantity_txt.innerText = nubianR_DT_slot15.value; 
                //SET PRODUCT SLOT 5 COST
                nubianR_cost_determination();
                selectedProduct_item5_slot5_cost_number = nubianR_productItem5_cost;
                selectedProduct_item5_slot5_cost.innerText = "$" + nubianR_productItem5_cost_text; 
                //GET BOTTOM BTN ORDER TOTAL 
                get_bottomBtn_orderTotal();
            }
        }
    }//END - IF prodID1 == "nubianRepublic_p_vendor"
}


//OPEN URCARD ALL USER SELECTIONS
async function open_allSelected_serviceItems_urcard() {
    //OPEN ALL SELECTED ITEMS CONTAINER
    allURCARD_selections_container.style.display = "block";
    //UPDATE MAIN HEADER TXT
    mainHeader_txt.innerHTML = "View UR Selections";

    //VERIFY SELECTED SERVICE VENDORS
    //  //SERVICE ID 1 OR 2
    //  //  //IF URSTART PB SELECTED
    if (serVendor1 == "urStart_bookP_vendor" || serVendor2 == "urStart_bookP_vendor") {
        //OPEN ALL SERVICE ITEMS CONTAINER
        all_selectedService_container.style.display = "block";
        //LOOK FOR AN EMPTY SERVICE
        //  //IF SLOT 1 IS EMPTY
        if (serviceItem_slot1.style.display == "none") {
            //OPEN SERVICE ITEM 1 CONTAINER
            serviceItem_slot1.style.display = "block"; 
            //CLEAR SERVICE ITEM SLOT 1 DATA
            clear_serviceItem1_slot(); 
            //UPDATE SERVICE ITEM SLOT 1
            //  //SELECTED SERVICE ITEM IMG 1
            serviceItem1_img.src = urStart_serviceItem_img;
            //  //SERVICE ITEM 1 NAME
            selectedService_item1_name_txt.innerHTML = urStart_serviceItem_name;
            //  //SERVICE ITEM 1 PROVIDER NAME
            providerName_serviceItem1_txt.innerHTML = urStart_providerName;
            //  //SERVICE ITEM 1 COST
            urStart_cost_determination(); 
            selectedService_item1_slot1_cost.innerText = urStart_serviceItem_cost_text;
            selectedService_item1_slot1_cost_number = urStart_serviceItem_cost; 
            //  //SERVICE ITEM 1 - ADDITIONAL INFO TXT
            selectedService_item1_additionalInfoAlert_txt.style.display = "block";
            //  //SERVICE ITEM 1 - CUSTOM ADDITIONAL INFO TXT

            //GET BOTTOM BTN ORDER TOTAL 
            get_bottomBtn_orderTotal(); 
        }
        //  //IF SLOT 2 IS EMPTY
        else if (serviceItem_slot2.style.display == "none") {
            //OPEN SERVICE ITEM 2 CONTAINER
            serviceItem_slot2.style.display = "block"; 
            //CLEAR SERVICE ITEM SLOT 2 DATA
            clear_serviceItem2_slot(); 
            //UPDATE SERVICE ITEM SLOT 2
            //  //SELECTED SERVICE ITEM IMG 2
            serviceItem2_img.src = urStart_serviceItem_img;
            //  //SERVICE ITEM 2 NAME
            selectedService_item2_name_txt.innerHTML = urStart_serviceItem_name;
            //  //SERVICE ITEM 2 PROVIDER NAME
            providerName_serviceItem2_txt.innerHTML = urStart_providerName;
            //  //SERVICE ITEM 2 COST 
            urStart_cost_determination(); 
            selectedService_item2_slot2_cost.innerText = urStart_serviceItem_cost_text;
            selectedService_item2_slot2_cost_number = urStart_serviceItem_cost; 
            //  //SERVICE ITEM 1 - ADDITIONAL INFO TXT
            selectedService_item1_additionalInfoAlert_txt.style.display = "block";
            //GET BOTTOM BTN ORDER TOTAL 
            get_bottomBtn_orderTotal(); 
        }
    }
    //  //  //IF CUSTOM SERVICE VENDOR - SELECTED
    if (serVendor1 == "customServ_vendor" || serVendor2 == "customServ_vendor") {
        //OPEN ALL SERVICE ITEMS CONTAINER
        all_selectedService_container.style.display = "block";
        //LOOK FOR AN EMPTY SERVICE
        //  //IF SLOT 1 IS EMPTY
        if (serviceItem_slot1.style.display === "none") {
            //OPEN SERVICE ITEM 1 CONTAINER
            serviceItem_slot1.style.display = "block"; 
            //CLEAR SERVICE ITEM SLOT 1 DATA
            clear_serviceItem1_slot(); 
            //UPDATE SERVICE ITEM SLOT 1
            //  //SELECTED SERVICE ITEM IMG 1
            serviceItem1_img.src = customServ_serviceItem_img;
            //  //SERVICE ITEM 1 NAME
            selectedService_item1_name_txt.innerHTML = customServ_serviceItem_name;
            //  //SERVICE ITEM 1 PROVIDER NAME
            providerName_serviceItem1_txt.innerHTML = customServ_providerName;
            //  //SERVICE ITEM 1 COST 
            customServ_cost_determination(); 
            selectedService_item1_slot1_cost.innerText = customServ_serviceItem_cost_text;
            selectedService_item1_slot1_cost_number = customServ_serviceItem_cost; 
            //  //SERVICE ITEM 1 - ADDITIONAL INFO TXT
            selectedService_item1_additionalInfoAlert_txt.style.display = "none";
            selectedService_item1_customInfoAlert_txt.style.display = "block"; 
            selectedService_item1_customInfoAlert_txt.innerHTML = customServ_vendor_customInfoTxt; 
            //OPEN BOTTOM BTNS CONTAINER 1
            get_bottomBtn_orderTotal(); 
        }
        else if (serviceItem_slot2.style.display == "none") {
            //OPEN SERVICE ITEM 2 CONTAINER
            serviceItem_slot2.style.display = "block"; 
            //CLEAR SERVICE ITEM SLOT 2 DATA
            clear_serviceItem2_slot(); 
            //UPDATE SERVICE ITEM SLOT 2
            //  //SELECTED SERVICE ITEM IMG 2
            serviceItem2_img.src = customServ_serviceItem_img;
            //  //SERVICE ITEM 2 NAME
            selectedService_item2_name_txt.innerHTML = customServ_serviceItem_name;
            //  //SERVICE ITEM 2 PROVIDER NAME
            providerName_serviceItem2_txt.innerHTML = customServ_providerName;
            //  //SERVICE ITEM 2 COST 
            customServ_cost_determination(); 
            selectedService_item2_slot2_cost.innerText = customServ_serviceItem_cost_text;
            selectedService_item2_slot2_cost_number = customServ_serviceItem_cost; 
            //  //SERVICE ITEM 1 - ADDITIONAL INFO TXT
            selectedService_item2_additionalInfoAlert_txt.style.display = "none";
            selectedService_item2_customInfoAlert_txt.style.display = "block"; 
            selectedService_item2_customInfoAlert_txt.innerHTML = customServ_vendor_customInfoTxt; 
            //GET BOTTOM BTN ORDER TOTAL 
            get_bottomBtn_orderTotal(); 
        }
    }
    //  //  //**** ADD NEW SERVICE VENDOR HERE - SERVICE ID1 ****
}


//  //  //ONCLICK EVENT LISTENER - URCARD BTN PRESSED
urCard_btn.addEventListener("click", () => {
    //OEPN LOADING CONTAINER
    loadingContainer.style.display = "block"; 
    //LOG - 'VIEW URCARD SELECTIONS' Button was clicked!
    console.log("'VIEW URCARD SELECTIONS' Button was clicked!");
    //CHECK FOR - EMPTY SELECTED ITEMS IN ALL SLOTS
    checkFor_emptySelectedItems_allSlots(); 
    //OPEN OVERLAY CONTAINER
    open_overlayContainer(); 
    open_stuff();
    //SCROLL TO THE TOP OF - OVERLAY INNER CONTAINER
    let overlayContainer_inner = document.querySelector('.all-SelectedItems-inner-class').scrollTop = 0;
}); 

urSelection_btn.addEventListener("click", () => {
    //OEPN LOADING CONTAINER
    loadingContainer.style.display = "block"; 
    //LOG - 'VIEW URCARD SELECTIONS' Button was clicked!
    console.log("'VIEW URCARD SELECTIONS' Button was clicked!");
    //OPEN OVERLAY CONTAINER
    open_overlayContainer(); 
    open_stuff();
    //SCROLL TO THE TOP OF - OVERLAY INNER CONTAINER
    let overlayContainer_inner = document.querySelector('.all-SelectedItems-inner-class').scrollTop = 0;
}); 

//  //OPEN OVERLAY CONTAINER FUNCTION
async function open_overlayContainer() {
    open_stuff();

    //DISABLE SCROLLING ON BODY
    document.body.style.overflow = 'hidden';

    //DATA LOGS                    
    console.log("SERVICE ID1= "+serviceID_1);
    console.log("SERVICE CODE1= " + serviceCODE_1);
    console.log("SERVICE ID2= "+serviceID_2);
    console.log("SERVICE CODE2= " + serviceCODE_2);
    console.log("PRODUCT ID1= " + prodID1);
    console.log("PRODUCT CODE1= " + productCODE_1);
} //END - OPEN OVERLAY CONTAINER FUNCTION


//  //BOTTOM BUTTONS - NEXT BTN - EVENT LISTENER
bottomOrderTotal_nextBtn.addEventListener("click", () => {
    //CHECK - WHICH CONTAINER IS CURRENTLY OPEN
    //  //IF VIEW ALL SELECTIONS CONTAINER IS OPEN
    if (allURCARD_selections_container.style.display == "block") {
        //CHECK FOR - SERVICE THAT REQUIRES ADDITIONAL INFO B4 PURCHASING
        if (serVendor1 == "urStart_bookP_vendor" || serVendor2 == "urStart_bookP_vendor") {
            //CLOSE - ALL URCARD SELECTIONS CONTAINERS
            allURCARD_selections_container.style.display = "none";
            //CLOSE - BOTTOM BTNS ORDER TOTAL CONTAINER
            bottomBtns_container1.style.display = "none"; 
            //REMOVE - OVERLAY HEADER CLOSE BTN 
            close_overlayContainer_btn.style.display = "none";
            //ADD - OVERLAY HEADER BACK BTN 
            back_overlayContainer_btn.style.display = "flex";
            //OPEN - SERVICE ITEM ADDITIONAL INFO CONTAINER
            serviceItem_additional_info_alert.style.display = "flex";
            //UPDATE - OVERLAY HEADER TXT
            mainHeader_txt.innerHTML = "Service Alert";

            //CHECK FOR - PRODUCTS TO SHIP/DELIVER
            if (prdVendor1 !== 0 || prdVendor1 !== null) {
                //CLOSE - ALL URCARD SELECTIONS CONTAINERS
                allURCARD_selections_container.style.display = "none";
                //CLOSE - BOTTOM BTNS ORDER TOTAL CONTAINER
                bottomBtns_container1.style.display = "none"; 
                //REMOVE - OVERLAY HEADER CLOSE BTN 
                close_overlayContainer_btn.style.display = "none";
                //REMOVE - DEBIT/CREDIT CARD CONTAINER | GOOGLE PAY CONTAINER | APPLE PAY CONTAINER
                debitCredit_container.style.display = "none";
                googlePay_container.style.display = "none";
                applePay_container.style.display = "none"; 
                //ADD - OVERLAY HEADER BACK BTN 
                back_overlayContainer_btn.style.display = "flex";
                //OPEN - POS CONTAINER
                allAssets_pos_container.style.display = "flex"; 
                //GET POS DATA
                get_pos_containerData(); 
                //UPDATE - OVERALY HEADER TXT
                mainHeader_txt.innerHTML = "Secure Checkout";
                //SCROLL TO TOP OF POS CONTAINER
                document.getElementById("pos-container-inner-id").scrollTop = 0;
                //CHECK FOR A SINGLE SERVICE VENDOR AT CHECKOUT
                checkFor_singleServiceVendor(); 
            }
        }
        //IF SERVICE THAT REQUIRES ADDITIONAL INFO IS NOT PRESENT - OPEN DELIVERY/SHIPPING CONTAINER
        else {
            //CHECK FOR PRODUCTS TO SHIP/DELIVER
            if (productItem_slot1.style.display == "none" && productItem_slot2.style.display == "none" && productItem_slot3.style.display == "none" && productItem_slot4.style.display == "none" && productItem_slot5.style.display == "none") {
                //CLOSE - ALL URCARD SELECTIONS CONTAINERS
                allURCARD_selections_container.style.display = "none";
                //CLOSE - BOTTOM BTNS ORDER TOTAL CONTAINER
                bottomBtns_container1.style.display = "none"; 
                //REMOVE - OVERLAY HEADER CLOSE BTN 
                close_overlayContainer_btn.style.display = "none";
                //REMOVE - VALUES FROM POS FIRST/LAST NAME & PHONE # INPUTS
                user_firstName.value = ""; 
                user_lastName.value = ""; 
                user_phoneNumber.value = ""; 
                //REMOVE - DEBIT/CREDIT CARD CONTAINER | GOOGLE PAY CONTAINER | APPLE PAY CONTAINER
                debitCredit_container.style.display = "none";
                googlePay_container.style.display = "none";
                applePay_container.style.display = "none"; 
                //ADD - OVERLAY HEADER BACK BTN 
                back_overlayContainer_btn.style.display = "flex";
                //OPEN - POS CONTAINER
                allAssets_pos_container.style.display = "flex"; 
                //GET POS DATA
                get_pos_containerData(); 
                //UPDATE - OVERALY HEADER TXT
                mainHeader_txt.innerHTML = "Secure Checkout";
                //SCROLL TO TOP OF POS CONTAINER
                document.getElementById("pos-container-inner-id").scrollTop = 0;
                //CHECK FOR A SINGLE SERVICE VENDOR AT CHECKOUT
                checkFor_singleServiceVendor(); 
            } else {
                //CLOSE - ALL URCARD SELECTIONS CONTAINERS
                allURCARD_selections_container.style.display = "none";
                //CLOSE - BOTTOM BTNS ORDER TOTAL CONTAINER
                bottomBtns_container1.style.display = "none"; 
                //REMOVE - OVERLAY HEADER CLOSE BTN 
                close_overlayContainer_btn.style.display = "none";
                //ADD - OVERLAY HEADER BACK BTN 
                back_overlayContainer_btn.style.display = "flex";
                //GET SHIPPING/DELIVERY DATA
                get_productShipping_delivery_data();
                //OPEN - DELIVERY/SHIPPING CONTAINER
                allAssets_deliveryCarryout_shippingInfo_container.style.display = "flex";
                //SCROLL TO TOP OF CONTAINER
                let overlayContainer_inner2 = document.querySelector('.all-SelectedItems-inner-class').scrollTop = 0;
                //OPEN - BOTTOM BTNS ORDER TOTAL CONTAINER
                bottomBtns_container1.style.display = "block";
                //UPDATE - OVERLAY HEADER TXT
                mainHeader_txt.innerHTML = "UR Shipping Details";
            }
        }
    }
    //  //IF SHIPPING/DELIVERY CONTAINER IS OPEN
    else if (allAssets_deliveryCarryout_shippingInfo_container.style.display == "flex") {
        //CHECK SHIPPING/DELIVERY INPUTS BEFORE CONTINUING
        check_deliveryShipping_inputs();
        //PLACE - USER FIRST NAME INPUT DATA = POS FIRST NAME
        pos_firstName_input.value = user_firstName.value;
        //PLACE - USER LAST NAME INPUT DATA = POS LAST NAME
        pos_lastName_input.value = user_lastName.value;
        //PLACE - USER PHONE # INPUT DATA = POS PHONE #
        pos_phoneNumber_input.value = user_phoneNumber.value;
    }
}); //END - BOTTOM BUTTONS - NEXT BTN - EVENT LISTENER

//USER FIRST NAME INPUT 
const user_firstName = document.getElementById("user-firstName-id");
//USER LAST NAME INPUT 
const user_lastName = document.getElementById("user-lastName-id");
//USER PHONE NUMBER INPUT
const user_phoneNumber = document.getElementById("user-phoneNumber-id");
//USER STREET ADDRESS INPUT 
const user_streetAddress = document.getElementById("user-street-id");
//USER CITY INPUT 
const user_city = document.getElementById("user-city-id");
//USER STATE INPUT 
const user_state = document.getElementById("user-state-id");
//USER ZIPCODE INPUT 
const user_zipcode = document.getElementById("user-zipcode-id");
//USER BUILDING # INPUT 
const user_buildingApt = document.getElementById("user-buildingApt-id"); 

//FIRST NAME INPUT EVENT LISTENER
user_firstName.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
}); 
//LAST NAME INPUT EVENT LISTENER
user_lastName.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
}); 
//USER PHONE NUMBER INPUT EVENT LISTENER
user_phoneNumber.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
    user_phoneNumber.addEventListener('keydown', disallowNonNumericInput);
    user_phoneNumber.addEventListener('keyup', formatToPhone);
}); 
const disallowNonNumericInput = (evt) => {
    if (evt.ctrlKey) { return; }
    if (evt.key.length > 1) { return; }
    if (/[0-9.]/.test(evt.key)) { return; }
    evt.preventDefault();
}
const formatToPhone = (evt) => {
    const digits = evt.target.value.replace(/\D/g,'').substring(0,10);
    const areaCode = digits.substring(0,3);
    const prefix = digits.substring(3,6);
    const suffix = digits.substring(6,10);

    if (digits.length > 6) {evt.target.value = `(${areaCode}) ${prefix} - ${suffix}`;}
    else if(digits.length > 3) {evt.target.value = `(${areaCode}) ${prefix}`;}
    else if(digits.length > 0) {evt.target.value = `(${areaCode}`;}
};
//USER STREET ADDRESS INPUT  EVENT LISTENER
user_streetAddress.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') {
        e.target.style.border = '2px #2F9C95 solid'
    }
}); 
//USER CITY INPUT EVENT LISTENER
user_city.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
}); 
//USER STATE INPUT EVENT LISTENER
user_state.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
});
//USER ZIPCODE INPUT EVENT LISTENER
user_zipcode.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
});

//CHECK DELIVERY AND SHIPPING INPUTS 
function check_deliveryShipping_inputs() {
    //CHECK EACH INPUT BEFORE GOING TO POS
    //  //CHECK - USER FIRST NAME INPUT 
    if (user_firstName.value == "") {
        alert("Please enter your first name to continue");
        //CHANGE INPUT BORDER RED
        user_firstName.style.border = " solid 4px red"; 
        //SCROLL TO INPUT
        document.getElementById("deliveryShipping-innerContainer-id").scrollTop = 0;
    }
    //  //CHECK - USER LAST NAME INPUT
    else if (user_lastName.value == "") {
        alert("Please enter your last name to continue");
        //CHANGE INPUT BORDER RED
        user_lastName.style.border = " solid 4px red"; 
        //SCROLL TO INPUT
        document.getElementById("deliveryShipping-innerContainer-id").scrollTop = 0;
    }
    //  //CHECK - USER PHONE NUMBER INPUT
    else if (user_phoneNumber.value == "") {
        alert("Please enter your phone number to continue");
        //CHANGE INPUT BORDER RED
        user_phoneNumber.style.border = " solid 4px red"; 
        //SCROLL TO INPUT
        document.getElementById("deliveryShipping-innerContainer-id").scrollTop = 0;
    }
    //  //CHECK - USER STREET ADDRESS INPUT
    else if (user_streetAddress.value == "") {
        alert("Please enter your street address to continue");
        //CHANGE INPUT BORDER RED
        user_streetAddress.style.border = " solid 4px red"; 
        //SCROLL TO INPUT
        document.getElementById("deliveryShipping-innerContainer-id").scrollTo(0, 400);
    }
    //  //CHECK - USER CITY INPUT 
    else if (user_city.value == "") {
        alert("Please enter your city to continue");
        //CHANGE INPUT BORDER RED
        user_city.style.border = " solid 4px red"; 
        //SCROLL TO INPUT
        document.getElementById("deliveryShipping-innerContainer-id").scrollTo(0, 400);
    }
    //  //CHECK - USER STATE INPUT
    else if (user_state.value == "") {
        alert("Please enter your state to continue");
        //CHANGE INPUT BORDER RED
        user_state.style.border = " solid 4px red"; 
        //SCROLL TO INPUT
        document.getElementById("deliveryShipping-innerContainer-id").scrollTo(0, 800);
    }
    //  //CHECK - USER ZIPCODE INPUT 
    else if (user_zipcode.value == "") {
        alert("Please enter your zipcode to continue");
        //CHANGE INPUT BORDER RED
        user_zipcode.style.border = " solid 4px red"; 
        //SCROLL TO INPUT
        document.getElementById("deliveryShipping-innerContainer-id").scrollTo(0, 800);
    }

    else {                    
        //CLOSE - SHIPPING/DELIVERY CONTAINER 
        allAssets_deliveryCarryout_shippingInfo_container.style.display = "none"; 
        //REMOVE - BOTTOM BTNS ORDER TOTAL 
        bottomBtns_container1.style.display = "none"; 
        //OPEN - POS CONTAINER
        allAssets_pos_container.style.display = "flex";
        //GET POS DATA
        get_pos_containerData(); 
        //UPDATE - OVERALY HEADER TXT
        mainHeader_txt.innerHTML = "Secure Checkout";
        //CHECK FOR A SINGLE SERVICE VENDOR AT CHECKOUT
        checkFor_singleServiceVendor();
    }
} //END - CHECK DELIVERY AND SHIPPING INPUTS


//FINAL SELECTED SERVICE ITEMS CONTAINER 
const final_userSelections_serviceItems_container = document.getElementById("final-userSelections-serviceItems-container-id");
//FINAL - ITEM 1 
//FINAL SELECTED SERVICE ITEM - ITEM 1
const final_selectedService_item1 = document.getElementById("final-selectedService-item1-container-id");
//  //FINAL SELECTED SERVICE ITEM NAME - ITEM 1
const final_selectedService_item1_name = document.getElementById("final-selectedService-item1-name-id"); 
//  //FINAL SELECTED SERVICE ITEM PROVIDER - ITEM 1
const final_selectedService_item1_provider = document.getElementById("final-selectedService-item1-provider-id"); 
//  //FINAL SELECTED SERVICE ITEM COST - ITEM 1
const final_selectedService_item1_cost = document.getElementById("final-selectedService-item1-cost-id");
//  //FINAL SELECTED SERVICE ITEM ADDITIONAL INFO - ITEM 1 
const final_serviceItem1_alert = document.getElementById("final-serviceItem1-alert-id");
//  //FINAL SELECTED SERVICE ITEM 1 - EDIT BTN
const final_selectedService_item1_editBtn = document.getElementById("final-selectedService-item1-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  // 
//FINAL - ITEM 2 
//FINAL SELECTED SERVICE ITEM - ITEM 2
const final_selectedService_item2 = document.getElementById("final-selectedService-item2-container-id");
//  //FINAL SELECTED SERVICE ITEM NAME - ITEM 2
const final_selectedService_item2_name = document.getElementById("final-selectedService-item2-name-id"); 
//  //FINAL SELECTED SERVICE ITEM PROVIDER - ITEM 2
const final_selectedService_item2_provider = document.getElementById("final-selectedService-item2-provider-id"); 
//  //FINAL SELECTED SERVICE ITEM COST - ITEM 2
const final_selectedService_item2_cost = document.getElementById("final-selectedService-item2-cost-id");
//  //FINAL SELECTED SERVICE ITEM ADDITIONAL INFO - ITEM 2 
const final_serviceItem2_alert = document.getElementById("final-serviceItem2-alert-id");
//  //FINAL SELECTED SERVICE ITEM 2 - EDIT BTN
const final_selectedService_item2_editBtn = document.getElementById("final-selectedService-item2-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL - ITEM 3 
//FINAL SELECTED SERVICE ITEM - ITEM 3
const final_selectedService_item3 = document.getElementById("final-selectedService-item3-container-id");
//  //FINAL SELECTED SERVICE ITEM NAME - ITEM 3
const final_selectedService_item3_name = document.getElementById("final-selectedService-item3-name-id"); 
//  //FINAL SELECTED SERVICE ITEM PROVIDER - ITEM 3
const final_selectedService_item3_provider = document.getElementById("final-selectedService-item3-provider-id"); 
//  //FINAL SELECTED SERVICE ITEM COST - ITEM 3
const final_selectedService_item3_cost = document.getElementById("final-selectedService-item3-cost-id");
//  //FINAL SELECTED SERVICE ITEM ADDITIONAL INFO - ITEM 3 
const final_serviceItem3_alert = document.getElementById("final-serviceItem3-alert-id");
//  //FINAL SELECTED SERVICE ITEM 3 - EDIT BTN
const final_selectedService_item3_editBtn = document.getElementById("final-selectedService-item3-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL - ITEM 4 
//FINAL SELECTED SERVICE ITEM - ITEM 4
const final_selectedService_item4 = document.getElementById("final-selectedService-item4-container-id");
//  //FINAL SELECTED SERVICE ITEM NAME - ITEM 4
const final_selectedService_item4_name = document.getElementById("final-selectedService-item4-name-id"); 
//  //FINAL SELECTED SERVICE ITEM PROVIDER - ITEM 4
const final_selectedService_item4_provider = document.getElementById("final-selectedService-item4-provider-id"); 
//  //FINAL SELECTED SERVICE ITEM COST - ITEM 4
const final_selectedService_item4_cost = document.getElementById("final-selectedService-item4-cost-id");
//  //FINAL SELECTED SERVICE ITEM ADDITIONAL INFO - ITEM 4 
const final_serviceItem4_alert = document.getElementById("final-serviceItem4-alert-id");
//  //FINAL SELECTED SERVICE ITEM 4 - EDIT BTN
const final_selectedService_item4_editBtn = document.getElementById("final-selectedService-item4-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL - ITEM 5 
//FINAL SELECTED SERVICE ITEM - ITEM 5
const final_selectedService_item5 = document.getElementById("final-selectedService-item5-container-id");
//  //FINAL SELECTED SERVICE ITEM NAME - ITEM 5
const final_selectedService_item5_name = document.getElementById("final-selectedService-item5-name-id"); 
//  //FINAL SELECTED SERVICE ITEM PROVIDER - ITEM 5
const final_selectedService_item5_provider = document.getElementById("final-selectedService-item5-provider-id"); 
//  //FINAL SELECTED SERVICE ITEM COST - ITEM 5
const final_selectedService_item5_cost = document.getElementById("final-selectedService-item5-cost-id");
//  //FINAL SELECTED SERVICE ITEM ADDITIONAL INFO - ITEM 5 
const final_serviceItem5_alert = document.getElementById("final-serviceItem5-alert-id");
//  //FINAL SELECTED SERVICE ITEM 5 - EDIT BTN
const final_selectedService_item5_editBtn = document.getElementById("final-selectedService-item5-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL - ITEM 6 
//FINAL SELECTED SERVICE ITEM - ITEM 6
const final_selectedService_item6 = document.getElementById("final-selectedService-item6-container-id");
//  //FINAL SELECTED SERVICE ITEM NAME - ITEM 6
const final_selectedService_item6_name = document.getElementById("final-selectedService-item6-name-id"); 
//  //FINAL SELECTED SERVICE ITEM PROVIDER - ITEM 6
const final_selectedService_item6_provider = document.getElementById("final-selectedService-item6-provider-id"); 
//  //FINAL SELECTED SERVICE ITEM COST - ITEM 6
const final_selectedService_item6_cost = document.getElementById("final-selectedService-item6-cost-id");
//  //FINAL SELECTED SERVICE ITEM ADDITIONAL INFO - ITEM 6 
const final_serviceItem6_alert = document.getElementById("final-serviceItem6-alert-id");
//  //FINAL SELECTED SERVICE ITEM 6 - EDIT BTN
const final_selectedService_item6_editBtn = document.getElementById("final-selectedService-item6-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL - ITEM 7 
//FINAL SELECTED SERVICE ITEM - ITEM 7
const final_selectedService_item7 = document.getElementById("final-selectedService-item7-container-id");
//  //FINAL SELECTED SERVICE ITEM NAME - ITEM 7
const final_selectedService_item7_name = document.getElementById("final-selectedService-item7-name-id"); 
//  //FINAL SELECTED SERVICE ITEM PROVIDER - ITEM 7
const final_selectedService_item7_provider = document.getElementById("final-selectedService-item7-provider-id"); 
//  //FINAL SELECTED SERVICE ITEM COST - ITEM 7
const final_selectedService_item7_cost = document.getElementById("final-selectedService-item7-cost-id");
//  //FINAL SELECTED SERVICE ITEM ADDITIONAL INFO - ITEM 7 
const final_serviceItem7_alert = document.getElementById("final-serviceItem7-alert-id");
//  //FINAL SELECTED SERVICE ITEM 7 - EDIT BTN
const final_selectedService_item7_editBtn = document.getElementById("final-selectedService-item7-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //


//FINAL SELECTED PRODUCT ITEMS CONTAINER 
const final_userSelections_productItems_container = document.getElementById("final-userSelections-productItems-container-id");
//FINAL - ITEM 1 
//FINAL SELECTED PRODUCT ITEM - ITEM 1
const final_selectedProduct_item1 = document.getElementById("final-selectedProduct-item1-container-id");
//  //FINAL SELECTED PRODUCT ITEM NAME - ITEM 1
const final_selectedProduct_item1_name = document.getElementById("final-selectedProduct-item1-name-id"); 
//  //FINAL SELECTED PRODUCT ITEM QUANTITY - ITEM 1 
const final_selectedProduct_item1_quantity = document.getElementById("final-selectedProduct-item1-quantity-id");
//  //FINAL SELECTED PRODUCT ITEM COST - ITEM 1
const final_selectedProduct_item1_cost = document.getElementById("final-selectedProduct-item1-cost-id");
//  //FINAL SELECTED PRODUCT ITEM 1 - EDIT BTN
const final_selectedProduct_item1_editBtn = document.getElementById("final-selectedProduct-item1-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL - ITEM 2 
//FINAL SELECTED PRODUCT ITEM - ITEM 2
const final_selectedProduct_item2 = document.getElementById("final-selectedProduct-item2-container-id");
//  //FINAL SELECTED PRODUCT ITEM NAME - ITEM 2
const final_selectedProduct_item2_name = document.getElementById("final-selectedProduct-item2-name-id"); 
//  //FINAL SELECTED PRODUCT ITEM QUANTITY - ITEM 2 
const final_selectedProduct_item2_quantity = document.getElementById("final-selectedProduct-item2-quantity-id");
//  //FINAL SELECTED PRODUCT ITEM COST - ITEM 2
const final_selectedProduct_item2_cost = document.getElementById("final-selectedProduct-item2-cost-id");
//  //FINAL SELECTED PRODUCT ITEM 2 - EDIT BTN
const final_selectedProduct_item2_editBtn = document.getElementById("final-selectedProduct-item2-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL - ITEM 3 
//FINAL SELECTED PRODUCT ITEM - ITEM 3
const final_selectedProduct_item3 = document.getElementById("final-selectedProduct-item3-container-id");
//  //FINAL SELECTED PRODUCT ITEM NAME - ITEM 3
const final_selectedProduct_item3_name = document.getElementById("final-selectedProduct-item3-name-id"); 
//  //FINAL SELECTED PRODUCT ITEM QUANTITY - ITEM 3 
const final_selectedProduct_item3_quantity = document.getElementById("final-selectedProduct-item3-quantity-id");
//  //FINAL SELECTED PRODUCT ITEM COST - ITEM 3
const final_selectedProduct_item3_cost = document.getElementById("final-selectedProduct-item3-cost-id");
//  //FINAL SELECTED PRODUCT ITEM 3 - EDIT BTN
const final_selectedProduct_item3_editBtn = document.getElementById("final-selectedProduct-item3-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL - ITEM 4 
//FINAL SELECTED PRODUCT ITEM - ITEM 4
const final_selectedProduct_item4 = document.getElementById("final-selectedProduct-item4-container-id");
//  //FINAL SELECTED PRODUCT ITEM NAME - ITEM 4
const final_selectedProduct_item4_name = document.getElementById("final-selectedProduct-item4-name-id"); 
//  //FINAL SELECTED PRODUCT ITEM QUANTITY - ITEM 4 
const final_selectedProduct_item4_quantity = document.getElementById("final-selectedProduct-item4-quantity-id");
//  //FINAL SELECTED PRODUCT ITEM COST - ITEM 4
const final_selectedProduct_item4_cost = document.getElementById("final-selectedProduct-item4-cost-id");
//  //FINAL SELECTED PRODUCT ITEM 4 - EDIT BTN
const final_selectedProduct_item4_editBtn = document.getElementById("final-selectedProduct-item4-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL - ITEM 5 
//FINAL SELECTED PRODUCT ITEM - ITEM 5
const final_selectedProduct_item5 = document.getElementById("final-selectedProduct-item5-container-id");
//  //FINAL SELECTED PRODUCT ITEM NAME - ITEM 5
const final_selectedProduct_item5_name = document.getElementById("final-selectedProduct-item5-name-id"); 
//  //FINAL SELECTED PRODUCT ITEM QUANTITY - ITEM 5 
const final_selectedProduct_item5_quantity = document.getElementById("final-selectedProduct-item5-quantity-id");
//  //FINAL SELECTED PRODUCT ITEM COST - ITEM 5
const final_selectedProduct_item5_cost = document.getElementById("final-selectedProduct-item5-cost-id");
//  //FINAL SELECTED PRODUCT ITEM 5 - EDIT BTN
const final_selectedProduct_item5_editBtn = document.getElementById("final-selectedProduct-item5-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL - ITEM 6 
//FINAL SELECTED PRODUCT ITEM - ITEM 6
const final_selectedProduct_item6 = document.getElementById("final-selectedProduct-item6-container-id");
//  //FINAL SELECTED PRODUCT ITEM NAME - ITEM 6
const final_selectedProduct_item6_name = document.getElementById("final-selectedProduct-item6-name-id"); 
//  //FINAL SELECTED PRODUCT ITEM QUANTITY - ITEM 6 
const final_selectedProduct_item6_quantity = document.getElementById("final-selectedProduct-item6-quantity-id");
//  //FINAL SELECTED PRODUCT ITEM COST - ITEM 6
const final_selectedProduct_item6_cost = document.getElementById("final-selectedProduct-item6-cost-id");
//  //FINAL SELECTED PRODUCT ITEM 6 - EDIT BTN
const final_selectedProduct_item6_editBtn = document.getElementById("final-selectedProduct-item6-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//FINAL - ITEM 7 
//FINAL SELECTED PRODUCT ITEM - ITEM 7
const final_selectedProduct_item7 = document.getElementById("final-selectedProduct-item7-container-id");
//  //FINAL SELECTED PRODUCT ITEM NAME - ITEM 7
const final_selectedProduct_item7_name = document.getElementById("final-selectedProduct-item7-name-id"); 
//  //FINAL SELECTED PRODUCT ITEM QUANTITY - ITEM 7 
const final_selectedProduct_item7_quantity = document.getElementById("final-selectedProduct-item7-quantity-id");
//  //FINAL SELECTED PRODUCT ITEM COST - ITEM 7
const final_selectedProduct_item7_cost = document.getElementById("final-selectedProduct-item7-cost-id");
//  //FINAL SELECTED PRODUCT ITEM 7 - EDIT BTN
const final_selectedProduct_item7_editBtn = document.getElementById("final-selectedProduct-item7-editBtn-id");
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
//USER ADDRESS CONTAINER
const userAddress_container = document.getElementById("userAddress-main-container-id"); 
//USER NAME & PHONE NUMBER CONTAINER userName-phone-container-id
const userName_phone_container = document.getElementById("userName-phone-container-id"); 
//USER FIRST NAME INPUT
const pos_firstName_input = document.getElementById("user-firstName-pos-id"); 
//USER LAST NAME INPUT 
const pos_lastName_input = document.getElementById("user-lastName-pos-id"); 
//USER PHONE NUMBER INPUT 
const pos_phoneNumber_input = document.getElementById("user-phoneNumber-pos-id"); 
//SUBTOTAL TXT
const subtotal_text = document.getElementById("subtotal-text-id"); 
//SHIPPING COST TXT 
var shippingCost_text = document.getElementById("shippingCost-text-id"); 
var shippingCost_number = Number(7.90); //USPS RATE $7.90
//TAXES COST TXT
var taxes_text = document.getElementById("taxes-text-id");
//TAX RATE - PERCENTAGE BASED ON HAMPTON ROADS RATE
var tax_rate; 
var tax_number = Number(6); //6%
//POS RATE
var pos_rate;
var pos_cost = Number(0.30); //$0.30
var pos_percentage = Number(3.3); //3.3% Square POS
//UR PLATFORM RATE: 10%
var urPlatform_rate = Number(10);
//FEES TEXT
var fees_text = document.getElementById("fees-text-id");
//FEE RATE
var fee_rate; 
var order_total_innerHTML = order_total_txt.innerText; 
var order_total_number = Number(order_total_innerHTML).toFixed(2);
//GRAND TOTAL TXT
var grand_total_txt = document.getElementById("grand-total-txt-id"); 
var grand_total_txt_number; 
//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

//CONTINUE BTN CONTAINER 
const continueBtn_container = document.getElementById("continueBtn-container-id"); 
const continueBtn_1 = document.getElementById("continueBtn-1-id"); 
//CONTINUE BTN - EVENT LISTENER
continueBtn_1.addEventListener("click", () => {
    //PERFORM FINAL CHECK
    finalCheck_all_remainingInputs(); 
}); 

//CHECK FOR SINGLE SERVICE VENDOR - FUNCTION
function checkFor_singleServiceVendor() {
    //IF ORDER TOTAL TXT = PENDING && SERVICE SLOTS ARE PRESENT
    if (order_total_txt.innerHTML == "Pending" && grand_total_txt.innerHTML == "Pending" && final_selectedService_item1.style.display == "block") {
        //REMOVE - PAYEMENT OPTIONS CONTAINER
        paymentOptions_container.style.display = "none"; 
        //ADD - CONTINUE BTN CONTAINER
        continueBtn_container.style.display = "block"; 
    } else {
        //REMOVE - CONTINUE BTN CONTAINER 
        continueBtn_container.style.display = "none";
        //ADD - PAYEMENT OPTIONS CONTAINER 
        paymentOptions_container.style.display = "block";
    }
} 


//PAYMENT OPTIONS CONTAINER 
const paymentOptions_container = document.getElementById("paymentOptions-btn-main-container-id"); 
//DEBIT/CREDIT CONTAINER - CLOSE BTN
const debitCredit_close_btn = document.getElementById("debitCredit-close-btn-id"); 
debitCredit_close_btn.addEventListener("click", () => {
    //CLOSE - DEBIT/CREDIT CONTAINER
    debitCredit_container.style.display = "none"; 
    //ADD - PAYMENT OPTIONS CONTAINER 
    paymentOptions_container.style.display = "block"; 
    //CLEAR ALL DEBIT/CREDIT CARD INPUTS
    //  //CARDHOLDER NAME 
    cardHolder_name_input.value = ""; 
    //  //CARD NUMBER 
    cardholder_number_input.value = ""; 
    //  //EXPIRATON DATE
    cardExpiration_date_input.value = "";
    //  //SECURITY CODE 
    cvc_securityCode_input.value = ""; 

}); 


//DEBIT/CREDIT CARD BTN 
const debitCredit_card_btn = document.getElementById("debitCredit-card-btn-id"); 
//DEBIT/CREDIT CARD HOLDER'S NAME
const cardHolder_name_input = document.getElementById("cardHolder-name-id"); 
//DEBIT/CREDIT CARD EXPIRATION DATE
const cardExpiration_date_input = document.getElementById("cardExpiration-date-id"); 
//DEBIT/CREDIT CARD CVC DATE 
const cvc_securityCode_input = document.getElementById("cvc-id"); 
//DEBIT/CREDIT CARD NUMBER INPUT
const cardholder_number_input = document.getElementById("cardholder-number-input-id"); 

//DEBIT/CREDIT CARD NUMBER INPUT - EVENT LISTENER 
cardholder_number_input.addEventListener("input", (e) => {
    // 1. Remove all non-numeric characters
    let value = e.target.value.replace(/\D/g, '');
    
    // 2. Limit input to 16 digits (or up to 19 for some cards)
    value = value.substring(0, 16);
    
    // 3. Add a dash after every 4 digits
    const parts = value.match(/.{1,4}/g);
    
    // 4. Update the input field
    e.target.value = parts ? parts.join('-') : '';
});
//DEBIT/CREDIT CARD CANTAINER 
const debitCredit_container = document.getElementById("debitCredit-container-id"); 
const pos_container_inner = document.getElementById("pos-container-inner-id"); 
//DEBIT/CREDIT BTN - EVENT LISTENER
debitCredit_card_btn.addEventListener("click", () => {
    //CHECK FOR FIRST/LAST NAME & PHONE NUMBER INPUTS
    check_pos_firstLastname_phoneNum_inputs(); 

    //IF POS USER NAME INPUT IS EMPTY
    if (pos_firstName_input.value == "" || pos_lastName_input.value == "" || pos_phoneNumber_input.value == "" && userName_phone_container.style.display == "block") {
        //REMOVE - DEBIT/CREDIT CONTAINER
        debitCredit_container.style.display = "none";  
        //OPEN - PAYMENT OPTIONS CONTAINER
        paymentOptions_container.style.display = "block";
    } else {
        //REMOVE - PAYMENT OPTIONS CONTAINER
        paymentOptions_container.style.display = "none";
        //OPEN - DEBIT/CREDIT CONTAINER
        debitCredit_container.style.display = "block"; 
        //SCROLL TO - DEBIT/CREDIT INPUTS
        pos_container_inner.scrollTo({
            top: document.getElementById("paymentProcessor-container-id").offsetTop
        });
    }
});


//GOOGLE PAY BTN 
const googlePay_btn = document.getElementById("googlePay-btn-id"); 
//GOOGLE PAY CONTAINER
const googlePay_container = document.getElementById("googlePay-container-id"); 
//GOOGLE PAY BTN EVENT LISTENER
googlePay_btn.addEventListener("click", () => {
    //CHECK FOR FIRST/LAST NAME & PHONE NUMBER INPUTS
    check_pos_firstLastname_phoneNum_inputs(); 

    //IF POS USER NAME INPUT IS EMPTY
    if (pos_firstName_input.value == "" || pos_lastName_input.value == "" || pos_phoneNumber_input.value == "" && userName_phone_container.style.display == "block") {
        //REMOVE - GOOGLE PAY CONTAINER
        googlePay_container.style.display = "none";  
        //OPEN - PAYMENT OPTIONS CONTAINER
        paymentOptions_container.style.display = "block";
    } else {
        //REMOVE - PAYMENT OPTIONS CONTAINER
        paymentOptions_container.style.display = "none";
        //OPEN - GOOGLE PAY CONTAINER
        googlePay_container.style.display = "block"; 
        //SCROLL TO - GOOGLE PAY CONTAINER
        pos_container_inner.scrollTo({
            top: document.getElementById("paymentProcessor-container-id").offsetTop
        });
    }
}); 
//GOOGLE PAY - CLOSE BTN 
const googlePay_close_btn = document.getElementById("googlePay-close-btn-id"); 
//GOOGLE PAY CLOSE BTN - EVENT LISTENER
googlePay_close_btn.addEventListener("click", () => {
    //CLOSE - GOOGLE PAY CONTAINER
    googlePay_container.style.display = "none"; 
    //ADD - PAYMENT OPTIONS CONTAINER 
    paymentOptions_container.style.display = "block"; 
});


//APPLE PAY BTN 
const applePay_btn = document.getElementById("applePay-btn-id");
//APPLE PAY CONTAINER
const applePay_container = document.getElementById("applePay-container-id"); 
//APPLE PAY BTN - EVENT LISTENER
applePay_btn.addEventListener("click", () => {
    //CHECK FOR FIRST/LAST NAME & PHONE NUMBER INPUTS
    check_pos_firstLastname_phoneNum_inputs(); 

    //IF POS USER NAME INPUT IS EMPTY
    if (pos_firstName_input.value == "" || pos_lastName_input.value == "" || pos_phoneNumber_input.value == "" && userName_phone_container.style.display == "block") {
        //REMOVE - GOOGLE PAY CONTAINER
        applePay_container.style.display = "none";  
        //OPEN - PAYMENT OPTIONS CONTAINER
        paymentOptions_container.style.display = "block";
    } else {
        //REMOVE - PAYMENT OPTIONS CONTAINER
        paymentOptions_container.style.display = "none";
        //OPEN - GOOGLE PAY CONTAINER
        applePay_container.style.display = "block"; 
        //SCROLL TO - GOOGLE PAY CONTAINER
        pos_container_inner.scrollTo({
            top: document.getElementById("paymentProcessor-container-id").offsetTop
        });
    }
});
//APPLE PAY CLOSE BTN
const applePay_close_btn = document.getElementById("applePay-close-btn-id"); 
//APPLE PAY CLOSE BTN - EVENT LISTENER 
applePay_close_btn.addEventListener("click", () => {
    //CLOSE - DEBIT/CREDIT CONTAINER
    applePay_container.style.display = "none"; 
    //ADD - PAYMENT OPTIONS CONTAINER 
    paymentOptions_container.style.display = "block"; 
}); 

//BILLING ADDRESS CONTAINER
const billing_address_container = document.getElementById("billing-address-container-id"); 
//BILLING ADDRESS - STREET ADDRESS
const billingAddress_user_street = document.getElementById("billingAddress-user-street-id"); 
//BILLING ADDRESS - CITY
const billingAddress_user_city = document.getElementById("billingAddress-user-city-id"); 
//BILLING ADDRESS - STATE
const billingAddress_user_state = document.getElementById("billingAddress-user-state-id"); 
//BILLING ADDRESS - ZIPCODE
const billingAddress_user_zipcode = document.getElementById("billingAddress-user-zipcode-id"); 
//BILLING ADDRESS - BUILDING # 
const billingAddress_user_buildingApt = document.getElementById("billingAddress-user-buildingApt-id");
//BILLING ADDRESS - SAME AS SHIPPING INPUT CONTAINER
const cardholder_sameAddress_btn_container = document.getElementById("cardholder-sameAddress-btn-container-id"); 
//BILLING ADDRESS - SAME AS SHIPPING INPUT
const billingAddress_sameAsShipping_input = document.getElementById("billingAddress-sameAsShipping-input-id");
//BILLING ADDRESS - SAME AS SHIPPING INPUT - EVENT LISTENER 
billingAddress_sameAsShipping_input.addEventListener("click", () => {
    //IF INPUT IS CHECKBOX IS CHECKED
    if (billingAddress_sameAsShipping_input.checked) {
        //REMOVE - BILLING ADDRESS CONTAINER 
        billing_address_container.style.display = "none";
        //MAKE - BILLING STREET ADDRESS = USER STREET ADDRESS
        billingAddress_user_street.value = user_streetAddress.value; 
        //MAKE - BILLING CITY = USER CITY 
        billingAddress_user_city.value = user_city.value; 
        //MAKE - BILLING STATE = USER STATE
        billingAddress_user_state.value = user_state.value; 
        //MAKE - BILLING ZIPCODE = USER ZIPCODE 
        billingAddress_user_zipcode.value = user_zipcode.value;
        //MAKE - BILLING BUILDING # = USER BUILDING APT
        billingAddress_user_buildingApt.value = user_buildingApt.value; 
    } else {
        //OPEN - BILLING ADDRESS CONTAINER 
        billing_address_container.style.display = "block";
        //MAKE - BILLING STREET ADDRESS = BLANK
        billingAddress_user_street.value = ""; 
        //MAKE - BILLING CITY = BLANK
        billingAddress_user_city.value = ""; 
        //MAKE - BILLING STATE = BLANK
        billingAddress_user_state.value = ""; 
        //MAKE - BILLING ZIPCODE = BLANK
        billingAddress_user_zipcode.value = "";
        //MAKE - BILLING BUILDING # = BLANK
        billingAddress_user_buildingApt.value = ""; 
    }
}); 

//POS FIRST NAME INPUT EVENT LISTENER
pos_firstName_input.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
});

//POS LAST NAME INPUT EVENT LISTENER
pos_lastName_input.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
});

//PHONE NUMBER INPUT EVENT LISTENER
pos_phoneNumber_input.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
        //FORMAT PHONE NUMBER INPUT
        pos_phoneNumber_input.addEventListener('keydown', disallowNonNumericInput);
        pos_phoneNumber_input.addEventListener('keyup', formatToPhone);
    }
});

//CHECK POS FIRST/LAST NAME & PHONE NUMBER INPUTS FUNCTION
function check_pos_firstLastname_phoneNum_inputs() {
    //CHECK - FIRST NAME INPUT VALUES
    if (pos_firstName_input.value == "" && user_firstName.value == "") {
        alert("Please enter your first name to checkout");
        //CHANGE INPUT BORDER RED
        pos_firstName_input.style.border = " solid 4px red"; 
        //SCROLL TO INPUT
        document.getElementById("pos-container-inner-id").scrollTop = 0;
    }

    //CHECK - LAST NAME INPUT VALUES
    else if (pos_lastName_input.value == "" && user_lastName.value == "") {
        alert("Please enter your last name to checkout");
        //CHANGE INPUT BORDER RED
        pos_lastName_input.style.border = " solid 4px red"; 
        //SCROLL TO INPUT
        document.getElementById("pos-container-inner-id").scrollTop = 0;
    }

    //CHECK - PHONE NUMBER VALUES
    else if (pos_phoneNumber_input.value == "" && user_phoneNumber.value == "") {
        alert("Please enter your phone number to checkout");
        //CHANGE INPUT BORDER RED
        pos_phoneNumber_input.style.border = " solid 4px red"; 
        //SCROLL TO INPUT
        document.getElementById("pos-container-inner-id").scrollTop = 0;
    }
}

//GET POS CONTAINER DATA FUNCTION
function get_pos_containerData() {
    //GET - USER ADDRESS FOR ADDRESS TXT 
    user_address_txt.innerHTML = user_streetAddress.value + ", " + user_city.value + ", " + user_state.value + " " + user_zipcode.value;

    //SUBTOTAL TXT = ORDER TOTAL TXT
    subtotal_text.innerHTML = order_total_txt.innerHTML; 
    
    //SHIPPING COST TXT - DETERMINE IF THERE ARE SHIPPING COST
    if (productItem_slot1.style.display == "none" && productItem_slot2.style.display == "none" && productItem_slot3.style.display == "none" && productItem_slot4.style.display == "none" && productItem_slot5.style.display == "none") {
        //MAKE SHIPPING COST = 0
        shippingCost_text.innerHTML = Number(0.00).toFixed(2);
        //REMOVE - USER ADDRESS CONTAINER
        userAddress_container.style.display = "none"; 
        //REMOVE - 'SAME AS SHIPPING ADDRESS' INPUT CONTAINER
        cardholder_sameAddress_btn_container.style.display = "none"; 
        //UNCEHCK - 'SAME AS SHIPPING ADDRESS' INPUT
        billingAddress_sameAsShipping_input.checked = false; 
        //ADD - BILLING ADDRESS CONTAINER
        billing_address_container.style.display = "block";
        //ADD - USER NAME & PHONE NUMBER CONTAINER
        userName_phone_container.style.display = "block";
        //MAKE - POS FIRST NAME VALUE = USER FIRST NAME VALUE 
        pos_firstName_input.value = user_firstName.value;
        //MAKE - POS LAST NAME VALUE = USER LAST NAME VALUE 
        pos_lastName_input.value = user_lastName.value;
        //MAKE - POS PHONE # VALUE = USER PHONE # VALUE 
        pos_phoneNumber_input.value = user_phoneNumber.value;
    } else {
        //ADD - SHIPPING COSTS
        shippingCost_text.innerHTML = shippingCost_number.toFixed(2);
        //ADD - USER ADDRESS CONTAINER
        userAddress_container.style.display = "block"; 
        //REMOVE - USER NAME & PHONE NUMBER CONTAINER
        userName_phone_container.style.display = "none"; 
        //ADD - 'SAME AS SHIPPING ADDRESS' INPUT
        cardholder_sameAddress_btn_container.style.display = "flex"; 
        //UNCEHCK - 'SAME AS SHIPPING ADDRESS' INPUT
        billingAddress_sameAsShipping_input.checked = false; 
        //ADD - BILLING ADDRESS CONTAINER
        billing_address_container.style.display = "block";
    }

    //TAXES - DETERMINE TAX RATE
    let tax_rate = (tax_number / 100) * Number(order_total_txt.innerHTML);
    //DETERMINE FEES /// FEE RATE = ORDER TOTAL * URCARD PLATFORM RATE + POS RATE
    let pos_rate = (pos_percentage / 100) + pos_cost;  
    let fee_rate = Number(order_total_txt.innerHTML) * (urPlatform_rate / 100) + Number(pos_rate);
    //DETEMINE GRAND TOTAL
    let grand_total_txt_number = Number(subtotal_text.innerHTML) + Number(shippingCost_text.innerHTML) + Number(taxes_text.innerHTML); 

    //DETERMINE GRAND TOTAL /// SUBTOTAL + SHIPPING + TAXES || DETERMINE FEES || DETERMINE TAXES
    //  //IF ORDER TOTAL TXT = PENDING 
    if (order_total_txt.innerHTML == "Pending") {
        grand_total_txt.innerHTML = "Pending";
        taxes_text.innerHTML = "0.00"
        fees_text.innerHTML = "0.00";
    } else {
        //GRAND TOTAL 
        grand_total_txt.innerHTML = Number(grand_total_txt_number).toFixed(2);
        //TAXES 
        taxes_text.innerHTML = tax_rate.toFixed(2); 
        //FEES
        fees_text.innerHTML = Number(fee_rate).toFixed(2);
    } 

    
    //GET - FINAL SELECTED ITEMS SLOTS
    //  //CHECK FOR OPEN SERVICE ITEMS - CHECK SELECTED ITEM SLOT 1
    if (serviceItem_slot1.style.display == "block") {
        //OPEN - ALL FINAL SERVICE SLOTS CONTAINER
        final_userSelections_serviceItems_container.style.display = "block";
        //OPEN - FINAL SERVICE ITEM SLOT 1
        final_selectedService_item1.style.display = "block"; 
        //PLACE - SLOT 1 DATA INTO FINAL SERVICE ITEM 1
        //  //PLACE - SERVICE ITEM NAME
        final_selectedService_item1_name.innerHTML = selectedService_item1_name_txt.innerHTML;
        //  //PLACE - SERVICE PROVIDER 
        final_selectedService_item1_provider.innerHTML = providerName_serviceItem1_txt.innerHTML; 
        //  //PLACE - SERVICE COST 
        final_selectedService_item1_cost.innerHTML = selectedService_item1_slot1_cost.innerHTML; 
        //  //CHECK FOR ADDITIONAL INFO ALERT MSG 
        if (selectedService_item1_additionalInfoAlert_txt.style.display == "block") {
            //OPEN - FINAL SERVICE ITEM 1 ADDITONAL INFO
            final_serviceItem1_alert.style.display = "block"; 
        } else {
            //REMOVE - FINAL SERVICE ITEM 1 ADDITONAL INFO
            final_serviceItem1_alert.style.display = "none"; 
        }
    } //END - CHECK FOR OPEN SERVICE ITEMS - CHECK SELECTED ITEM SLOT 1
    //  //IF SERVICE SLOT 1 IS NOT PRESENT
    else if (serviceItem_slot1.style.display == "none") {
        //OPEN - FINAL SERVICE ITEM SLOT 1
        final_selectedService_item1.style.display = "none"; 
    }

    //  //CHECK FOR OPEN SERVICE ITEMS - CHECK SELECTED ITEM SLOT 2
    if (serviceItem_slot2.style.display == "block") {
        //OPEN - ALL FINAL SERVICE SLOTS CONTAINER
        final_userSelections_serviceItems_container.style.display = "block";
        //OPEN - FINAL SERVICE ITEM SLOT 2
        final_selectedService_item2.style.display = "block"; 
        //PLACE - SLOT 2 DATA INTO FINAL SERVICE ITEM 2
        //  //PLACE - SERVICE ITEM NAME
        final_selectedService_item2_name.innerHTML = selectedService_item2_name_txt.innerHTML;
        //  //PLACE - SERVICE PROVIDER 
        final_selectedService_item2_provider.innerHTML = providerName_serviceItem2_txt.innerHTML; 
        //  //PLACE - SERVICE COST 
        final_selectedService_item2_cost.innerHTML = selectedService_item2_slot2_cost.innerHTML; 
        //  //CHECK FOR ADDITIONAL INFO ALERT MSG 
        if (selectedService_item2_additionalInfoAlert_txt.style.display == "block") {
            //OPEN - FINAL SERVICE ITEM 2 ADDITONAL INFO
            final_serviceItem2_alert.style.display = "block"; 
        } else {
            //REMOVE - FINAL SERVICE ITEM 2 ADDITONAL INFO
            final_serviceItem2_alert.style.display = "none"; 
        }
    } //END - CHECK FOR OPEN SERVICE ITEMS - CHECK SELECTED ITEM SLOT 2
    //  //IF SERVICE SLOT 2 IS NOT PRESENT
    else if (serviceItem_slot2.style.display == "none") {
        //OPEN - FINAL SERVICE ITEM SLOT 2
        final_selectedService_item2.style.display = "none"; 
    }

    //  //CHECK FOR OPEN SERVICE ITEMS - CHECK SELECTED ITEM SLOT 3
    if (serviceItem_slot3.style.display == "block") {
        //OPEN - ALL FINAL SERVICE SLOTS CONTAINER
        final_userSelections_serviceItems_container.style.display = "block";
        //OPEN - FINAL SERVICE ITEM SLOT 3
        final_selectedService_item3.style.display = "block"; 
        //PLACE - SLOT 3 DATA INTO FINAL SERVICE ITEM 3
        //  //PLACE - SERVICE ITEM NAME
        final_selectedService_item3_name.innerHTML = selectedService_item3_name_txt.innerHTML;
        //  //PLACE - SERVICE PROVIDER 
        final_selectedService_item3_provider.innerHTML = providerName_serviceItem3_txt.innerHTML; 
        //  //PLACE - SERVICE COST 
        final_selectedService_item3_cost.innerHTML = selectedService_item3_slot3_cost.innerHTML; 
        //  //CHECK FOR ADDITIONAL INFO ALERT MSG 
        if (selectedService_item3_additionalInfoAlert_txt.style.display == "block") {
            //OPEN - FINAL SERVICE ITEM 3 ADDITONAL INFO
            final_serviceItem3_alert.style.display = "block"; 
        } else {
            //REMOVE - FINAL SERVICE ITEM 3 ADDITONAL INFO
            final_serviceItem3_alert.style.display = "none"; 
        }
    } //END - CHECK FOR OPEN SERVICE ITEMS - CHECK SELECTED ITEM SLOT 3
    //  //IF SERVICE SLOT 3 IS NOT PRESENT
    else if (serviceItem_slot3.style.display == "none") {
        //OPEN - FINAL SERVICE ITEM SLOT 3
        final_selectedService_item3.style.display = "none"; 
    }

    //  //CHECK FOR OPEN SERVICE ITEMS - CHECK SELECTED ITEM SLOT 4
    if (serviceItem_slot4.style.display == "block") {
        //OPEN - ALL FINAL SERVICE SLOTS CONTAINER
        final_userSelections_serviceItems_container.style.display = "block";
        //OPEN - FINAL SERVICE ITEM SLOT 4
        final_selectedService_item4.style.display = "block"; 
        //PLACE - SLOT 4 DATA INTO FINAL SERVICE ITEM 4
        //  //PLACE - SERVICE ITEM NAME
        final_selectedService_item4_name.innerHTML = selectedService_item4_name_txt.innerHTML;
        //  //PLACE - SERVICE PROVIDER 
        final_selectedService_item4_provider.innerHTML = providerName_serviceItem4_txt.innerHTML; 
        //  //PLACE - SERVICE COST 
        final_selectedService_item4_cost.innerHTML = selectedService_item4_slot4_cost.innerHTML; 
        //  //CHECK FOR ADDITIONAL INFO ALERT MSG 
        if (selectedService_item4_additionalInfoAlert_txt.style.display == "block") {
            //OPEN - FINAL SERVICE ITEM 4 ADDITONAL INFO
            final_serviceItem4_alert.style.display = "block"; 
        } else {
            //REMOVE - FINAL SERVICE ITEM 4 ADDITONAL INFO
            final_serviceItem4_alert.style.display = "none"; 
        }
    } //END - CHECK FOR OPEN SERVICE ITEMS - CHECK SELECTED ITEM SLOT 4
    //  //IF SERVICE SLOT 4 IS NOT PRESENT
    else if (serviceItem_slot4.style.display == "none") {
        //OPEN - FINAL SERVICE ITEM SLOT 4
        final_selectedService_item4.style.display = "none"; 
    }

    //  //CHECK FOR OPEN SERVICE ITEMS - CHECK SELECTED ITEM SLOT 5
    if (serviceItem_slot5.style.display == "block") {
        //OPEN - ALL FINAL SERVICE SLOTS CONTAINER
        final_userSelections_serviceItems_container.style.display = "block";
        //OPEN - FINAL SERVICE ITEM SLOT 5
        final_selectedService_item5.style.display = "block"; 
        //PLACE - SLOT 5 DATA INTO FINAL SERVICE ITEM 5
        //  //PLACE - SERVICE ITEM NAME
        final_selectedService_item5_name.innerHTML = selectedService_item5_name_txt.innerHTML;
        //  //PLACE - SERVICE PROVIDER 
        final_selectedService_item5_provider.innerHTML = providerName_serviceItem5_txt.innerHTML; 
        //  //PLACE - SERVICE COST 
        final_selectedService_item5_cost.innerHTML = selectedService_item5_slot5_cost.innerHTML; 
        //  //CHECK FOR ADDITIONAL INFO ALERT MSG 
        if (selectedService_item5_additionalInfoAlert_txt.style.display == "block") {
            //OPEN - FINAL SERVICE ITEM 5 ADDITONAL INFO
            final_serviceItem5_alert.style.display = "block"; 
        } else {
            //REMOVE - FINAL SERVICE ITEM 5 ADDITONAL INFO
            final_serviceItem5_alert.style.display = "none"; 
        }
    } //END - CHECK FOR OPEN SERVICE ITEMS - CHECK SELECTED ITEM SLOT 5
    //  //IF SERVICE SLOT 5 IS NOT PRESENT
    else if (serviceItem_slot5.style.display == "none") {
        //OPEN - FINAL SERVICE ITEM SLOT 5
        final_selectedService_item5.style.display = "none"; 
    }

    //  //CHECK FOR OPEN PRODUCT ITEMS - CHECK SELECTED ITEM SLOT 1
    if (productItem_slot1.style.display == "block") {
        //OPEN - ALL FINAL PRODUCT SLOTS CONTAINER
        final_userSelections_productItems_container.style.display = "block";
        //OPEN - FINAL PRODUCT ITEM SLOT 1
        final_selectedProduct_item1.style.display = "block"; 
        //PLACE - SLOT 1 DATA INTO FINAL PRODUCT ITEM 1
        //  //PLACE - PRODUCT ITEM NAME
        final_selectedProduct_item1_name.innerHTML = selectedProduct_item1_name_txt.innerHTML;
        //  //PLACE - PRODUCT QUANTITY 
        final_selectedProduct_item1_quantity.innerHTML = selectedProduct_item1_quantity_txt.innerHTML; 
        //  //PLACE - PRODUCT COST 
        final_selectedProduct_item1_cost.innerHTML = selectedProduct_item1_slot1_cost.innerHTML; 
    } //END - CHECK FOR OPEN PRODUCT ITEMS - CHECK SELECTED ITEM SLOT 1
    //  //IF PRODUCT SLOT 1 IS NOT PRESENT
    else if (productItem_slot1.style.display == "none") {
        //OPEN - FINAL PRODUCT ITEM SLOT 1
        final_selectedProduct_item1.style.display = "none"; 
    }

    //  //CHECK FOR OPEN PRODUCT ITEMS - CHECK SELECTED ITEM SLOT 2
    if (productItem_slot2.style.display == "block") {
        //OPEN - ALL FINAL PRODUCT SLOTS CONTAINER
        final_userSelections_productItems_container.style.display = "block";
        //OPEN - FINAL PRODUCT ITEM SLOT 2
        final_selectedProduct_item2.style.display = "block"; 
        //PLACE - SLOT 2 DATA INTO FINAL PRODUCT ITEM 2
        //  //PLACE - PRODUCT ITEM NAME
        final_selectedProduct_item2_name.innerHTML = selectedProduct_item2_name_txt.innerHTML;
        //  //PLACE - PRODUCT QUANTITY 
        final_selectedProduct_item2_quantity.innerHTML = selectedProduct_item2_quantity_txt.innerHTML; 
        //  //PLACE - PRODUCT COST 
        final_selectedProduct_item2_cost.innerHTML = selectedProduct_item2_slot2_cost.innerHTML; 
    } //END - CHECK FOR OPEN PRODUCT ITEMS - CHECK SELECTED ITEM SLOT 2
    //  //IF PRODUCT SLOT 2 IS NOT PRESENT
    else if (productItem_slot2.style.display == "none") {
        //OPEN - FINAL PRODUCT ITEM SLOT 2
        final_selectedProduct_item2.style.display = "none"; 
    }

    //  //CHECK FOR OPEN PRODUCT ITEMS - CHECK SELECTED ITEM SLOT 3
    if (productItem_slot3.style.display == "block") {
        //OPEN - ALL FINAL PRODUCT SLOTS CONTAINER
        final_userSelections_productItems_container.style.display = "block";
        //OPEN - FINAL PRODUCT ITEM SLOT 3
        final_selectedProduct_item3.style.display = "block"; 
        //PLACE - SLOT 3 DATA INTO FINAL PRODUCT ITEM 3
        //  //PLACE - PRODUCT ITEM NAME
        final_selectedProduct_item3_name.innerHTML = selectedProduct_item3_name_txt.innerHTML;
        //  //PLACE - PRODUCT QUANTITY 
        final_selectedProduct_item3_quantity.innerHTML = selectedProduct_item3_quantity_txt.innerHTML; 
        //  //PLACE - PRODUCT COST 
        final_selectedProduct_item3_cost.innerHTML = selectedProduct_item3_slot3_cost.innerHTML; 
    } //END - CHECK FOR OPEN PRODUCT ITEMS - CHECK SELECTED ITEM SLOT 3
    //  //IF PRODUCT SLOT 3 IS NOT PRESENT
    else if (productItem_slot3.style.display == "none") {
        //OPEN - FINAL PRODUCT ITEM SLOT 3
        final_selectedProduct_item3.style.display = "none"; 
    }

    //  //CHECK FOR OPEN PRODUCT ITEMS - CHECK SELECTED ITEM SLOT 4 
    if (productItem_slot4.style.display == "block") {
        //OPEN - ALL FINAL PRODUCT SLOTS CONTAINER
        final_userSelections_productItems_container.style.display = "block";
        //OPEN - FINAL PRODUCT ITEM SLOT 4
        final_selectedProduct_item4.style.display = "block"; 
        //PLACE - SLOT 4 DATA INTO FINAL PRODUCT ITEM 4
        //  //PLACE - PRODUCT ITEM NAME
        final_selectedProduct_item4_name.innerHTML = selectedProduct_item4_name_txt.innerHTML;
        //  //PLACE - PRODUCT QUANTITY 
        final_selectedProduct_item4_quantity.innerHTML = selectedProduct_item4_quantity_txt.innerHTML; 
        //  //PLACE - PRODUCT COST 
        final_selectedProduct_item4_cost.innerHTML = selectedProduct_item4_slot4_cost.innerHTML; 
    } //END - CHECK FOR OPEN PRODUCT ITEMS - CHECK SELECTED ITEM SLOT 4
    //  //IF PRODUCT SLOT 4 IS NOT PRESENT
    else if (productItem_slot4.style.display == "none") {
        //OPEN - FINAL PRODUCT ITEM SLOT 4
        final_selectedProduct_item4.style.display = "none"; 
    }

    //  //CHECK FOR OPEN PRODUCT ITEMS - CHECK SELECTED ITEM SLOT 5
    if (productItem_slot5.style.display == "block") {
        //OPEN - ALL FINAL PRODUCT SLOTS CONTAINER
        final_userSelections_productItems_container.style.display = "block";
        //OPEN - FINAL PRODUCT ITEM SLOT 5
        final_selectedProduct_item5.style.display = "block"; 
        //PLACE - SLOT 5 DATA INTO FINAL PRODUCT ITEM 5
        //  //PLACE - PRODUCT ITEM NAME
        final_selectedProduct_item5_name.innerHTML = selectedProduct_item5_name_txt.innerHTML;
        //  //PLACE - PRODUCT QUANTITY 
        final_selectedProduct_item5_quantity.innerHTML = selectedProduct_item5_quantity_txt.innerHTML; 
        //  //PLACE - PRODUCT COST 
        final_selectedProduct_item5_cost.innerHTML = selectedProduct_item5_slot5_cost.innerHTML; 
    } //END - CHECK FOR OPEN PRODUCT ITEMS - CHECK SELECTED ITEM SLOT 5
    //  //IF PRODUCT SLOT 5 IS NOT PRESENT
    else if (productItem_slot5.style.display == "none") {
        //OPEN - FINAL PRODUCT ITEM SLOT 5
        final_selectedProduct_item5.style.display = "none"; 
    }

} //END - GET POS CONTAINER DATA FUNCTION



//  //OVERLAY - BACK BTN CONTAINER EVENT LISTENER 
back_overlayContainer_btn.addEventListener("click", () => {
    //IF SERVICE/PRODUCT ITEM DETAILS CONTAINER IS PRESENT
    if (selectedService_item_details_container.style.display == "block" || selectedProduct_item_details_container.style.display == "block") {
        //REMOVE - INNER OVERLAY 2 CONTAINER 
        inner_overlayContainer_2.style.display = "none";
        //REMOVE - SELECTED SERVICE ITEM DETAILS CONTAINER 
        selectedService_item_details_container.style.display = "none"; 
        //REMOVE - OVERLAY BACK BTN
        back_overlayContainer_btn.style.display = "none";
        //ADD - OVERLAY CLOSE BTN
        close_overlayContainer_btn.style.display = "flex";
        //GO BACK TO - ALL URCARD SELECTED ITEMS CONTAINER
        allURCARD_selections_container.style.display = "block";
        //UPDATE OVERLAY HEADER TXT
        mainHeader_txt.innerHTML = "View UR Selections";
        //SCROLL TO TOP - OF ALL URCARD SELECTED ITEMS CONTAINER
        let overlayContainer_inner = document.querySelector('.all-SelectedItems-inner-class').scrollTop = 0;
        //OPEN - BOTTOM BTN CONTAINER
        bottomBtns_container1.style.display = "block";
    }
    //IF SERVICE ITEM EDIT CONTAINER IS PRESENT
    else if (selectedService_item_edit_container.style.display == "block" || selectedProduct_item_edit_container.style.display == "block") {
        //CHECK FOR POS CONTAINER VISIBILITY TO DO:

        //ELSE DO THIS:
        //REMOVE - INNER OVERLAY 2 CONTAINER 
        inner_overlayContainer_2.style.display = "none";
        //REMOVE - SELECTED SERVICE ITEM EDIT CONTAINER 
        selectedService_item_edit_container.style.display = "none"; 
        //REMOVE - OVERLAY BACK BTN
        back_overlayContainer_btn.style.display = "none";
        //ADD - OVERLAY CLOSE BTN
        close_overlayContainer_btn.style.display = "flex";
        //GO BACK TO - ALL URCARD SELECTED ITEMS CONTAINER
        allURCARD_selections_container.style.display = "block";
        //UPDATE OVERLAY HEADER TXT
        mainHeader_txt.innerHTML = "View UR Selections";
        //SCROLL TO TOP - OF ALL URCARD SELECTED ITEMS CONTAINER
        let overlayContainer_inner = document.querySelector('.all-SelectedItems-inner-class').scrollTop = 0;
        //OPEN - BOTTOM BTN CONTAINER
        bottomBtns_container1.style.display = "block";
    }
    //IF SERVICE ADDITIONAL INFO WARNING CONTAINER IS PRESENT
    else if (serviceItem_additional_info_alert.style.display == "flex") {
        //CLOSE - SERVICE ADDITIONAL INFO WARNING CONTAINER
        serviceItem_additional_info_alert.style.display = "none";
        //REMOVE - OVERLAY BACK BTN
        back_overlayContainer_btn.style.display = "none";
        //ADD - OVERLAY CLOSE BTN
        close_overlayContainer_btn.style.display = "flex";
        //GO BACK TO - ALL URCARD SELECTED ITEMS CONTAINER
        allURCARD_selections_container.style.display = "block";
        //UPDATE OVERLAY HEADER TXT
        mainHeader_txt.innerHTML = "View UR Selections";
        //SCROLL TO TOP - OF ALL URCARD SELECTED ITEMS CONTAINER
        let overlayContainer_inner = document.querySelector('.all-SelectedItems-inner-class').scrollTop = 0;
        //OPEN - BOTTOM BTN CONTAINER
        bottomBtns_container1.style.display = "block";
    }
    //IF SHIPPING/DELIVERY CONTAINER IS PRESENT
    else if (allAssets_deliveryCarryout_shippingInfo_container.style.display == "flex") {
        //CLOSE - SHIPPING/DELIVERY CONTAINER
        allAssets_deliveryCarryout_shippingInfo_container.style.display = "none";
        //REMOVE - OVERLAY BACK BTN
        back_overlayContainer_btn.style.display = "none";
        //ADD - OVERLAY CLOSE BTN
        close_overlayContainer_btn.style.display = "flex";
        //GO BACK TO - ALL URCARD SELECTED ITEMS CONTAINER
        allURCARD_selections_container.style.display = "block";
        //UPDATE OVERLAY HEADER TXT
        mainHeader_txt.innerHTML = "View UR Selections";
        //SCROLL TO TOP - OF ALL URCARD SELECTED ITEMS CONTAINER
        let overlayContainer_inner = document.querySelector('.all-SelectedItems-inner-class').scrollTop = 0;
        //OPEN - BOTTOM BTN CONTAINER
        bottomBtns_container1.style.display = "block";
    }
    //IF POS CONTAINER IS PRESENT
    else if (allAssets_pos_container.style.display == "flex") {
        //CLOSE - POS CONTAINER 
        allAssets_pos_container.style.display = "block"; 
        //REMOVE - OVERLAY BACK BTN
        back_overlayContainer_btn.style.display = "none";
        //ADD - OVERLAY CLOSE BTN
        close_overlayContainer_btn.style.display = "flex";
        //GO BACK TO - ALL URCARD SELECTED ITEMS CONTAINER
        allURCARD_selections_container.style.display = "block";
        //UPDATE OVERLAY HEADER TXT
        mainHeader_txt.innerHTML = "View UR Selections";
        //SCROLL TO TOP - OF ALL URCARD SELECTED ITEMS CONTAINER
        let overlayContainer_inner = document.querySelector('.all-SelectedItems-inner-class').scrollTop = 0;
        //OPEN - BOTTOM BTN CONTAINER
        bottomBtns_container1.style.display = "block";
    }
    //****ADD NEW BACK BTN LOGIC HERE****

    else {
        //CLOSE PRIMARY OVERLAY CONTAINER
        overlayContainer.style.display = "none";
    }
});


//SERVICE ITEM ADDITIONAL INFO ALERT - OKAY BTN - EVENT LISTNENER
additionalInfo_okayBtn.addEventListener("click", () => {
    //CHECK FOR PRODUCTS TO SHIP
    if (productItem_slot1.style.display == "none" && productItem_slot2.style.display == "none" && productItem_slot3.style.display == "none" && productItem_slot4.style.display == "none" && productItem_slot5.style.display == "none") {
        //CLOSE - SERVICE ITEM ADDTIONAL INFO ALERT 
        serviceItem_additional_info_alert.style.display = "none";
        //REMOVE - OVERLAY HEADER CLOSE BTN 
        close_overlayContainer_btn.style.display = "none";
        //REMOVE - DEBIT/CREDIT CARD CONTAINER | GOOGLE PAY CONTAINER | APPLE PAY CONTAINER
        debitCredit_container.style.display = "none";
        googlePay_container.style.display = "none";
        applePay_container.style.display = "none"; 
        //ADD - OVERLAY HEADER BACK BTN 
        back_overlayContainer_btn.style.display = "flex";
        //OPEN - POS CONTAINER
        allAssets_pos_container.style.display = "flex"; 
        //UPDATE - OVERLAY HEADER TXT
        mainHeader_txt.innerHTML = "Secure Checkout";
        //GET POS DATA
        get_pos_containerData(); 
        //SCROLL TO TOP OF POS CONTAINER
        document.getElementById("pos-container-inner-id").scrollTop = 0;
    } else {
        //CLOSE - SERVICE ITEM ADDTIONAL INFO ALERT 
        serviceItem_additional_info_alert.style.display = "none";
        //OPEN - DELIVERY/SHIPPING CONTAINER
        allAssets_deliveryCarryout_shippingInfo_container.style.display = "flex";
        //OPEN - BOTTOM BTNS ORDER TOTAL CONTAINER
        bottomBtns_container1.style.display = "block";
        //UPDATE - OVERLAY HEADER TXT
        mainHeader_txt.innerHTML = "UR Shipping Details";
        //GET POS DATA
        get_pos_containerData(); 
    }
});


//GET PRODUCT SHIPPING/DELIVERY DATA 
function get_productShipping_delivery_data() {
    //CHECK FOR OPEN PRODUCT SLOT
    //  //CHECK - SELECTED PRODUCT SLOT 1
    if (productItem_slot1.style.display == "block") {
        //INPUT DATA INTO DELIVERY/CARRYOUT SLOTS
    }
} //END - GET PRODUCT SHIPPING/DELIVERY DATA 


//OPEN STUFF
function open_stuff() {
    //IF URCARD SELECTIONS ARE PRESENT
    if (all_selectedService_container.style.display == "none" || all_selectedProduct_container.style.display == "none") {
        //IF NO SELECTIONS CONTAINER IS PRESENT
        if (noItems_selected_container.style.display == "flex") {
            //OPEN - OVERLAY CONTAINER
            overlayContainer.style.display = "block";
        } 
        else {
            //3 SECOND DELAY TO LOAD ASSETS
            setTimeout(() => {
                //CLOSE LOADING CONTAINER
                loadingContainer.style.display = "none"; 
                //OPEN OVERLAY CONTAINER
                overlayContainer.style.display = "block"; 
                //OPEN URCARD ALL SELECTED ITEMS CONTAINER 
                open_allSelected_serviceItems_urcard(); 
                open_allSelected_productItems_urcard(); 
                //GET URCARD SELECTIONS - SERVICE VENDORS 1-2 ****ADD NEW SERVICE VENDOR HERE - VENDOR 3****
                getURCard_serviceVendor1();   
                getURCard_serviceVendor2();   
                //GET URCARD SELECTIONS - SERVICE CODE 1
                get_serviceCode1_assignment();  
                //GET URCARD SELECTIONS - SERVICE CODE 2 ****ADD NEW SERVICE VENDOR HERE - SERVICE CODE 3
                get_serviceCode2_assignment();  
                //GET URCARD SELECTIONS - PRODUCT VENDORS 1 ****ADD NEW PRODUCT VENDOR HERE - PRODUCT VENDOR 2****
                getURCard_productVendor1(); 
                //GET URCARD SELECTIONS - PRODUCT CODE 1 ****ADD NEW PRODUCT VENDOR HERE - PRODUCT CODE 2****
                get_productCode1_assignment(); 
                //OPEN BOTTOM BTN CONTAINER 1
                bottomBtns_container1.style.display = "block"; 
                //CALCULATE BOTTOM BTN ORDER TOTAL
                get_bottomBtn_orderTotal(); 
            }, 2000);
        }
    }
        
    else {
        //OPEN OVERLAY CONTAINER
        overlayContainer.style.display = "block"; 
        //SCROLL TO TOP OF CONATAINER
    }
}


//  //OVERLAY - CLOSE BTN CONTAINER FUNCTION & EVENT LISTENER
close_overlayContainer_btn.addEventListener("click", () => {
    loadingContainer.style.display = "none"; 

    //CLOSE PRIMARY OVERLAY CONTAINER
    overlayContainer.style.display = "none";

    //ENABLE SCROLLING ON BODY
    document.body.style.overflow = '';
}); 




//  //BOTTOM BUTTON ORDER TOTAL CALCULATIONS
function get_bottomBtn_orderTotal() {
    //GET COST OF EACH SELECTED PRODUCT/SERVICE
    let serviceSlot1_cost = selectedService_item1_slot1_cost_number; 
    let serviceSlot2_cost = selectedService_item2_slot2_cost_number;
    let serviceSlot3_cost = selectedService_item3_slot3_cost_number;
    let serviceSlot4_cost = selectedService_item4_slot4_cost_number;
    let serviceSlot5_cost = selectedService_item5_slot5_cost_number;
    let productSlot1_cost = selectedProduct_item1_slot1_cost_number;
    let productSlot2_cost = selectedProduct_item2_slot2_cost_number;
    let productSlot3_cost = selectedProduct_item3_slot3_cost_number;
    let productSlot4_cost = selectedProduct_item4_slot4_cost_number;
    let productSlot5_cost = selectedProduct_item5_slot5_cost_number;
    
    //GET FINAL CALCULATION
    let all_slots_cost_sum = Number(serviceSlot1_cost) + Number(serviceSlot2_cost) + Number(serviceSlot3_cost) + Number(serviceSlot4_cost) + Number(serviceSlot5_cost) + Number(productSlot1_cost) + Number(productSlot2_cost) + Number(productSlot3_cost) + Number(productSlot4_cost) + Number(productSlot5_cost);  

    //IF SUM OF ALL SLOTS = 0
    if (all_slots_cost_sum == Number(0)) {
        order_total_txt.innerHTML = "Pending"; 
    } else {
        //PLACE ORDER TOTAL IN CONTAINER
        order_total_txt.innerHTML = all_slots_cost_sum.toFixed(2);
        console.log("Order Total: " + all_slots_cost_sum);
        //INSERT - ORDER TOTAL INTO DATA TABLE 
        order_total_DTslot.value = order_total_txt.innerHTML; 
    }
}
//  //RESET - BOTTOM BUTTON ORDER TOTAL CALCULATIONS
function reset_bottomBtn_orderTotal() {
    //PLACE ORDER TOTAL IN CONTAINER
    order_total_txt.innerHTML = Number(0).toFixed(2);
    console.log("Order Total: " + all_slots_cost_sum); 
} //END - BOTTOM BUTTON ORDER TOTAL CALCULATIONS
 
            
//  //CHECK FOR EMPTY SELECTED ITEMS SLOTS
function checkFor_emptySelectedItems_allSlots() {
    //CHECK FOR EACH SELECTED ITEM SLOT
    //  //CHECK FOR SERVICE SLOT 1
    if (serviceItem_slot1.style.display == "none" && serviceItem_slot2.style.display == "none" && serviceItem_slot3.style.display == "none" && serviceItem_slot4.style.display == "none" && serviceItem_slot5.style.display == "none" && productItem_slot1.style.display == "none" && productItem_slot2.style.display == "none" && productItem_slot3.style.display == "none" && productItem_slot4.style.display == "none" && productItem_slot5.style.display == "none") {
        //REMOVE - ALL SERVICE ITEM SELECTIONS CONTAINER
        all_selectedService_container.style.display = "none"; 
        //REMOVE - ALL PRODUCT ITEM SELECTIONS CONTAINER
        all_selectedProduct_container.style.display = "none"; 
        //REMOVE - POS CONTAINER 
        allAssets_pos_container.style.display = "none"; 
        //REMOVE - BOTTOM BTN ORDER TOTAL CONTAINER
        bottomBtns_container1.style.display = "none"; 
        //OPEN - NO ITEMS SELECTED CONTAINER
        noItems_selected_container.style.display = "flex";
    }
    //ELSE - THERE ARE SLOTS PRESENT
    else {
        //NO SLOTS ARE PRESENT
    }
}


//DEBIT/CREDIT CARDHOLDER NAME INPUT - EVENT LISTENER
cardHolder_name_input.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
});
//DEBIT/CREDIT CARD NUMBER INPUT - EVENT LISTENER 
cardholder_number_input.addEventListener("input", (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
}); 
//DEBIT/CREDIT CARD EXPIRATION INPUT - EVENT LISTENER
cardExpiration_date_input.addEventListener("input", (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
}); 
//DEBIT/CREDIT CARD SECURITY CODE INPUT - EVENT LISTENER
cvc_securityCode_input.addEventListener("input", (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
});
//BILLING STREET ADDRESS INPUT - EVENT LISTENER
billingAddress_user_street.addEventListener("input", (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
});
//BILLING CITY INPUT - EVENT LISTENER
billingAddress_user_city.addEventListener("input", (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
});
//BILLING STATE INPUT - EVENT LISTENER
billingAddress_user_state.addEventListener("input", (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
});
//BILLING ZIPCODE INPUT - EVENT LISTENER
billingAddress_user_zipcode.addEventListener("input", (e) => {
    if (e.target.value.trim() !== '') { 
        e.target.style.border = '2px #2F9C95 solid'
    }
});


//FINAL PAY BTN - APPLE PAY 
const applePay_card_purchaseBtn = document.getElementById("applePay-card-purchaseBtn-id"); 
applePay_card_purchaseBtn.addEventListener("click", () => {
    //IF APPLE PAY CONTAINER IS PRESENT
    if (applePay_container.style.display == "block") {
        //FINAL CHECK - ALL THE REMAINING INPUTS 
        finalCheck_all_remainingInputs();
    }
});


//FINAL PAY BTN - GOOGLE PAY
const googlePay_card_purchaseBtn = document.getElementById("googlePay-card-purchaseBtn-id"); 
googlePay_card_purchaseBtn.addEventListener("click", () => {
    //IF GOOGLE PAY CONTAINER IS PRESENT
    if (googlePay_container.style.display == "block") {
        //FINAL CHECK - ALL THE REMAINING INPUTS 
        finalCheck_all_remainingInputs();
    }
}); 


//FINAL PAY BTN - DEBIT/CREDIT CARD 
const debitCredit_card_purchaseBtn = document.getElementById("debitCredit-card-purchaseBtn-id");
//PAY BTN - EVENT LISTENER
debitCredit_card_purchaseBtn.addEventListener("click", () => {
    //IF DEBIT/CREDIT CARD CONTAINER IS PRESENT
    if (debitCredit_container.style.display == "block") {
        //CHECK FOR EMPY INPUT - CARDHOLDER'S NAME INPUT
        if (cardHolder_name_input.value == "" || cardHolder_name_input.value == " ") {
            alert("Please enter the cardholder's name to checkout"); 
            //CHANGE INPUT BORDER RED
            cardHolder_name_input.style.border = " solid 4px red"; 
            //SCROLL TO INPUT
            pos_container_inner.scrollTo({
                top: document.getElementById("paymentProcessor-container-id").offsetTop
            });
        }
        //CHECK FOR EMPY INPUT - CARD NUMBER INPUT
        else if (cardholder_number_input.value == "" || cardholder_number_input.value == " ") {
            alert("Please enter the card number to checkout"); 
            //CHANGE INPUT BORDER RED
            cardholder_number_input.style.border = " solid 4px red"; 
            //SCROLL TO INPUT
            pos_container_inner.scrollTo({
                top: document.getElementById("paymentProcessor-container-id").offsetTop
            }); 
        }
        //CHECK - EXPIRATION DATE INPUT
        else if (cardExpiration_date_input.value == "" || cardExpiration_date_input.value == " ") {
            alert("Please enter the card's expiration date to checkout"); 
            //CHANGE INPUT BORDER RED
            cardExpiration_date_input.style.border = " solid 4px red"; 
            //SCROLL TO INPUT
            pos_container_inner.scrollTo({
                top: cardHolder_name_input.offsetTop
            }); 
        }
        //  //CHECK IF EXPIRATION DATE IS CURRENT
        else if (cardExpiration_date_input.value !== "") {
            const inputVal = cardExpiration_date_input.value;
            const inputDate = new Date(inputVal);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            // Validate if the parsed date is a real calendar date
            // if (isNaN(inputDate.getTime())) {
            //     alert("Invalid date format."); 
            //     return;
            // }
            // IF EXPIRATION DATE = TODAY'S DATE
            if (inputDate.getTime() === today.getTime()) {
                alert("This card is about to expire. Please enter another debit/credit card to checkout");
                //CHANGE INPUT BORDER RED
                cardExpiration_date_input.style.border = " solid 4px red"; 
                //SCROLL TO INPUT
                pos_container_inner.scrollTo({
                    top: cardHolder_name_input.offsetTop
                }); 
            } else if (inputDate.getTime() < today.getTime()) {
                alert("This card is expired. Please enter a current debit/credit card to checkout");
                //CHANGE INPUT BORDER RED
                cardExpiration_date_input.style.border = " solid 4px red"; 
                //SCROLL TO INPUT
                pos_container_inner.scrollTo({
                    top: cardHolder_name_input.offsetTop
                }); 
            }                        
            //CHECK - SECURITY CODE INPUT 
            else if (cvc_securityCode_input.value == "") {
                alert("Please enter the card's security code to checkout");
                //CHANGE INPUT BORDER RED
                cvc_securityCode_input.style.border = " solid 4px red"; 
                //SCROLL TO INPUT
                pos_container_inner.scrollTo({
                    top: cardHolder_name_input.offsetTop
                }); 
            }
            //CHECK - BILLING ADDRESS INPUT
            else if (billingAddress_user_street.value == "" || billingAddress_user_street.value == " ") {
                alert("Please enter your billing address to checkout");
                //CHANGE INPUT BORDER RED
                billingAddress_user_street.style.border = " solid 4px red"; 
                //SCROLL TO INPUT
                pos_container_inner.scrollTo({
                    top: cvc_securityCode_input.offsetTop
                }); 
            }
            //CHECK - BILLING CITY INPUT 
            else if (billingAddress_user_city.value == "" || billingAddress_user_city.value == " ") {
                alert("Please enter your billing address to checkout");
                //CHANGE INPUT BORDER RED
                billingAddress_user_city.style.border = " solid 4px red"; 
                //SCROLL TO INPUT
                pos_container_inner.scrollTo({
                    top: cvc_securityCode_input.offsetTop
                }); 
            }
            //CHECK - BILLING STATE INPUT
            else if (billingAddress_user_state.value == "" || billingAddress_user_state.value == " ") {
                alert("Please enter your billing address to checkout");
                //CHANGE INPUT BORDER RED
                billingAddress_user_state.style.border = " solid 4px red"; 
                //SCROLL TO INPUT
                pos_container_inner.scrollTo({
                    top: cvc_securityCode_input.offsetTop
                }); 
            }
            //CHECK - BILLING ZIPCODE INPUT
            else if (billingAddress_user_zipcode.value == "" || billingAddress_user_zipcode.value == " ") {
                alert("Please enter your billing zipcode to checkout");
                //CHANGE INPUT BORDER RED
                billingAddress_user_zipcode.style.border = " solid 4px red"; 
                //SCROLL TO INPUT
                pos_container_inner.scrollTo({
                    top: cvc_securityCode_input.offsetTop
                }); 
            }
            else {
                //FINAL CHECK - ALL THE REMAINING INPUTS 
                finalCheck_all_remainingInputs(); 
            }// END - CHECK - IF BILLING ADDRESS CONTAINER IS PRESENT
        } //END - CHECK IF EXPIRATION DATE IS CURRENT
    } //END - IF DEBIT/CREDIT CARD CONTAINER IS PRESENT
});


//FINAL CHECK - ALL REMAINING INPUTS - FUNCTION
function finalCheck_all_remainingInputs() {
     
    //CHECK FOR - SHIPPING DETAILS
    //  //IF THERE ARE PRODUCTS TO SHIP...
    if (final_selectedProduct_item1.style.display == "block" || final_selectedProduct_item2.style.display == "block" ||final_selectedProduct_item3.style.display == "block" || final_selectedProduct_item4.style.display == "block" || final_selectedProduct_item5.style.display == "block" || final_selectedProduct_item6.style.display == "block" || final_selectedProduct_item7.style.display == "block") {
        //CHECK - USER FIRST NAME INPUT
        if (user_firstName.value == "" || user_firstName.value == " ") {
            alert("Please add your first name to the shipping address details to checkout");
            //CHANGE INPUT BORDER RED
            user_streetAddress.style.border = " solid 4px red"; 
        }
        //CHECK - USER LAST NAME INPUT
        else if (user_lastName.value == "" || user_lastName.value == " ") {
            alert("Please add your last name to the shipping address details to checkout");
            //CHANGE INPUT BORDER RED
            user_lastName.style.border = " solid 4px red"; 
        } 
        //CHECK - USER PHONE # INPUT 
        else if (user_phoneNumber.value == "" || user_phoneNumber.value == " ") {
            alert("Please add your phone number to the shipping address details to checkout");
            //CHANGE INPUT BORDER RED
            user_phoneNumber.style.border = " solid 4px red"; 
        }
        //CHECK - USER STREET ADDRESS INPUT
        else if (user_streetAddress.value == "" || user_streetAddress.value == " ") {
            alert("Please add your street to the shipping address to checkout");
            //CHANGE INPUT BORDER RED
            user_streetAddress.style.border = " solid 4px red"; 
        }
        //CHECK - USER CITY INPUT
        else if (user_city.value == "" || user_city.value == " ") {
            alert("Please add your city to the shipping address to checkout");
            //CHANGE INPUT BORDER RED
            user_city.style.border = " solid 4px red"; 
        }
        //CHECK - USER STATE INPUT
        else if (user_state.value == "" || user_state.value == " ") {
            alert("Please add your state to the shipping address to checkout");
            //CHANGE INPUT BORDER RED
            user_state.style.border = " solid 4px red"; 
        }
        //CHECK - USER ZIPCODE INPUT 
        else if (user_zipcode.value == "" || user_zipcode.value == " ") {
            alert("Please add your zipcode to the shipping address to checkout");
            //CHANGE INPUT BORDER RED
            user_zipcode.style.border = " solid 4px red"; 
        } else {
            //CHECK IF DEBIT/CREDIT CARD CONTAINER
            //  //IF CONTAINER IS PRESENT...
            if (debitCredit_container.style.display == "block") {
                //PERFORM - DEBIT/CREDIT CARD VERIFICATION
                debitCredit_cardVerification(); 
            } else {
                //CHECK - FOR GRAND TOTAL GREATER THAN 0 
                if (grand_total_txt.innerHTML == "Pending") {
                    //BEGIN - EXTERNAL SERVICE VENDOR PROCESSING 
                    alert("Final check complete! Begin Service Vendor Processing");
                } else {
                    //BEGIN - POS INPUT TOKENIZATON
                    pos_inputTokenization(); 
                }
            }
        }
    } else {
        //CHECK FOR - USER NAME/PHONE # CONTAINER 
        if (userName_phone_container.style.display == "block") {
            //CHECK - POS USER FIRST NAME INPUT 
            if (pos_firstName_input.value == "" || pos_firstName_input.value == " ") {
                alert("Please enter your first name above to checkout"); 
                //CHANGE INPUT BORDER RED
                pos_firstName_input.style.border = " solid 4px red"; 
            }
            //CHECK - POS USER LAST NAME INPUT 
            else if (pos_lastName_input.value == "" || pos_lastName_input.value == " ") {
                alert("Please enter your last name above to checkout"); 
                //CHANGE INPUT BORDER RED
                pos_lastName_input.style.border = " solid 4px red"; 
            }
            //CHECK - POS USER PHONE # INPUT
            else if (pos_phoneNumber_input.value == "" || pos_phoneNumber_input.value == " ") {
                alert("Please enter your phone number above to checkout"); 
                //CHANGE INPUT BORDER RED
                pos_phoneNumber_input.style.border = " solid 4px red"; 
            }
            else {
                //CHECK IF DEBIT/CREDIT CARD CONTAINER
                //  //IF CONTAINER IS PRESENT...
                if (debitCredit_container.style.display == "block") {
                //PERFORM - DEBIT/CREDIT CARD VERIFICATION
                    debitCredit_cardVerification(); 
                } else {
                    //CHECK - FOR GRAND TOTAL GREATER THAN 0 
                    if (grand_total_txt.innerHTML == "Pending") {
                        //BEGIN - EXTERNAL SERVICE VENDOR PROCESSING 
                        alert("Final check complete! Begin Service Vendor Processing");
                    } else {
                        //BEGIN - POS INPUT TOKENIZATON
                        pos_inputTokenization(); 
                    }
                } 
            }
        }
    }
} //END - FINAL CHECK - ALL REMAINING INPUTS - FUNCTION


//  //DEBIT/CREDIT CARD VERIFICATION
function debitCredit_cardVerification() {
    alert("Ready for debit/credit card verification!"); 
}


//  //POS INPUT TOKENIZATION 
function pos_inputTokenization() {
    alert("Ready to tokenize input data for payment processor!"); 
}


//  //ADDRESS SEARCH ASSETS
// let map;
// let placeSearch;
// let infoWindow;
// const markers = new Map();
// import { Loader } from "@googlemaps/js-api-loader";
// const loader = new Loader({
//     apiKey: "AIzaSyDYWdF5Y0PyquMmIVeynOLmLUXRXBNeNe4",
//     version: "weekly"
// });

// async function initMap() {
//     const { Map } = await google.maps.importLibrary('maps');
//     const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

//     map = new Map(document.getElementById('map'), {
//         center: { lat: 36.988, lng: -76.361 }, // Example center (Hampton, VA)
//         zoom: 11,
//         mapTypeControl: false,
//         mapId: '6813b4cc8278d8a13d70094f', // Use your specific Map ID here
//     });

//     placeSearch = document.getElementById('place-search');
//     placeSearch.addEventListener('gmp-load', addMarkers);
//     placeSearch.addEventListener('gmp-select', ({ place }) => {
//         if (markers.has(place.id)) {
//             // Optionally zoom to the selected place
//             map.setCenter(place.location);
//             map.setZoom(15);
//         }
//     });

//     const textInput = document.getElementById('search-text-input');
//     const searchButton = document.getElementById('search-text-input-button');

//     searchButton.addEventListener('click', () => {
//         findPlaces(textInput.value);
//     });

//     textInput.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter') {
//             findPlaces(textInput.value);
//         }
//     });
    
//     infoWindow = new google.maps.InfoWindow();
// }

// async function findPlaces(query) {
//     // Clear existing markers
//     markers.forEach(marker => marker.setMap(null));
//     markers.clear();

//     if (query) {
//         // Configure the search request
//         placeSearch.textQuery = query;
//         // The gmp-load event listener will be triggered once the search results load
//     }
// }

// async function addMarkers() {
//     const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

//     if (placeSearch.places.length === 0) {
//         return;
//     }

//     for (const place of placeSearch.places) {
//         // The place object includes formattedAddress and placeId
//         console.log("Found place:", place.displayName, place.formattedAddress, place.id);

//         const marker = new AdvancedMarkerElement({
//             map: map,
//             position: place.location,
//             title: place.displayName,
//         });

//         marker.addListener('click', () => {
//             infoWindow.setContent(`
//                 <strong>${place.displayName}</strong><br>
//                 Address: ${place.formattedAddress}<br>
//                 Place ID: ${place.id}
//             `);
//             infoWindow.open(map, marker);
//         });

//         markers.set(place.id, marker);
//     }
// }

// initMap();
//  //END - ADDRESS SEARCH ASSETS
