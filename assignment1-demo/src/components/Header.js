import React, { useState, useEffect } from "react";

const Header = () => {


  

    return (

        <div className="header">
        {/* Would contain links to other pages such as: 
          - login page
          - sign-up page
          - sign-in page
          - profile page 
          - (extension; 
            - profile management
            - post)
        */}

        <p className="logo">Logo</p>

        <ul>
          <li>sign in</li>
          <li>sign up</li>
          <li>post</li>
          <li>profile page</li>
        </ul>
        
      </div>

    )
}

export default Header;