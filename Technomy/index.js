function showDetails() {
    const Dropdown = document.getElementById('Dropdown');
    const Details = document.getElementById('Details');

    const details = {
        sal: {
            name: 'SAL Hospital',
            phone: '7894561230',
            hours: '24 hours',
            address: 'Doordarshan Tower, SAL Hospital Cross roads, opposite Drive In Road, Nilmani Society, Thaltej, Ahmedabad, Gujarat 380054',
            description: 'SAL Hospital is one of Ahmedabad’s oldest and best multispecialty hospital. The team of specialist doctors and support staff at SAL Hospital has been envisioned with the aim of offering the highest standards of medical care along with clinical research and medical education',
            image: './image/sal.jpg'
            
        },
        apollo: {
            name: 'Apollo Hospital',
            phone: '8401801066',
            hours: '24 hours',
            address: 'Plot No.1A, Bhat GIDC Estate Dist. Airport Gandhinagar Road, Dist. Gandhinagar, Ahmedabad - 382428 Gujarat',
            description: 'Established by Dr Prathap C Reddy in 1983, Apollo Healthcare has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Apollo Hospitals has touched more than 120 million lives from over 120 countries, offering the best clinical outcomes.',
            image: './image/apollo.jpg'
        },
        CIMS: {
            name: 'CIMS Hospital',
            phone: '909995527',
            hours: '24 hours',
            address: ' Off, Science City Rd, Science City, Panchamrut Bunglows II, Sola, Ahmedabad, Gujarat 380060',
            description: 'Marengo CIMS Hospital is a 350-bedded multi-super specialty, modern, patient–friendly “Green Hospital “providing a range of outpatient and inpatient preventive, diagnostic and treatment services. The hospital provides world-class treatment and excellent healthcare services for most diseases and medical problems with one of the highest success rates in India.',
            image: './image/cims.jpg'
        }
       
    };

    const selectedHospital = Dropdown.value;

    if (selectedHospital) {
        const hospital = details[selectedHospital];
        Details.innerHTML = `
            
            <h2>${hospital.name}</h2>
            <p><strong>Phone:</strong> ${hospital.phone}</p>
            <p><strong>Hours:</strong> ${hospital.hours}</p>
            <p><strong>Address:</strong> ${hospital.address}</p>
            <p><strong>Description:</strong> ${hospital.description}</p>
            <img src="${hospital.image}" alt="${hospital.name}">
            
        `;
    } else {
        hospitalDetails.innerHTML = '';
    }
}