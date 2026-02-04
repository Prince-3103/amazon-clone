export const deliveryOptions = [{
  id: '1',
  deliveryDay: 7,
  priceCents: 0
},{
  id: '2',
  deliveryDay: 3,
  priceCents: 500
},{
  id: '3',
  deliveryDay: 1,
  priceCents: 1000
}];

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;
  
  deliveryOptions.forEach((option) => {
    if(option.id === deliveryOptionId){
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}