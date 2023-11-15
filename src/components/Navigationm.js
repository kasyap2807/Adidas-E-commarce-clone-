import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to='/'><img className='img2' src='data:image/png;base64,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'></img></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link to='/' class="nav-link active" aria-current="page" href="#"><strong>home</strong></Link>
        </li>
      <li class="nav-item">
          <Link to='/MEN' class="nav-link active" aria-current="page" href="#"><strong>men</strong></Link>
        </li>
        <li class="nav-item">
          <Link to='/WOMEN' class="nav-link active" aria-current="page" href="#"><strong>women</strong></Link>
        </li>
        <li class="nav-item">
          <Link to='/Kids' class="nav-link active" aria-current="page" href="#"><strong>kids</strong></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.adidas.co.in/superstar">ALL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">brands</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            collections
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigation