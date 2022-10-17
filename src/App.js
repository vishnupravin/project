import logo from './logo.svg';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './Card';

function App() {
  var cardLists = [{
    planName : "Free",
    prices : 0,
    features : [
      {
        name: "Single User",
        isEnabled : true
      },
      {
        name: "5GB Storage",
        isEnabled : true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled : true
      },
      {
        name: "Community Access",
        isEnabled : true
      },
      {
        name: "Unlimited Private Projects",
      },
      {
        name: "Dedicated Phone Support",
      },
      {
        name: "Free Subdomain",
      },
      {
        name: "Monthly Status Reports",
      },
    ]
  },
  {
    planName : "Plus",
    prices : 9,
    features : [
      {
        name: "5 User",
        isEnabled : true
      },
      {
        name: "50GB Storage",
        isEnabled : true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled : true
      },
      {
        name: "Community Access",
        isEnabled : true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled : true
      },
      {
        name: "Dedicated Phone Support",
        isEnabled : true
      },
      {
        name: "Free Subdomain",
        isEnabled : true
      },
      {
        name: "Monthly Status Reports",
      },
    ]
  },
  {
    planName : "Pro",
    prices : 49,
    features : [
      {
        name: "Unlimited User",
        isEnabled : true
      },
      {
        name: "150GB Storage",
        isEnabled : true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled : true
      },
      {
        name: "Community Access",
        isEnabled : true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled : true
      },
      {
        name: "Dedicated Phone Support",
        isEnabled : true
      },
      {
        name: "Free Subdomain",
        isEnabled : true
      },
      {
        name: "Monthly Status Reports",
        isEnabled : true
      },
    ]
  },


]
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            cardLists.map((card)=> {
              return <Card card={card} ></Card>
            })
          }
        </div>
      </div>
    </section>
  )
};


export default App;


