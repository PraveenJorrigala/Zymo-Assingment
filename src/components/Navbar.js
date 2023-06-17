function Navbar() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse">
                    <ul class="navbar-nav  mb-2 mb-lg-0">
                        <button type="submit"> <i class="bi bi-person-check"></i> New Registration</button>
                        <button type="submit"> <i class="bi bi-person-fill"></i> Quick Registration</button>
                        <button type="submit"> <i class="bi bi-telephone-plus-fill"></i> Create Enquiry</button>
                        <button type="submit"> <i class="bi bi-people-fill"></i> Add Free Trial</button>
                        <button type="submit"> <i class="bi bi-cash-coin"></i> Add Expenses</button>
                        <button type="submit"> <i class="bi bi-database-fill-lock"></i>Sync</button>
                        <button type="submit"> <i class="bi bi-person-fill-add"></i>Online Class</button>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" style={{borderRadius:'20px', margin:'20px'}} type="search" placeholder="Search" aria-label="Search"/> 
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
    
}
export default Navbar;