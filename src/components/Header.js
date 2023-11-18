import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    <>
      <div className='row justify-content-center text-center' style={text}>
        <div className='col-md-12 col-sm-12'>
           <span>
            DIGITAL CLOCK
           </span>
        </div>
      </div>
    </>
  );
}

export default Header;
 const text = 
 {
    fontSize: '50px',
    fontFamily: 'Georgia'
 }
