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
      },
      {
        name: "5GB Storage",
      },
      {
        name: "Unlimited Public Projects",
      },
      {
        name: "Community Access",
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
      },
      {
        name: "50GB Storage",
      },
      {
        name: "Unlimited Public Projects",
      },
      {
        name: "Community Access",
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
    planName : "Pro",
    prices : 49,
    features : [
      {
        name: "Unlimited User",
      },
      {
        name: "150GB Storage",
      },
      {
        name: "Unlimited Public Projects",
      },
      {
        name: "Community Access",
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


