const app = Vue.createApp({});

app.component('header-component', {
template: `
<header class="bg-success text-white py-3">
        <div class="container">
            <div class="header-content d-flex justify-content-between align-items-center">
                <h1 class="display-5">Verdulería El Huerto</h1>
                <nav>
                    <a href="productos.html" class="text-white">Productos</a>
                    <a href="index.html" class="text-white">Cerrar Sesion</a>
                </nav>
            </div>
        </div>
</header>
`
});

app.component('tarjeta-component', {
template: `
    <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/300" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Productos Frescos</h5>
                            <p class="card-text">Descubre nuestra selección de productos frescos y de calidad.</p>
                            <a href="#" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/300" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Ofertas Especiales</h5>
                            <p class="card-text">Aprovecha nuestras promociones en frutas y verduras seleccionadas.</p>
                            <a href="#" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/300" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Contáctanos</h5>
                            <p class="card-text">¿Tienes alguna pregunta? ¡Contáctanos ahora mismo!</p>
                            <a href="#" class="btn btn-primary">Contactar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`
});


app.component('footer-component', {
template: `
    <footer class="bg-dark text-white text-center py-3">
        <div class="container">
            <span>© 2024 Verdulería Verde Fresco. Todos los derechos reservados.</span>
        </div>
    </footer>
`
});



// Montar la aplicación en el elemento #app
app.mount('#app');
