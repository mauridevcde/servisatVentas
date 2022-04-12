export function loginForm() {
    return/*html */ `
			
			<div class="container mt-5 ">
				<div class="d-flex flex-column marginCenter">
					<div id="signin" class="text-center ">
						<div class=" form-group border">
							<form class="form-signin ">
								<img class="mb-3 mt-3" src="img/logo.png" width="200">
								<h3 class="mb-3 font-weight-normal">Iniciar sesión</h3>
								<div class="row d-flex justify-content-center">
									<div class="col-8">
	    								<input type="email" id="inputEmail" class="mb-2 form-control" placeholder="Correo" required autofocus>
    		                            <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required>
									</div>
								</div>
									

								<div class="checkbox mt-3 mb-3">
									<label>
										<input type="checkbox" value="remember-me"> Recordar
									</label>
								</div>
							</form>
							<div class="form-signin">
								<button class="btn btn-lg btn-primary  mb-3" id="enterBtn">Entrar</button>
								
							</div>
						</div>
						<p class="mt-5 mb-3 text-muted">&copy; Servisat 2021</p>
					</div>	

				</div>	
			
				
			</div>
			
			
			`;
}


export function toast(props) {
    return /* html */`
    <div aria-live="polite" aria-atomic="true" style="position: relative;" >
		<div id="myToast" class="toast" style="position: absolute; top: 0; right: 0;" data-autohide="true">
			    <div class="toast-header bg-success">
			      <img src="" class="rounded mr-2" alt="">
			      <strong class="mr-auto text-white">${props.title}</strong>
			      <small class="text-white">${props.id}</small>
			      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			      </button>
			    </div>
                
			    <div class="toast-body">
			     
			    </div>
		</div>
	</div>
            ` /*  ${props.content} */;
}


//BARRAS DE NAVEGACION
export function navBarPrincipal(props) {

    return /*html */ `
    <div class="container">
        <div class="card text-center" style="margin-top: 15%;">
            <div class="card-header text-muted">
            <i class="fas fa-home"></i> INICIO
                </div>
            <div class="card-body">
                <img src="img/logo.png" width="240" />

                <p class="card-text"></p>
                <a  id="listaVenta" class="btn btn-success  btn-lg text-white" ><i class="fas fa-plus"></i><br> Lista Venta</a>
                <a  id="newEnvioBtn" class="btn btn-info  btn-lg text-white" ><i class="fas fa-plus"></i><br> Nueva Venta</a>
                <a id="stateEnvioBtn" class="btn btn-primary  btn-lg text-white"><i class="fas fa-truck"></i><br> Estado de Envíos</a>
                <a id="systBtn" class="btn btn-warning  btn-lg text-white"><i class="fas fa-cogs"></i><br> Sistema</a>
                <a id="logoutBtn" class="btn btn-danger  btn-lg text-white" href="#"><i class="fas fa-sign-out-alt"></i><br> Cerrar sesión </a>
                
                </div>
                    <div class="card-footer text-muted">
                        Usuario: dav@dav.com
                    </div>
            </div>

        </div>
    
    </div>
    ` /* ${props.userEmail} */;
}

export function navbar(props) {
    return /*html */ `
    
    <div>

      <nav class="navbar navbar-expand-lg navbar-light navegacion-Prin" style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
  
        <a class="navbar-brand" >
          <img id="logoHomeBtn" src="../img/logo.png" width="200" class="d-inline-block align-center" alt="">
          <img src="img/logo.png" width="200px" />
        </a>
        
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                 <a  id="listaVentaBtn" class="btn btn-success  btn-lg text-white me-2" ><i class="fas fa-plus" style="opacity: 85%;"></i> Lista Venta</a>
                <a  id="EnvioBtn" class="btn btn-info  btn-lg text-white me-2" ><i class="fas fa-plus" style="opacity: 85%;"></i> Nueva Venta</a>
                <a id="stateBtn" class="btn btn-primary  btn-lg text-white me-2"><i class="fas fa-truck" style="opacity: 85%;"></i> Estado de Envíos</a>
                <a id="sistematBtn" class="btn btn-warning  btn-lg text-white me-2"><i class="fas fa-cogs" style="opacity: 85%;"></i> Sistema</a>
                <a id="exitBtn" class="nav-item nav-link btn btn-danger text-white me-2" href="#"><i class="fas fa-door-open"></i></i> Atras</a>  
            </ul>
        </div>
        <div class="ms-auto p-2 bd-highlight" >
              Usuario
        </div>
      </nav>
    </div>  
    `;
}

export function buscarClientesNav(props) {
    return /*html*/ `
    <div class="container">
        <div class="row d-flex justify-content-center">
          
            <div class="col-3">
              <div class="form-group">
                <input list="searchClienteList" type="text" class="form-control" id="searchCliente" placeholder="Buscar Cliente">
                <datalist id="searchClienteList">
                  
                </datalist>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <input list="searchCiudadList" type="text" class="form-control" id="searchCiudad" placeholder="Buscar Ciudad">
                <datalist id="searchPlanList">
                  
                </datalist>
						  </div>
					  </div>
            <div class="col-3">
            <div class="form-group">
              <input list="searchProvinciaList" type="text" class="form-control" id="searchProvincia" placeholder="Buscar Provincia">
              <datalist id="searchProvinciaList">
                
              </datalist>
            </div>
          </div>
					

          <div class="col">
            <div class="d-flex justify-content-start">
              <button type="button" id="btnNuevoCliente" class="btn btn-success  btn btnNvoCliente" style="margin-bottom:15px;" data-toggle="modal"><i class="fas fa-plus"></i> Buscar </button>
            </div>
					</div>

          </div>

				</div>
      `;
}
export function tablaVentas(props) {
    return /*html*/ `
    <div class="container-fluid  mt-4">
    <h4 class="text-center">Lista de Clientes/Planes</h4>

    <table  class="table table-striped table-bordered table-hover table-sortable" style="width:100%" >
    
    <thead class="formBG text-center">
    
      <tr>
        <th scope="col">#</th>
        <th scope="col">Cliente</th>
        <th scope="col">Ciudad</th>
        <th scope="col">Provincia</th>
        <th scope="col"># Planes</th>
        <th scope="col">Planes</th>
        <th scope="col"># Equipos</th>
        <th scope="col">Equipos</th>
        <th scope="col">Estado de Cuenta</th>
        <th scope="col">Acciones</th>
      </tr> 
    </thead>
    <tbody class="text-center">
    <td>1</td>
    <td>Mauricio</td>
    <td>Ciudad del este</td>
    <td>Alto Parana</td>
    <td>3</td>
    <td>3</td>
    <td>7</td>
    <td>6</td>
    <td><i class="fas fa-ticket-alt fa-2x text-success" title="Pagado"></i></td>
    <td class="d-flex justify-content-center">
        <button id=1 data-id = 0  class="btn btn-warning btnEditar mr-2" title="Editar" ><i class="fas fa-user-edit"style="font-size: 20px;"></i>
        <button id= 0 data-id = 0 class="btn btn-info historicoPago mr-2 " title="Historial de Pagos"><i class="fas fa-history" style="font-size: 20px;"></i></button>
        <button id= 0 data-id = 0 class="btn btn-primary estadoCuenta mr-2 " title="Pasar Estado"><i class="fas fa-ticket-alt" style="font-size: 20px;"></i></button>
        <button id= 0 data-id = 0 class="btn historicoPagoPlan mr-2 " title="Pago Planes" >
    </td>
    </tbody>
    <tbody class="text-center">
    <td>1</td>
    <td>Mauricio</td>
    <td>Ciudad del este</td>
    <td>Alto Parana</td>
    <td>3</td>
    <td>3</td>
    <td>7</td>
    <td>6</td>
    <td><i class="fas fa-ticket-alt fa-2x text-success" title="Pagado"></i></td>
    <td class="d-flex justify-content-center">
        <button id=1 data-id = 0  class="btn btn-warning btnEditar mr-2" title="Editar" ><i class="fas fa-user-edit"style="font-size: 20px;"></i>
        <button id= 0 data-id = 0 class="btn btn-info historicoPago mr-2 " title="Historial de Pagos"><i class="fas fa-history" style="font-size: 20px;"></i></button>
        <button id= 0 data-id = 0 class="btn btn-primary estadoCuenta mr-2 " title="Pasar Estado"><i class="fas fa-ticket-alt" style="font-size: 20px;"></i></button>
        <button id= 0 data-id = 0 class="btn historicoPagoPlan mr-2 " title="Pago Planes" >
    </td>
    </tbody>
    <tbody class="text-center">
    <td>1</td>
    <td>Mauricio</td>
    <td>Ciudad del este</td>
    <td>Alto Parana</td>
    <td>3</td>
    <td>3</td>
    <td>7</td>
    <td>6</td>
    <td><i class="fas fa-ticket-alt fa-2x text-danger" title="Pagado"></i></td>
    <td class="d-flex justify-content-center">
        <button id=1 data-id = 0  class="btn btn-warning btnEditar mr-2" title="Editar" ><i class="fas fa-user-edit"style="font-size: 20px;"></i>
        <button id= 0 data-id = 0 class="btn btn-info historicoPago mr-2 " title="Historial de Pagos"><i class="fas fa-history" style="font-size: 20px;"></i></button>
        <button id= 0 data-id = 0 class="btn btn-primary estadoCuenta mr-2 " title="Pasar Estado"><i class="fas fa-ticket-alt" style="font-size: 20px;"></i></button>
        <button id= 0 data-id = 0 class="btn historicoPagoPlan mr-2 " title="Pago Planes" >
    </td>
    </tbody>
  </table>
 

  </div> `;

}

export function headerListaTrack() { 
    return /* html */`
    <nav aria-label="breadcrumb ">
        <ol class="breadcrumb navegacionColor rounded mt-2" >
            <li class="breadcrumb-item active text-light m-auto" aria-current="page" >
                <h4 class="text-center m-2"><i class="fas fa-truck"></i> Estado de Envíos</h4>
            </li>
        </ol>
    </nav>
    `;
}

export function headerListaVenta() { 
    return /* html */`
    
    <nav aria-label="breadcrumb ">
        <ol class="breadcrumb navegacionColor rounded mt-2" >
            <li class="breadcrumb-item active text-light m-auto" aria-current="page" >
                <h4 class="text-center m-2"><i class="fas fa-truck"></i> Lista Ventas</h4>
            </li>
        </ol>
    </nav>
    `;
}
export function trackingTables(props) {
    return /* html */`
    <div>
        <div class="container ">
            <article class="card">
                <header class="card-header azulcito text-light">Pedido de Cliente: Test Cliente  </header>
                <div class="card-body">
                    <h6>Pedido N°: OD45345345435</h6>
                    <article class="card">
                        <div class="card-body row">
                            <div class="col"> <strong>Tiempo de entrega:</strong> <br>29 nov 2021 </div>
                            <div class="col"> <strong>Cliente:</strong> <br> Test Cliente </div>
                            <div class="col"> <strong>Teléfono:</strong> <br><i class="fas fa-phone-alt"></i> +1598675986 </div>
                            <div class="col"> <strong>Estado:</strong> <br> Entregado a la Transportadora </div>
                            <div class="col"> <strong>Boleta N°:</strong> <br> BD045903594059 </div>
                        </div>
                    </article>
                    <div class="track">
                        <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span
                                class="text">Envío confirmado</span> </div>
                        <div class="step active"> <span class="icon"> <i class="fa fa-user"></i> </span> <span
                                class="text"> Entregado a la Transportadora</span> </div>
                        <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span
                                class="text"> En Camino </span> </div>
                        <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">
                                Entregado</span> </div>
                    </div>
                    <hr>
                    
                    <h4 class="text-center">Detalles del Envío</h4>
                   <div class="mt-3 mb-3"> 
                        <div class="row">
                            <div class="col-12">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div>                            
                            </div>
                        </div>    
                   </div>
                </div>
            </article>
        </div>
    </div>
            
    `;
}

export function headerForm() {
    return /* html */`
    <nav aria-label="breadcrumb ">
    <ol class="breadcrumb navegacionColor rounded mt-2">
        <li class="breadcrumb-item active text-light m-auto" aria-current="page">
            <h4 class="text-center m-2"><i class="fas fa-plus"></i> Nuevo Envío</h4>
        </li>
    </ol>

    
</nav>
    `;
}

export function envioForm() {
    return /* html */`
    <div class="container-fluid">
        <div class="container bg-light mt-3">
                <h1>Servisat Orden de Venta</h1>

                <div class="d-flex justify-content-center  rounded navegacionColor text-light">
                    <h4 class="text-center">Datos del Cliente</h4>

                </div>
            
                   <div class="row">

                        <div class="col-12">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Id Cliente</label>
                                <input type="email" class="form-control" id="idCliForm" aria-describedby="emailHelp">

                            </div>
                        </div>

                        <div class="col-12">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Cliente</label>
                                <input type="email" class="form-control" id="clienteForm" aria-describedby="emailHelp">
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Telefono</label>
                                <input type="email" class="form-control" id="cliTelForm" aria-describedby="emailHelp">
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Ciudad</label>
                                <input type="email" class="form-control" id="ciudadForm" aria-describedby="emailHelp">
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Provincia</label>
                            <input type="email" class="form-control" id="provinciaForm" aria-describedby="emailHelp">
                            </div>
                        </div>

                        </div>
                    
                    <!-- pedido -->
                    <div class="m-3"></div>
                    <div class="d-flex justify-content-center rounded navegacionColor text-light">
                        <h4 class="text-center">Datos del Pedido</h4>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Producto</label>
                                <input type="email" class="form-control" id="productoForm" aria-describedby="emailHelp">

                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Cantidad</label>
                                <input type="email" class="form-control" id="cantidadForm" aria-describedby="emailHelp">

                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Precio</label>
                                <input type="email" class="form-control" id="precioForm" aria-describedby="emailHelp">

                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Código del Producto</label>
                                <input type="email" class="form-control" id="codProduForm" aria-describedby="emailHelp">

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Pago</label>
                                <input type="email" class="form-control" id="pagoForm" aria-describedby="emailHelp">

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Saldo</label>
                                <input type="email" class="form-control" id="saldoForm" aria-describedby="emailHelp">
                            </div>
                        </div>
                    </div>

                    <!-- tracking -->
                    <div class="m-3"></div>
                    <div class="d-flex justify-content-center rounded navegacionColor text-light">
                        <h4 class="text-center">Datos del Tracking</h4>

                    </div>
                

                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Empresa</label>
                                <input type="email" class="form-control" id="empresaForm" aria-describedby="emailHelp">

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Teléfono</label>
                                <input type="email" class="form-control" id="telefonoForm" aria-describedby="emailHelp">

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Whatsapp</label>
                                <input type="email" class="form-control" id="whatsappForm" aria-describedby="emailHelp">

                            </div>
                        </div>

                        <div class="col-12">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Emp. Recep.</label>
                                <input type="email" class="form-control" id="recepForm" aria-describedby="emailHelp">

                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Emp. Destino.</label>
                                <input type="email" class="form-control" id="destinoForm" aria-describedby="emailHelp">

                            </div>
                        </div>
                        <div class="col-5">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Factura Nro.</label>
                                <input type="email" class="form-control" id="facturaNroForm" aria-describedby="emailHelp">

                            </div>
                        </div>
                        <div class="col-5">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Envío Nro.</label>
                                <input type="email" class="form-control" id="envioNroForm" aria-describedby="emailHelp">

                            </div>
                        </div>
                        <div class="col-2">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Pago Destino.</label>
                                <br>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                        value="true">
                                    <label class="form-check-label" for="inlineRadio1">Si</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                        value="false" checked>
                                    <label class="form-check-label" for="inlineRadio2">No</label>
                                </div>
                            </div>

                    </div>
                        <div class="col-12">
                            <div class="mb-3">
                                <div class="mt-3 w-100">
                                    <div class="card shadow-sm w-100">
                                        <div class="card-header d-flex justify-content-between">
                                            <h4>Imágenes</h4>
                                            <form class="form" id="form">
                                                <input type="file" name="Image" id="image" multiple="" class="d-none">
                                                <button class="btn btn-sm btn-primary" type="button"
                                                    id="selectIMG">Seleccionar Imágen</button>
                                            </form>
                                        </div>
                                        <div class="card-body d-flex flex-wrap justify-content-start" id="container">
                                            <!-- Image will be show here-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div class="d-flex justify-content-center mb-4">
                        <button type="button" class="btn btn-primary me-2" id="btnGuardarEnvioForm"><i class="fas fa-check"></i> Guardar</button>
                        <button type="button" class="btn btn-danger" id="btnCancelarEnvioForm"><i class="fas fa-times"></i> Cancelar</button>
                    </div>
                
            </div>
    </div>
    `;
}