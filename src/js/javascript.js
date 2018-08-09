function zapatos(){
$.confirm({
    title: '<strong>Ingrese su talle</strong>',
    content: '' +
    '<form action="" class="formName">' +
    '<div class="form-group">' +
    '<label>Talle</label>' +
    '<input type="number" placeholder="Tamaño" class="name form-control" required />' +
    '</div>' +
    '</form>',
    buttons: {
        formSubmit: {
            text: 'Enviar',
            btnClass: 'btn-blue',
            action: function () {
                var talle = this.$content.find('.name').val();
                if(!talle){
                    $.alert('Debe ingresarr algún número');
                    return false;
                }else{
  
                	$.confirm({
				    title: 'Productos',
				    content: 'Ir a productos Adidas',
				    buttons: {
				        confirm: function () {
				           window.location ="contact.html";
				        },
				        cancel: function () {
				            $.alert('Canelado!');
				        },
				        somethingElse: {
				            text: 'Quedarme Acá',
				            btnClass: 'btn-blue',
				            keys: ['enter', 'shift'],
				            action: function(){
				                $.alert('parece que querés seguir navengado');
				            }
				        }
				    }
				});
               
            	}

            	if(talle < 20){
            		$.alert('No hay talles menores.');
            	}


            }
        },
        cancel: function () {
            //close
        },
    },
    onContentReady: function () {
        // bind to events
        var jc = this;
        this.$content.find('form').on('submit', function (e) {
            // if the user submits the form by pressing enter in the field.
            e.preventDefault();
            jc.$$formSubmit.trigger('click'); // reference the button and click it
        });
    }
});
}

function contacto(){
	$.alert({
	    title: '<strong>Adidas Originals</strong>',
	    content: 'Av. Santa Fe 5200 Capital Federal, Buenos Aires. Tel: <button type="button" class="btn btn-primary">4362-4895</button> / <button type="button" class="btn btn-secondary">4362-5896</button>.',
	});
}

function trabajeConNosotros(){
    $.confirm({
        title: 'Enviar tu CV',
        content: '' +
        '<form action="" class="formName">' +
        '<div class="form-group">' +
        '<label>Ingrese su nombre</label>' +
        '<input type="text" placeholder="Escriba su nombre" class="name form-control" required /><br><input type="file" class="btn btn-primary" id="fileUp-input" multiple>' +
        '</div>' +
        '</form>',
        buttons: {
            formSubmit: {
                text: 'Enviar',
                btnClass: 'btn-blue',
                action: function () {
                    var name = this.$content.find('.name').val();
                    if(!name){
                        $.alert('El nombre tiene que ser válido');
                        return false;
                    }
                    $.alert('Tu nombre es ' + name);
                }
            },
            cancel: function () {
                //close
            },
        },
        onContentReady: function () {
            // bind to events
            var jc = this;
            this.$content.find('form').on('submit', function (e) {
                // if the user submits the form by pressing enter in the field.
                e.preventDefault();
                jc.$$formSubmit.trigger('click'); // reference the button and click it
            });
        }
    });
}


