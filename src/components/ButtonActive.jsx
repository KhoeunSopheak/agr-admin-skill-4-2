import '../styles/Button.css'
function ButtonActive(){
    return (
        <>
          <select className='drop-down'>
        <option value="Banteay Meanchey Province">Active</option>
        <option value="Battambang ">All</option>
        <option value="Kampong Cham ">Not active</option>
      </select>
        </>
    );
}
export default ButtonActive;