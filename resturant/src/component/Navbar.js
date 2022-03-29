import React from 'react'

const Navbar = ({filteritem,menuList}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"  >
        Resturant
      </a>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

           { menuList.map((curElem)=>{
                return (
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"  onClick={()=>filteritem(curElem)}>
                  {curElem}
                </a>
              </li>
               ) 

            })
            }
         
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar
