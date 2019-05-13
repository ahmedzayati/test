import React from 'react';
class Account extends React.Component{

  render() {
    
    return (
      <div >
        <div class="container">
    <div class="row">
        <div class="col-12 col-lg-4 col-xl-3 order-2 order-lg-1">
            <div class="card mb-3">
                <div class="card-body text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Kathy Davis" class="img-fluid rounded-circle mb-2" width="128" height="128"/>
                    <h4 class="card-title mb-0">Kathy Davis</h4>
                    <div class="text-muted mb-2">Front-end Developer</div>

                    <div>
                        <a class="btn btn-primary btn-sm" href="#">Follow</a>
                        <a class="btn btn-primary btn-sm" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg> Message</a>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-header">
                    <div class="card-actions float-right">
                        <div class="dropdown show">
                            <a href="#" data-toggle="dropdown" data-display="static">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <h5 class="card-title mb-0">About</h5>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mb-0">
                        <li class="mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home feather-sm mr-1">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg> Lives in <a href="#">San Francisco, SA</a></li>
                        <li class="mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase feather-sm mr-1">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg> Works at <a href="#">GitHub</a></li>
                        <li class="mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin feather-sm mr-1">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg> From <a href="#">Boston</a></li>
                    </ul>
                </div>
            </div>

            <div class="card mb-3">
                <div class="card-header">
                    <div class="card-actions float-right">
                        <div class="dropdown show">
                            <a href="#" data-toggle="dropdown" data-display="static">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <h5 class="card-title mb-0">Following</h5>
                </div>
                <div class="card-body">

                   

                    <hr class="my-2" />

                    <div class="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" class="rounded-circle mr-2" alt="John Smit"/>
                        <div class="media-body">
                            <p class="my-1"><strong>John Smit</strong></p>
                            <a class="btn btn-sm btn-outline-primary" href="#">Unfollow</a>
                        </div>
                    </div>

                    <hr class="my-2"/>

                    <div class="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" class="rounded-circle mr-2" alt="Marie Salter"/>
                        <div class="media-body">
                            <p class="my-1"><strong>Marie Salter</strong></p>
                            <a class="btn btn-sm btn-outline-primary" href="#">Unfollow</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="col-12 col-lg-8 col-xl-6 order-1 order-lg-2">
            <div class="card">
                <div class="card-body h-100">

                    <div class="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="56" height="56" class="rounded-circle mr-3" alt="Kathy Davis"/>
                        <div class="media-body">
                            <small class="float-right text-navy">5m ago</small>
                            <p class="mb-2"><strong>Kathy Davis</strong></p>
                            <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</p>

                            <div class="row no-gutters mt-1">
                                <div class="col-6">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="img-fluid pr-1" alt="Unsplash"/>
                                </div>
                                <div class="col-6">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="img-fluid pl-1" alt="Unsplash"/>
                                </div>
                            </div>

                            <small class="text-muted">Today 7:51 pm</small>
                            <br/>
                            <a href="#" class="btn btn-sm btn-danger mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart feather-sm">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg> Like</a>

                            <div class="media mt-3">
                                <a class="pr-2" href="#">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" class="rounded-circle mr-2" alt="Marie Salter"/>
                                </a>
                                <div class="media-body">
                                    <p class="text-muted">
                                        <strong>Marie Salter</strong>: Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <hr/>
             
                  
                    
                </div>
            </div>
        </div>

        <div class="col-12 col-lg-12 col-xl-3 order-3 order-lg-3">
            <div class="card">
                <div class="card-header">
                    <div class="card-actions float-right">
                        <div class="dropdown show">
                            <a href="#" data-toggle="dropdown" data-display="static">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <h5 class="card-title mb-0">Activities</h5>
                </div>
                <div class="card-body h-100">

                    <div class="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" class="rounded-circle mr-2" alt="Kathy Davis"/>
                        <div class="media-body">
                            <small class="float-right text-navy">5m ago</small>
                            <strong>Kathy Davis</strong> started following <strong>Marie Salter</strong>
                            <br/>
                            <small class="text-muted">Today 7:51 pm</small>
                            <br/>
                        </div>
                    </div>

  

                    <hr/>
                    <div class="media">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" width="36" height="36" class="rounded-circle mr-2" alt="Marie Salter"/>
                        <div class="media-body">
                            <small class="float-right text-navy">1h ago</small>
                            <strong>Marie Salter</strong> posted a new blog
                            <br/>

                            <small class="text-muted">Today 6:35 pm</small>
                        </div>
                    </div>

                    <hr/>
                    
                   
                    
                    <a href="#" class="btn btn-primary btn-sm btn-block">Load more</a>
                </div>
            </div>
        </div>
    </div>

</div>
      </div>
    );
  }
}

export default (Account);