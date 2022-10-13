function Card (props){
    return (
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.card.planName}</h5>
            <h6 class="card-price text-center">${props.card.prices}<span class="period">/month</span></h6>
            <hr></hr>
            <ul>
              {
                 props.card.features.map((items)=>{
                  return <li>{items.name}</li>
                 }
                 )
              }
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    )
};
 export default Card;
 