import Item from "./Item";


function ConditionRender() {

    
  return (
    <section>
      <h1>Tiên's Ride Packing List</h1>
      <ul>
        <Item isPacked={true} name="Ride Suit" />
        <Item isPacked={true} name="Hamburger" />
        <Item isPacked={false} name="Gas" />
        <Item isPacked={false} name="Helmet" />
      </ul>
    </section>
  );
}

export default ConditionRender;
