import React from 'react'

const ExpiredMembership = () => {
  return (
    <div style={{margin:'20px 0px 20px 20px', backgroundColor:"white"}}>
      <div class="d-flex" style={{height:'100px', backgroundColor:"white"}}>
        <div style={{display:'flex', alignItems:'center',marginLeft:'20px'}}>
            <h3>Expired Membership</h3>
        </div>
        <div style={{display:'flex' ,flexDirection:'row', height:'100px', justifyContent:'flex-end', alignItems:'center'}}>
            <label class="form-control me-2" style={{borderRadius:'5px', margin:'20px 20px 20px 200px',display:"flex", flexDirection:'row'}}>All Membership <select style={{border:'none', margin:'0px', padding:'0px'}}></select></label>
            <input class="form-control me-2" style={{borderRadius:'5px', margin:'20px'}} type="Date" placeholder="Search" aria-label="Date"/> 
            <input class="form-control me-2" style={{borderRadius:'5px', margin:'20px'}} type="Date" placeholder="Search" aria-label="Date"/> 
            <button type="submit"style={{borderRadius:'5px', margin:'20px',display:'flex' ,flexDirection:'row', backgroundColor:'green', color:'white'}}>Search <i class="bi bi-search" style={{marginLeft:"5px"}}></i></button>
        </div>  
      </div>
      <div class="d-flex">
        <div style={{display:'flex', alignItems:'center',marginLeft:'20px'}}>
          <button className='btn2row' >Show 10 rows</button>
          <button className='btn2row' >Column visiblity</button>
          <button className='btn2row' ><i class="bi bi-clipboard"></i></button>
          <button className='btn2row' ><i class="bi bi-clipboard-pulse"></i></button>
          <button className='btn2row' ><i class="bi bi-clipboard-check"></i></button>
          <button className='btn2row' ><i class="bi bi-bookmarks"></i></button>
          <button className='btn2row' ><i class="bi bi-printer"></i></button>
          <label style={{marginLeft:'370px', display:'flex', flexDirection:'row'}}>Search: <input class="form-control me-2" style={{borderRadius:'5px', margin:'0px 0px 0px 10px'}}></input></label>
        </div>
      </div>
      <br></br>
      <div>
        <table className='ExpiredMembershipTable' style={{alignItems:"center"}}>
          <tr>
            <th>Sl</th>
            <th>Membership ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Membership</th>
            <th>Date</th>
            <th>Renew Now</th>
            <th>Send SMS </th>
          </tr>
          <tr>
            <td>1</td>
            <td><img className='tdImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0W2MhqcRg8r_uKhXxHaKeR4kY365Onnzbg&usqp=CAU'></img> <span className='tdID' >AF_1472322456</span></td>
            <td>Praveen</td>
            <td>99XXXXX610</td>
            <td>MWC1</td>
            <td>March 12, 2023</td>
            <td> <i class="bi bi-arrow-repeat tdRenew"></i></td>
            <td> <i class="bi bi-wechat tdSms"></i></td>
          </tr>
          <tr>
            <td>2</td>
            <td><img className='tdImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq84_dZKt-7BRRYzGO4MmeGquSuMg8qng724dQm197LC0Gn811f3Xbe7NipRHAmXBk5oY&usqp=CAU'></img> <span className='tdID' >AF_1472322788</span></td>
            <td>Ravi</td>
            <td>99XXXXX189</td>
            <td>MWC1</td>
            <td>March 16, 2023</td>
            <td> <i class="bi bi-arrow-repeat tdRenew"></i></td>
            <td> <i class="bi bi-wechat tdSms"></i></td>
          </tr>
          <tr>
            <td>3</td>
            <td><img className='tdImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaPg_mzApslwWbz73ka6egStZsKGxQESyTA&usqp=CAU'></img> <span className='tdID' >AF_1472322456</span></td>
            <td>Satish</td>
            <td>99XXXXX673</td>
            <td>MWC1</td>
            <td>March 15, 2023</td>
            <td> <i class="bi bi-arrow-repeat tdRenew"></i></td>
            <td> <i class="bi bi-wechat tdSms"></i></td>
          </tr>
          <tr>
            <td>4</td>
            <td><img className='tdImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsPD5hZ20l5qm8Sl9--3irQDwisKlGgntGQ&usqp=CAU'></img> <span className='tdID' >AF_1472322456</span></td>
            <td>Revanth</td>
            <td>99XXXXX882</td>
            <td>MWC1</td>
            <td>March 15, 2023</td>
            <td> <i class="bi bi-arrow-repeat tdRenew"></i></td>
            <td> <i class="bi bi-wechat tdSms"></i></td>
          </tr>
          <tr>
            <td>5</td>
            <td><img className='tdImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt36Uj8dW3v-dtWAQ-UhwPs0RZZdRfg-RxJg&usqp=CAU'></img> <span className='tdID' >AF_1472322456</span></td>
            <td>Suri</td>
            <td>99XXXXX467</td>
            <td>MWC1</td>
            <td>March 15, 2023</td>
            <td> <i class="bi bi-arrow-repeat tdRenew"></i></td>
            <td> <i class="bi bi-wechat tdSms"></i></td>
          </tr>
          <tr>
            <td>6</td>
            <td><img className='tdImage' src='https://www.drupal.org/files/styles/drupalorg_user_picture_large/public/user-pictures/picture-107158-1586362139.jpg?itok=ATKoB58n'></img> <span className='tdID' >AF_1472322456</span></td>
            <td>Manoj</td>
            <td>99XXXXX224</td>
            <td>MWC1</td>
            <td>March 10, 2023</td>
            <td> <i class="bi bi-arrow-repeat tdRenew"></i></td>
            <td> <i class="bi bi-wechat tdSms"></i></td>
          </tr>
                   
          {/* {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Sl}</td>
                <td>{val.MembershipID}</td>
                <td>{val.Name}</td>
                <td>{val.Phone}</td>
                <td>{val.Membership}</td>
                <td>{val.Date}</td><td>{val.name}</td>
                <td>{val.RenewNow}</td>
                <td>{val.SendSMS}</td>
              </tr>
            )
          })} */}
        </table>
      </div>
    </div>
  )
}

export default ExpiredMembership