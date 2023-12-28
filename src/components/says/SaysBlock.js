import Says from "./Says";

const SaysBlock = () => {
  return ( 
    <section className="says-block">
      <h2><span>Customer</span> Say</h2>
      <div className="says-cards">
        <Says />
      </div>
    </section>
  );
}
 
export default SaysBlock;