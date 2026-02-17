import { useSelector} from "react-redux";

export const Cart = () => {
    const cartData = useSelector((state: any)=> state.cartReducer)

    return (
      <div>
          <div>
              {cartData.map((card: any)=> {
                  <>
                      <div>
                          <h2>{card.name}</h2>
                          <img src={card.picture}/>
                          <h3>{card.price}</h3>
                      </div>
                  </>           
              })}
          </div>
  
          <div>
              <span>{cartData.totalPrice}</span>
          </div>
          
      </div>
    )
}