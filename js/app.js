//Menu mobile

const showMenu = document.getElementById('bx');



function toggleMenu () {

 const nav = document.getElementById('menu-mobile');
    if (nav.classList.toggle('active')) {
        showMenu.innerHTML = ('<img src="./svg/close.svg" alt="" srcset="">')

    }
    else {
        showMenu.innerHTML = ('<img src="./svg/menu.svg" alt="" srcset="">')
    }    
}



showMenu.addEventListener('click',toggleMenu,close)

// Step bar

function stepClicked(stepNumber) {
   
    var steps = document.querySelectorAll(".step");
    for (var i = 0; i < steps.length; i++) {
      if (i < stepNumber) {
        steps[i].classList.add("active-2");
        
       
      } else {
        steps[i].classList.remove("active-2");
        
      }
    }

   
  }


  //novo 

  const steps = document.querySelectorAll('.step');
const texts = document.querySelectorAll('.step-description');

steps.forEach((step, index) => {
  step.addEventListener('click', () => {
    // Remove a classe 'active' de todos os passos
    steps.forEach(step => {
      step.classList.remove('active');
    });

    // Adiciona a classe 'active' ao passo clicado
    step.classList.add('active');

    // Esconde todos os textos
    texts.forEach(text => {
      text.style.display = 'none';
    });

    // Mostra o texto correspondente ao passo clicado
    texts[index].style.display = 'block';
  });
});



// Formulário 

var currentStep = 1;

		function nextStep(step) {
			if (step == 1) {
				if (document.getElementById("name").value == "") {
					alert("Por favor, preencha o nome.");

					return;	
				}

				if (document.getElementById("email").value == "") {
					alert("Por favor, preencha o e-mail.");

					return;
					
				}

				if (document.getElementById("tel").value == "") {
					alert("Por favor, preencha o seu whatsapp.");

					return;
					
				}

			}

			// Esconde o passo atual e mostra o próximo
			document.getElementById("step-" + currentStep).style.display = "none";
			currentStep++;
			document.getElementById("step-" + currentStep).style.display = "block";
		}

		function prevStep(step) {
			// Esconde o passo atual e mostra o anterior
			document.getElementById("step-" + currentStep).style.display = "none";
			currentStep--;
			document.getElementById("step-" + currentStep).style.display = "block";
		}

		function submitForm() {
			// Validação do passo 3
			if (document.getElementById("message").value == "") {
				alert("Por favor, preencha a mensagem.");
				return;
			}

			// Envio do formulário
			alert("Formulário enviado com sucesso!");

			var params = {
				name: document.getElementById("name").value,
				email: document.getElementById("email").value,
				tel: document.getElementById("tel").value,
				enterprise: document.getElementById("enterprise").value,
				project: document.getElementById("project").value,
				message: document.getElementById("message").value,
				term: document.getElementById("term").value
			}
		
			const serviceID = "service_ocojboc";
			const templateID = "template_xc04l31"
			emailjs.send(serviceID,templateID,params)
			
		}

  
// máscara telefone input //

const handlePhone = (event) => {
	let input = event.target
	input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
	if (!value) return ""
	value = value.replace(/\D/g,'')
	value = value.replace(/(\d{2})(\d)/,"($1) $2")
	value = value.replace(/(\d)(\d{4})$/,"$1-$2")
	return value
  }

  // envio do email //

  function sendMail() {
	
  }


 

 


   


