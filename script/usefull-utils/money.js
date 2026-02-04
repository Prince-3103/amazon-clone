export function formatPrice(priceOfProduct){
  return (Math.round(priceOfProduct)*3/10).toFixed(2);
}