import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className = "heading">My contacts</h1>
      <Card
        name="Dulqar"
        image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/dulquer-salmaan-37626-19-09-2017-04-04-09.jpg"
        phoneno="9947257480"
        gmail="dulqar123@gmail.com"
      />
      <Card
        name="mammootty"
        className="circle-img"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WV9IQNxjwlk0kLTXOujLHBirJkTED7gGXg&s"
        phoneno="9072203040"
        gmail="mamotty321@gmail.com"
      />
      <Card
        name="Nazriya"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmIpYJG8wt4ZQDzgTT__RwANpyr1VOB5Cew&s"
        phoneno="987654321"
        gmail="nazri1@gmail.com"
      />
    </div>
  );
}

export default App;
